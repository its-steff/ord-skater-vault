import { GOOGLE_EMAIL } from '$env/static/private';
import transporter from '$lib/emailSetup.server.js';
import { fail } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { storeSkaterList } from '$lib/store';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const sendEmail = async (message) => {
	await new Promise((resolve, reject) => {
		transporter.sendMail(message, (err, info) => {
			if (err) {
				console.error(err);
				reject(err);
			} else {
				resolve(info);
			}
		});
	});
};

export const actions = {
	requestnumber: async ({ request }) => {
		//First get the list of registerd skaters
		let skaterList = get(storeSkaterList);

		//Get the form data
		const formData = await request.formData();
		const senderName = formData.get('user_name');
		const senderDerbyName = formData.get('user_derby_name');
		const inputNumber = formData.get('requested_number');

		//Check if the requested number is already taken
		let match;

		if (skaterList) {
			match = skaterList.find((skater) => skater.skaterNumber === inputNumber);
			if (match) {
				//Return fail if the requested number is already taken
				return fail(400, { inputNumber, incorrect: true });
			} else if (!match) {
				//construct the email
				const html = `<p>${senderName} wants to request this number: ${inputNumber} and this derby name: ${senderDerbyName}</p>`;

				const message = {
					to: GOOGLE_EMAIL,
					subject: 'Derby number request',
					text: inputNumber,
					html: html
				};

				//send the email
				await sendEmail(message);
				return {
					success: true
				};
			}
		}
	}
};

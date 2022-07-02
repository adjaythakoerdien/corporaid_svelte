export const post = async ({ request }) => {
	const body = await request.formData();
	const firstName = body.get('firstName');
	const lastName = body.get('lastName');
	const email = body.get('email');
	const onderwerp = body.get('onderwerp');
	const text = body.get('text');

	// https://docs.google.com/forms/d/e/1FAIpQLSfusXUBcw4ZROD4rWEU16yE8vAede-NPPz6sM9S7PhKu0n9Vw/viewform?usp=pp_url&entry.676633944=adjay&entry.1174013904=thakoerdien&entry.454738196=onderwerp&entry.1148281994=vraag
	// https://docs.google.com/forms/d/e/1FAIpQLSfusXUBcw4ZROD4rWEU16yE8vAede-NPPz6sM9S7PhKu0n9Vw/viewform?usp=pp_url&entry.676633944=adjay&entry.1174013904=thakoerdien&entry.454738196=onderwerp&entry.1148281994=vraag

	// https://docs.google.com/forms/d/e/1FAIpQLSemQ7mjevyBjkbGyybzRBsFcQTPJrewJpCuLQmeukrinohhww/formResponse?usp=pp_url&entry.2005620554=${firstName}&entry.1045781291=${lastName}&entry.1065046570=${email}&entry.1166974658=${onderwerp}&entry.839337160=${text}

	const res = await fetch(
		`https://docs.google.com/forms/d/e/1FAIpQLSfusXUBcw4ZROD4rWEU16yE8vAede-NPPz6sM9S7PhKu0n9Vw/formResponse?
		usp=pp_url&entry.1789629508=${email}&entry.676633944=${firstName}&
		entry.1174013904=${lastName}&entry.454738196=${onderwerp}&entry.1148281994=${text}&submit=Submit`
	);

	console.log(res);
	if (res.status === 200) {
		return {
			status: 200,
			body: {
				massage: 'succes'
			}
		};
	} else {
		return {
			status: 404,
			body: {
				massage: 'failed'
			}
		};
	}
};

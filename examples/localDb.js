const moe = require('../src');

async function showMoeCounter() {
	try {
		const data = await moe.localDb.fetch({
			number: 1234567890,
			length: 10,
			theme: 'rule34',
			pixelated: true,
		});

		console.log(data);
	} catch (err) {
		console.error(err.message);
	}
}

showMoeCounter();

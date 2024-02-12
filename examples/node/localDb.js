const moecounter = require('../../src/index.js');

async function showMoeCounter() {
	try {
		const data = await moecounter.localDb.fetch({
			number: 1234567890,
			length: 10,
			theme: 'rule34',
			pixelated: true,
		});

		console.log(data);
	} catch (err) {
		console.error(err);
	}
}

showMoeCounter();

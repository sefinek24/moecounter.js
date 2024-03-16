const moecounter = require('../src');

async function showMoeCounter() {
	try {
		const data = await moecounter.local({
			number: 1234567890,
			length: 10,
			theme: 'rule34',
			pixelated: true,
			svg: false,
		});

		console.log(data);
	} catch (err) {
		console.error(err);
	}
}

showMoeCounter();

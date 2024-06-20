const moecounter = require('../src/index.js');

async function showMoeCounter() {
	try {
		const data = await moecounter.local({
			number: 1234567890,
			length: 10,
			theme: 'default',
			pixelated: true,
			svg: false
		});

		console.log(data);
	} catch (err) {
		console.error(err);
	}
}

showMoeCounter();
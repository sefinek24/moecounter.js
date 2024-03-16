const moecounter = require('../src');

async function showMoeCounter() {
	try {
		const data = await moecounter.remote({
			name: 'test-12345',
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

const moecounter = require('../src/index.js');

async function showMoeCounter() {
	try {
		const data = await moecounter.remote({
			name: 'test-12345',
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

async function getMoeCounterSvg() {
	try {
		const data = await moecounter.remote({
			name: 'test-12345',
			length: 10,
			theme: 'default',
			pixelated: true,
			svg: true
		});

		console.log(data);
	} catch (err) {
		console.error(err);
	}
}

showMoeCounter();
getMoeCounterSvg();
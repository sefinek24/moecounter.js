const moecounter = require('../../src/index.js');

async function showMoeCounter() {
	try {
		const data = await moecounter.remoteDb.fetch({
			name: 'test-12345',
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

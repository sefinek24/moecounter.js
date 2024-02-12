const moe = require('../src');

async function showMoeCounter() {
	try {
		const data = await moe.remoteDb.fetch({
			name: 'test-12345',
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

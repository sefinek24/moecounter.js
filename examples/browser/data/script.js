const localDbErrors = document.getElementById('localDb-errors');
const remoteDbErrors = document.getElementById('remoteDb-errors');

async function localDb() {
	// const updateButton = document.getElementById('updateCounter');
	// updateButton.disabled = true;

	try {
		const counterValue = document.getElementById('counterValue').value || 1234567890;
		const lengthValue = document.getElementById('lengthValue').value || 10;
		const theme = document.getElementById('theme').value;
		const pixelated = document.getElementById('pixelated').value === 'true';

		const moe = await moecounter.local({
			number: parseInt(counterValue, 10),
			length: parseInt(lengthValue, 10),
			theme: theme,
			pixelated: pixelated,
		});

		document.getElementById('localDb').src = moe.url;
		localDbErrors.textContent = 'None';

		document.getElementById('api-url').textContent = moe.url;
	} catch (err) {
		localDbErrors.innerHTML = `<b>${new Date().toLocaleTimeString()}:</b> ${err.response && err.response.data ? err.response.data : err.message }`;
	}
	/*
	finally {
		updateButton.disabled = false;
	}
	*/
}

async function remoteDb() {
	try {
		const moe = await moecounter.remote({
			name: 'npm-test-counter',
			length: 10,
			theme: 'rule34',
			pixelated: true,
		});

		document.getElementById('remoteDb').src = moe.url;
		remoteDbErrors.textContent = 'None';
	} catch (err) {
		remoteDbErrors.innerHTML = `<b>${new Date().toLocaleTimeString()}:</b> ${err.response && err.response.data ? err.response.data : err.message }`;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('counterValue').addEventListener('change', localDb);
	document.getElementById('lengthValue').addEventListener('change', localDb);
	document.getElementById('theme').addEventListener('change', localDb);
	document.getElementById('pixelated').addEventListener('change', localDb);

	const versionSpan = document.getElementById('version');
	versionSpan.textContent = `v${moecounter.version}`;

	localDb().then(() => console.log('localDb was successfully fetched'));
	remoteDb().then(() => console.log('remoteDb was successfully fetched'));
});
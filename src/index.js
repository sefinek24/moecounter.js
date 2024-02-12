const axios = require('axios');

/**
 * Asynchronous function to generate a Moe counter in SVG format.
 * @param {number} number - The number to be displayed.
 * @param {number} length - The length of the number to be displayed.
 * @param {string} theme - The theme of the Moe counter.
 * @param {boolean} pixelated - Whether to enable pixelation effect.
 * @returns {Promise<{svg: any, url: string}>} The SVG code of the generated image.
 */
async function localDb({ number = 0, length = 10, theme = 'rule34', pixelated = true }) {
	const params = { number, length, theme, pixelated };
	const fullUrl = axios.getUri({ url: 'https://api.sefinek.net/api/v2/moecounter', params });

	const response = await axios.get(fullUrl, {
		responseType: 'text',
	});

	return { url: fullUrl, svg: response.data };
}

/**
 * Asynchronous function to generate a Moe counter in SVG format.
 * @param {string} name - Unique name of the counter.
 * @param {number} length - The length of the number to be displayed.
 * @param {string} theme - The theme of the Moe counter.
 * @param {boolean} pixelated - Whether to enable pixelation effect.
 * @returns {Promise<{svg: any, url: string}>} The SVG code of the generated image.
 */
async function remoteDb({ name, length = 10, theme = 'rule34', pixelated = true }) {
	const params = { length, theme, pixelated };
	const fullUrl = axios.getUri({ url: `https://api.sefinek.net/api/v2/moecounter/@${name}`, params });

	const response = await axios.get(fullUrl, {
		responseType: 'text',
	});

	return { url: fullUrl, svg: response.data };

}

module.exports = {
	localDb: {
		fetch: localDb,
	},
	remoteDb: {
		fetch: remoteDb,
	},
};


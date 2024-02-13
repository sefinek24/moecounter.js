const axios = require('axios');
const { version } = require('../package.json');
const url = 'https://api.sefinek.net/api/v2/moecounter';

async function localDb({ number = 0, length = 10, theme = 'rule34', pixelated = true }) {
	const fullUrl = axios.getUri({ url, params: { number, length, theme, pixelated } });

	const response = await axios.get(fullUrl, { responseType: 'text' });
	return { url: fullUrl, svg: response.data };
}

async function remoteDb({ name, length = 10, theme = 'rule34', pixelated = true }) {
	const fullUrl = axios.getUri({ url: `${url}/@${name}`, params: { length, theme, pixelated } });

	const response = await axios.get(fullUrl, { responseType: 'text' });
	return { url: fullUrl, svg: response.data };
}

module.exports = {
	localDb: {
		fetch: localDb,
	},
	remoteDb: {
		fetch: remoteDb,
	},
	version,
};
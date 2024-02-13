const axios = require('axios');
const { name: packageName, version } = require('../package.json');
const apiUrl = 'https://api.sefinek.net/api/v2/moecounter';
const userAgent = `${packageName}/${version} (+https://github.com/sefinek24/moecounter.js)`;

function constructUrl(baseUrl, params) {
	const queryString = Object.entries(params)
		.map(([key, value]) => {
			if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
				return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
			} else {
				console.warn(`Warning: Parameter type '${key}' is not supported.`);
				return '';
			}
		})
		.filter(part => part.length > 0)
		.join('&');

	return `${baseUrl}?${queryString}`;
}

async function httpsGet(requestUrl, options = {}) {
	try {
		const response = await axios.get(requestUrl, {
			...options,
			headers: {
				'User-Agent': userAgent,
				...options.headers,
			},
		});

		return response.data;
	} catch (err) {
		console.error('HTTPS GET request failed:', err);
		throw err;
	}
}

async function fetchSvgData(baseUrl, queryParams) {
	try {
		const fullUrl = constructUrl(baseUrl, queryParams);
		const svgData = await httpsGet(fullUrl);
		return { url: fullUrl, svg: svgData };
	} catch (err) {
		console.error('Error fetching SVG data:', err);
		throw err;
	}
}

async function localDb(options) {
	return fetchSvgData(apiUrl, { ...options, number: options.number ?? 0 });
}

async function remoteDb(options) {
	const { name: counterName, ...restOptions } = options;
	return fetchSvgData(`${apiUrl}/@${counterName}`, restOptions);
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
const { name: packageName, version } = require('../package.json');
const apiUrl = 'https://api.sefinek.net/api/v2/moecounter';
const userAgent = `${packageName}/${version} (+https://github.com/sefinek24/moecounter.js)`;

const constructUrl = (baseUrl, params) => {
	const queryString = Object.entries(params)
		.filter(([, value]) => ['string', 'number', 'boolean'].includes(typeof value))
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
		.join('&');
	return `${baseUrl}?${queryString}`;
};

const httpsGet = async (requestUrl, options = {}) => {
	try {
		const response = await fetch(requestUrl, {
			method: 'GET',
			headers: {
				'User-Agent': userAgent,
				...options.headers,
			},
			...options,
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return await response.text();
	} catch (err) {
		console.error('HTTPS GET request failed:', err);
		throw err;
	}
};

const fetchSvgData = async (baseUrl, queryParams) => {
	const fullUrl = constructUrl(baseUrl, queryParams);
	if (!queryParams.svg) return { url: fullUrl };

	const svgData = await httpsGet(fullUrl);
	return { url: fullUrl, svg: svgData };
};

const local = async (options) => fetchSvgData(apiUrl, { number: 0, ...options });
const remote = async ({ name: counterName, ...restOptions }) => fetchSvgData(`${apiUrl}/@${counterName}`, restOptions);

module.exports = { local, remote, version };
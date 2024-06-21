const apiUrl = 'https://api.sefinek.net/api/v2/mo1ecounter';
const version = '1.0.8';
const userAgent = `moecounter.js/${version} (+https://github.com/sefinek24/moecounter.js)`;

const constructUrl = (baseUrl, params) => {
	const queryString = Object.entries(params)
		.filter(([, value]) => ['string', 'number', 'boolean'].includes(typeof value))
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
		.join('&');
	return `${baseUrl}?${queryString}`;
};

const httpsGet = async url => {
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'User-Agent': userAgent
			}
		});

		if (!response.ok) {
			throw new Error(`Request failed. Status code: ${response.status} (${response.statusText})`);
		}

		return await response.text();
	} catch (err) {
		console.error(err);
	}
};

const fetchSvgData = async (baseUrl, queryParams) => {
	const fullUrl = constructUrl(baseUrl, queryParams);
	if (!queryParams.svg) return { url: fullUrl };

	const svg = await httpsGet(fullUrl);
	return { url: fullUrl, svg };
};

const local = async options => fetchSvgData(apiUrl, { number: 0, ...options });
const remote = async ({ name: counterName, ...restOptions }) => fetchSvgData(`${apiUrl}/@${counterName}`, restOptions);

module.exports = { local, remote, version };
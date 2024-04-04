/* global location, document */

function isTestEnv() {
	const hostname = location.hostname.toLowerCase();
	return (
		hostname === 'localhost' ||
		hostname === '127.0.0.1' ||
		hostname.startsWith('192.168.')
	);
}

function embedScript(url) {
	document.write(`<script src="${url}"></script>`);
}

function embedStylesheet(url) {
	document.write(`<link href="${url}" rel="stylesheet">`);
}

const baseUrl = isTestEnv()
	? '../designer'
	: 'https://cdn.jsdelivr.net/npm/sequential-workflow-designer@0.19.3';

embedScript(`https://cdn.jsdelivr.net/npm/sequential-workflow-designer@0.19.3/dist/index.umd.js`);
embedStylesheet(`https://cdn.jsdelivr.net/npm/sequential-workflow-designer@0.19.3/css/designer.css`);
embedStylesheet(`https://cdn.jsdelivr.net/npm/sequential-workflow-designer@0.19.3/css/designer-light.css`);
embedStylesheet(`https://cdn.jsdelivr.net/npm/sequential-workflow-designer@0.19.3/css/designer-dark.css`);

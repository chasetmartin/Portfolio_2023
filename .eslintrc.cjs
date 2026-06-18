module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:svelte/recommended', 'prettier'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: 'espree'
			},
			rules: {
				'no-unused-vars': 'off'
			}
		}
	],
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};

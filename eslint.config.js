import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(pluginJs.configs.recommended, {
	extends: [...tseslint.configs.recommended, eslintConfigPrettier],
	files: ['**/*.ts'],
	ignores: ['**/dist/**', '**/node_modules/**'],
	languageOptions: {
		globals: globals.browser,
		parserOptions: { project: './tsconfig.json' },
		sourceType: 'module'
	}
});

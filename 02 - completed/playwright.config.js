import {devices} from '@playwright/test';

let config = {
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] },
		},
	],
	webServer: {
		command: 'npm run server',
		url: 'http://localhost:8000/'
	},
	use: {
		baseURL: 'http://localhost:8000/',
	},
};

export default config;
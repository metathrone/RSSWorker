import { defineConfig } from "cf/config";

export default defineConfig({
	worker: {
		name: "rss-worker",
		compatibilityDate: "2026-05-23",
		compatibilityFlags: [
			"nodejs_compat",
		],
		entrypoint: "src/worker.js",
		domains: [
			"feed.rushia.eu.org",
		],
	},
});

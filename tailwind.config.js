const { plugin } = require("twrnc")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				t: "red",
			},
		},
	},
	plugins: [
		plugin(({ addUtilities }) =>
			addUtilities({
				".full": {
					position: "absolute",
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
			}),
		),
	],
}

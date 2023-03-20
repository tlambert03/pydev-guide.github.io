export const SITE = {
	title: 'PyDev for Science',
	description: 'Your website description.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_URL = `https://github.com/pydev-guide/pydev-guide.github.io`;
export const GITHUB_EDIT_URL = `${GITHUB_URL}/tree/main/`;
export const COMMUNITY_INVITE_URL = "";

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'pydev-guideio',
	appId: '1P0JFWH15Y',
	apiKey: '510fc9b7c9d0a0621c1e4a6c75cb3208',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Section Header': [
			{ text: 'Introduction', link: 'en/intro' },
			{ text: 'Demo', link: 'en/demo' },
		],
	},
};

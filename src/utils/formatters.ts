export const getDocsPath = (value: string) => {
	try {
		return require(`public/assets/docs/${value}`).default;
	} catch {
		console.warn(`Error loading file by name: ${value}`);
		return undefined;
	}
};

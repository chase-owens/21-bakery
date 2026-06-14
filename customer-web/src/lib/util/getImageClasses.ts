const short = 'col-span-3 row-span-1';
const tall = 'col-span-3 row-span-2';

const getFiveImageLayout = () => {
	const options = [
		[short, tall, tall, tall, short],
		[tall, short, tall, tall, short],
		[tall, tall, short, tall, short],
		[tall, tall, tall, short, short]
	];

	const randomIndex: number = Math.floor(Math.random() * options.length);
	return options[randomIndex];
};

const getSixImageLayout = () => {
	const options = [
		[tall, short, short, tall, short, short],
		[tall, short, tall, short, short, short],
		[tall, tall, short, short, short, short],
		[short, short, tall, tall, short, short]
	];

	const randomIndex: number = Math.floor(Math.random() * options.length);
	return options[randomIndex];
};

const getSevenImageLayout = () => {
	const options = [
		[tall, short, short, short, short, short, short],
		[short, tall, short, short, short, short, short],
		[short, short, tall, short, short, short, short],
		[short, short, short, tall, short, short, short]
	];

	const randomIndex: number = Math.floor(Math.random() * options.length);
	return options[randomIndex];
};

export function getImageClasses(imageCount: number): string[] {
	switch (imageCount) {
		case 4:
			return [tall, tall, tall, tall];

		case 5:
			return getFiveImageLayout();
		case 6:
			return getSixImageLayout();

		case 7:
			return getSevenImageLayout();

		default:
			return Array(imageCount).fill('col-span-3 row-span-2');
	}
}

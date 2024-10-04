export type LatestGame = {
	description: string;
	releaseDate: string;
	score: number;
	slug: string;
	title: string;
	image: string;
};

export type LatestGameDataOrigin = {
	description: string;
	releaseDate: string;
	score: number;
	slug: string;
	title: string;
	image: {
		bucketType: string;
		bucketPath: string;
	};
	criticScoreSummary: {
		score: number;
	};
};

export type Review = {
	quote: string;
	score: number;
	date: string;
	author: string;
};

type Reviews = Review[];

export type LatestGameBySlug = LatestGame & {
	reviews: Reviews;
};

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

type Reviews = {
	quote: string;
	score: number;
	date: string;
	author: string;
}[];

export type LatestGameBySlug = LatestGame & {
	reviews: Reviews;
};

import {latestGames} from '../data/metacritic';
import {LatestGame, LatestGameBySlug} from '../types/metacritic';
import {LoremIpsum} from 'lorem-ipsum';

export function getLatestGames(): LatestGame[] {
	return latestGames;
}

export function getGameDetails(slug: string): LatestGameBySlug {
	const game = latestGames.find((game) => game.slug === slug);

	if (!game) {
		throw new Error(`Game ${slug} not found`);
	}

	const lorem = new LoremIpsum();

	const reviews = Array.from({length: Math.floor(Math.random() * 50)}).map(() => ({
		quote: lorem.generateSentences(10),
		score: Math.floor(Math.random() * 100),
		date: new Date().toISOString(),
		author: lorem.generateWords(1),
	}));

	return {
		...game,
		reviews,
	};
}

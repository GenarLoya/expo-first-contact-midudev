import {AnimatedGameCard} from '../components/Game/GameCard';
import {LatestGame, getLatestGames} from '../lib/metacritic';
import {useEffect, useState} from 'react';

import {FlatList, View} from 'react-native';

export default function Main() {
	const [games, setGames] = useState<LatestGame[]>([]);

	useEffect(() => {
		getLatestGames().then((games) => setGames(games));
	}, []);

	return (
		<View>
			<FlatList
				data={games}
				renderItem={({item, index}) => <AnimatedGameCard game={item} index={index} />}
				keyExtractor={(item) => item.slug}
			/>
		</View>
	);
}

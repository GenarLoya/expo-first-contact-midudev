import {getLatestGames} from '../../../lib/metacritic';
import {LatestGame} from '../../../types/metacritic';
import {AnimatedGameCard} from '../../game/_components/Game/GameCard';
import {useEffect, useState} from 'react';

import {FlatList, View} from 'react-native';

export default function Main() {
	const [games, setGames] = useState<LatestGame[]>([]);

	useEffect(() => {
		setGames(getLatestGames());
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

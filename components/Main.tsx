import {LatestGame, getLatestGames} from '../lib/metacritic';
import GameCard, {AnimatedGameCard} from './Game/GameCard';
import {Logo} from './Logo';
import {StatusBar} from 'expo-status-bar';
import {useEffect, useState} from 'react';

import {FlatList, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Main() {
	const [games, setGames] = useState<LatestGame[]>([]);
	const insets = useSafeAreaInsets();

	useEffect(() => {
		getLatestGames().then((games) => setGames(games));
	}, []);

	return (
		<View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
			<StatusBar style="auto" />
			<View style={{margin: 10}}>
				<Logo />
			</View>
			<FlatList
				data={games}
				renderItem={({item, index}) => <AnimatedGameCard game={item} index={index} />}
				keyExtractor={(item) => item.slug}
			/>
		</View>
	);
}

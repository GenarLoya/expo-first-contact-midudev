import Back from '../../components/Back';
import {getGameDetails} from '../../lib/metacritic';
import {LatestGameBySlug} from '../../types/metacritic';
import {Link, Stack, useLocalSearchParams} from 'expo-router';
import {useEffect, useState} from 'react';

import {Text, View} from 'react-native';

export default function GameById() {
	const {slug} = useLocalSearchParams<{slug: string}>();

	const [game, setGame] = useState<LatestGameBySlug>();

	useEffect(() => {
		setGame(getGameDetails(slug));
	}, [slug]);

	return (
		<>
			<Stack.Screen
				options={{
					headerTitle: slug as string,
					headerTitleStyle: {color: '#fff'},
					headerLeft: ({label}) => (
						<View style={{marginVertical: 'auto'}}>
							<Link asChild href="/">
								<Back />
							</Link>
						</View>
					),
					headerRight: () => null,
				}}></Stack.Screen>
			<View>
				<Link href="/">
					<Text style={{color: '#fff'}}>Home</Text>
				</Link>
				<Text style={{color: '#fff'}}>{JSON.stringify(game, null, 2)}</Text>
			</View>
		</>
	);
}

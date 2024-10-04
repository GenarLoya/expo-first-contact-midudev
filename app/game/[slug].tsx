import Back from '../../components/Back';
import {getGameDetails} from '../../lib/metacritic';
import {LatestGameBySlug} from '../../types/metacritic';
import {GameScore} from './_components/Game/GameScore';
import {ReviewCard} from './_components/Game/slug/ReviewCard';
import {Link, Stack, useLocalSearchParams} from 'expo-router';
import {useEffect, useState} from 'react';

import {FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native';

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
					headerTitle: game?.title,
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
			<View style={styles.card}>
				<Text style={styles.title}>{game?.title}</Text>
				<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
					<Text style={{color: '#fff'}}>{game?.releaseDate}</Text>
					<GameScore score={game?.score as number} maxScore={100} />
				</View>
				<View style={styles.body}>
					<Image source={{uri: game?.image}} style={styles.image} />
					<Text style={styles.description}>{game?.description}</Text>
				</View>
				<Text style={styles.reviewsSubTitle}>Reviews</Text>
				<View style={styles.reviewCard}>
					<FlatList
						data={game?.reviews}
						renderItem={({item}) => <ReviewCard review={item} />}></FlatList>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	card: {
		width: 'auto',
		height: 'auto',
		borderRadius: 5,
		backgroundColor: '#303640',
		padding: 10,
		margin: 10,
		gap: 5,
		flex: 1,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#fff',
	},
	reviewsSubTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#fff',
	},
	reviewCard: {
		width: 'auto',
		flex: 1,
		backgroundColor: '#636466',
		gap: 5,
		borderRadius: 5,
	},
	body: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
		gap: 10,
	},
	description: {
		flex: 1, // Asigna un ancho flexible para que el texto se ajuste
		flexWrap: 'wrap', // Permite que el texto se divida en varias líneas
		color: '#fff',
	},
	image: {
		width: 107,
		height: 147,
	},
});

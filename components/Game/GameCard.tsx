import {LatestGame} from '../../lib/metacritic';
import {GameScore} from './GameScore';
import {Link} from 'expo-router';
import {useEffect, useRef} from 'react';

import {Animated, Image, Pressable, StyleSheet, Text, View} from 'react-native';

const DESCRIPTION_CHAR_LIMIT = 250;

export default function GameCard({game}: {game: LatestGame}) {
	return (
		<Link asChild href={`/game/${game.slug}`}>
			<Pressable key={game.slug} style={styles.card}>
				{({pressed}) => (
					<View key={game.slug} style={[styles.card, {opacity: pressed ? 0.5 : 1}]}>
						<Text style={styles.title}>{game.title}</Text>
						<GameScore score={game.score} maxScore={100} />
						<View style={styles.body}>
							<Image source={{uri: game.image}} style={styles.image} />
							<Text style={styles.description}>
								{game.description.slice(0, DESCRIPTION_CHAR_LIMIT) + '...'}
							</Text>
						</View>
					</View>
				)}
			</Pressable>
		</Link>
	);
}

export function AnimatedGameCard({game, index}: {game: LatestGame; index: number}) {
	const opacity = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true,
		}).start();
	}, [opacity, index]);

	return (
		<Animated.View style={{opacity}}>
			<GameCard game={game} />
		</Animated.View>
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
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#fff',
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

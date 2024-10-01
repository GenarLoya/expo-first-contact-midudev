import {useEffect, useRef} from 'react';

import {Animated, Image, StyleSheet, Text, View} from 'react-native';

const DESCRIPTION_CHAR_LIMIT = 250;

export default function GameCard({game}) {
	return (
		<View key={game.slug} style={styles.card}>
			<Text style={styles.title}>{game.title}</Text>
			<View style={styles.body}>
				<Image source={{uri: game.image}} style={styles.image} />
				<Text style={styles.description}>
					{game.description.slice(0, DESCRIPTION_CHAR_LIMIT) + '...'}
				</Text>
			</View>
		</View>
	);
}

export function AnimatedGameCard({game, index}) {
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
		gap: 10,
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

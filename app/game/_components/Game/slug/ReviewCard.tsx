import {Review} from '../../../../../types/metacritic';
import {GameScore} from '../GameScore';

import {StyleSheet, Text, View} from 'react-native';

export function ReviewCard({review}: {review: Review}) {
	const {quote, score, author} = review;

	return (
		<View style={styles.card}>
			<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
				<Text style={{color: '#fff'}}>{author}</Text>
				<GameScore score={score} maxScore={100} />
			</View>
			<Text style={styles.quote}>{quote}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		width: 'auto',
		height: 'auto',
		borderRadius: 5,
		borderWidth: 1,
		backgroundColor: '#303640',
		borderColor: '#202020',
		padding: 10,
		margin: 10,
		gap: 5,
	},
	quote: {
		flex: 1, // Asigna un ancho flexible para que el texto se ajuste
		flexWrap: 'wrap', // Permite que el texto se divida en varias líneas
		color: '#fff',
	},
});

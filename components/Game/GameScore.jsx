import {StyleSheet, Text, View} from 'react-native';

const getBarColor = (score) => {
	if (score < 50) {
		return '#C63636';
	} else if (score < 70) {
		return '#B66C38';
	} else if (score < 90) {
		return '#A6A33B';
	} else {
		return '#5DC152';
	}
};

export function GameScore({score, maxScore}) {
	const percentage = Math.round(((score / maxScore) * 100) / 10) * 10;

	const barColor = getBarColor(score);

	return (
		<View style={styles.score}>
			<View style={styles.scoreBar}>
				<View
					style={[
						styles.scoreBarFill,
						{width: `${percentage}%`, backgroundColor: barColor},
					]}
				/>
			</View>
			<Text style={styles.scoreText}>{score}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	score: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		marginLeft: 'auto',
		backgroundColor: '#303640',
	},
	scoreText: {
		fontWeight: 'bold',
		color: '#fff',
	},
	scoreBar: {
		height: 10,
		width: 100,
		backgroundColor: '#FFF',
		borderRadius: 5,
	},
	scoreBarFill: {
		height: '100%',
		borderRadius: 5,
	},
});

import {Logo} from '../components/Logo';
import {Link, Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';

import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function Layout() {
	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<StatusBar style="auto" />
				<Stack
					screenOptions={{
						headerBackVisible: false,
						headerStyle: styles.header,
						contentStyle: styles.container,
						headerTitle: '',
						headerLeft: () => <Logo />,
						headerRight: () => (
							<Link href="/about">
								<Text style={{color: '#fff'}}>About</Text>
							</Link>
						),
					}}
				/>
			</View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1b1f23',
	},
	header: {
		backgroundColor: '#212224',
	},
});

import Back from '../../components/Back';
import {Link, Stack, useLocalSearchParams} from 'expo-router';

import {Text, View} from 'react-native';

export default function GameById() {
	const {slug} = useLocalSearchParams();

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
				<Text style={{color: '#fff'}}>{slug}</Text>
			</View>
		</>
	);
}

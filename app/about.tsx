import Back from '../components/Back';
import {Link, Stack} from 'expo-router';

import {ScrollView, Text, View} from 'react-native';

export default function About() {
	return (
		<>
			<Stack.Screen
				options={{
					headerTitle: 'About',
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
			<ScrollView>
				<Link href="/">
					<Text style={{color: '#fff', marginTop: 10}}>Home</Text>
				</Link>
				<Text style={{color: '#fff'}}>About</Text>
				<Text style={{color: '#fff'}}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis explicabo
					minus error exercitationem, aut laborum cupiditate ex? Cupiditate quam ad,
					doloribus illum facere, libero recusandae amet odio natus corporis pariatur.
				</Text>
			</ScrollView>
		</>
	);
}

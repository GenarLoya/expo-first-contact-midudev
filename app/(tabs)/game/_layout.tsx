import {Tabs} from 'expo-router';

import {Text, View} from 'react-native';

export default function Layout() {
	return (
		<Tabs
			sceneContainerStyle={{backgroundColor: '#1b1f23'}}
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: '#212224',
				},
				tabBarActiveBackgroundColor: '#303640',
			}}>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Games',
					tabBarIcon: ({color}) => <Text style={{color, fontSize: 20}}>🎮</Text>,
				}}></Tabs.Screen>

			<Tabs.Screen
				name="about"
				options={{
					title: 'About',
					tabBarIcon: ({color}) => <Text style={{color, fontSize: 20}}>?</Text>,
				}}></Tabs.Screen>
		</Tabs>
	);
}

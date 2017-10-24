import { Navigation } from 'react-native-navigation';

import Tab1Screen from './screens/Tab1Screen';
import Tab2Screen from './screens/Tab2Screen';
import Tab3Screen from './screens/Tab3Screen';
import Tab4Screen from './screens/Tab4Screen';
import DrawerScreen from './screens/DrawerScreen';
import ModalScreen from './screens/ModalScreen';
import PushedScreen from './screens/PushedScreen';

Navigation.registerComponent('Tab1Screen', () => Tab1Screen);
Navigation.registerComponent('Tab2Screen', () => Tab2Screen);
Navigation.registerComponent('Tab3Screen', () => Tab3Screen);
Navigation.registerComponent('Tab4Screen', () => Tab4Screen);
Navigation.registerComponent('DrawerScreen', () => DrawerScreen);
Navigation.registerComponent('ModalScreen', () => ModalScreen);
Navigation.registerComponent('PushedScreen', () => PushedScreen);

// start the app
Navigation.startTabBasedApp({
	tabs: [
		{
			label: 'Tab1',
			screen: 'Tab1Screen', // this is a registered name for a screen
			icon: require('./img/icon1.png'),
			title: 'Tab1 Title',
		},
		{
			label: 'Tab2',
			screen: 'Tab2Screen',
			icon: require('./img/icon1.png'),
			title: 'Tab2 Title'
		},
		{
			label: 'Tab3',
			screen: 'Tab3Screen', // this is a registered name for a screen
			icon: require('./img/icon1.png'),
			title: 'Tab3 Title'
		},
		{
			label: 'Tab4',
			screen: 'Tab4Screen',
			icon: require('./img/icon1.png'),
			title: 'Tab4 Title'
		}
	],
	drawer: { // optional, add this if you want a side menu drawer in your app
		left: { // optional, define if you want a drawer from the left
			screen: 'DrawerScreen', // unique ID registered with Navigation.registerScreen
			passProps: {}, // simple serializable object that will pass as props to all top screens (optional),
		},
		style: { // ( iOS only )
			drawerShadow: false, // optional, add this if you want a side menu drawer shadow
			leftDrawerWidth: 100, // optional, add this if you want a define left drawer width (50=percent)
		},
		disableOpenGesture: true
	},
	tabsStyle: {
	},
	appStyle: {
		forceTitlesDisplay: true,
		navBarTitleTextCentered: true
	}
});
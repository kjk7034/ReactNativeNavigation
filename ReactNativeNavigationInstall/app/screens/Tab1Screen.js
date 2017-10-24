import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    static navigatorButtons = {
        leftButtons: [
            {
                title: '메뉴',
                id: 'sideMenu', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
            },
        ],
        rightButtons: [
            {
                title: '검색', // for a textual button, provide the button title (label)
                id: 'edit', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
            },
        ]
    };
    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'edit') { // this is the same id field from the static navigatorButtons definition
                alert('검색 기능');
            }
            if (event.id === 'sideMenu') { // this is the same id field from the static navigatorButtons definition
                this.props.navigator.toggleDrawer({
                    side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
                    animated: true, // does the toggle have transition animation or does it happen immediately (optional)
                    to: 'open' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
                });
            }
        }
        if (event.type == 'DeepLink') {
            if (event.link === "PushedScreen") {
                this.props.navigator.push({
                    screen: 'PushedScreen',
                    title: 'Drawer에서 옴',
                });
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Tab1 Screen</Text>
                <Button
                    onPress={() => {
                        Navigation.showModal({
                            screen: 'ModalScreen', // unique ID registered with Navigation.registerScreen
                            title: "Modal 스크린", // title of the screen as appears in the nav bar (optional)
                        });
                    }}
                    title="show 모달 스크린"
                />
                <Button
                    onPress={() => {
                        this.props.navigator.push({
                            screen: 'PushedScreen',
                            title: 'Pushed Screen',
                        });
                    }}
                    title="Push 스크린"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

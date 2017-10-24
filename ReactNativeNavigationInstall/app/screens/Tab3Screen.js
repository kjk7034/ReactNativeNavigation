import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigatorButtons = {
        leftButtons: [
            {
                title: '메뉴',
                id: 'sideMenu', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
            },
        ],
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Tab3 Screen</Text>
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

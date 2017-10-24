import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';

const btnStyles = StyleSheet.create({
    button: {
        overflow: 'hidden',
        width: 34,
        height: 34,
        borderRadius: 34 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

// Our custom component we want as a button in the nav bar
const CustomButton = ({ text }) =>
    <TouchableOpacity
        style={[btnStyles.button, { backgroundColor: 'tomato' }]}
        onPress={() => {
            Navigation.handleDeepLink({
                link: 'back',
                payload: ''
            });
        }}
    >
        <View style={btnStyles.button}>
            <Text style={{ color: 'white' }}>
                {text}
            </Text>
        </View>
    </TouchableOpacity>;

// Register the component
Navigation.registerComponent('CustomButton', () => CustomButton);

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }
    static navigatorStyle = {
        tabBarHidden: true
    };
    static navigatorButtons = {
        leftButtons: [
            {
                id: 'back', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                //icon: require('./../img/icon-sidemenu.png'),
                component: 'CustomButton',
                passProps: {
                    text: '이전'
                },
            },
        ],
    };
    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'DeepLink') {
            if (event.link === "back") {
                this.props.navigator.pop({
                    animated: true, // does the pop have transition animation or does it happen immediately (optional)
                });
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>PushedScreen</Text>
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

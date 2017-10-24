import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        // if you want to listen on navigator events, set this up
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>DrawerScreen</Text>
                <Button
                    onPress={() => {
                        this.props.navigator.toggleDrawer({
                            side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
                            animated: true, // does the toggle have transition animation or does it happen immediately (optional)
                            to: 'closed' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
                        });
                    }}
                    title="toggleDrawer (닫기)"
                />
                <Button
                    onPress={() => {
                        this.props.navigator.toggleDrawer({
                            side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
                            animated: true, // does the toggle have transition animation or does it happen immediately (optional)
                            to: 'closed' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
                        });
                        this.props.navigator.handleDeepLink({
                            link: 'PushedScreen',
                            payload: '' // (optional) Extra payload with deep link
                        });
                    }}
                    title="Drawer에서 PushedScreen 이동"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width
    },
});

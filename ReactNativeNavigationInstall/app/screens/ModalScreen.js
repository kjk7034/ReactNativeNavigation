import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ModalScreen</Text>
                <Button
                    onPress={() => {
                        Navigation.showModal({
                            screen: 'ModalScreen', // unique ID registered with Navigation.registerScreen
                            title: "모달위에 모달", // title of the screen as appears in the nav bar (optional)
                            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
                            navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
                            navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
                            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
                        });
                    }}
                    title="모달위에 모달"
                />
                <Button
                    onPress={() => {
                        Navigation.dismissModal({
                            animationType: 'slide-down'
                        });
                    }}
                    title="모달 닫기"
                />
                <Button
                    onPress={() => {
                        Navigation.dismissAllModals({
                            animationType: 'slide-down'
                        });
                    }}
                    title="모든 모달 닫기"
                />
                <Button
                    onPress={() => {
                        Navigation.showLightBox({
                            screen: "PushedScreen", // unique ID registered with Navigation.registerScreen
                            passProps: {}, // simple serializable object that will pass as props to the lightbox (optional)
                            style: {
                                backgroundBlur: "dark", // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
                                backgroundColor: "#ff000080", // tint color for the background, you can specify alpha here (optional)
                                tapBackgroundToDismiss: true // dismisses LightBox on background taps (optional)
                            }
                        });
                    }}
                    title="showLightBox"
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

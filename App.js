import React from 'react';
import { StyleSheet, Alert, View, Image, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

    _onPressLogin() {
        Alert.alert('Button Pressed!');
    }

    render() {
        
        return (
            <View style={styles.container}>
                <View style={styles.backgroundContainer}>
                    <Image style={styles.bakcgroundImage} source={require('./assets/yoga.png')} />
                </View>
                <View>
                    <TouchableOpacity onPress={this._onPressLogin}>
                        <Image style={styles.loginButton} source={require('./assets/button.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    backgroundContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }, 
    bakcgroundImage: {
        flex: 1, 
        width: null, 
        height: null
    },
    loginButton: {
        marginBottom: 40
    }
});

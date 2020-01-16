import React, { Component } from 'react';

import Torch from 'react-native-torch';
import {
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image
} from 'react-native';

export default class App extends Component {
    PressButton = () => {
        //alert("entro a la funcion");
        if (Platform.OS === 'ios') {
            Torch.switchState(this.isTorchOn);
        } else {
            const cameraAllowed = Torch.requestCameraPermission(
                'Camera Permissions', // dialog title
                'We require camera permissions to use the torch on the back of your phone.' // dialog body
            );

            if (cameraAllowed) {
                Torch.switchState(true);
                // alert("prendio");
            }
        }
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <TouchableOpacity onPress={this.PressButton} style={styles.button}>
                        <Image
                            source={require('./images/torch.png')}
                            style={{ width: 150, height: 150 }}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#CCF5C0',
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    button: {
      display: 'flex',
      height: 200,
      width: 200,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2AC062',
      shadowColor: '#2AC062',
      shadowOpacity: 0.4,
      shadowOffset: { height: 10, width: 0 },
      shadowRadius: 20,
    },
  });
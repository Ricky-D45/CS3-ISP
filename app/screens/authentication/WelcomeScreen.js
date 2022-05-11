import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';

import MyAppHeaderText from '../../components/MyAppHeaderText';
import MyAppButton from '../../components/MyAppButton';

function WelcomeScreen() {
    return (
        <SafeAreaView style={styles.background}>
            <View style={[{justifyContent:'center'}, {alignItems:'center'}, {paddingTop:Dimensions.get('window').height*0.12}]}>
                <MyAppHeaderText intendedFontSize={52} intendedColor={'#FFD100'} text={'Blogify'} />
            </View>

            <View style={[{paddingTop:Dimensions.get('window').height*0.46}, {flex:1}, {justifyContent:'flex-end'}]}>
                <View style={[styles.buttonContainer]}>
                    <MyAppButton fontSize={28} text={'Log In'} textColor={'white'} style={styles.darkButton} />
                </View>

                <View style={[styles.buttonContainer]}>
                    <MyAppButton fontSize={28} text={'Sign In'} textColor={'#202020'} style={styles.lightButton} />
                </View>
            </View>

        </SafeAreaView>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background : {
        backgroundColor: '#202020',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    buttonContainer : {
        alignItems:'center',
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: Dimensions.get('window').height*0.1
    },
    darkButton : {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#202020',
        width:Dimensions.get('window').width * 0.6,
        height:Dimensions.get('window').height * 0.07,
        borderRadius:25,
        borderColor:'white',
        borderWidth:3
    },
    lightButton : {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        width:Dimensions.get('window').width * 0.6,
        height:Dimensions.get('window').height * 0.07,
        borderRadius:25
    }
})
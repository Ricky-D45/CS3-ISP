import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen() {
    return (
        <SafeAreaView style={styles.background}>
            <Text>Hello</Text>
        </SafeAreaView>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background : {
        backgroundColor: '#202020'
    }
})
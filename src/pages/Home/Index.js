import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Home( {navigation} ) {
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>FacilitaPRO</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Register")}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontWeight: 'bold',
        fontSize: 42,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        width: 300,
        height: 60,
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 30,
    },

    textButton: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

});

export default Home;
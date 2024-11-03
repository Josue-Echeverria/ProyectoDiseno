import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Nota from '../molecules/Nota'; // Adjust the import path as necessary
import { ScrollView } from 'react-native';
const NotasContainer = ({ notas }) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {notas.map((nota, index) => (
                    <Nota 
                        key={index} 
                        nota={nota} 
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'lightgrey',
        margin: 10,
        borderRadius: 10,
        height: '40%',
    },
});

export default NotasContainer;
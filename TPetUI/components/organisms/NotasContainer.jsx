import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Nota from '../molecules/Nota'; // Adjust the import path as necessary

const NotasContainer = ({ notas }) => {
    return (
        <View style={styles.container}>
            {notas.map((nota, index) => (
                <Nota 
                    key={index} 
                    nota={nota} 
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default NotasContainer;
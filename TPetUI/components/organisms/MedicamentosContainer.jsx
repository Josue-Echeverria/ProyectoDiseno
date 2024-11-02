import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Medicamento from '../molecules/Medicamento'; // Adjust the import path as necessary

const MedicamentosContainer = ({ medicamentos }) => {
    return (
        <View style={styles.container}>
            {medicamentos.map((medicamento, index) => (
                <Medicamento 
                    key={index} 
                    nombre={medicamento.nombre}
                    imagen={medicamento.imagen}
                    cantidad={medicamento.cantidad} 
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

export default MedicamentosContainer;
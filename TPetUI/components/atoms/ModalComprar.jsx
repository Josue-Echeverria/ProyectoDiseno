import React from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Pressable, ScrollView, Text, Alert } from 'react-native';
import Medicamento from './Medicamento';

const ModalComprar = ({modalVisible, setModalVisible, medicamentos, goToPantallaPrincipal}) => {
    let total = 0;
    const confirmarCita = () => {
        Alert.alert(
          'Compra realizada',
          `La transacción ha sido efectuada exitosamente.`,
          [
            {
              text: 'Aceptar',
              onPress: goToPantallaPrincipal, // Regresa a la pantalla principal
            },
          ],
          { cancelable: true }
        );
      };
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <TouchableOpacity style={styles.overlay} onPress={() => setModalVisible(false)} />
                <View style={styles.modalView}>
                    <ScrollView style={styles.scroll}>    
                        {medicamentos.map((medicamento, index) => {
                            total += medicamento.precio*medicamento.cantidad;
                            return (
                                <Medicamento 
                                    key={index}
                                    nombre={medicamento.nombre}
                                    imagen={medicamento.imagen}
                                    cantidad={medicamento.cantidad} 
                                    precio={medicamento.precio}
                                    vistaReducida={true}
                                />
                            );
                        })}
                    </ScrollView>
                    <View style={styles.totalContainer}>
                        <Text style={styles.total}>Total</Text>
                        <Text style={styles.total}>₡ {total}</Text>
                    </View>
                    <Pressable
                        style={[styles.button]}
                        onPress={() => {
                            setModalVisible(!modalVisible)
                            confirmarCita();}}
                    >
                        <Text style={styles.text}>Confirmar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 'auto',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
        margin: 10,
        marginBottom: 0,
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#0FA3B1',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 0,
        width: '95%',
        height: 50,
        justifyContent: 'center',
    },
    modalView: {
        margin: 20,
        width: '75%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 30,
        height: '70%',
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    centeredView: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'open-sans',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    total: {
        fontSize: 16,
        fontFamily: 'open-sans',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    totalContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    scroll: {
        borderColor: 'lightgrey',
        borderWidth: 1,
    },
});

export default ModalComprar;
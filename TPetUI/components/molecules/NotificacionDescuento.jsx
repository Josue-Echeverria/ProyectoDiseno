import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import Boton from '../atoms/Boton';

const NotificacionDescuento = ({ visible, onClose }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>¡Descuento Disponible!</Text>
          <Text style={styles.modalText}>Tienes un 10% de descuento en tu primera cita.</Text>
          <TouchableOpacity onPress={onClose} style={styles.modalButton}>
            <Boton text="Aceptar" onPress={onClose} style={styles.modalButton}/>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NotificacionDescuento;
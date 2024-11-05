import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {Alert, Modal, Pressable, View} from 'react-native';

const BotonComprar = ({ text, medicamentos }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.overlay} />
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Medicamentos:</Text>
            {medicamentos.map((medicamento, index) => (
              <View key={index} style={styles.item}>
                <Text style={styles.modalText}>{medicamento.nombre}</Text>
              </View>
            ))}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.text}>Comprar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    //Red
    backgroundColor: '#0FA3B1',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    marginBottom: 0,
    width: '95%',
    height: 50,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'open-sans',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    padding: 10,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  centeredView: {
    flex: 1,
    height: '100%', 
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BotonComprar;

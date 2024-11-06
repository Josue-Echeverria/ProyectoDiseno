import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert, Modal, Pressable, View, Image} from 'react-native';
import ModalComprar from '../atoms/ModalComprar';

const BotonComprar = ({ text, medicamentos, goToPantallaPrincipal }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <ModalComprar 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible} 
        medicamentos={medicamentos} 
        goToPantallaPrincipal={goToPantallaPrincipal}
      />
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
});

export default BotonComprar;

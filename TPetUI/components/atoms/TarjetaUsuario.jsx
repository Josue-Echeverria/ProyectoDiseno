import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import usuario from '../../assets/fotoUsuario.png';
import pencil from '../../assets/pencil.png';

const TarjetaUsuario = ({ user }) => {
    return (
        <View style={styles.card}>
            <Image 
                source={typeof usuario === 'number' ? usuario : { uri: usuario }} 
                style={styles.usuario} 
            />
            
            <View style={styles.info}>
                <Text style={styles.name}>{user.nombre}</Text>
                <Text style={styles.name}> {user.apellido}</Text>
                <Image 
                    source={typeof pencil === 'number' ? pencil : { uri: pencil }} 
                    style={styles.pencil} 
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        padding: 10,
        paddingBottom: 20,
        margin: 10,
        marginBottom: 0,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    usuario: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 10,
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        justifyContent: 'center',
    },
    name: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 14,
        color: '#666',
    },
    pencil: {
        marginTop: 10,
        width: 20,
        height: 20,
        marginLeft: 10,
    },
});

export default TarjetaUsuario;
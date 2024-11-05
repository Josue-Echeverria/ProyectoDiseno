import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Nota from '../molecules/Nota'; // Adjust the import path as necessary
import { ScrollView } from 'react-native';
import imagen from '../../assets/ia_stars.png'; // Imagen del usuario
import Svg, {
    LinearGradient,
    Text,
    Defs,
    Stop,
    TSpan
  } from 'react-native-svg';

const NotasContainer = ({ notas }) => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Image 
                    source={typeof imagen === 'number' ? imagen : { uri: imagen }} 
                    style={styles.iaStars} 
                />
                <Svg height="50" width="100%">
                    <Defs>
                        <LinearGradient id="rainbow" x1="0" x2="100%" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#c783fe" offset="15%" />
                            <Stop stopColor="#fff000" offset="30%" />
                            <Stop stopColor="#5562ff" offset="50%" />
                        </LinearGradient>
                    </Defs>
                    <Text 
                        fill="url(#rainbow)" 
                        stroke="url(#rainbow)" 
                        strokeLinecap="round"  
                        strokeWidth="0.5" 
                        strokeLinejoin="round"
                        x="12" y="30" 
                        fontSize="22" 
                        textAnchor="start" 
                        fontWeight="bold" 
                        fontFamily="Courier New"
                    >
                        Notas de la reunion
                    </Text>
                </Svg>
            </View>
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
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        height: 300,
    },
    iaStars: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginBottom: 10,
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
});

export default NotasContainer;
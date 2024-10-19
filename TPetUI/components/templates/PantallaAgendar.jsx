import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import NavBar from '../organisms/NavBar.jsx';
import BlueContainer from '../molecules/BlueContainer.jsx';
import Calendario from '../atoms/Calendario.jsx';
import Boton from '../atoms/Boton.jsx';

const PantallaAgendar = ({ goToPantallaPrincipal, goBack, nombre, precio, especialidad }) => {
  const [selectedDay, setSelectedDay] = useState(null); // Estado para el día seleccionado
  const [availableAppointments, setAvailableAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null); // Estado para la cita seleccionada

  // Simular citas disponibles para ciertos días
  const appointmentsData = {
    '2024-10-19': ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'],
    '2024-10-20': ['9:00 AM', '11:30 AM', '1:30 PM'],
    '2024-10-21': ['1:00 PM', '2:30 PM', '4:00 PM', '5:00 PM', '6:00 PM'],
  };

  // Función para manejar la selección de un día
  const handleDayPress = (day) => {
    const formattedDate = day.dateString;
    setSelectedDay(formattedDate);

    // Obtener las citas disponibles para el día seleccionado
  const appointments = appointmentsData[formattedDate] || [];
    setAvailableAppointments(appointments);
    setSelectedAppointment(null); // Reiniciar la cita seleccionada cuando se selecciona un nuevo día
  };

  // Función para mostrar la notificación de que se ha agendado la cita
  const confirmarCita = () => {
    Alert.alert(
      'Cita Agendada',
      `Tu cita con ${nombre} a las ${selectedAppointment} del ${selectedDay} ha sido confirmada.`,
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
    <View style={styles.container}>
      <BlueContainer text="Agendar" onBackPress={goBack} showBackArrow={true} />

      <View style={styles.vetInfoContainer}>
        <View style={styles.row}>
          <Text style={styles.title}>Veterinario: </Text>
          <Text style={styles.infoText}>{nombre}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.title}>Especialidad: </Text>
          <Text style={styles.infoText}>{especialidad}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.title}>Precio de consulta: </Text>
          <Text style={styles.infoText}>{precio}</Text>
        </View>
      </View>

      {/* Contenedor desplazable para citas y calendario */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Calendario */}
        <Calendario onDayPress={handleDayPress} selectedDay={selectedDay} />

        {/* Contenedor scrollable horizontal para las citas */}
        <View style={styles.appointmentsContainer}>
          {selectedDay ? (
            availableAppointments.length > 0 ? (
              <>
                <Text style={styles.appointmentsTitle}>Citas disponibles para {selectedDay}:</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.scrollViewContent}>
                  <View style={styles.appointmentsRow}>
                    {availableAppointments.map((appointment, index) => (
                      <TouchableOpacity
                        key={index}
                        style={[
                          styles.appointmentContainer,
                          selectedAppointment === appointment && styles.selectedAppointmentContainer, // Estilo dinámico si está seleccionada
                        ]}
                        onPress={() => setSelectedAppointment(appointment)}
                      >
                        <Text style={styles.appointment}>{appointment}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>

                {/* Mostrar el botón de Confirmar Cita solo si se selecciona una cita */}
                {selectedAppointment && (
                  <View style={styles.confirmButtonContainer}>
                    <Boton
                      text="Confirmar Cita"
                      onPress={confirmarCita}
                    />
                  </View>
                )}
              </>
            ) : (
              <Text style={styles.noAppointmentsText}>No hay citas disponibles para {selectedDay}</Text>
            )
          ) : (
            <Text style={styles.noAppointmentsText}>Seleccione una fecha</Text>
          )}
        </View>
      </ScrollView>

      <NavBar goToPantallaPrincipal={goToPantallaPrincipal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  vetInfoContainer: {
    marginTop: 80,
    marginBottom: 7,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
    textAlign: 'right',
  },
  appointmentsContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  appointmentsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollViewContent: {
    paddingBottom: 20, // Para que no se superponga el contenido
  },
  appointmentsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  appointmentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#e0e0e0', // Fondo gris por defecto
    borderRadius: 8,
    width: 100,
  },
  selectedAppointmentContainer: {
    backgroundColor: '#66AAFF', // Cambiar el fondo a celeste cuando está seleccionada
  },
  appointment: {
    fontSize: 16,
  },
  selectedAppointmentText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  noAppointmentsText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
  confirmButtonContainer: {
    marginTop: 8, 
    paddingHorizontal: 105,
  },
});

export default PantallaAgendar;

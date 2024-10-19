import React from 'react';
import { Calendar } from 'react-native-calendars';

const Calendario = ({ onDayPress, selectedDay, appointmentsData }) => {
  // Generar las fechas con citas disponibles (puntos grises)
  const markedDates = Object.keys(appointmentsData).reduce((acc, date) => {
    acc[date] = {
      marked: true,
      dotColor: 'gray', // Color gris para las fechas con citas disponibles
    };
    return acc;
  }, {});

  // Agregar el día seleccionado (círculo azul)
  if (selectedDay) {
    markedDates[selectedDay] = {
      ...markedDates[selectedDay], // Mantener el punto gris si también tiene citas
      selected: true,
      selectedColor: '#66AAFF', // Círculo azul para el día seleccionado
    };
  }

  return (
    <Calendar
      onDayPress={onDayPress}
      markedDates={markedDates} // Aplicar las fechas marcadas
      style={{
        borderWidth: 4,
        borderColor: 'gray',
        borderRadius: 10,
        marginTop: 7,
        padding: -50,
        
      }}
      theme={{
        todayTextColor: '#00adf5',
      }}
    />
  );
};

export default Calendario;

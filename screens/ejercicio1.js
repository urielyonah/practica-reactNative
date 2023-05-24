import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';


const Ejercicio1 = () => {
  const [horasTrabajadas, setHorasTrabajadas] = useState('');
  const [tarifa, setTarifa] = useState('');
  const [salario, setSalario] = useState('');

  

  const calcularSalario = () => {
    const horasTrabajadasNum = parseFloat(horasTrabajadas);
    const tarifaNum = parseFloat(tarifa);

    if (horasTrabajadasNum <= 40) {
      const salarioCalculado = horasTrabajadasNum * tarifaNum;
      setSalario(salarioCalculado.toString());
    } else {
      const tarifaExtra = tarifaNum + 0.5 * tarifaNum;
      const horasExtras = horasTrabajadasNum - 40;
      const salarioCalculado = horasExtras * tarifaExtra + 40 * tarifaNum;
      setSalario(salarioCalculado.toString());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        A un trabajador le pagan segun sus horas y 
        una tarifa de pago por horas, si la cantidad 
        de horas trabajadas es mayor a 40 horas, la 
        tarifa se incrementa en un 50% para las horas 
        extras, calcular el salario del trabajador dadas 
        las horas trabajadas y la tarifa.
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Horas trabajadas"
          value={horasTrabajadas}
          onChangeText={setHorasTrabajadas}
        />
        <Input
          placeholder="Tarifa"
          value={tarifa}
          onChangeText={setTarifa}
        />
      </View>
      <Button
        title="Calcular salario"
        onPress={calcularSalario}
        buttonStyle={styles.button}
      />
      {salario !== '' && (
        <Text style={styles.resultText}>Salario: ${salario}</Text>
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  inputContainer: {
    marginBottom: 20,
    width: 200,
  },
  texto: {
    margin: 10,
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007bff',
    width: 200,
    borderRadius: 10,
  },
  input: {
    width: 200,
    height: 40,
    fontSize: 16,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    width: 200,
    borderRadius: 10,
  },
});

export default Ejercicio1;

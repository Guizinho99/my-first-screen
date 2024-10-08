import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  let [newTask, setNewTask] = React.useState ('');

  return (
    <View style={styles.container}>

      <Text>Trabalhando com Hook useState</Text>
      <TextInput onChangeText={setNewTask} placeholder='Tarefa' style={styles.textinp}/>
      <Text>Elemento Digitado</Text>
      <Text>{newTask}</Text>

      {/*<Text>Digite seu nome</Text>
      <TextInput placeholder='Nome' style={styles.textinp}/>

      <Text>Digite seu Sobrenome</Text>
      <TextInput placeholder='Sobrenome' style={styles.textinp}/>

      <Text>Digite sua senha</Text>
      <TextInput placeholder='Senha' style={styles.textinp}/>
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
      <Text>Adicionar tarefa</Text>
      </TouchableOpacity>*/}


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinp: {
    backgroundColor: '#4F4F4F',
    width: 300,
    height: 50,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#DCDCDC',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
    width: 300,
  }
});

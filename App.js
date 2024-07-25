import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform } from 'react-native';

export default function App() {
  const [valueOfText, setValueOfText] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleText = () => {
    if (valueOfText.trim()) {
      setTaskList([...taskList, valueOfText]);
      setValueOfText('');
      Keyboard.dismiss();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.select({ ios: 100, android: 500 })}
    >
      <ScrollView
        contentContainerStyle={styles.taskContainer}
        keyboardShouldPersistTaps='handled'
      >
        <Text style={styles.title}>Today's tasks</Text>
        {taskList.map((item, index) => (
          <MyTask key={index} text={item} />
        ))}
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputTest}
            placeholder={'Write a task'}
            value={valueOfText}
            onChangeText={text => setValueOfText(text)}
          />
          <TouchableOpacity style={styles.inputButton} onPress={handleText}>
            <Text style={styles.inputButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

function MyTask({ text }) {
  return (
    <View style={styles.taskRow}>
      <View style={styles.buttonAndText}>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
        <Text>{text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 130,
    marginLeft: 30,
    fontSize: 30,
    color: 'black',
  },
  taskContainer: {
    borderColor: 'orange',
    borderWidth: 2,
    flexGrow: 1,
  },
  buttonAndText: {
    flexDirection: "row",
  },
  button: {
    opacity: 0.5,
    backgroundColor: '#86D7E8',
    width: 20,
    height: 20,
    borderRadius: 5,
    marginRight: 15,
  },
  taskRow: {
    alignItems: 'center',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    flexDirection: "row",
  },
  circle: {
    justifyContent: 'flex-end',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#86D7E8',
    color: 'blue',
    borderWidth: 2,
  },
  inputContainer: {
    alignItems: 'center',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
    borderColor: 'orange',
    borderWidth: 2,
    flexDirection: "row",
  },
  inputTest: {
    backgroundColor: 'white',
    width: 250,
    height: 40,
    borderRadius: 20,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  inputButton: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    justifyContent: 'center',
  },
  footerContainer: {
    justifyContent: 'space-between',
  },
  inputButtonText: {
    fontSize: 30,
    color: 'black',
    opacity: 0.3,
  },
});
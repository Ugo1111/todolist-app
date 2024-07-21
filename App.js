import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform } from 'react-native';
export default function App() {
  const [valueOfText, setValueOfText] = useState('walk the dog');
 //setValueOfText('walk the dog')
//const cat = 'money is good'
const handleText = ()=>{
  console.log(valueOfText);
}



  return (
    <View style={styles.container}>

      

      <View style={styles.taskContainer}>

<Text style={styles.title}>Today's tasks</Text>
        <View style={styles.taskRow}>
          <View style={styles.buttonAndText}>
            <TouchableOpacity style={styles.button}></TouchableOpacity>
            <Text> like👍</Text>
          </View>
          <View style={styles.circle}></View>
        </View>

        <View style={styles.taskRow}>
          <View style={styles.buttonAndText}>
            <TouchableOpacity style={styles.button}></TouchableOpacity>
            <Text> like👍</Text>
          </View>
          <View style={styles.circle}></View>
        </View>


      </View>

       

       

      <View style={styles.footerContainer}>
      <ScrollView style={styles.ugo}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.inputContainer} >
          <TextInput style={styles.inputTest} placeholder={'Write a task'} onChangeText={text =>setValueOfText(text)}  > </TextInput>
          <TouchableOpacity style={styles.inputButton}  onPress={()=>handleText() }>
            <Text style={styles.inputButtonText}>+</Text>
          </TouchableOpacity>


        </KeyboardAvoidingView></ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    justifyContent: 'space-between',
    
    // alignItems: 'center',
    // justifyContent: 'center',
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
    //width: 20,
    //height: 40,
    borderRadius: 10,
    justifyContent: 'space-between',
    //alignContent:'space-between',
    backgroundColor: 'white',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    flexDirection: "row"
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
    //width: 20,
    //height: 40,
    borderRadius: 10,
    justifyContent: 'space-between',
    //alignContent:'space-between',
    borderColor: 'orange',
    borderWidth: 2,

    flexDirection: "row"
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
    //justifyContent: 'flex-end',
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    justifyContent: 'space-between',
  },
  
  inputButtonText: {
    //marginTop: 130,
   // marginLeft: 30,
    fontSize: 30,
    color: 'black',
    opacity: 0.3,
  },
});

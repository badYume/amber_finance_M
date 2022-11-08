import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import React, { useState } from "react";

export default function App() {
<<<<<<< HEAD
  const [number, setNumber, onChangeNumber] = useState("");
    const [text, setText, onChangeText] = useState("");
=======
  const [number, setNumber ] = useState();
    const [text, setText] = useState("");
    const [disable, setDisable] = useState(true);

    function handleChange(event) {
        setDisable(event.target.value === '');
        setNumber(event)
        setText(event)
    }
>>>>>>> d476efdf3feda57fc8c2da31233d0a138d45872b

  return (
    <SafeAreaView className="mt-5">
      <View className='bg-rose-400 p-2'>
      <Text className="text-3xl font-black text-center">Finance App</Text>
              </View>
<<<<<<< HEAD
=======
      <View className='m-2 ml-64'>
      <Button
        title="Records"
        color="green"
        onPress={() => { Alert.alert(`Records Will Appear Here`);}}
      />              
      </View>
>>>>>>> d476efdf3feda57fc8c2da31233d0a138d45872b
      <SafeAreaView className="my-40">
      <SafeAreaView className="absolute ml-3 ">
      <Text className="bg-blue-500 text-white p-2 m-2 w-28 text-center rounded-2xl">Avaiable Balance {'\n'}<Text className="font-black text-green-300">$ 100000</Text></Text>
              </SafeAreaView>
      <SafeAreaView className="relative ml-56 mt-2">
      <Text className="bg-blue-500 text-white p-2 m-2 w-28 text-center rounded-2xl ">Balance {'\n'}<Text className="font-black text-yellow-300">$ 2500000</Text></Text>
              </SafeAreaView>

              <SafeAreaView>
                <Text className="font-semibold pl-16 m-2">Amount:</Text>
        <TextInput
        className="border border-black bg-gray-200 w-48 rounded-xl p-2  mx-20"
<<<<<<< HEAD
  onChangeText={onChangeNumber}
  onChange={(e) => setNumber(e.target.value)}
=======
  onChangeNumber={(num) => setNumber(num)}
>>>>>>> d476efdf3feda57fc8c2da31233d0a138d45872b
  value={number}
  placeholder="Amount Here..."
  keyboardType="numeric"
/>
<Text className="font-semibold pl-16 m-2">For:</Text>
      <TextInput
      className="border border-black bg-gray-200 w-48 rounded-xl p-2  mx-20"
<<<<<<< HEAD
        onChangeText={onChangeText}
        onChange={(e) => setText(e.target.value)}
=======
      onChangeText={(mess) => setText(mess)}
      onChange={handleChange}
>>>>>>> d476efdf3feda57fc8c2da31233d0a138d45872b
        value={text}
        placeholder="Comment Here..."
      />
       <SafeAreaView className="mt-5 mx-32">
       <Button
<<<<<<< HEAD
        title="Add"
        color="limegreen"
        onPress={() => Alert.alert('Added Successfully...')}
        disabled={[!number, !text]}
=======
       disabled={disable}
        title="Add"
        color="limegreen"
        onPress={() => { Alert.alert(`You Spend: $${number}. \nReason: ${text}`);  setNumber(''); setText('')}}
>>>>>>> d476efdf3feda57fc8c2da31233d0a138d45872b
      />
              </SafeAreaView>
              </SafeAreaView>
      <StatusBar />
    </SafeAreaView>
    </SafeAreaView>
  );
<<<<<<< HEAD
}

=======
}
>>>>>>> d476efdf3feda57fc8c2da31233d0a138d45872b

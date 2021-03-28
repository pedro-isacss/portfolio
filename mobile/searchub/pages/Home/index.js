import React from "react"
import { LinearGradient } from 'expo-linear-gradient';
import {View, TextInput, TouchableOpacity, Text, Image} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import logo from '../../assets/logo'
import styles from './styles'

function Home(props) {
  return(
    <View style={styles.container}>
      <Image source={{uri: logo, height: 70, width: 70}} />
      <View style={styles.inputContainer}>
        <Icon style={styles.icon} name="at-sharp" color="#000" size={24} />
        <TextInput style={styles.input} placeholder="Type the username" onChangeText={(text) => props.changeUser(text)} value={props.userName} />
      </View>
      <LinearGradient style={styles.button} colors={["#f09433", "#e6683c", "#dc2743", "#cc2366", "#bc1888"]} locations={[0, 0.25, 0.5, 0.75, 1]} start={{x: 1, y: 0}}>
        <TouchableOpacity style={styles.touchable} onPress={() => props.sendUser(true)}>
          <Text style={styles.textButton}>Search user</Text>
        </TouchableOpacity>
      </LinearGradient>
      <Text style={styles.copy}>© Pedro Isac</Text>
    </View>
  )
}

export default Home
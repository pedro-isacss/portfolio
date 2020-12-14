import React, {useState} from 'react';
import {View, TouchableOpacity} from "react-native"
import Icon from "react-native-vector-icons/Feather"
import {styles} from './styles'

const Controllers = (props) => {
  return(
    <View style={styles.container}>
      {props.paused? (
        <TouchableOpacity style={styles.buttons} onPress={() => props.changePaused(false)}>
        <Icon name="play" size={24} color="#fff"/>
      </TouchableOpacity>
      ):(
        <TouchableOpacity style={styles.buttons} onPress={() => props.changePaused(true)}>
        <Icon name="pause" size={24} color="#fff"/>
      </TouchableOpacity>
      )}
      <TouchableOpacity>
        <Icon name="rotate-ccw" size={24} color="#fff" onPress={() => {
          props.changePaused(false)
          props.changeRestart(true)
        }}/>
      </TouchableOpacity>
    </View>
  )
}

export default Controllers;
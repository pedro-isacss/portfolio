import React, {useEffect, useState} from "react"
import { LinearGradient } from 'expo-linear-gradient';
import {View, Image, Text, TouchableOpacity, ScrollView, FlatList} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import styles from "./styles"
import axios from "axios"

function Profile(props) {
  const [data, setData] = useState({})
  const [repos, setRepos] = useState([])
  const [user, setUser] = useState(props.userName)

  useEffect(() => {
    axios.get(`https://api.github.com/users/${user}`).then(res => {
     setData(res.data);
    })
    axios.get(`https://api.github.com/users/${user}/repos`).then(resRepos => {
      setRepos(resRepos.data)
    })
  }, [user])

  return(
    data.login !== undefined?(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.logout(false)} style={styles.logoutBtn}>
        <Icon name="arrow-undo-circle-outline" size={20} color="#fff" />
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImg} source={{uri: data.avatar_url, width: 70, height: 70}}  />
        <Text style={styles.profileName}>{data.name} <Text style={styles.profileUser}>({data.login})</Text></Text>
        <Text style={styles.profileBio}>{data.bio}</Text>
        <View style={styles.btnContainer}>
        <LinearGradient style={styles.btnProfile} colors={["#f09433", "#e6683c", "#dc2743", "#cc2366", "#bc1888"]} locations={[0, 0.25, 0.5, 0.75, 1]} start={{x: 1, y: 0}}>
          <TouchableOpacity style={styles.textBtnProfileTouchable}>
            <Text style={styles.textBtnProfile}>Go to profile</Text>
          </TouchableOpacity>
        </LinearGradient>
          <TouchableOpacity style={styles.btnTwitter}>
            <Icon name="logo-twitter" color="#000" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {repos.map(repo => {
          return(
            <TouchableOpacity style={styles.repoContainer}>
              <Text style={styles.repoName}>{repo.name}</Text>
              <View style={styles.starContainer}>
              <Icon name="star-outline" size={14} color="#fff" />
              <Text style={styles.starText}>{repo.stargazers_count}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>):(
      <View style={styles.container}>
        
      </View>
    )
  )
}

export default Profile
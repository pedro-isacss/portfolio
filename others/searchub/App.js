import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './pages/Home/index'
import Profile from './pages/Profile/index'

export default function App() {
  const [hasUser, setHasUser] = useState(false)
  const [user, setUser] = useState("")
  useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <View style={styles.container}>
      {hasUser?<Profile userName={user} logout={setHasUser} />:<Home sendUser={setHasUser} changeUser={setUser} userName={user} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'


const About = () => {
  const totalLikes = useSelector(state => state.dataReducer.totalLikes);

  return (
    <SafeAreaView style={styles.constainer}>
      <Text>About</Text>
      <Text>Total Likes: {totalLikes}</Text>
    </SafeAreaView>
  )
}

export default About

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
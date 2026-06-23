import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

const Setting = () => {
  const totalLikes = useSelector(state => state.totalLikes);

  return (
    <SafeAreaView style={styles.constainer}>
      <Text>Setting</Text>
      <Text>Total Likes: {totalLikes}</Text>
    </SafeAreaView>
  )
}

export default Setting

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
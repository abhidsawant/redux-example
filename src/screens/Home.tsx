import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'
import { decreaseTotalLikes, increaseTotalLikes } from '../store/actions/dataActions'
import { RootState } from '../store/store'

const Home = () => {
  const dispatch = useDispatch();
  const totalLikes = useSelector((state: RootState) => state.dataReducer.totalLikes);

  return (
    <SafeAreaView style={styles.constainer}>
      <Text>Home</Text>
      <Text>Total Likes: {totalLikes}</Text>
      <Button title='+' onPress={() => dispatch(increaseTotalLikes(3))}/>
      <Button title='-' onPress={() => dispatch(decreaseTotalLikes(2))}/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
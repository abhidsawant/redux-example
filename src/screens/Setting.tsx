import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'
import { updateRole } from '../store/actions/settingActions'

const Setting = () => {
  const [userRole, setuserRole] = useState("")
  const dispatch = useDispatch();
  const totalLikes = useSelector(state => state.dataReducer.totalLikes);
  const role = useSelector(state => state.setting.userRole);

  return (
    <SafeAreaView style={styles.constainer}>
      <Text>Settings</Text>
      <Text>User Role: {role}</Text>
      <Text>Total Likes: {totalLikes}</Text>
      <TextInput 
        style={{borderWidth: 1, width: 200}}
        placeholder='Enter New Role'
        value={userRole}
        onChangeText={setuserRole}
      />
      <Button 
        title="Change Role" 
        onPress={() => {
          if(userRole.trim() === "") return;
          dispatch(updateRole(userRole));
          setuserRole("");
        }}/>
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
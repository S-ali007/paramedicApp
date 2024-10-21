import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Greeting = () => {
  return (
        <Pressable onLongPress={()=>alert('kii')}>

        
      <Text >Greeting</Text>
      </Pressable>
   
  )
}

export default Greeting
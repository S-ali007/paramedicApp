import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageComponents = () => {
  return (
    <View>
        <Image style={{width:425 , height:470 }} source={require('../assets/autum.jpg')} />
    </View>
  )
}

export default ImageComponents
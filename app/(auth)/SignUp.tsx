import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Text>Already have an account? <Link href='/(auth)/Sign-in'>Sign in</Link> instead</Text>
    </View>
  )
}

export default SignUp
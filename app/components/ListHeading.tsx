import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements'

const ListHeading = ({ title } : ListHeadingProps) => {
    return (
        <View className='list-head'>
            <Text className='list-title'>{title}</Text>
            <TouchableOpacity className='list-action'>
                <Text className='list-action-text'>View all</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ListHeading
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { capitalizeFirstLetter } from '../util'

export default props => {

    const { people, navigateToPeopleDetail } = props
    const { title, first, last } = people.name
    const { thumbnail } = people.picture

    return (
        <TouchableOpacity onPress={ () => {
            navigateToPeopleDetail({ people })
        }}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: thumbnail }} />
                <Text style={styles.lineText}>
                    {`${capitalizeFirstLetter(title)
                        } ${capitalizeFirstLetter(first)
                        } ${capitalizeFirstLetter(last)}`}
                </Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        flexDirection: 'row',
        alignItems: 'center'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    }
})
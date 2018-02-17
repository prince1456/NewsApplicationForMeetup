import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Search extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.homeText}>
                    Search     
                </Text>
            </View>
        )
    }
}
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        },
        homeText: {
            fontSize: 26,
        }
    })
export default Search 
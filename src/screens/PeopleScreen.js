import React, { Component } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import axios from 'axios'

// import Header from '../components/Header'
import PeopleList from '../components/PeopleList'

const URL = 'https://randomuser.me/api/?nat=br&results=150'

export default class PeopleScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            peoples: [],
            loading: false,
            error: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.getList()
    }

    async getList() {
        try {
            const response = await axios.get(URL)
            const { results } = response.data

            this.setState({
                peoples: results,
                loading: false
            })
        } catch (error) {
            console.log('erro -------------------', error)
            this.setState({
                loading: false,
                error: true
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>

                {
                    this.state.loading
                        ? <ActivityIndicator size='large' color='#6ca2f7' />
                        : this.state.error
                        ? <Text style={styles.error}>Oops... Algo deu errado =( </Text>
                        : <PeopleList
                            peoples={this.state.peoples}
                            onPressItem={pageParams => {
                                    this.props.navigation.navigate('PeopleDetail', pageParams)
                                }
                            }
                        />
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    error: {
        alignSelf: 'center',
        color: 'red',
        fontSize: 18
    }
})
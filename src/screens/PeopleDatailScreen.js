
import { View, ScrollView, Image, StyleSheet } from 'react-native'

import Line from '../components/Line'

export default class PeopleDetailScreen extends Component {
    render() {
        const { people } = this.props.navigation.state.params

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image 
                        source={{ uri: people.picture.large }} 
                        style={styles.avatar} />

                    <View style={styles.detailContainer}>
                        <Line label={'Email: '} content={people.email}/>
                        <Line label={'Cidade: '} content={people.location.city}/>
                        <Line label={'Estado: '} content={people.location.state}/>
                        <Line label={'Tel: '} content={people.phone}/>
                        <Line label={'Cel: '} content={people.cell}/>
                        <Line label={'Nacionalidade: '} content={people.nat}/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({.+9678    container: {
        backgroundColor: 'white',
        margin: 15,
        elevation: 2,
        borderRadius: 5,
    },
    avatar: {
        aspectRatio: 1,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    detailContainer: {
        backgroundColor: 'white',
        marginTop: 10,
        paddingBottom: 10,
        borderRadius: 5
    }
})
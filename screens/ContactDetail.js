import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Avatar } from 'react-native-elements';
export default function ContactDetail({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainerWraper}>
                <View style={styles.imageContainer}>
                    {
                        navigation.getParam('image') !== "" ?
                            <Avatar
                                size="large"
                                rounded
                                source={{
                                    uri: navigation.getParam('image'),
                                }}
                            /> :
                            <Avatar
                                size="large"
                                rounded
                                source={require('../images/profile.png')}
                            />
                    }
                </View>
            </View>
            <View style={styles.name}>
                <Text style={styles.nameText}>{navigation.getParam('name')}</Text>
            </View>
            <View style={styles.phno}>
                <Text style={styles.heading}>
                    Phone Number:
                </Text>
                <TextInput
                    style={styles.inputField}
                    value={navigation.getParam('phone')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // alignItems: "center"
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainerWraper: {
        height: 150
    },
    inputField: {
        fontWeight: "400",
        fontSize: 20,
        width: "60%",
        alignItems: "center",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        paddingLeft: 30
    },
    name: {
        alignItems: "center",
        height: 40,
        justifyContent: "center"
    },
    nameText: {
        fontSize: 22,
        fontWeight: "bold"
    },
    phno: {
        flexDirection: "row",
        marginTop: 20,
        height: 50

    },
    heading: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: "4%",
        marginLeft: 10
    }
})
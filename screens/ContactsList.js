import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import * as Contacts from 'expo-contacts'
import { Avatar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
export default function ContactsList({ navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    const [contacts, setContact] = useState([])
    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers, Contacts.Fields.Image],
                });
                if (data.length > 0) {
                    setContact(data)
                    setIsLoading(false)
                }
            }
        })();
    }, [])

    const renderItems = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("Detail", {
                name: item.name,
                phone: item.phoneNumbers[0].number,
                image: item.image ? item.image.uri : ""
            })}>
                <View style={styles.renderContainer}>
                    <View>
                        {
                            item.imageAvailable ?
                                <Avatar
                                    size="medium"
                                    rounded
                                    source={{
                                        uri: item.image.uri,
                                    }}
                                /> :
                                <Avatar
                                    size="medium"
                                    rounded
                                    source={require('../images/profile.png')}
                                />
                        }
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.contactName}>{item.name}</Text>
                        <Text>{item?.phoneNumbers ? item.phoneNumbers[0].number : null}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const emptyComponent = () => {
        return (
            <View style={styles.contactNotFoundView}>
                <Text style={styles.contactNotFoundText}>No Contact Found</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.listSection}>
                {
                    isLoading ?
                        <View style={{ ...StyleSheet.absoluteFill, alignItems: "center", justifyContent: "center" }}>
                            <ActivityIndicator />
                        </View> : null
                }
                <FlatList
                    data={contacts}
                    renderItem={renderItems}
                    ListEmptyComponent={emptyComponent}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchField: {
        backgroundColor: "#d3d3d3",
        height: 50,
        fontSize: 36,
        paddingLeft: 10
    },
    listSection: {
        flex: 1,
        marginLeft: 10
    },
    contactNotFoundText: {
        color: "red"
    },
    contactNotFoundView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    renderContainer: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 5,
        height: 60,
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#D4D4D4"
    },
    contactName: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5
    },
    details: {
        marginLeft: 10
    }

})
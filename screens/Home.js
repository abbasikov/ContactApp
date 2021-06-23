import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Home({ navigation }) {
    const navigationHandler = () => {
        navigation.navigate("ContactList")
    }
    return (
        <View style={styles.container}>
            {/* <Button title="Contacts" onPress={navigationHandler}></Button> */}
            <Text style={styles.heading}>
                To view your contacts please press the button bellow
            </Text>
            <TouchableWithoutFeedback onPress={navigationHandler}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        Contacts
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
    },
    button: {
        padding: 20,
        borderRadius: 10,
        marginTop: "30%",
        backgroundColor: "#87CEEB",
        color: "white"
    },
    heading: {
        fontSize: 18,
        marginTop: "30%"
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    }
})
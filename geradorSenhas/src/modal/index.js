import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';


export function ModalPassword({senha, handleClose, salvarSenha }) {

    function copyToClipboard() {
        Clipboard.setStringAsync(senha);
        Toast.show({
            type: 'success',
            text1: 'Senha copiada!',
            text2: 'A senha foi copiada para a área de transferência 👌',
    });
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}> Senha gerada </Text>

        <Pressable style={styles.innerPassword} onPress={copyToClipboard}> 
        <Text style={styles.text}> {senha} </Text>
        </Pressable>

        <View style={styles.buttonArea}>
        <TouchableOpacity styles={styles.button} onPress={handleClose}>
        <Text style={styles.buttonText}> Voltar </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={salvarSenha}>
            <Text style={styles.buttonSaveText}> Salvar senha </Text>
        </TouchableOpacity>
        </View>

        
        </View>
        <Toast/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)", flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content:{
        backgroundColor: "#000",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24, alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title:{
        fontSize: 28,
        fontWeight: "bold",
        color: "#FFF",
        marginBottom: 24,
    },
    innerPassword: {
        backgroundColor: "#404040",
        width: "90%",
        padding: 14,
        borderRadius: 8,
    },
    text: {
        color: "#FFF",
        textAlign: "center"
    },
        buttonArea: {
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#000",
        },
        button: {
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
        },
        buttonSave:{
        backgroundColor: "#2499c7",
        borderRadius: 8,
        },
        buttonSavePassword:{
            backgroundColor: "#392DE9",
            borderRadius: 8,
            },
        buttonSaveText:{
        color: "#FFF",
        fontWeight: 'bold',
    },
    buttonText: {
        backgroundColor: '#2499c7',
        color: '#FFF',
        padding: 5,
        margin: 5,
        borderRadius: 8,
    },
})
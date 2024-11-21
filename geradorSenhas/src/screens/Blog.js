import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Blog() {
    const tips = [
        "1. Use senhas longas: quanto mais caracteres, melhor.",
        "2. Evite informações pessoais, como datas de nascimento.",
        "3. Utilize combinações de letras maiúsculas, minúsculas, números e símbolos.",
        "4. Troque suas senhas periodicamente.",
        "5. Nunca use a mesma senha para múltiplas contas.",
        "6. Utilize gerenciadores de senha para gerar e armazenar combinações seguras."
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>A Importância de Senhas Fortes</Text>
            {tips.map((tip, index) => (
                <View key={index} style={styles.tipBox}>
                    <Text style={styles.tipText}>{tip}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#303030',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 20,
    },
    tipBox: {
        backgroundColor: '#000',
        padding: 15,
        marginVertical: 10,
        borderRadius: 8,
        width: '100%',
    },
    tipText: {
        fontSize: 16,
        color: '#FFF',
    },
});

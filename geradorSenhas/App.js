import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';

// *** NOVO: Importações para Navegação ***
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// *** Fim das Novas Importações para Navegação ***

import SavedPasswords from "./src/screens/SavedPasswords"; // *** NOVO: Tela de Senhas Salvas ***
import { ModalPassword } from './src/modal/index';
import Blog from './src/screens/Blog'; // Tela de Dicas de Senhas Fortes

 
let charset = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// *** NOVO: Criação do Stack Navigator para as Telas ***
const Stack = createStackNavigator();
// *** Fim da Criação do Stack Navigator ***

function HomeScreen({ navigation }) {
  const [senhaGerada, setSenhaGerada] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [SavedPasswords, setSavedPasswords] = useState([]); // *** NOVO: Estado para Senhas Salvas ***
  

  function gerarSenha() {
    let senha = "";
 
    for (let i = 0, n = charset.length; i < 10; i++) {
      senha += charset.charAt(Math.floor(Math.random() * n));
    }
 
    setSenhaGerada(senha);
    setModalVisible(true);
  }
  
  // ** NOVO: Função para Salvar Senha e Navegar para Tela de Senhas Salvas ***
  function salvarSenha() {
    setSavedPasswords(prevPasswords => { 
      const updatedPasswords = [...prevPasswords, senhaGerada];
      setModalVisible(false); // Fecha o modal após salvar a senha
      navigation.navigate('SavedPasswords', { SavedPasswords: updatedPasswords }); // Navega e passa as senhas
      return updatedPasswords; // Atualiza o estado de senhas salvas
    });
  }
  // *** Fim da Função de Salvar Senha e Navegar ***

  return (    
    <View style={styles.container}>
      <Image
        source={require("./src/img/logolock.png")}
        style={styles.logo}
      />
 
      <Text style={styles.title}> LockGen </Text>
 
      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.textButton}> Gerar Senha </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={salvarSenha}>
        <Text style={styles.textButton}> Senhas Salvas </Text>
      </TouchableOpacity>

      <TouchableOpacity 
    style={styles.button} 
    onPress={() => navigation.navigate('Blog')} // Navegar para a página Blog
>
    <Text style={styles.textButton}>Importância das Senhas Fortes</Text>
</TouchableOpacity>


      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword senha={senhaGerada} handleClose={ () => setModalVisible(false)} salvarSenha={salvarSenha} />
      </Modal>
     
      <Text style={styles.senha}> {senhaGerada} </Text>
    </View>
  );
}
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SavedPasswords" component={SavedPasswords} />
        <Stack.Screen name="ShowSavedPasswords" component={SavedPasswords} />
        <Stack.Screen name="Blog" component={Blog} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Branco luminoso
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 50,
    color: '#2D2D2D', // Preto fosco
    textShadowColor: 'rgba(0, 174, 239, 0.3)', // Glow azul leve
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  button: {
    backgroundColor: '#333', // Preto fosco
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 6,
    margin: 6,
    shadowColor: '#00AEEF', // Glow azul neon
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  textButton: {
    color: '#FFF', // Branco
    fontSize: 15,
    fontWeight: 'bold',
  },
  senha: {
    marginTop: 20,
    color: '#333', // Preto fosco
    fontSize: 15,
    fontWeight: 'bold',
  },
});


import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";
import styles from "./styles";
import logoImg from "../../assets/logo.png";

export default function Detail() {
  const navigation = useNavigation();
  const message = `Olá professor, gostaria de tirar algumas dúvidas desta aula Mercado de TI, API REST`;

  function navigationBack() {
    navigation.goBack();
  }
  function sendMail() {
    MailComposer.composeAsync({
      subject: `Aluno da aula : Mercado de TI, API REST`,
      recipients: ["rafaellevissa@hotmail.com"],
      body: message,
    });
  }
  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=557192008833&text=${message}`);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigationBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>
      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>
          Disciplina:
        </Text>
        <Text style={styles.incidentValue}>
          Desenvolvimento de Sistemas para Dispositivos Móveis
        </Text>

        <Text style={styles.incidentProperty}>Descrição:</Text>
        <Text style={styles.incidentValue}>
          Principais características do mercado de TI atualmente, dicas para
          marketing pessoal e pricnipais conceitos do desenvolvimento web
          moderno.
        </Text>

        <Text style={styles.incidentProperty}>Docente:</Text>
        <Text style={styles.incidentValue}>Rafael Levi Costa</Text>
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Tire suas dúvidas desta aula:</Text>
        <Text style={styles.heroTitle}>Entre em contato com o professor.</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

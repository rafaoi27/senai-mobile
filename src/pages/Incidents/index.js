import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import logoImg from "../../assets/logo.png";
import styles from "./styles";
import api from "../../services/api";

export default function Incidents() {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function navigateToDetail() {
    navigation.navigate("Detail");
  }
  async function loadIncidents() {
    if (loading) {
      return;
    }
    if (total > 0 && incidents.length == total) {
      return;
    }
    setLoading(true);
    const response = await api.get("incidents", {
      params: { page },
    });

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers["x-total-count"]);
    setPage(page + 1);
    setLoading(false);
  }
  useEffect(() => {
    loadIncidents();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>2 disciplinas</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem-vindo aluno</Text>
      <Text style={styles.description}>Escolha um das aulas abaixo.</Text>
      <FlatList
        data={[1, 2, 3]}
        style={styles.incidentList}
        keyExtractor={(lessons) => String(lessons)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>Disciplina:</Text>
            <Text style={styles.incidentValue}>
              Desenvolvimento de Sistemas para Dispositivos Móveis
            </Text>

            <Text style={styles.incidentProperty}>Aula:</Text>
            <Text style={styles.incidentValue}>Mercado de TI, API REST</Text>

            <Text style={styles.incidentProperty}>Data:</Text>
            <Text style={styles.incidentValue}>20/05/2020</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail()}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#004a88",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 15,
    color: "#E2E3EB",
  },
  headerTextBold: {
    fontWeight: "bold",
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: "#E2E3EB",
    fontWeight: "bold",
  },
  description: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 24,
    color: "#E2E3EB",
  },
  incidentList: {
    marginTop: 32,
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold",
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#3B4253",
  },
  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailsButtonText: {
    color: "#e02041",
    fontSize: 15,
    fontWeight: "bold",
  },
});

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // 👈 Import navigation hook

export default function HomeScreen() {
  const navigation = useNavigation(); // 👈 Get navigation object

  return (
    <View style={styles.container}>
      {/* App Title */}
      <Text style={styles.title}>🏥 Home Doctor</Text>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Signup")} // Navigate to Signup screen
      >
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#27ae60" }]} // Different color for Login
        onPress={() => navigation.navigate("Login")} // Navigate to Login screen
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f7fa", // light background
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#2c3e50",
    textAlign: "center",
  },
  button: {
    width: "70%",
    paddingVertical: 15,
    marginVertical: 10,
    backgroundColor: "#3498db", // blue color
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

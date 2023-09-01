import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [ostos, setOstos] = useState("");
  const [data, setData] = useState([]);
  const add = () => {
    setData([...data, {ostos}])
  };
  const clearList = () => {
    setData([]);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(ostos) => setOstos(ostos)} value={ostos}
      ></TextInput>
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <Button onPress={add} title="Add" />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={clearList} title="Clear" />
        </View>
      </View>
      <View style={styles.buttonRow}>
        <Text style={styles.textStyles}>Shopping list</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text>{item.ostos}</Text>
        )}
        keyExtractor={(item,index) => index.toString()}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonContainer: {
    marginRight: 10,
  },
  textStyles: {
    fontWeight: "500",
    color:"blue"
  },
});

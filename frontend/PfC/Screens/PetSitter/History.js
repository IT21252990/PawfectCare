import React from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: 415,
    height: 63,
    marginLeft: 0,
    marginTop: 40,
    flexShrink: 0,
    borderRadius: 30,
    backgroundColor: "#C57AFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  headerText: {
    width: 254,
    height: 26.54,
    flexShrink: 0,
    color: "#3D3836",
    textAlign: "center",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 26.54,
  },
  listItem: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  taskDescription: {
    fontSize: 14,
  },
});

const History = () => {
  // Simulated list of completed tasks
  const completedTasks = [
    {
      title: " Kitty",
      description: "Completed on 2023-10-25",
    },
    {
      title: "Leo",
      description: "Completed on 2023-10-24",
    },
    {
      title: "Charlie",
      description: "Completed on 2023-10-23",
    },
  ];

  return (
    <ImageBackground
      source={require("../../assets/images/mainbg.jpeg")}
      style={styles.container}
      imageStyle={styles.background}
    >
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>History</Text>
        </View>

        <View style={styles.backgroundBox}>
          {/* Map through the list of completed tasks and display them */}
          {completedTasks.map((task, index) => (
            <TouchableOpacity key={index} style={styles.listItem}>
              <Text style={styles.taskTitle}>{task.title}</Text>
              <Text style={styles.taskDescription}>{task.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default History;

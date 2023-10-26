import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const MyTasks = ({ acceptedAppointments: propAcceptedAppointments }) => {
  const [acceptedAppointments, setAcceptedAppointments] = useState([]);
  const route = useRoute();
  const acceptedTask = route.params?.acceptedTask;
  const navigation = useNavigation();

  // Add an effect to update the state with the accepted task
  useEffect(() => {
    if (acceptedTask) {
      setAcceptedAppointments([...acceptedAppointments, acceptedTask]);
    }
  }, [acceptedTask]);

  // Add a function to handle task details navigation
  const handleTaskDetails = (task) => {
    navigation.navigate("TaskDetails", { task });
  };

  // Add two static tasks
  const staticTask1 = {
    petName: "Leo",
    ownerName: "Alice Johnson",
  };

  const staticTask2 = {
    petName: "Charlie-",
    ownerName: "Bob Smith",
  };

  

  return (
    <ImageBackground
      source={require("../../../assets/images/mainbg.jpeg")}
      style={styles.container}
      imageStyle={styles.background}
    >
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>My Tasks</Text>
        </View>

        <View style={styles.backgroundBox}>
          {/* Map through accepted appointments */}
          {acceptedAppointments.map((task, index) => (
            <TouchableOpacity
              key={index}
              style={styles.taskItem}
              onPress={() => handleTaskDetails(task)}
            >
              <View style={styles.petContainer}>
                <Image
                  source={require("../../../assets/images/loginpic.png")}
                  style={styles.petImage}
                />
              </View>
              <View style={styles.taskInfo}>
                <Text style={styles.petName}>{task.petName}</Text>
                <Text style={styles.ownerInfo}>Owner - {task.ownerName}</Text>
                <Text style={styles.sinceDate}>
                  Since {new Date("2023-10-26").toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          {/* Display static tasks */}
          <TouchableOpacity
            style={styles.taskItem}
            onPress={() => handleAcceptTask(staticTask1)}
          >
            <View style={styles.petContainer}>
              <Image
                source={require("../../../assets/images/loginpic.png")}
                style={styles.petImage}
              />
            </View>
            <View style={styles.taskInfo}>
              <Text style={styles.petName}>{staticTask1.petName}</Text>
              <Text style={styles.ownerInfo}>Owner - {staticTask1.ownerName}</Text>
              <Text style={styles.sinceDate}>
                Since {new Date("2023-10-26").toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.taskItem}
            onPress={() => handleAcceptTask(staticTask2)}
          >
            <View style={styles.petContainer}>
              <Image
                source={require("../../../assets/images/loginpic.png")}
                style={styles.petImage}
              />
            </View>
            <View style={styles.taskInfo}>
              <Text style={styles.petName}>{staticTask2.petName}</Text>
              <Text style={styles.ownerInfo}>Owner - {staticTask2.ownerName}</Text>
              <Text style={styles.sinceDate}>
                Since {new Date("2023-10-26").toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: 395,
    height: 63,
    marginLeft: 0,
    marginTop: 40,
    flexShrink: 0,
    borderRadius: 30,
    backgroundColor: "#C57AFF",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 15,
    padding: 15,
  },
  headerText: {
    color: "#3D3836",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  backgroundBox: {
    marginLeft: 18,
    width: 360,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 15,
    padding: 10,
    margin: 10,
    marginBottom: 40,
  },
  taskItem: {
    flexDirection: "row",
    backgroundColor: "#dbb0f6",
    borderRadius: 30,
    padding: 10,
    marginVertical: 10,
  },
  petContainer: {
    flex: 1,
    marginRight: 10,
  },
  petImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  taskInfo: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
  },
  petName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ownerInfo: {
    fontSize: 14,
  },
  sinceDate: {
    fontSize: 14,
  },
});

export default MyTasks;

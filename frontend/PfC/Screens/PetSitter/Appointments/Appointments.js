import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { collection, query, getDocs, orderBy, limit } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const navigation = useNavigation();

  const acceptAppointment = (acceptedAppointment) => {
    // Remove the accepted appointment from the appointments list
    setAppointments((prevAppointments) => prevAppointments.filter((appointment) => appointment.id !== acceptedAppointment.id));
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const q = query(
          collection(FIRESTORE_DB, "bookings"),
          
          
        );

        const querySnapshot = await getDocs(q);

        const appointmentData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data) {
            appointmentData.push({
              id: doc.id,
              accountHolderName: data.accountHolderName,
              petBreed: data.petBreed,
              petAge: data.petAge,
              petGender: data.petGender,
              petName : data.petName,
              contactNumber:data.contactNumber,
              createdAt: data.bookingDate,
            });
          }
        });

        setAppointments(appointmentData);
        console.log("Fetching appointments...");
console.log("Query Snapshot:", querySnapshot.size);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <ImageBackground
      source={require("../../../assets/images/mainbg.jpeg")}
      style={styles.container}
      imageStyle={styles.background}
    >
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>APPOINTMENTS</Text>
        </View>
        <View style={styles.backgroundBox}>
        <View >
          {appointments.map((appointment) => (
            <TouchableOpacity
              key={appointment.id}
              style={styles.appointmentItem}
              onPress={() => {
                // Navigate to the appointment detail page with the appointment data
                navigation.navigate("AppointmentDetail", { appointment: appointment, acceptAppointment });
              }}
            >
              <Text style={styles.appointmentText}>
                <Text style={styles.appointmentTitle}>
                  {`${appointment.accountHolderName} requested a pet sitting appointment`}
                </Text>
                {"\n"}
                
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        
          {/* Additional content */}
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
  appointmentList: {
    paddingHorizontal: 20,
  },
  appointmentItem: {
    backgroundColor: "#dbb0f6",
    borderRadius: 30,
    padding: 19,
    marginVertical: 10,
  },
  appointmentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  appointmentDate: {
   
    fontSize: 14,
    color: "#555",
  },
  appointmentText: {
    color: "#000",
  },
});

export default Appointments;

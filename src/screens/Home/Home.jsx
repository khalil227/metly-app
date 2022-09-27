import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import weather from "../../predefinedData/weather";
import CityScreen from "../../components/add-city";

import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const { navigate } = useNavigation();

  const [key, setKey] = useState("1");
  const [modalVisible, setModalVisible] = useState(true);

  let hour = new Date().getHours();
  let beforeNight = hour > 6 && hour < 18;

  const dataItem = useSelector((state) => state.persistedReducer.weather.weather);
  useEffect(()=>{
    if (dataItem[0].isApplied){
      setModalVisible(false);
    }
  }, [])
  const render = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.item, { backgroundColor: item.bgColor }]}
        onPress={() => {
          if (!item.isApplied) {
            setKey(item.key);
            setModalVisible(true);
          }
          else {
            navigate('Weather', { city: item.city.name, color: item.bgColor , key: item.key});
          }
        }}
      >
        {item.isApplied ? (
          <View style={styles.card}>
            {weather.map((i, index) => {
              if (i.name == item.city.condition) {
                console.log(beforeNight);
                return (
                  <MaterialCommunityIcons
                    name={beforeNight ? i.icon : i.iconNight}
                    key={index}
                    size={80}
                    color="white"
                  />
                );
              }
            })}
            <View style={{ alignItems: "center" }}>
              <Text style={styles.cardName}>
                {item.city.name.toUpperCase()}
              </Text>
              <Text style={styles.cardDeg}>{parseInt(item.city.temp)}°C</Text>
            </View>
          </View>
        ) : (
          <Text style={{ fontSize: 70, color: "white" }}>+</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <CityScreen visible={modalVisible} action={setModalVisible} id={key} />
      <View style={{ height: "100%", padding: 0, paddingTop: 50 }}>
        <FlatList
          style={{ height: 0 }}
          data={dataItem}
          renderItem={render}
          extraData={dataItem}
          keyExtractor={(item) => item.key}
          numColumns={2}
        />
      </View>
      <StatusBar
        style="light"
        backgroundColor={modalVisible ? "#c16864" : "transparent"}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#191f2c",
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    width: 170,
    margin: 5,
    height: 350,
    borderRadius: 10,
  },
  card: {
    height: 200,
    alignItems: "center",
    justifyContent: "space-around",
  },
  cardName: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  cardDeg: {
    fontSize: 20,
    color: "white",
  },
});

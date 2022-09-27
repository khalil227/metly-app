import { View, Text } from "react-native";
import styles from "./styles";
import weather from "../../predefinedData/weather";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HourlyForecast = ({ data }) => {
    let hour = new Date().getHours();
    let beforeNight = hour > 6 && hour < 18;
    return (
        <View style={styles.forecast}>
            <Text style={styles.HourlyForecastTitle}>Day forecast</Text>
            <View style={styles.HourlyForecast}>
                {data.hour.map((i, index) => {
                    let h = new Date(i.time.replace(" ", "T")).getHours();
                    let weatherTemp = weather.find((w) => w.name == i.condition.text);
                    if (index >= hour && index < hour + 6) {
                        return (
                            <View style={styles.HourlyForecastItem} key={index}>
                                <MaterialCommunityIcons
                                    name={beforeNight ? weatherTemp.icon : weatherTemp.iconNight}
                                    key={index}
                                    size={40}
                                    color="white"
                                />
                                <Text style={styles.HourlyForecastTime}>
                                    {h % 12 == 0 ? 12 : h % 12}
                                    {h > 12 ? "pm" : "am"}
                                </Text>
                            </View>
                        );
                    }
                })}
            </View>
        </View>
    );
};
export default HourlyForecast;

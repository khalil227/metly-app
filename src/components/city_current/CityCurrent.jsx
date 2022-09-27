import { View, Text} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import weather from "../../predefinedData/weather";

const CityCurrent = ({data})=>{
    let hour = new Date().getHours();
    let beforeNight = hour > 6 && hour < 18;
    let weatherIcon = weather.find(w=> w.name == data.current.condition.text)

    return(
        <View style={styles.city}>
                <Text style={styles.cityname}>{data.location.name}</Text>
                
                            <MaterialCommunityIcons
                                name={beforeNight ? weatherIcon.icon : weatherIcon.iconNight}
                                size={120}
                                color="white"
                            />
            <Text style={styles.citytemp}>{data.current.condition.text} | {data.current.temp_c}°C</Text>
            </View>
    )
}

export default CityCurrent;

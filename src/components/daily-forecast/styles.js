import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    forecast: {
        width: 320,
        height: 50,
    },
    
    
    dailyForecastItem: {
        height: 80,
        justifyContent: "space-between",
        alignItems: "center",
    },
    dailyForecastTitle:{
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10
    },
    dailyForecast: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    dailyForecastTemp:{
        fontSize: 10,
        color: "white",
        fontWeight: "bold",
    },
    dailyForecastDay:{
        color: "white",
        fontWeight: "bold",
    }
});

export default styles;
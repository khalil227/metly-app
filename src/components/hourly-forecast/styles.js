import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    forecast: {
        width: 320,
        height: 50,
    },
    HourlyForecast: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    HourlyForecastItem: {
        height: 70,
        justifyContent: "space-between",
        alignItems: "center",
    },
    HourlyForecastTitle:{
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10
    },
    HourlyForecastTime:{
        color: "white",
        fontWeight: "bold",
    },
});

export default styles;
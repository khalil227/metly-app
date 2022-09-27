import { View, StyleSheet, Text, TouchableOpacity, } from "react-native"
import { StatusBar } from "expo-status-bar";
import { useGetWeatherByTypeQuery } from "../../../features/api/weatherAPI";

import { useState } from "react";

import CityCurrent from "../../components/city_current";
import Wind from "../../components/wind";
import HourlyForecast from "../../components/hourly-forecast/HourlyForecast";
import { useNavigation } from "@react-navigation/native";
import AwesomeAlert from "react-native-awesome-alerts";
import { deleteWeather } from "../../../features/slice/weatherSlice";
import { useDispatch } from "react-redux";
import DailyForecast from "../../components/daily-forecast";
import { AntDesign } from '@expo/vector-icons';


const Weather = ({route})=>{
    const dispatch = useDispatch();
    const { goBack } = useNavigation();
    let {data, isLoading} = useGetWeatherByTypeQuery(route.params.city);

    const [alert, setAlert] = useState(false)

    if(!isLoading){
    
    let currentDate = data.forecast.forecastday[0];
    let days = data.forecast.forecastday;


    return (
        <View style={[styles.container, {backgroundColor: route.params.color}]}>
            <TouchableOpacity style={styles.exit} onPress={()=>goBack()}><AntDesign name="arrowleft" size={24} color="white" /></TouchableOpacity>
            <TouchableOpacity style={styles.delete} onPress={()=>setAlert(true)}><AntDesign name="delete" size={24} color="white" /></TouchableOpacity>
            
            <CityCurrent data={data}/>
            <Wind data={data}/>
            <HourlyForecast data={currentDate} />
            <DailyForecast data={days}/>
            <AwesomeAlert show={alert}
                        showProgress={false}
                        title={"Delete"}
                        message={"Are u sure you wanna delete ?"}
                        closeOnTouchOutside={true}
                        closeOnHardwareBackPress={true}
                        showConfirmButton={true}
                        showCancelButton={true}
                        confirmText="Yes"
                        cancelTex="No"
                        confirmButtonColor="#1887DD"
                        cancelButtonColor="#d22222"
                        animationValue={5}
                        onConfirmPressed={() => {
                            dispatch(deleteWeather({key: route.params.key}));
                            goBack();
                        }}
                        onCancelPressed={() => {setAlert(false)}}
        />
        <StatusBar
        style="light"
        backgroundColor="transparent"
        />
        </View>
    )
    }
}

const styles = StyleSheet.create({
    exit:{
        position: 'absolute',
        top: 50,
        left: 20
    },
    delete: {
        position: 'absolute',
        top: 50,
        right: 20
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    
    

})

export default Weather;
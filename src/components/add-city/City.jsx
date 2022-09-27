import {Modal, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid, View} from 'react-native';
import React, { useState } from 'react';
import { useGetWeatherByTypeQuery } from '../../../features/api/weatherAPI';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import fetchCity from '../../utils/fetch-city';
import styles from './styles'


const CityScreen = ({visible ,action, id}) => {
    const dispatch = useDispatch();
    const {navigate} = useNavigation();

    const [city, setCity] = useState('');
    let {data, error, isLoading} = useGetWeatherByTypeQuery(city);

    
    return (
        <Modal visible={visible} animationType={'slide'}>
        <View style={styles.container}>
            <Text style={styles.text}>SET CURRENT LOCATION</Text>
            <TextInput style={styles.input} placeholder="Enter City Name" placeholderTextColor={"#e3cf90"} cursorColor={"#e3cf90"} onChangeText={val=> setCity(val)}/>
            <TouchableOpacity style={styles.button} onPress={()=> {
                ToastAndroid.show("Loading...", ToastAndroid.SHORT);
                
                    setTimeout(()=>{
                    fetchCity(error, data, isLoading, navigate, dispatch, id, action, setCity)
                }, 1000)
                
                
                
                }}><Text style={styles.textButton}>Start</Text></TouchableOpacity>
                </View>
        </Modal>
    )
}



export default CityScreen;

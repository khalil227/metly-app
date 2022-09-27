
import { ToastAndroid } from "react-native";
import { addWeather } from "../../../features/slice/weatherSlice";

const fetchCity = (error, data, isLoading, navigate, dispatch, key, action, resetCity)=>{

    if(!isLoading){

        if(error != undefined){
            ToastAndroid.show("City not found", ToastAndroid.SHORT);
            console.log(error);
        }
        else{
            navigate('Home');
            dispatch(addWeather({
                key: key, 
                city: {
                    name: data.location.name,
                    country: data.location.country,
                    temp: data.current.temp_c,
                    condition: data.current.condition.text,
                }
            }));
            action(false);
            resetCity('')

        }
    }
   
        
    
}

export default fetchCity;
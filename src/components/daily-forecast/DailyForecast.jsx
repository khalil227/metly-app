import { View , Text} from 'react-native' 
import styles from './styles'
import weather  from '../../predefinedData/weather'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import weekDay from '../../predefinedData/days';

const DailyForecast = ({data}) => {
    let hour = new Date().getHours();
    let beforeNight = hour > 6 && hour < 18;
    return (
        <View style={styles.forecast}>
                <Text style={styles.dailyForecastTitle}>Daily forecast</Text>
                <View style={styles.dailyForecast}>
                    {

                        data.map((d, index)=>{
                            if(index != 0){
                                let weatherTemp = weather.find(w=> w.name == d.day.condition.text)
                            return(
                                <View style={styles.dailyForecastItem} key={index}>
                                    <MaterialCommunityIcons
                                        name={beforeNight ? weatherTemp.icon : weatherTemp.iconNight}
                                        key={index}
                                        size={40}
                                        color="white"
                                        />
                                    <Text style={styles.dailyForecastTemp}>{d.day.avgtemp_c}°C</Text>
                                    <Text style={styles.dailyForecastDay}>{weekDay[new Date(d.date).getDay()]}</Text>

                                </View>
                            )
                            }
                        })
                    }
                </View>
            </View>
    )
}

export default DailyForecast;
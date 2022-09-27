import {View, Text} from 'react-native';
import windDirection from '../../predefinedData/windDirection';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

const Wind = ({data})=>{
    let wd = windDirection.find(d=> d.direction == data.current.wind_dir);

    return(
        <View style={styles.wind}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Wind Speed</Text>
                <View style={styles.windDirSpeed}>
                    <Text style={styles.speed}>{(data.current.wind_mph)}MPH</Text>
                    <View style={styles.windDir}>
                        <Text style={[styles.dir, {opacity: wd.opacity.n}]}>N</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 75, alignItems: "center"}}>
                            <Text style={[styles.dir, {opacity: wd.opacity.w}]}>W</Text>
                            <FontAwesome5 name="long-arrow-alt-up" size={30} color="white" style={{transform: [{ rotate: wd.rotation }]}}/>
                            <Text style={[styles.dir, {opacity: wd.opacity.e}]}>E</Text>
                        </View>
                        <Text style={[styles.dir, {opacity: wd.opacity.s}]}>S</Text>
                    </View>
                </View>
            </View>
    )
}
export default Wind;
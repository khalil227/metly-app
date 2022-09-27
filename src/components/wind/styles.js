import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    wind:{
        width: 320,
        height: 50
    },
    speed:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    windDirSpeed:{
        
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    windDir:{
        width: 100,
        height: 100,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    dir:{
        color: 'white',
        fontWeight: 'bold'
    },
});

export default styles;
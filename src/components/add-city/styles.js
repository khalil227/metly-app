
import { StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c16864',
        alignItems: 'center',
        justifyContent: 'center',
    }, 

    text: {
        fontSize: 40,
        textAlign: 'center',
        color: "#e3cf90"
    },
    textButton: {
        color: "#c16864",
        fontSize: 20,
        textAlign: 'center'
    },
    button:{
        marginTop: 60,
        padding: 25,
        borderRadius: 10,
        backgroundColor: "#e3cf90",
    },
    input: {
        color: '#e3cf90',
        width: '70%',
        marginTop: 40,
        padding: 10,
        borderColor: '#e3cf90',
        borderWidth: 3,
        borderRadius: 8,
        cursorColor: 'red',
        textAlign: 'center',
    }
});

export default styles;
import { StyleSheet } from "react-native";
import { colors } from "../../services/utilities/colors";
import { sizes } from "../../services/utilities/sizes";
import { fontSize } from "../../services/utilities/fonts";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgColor,
        height: sizes.screenHeight,
    },
    onBoardImg: {
        resizeMode: 'contain',
        marginTop:sizes.screenHeight*0.03,
        alignSelf:'center'
    },
    heading: {
        fontSize: fontSize.h2,
        fontWeight: '900',
        color: colors.black,
        width: sizes.screenWidth * 0.8,
        lineHeight: sizes.screenHeight * 0.05,
        textAlign:"left",
        marginHorizontal:sizes.screenWidth*0.05
    },
    buttonConatiner: {
        backgroundColor: colors.white,
        marginHorizontal: sizes.screenWidth * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.91,
        borderRadius: sizes.screenWidth * 0.02,
        marginTop:sizes.screenHeight*0.03
    },
    buttonText:{
        color:colors.black,
        fontSize:fontSize.medium,
        fontWeight:'600'
    },
    marginTop:{
        marginTop:sizes.screenHeight*0.02
    }
})
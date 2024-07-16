import { StyleSheet } from "react-native";
import { sizes } from "../../services/utilities/sizes";
import { colors } from "../../services/utilities/colors";
import { fontSize } from "../../services/utilities/fonts";

export const styles = StyleSheet.create({
    container: {
        height: sizes.screenHeight,
        alignItems: 'center',
        backgroundColor:colors.bgColor,
    },
    headingOne: {
        marginTop: sizes.screenHeight * 0.04,
        color: colors.black,
        fontSize: fontSize.large,
        fontWeight:'500'
    },
    textOne:{
        color:colors.black,
        fontSize:fontSize.medium,
        fontWeight:'500',
        marginTop:sizes.screenHeight* 0.06,
        marginStart:sizes.screenWidth*0.06,
        marginEnd:sizes.screenWidth*0.06,
        textAlign:'center'
    },
    tickImage:{
        height:sizes.screenHeight*0.1,
        width:sizes.screenWidth*0.27,
        resizeMode:'cover',
        marginTop:sizes.screenHeight*0.28
    }

})
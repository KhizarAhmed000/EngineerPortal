import { StyleSheet } from "react-native";
import { colors } from "../../services/utilities/colors";
import { sizes } from "../../services/utilities/sizes";
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
        marginHorizontal:sizes.screenWidth*0.02,
        textAlign:'center'
    },
      textTwo:{
        color:colors.darkBlue,
        fontSize:fontSize.extraLarge,
        fontWeight:'500',
        textDecorationLine:'underline',
        marginTop:sizes.screenHeight* 0.06
    },
    tickImage:{
        height:sizes.screenHeight*0.1,
        width:sizes.screenWidth*0.27,
        resizeMode:'cover',
        marginTop:sizes.screenHeight*0.28
    }

})
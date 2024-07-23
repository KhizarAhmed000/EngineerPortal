import { StyleSheet } from "react-native";
import { colors } from "../../services/utilities/colors";
import { sizes } from "../../services/utilities/sizes";
import { fontSize } from "../../services/utilities/fonts";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgColor,
        height: sizes.screenHeight,
        alignItems: 'center'
    },
    headingOne: {
        marginTop: sizes.screenHeight * 0.1,
        color: colors.black,
        fontSize: fontSize.large
    },
    headingTwo: {
        marginTop: sizes.screenHeight * 0.05,
        color: colors.black,
        fontSize: fontSize.medium
    },
    inputTextContainer: {
        backgroundColor: colors.white,
        marginHorizontal: sizes.screenWidth * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.91,
        borderRadius: sizes.screenWidth * 0.015,
        marginTop: sizes.screenHeight * 0.05,
        color: colors.black,
        paddingLeft: sizes.screenWidth * 0.02
    },
    rowOne: {
        flexDirection: 'row',
        marginTop: sizes.screenHeight * 0.05,
        alignItems: 'center',
        width: sizes.screenWidth * 0.91,
        justifyContent: 'space-between'
    },
    checkBox: {
        flexDirection: 'row',
        width: sizes.screenWidth * 0.34,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    remeberMeText: {
        color: colors.black,
        fontSize: fontSize.medium
    },
    forgotPassTxt: {
        color: colors.black,
        fontSize: fontSize.medium,
        textAlign: 'right'
    },
    btnContainer: {
        backgroundColor: colors.darkBlue,
        marginHorizontal: sizes.screenWidth * 0.13,
        justifyContent: 'center',
        alignItems: 'center',
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.45,
        borderRadius: sizes.screenWidth * 0.02,
    },
    btnText: {
        color: colors.white,
        fontSize: fontSize.medium,
        fontWeight: '600'
    },
    rowTwo: {
        flexDirection: 'row',
        marginTop: sizes.screenHeight * 0.05,
        alignItems: 'center',
        width: sizes.screenWidth * 0.74,
        justifyContent: 'space-between',
    },
    btnContainerTwo: {
        backgroundColor: colors.white,
        marginHorizontal: sizes.screenWidth * 0.05,
        alignItems: 'center',
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.91,
        borderRadius: sizes.screenWidth * 0.02,
        marginTop: sizes.screenHeight * 0.05,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: sizes.screenWidth * 0.07
    },
    btnTextTwo: {
        color: colors.black,
        fontSize: fontSize.medium,
        fontWeight: '500'
    },
    googleImg: {
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.06,
        resizeMode: 'contain'
    },
    textOne: {
        color: colors.black,
        fontSize: fontSize.medium
    },
    textTwo: {
        color: colors.darkBlue,
        fontWeight: '500',
        fontSize: fontSize.medium
    },
    textCombine: {
        marginTop: sizes.screenHeight * 0.05,
        flexDirection:'row' 
     
    },
    errorValidated:{
        color: "#FF2F03",
        opacity: 0,
        marginTop:sizes.screenHeight*0.02
    },
    error:{
        color: "#FF2F03",
        marginTop:sizes.screenHeight*0.02
    }


})
import { StyleSheet } from "react-native";
import { colors } from "../../services/utilities/colors";
import { sizes } from "../../services/utilities/sizes";
import { fontSize } from "../../services/utilities/fonts";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgColor,
        height: sizes.screenHeight,
    },
    headingOne: {
        marginTop: sizes.screenHeight * 0.07,
        color: colors.black,
        fontSize: fontSize.extraLarge,
        alignSelf:'center',
        textAlign:'center'
    },
    headingTwo: {
        marginTop: sizes.screenHeight * 0.05,
        color: colors.black,
        fontSize: fontSize.medium,
        textAlign:'left',
        marginHorizontal:sizes.screenWidth * 0.05
    },
    inputTextContainer: {
        backgroundColor: colors.white,
        marginHorizontal: sizes.screenWidth * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.91,
        borderRadius: sizes.screenWidth * 0.015,
        marginTop: sizes.screenHeight * 0.035,
        color: colors.black,
        paddingLeft: sizes.screenWidth * 0.02
    },
    rowOne: {
        flexDirection: 'row',
        marginTop: sizes.screenHeight * 0.03,
        alignItems: 'center',
        width: sizes.screenWidth * 0.91,
        alignSelf:"center"
    },
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnContainer: {
        backgroundColor: colors.darkBlue,
        marginHorizontal: sizes.screenWidth * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.45,
        borderRadius: sizes.screenWidth * 0.02,
        marginTop:sizes.screenHeight*0.04,
        alignSelf:'center'
    },
    btnText: {
        color: colors.white,
        fontSize: fontSize.medium,
        fontWeight: '600',
    },
    textOne:{
        color:colors.black,
        fontSize:fontSize.smallM,
        paddingRight:sizes.screenWidth*0.03,
    },
    textTwo:{
        color:colors.darkBlue,
        fontSize:fontSize.smallM
    },
    combineText:{
        marginStart:sizes.screenWidth*0.03
    },
    documentContainer: {
        backgroundColor: colors.white,
        marginHorizontal: sizes.screenWidth * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.91,
        borderRadius: sizes.screenWidth * 0.015,
        marginTop: sizes.screenHeight * 0.035,
    },
    textThree:{
        color:colors.black,
        fontSize:fontSize.medium
    },
    headingThree:{
        marginTop: sizes.screenHeight * 0.03,
        color: colors.black,
        fontSize: fontSize.medium,
        alignSelf:'center',
        textAlign:'center',
        marginHorizontal:sizes.screenWidth*0.05
    },
    errorValidated:{
        color: "#FF2F03",
        opacity: 0,
        justifyContent: "center"
    },
    error:{
        color: "#FF2F03",
        justifyContent: "center",
        textAlign: "center",
        marginTop: sizes.screenHeight*0.01
    }
})
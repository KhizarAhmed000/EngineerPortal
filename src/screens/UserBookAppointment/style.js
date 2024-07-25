import { StyleSheet } from "react-native";
import { sizes } from "../../services/utilities/sizes";
import { colors } from "../../services/utilities/colors";
import { fontSize } from "../../services/utilities/fonts";


export const styles = StyleSheet.create({
    container: {
        height: sizes.screenHeight,
        backgroundColor: colors.white
    },
    columnView: {
        flexDirection: 'column',
    },
    nameText: {
        fontWeight: '500',
        fontSize: fontSize.medium,
        color:colors.textColor

    },
    desiginationText: {
        fontSize: fontSize.medium,
        color:colors.textColor
    },
    textSmall: {
        fontSize: fontSize.smallM,
        color:colors.textColor
    },
    arrowImgTwo:{
        marginStart:sizes.screenWidth*0.02
    },
    
    boxTwo: {
        backgroundColor: colors.gray,
        width: sizes.screenWidth * 0.91,
        height: sizes.screenHeight * 0.08,
        borderRadius: sizes.screenWidth * 0.03,
        paddingHorizontal: sizes.screenWidth * 0.05,
        paddingVertical: sizes.screenHeight * 0.02,
        alignSelf: 'center',
        marginTop: sizes.screenHeight * 0.02,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },

    headingOne: {
        marginTop: sizes.screenHeight * 0.05,
        color: colors.textColor,
        fontSize: fontSize.h5,
        fontWeight: '600',
        marginHorizontal: sizes.screenWidth * 0.05
    },
    headingTwo: {
        color: colors.textColor,
        fontSize: fontSize.h5,
        fontWeight: '600',
    },
    rowOne: {
        flexDirection: 'row',
        marginTop: sizes.screenHeight * 0.02,
        marginHorizontal: sizes.screenWidth * 0.05,
        width: sizes.screenWidth * 0.91,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    seeAllBtn: {
        borderWidth: sizes.screenWidth * 0.004,
        borderColor: colors.darkBlue,
        flexDirection: 'row',
        paddingHorizontal: sizes.screenWidth * 0.025,
        paddingVertical: sizes.screenHeight * 0.003,
        borderRadius: sizes.screenWidth * 0.06,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: colors.darkBlue,
        fontWeight: '500'
    },
    arrowImg: {
        width: sizes.screenWidth * 0.02,
        height: sizes.screenHeight * 0.02,
        resizeMode: 'contain',
        marginStart: sizes.screenWidth * 0.01
    },
    scrollView:{
        marginTop: sizes.screenHeight * 0.02,
        // marginBottom:sizes.screenHeight*0.02,
        
    },
    scrollViewBox: {
        backgroundColor: colors.gray,
        width: sizes.screenWidth * 0.91,
        height: sizes.screenHeight * 0.1,
        borderRadius: sizes.screenWidth * 0.03,
        paddingHorizontal: sizes.screenWidth * 0.03,
        paddingVertical: sizes.screenHeight * 0.02,
        alignSelf: 'center',
        marginTop: sizes.screenHeight * 0.02,
        flexDirection: 'row',
        alignItems: 'center'
    },
    personImg: {
        width: sizes.screenWidth * 0.1,
        height: sizes.screenHeight * 0.06,
        borderRadius: sizes.screenWidth * 0.1,
        resizeMode: 'contain'
    },
    columnView: {
        marginStart: sizes.screenWidth * 0.02,
        flexDirection: 'column',
        width:sizes.screenWidth*0.64
    },
    nameText: {
        fontWeight: '500',
        fontSize: fontSize.medium,
        color:colors.textColor

    },
    dateText: {
        fontSize: fontSize.smallM,
        color:colors.textColor
    },
    arrowImgTwo:{
        marginStart:sizes.screenWidth*0.02
    },
    // desiginationText: {
    //     fontSize: fontSize.smallM,
    //     color:colors.textColor
    // },
    scrollViewChild:{
        height: sizes.screenHeight*0.4,
    },
    btnMarginTop:{
        marginTop:sizes.screenHeight*0.03
    }
})
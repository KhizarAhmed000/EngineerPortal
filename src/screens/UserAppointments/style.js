import { StyleSheet } from "react-native";
import { colors } from "../../services/utilities/colors";
import { sizes } from "../../services/utilities/sizes";
import { fontSize } from "../../services/utilities/fonts";

export const styles = StyleSheet.create({
    container: {
        height: sizes.screenHeight,
        backgroundColor: colors.white
    },
    seeAllBtn: {
        borderWidth: sizes.screenWidth * 0.004,
        borderColor: colors.darkBlue,
        flexDirection: 'row',
        paddingHorizontal: sizes.screenWidth * 0.025,
        paddingVertical: sizes.screenHeight * 0.003,
        borderRadius: sizes.screenWidth * 0.06,
        alignItems: 'center',
        justifyContent: 'center',
        
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
    personImg: {
        width: sizes.screenWidth * 0.12,
        height: sizes.screenHeight * 0.04,
        borderRadius: sizes.screenWidth * 0.1,
        resizeMode: 'contain'
    },
    columnView: {
        marginStart: sizes.screenWidth * 0.02,
        marginEnd: sizes.screenWidth*-0.03,
        flexDirection: 'column',
        width:sizes.screenWidth*0.44,
    },
    nameText: {
        fontWeight: '500',
        fontSize: fontSize.medium,
        color:colors.textColor

    },
    desiginationText: {
        fontSize: fontSize.smallM,
        color:colors.textColor
    },
    arrowImgTwo:{
        marginStart:sizes.screenWidth*0.02
    },
    scrollView:{
        marginTop: sizes.screenHeight * 0.02,
        marginBottom:sizes.screenHeight*0.02
    },
    boxTwo: {
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


})
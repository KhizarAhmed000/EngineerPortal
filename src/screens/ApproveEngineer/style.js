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
    btnMarginTop:{
        marginTop:sizes.screenHeight*0.33
    }

})
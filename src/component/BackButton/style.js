import { StyleSheet } from "react-native";
import { colors } from "../../services/utilities/colors";
import { fontSize } from "../../services/utilities/fonts";
import { sizes } from "../../services/utilities/sizes";

export const styles = StyleSheet.create({
    headingOne: {
        color: colors.textColor,
        fontSize: fontSize.extraLarge,
        fontWeight: '600',
        marginHorizontal: sizes.screenWidth * 0.03
    },
    backArrowRow:{
        flexDirection:'row',
        marginTop: sizes.screenHeight * 0.05,
        marginHorizontal:sizes.screenWidth*0.05,
        alignItems:'center',
    }
})
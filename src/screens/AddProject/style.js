import { StyleSheet } from "react-native";
import { sizes } from "../../services/utilities/sizes";
import { colors } from "../../services/utilities/colors";
import { fontSize } from "../../services/utilities/fonts";

export const styles = StyleSheet.create({
    container: {
        height: sizes.screenHeight,
        backgroundColor: colors.white
    },
    inputContainer: {
        backgroundColor: colors.gray,
        width: sizes.screenWidth * 0.91,
        height: sizes.screenHeight * 0.06,
        borderRadius: sizes.screenWidth * 0.03,
        paddingHorizontal: sizes.screenWidth * 0.03,
        paddingVertical: sizes.screenHeight * 0.01,
        alignSelf: 'center',
        marginTop: sizes.screenHeight * 0.02,
        flexDirection: 'row',
        alignItems: 'center',
        color: colors.textColor
    },
    heading: {
        fontWeight: '500',
        fontSize: fontSize.large,
        color: colors.textColor,
        marginTop: sizes.screenHeight * 0.02

    },
    body: {
        marginHorizontal: sizes.screenWidth * 0.06
    },
    inputContainerTwo: {
        backgroundColor: colors.gray,
        width: sizes.screenWidth * 0.91,
        height: sizes.screenHeight * 0.06,
        borderRadius: sizes.screenWidth * 0.03,
        paddingHorizontal: sizes.screenWidth * 0.03,
        alignSelf: 'center',
        marginTop: sizes.screenHeight * 0.02,
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencyContianer: {
        backgroundColor: colors.darkGray,
        paddingHorizontal: sizes.screenWidth * 0.025,
        paddingVertical: sizes.screenHeight * 0.01,
        borderRadius: sizes.screenWidth * 0.02,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputText: {
        color: colors.textColor,
        width: sizes.screenHeight * 0.35,
    },
    currencyText: {
        color: colors.textColor,
        fontWeight: '500',
        fontSize: fontSize.medium
    },
    descriptionBox: {
        backgroundColor: colors.gray,
        width: sizes.screenWidth * 0.91,
        height: sizes.screenHeight * 0.15,
        borderRadius: sizes.screenWidth * 0.03,
        paddingHorizontal: sizes.screenWidth * 0.03,
        paddingVertical:sizes.screenHeight*0.01,
        alignSelf: 'center',
        marginTop: sizes.screenHeight * 0.02,
        flexDirection: 'row',
        color: colors.textColor,
        textAlignVertical:'top'
    },
    imageView: {
        backgroundColor: colors.gray,
        width: sizes.screenWidth * 0.91,
        // height: sizes.screenHeight * 0.15,
        borderRadius: sizes.screenWidth * 0.03,
        paddingHorizontal: sizes.screenWidth * 0.03,
        // paddingVertical:sizes.screenHeight*0.01,
        alignSelf: 'center',
        marginTop: sizes.screenHeight * 0.02,
        flexDirection: 'row',
        alignItems:'center'
    },
    scrollView:{
        marginTop:sizes.screenHeight*0.01,
        marginBottom:sizes.screenHeight*0.02,
    },
    
  deleteImageContainer: {
    position: 'absolute',
    top: sizes.screenHeight * -0.01,
    right: sizes.screenWidth * 0.22,
    zIndex: 1,
  },
  deleteImage: {
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.05,
    resizeMode: 'contain',
  },
  imageBox: {
    height: sizes.screenHeight * 0.15,
    width: sizes.screenWidth * 0.25,
    borderRadius: sizes.screenWidth * 0.02,
    resizeMode: 'cover',
    marginTop: sizes.screenHeight * 0.01,
    marginStart: sizes.screenHeight * 0.013,
    marginBottom:sizes.screenHeight * 0.01,
  },
  addImageContianer:{
    height: sizes.screenHeight * 0.15,
    width: sizes.screenWidth * 0.25,
    borderRadius: sizes.screenWidth * 0.02,
    marginTop: sizes.screenHeight * 0.01,
    marginStart: sizes.screenHeight * 0.013,
    marginBottom:sizes.screenHeight * 0.01,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.imageContainer
  },
  btnMargin:{
    marginTop:sizes.screenHeight*0.05
  }
})
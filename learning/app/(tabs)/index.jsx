import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
// import { useNavigation } from '@react-navigation/native';
import React from 'react'
// import CustomButton2 from '../props/CustomButton2'
import back from '../../assets/images/back.png'

const TransactionDetails = () => {
    // const navigation = useNavigation();
    
  return (
    <View style={styles.transacDetails}>
      <View style={styles.header}>
        <ImageBackground
            source={back}
            resizeMode='cover'
            style={styles.image}
        ></ImageBackground>
        <Text style={styles.headTxt}>Transaction Details</Text>
      </View>

      <View style={styles.transacDetailsBody}>

        
        
        
      </View>
      
    </View>
  )
}

export default TransactionDetails

const styles = StyleSheet.create({
    transacDetails:{
        backgroundColor: '#F5F7FF',
        flex: 1,
        gap: 40,
        padding: 0,
        flexDirection: 'column',
        alignItems: 'center',
        width: 360,
        height: 812,
    },
    header:{
        backgroundColor: '#442CF5',
        display: 'flex',
        flexDirection: 'row', // Add this to align items in a row
        alignItems: 'center',
        paddingTop: 50,
        paddingLeft: 16,
        width: 360,
        height: 115,
        gap: 10,
        paddingBottom: 12
    },
    headTxt:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    transacDetailsBody: {
        width: 328,
        height: 463.28,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        gap: 30,
        // backgroundColor: 'blue'
    },
    image: {
        width: 28,
        height: 28
    },
    vectorBg: {
        width: 60,
        height: 61.28,
    },
    vector: {
        width: 28,
        height: 29.05,
        top: -47,
        // top: 14.16,
        // left: 100.5,
    },
    acctDetails:{
        width: 134,
        height: 24,
        gap: 4,
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center'
    },
    bank: {
        width: 44,
        height: 14.52,
    },
    acctNo: {
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 24
    },
    withdrewTxt:{
        color: '#6C727F',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 24
    },
    withdrawNotiBox: {
        width: 229,
        height: 171.28,
        display: 'flex',
        flexDirection: 'column',
        // gap: 8,
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    withdrawNoti: {
        width: 229,
        height: 165,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        alignItems: 'center',
        // backgroundColor: 'black'
    },
    accWithdrawnTo: {
        width: 229,
        height: 24,
        display: 'flex',
        flexDirection: 'row', // Add this to align items in a row
        alignItems: 'center', // Ensures vertical alignment
        gap: 10,
        // backgroundColor: 'red' 
    },
    amount:{
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 32.4,
        color: '#240F51',
        width: 105,
        height: 32,
        // backgroundColor: 'white'
    },
    successBtn:{
        color: 'white',
        backgroundColor: '#00A86B',
        width: 85,
        height: 22,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 2,
        // paddingRight: 10,
        paddingBottom: 4,
        paddingLeft: 5,
        border: 0,
        borderRadius: 30,
        gap: 10
    },
    successTxt:{
        color: 'white',
        fontWeight: 600,
        fontSize: 12,
        lineHeight: 18,
        width: 65,
        height: 18,
    },
    details:{
        width: 328,
        height: 262,
        gap: 10,
        display: 'flex',
        flexDirection: 'column'
    },
    senderInfoBox: {
        width: 328,
        height: 94,
        gap: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 16,
        backgroundColor: '#FFFFFF'
    },
    receiveInfo: {
        width: 328,
        height: 158,
        gap: 10,
        padding: 10,
        borderRadius: 16,
        backgroundColor: '#FFFFFF'
    },
    transacBtns: {
        width: 328,
        height: 110,
        // gap: 1,
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: '#FFF00F'
    },
    senderInfo: {
        width: 308,
        height: 18,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    amountTitle:{
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 18,
        color: '#6C727F',
    },
    amount2:{
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 18,
        color: '#292B2D',
    },
    receiverInfo: {
        width: 308,
        height: 54,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    receiverDetails: {
        width: 138,
        height: 54,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end'
    },

})
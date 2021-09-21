import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

import logo from '../images/instargram_logo.png';
import plus from '../images/add.png';
import heart from '../images/heart.png';
import send from '../images/send.png';

import ImageButton from './ImageButton';

const Header = () => {
    return(
        <View style={styles.header}>
            <ImageButton imageUrl={ logo } imgStyle={styles.logo}/>
            <View style={{flexDirection:"row"}}>
                <ImageButton imageUrl={ plus } imgStyle={styles.plus} btnStyle={styles.iconBtn}/>
                <ImageButton imageUrl={ heart } imgStyle={styles.icon} btnStyle={styles.iconBtn}/>
                <ImageButton imageUrl={ send } imgStyle={styles.icon}  btnStyle={styles.iconBtn}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:"relative"
    },
    header:{
        paddingHorizontal:20,
        height:50,
        flexDirection:"row",
        display:"flex",
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        position:"relative",
        backgroundColor:'white'
    },
    logo:{
        resizeMode:"contain",
        width:120,
    },
    plus:{
        resizeMode:"contain",
        width:25,
        position:"absolute",
        top:-20,
        left:0
    },
    icon:{
        resizeMode:"contain",
        width:25,
        position:"absolute",
        top:-20,
        left:0
    },
    iconBtn:{
        marginLeft:20,
        position:"relative",
        height:25,
        width:25,
    }
});

export default Header;
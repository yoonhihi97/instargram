import React, {Component} from 'react';
import { View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

import ruffy from '../images/ruffy.jpg';
import ImageButton from './ImageButton';

const Feeds  = ({id,like}) =>{
    return (
        <View style={styles.CardContainer}>
            <View style={{flexDirection:"row"}}>
                <ImageButton imageUrl={ ruffy } imgStyle={styles.profile} btnStyle={styles.iconBtn}/>
                <Text style={styles.CardTitle}>{id}</Text>
                <TouchableOpacity> 
                <Ionicons name="ellipsis-horizontal" size={18} style={{height:50,textAlignVertical:"center",marginRight:10}}/>
                </TouchableOpacity>
            </View>
            <Image source={ruffy} style={{width:"100%", height: 200, borderRadius: 4}}/>
            <View style={{flexDirection:"row",justifyContent:'space-between',padding:5}}>
                <View style={{flexDirection:"row", marginLeft:5}}>
                    <TouchableOpacity> 
                        <Ionicons name="heart-outline" size={20}/>
                    </TouchableOpacity>
                    <TouchableOpacity> 
                    <Ionicons name="chatbubble-outline" size={18} style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity> 
                    <Ionicons name="paper-plane-outline" size={18} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity> 
                <Ionicons name="bookmark-outline" size={18} style={{marginRight:5}}/>
                </TouchableOpacity>
            </View>
            <View style={{marginLeft:10}}>
                <Text>좋아요 {like}개</Text>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.userid}>{id}</Text>
                    <Text style={styles.CardContent}>안녕하세요 루피에요</Text>
                </View>
            </View>
        </View>
    );
}
export default Feeds;


const styles = StyleSheet.create({
    CardContainer: {
        backgroundColor:"#fff"
    },
    CardTitle: {
        width: '100%',
        fontSize: 20,
        flex:1,
        height:50,
        textAlignVertical:"center",
        marginLeft:10,
        fontWeight:"bold",
    },
    userid: {
        fontSize: 15,
        fontWeight:"bold",
        padding: 3
    },
    CardContent: {
        padding: 3
    },  
    icon:{
        marginLeft:12
    },
    profile:{
        width:40,
        height:40,
        borderRadius:100,
        marginLeft:10,
        marginTop:5
    }
});

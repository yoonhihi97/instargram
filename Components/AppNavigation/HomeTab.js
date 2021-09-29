import React from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from "../Header";
import Feeds from "../Feeds";
import { Icon, Container, Content} from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const HomeTab = ({ navigation }) =>{
    return(
        <View style={styles.container}>
            <Header/>
            <ScrollView>
                <SafeAreaProvider>
                    <Feeds/>
                </SafeAreaProvider>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    },
    storyWrap:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:7,
        borderBottomColor:"#eee",
        borderBottomWidth:1
    }
})
export default HomeTab;
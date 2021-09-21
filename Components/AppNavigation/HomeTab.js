import React from "react";
import {View, Text} from 'react-native';
import Header from "../Header";

const HomeTab = ({ navigation }) =>{
    return(
        <View>
            <Header/>
            <Text>HomeTab</Text>
        </View>
    );
}

export default HomeTab;
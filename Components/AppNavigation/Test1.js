import React from "react";
import {View, Text} from 'react-native';

import Header from "../Header";

const Test1 = ({ navigation }) =>{
    return(
        <View>
            <Header/>
            <Text>Test1</Text>
        </View>
    );
}

export default Test1;
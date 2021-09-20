import React from "react";
import { TouchableOpacity, Image } from 'react-native';

const ImageButton = ({ imageUrl, imgStyle, btnStyle }) => {
    return(
        <TouchableOpacity activeOpacity={0.5} style={btnStyle}>
            <Image source={imageUrl} style={imgStyle}/>
        </TouchableOpacity>
    )
}

export default ImageButton;

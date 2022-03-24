import React from 'react';
import{
    View,
    StyleSheet,
    Text,
    Image

}from 'react-native';
import COLORS from '../../consts/colors';


/*export default function Map(){*/

const HMap = () => {


    return(
        <View style={styles.body}>
        <Text style={styles.text}> 
           2D MAP
         </Text>
         <Image 
                          style={styles.startImgStyle}

            source={{uri:'https://image.shutterstock.com/image-photo/empty-parking-lots-aerial-view-260nw-586368239.jpg'}}
          />

        </View>
    );

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },    
  startImgStyle:{
    width: 350,
    height: 350,
    top: 40,
    resizeMode: 'cover',
  },
});

export default HMap;

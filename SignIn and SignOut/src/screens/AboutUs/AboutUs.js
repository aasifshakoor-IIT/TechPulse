import React from 'react';
import{
    View,
    StyleSheet,
    Text,
    Image
}from 'react-native';
import COLORS from '../../consts/colors';
import Logo from '../../../assets/images/Parkit_Logo.png';

/*export default function Map(){*/

const AboutUs = () => {


    return(
        <View style={styles.body}>
        <Image
          source={Logo}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.text}> 
           ABOUT US
         </Text>
         <Text style={styles.text2}> 
           Parking occupancy detection systems are important for the effective management of parking lots and time. checking the availability of the free parking spaces and communicating to the users in real-time is crucial. PARKIT will provide a remote facility for the users to find a parking space for a vehicle.         
         </Text>
         <Text style={{fontSize: 18, marginRight: 50, padding: 15,color: COLORS.darkblue, fontWeight: "bold"}}> 
           FRONT-END DEVELOPER DETAILS
         </Text>
         <Text style={styles.text3}>
           Email: frontend@gmail.com{"\n"} 
           Contact Number: 01234
         </Text>
         <Text style={{fontSize: 18, marginRight: 50, padding: 15,color: COLORS.darkblue, fontWeight: "bold"}}> 
           BACK-END DEVELOPER DETAILS 
         </Text>
         <Text style={styles.text3}>
           Email: backend@gmail.com{"\n"} 
           Contact Number: 56789
         </Text>

         

        </View>
    );

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: '50%',
        maxWidth: 300,
        maxHeight: 180,
      },
    text: {
        fontSize: 40,
        marginTop: 20,
        color: COLORS.blue,
        fontWeight: "bold"
    },
    text2: {
        fontSize: 20,
        marginTop: 20,
        marginHorizontal: 43
    },
    text3: {
        fontSize: 18,
        marginRight: 50,    
    },
});

export default AboutUs;

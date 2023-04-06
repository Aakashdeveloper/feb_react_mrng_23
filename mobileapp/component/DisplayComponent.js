import React from 'react';
import {StyleSheet,View,ScrollView,Text,Image} from 'react-native';

function Display(props){

    const renderList = ({restList}) => {
        if(restList){
            return restList.map((item) => {
                return(
                    <View key = {item._id}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: item.restaurant_thumb,
                              }}
                        />
                        <Text>{item.restaurant_name}</Text>
                    </View>
                )
            })
        }
    }

    return(
        <View>
            <ScrollView style={styles.container}>
                {renderList(props)}
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex:1
    },
    text:{
        fontSize:45
    },
    tinyLogo: {
      width: 170,
      height: 170,
    },

  });

export default Display;
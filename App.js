import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity,Alert, AppRegistry, Button,ScrollView} from 'react-native';
import { Feather, Ionicons, Octicons, AntDesign } from '@expo/vector-icons';

const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') }
];

export default function App() {
  const centerImgData = Math.floor(imgData.length / 2);
  return (
    <View style = {styles.container}>
      <View style = {styles.toolbar_above}>
        <Ionicons name="md-arrow-back" size={27} color="black" />
        <Text>
              Samuel
        </Text>
        <Feather name="list" size={27} color="black" />
      </View>
      <View style = {styles.Header}>
        <View style = {styles.Header_Image}>
          <Image style = {styles.img}source={require('./assets/avatar.jpg')}/>
        </View>
        <View style = {styles.Header_Name_Button}>
          <View style = {styles.Header_Name_Verified}>
            <Text style = {styles.Header_Name}>
              Samuel
            </Text>
            <Octicons name="verified" size={23} color="rgb(56,151,240)" style = {styles.verified}/>
          </View>
          <View style = {styles.button}>
          <TouchableOpacity>
            <View style = {styles.buttonFollow}>
              <Text style = {styles.buttonFollow_Text}>
                Follow
              </Text>
            </View>
            </TouchableOpacity>
          <TouchableOpacity>
            <View style = {styles.buttonInbox}>
              <AntDesign name="caretdown" size={13} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        </View>

      </View>
      <View style = {styles.description}>
          <View>
            <Text>
              Samuel Nguyễn
            </Text>
            <Text>
              Mình là một Dev mộng mơ, yêu lập trình và những thứ liên quan.
            </Text>
          </View>
      </View>
      <View style = {styles.countArea}>
        <View>
          <Text style = {styles.countArea_Number}>
            1,084
          </Text>
          <Text style = {styles.countArea_Text}>
            photos
          </Text>
        </View>
        <View>
          <Text style = {styles.countArea_Number}>
            3.1m
          </Text>
          <Text style = {styles.countArea_Text}>
            follower
          </Text>
        </View>
        <View>
          <Text style = {styles.countArea_Number}>
            104
          </Text>
          <Text style = {styles.countArea_Text}>
            following
          </Text>
        </View>
      </View>
      <View style = {styles.picture_video}>
        <ScrollView contentContainerStyle = {styles.scroll} >
          <View>
            { imgData.slice(0, centerImgData).map(item => {
              return <Image style ={styles.MyImage} source = {item.imgSource} key = {item.id}/>
            })}
          </View>
          <View>
            { imgData.slice(centerImgData).map(item => {
              return <Image style ={styles.MyImage} source = {item.imgSource} key = {item.id}/>
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },

  toolbar_above: {
      flex:0.1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

  Header: {
    flex: 0.15,
    flexDirection: 'row',
  },

  countArea: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  description:{
    flex: 0.12,
    justifyContent:'space-between',
  },

  picture_video: {
    flex: 0.53,
    justifyContent: 'space-around',
  },

  scroll: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: "center"
  },

  Header_Image: {
    justifyContent: 'center',
    alignContent: 'center',
  },

  img: {
    width:90,
    height: 90,
    borderRadius: 100,
  },
  Header_Name_Button: {
    alignContent: 'center',
    justifyContent: 'center',
  },

  Header_Name_Verified: {
    flexDirection: 'row',
  },
  Header_Name: {
    marginBottom: 15,
    fontSize: 25,
  },

  buttonFollow: {
    height: 30,
    width: 200,
    backgroundColor: 'rgb(56,151,240)',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'

  },

  buttonInbox: {
    height: 30,
    width: 35,
    backgroundColor: 'rgb(56,151,240)',
    borderRadius: 3,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    flexDirection: 'row',
  },

  verified: {
    marginLeft: 10,
  },

  buttonFollow_Text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },

  countArea_Number: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 3
  },

  countArea_Text: {
    color: 'grey',
    fontSize: 15
  },

  MyImage: {
    width: 170,
    height: 260,
    borderRadius:15,
    marginBottom: 4,
  }
});

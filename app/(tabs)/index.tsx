
import {View, Text, TouchableOpacity,StyleSheet, Image, ScrollView,Dimensions } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';


const { width } = Dimensions.get('window');

const CARD_WIDTH = width * 0.75; 
const CARD_MARGIN = 15;


export default function HomeScreen(){
  return(
    <SafeAreaProvider>
      <SafeAreaView style = {{flex:1, paddingTop: 30}}>
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          
          <View style = {styles.header}>
            <Image
              source={require('../../assets/images/logo.jpeg')}
              style ={{width: 260,height: 105, alignSelf: 'center' }}
            />
            <Text style={{marginTop:15, fontSize: 18}}> Start Your Journey with Us</Text>
            <TouchableOpacity style = {styles.buttonHead} >
              <Text style={{color: '#fff', fontSize:15}}> Book a Car now </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ctn1}>
            <Text style={{fontSize:15, fontWeight:'400'}}>Sign Up now to try Vehicle Hire experience</Text>
            <TouchableOpacity style = {styles.btnC1}>
              <Text>Let go !</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cars}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={CARD_WIDTH + CARD_MARGIN} 
              decelerationRate="fast"
              contentContainerStyle={{ paddingRight: 20 }}
            >
              <View style={styles.card1}>
                <Image  
                  source={require('../../assets/images/car.png')} 
                  style ={{width: CARD_WIDTH,height: 140,borderTopRightRadius:10,}}
                />
                <Text style= {{marginTop:15, marginLeft:15}}>How does it work ?</Text>
                <TouchableOpacity style={styles.btnCard1}>
                  <Text> Click Here </Text>
                  <AntDesign name="arrow-right" size={18} color="black" />
                </TouchableOpacity>
              </View>
              
              <View style={styles.card1}>
                <Image  
                  source={require('../../assets/images/car.png')} 
                  style ={{width: CARD_WIDTH,height: 140,borderTopRightRadius:10,}}
                />
                <Text style= {{marginTop:15, marginLeft:15}}>How does it work ?</Text>
                <TouchableOpacity style={styles.btnCard1}>
                  <Text> Click Here </Text>
                  <AntDesign name="arrow-right" size={18} color="black" />
                </TouchableOpacity>
              </View>
              
              <View style={styles.card1}>
                <Image  
                  source={require('../../assets/images/car.png')} 
                  style ={{width: CARD_WIDTH,height: 140,borderTopRightRadius:10,}}
                />
                <Text style= {{marginTop:15, marginLeft:15}}>How does it work ?</Text>
                <TouchableOpacity style={styles.btnCard1}>
                  <Text> Click Here </Text>
                  <AntDesign name="arrow-right" size={18} color="black" />
                </TouchableOpacity>
              </View>
              
              
            </ScrollView>
            
          </View>
        </ScrollView>
        
        
      </SafeAreaView>
    </SafeAreaProvider>

    
)
}

const styles= StyleSheet.create ({
  header :{
    alignItems: 'center',
    borderBottomWidth: 0.5 ,
    borderBottomColor: '#F6F4E8',
    paddingBottom: 16,
  },
  buttonHead :{
    backgroundColor: '#000',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 10,
    marginTop: 15,
  },
  ctn1:{
    paddingLeft:30,
    paddingTop:30, 
  },
  btnC1:{
    marginTop:10,
    backgroundColor: '#C4F7CA',
    padding:7,
    alignItems: 'center',
    width: 75,
    borderRadius:10,
  },
  cars: {
    paddingLeft:20,
    marginTop:40,
  },
  card1: {
    width: CARD_WIDTH, 
    marginRight: CARD_MARGIN,
    paddingBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden', 
    elevation: 3,       
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  btnCard1:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10, 
    marginTop: 10,

  }
}) 

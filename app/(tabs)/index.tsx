
import React, { useState } from 'react';
import {View, Text, TouchableOpacity,StyleSheet, Image, ScrollView,Dimensions,FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider, } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';


const { width } = Dimensions.get('window');

const CARD_WIDTH = width * 0.75; 
const CARD_MARGIN = 15;

const CATEGORIES = ['All', 'Saloon', 'Luxury', 'SUVs', '4x4 Safari', 'Mini Vans', 'Pickups']
const VEHICLES = [
  { id: '1', title: 'Toyota Corolla Premio', category: 'Saloon', transmission: 'Automatic' },
  { id: '2', title: 'Toyota Land Cruiser V8', category: 'Luxury', transmission: 'Automatic' },
  { id: '3', title: 'Toyota RAV4', category: 'SUVs', transmission: 'Automatic' },
  { id: '4', title: 'Toyota Land Cruiser Prado TX', category: '4x4 Safari', transmission: 'Automatic' },
  { id: '5', title: 'Toyota HiAce Super Custom', category: 'Mini Vans', transmission: 'Automatic' },
  { id: '6', title: 'Toyota Hilux Double Cab', category: 'Pickups', transmission: 'Manual' },
];

export default function HomeScreen(){
  const [selectedCategory, setSelectedCategory] = useState('All ');

  return(
    <SafeAreaProvider>
      <SafeAreaView style = {{flex:1, paddingTop: 30,}}>
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
              contentContainerStyle={{ paddingRight: 20, paddingBottom: 20 }}
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
              <View style={styles.filterSection}>
                <Text style={styles.sectionTitle}>Our Vehicles</Text>
                <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate='fast'
                contentContainerStyle={{paddingRight: 20, paddingBottom:20}}
                >
                  {CATEGORIES.map((category) => {
                    const isSelected = selectedCategory === category; 
                    return (
                        <TouchableOpacity
                          key={category}
                          style={[styles.chip, isSelected && styles.selectedChip]}
                          onPress={() => setSelectedCategory(category)}
                        >
                          <Text style={[styles.chipText, isSelected && styles.selectedChipText]}>
                            {category}
                          </Text>
                        </TouchableOpacity>
                      );
                    })
                  }
              
                </ScrollView>
              </View>
             <View style={styles.cars}>
                <FlatList
                  data={VEHICLES}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.id}
                  snapToInterval={CARD_WIDTH + CARD_MARGIN}
                  decelerationRate="fast"
                  contentContainerStyle={{ paddingRight: 20, paddingBottom: 20 }}
                  renderItem={({ item }) => (
                    <View style={styles.card1}>
                      <View style={styles.badgeContainer}>
                        <Text style={styles.badgeText}>{item.category}</Text>
                      </View>
                      <Image  
                        source={require('../../assets/images/car.png')} 
                        style={styles.cardImage}
                      />
                      <Text style={styles.carTitle}>{item.title}</Text>
                      <Text style={styles.carDetails}><EvilIcons name="gear" size={18} color="black" />{item.transmission}</Text>
                      
                      <TouchableOpacity style={styles.btnCard1}>
                        <Text> More info </Text>
                        <AntDesign name="arrow-right" size={18} color="black" />
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View> 
            
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
    paddingTop: 30,
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
    paddingTop: 30,
    paddingLeft:20,
    paddingBottom: 70,
    marginTop:10,
    backgroundColor: "#ffff",
    borderTopLeftRadius:10,
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

  },
  filterSection: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 12,
  },
  chipScrollContainer: {
    paddingHorizontal: 20,
  },
  chip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFF',
    marginRight: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedChip: {
    backgroundColor: '#0F172A',
    borderColor: '#0F172A',
  },
  chipText: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  selectedChipText: {
    color: '#FFFFFF',
  },
  badgeContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#E2FEE0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    zIndex: 1,
  },
  badgeText: {
    fontSize: 12,
    color: '#166534',
    fontWeight: '600',
  },
  cardImage: {
    width: CARD_WIDTH,
    height: 130,
    
    marginTop: 10,
  },
  carTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center',
  },
  carDetails: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 5,
    textAlign: 'center',
  },
});

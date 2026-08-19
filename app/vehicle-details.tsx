import {useRouter, useLocalSearchParams} from 'expo-router';
import {Text,ScrollView, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function VehicleDetails () {
    const router = useRouter() as any;
    const params = useLocalSearchParams() as any;
    const { title, category, transmission,id } = params;
   const getImageSource = (carId: string) => {
    switch (String(carId)) {
      case '1': return require('../../assets/images/premio.jpg');
      case '2': return require('../../assets/images/V8.jpg');
      case '3': return require('../../assets/images/Rav4.jpeg');
      case '4': return require('../../assets/images/land.jpeg');
      case '5': return require('../../assets/images/super.jpeg');
      case '6': return require('../../assets/images/hilux.jpeg');
      default: return require('../../assets/images/car.png');
    }
  };

   return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          
          {/* Vehicle Image */}
          <Image source={getImageSource(id)} style={styles.image} />

          <Text style={styles.title}>{title}</Text>
          <Text style={styles.detail}>Category: {category}</Text>
          <Text style={styles.detail}>Transmission: {transmission}</Text>

          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Go Back</Text>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  image: { width: '100%', height: 220, borderRadius: 10, marginBottom: 20, resizeMode: 'cover' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  detail: { fontSize: 16, color: '#555', marginBottom: 5 },
  backButton: { marginTop: 30, backgroundColor: '#007AFF', padding: 12, borderRadius: 8, width: '100%', alignItems: 'center' }
});  

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import Getjsonfile from '../Getjsonfile';
import Getdata from '../Getdata';
import { WebView } from 'react-native-webview';
import { ImageBackground } from 'react-native';
import Profil from '../Profil';
import ProfilePage from '../Profil';

const Tab = createBottomTabNavigator();

const Button = ({label, onPress}) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );


//Form input dari github pages
const forminput = 'https://ellenanrl.github.io/pgpbl12/'

//Peta web
const webmap = 'https://ellenanrl.github.io/pgpbl12/map.html'

function HomeScreen() {
    const navigation = useNavigation();
  
    const navigateToMap = () => {
      navigation.navigate('Map');
    };
return (
    <ImageBackground source={require('../navigation/home.jpeg')} // Ganti dengan path gambar latar belakang
    style={styles.background}> 
    <View>
        <Text style={styles.title}>KAYOTA</Text>
        <Text style={styles.description}> Aplikasi Persebaran Kafe di Yogyakarta</Text> 
        <Text style={styles.apa}> Apa Yang Bisa Dilakukan Dengan Kayota?</Text>
        <Text style={styles.fitur}> Menambahkan Lokasi Kafe</Text>
        <Text style={styles.fitur}> Melihat Persebaran Lokasi-Lokasi Kafe</Text>
        <Text style={styles.fitur}> Mencari Data Kafe</Text>
        <Image
        style={styles.image}
        source={require('../navigation/Kayota.png')} // Ganti dengan nama file gambar Anda
/>
      <View style={styles.buttonContainer}>
      <Button label="Masuk" onPress={navigateToMap} />
      </View>
    </View>
    </ImageBackground>
);
}
function Map() {
return (
    <WebView
        source={{ uri: webmap }}
      />
);
}
function AddDataScreen() {
return (
    <WebView
        source={{ uri: forminput}}
      />
);
}
function ListKafe() {
return (
    <View>
        <Getdata />
    </View>
);
}
function Profile() {
return (
    <View>
        <ProfilePage />
    </View>
);

}
// function Mahasiswascreen() {
// return (
//     <View>
//         <Getjsonfile />
//     </View>
// );
// }
function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
	tabBarLabel: 'Keluar',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="arrow-alt-circle-left" color="#44a39c" size={size} style={{ color: '#44a39c' }} />
	),
    tabBarStyle: {display: 'none'},
    tabBarLabelStyle: {
        color: '#44a39c',
      }
      
}}
/>
      <Tab.Screen name="Map" component={Map} options={{
	tabBarLabel: 'Peta',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="map-marked-alt" color="#44a39c" size={size} style={{ color: '#44a39c' }} />
	),
    tabBarLabelStyle: {
        color: '#44a39c',
      }
}} />
      <Tab.Screen name="Add Data" component={AddDataScreen} options={{
	tabBarLabel: 'Tambah Kafe',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="plus-circle" color="#44a39c" size={size} style={{ color: '#44a39c' }} />
	),
    tabBarLabelStyle: {
        color: '#44a39c',
      }
}} />
      <Tab.Screen name="List Kafe" component={ListKafe} options={{
	tabBarLabel: 'Data Kafe',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="coffee" color="#44a39c" size={size} style={{ color: '#44a39c' }} />
	),
    tabBarLabelStyle: {
        color: '#44a39c',
      }
}} />
      <Tab.Screen name="Profile" component={Profile} options={{
	tabBarLabel: 'Author',
	tabBarIcon: ({ color, size }) => (
        <Fontawesome5 name="user-alt" color="#44a39c" size={size} style={{ color: '#44a39c' }} />
	),
    tabBarLabelStyle: {
        color: '#44a39c',
      }
// }} />
//       <Tab.Screen name="Mahasiswa" component={Mahasiswascreen} options={{
// 	tabBarLabel: 'Mahasiswa',
// 	tabBarIcon: ({ color, size }) => (
//   		<Fontawesome5 name="users" color={color} size={size} />
// 	),
}} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeModel: 'strech'
    },

    listitems: {
        padding: 20,
        alignItems: 'center',
    },

    caption: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign:'center',
        marginTop: 10,
        color: 'black',
    },
    container: {
        marginTop:20,
        marginHorizontal: 20,
        padding: 20,
        backgroundColor: '#fff',
        color: 'white'
    },
    description: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign:'center',
        marginTop: 20,
        color: 'black',
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
    apa: {
        fontWeight: 'bold',
        fontSize: 18,
        alignItems: 'center',
        textAlign:'center',
        marginTop: 20,
        color: 'black'
    },
    fitur: {
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign:'center',
        marginTop: 5,
        paddingTop: 10,
        fontSize: 14,
        color: 'black',
      },
      image: {
        width: '100%',
        height: 100, // Sesuaikan tinggi gambar sesuai kebutuhan
        resizeMode: 'contain',
        marginTop: 20,
      },
      buttonContainer: {
        width: '100%', // Adjust the width as needed
      },
      button: {
        backgroundColor: '#44a39c',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 50,
        marginVertical: 8,
        marginHorizontal: 70,
        elevation: 5, // Add shadow for Android
        shadowColor: '#000', // Add shadow for iOS
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
    
      buttonText: {
        fontWeight: 'bold',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
      },
});


import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import {LearnMoreLinks} from 'react-native/Libraries/NewAppScreen';
import { ImageBackground } from 'react-native';

const ProfilePage = () => {
  return (
    <ScrollView> 
        
        <View style={styles.container}>
        <ImageBackground source={require('./navigation/home.jpeg')} // Ganti dengan path gambar latar belakang
    style={styles.background}>
      <View style={styles.centeredContent}>
      <Image
        style={styles.profileImage}
        source={{ uri: 'https://media.licdn.com/dms/image/D5603AQGStPDOSSsctg/profile-displayphoto-shrink_800_800/0/1680546678584?e=2147483647&v=beta&t=8SX1OM2Vg6hzKGFIPLyporCEmqynI4NNiJIK4P1mrm0' }} // Ganti dengan URL gambar profil Anda
      />
      <Text style={styles.name}>Ellena Nurlaila</Text>
      <Text style={styles.bio}>Hallo! aku mahasiswa program studi Sistem Informasi Geografis Universitas Gadjah Mada Yogyakarta atau founder dari aplikasi Kayota</Text>
      <Text style={styles.bio}>Jika terdapat kritik dan saran, bisa hubungi aku lewat informasi di bawah ini ya!</Text>
      <View style={styles.infoContainer}>
        {/* <View style={styles.infoItem}>
          <Text style={styles.label}>NIM:</Text>
          <Text style={styles.value}>21/478667/SV/19360</Text>
        </View> */}
        {/* <View style={styles.infoItem}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>ellena.nurlaila@mail.ugm.ac.id</Text>
        </View> */}
        <View style={styles.infoItem}>
          
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Telepon:</Text>
          <Text style={styles.value}>123-456-7890</Text>
        </View>
          <LearnMoreLinks />
      </View>
      </View>
      </ImageBackground>
    </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    marginBottom:17,
        marginHorizontal: 20,
        padding: 0,
        backgroundColor: '#fff',
        paddingBottom: 17,
  },
  profileImage: {
    padding: 10,
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    alignSelf: 'center',

  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  bio: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  infoContainer: {
    width: '100%',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  value: {
    fontSize: 16,
    color: '#44a39c',
    fontWeight: 'bold',
  },
  centeredContent: {
    marginBottom: 45,
    marginTop:45 ,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
});

export default ProfilePage;

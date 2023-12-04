import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, StyleSheet, Button, Alert, Linking, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-native-safe-area-context';

const Callapi = () => {
  const jsonUrl = 'https://script.google.com/macros/s/AKfycbzaIBdaHAlQYwdTP1xlyH67akZocb-MSykceBDFDTey9Bf_abuUtDJ3fZ6w79FMwquzKw/exec';
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function refreshPage() {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

  function deleteData(id) {
    fetch(jsonUrl + '/' + id, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        alert('Data terhapus');
        refreshPage();
      });
  }

  return (
    <ScrollView> 
    <SafeAreaView>
      <TextInput
        placeholder="Cari Kafe"
        style={styles.searchInput}
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      {isLoading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <View>
          <FlatList
            data={dataUser.filter(item =>
              item.nama.toLowerCase().includes(searchText.toLowerCase())
            )}
            onRefresh={() => {
              refreshPage();
            }}
            refreshing={refresh}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <TouchableOpacity
              accessibilityRole="button"
              onPress={() => {
                Linking.openURL(
                  `google.navigation:q=${item.latitude},${item.longitude}`,
                );
              }}
              style={styles.linkContainer}
            >
              <View>
                <View style={styles.card}>
                  {/* <View style={styles.avatar}>
                    <FontAwesome5
                      name={item.icon}
                      size={50}
                      color={item.color}
                    />
                  </View> */}
                  <View>
                    <Text style={styles.cardtitle}>{item.nama}</Text>
                    <Text style={styles.tekskecil}>Alamat: {item.alamat}</Text>
                    <Text style={styles.ulasan}>Ulasan: {item.ulasan}</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}
                  >
                    <FontAwesome5 name="directions" size={20} color="white" />
                  </View>
                </View>

                
                {/* <View style={styles.button}>
                  <Button
                    title="Hapus"
                    onPress={() =>
                      Alert.alert(
                        'Hapus data',
                        'Yakin akan menghapus data ini?',
                        [
                          {
                            text: 'Tidak',
                            onPress: () => console.log('button tidak'),
                          },
                          {text: 'Ya', onPress: () => deleteData(item.id)},
                        ],
                      )
                    }
                    color={'red'}
                  />
                </View> */}
              </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </SafeAreaView>
    </ScrollView>
  );
};

export default Callapi;
const styles = StyleSheet.create({
  title: {
    paddingVertical: 12,
    backgroundColor: '#333',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avatar: {
    borderRadius: 100,
    width: 80,
  },
  cardtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  card: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#44a39c',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 60,
  },
  tekskecil: {
    color: 'white',
  },
  ulasan: {
    color: 'yellow',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 10,
  },
});
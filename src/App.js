import React from 'react';
import { 
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import foto from './assets/foto.jpeg';

const App = () => {
  return(
    <>
      <View style={styles.page}>
          <View style={styles.container_header}>
            <Image source={foto} style={styles.foto} />
            <Text style={styles.name}>Bruno Bilheri Monteiro</Text>
            <Text style={styles.jobDescription}>Desenvolvedor Mobile</Text>
            <View style={styles.social_icons}>
              <Icon name="github" size={30} />
              <Icon name="facebook" size={30} />
              <Icon name="linkedin" size={30} />
            </View>
          </View>
      </View>
    </>
  ) ;
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 125,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
  },
  jobDescription: {
    fontSize: 15,
    color: '#939393',
    marginBottom: 10,
    marginTop: 5,
  },
  social_icons: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '60%',
    justifyContent: 'space-evenly',
    borderRadius: 10,
  },
})

export default App;
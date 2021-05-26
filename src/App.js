import React from 'react';
import { 
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpeg';

const App = () => {
  return(
    <>
      <View style={styles.page}>
          <View style={styles.container_header}>
            <Image source={foto} style={styles.foto} />
            <Text style={styles.name}>Bruno Bilheri</Text>
            <Text style={styles.jobDescription}>Desenvolvedor Mobile</Text>
            <View>
              <Icon name="github" />
              <Text>Facebook</Text>
              <Text>LinkedIn</Text>
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
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  jobDescription: {
    color: '#939393',
    marginBottom: 10
  },
})

export default App;
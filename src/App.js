import React from 'react';
import { 
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import foto from './assets/foto.jpeg';


const App = () => {

  function handleSocialMedia(rede_social){
    switch(rede_social) {

      case 'linkedin' :
        Alert.alert('Meu Linkedin' ,'https://www.linkedin.com/in/bruno-bilheri-monteiro-4b128215b/')
        break
        case 'github' :
          Alert.alert('Meu Github' ,'https://github.com/brunoBMonteiro')
          break
          case 'facebook' :
            Alert.alert('Meu Facebook' ,'https://www.facebook.com/brunobilheriMonteiro/')
    }
  }

  return(
    <>
      <View style={styles.page}>
          <View style={styles.container_header}>
              <Image source={foto} style={styles.foto} />
              <Text style={styles.name}>Bruno Bilheri Monteiro</Text>
              <Text style={styles.jobDescription}>Desenvolvedor</Text>
          </View>

          <Text style={styles.skills_text}>Skills</Text>
          <View style={styles.list_container}>
            <View style={styles.frontEnd_skills}>
                <Text style={styles.titleSkills}>Front end</Text>
                <Text style={styles.skill}>HTML</Text>
                <Text style={styles.skill}>CSS</Text>
              <Text style={styles.skill}>JavaScript</Text>
            </View>

            <View style={styles.mobile_skills}>
                <Text style={styles.titleSkills}>Mobile</Text>
                <Text style={styles.skill}>React Native</Text>
            </View>

            <View style={styles.backEnd_skills}>
                <Text style={styles.titleSkills}>Back end</Text>
                <Text style={styles.skill}>JavaScript</Text>
                <Text style={styles.skill}>NodeJs</Text>
                <Text style={styles.skill}>Express</Text>
            </View>
          </View>

          <View style={styles.footer}>
              <View style={styles.social_icons}>
                  <TouchableOpacity onPress={() => handleSocialMedia('github')}>
                    <Icon name="github" size={30} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleSocialMedia('facebook')}>
                    <Icon name="facebook" size={30} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleSocialMedia('linkedin')}>
                    <Icon name="linkedin" size={30} />
                  </TouchableOpacity>
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
    justifyContent: 'flex-start',
    marginTop: 15,
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
  skills_text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  list_container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    width: '100%',
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  titleSkills: {
    marginTop: 10,
    fontSize: 18,
  },
  skill: {
    fontSize: 15,
    flexDirection: 'column',
    marginTop: 7,
  },
  social_icons: {
    flexDirection: 'row',
    backgroundColor: '#DCDCDC',
    width: '100%',
    justifyContent: 'space-evenly',
    padding: 5,
  },
})

export default App;
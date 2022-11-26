import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native'
import { News } from '../../models'
import { NewsCard } from '../../components'

const testText = 'Una organización sin fines de lucro, constituida en el año 1991 y que tiene como misión “Generar acceso a una alimentación digna para personas en situación vulnerable en nuestra comunidad". Nuestro objetivo es contribuir a la reducción de la inseguridad alimentaria a través de, la entrega de despensas a familias ensituación vulnerable en el Estado de Jalisco.'

const TESTING_NEWS = [
  {
    title: '¿Quiénes Somos?',
    date: new Date(),
    body: testText,
    imageUrl: 'https://www.informador.mx/__export/1566991098442/sites/elinformador/img/2019/08/28/rs3243618_dig-2019-08-20-23-33-49_crop1566991097544.jpg_554688468.jpg'
  },
  {
    title: 'Nuevo centro de acopio',
    date: new Date(),
    body: testText,
    imageUrl: 'https://www.informador.mx/__export/1566991098442/sites/elinformador/img/2019/08/28/rs3243618_dig-2019-08-20-23-33-49_crop1566991097544.jpg_554688468.jpg'
  },
  {
    title: 'El reto: acabar con el hambre',
    date: new Date(),
    body: testText
  }
]

const NewsFeed = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <Text style={{ fontSize: 35 }}>
          Comunidad
        </Text>
        <Text style={{ fontSize: 15 }}>
          Mantente al tanto de nuestras noticias
        </Text>
      </View>
      <View style={{ width: '25%', justifyContent: 'center' }}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
      </View>
    </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {TESTING_NEWS.map((news: News, index: number) => {
          return (
            <View key={index} style={{ marginBottom: 20 }}>
              <NewsCard news={news}/>
            </View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerContent: {
    marginLeft: 10,
    width: '75%',
    justifyContent: 'center'
  },
  logo: {
    height: 80,
    width: 80,
    marginRight: 10
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10
  },
  container: {
    alignSelf: 'center',
    width: '90%',
    height: '90%'
  }
})

export { NewsFeed }

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

const news0 = 'Una organización sin fines de lucro, constituida en el año 1991 y que tiene como misión “Generar acceso a una alimentación digna para personas en situación vulnerable en nuestra comunidad". Nuestro objetivo es contribuir a la reducción de la inseguridad alimentaria a través de, la entrega de despensas a familias ensituación vulnerable en el Estado de Jalisco.'
const news1 = 'Autoridades supervisaron ayer el nuevo Centro de Distribución del Banco de Alimentos Guadalajara. Las obras iniciaron el año pasado en un terreno donado por el Gobierno de Jalisco en la Colonia Santa María Tequepexpan, en Tlaquepaque, y se prevé que terminen en el primer trimestre del 2023, para triplicar la capacidad de elaboración de despensas de la organización fundada en 1991.'
const news2 = 'La comunidad del Centro Universitario de Ciencias Económico Administrativas hizo entrega al Banco de Alimentos Guadalajara de un total de mil 995 kilogramos de abarrotes varios tras participar en la Campaña Jalisco Comparte.El 18 de octubre, se entregaron 650 kgs; 31 de octubre, mil 240 kgs y finalmente el 4 de noviembre 105 kgs.'

const TESTING_NEWS = [
  {
    title: '¿Quiénes Somos?',
    date: new Date(),
    body: news0,
    imageUrl: 'https://www.informador.mx/__export/1566991098442/sites/elinformador/img/2019/08/28/rs3243618_dig-2019-08-20-23-33-49_crop1566991097544.jpg_554688468.jpg'
  },
  {
    title: 'Supervisan sede nueva del Banco de Alimentos ',
    date: new Date(),
    body: news1,
    imageUrl: 'https://www.informador.mx/__export/1566991098442/sites/elinformador/img/2019/08/28/rs3243618_dig-2019-08-20-23-33-49_crop1566991097544.jpg_554688468.jpg'
  },
  {
    title: 'CUCEA apoya a familias de Jalisco',
    date: new Date(),
    body: news2,
    imageUrl: 'http://www.gaceta.udg.mx/wp-content/uploads/2022/11/dsc_3114-696x463.jpg'
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
    height: '100%'
  }
})

export { NewsFeed }

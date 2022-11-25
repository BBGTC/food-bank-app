import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { useState } from 'react'
import { useTheme } from '@rneui/themed'
import { News } from '../../models'

const NO_PICTURE_URL = 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'

interface newsCardProps {
  news: News
}

const NewsCard = ({ news }: newsCardProps): JSX.Element => {
  const { theme } = useTheme()
  const [textShown, setTextShown] = useState<boolean>(false)

  const toggleShowText = (): void => {
    setTextShown(!textShown)
  }

  return (
    <View style={style.cardContainer}>
      <Image
      source={{ uri: news.imageUrl !== undefined ? news.imageUrl : NO_PICTURE_URL }}
      style={style.cardImage}
      />
      <View style={{ marginHorizontal: 10 }}>
        <Text style={style.title}>
          { news.title }
        </Text>
        <Text style={[style.date, { color: theme.colors.gray.date }]}>
          { news.date.toLocaleDateString('es') }
        </Text>
        <Text
          style={style.body}
          numberOfLines={textShown ? undefined : 4}>
            {news.body}
        </Text>
        <TouchableOpacity onPress={toggleShowText}>
          <Text
            style= {[style.showTextButton, { color: theme.colors.red }]}>
            {textShown ? 'Mostrar menos' : 'Mostrar más'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    paddingBottom: 10,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
  },
  date: {
    color: '',
    textAlign: 'right',
    fontStyle: 'italic'
  },
  body: {
    textAlign: 'justify',
    marginVertical: 5
  },
  showTextButton: {
    textAlign: 'center',
    textDecorationLine: 'underline'
  }
})

export { NewsCard }

import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import DonationListItem from '../../components/DonationListItem/DonationListItem';

const list = [
  {
    id: 1,
    name: "Canasta básica",
    priority: "High",
    image: "jijijiji"
  },
  {
    id: 2,
    name: "Canasta básica",
    priority: "High",
    image: "jijijiji"
  },
  {
    id: 3,
    name: "Canasta básica",
    priority: "High",
    image: "jijijiji"
  },
  {
    id: 4,
    name: "Canasta básica",
    priority: "High",
    image: "jijijiji"
  },

]

const renderItem = ({ item }) => (
  <DonationListItem
    id={item.id}
    name={item.name}
    priority={item.priority}
    image={item.image}
  />
)

const Donation = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={list}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

export default Donation
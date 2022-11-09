import {
  Button,
  SafeAreaView,
  Text,
  View
} from 'react-native';
import PriorityListItem from '../../components/PriorityListItem/PriorityListItem';
import { FooterButton } from '../../components';

import { useTheme, Input, Icon } from '@rneui/themed';


type DonationCategoryItemProps = {
  icon: string;
  name: string;
  quantity: number;
}

export default function DonationCategoryItem({ icon, name, quantity }: DonationCategoryItemProps) {

  const { theme } = useTheme();
  return (
    <View
      style={{
        height: 70,
        width: 300,
        padding: 12,
        marginBottom: 20,
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
      <View
        style={{
          flexDirection: "row"
        }}>
        <Icon
          name={icon}
          size={48}
          type="material"
          color={theme.colors.gray.A}
        ></Icon>
        <View
          style={{
            marginLeft: 12,
            justifyContent: "center"
          }}>
          <Text>{name}</Text>
          <Text style={{ color: theme.colors.gray.A }}>{quantity} kg</Text>
        </View>
      </View>
      <View
        style=
        {{ flexDirection: "row" }}>
        <Icon
          name="edit"
          size={24}
          type="material"
          color={theme.colors.gray.A}>
        </Icon>
        <Icon
          style={{ marginLeft: 5}}
          name="cancel"
          size={24}
          type="material"
          color={theme.colors.error}>
        </Icon>
      </View>
    </View>
  );
}



import { useTheme, Button, ListItem } from '@rneui/themed';

type PriorityListItem = {
  title: string;
}

const PriorityListItem = ({ title }: PriorityListItem) => {
  const { theme } = useTheme();
  return (
    <ListItem>
      <ListItem.Content>
        <ListItem.Title>
          Chris Jackson
        </ListItem.Title>
        <ListItem.Subtitle>
          Vice Chairman
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron  />
    </ListItem>
  )
}

export default PriorityListItem

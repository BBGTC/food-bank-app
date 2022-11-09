import { ListItem } from '@rneui/themed'

interface Props {
  title: string
}

const PriorityListItem = ({ title }: Props): JSX.Element => {
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
      <ListItem.Chevron />
    </ListItem>
  )
}

export default PriorityListItem

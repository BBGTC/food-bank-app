import { ListItem, Avatar } from '@rneui/themed'

type DonationListItemProps = {
  id: number,
  name: string,
  priority: string,
  image: string,
}

const DonationListItem = ({ id, name, priority, image }: DonationListItemProps) => {
  return (
    <ListItem bottomDivider>
      <Avatar source={{ uri: image }} />
      <ListItem.Content>
        <ListItem.Title>{name}</ListItem.Title>
        <ListItem.Subtitle>{priority}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default DonationListItem

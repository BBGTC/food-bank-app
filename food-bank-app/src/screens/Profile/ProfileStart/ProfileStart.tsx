import { View, Text } from 'react-native'
import { ButtonGroup, Icon, useTheme } from '@rneui/themed'

import {
  ProfileCard,
  Header
} from '../../../components/'
import { useAuthContext } from '../../../contexts/AuthContext'
import { Contributor } from '../../../models'

const BUTTONS = [
  {
    name: 'Información Personal',
    icon: 'person',
    screen: 'Mi informacion'
  },
  {
    name: 'Mis donaciones',
    icon: 'wallet-giftcard',
    screen: 'Mis donaciones'
  },
  {
    name: 'Mis facturas',
    icon: 'description',
    screen: 'Mis facturas'
  }
]

const ProfileStart = ({ navigation }: any): JSX.Element => {
  const { theme } = useTheme()

  const { profile } = useAuthContext() as { profile: Contributor }

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      padding: 32,
      marginTop: 16
    }}>
      <Header title='Mi perfil' />
      <ProfileCard
        name={`${profile?.name} ${profile?.middleName}\n${profile?.surname} ${profile?.secondSurname}`}
        email={profile?.email}
        image={`${profile.name[0]}${profile.surname[0]}`}
      />
      <ButtonGroup
        buttons={BUTTONS.map((button, index) => ({
          element: () =>
            <>
              <Icon name={button.icon} color={theme.colors.gray.A} />
              <Text key={index} style={{
                marginLeft: 8,
                fontSize: 16,
                color: theme.colors.gray.A
              }}>{button.name}</Text>
              <View style={{ flex: 1 }} />
              <Icon name='chevron-right' />
            </>
        }
        ))}
        onPress={index => navigation.navigate(BUTTONS[index].screen)}
        buttonStyle={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          padding: 12
        }}
        buttonContainerStyle={{
          height: 50
        }}
        containerStyle={{
          width: '100%',
          borderRadius: 4,
          borderWidth: 0,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5
        }}
        vertical
      />
    </View>
  )
}

export default ProfileStart

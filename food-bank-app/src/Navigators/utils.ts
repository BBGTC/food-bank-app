interface TabBarIcon {
  iconName: string
  iconType: string
}

const getDynamicTabBarIconProps = (routeName: string, focused: boolean): TabBarIcon => {
  let iconName: string = ''
  let iconType: string = ''
  if (routeName === 'Inicio') {
    iconType = 'ionicon'
    iconName = focused
      ? 'ios-home'
      : 'ios-home-outline'
  } else if (routeName === 'Comunidad') {
    iconType = 'ionicon'
    iconName = focused
      ? 'newspaper'
      : 'newspaper-outline'
  } else if (routeName === 'Perfil') {
    iconType = 'material-community'
    iconName = focused
      ? 'account'
      : 'account-outline'
  }
  return { iconName, iconType }
}

export { getDynamicTabBarIconProps }

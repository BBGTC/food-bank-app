interface Category {
  id: number
  name: 'basicBasket' | 'fruitsAndVegies' | 'dairy' | 'inedibles'
  displayName: string
  icon: string
  quantity: number
  isSelected: boolean
}

export { Category }

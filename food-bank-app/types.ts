interface Category {
  id: number
  name: 'basicBasket' | 'fruitsAndVegies' | 'dairy' | 'inedibles' | 'groceries'
  displayName: string
  icon: string
  quantity: number
  isSelected: boolean
}

export { Category }

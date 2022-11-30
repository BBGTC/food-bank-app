interface CategoryModel {
  id: number
  name: 'basicBasket' | 'fruitsAndVegies' | 'dairy' | 'inedibles' | 'groceries'
  displayName: string
  icon: string
  quantity: number
  isSelected: boolean
}

export default CategoryModel

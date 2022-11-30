interface InventoryModel {
  category: 'BB' | 'FV' | 'DA' | 'IE' | 'GR'
  demand: number
  supply: number
  urgency: number
  month: number
  year: number
  examples: string
}

export default InventoryModel

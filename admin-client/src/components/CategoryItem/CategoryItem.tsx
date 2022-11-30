import React from 'react'
import Fruit from '../../assets/fruit-pear.svg'
import MedicalBag from '../../assets/medical-bag.svg'
import Basket from '../../assets/basket.svg'
import Cow from '../../assets/cow.svg'
import Groceries from '../../assets/groceries.svg'

enum Category {
    basicBasket = 'basicBasket',
    fruitsAndVegies = 'fruitsAndVegies',
    dairy = 'dairy',
    inedibles = 'inedibles',
    groceries = 'groceries'
}

interface CategoryItemProps {
    category: keyof typeof Category,
    amount: number
}

const CATEGORY_TO_SVG_MAP = {
    basicBasket: Basket,
    inedibles: MedicalBag,
    fruitsAndVegies: Fruit,
    dairy: Cow,
    groceries: Groceries
}

const CATEGORY_TO_NAME_MAP ={
    basicBasket: 'Canasta básica',
    inedibles: 'No consumibles',
    fruitsAndVegies: 'Frutas y verduras',
    dairy: 'Lácteos',
    groceries: 'Abarrotes'
}

export const CategoryItem = ({category, amount}: CategoryItemProps) => {
  return (
    <div className='w-full p-4 shadow-md rounded-md my-4'>
        <div className="flex">
            <div className='mx-4'>
                <img src={CATEGORY_TO_SVG_MAP[category]} alt={`${category} icon`} width={60} />
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-lg'>
                    {CATEGORY_TO_NAME_MAP[category]}
                </p>
                <p className='font-semibold'>
                    Cantidad: <span className=' font-normal'>{amount} kg</span>
                </p>
            </div>
        </div>
    </div>
  )
}

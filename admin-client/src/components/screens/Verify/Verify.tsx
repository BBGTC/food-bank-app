import { Container } from "../../Container"
import { CategoryItem } from "../../CategoryItem/CategoryItem";


type Params = {
    userId: string;
    category: string;
}

interface Donation {
  userId?: string;
  category?: string;
  event?: string;
  date?: string;
  basicBasket?: number;
  fruitsAndVegies?: number;
  dairy?: number;
  inedibles?: number;
}

const DUMMY_DONATION: Donation = {
  userId: '2',
  event: '2',
  date: '2022-10-11',
  basicBasket: 23,
  fruitsAndVegies: 30,
  dairy: 100,
}

export const Verify = () => {

  const donation = DUMMY_DONATION

  return (
    <Container>
      <h1 className="mt-8 text-4xl text-center">
        Verificar donación
      </h1>
      <div className="flex flex-col justify-between h-full">
        <div>
          <p>User id: {donation.userId}</p>
          <p>Event: {donation.event}</p>
          <p>Date: {donation.date}</p>
          { donation.basicBasket && <CategoryItem category="basicBasket" amount={donation.basicBasket}/> }
          { donation.fruitsAndVegies && <CategoryItem category="fruitsAndVegies" amount={donation.fruitsAndVegies}/> }
          { donation.dairy && <CategoryItem category="dairy" amount={donation.dairy}/> }
          { donation.inedibles && <CategoryItem category="inedibles" amount={donation.inedibles}/> }
        </div>
        <div className="w-full flex flex-col my-4">
          <button type="button" className=" bg-green-500 p-4 my-1 mt-2 rounded-md text-white">
            Verificar
          </button>
          <button type="button" className=" bg-red-500 p-4 rounded-md text-white">
            Rechazar
          </button>
        </div>
      </div>
    </Container>
  )
}

import { Container } from "../../Container"
import { CategoryItem } from "../../CategoryItem/CategoryItem";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";

import Donation from "../../../models/donationModel";
import { DonationPayload } from "../../../adapters/donationAdapter";
import donationInwardsAdapter from "../../../adapters/donationAdapter";
const SERVER_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export const Verify = () => {
  const { donationId } = useParams();
  const [donation, setDonation] = useState<Donation | null>(null);
  const { token } = useAuthContext();
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchDonation = async() => {
      const response = await fetch(`${SERVER_URL}/donations/${donationId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const fetchedDonation = await response.json() as DonationPayload
      const adaptedDonation = donationInwardsAdapter(fetchedDonation)
      setDonation((prevDonation) => ({
        ...prevDonation,
        ...adaptedDonation
      }))
    }
    fetchDonation()
  }, [donationId])
  const handleVerify = async () => {
    await fetch(`${SERVER_URL}/donations/verify/${donationId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }  
    })
    navigate("/")
  }
  if(donation !== null)
  return (
      <Container>
        <h1 className="mt-8 text-4xl text-center">
          Verificar donación
        </h1>
        <div className="flex flex-col justify-between h-full">
          <div>
            <p>User id: {donation.contributor}</p>
            <p>Event: {donation.event} </p>
            <p> DATE: {donation.date.toLocaleDateString()}</p>
            { donation.basicBasket && <CategoryItem category="basicBasket" amount={parseInt(donation.basicBasket)}/> }
            { donation.fruitsAndVegies && <CategoryItem category="fruitsAndVegies" amount={parseInt(donation.fruitsAndVegies)}/> }
            { donation.dairy && <CategoryItem category="dairy" amount={parseInt(donation.dairy)}/> }
            { donation.inedibles && <CategoryItem category="inedibles" amount={parseInt(donation.inedibles)}/> }
          </div>
          <div className="w-full flex flex-col my-4">
            <button type="button" onClick={handleVerify} className=" bg-green-500 p-4 my-1 mt-2 rounded-md text-white">
              Verificar
            </button>
            <button type="button" onClick={() => navigate("/")} className=" bg-red-500 p-4 rounded-md text-white">
              Rechazar
            </button>
          </div>
        </div>
      </Container>
  )
  return(
    <div> Loading </div> 
  )
}

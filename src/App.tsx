import { useEffect, useState } from "react"
import BeerCard from "./components/BeerCard"

export type BeerCardType ={
    image:string,
    name: string,
    abv: number,
    volume: number,
    price: number,
    available: boolean
}




const App = () => {

  const [data,setData] = useState<BeerCardType[]>([])
  useEffect(()=>{
    fetch("data.json")
    .then(res => res.json())
    .then(data => setData(data))
  },[])
  return (
    <div className="beerCardWrapper">
      {data.map((item) => <BeerCard{...item}/>)}
    </div>
  )
}

export default App
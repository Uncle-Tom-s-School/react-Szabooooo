import type { BeerCardType } from "../App"

const BeerCard = (props: BeerCardType) => {
  return (
    
    <div className='beerCard'>
      <img src={props.image} alt="" />
      <h3>{props.name} {props.abv} {props.volume}</h3>
      <p>{props.price} Ft</p>
      <b className={props.available ? "available" : "notAvailable"}>{props.available ? "Raktáron" : "Nincs raktáron"}</b>
    </div>
  )
}

export default BeerCard
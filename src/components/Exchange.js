import "./Exchange.css"
import { useState, useEffect } from "react"
//import data from "./data" //Pro použití pouze když je problém s api a je potřeba pracovat se styly Exchange.css.

const Exchange = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"

useEffect( () => {
    const getData = async () => {
        const response = await fetch(url)
        const finalData = await response.json()
        setLoading(false)
        setData(finalData)
    }
    getData()
}, [url])

    return (
        <div className="responsibilityContainer">
            <div className="cryptoContainer">
                <div className="coinHeader">
                    <p className="coinHeaderInfo">Název</p>
                    <p className="coinHeaderInfo">Cena</p>
                    <p className="coinHeaderInfo">Změna za 24h</p>
                    <p className="coinHeaderInfo">ATH</p>
                    <p className="coinHeaderInfo">Změna od ATH</p>
                </div>
                {loading ? "Byl překročen počet žádostí o data, zkuste to prosím později." : <div className="pricelist">
                    {data.map( (oneCoin) => {
                        return (
                            <div className="coinContainer" key={oneCoin.id}>
                                <img className="coinPhoto" src={oneCoin.image} alt="" />
                                <h2>{oneCoin.name}</h2>
                                <p>${oneCoin.current_price}</p>
                                <p className={(oneCoin.price_change_percentage_24h >= 0) ? "green" : "red"}>{oneCoin.price_change_percentage_24h.toFixed(2)} %</p>
                                <p>${oneCoin.ath}</p>
                                <p className={(oneCoin.ath_change_percentage >= 0) ? "green" : "red"}>{oneCoin.ath_change_percentage.toFixed(2)} %</p>
                            </div>
                        )
                    })}
                </div>}
            </div>
        </div>
    )
}

export default Exchange
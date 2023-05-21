import "./Info.css"
import data from "./infoData.js"
 
 const Info = () => {
   return (
     <div className="infoContainer">
        {data.map( (onePart) => {
            return (
                <div className="infoContainerPart" key={onePart.id}>
                    <h4>{onePart.header}</h4>
                    <p className="">{onePart.info}</p>
                    <img className={onePart.id} src={onePart.img} alt="" />
                </div>
            )
        })}
     </div>
   )
 }
 
 export default Info
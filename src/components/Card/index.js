import "./styles.css"

const Card = (props) => {
    console.log(1)
    return (
        <div className={"card"}>

            <img src={props.src} className={"img__container"}/>

        </div>
    )
}

export default Card;
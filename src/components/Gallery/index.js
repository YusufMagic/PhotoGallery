import "./styles.css"
import Card from "../Card";
import {useEffect, useRef, useState} from "react";

const Gallery = (props) => {
    const [cur_card, setCur] = useState(0)

    const card_container = useRef(null)

    useEffect(() => {
        console.log(cur_card)
        if (cur_card < 15 && cur_card>-1) {
            card_container.current.style.transitionDuration = '0.5s';
            card_container.current.style.transform = `translate(-${350*cur_card}px)`
        }
    }, [cur_card])

    const handle_next = () => {
        if (cur_card <= 20) setCur(cur_card+1)
    }


    const handle_prev = () => {
        if (cur_card > 0) setCur(cur_card-1)
    }
    return (
        <div>
            <button onClick={handle_prev}>Previous</button>
            <button onClick={handle_next}>Next</button>
            <div ref={card_container} className={"container"}>
                <div className="card_container">
                    {props.images.map(el => <Card key={el.id} src={el.webformatURL}/>)}
                </div>
            </div>
        </div>
    )
}

export default Gallery;
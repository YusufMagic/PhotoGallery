import logo from './logo.svg';
import './App.css';
import Gallery from "./components/Gallery/index"
import ImageSearch from "./components/ImageSearch";
import {useState} from "react";

const API_TOKEN = "21400789-97818c8b31319fbaa06c8653a"

function App() {

   const [state, setState] = useState({
       images: []
   })

    const handleMakeRequest = async (e) => {
        e.preventDefault()
        const searchValue = e.target.elements.searchValue.value
        const request = await fetch(`https://pixabay.com/api/?key=${API_TOKEN}&q=${searchValue}&per_page=15`)
        const results = await request.json()
        if (!searchValue) {
            console.log("что-то не то со значением! Введите новое")
        } else {
            setState({images: results.hits})
            console.log(state.images, results)
        }
    }
    return (
        <div>
            <ImageSearch handleMakeRequest={handleMakeRequest}/>
            <Gallery images={state.images}/>
        </div>
    );
}

export default App;

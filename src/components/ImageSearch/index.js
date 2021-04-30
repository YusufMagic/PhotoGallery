import "./styles.css"

const ImageSearch = (props) => {
    return (
        <div className="imageSearch">
            <form onSubmit={props.handleMakeRequest} className="imageSearch__form">
                <input autoComplete="off" name="searchValue" type="text" placeholder="Поиск изображений"/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default ImageSearch;
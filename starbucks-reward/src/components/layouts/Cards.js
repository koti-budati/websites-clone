const Cards = (props) => {
    return (
        <div>
            <img src={props.location} alt={'getting-started-1'}></img>
            <h3>{props.h3}</h3>
            <p>To get started, join now. You can also Join in the app to get access to the full range of Starbucks® Rewards benefits.</p>
        </div>
    )
}

export default Cards


const Cards = ({ data }) => {
    console.log(data)
    return (<>

        <p>hello card</p>
        <p>{data.results[0].name.first}</p>
        <p>{data.results[0].name.last}</p>
        <p>{data.results[0].phone}</p>
        <img src={data.results[0].picture.medium} />
    </>)
}



export default Cards;
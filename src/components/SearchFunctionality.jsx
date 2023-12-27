import {useState} from "react";

const SearchFunctionality = () => {
    const [search, setSearch] = useState('')
    const [shopping, setShopping] = useState([
        {
            name: 'Milk',
            quantity: 2,
            price: 1,
            discount: 0
        },
        {
            name: 'Crisp',
            quantity: 5,
            price: 2.5,
            discount: 10
        },
        {
            name: 'Bread',
            quantity: 1,
            price: 0.5,
            discount: 10
        },
        {
            name: 'Socks',
            quantity: 4,
            price: 5,
            discount: 20
        },
        {
            name: 'Crunchy Bar',
            quantity: 15,
            price: 1.5,
            discount: 1
        }
    ])

    function handleInputChangeSearch(e) {
        e.preventDefault()
        setSearch(e.target.value)
    }

    function handleSubmitSearch(e) {
        return undefined;
    }

    return(
        <div>
            <input type = "search" name ="searchInput" onChange={e => handleInputChangeSearch(e)}/> <button onClick={e => handleSubmitSearch(e)}>Search</button>
            <ul>
            {shopping
                .filter((item) => item.name.toLowerCase().startsWith(search.toLowerCase()))
                .map((item, index) => (
                    <li key={index}>
                        <h3>Name: {item.name}</h3>
                        <h5>Price: {item.price}</h5>
                        <h5>Quantity: {item.quantity}</h5>
                        <h5>Discount: {item.discount}%</h5><br/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchFunctionality
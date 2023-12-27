import {useState} from "react";
import {Link} from "react-router-dom";

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
            <Link to = "/login">login</Link>
            <input type = "search" name ="searchInput" onChange={e => handleInputChangeSearch(e)}/> <button onClick={e => handleSubmitSearch(e)}>Search</button>
            <table>
                <thead>
                <tr>
                    {Object.keys(shopping[0]).map((key) =>  (
                        <th key = {key}> {key.toUpperCase()}</th>
                    ))}
                </tr>
                </thead>
            {shopping
                .filter((item) => item.name.toLowerCase().startsWith(search.toLowerCase()))
                .map((item, index) => (
                    <tr key={index}>
                        {Object.keys(item).map((key) => (
                            <td key={key} style={{ verticalAlign: 'middle' }}>{item[key]}</td>
                        ))}
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default SearchFunctionality
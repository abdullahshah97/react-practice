import {useState} from "react";

const Buttons = () => {
    const [search, setSearch] = useState('')
    const [fruit, setFruit] = useState([{
            name: 'Apple',
            quantity: 3
        },
            {
                name: 'Carrot',
                quantity: 6
            },
            {
                name: 'Banana',
                quantity: 9
            }]
    )

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <label>Search: </label>
            <input type="search" value={search} onChange={e => handleSearchChange(e)}/>
            <table>
                <thead>
                <tr>
                    {Object.keys(fruit[0]).map((key) => (
                        <th key = {key}>
                            {key}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                    {fruit.map((item, index) => (
                       <tr key ={index}>
                           {Object.keys(item).map((key) => (
                            <td key={`${index}-${key}`}>
                                {item[key]}
                            </td>
                        ))}
                       </tr>
                    ))}
                </tbody>
            </table>
            <ul>
                {fruit
                    .filter(item => item.name.startsWith(search))
                    .map((item) =>
                        <li key={item.name}>
                            {item.name}
                        </li>)
                }
            </ul>
        </div>
    )
}

export default Buttons;
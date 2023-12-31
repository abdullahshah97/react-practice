import {useState} from "react";
import {Link} from "react-router-dom";

const SearchFunctionalityImproved = () => {
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

    // New state to track editing status
    const [editIndex, setEditIndex] = useState(-1);
    const [editedItem, setEditedItem] = useState({});

    function handleInputChangeSearch(e) {
        setSearch(e.target.value);
    }

    function handleSubmitSearch(e) {
        e.preventDefault();
        // Your search logic here
    }

    // Function to handle the start of editing
    function handleEdit(index) {
        setEditIndex(index);
        setEditedItem({ ...shopping[index] });
    }

    // Function to handle the cancelation of editing
    function handleCancelEdit() {
        setEditIndex(-1);
        setEditedItem({});
    }

    // Function to handle saving the edited item
    function handleSaveEdit(index) {
        const updatedShopping = [...shopping];
        updatedShopping[index] = editedItem;
        setShopping(updatedShopping);
        setEditIndex(-1);
        setEditedItem({});
    }

    // Function to handle changes in the edited item
    function handleEditChange(e, key) {
        setEditedItem({ ...editedItem, [key]: e.target.value });
    }

    return (
        <div>
            <Link to="/login">login</Link>
            <input
                type="search"
                name="searchInput"
                value={search}
                onChange={handleInputChangeSearch}
            />
            <button onClick={handleSubmitSearch}>Search</button>
            <table>
                <thead>
                <tr>
                    {Object.keys(shopping[0]).map((key) => (
                        <th key={key}>{key.toUpperCase()}</th>
                    ))}
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {shopping
                    .filter((item) =>
                        item.name.toLowerCase().startsWith(search.toLowerCase())
                    )
                    .map((item, index) => (
                        <tr key={index}>
                            {Object.keys(item).map((key) => (
                                <td key={key} style={{ verticalAlign: "middle" }}>
                                    {/* Conditionally render either input field or item value */}
                                    {editIndex === index ? (
                                        <input
                                            type="text"
                                            value={editedItem[key]}
                                            onChange={(e) => handleEditChange(e, key)}
                                        />
                                    ) : (
                                        item[key]
                                    )}
                                </td>
                            ))}
                            <td>
                                {editIndex === index ? (
                                    <>
                                        <button onClick={() => handleSaveEdit(index)}>
                                            Save
                                        </button>
                                        <button onClick={handleCancelEdit}>Cancel</button>
                                    </>
                                ) : (
                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchFunctionalityImproved;
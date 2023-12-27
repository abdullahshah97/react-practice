import {useEffect, useState} from "react";

const HomePage = () => {
    const [cartItems, setCartItems] = useState([{
           name: 'Item1',
           quantity: 1,
           price: 1
        },
        {
            name: 'Item2',
            quantity: 2,
            price: 2
        },
        {
            name: 'Item3',
            quantity: 3,
            price: 3
        }])
    const [editStates, setEditStates] = useState(Array(cartItems.length).fill(false));
    const handleEmptyCart = (e) => {
        e.preventDefault();
        setCartItems([])
    }

    const handleEditQuantity = (e, index) =>{
        e.preventDefault()
       // cartItems[index].quantity = e.target.value;
        setCartItems((cartItems) => {
            const newCartItems = [...cartItems];
            const intValue = isNaN(parseInt(e.target.value, 10)) ?  0 : parseInt(e.target.value)
            newCartItems[index].quantity = intValue;
            return newCartItems;
        })
    }

    const handleIsEditing = (index) => {
        setEditStates((e) => {
            const newEditStates = [...editStates]
            newEditStates[index] = true;
            return newEditStates;
        })
    }

    const handleEditSubmit = (e, index) => {
        e.preventDefault();
        setEditStates((e) => {
            const newEditStates = [...editStates]
            newEditStates[index] = false;
            return newEditStates;
        })
    }

    return(
        <div>
            <ul>
                <li>Total Items: {cartItems.reduce((total, items) => total + items.quantity, 0)}</li>
                <li>Total Price: {cartItems.reduce((total, item) => total + item.price, 0)}</li>
                <button onClick = {e  => handleEmptyCart(e)} disabled = {!cartItems.length} > Empty Cart </button>

                {cartItems.map((item, index) => (
                    <form key={index} onSubmit={(e) => handleEditSubmit(e, index)}>
                    <li key={index}>
                        <p>
                            Name: {item.name} <br/>
                            Quantity: {item.quantity}<br/>
                            Unit Price: {item.price}<br/>
                            Total Price: £{item.price * item.quantity} <br/>
                        </p>
                        {editStates[index] ? (
                            <input type="number" value={(item.quantity === 0 ? '' : item.quantity)} name="newQuantity" onChange = {(e) => handleEditQuantity(e, index)} />
                        ) : (
                            <button type = "button" onClick={() => handleIsEditing(index)}>Edit</button>
                        )}
                        {editStates[index] && (<button type = "submit">Submit</button>)}
                    </li>
                    </form>
                ))}
            </ul>
        </div>
    )

}
export default HomePage
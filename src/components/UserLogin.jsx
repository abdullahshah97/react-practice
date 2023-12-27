import {useState} from "react";

const UserLogin = () =>{
    const[userDetails, setUserDetails] = useState({
        username: 'john@john.com',
        password: '213'
    })
    const[enterDetails, setEnterDetails] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        userDetails.username === enterDetails.username & userDetails.password === enterDetails.password
            ? alert(`success `) : alert (`fail`)
    }

    function handleInputChange(e, key) {
        e.preventDefault()
        const newEnterDetails = {...enterDetails}
        newEnterDetails[key]= e.target.value;
        setEnterDetails(newEnterDetails)
    }

    return(
        <div>
                <form onSubmit ={e => handleSubmit(e)}>
                    <input type = "email" onChange = {e => handleInputChange(e, "username")}>
                    </input>
                    <input type = "password" onChange ={e => handleInputChange(e, "password")}>
                    </input>
                    <button type = "submit">Submit</button>
                </form>
        </div>
    )

}

export default UserLogin
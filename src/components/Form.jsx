import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { formSubmit, resetForm } from '../Actions/authAction';
import { useNavigate } from 'react-router-dom'

function Form() {

    const [user, setUser] = useState({
        fname: "",
        lname: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate()



    const formSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted")
        dispatch(submitForm());
        navigate('./home');

    }

    const resetForm = () => {
        setUser({fname: '', lname: ''})
    }


    return (
        <form>
            <div onSubmit={formSubmit}>
                <input type="text" placeholder="First name" value={username.fname} onChange={(e) => setUser({ ...user, fname: e.target.value })} /><br /><br />
                <input type="text" placeholder="Last name" value={username.lname} onChange={(e) => setUser({ ...user, lname: e.target.value })} /><br /><br />
                <input type="sumbmit" value="SUBMIT" /><br />
                <input type="Reset" value="Reset"></input>
            </div>
        </form>
    )


}
export default Form;
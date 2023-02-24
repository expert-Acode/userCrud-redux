import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { edituser, userUpdated } from './userSlice';

export function EditUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {id}=useParams();
    const user = useSelector((state) => state.users.entities.find((user)=>user.id==id))
    console.log(user)

    const setData=()=>{
        setName(user.name)
        setEmail(user.email)
    }

     useEffect(()=>{
        setData();
     },[])

    const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);

    const handleClick = () => {
        if (name && email) {
            dispatch(
                edituser({
                    id: id,
                    name,
                    email,
                })
            );
            setError(null);
            navigate("/");
        } else {
            setError("Fill in all fields");
        }
    };

    return (
        <div className="container">
            <div className="row">
                <h1>Update user</h1>
            </div>
            <div className="row">
                <div className="three columns">
                    <label htmlFor="nameInput">Name</label>
                    <input
                        className="u-full-width"
                        type="text"
                        placeholder="test@mailbox.com"
                        id="nameInput"
                        onChange={handleName}
                        value={name}
                    />
                    <label for="emailInput">Email</label>
                    <input
                        className="u-full-width"
                        type="email"
                        placeholder="test@mailbox.com"
                        id="emailInput"
                        onChange={handleEmail}
                        value={email}
                    />
                    <span style={{color:"red"}}>  {error && error}</span>
                    <button onClick={handleClick} className="button-primary">
                        Save user
                    </button>
                </div>
            </div>
        </div>
    )
}

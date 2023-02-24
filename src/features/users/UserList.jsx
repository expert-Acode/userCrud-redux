import { useState } from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteuser, userDeleted } from "./userSlice"

export function UserList() {
    const dispatch=useDispatch();
    const [alldata,setAllData]=useState([])

    const { entities,loading }=useSelector((state)=>state.users);

    useEffect(()=>{
    // localStorage.setItem('allusers',JSON.stringify(entities));
    // const data = JSON.parse(localStorage.getItem('allusers'));

    setAllData(entities)
     
    },[entities])

    const handleDelete=(id)=>{
        dispatch(deleteuser(id))
    }

    return (
        <div className="container">
            <div className="row">
                <h1> Redux Crud User App </h1>
            </div>
            <div className="row">
                <div className="two columns">
                    <Link to="/add-user">
                    <button className="button-primary">Add user</button>
                    </Link>
                </div>
                <div className="two columns">
                    <Link to="/counter">
                    <button className="button-primary">Redux Counter</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                {loading?(
                    <h1>loading............</h1>
                ):(
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            {/* <th>Address</th>  */}
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                      {alldata.map(({id,name,email},i)=>(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                             {/* <td>
                              <tr><th>street-</th>
                               <td> {address.street}</td></tr>
                             <tr><th>city -</th>
                                <td>{address.city}</td></tr>
                           </td> */}
                           <td>
                                <button onClick={()=>handleDelete(id)}>Delete</button>
                             <Link to={`/edit-user/${id}`}>
                                <button>Edit</button>
                             </Link>
                            </td>
                        </tr>
                      ))}
                    </tbody>
                </table>
                )}
            </div>
        </div>
    )
}
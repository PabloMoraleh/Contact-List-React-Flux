import React from "react"
import { useContext } from "react"
import { Link, Navigate } from "react-router-dom"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom"

export const Contact = () => {
    const {store,actions} = useContext(Context)
    const navigate = useNavigate()
    return (
<div className="container">
    <div className="contactsCard">
        <ul>
            {
                store.contacts.map( (contact) => {
                    return (
                        <li className="row" key={contact.id}>
                            <div className="col-md-3"><img style={{width: "150px", height: "150px", objectFit:"cover", borderRadius:"15px"}} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"></img></div>
                            <div className="col-md-7">
                                <div>{contact.full_name}</div>
                                <div>{contact.address}</div>
                                <div>{contact.phone}</div>
                                <div>{contact.email}</div>
                            </div>
                            <div className="col-md-2">
                            <i className="fa-solid fa-pencil" onClick={() => {
                                actions.seeContact(contact)
                                navigate("/AddContact") 
                            }}></i>
                            <i className="fa-solid fa-trash"></i>
                            </div>
                        </li>
                    )
                } )
            }
        </ul>
    </div>

</div>
    )
}
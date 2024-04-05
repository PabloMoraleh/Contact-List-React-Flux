import React, {useContext, useState} from "react"; //siempre importar useContext
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; //siempre importar el Context



export const AddContact = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const {actions,store}= useContext(Context) // ejecucion del contexto

  function handleSubmit(e) {
    e.preventDefault()
    // console.log(inputName, inputEmail, inputPhone, inputAddress);
    actions.addContact(inputName, inputEmail, inputPhone, inputAddress);
  }
// console.log(store.contact);

  return (
<div className="container">
  <form onSubmit={handleSubmit} >
    <h1 className="text-center">Add a new contact</h1>
  <div className="mb-3">
    <label htmlFor="fullName" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="textName" placeholder="Full Name" onChange={(e)=> setInputName(e.target.value)} value={inputName}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e)=> setInputEmail(e.target.value)} value={inputEmail}/>
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone</label>
    <input type="text" className="form-control" id="phone" placeholder="Enter phone" onChange={(e)=> setInputPhone(e.target.value)} value={inputPhone}/>
  </div>
  <div className="mb-3">
    <label htmlFor="adress" className="form-label">Adress</label>
    <input type="text" className="form-control" id="adress" placeholder="Enter adress" onChange={(e)=> setInputAddress(e.target.value)} value={inputAddress}/>
  </div>
  <div className="d-grid">
  <button type="submit" className="btn btn-primary">Save</button>
  </div>
  <Link to={"/"}>or get back contacts</Link>
</form>
</div>
  )
}
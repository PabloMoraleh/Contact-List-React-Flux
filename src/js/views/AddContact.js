import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const AddContact = () => {
  const {actions,store}= useContext(Context)
console.log(store.contact);
  return (
<div className="container">
  <form >
    <h1 className="text-center">Add a new contact</h1>
  <div className="mb-3">
    <label htmlFor="fullName" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="textName" placeholder="Full Name" value={store.contact.full_name}/>
  </div>
  <div class="mb-3">
    <label htmlFor="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email" value={store.contact.email}/>
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone</label>
    <input type="text" className="form-control" id="phone" placeholder="Enter phone" value={store.contact.phone}/>
  </div>
  <div className="mb-3">
    <label htmlFor="adress" className="form-label">Adress</label>
    <input type="text" className="form-control" id="adress" placeholder="Enter adress" value={store.contact.address}/>
  </div>
  <div class="d-grid">
  <button type="submit" className="btn btn-primary">Save</button>
  </div>
  <Link to={"/"}>or get back contacts</Link>
</form>
</div>
  )
}
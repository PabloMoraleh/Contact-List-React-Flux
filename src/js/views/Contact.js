import React, {Component} from "react";

export const Contact = () => {
  return (
<div className="container">
  <form >
    <h1 className="text-center">Add a new contact</h1>
  <div className="mb-3">
    <label for="fullName" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="textName" placeholder="Full Name"/>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email" />
  </div>
  <div className="mb-3">
    <label for="phone" className="form-label">Phone</label>
    <input type="text" className="form-control" id="phone" placeholder="Enter phone" />
  </div>
  <div className="mb-3">
    <label for="adress" className="form-label">Adress</label>
    <input type="text" className="form-control" id="adress" placeholder="Enter adress"/>
  </div>
  <div class="d-grid">
  <button type="submit" className="btn btn-primary">Save</button>
  </div>
</form>
</div>
  )
}
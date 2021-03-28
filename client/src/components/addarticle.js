
import axios from 'axios'
import { connect } from 'react-redux'
import { Route, Link } from "react-router-dom"
import { add_Article } from '../Action/ActionsArticle'
import React, { useState } from 'react';

function Addarticle({ add_Article }){
    const [formData, updateFormData] = useState({});
    const onadd = (e) => {
        if (!formData.name.length || !formData.phone.length ||! formData.email.length) {
            e.preventDefault()
            alert("tout les champs doivent être rempli")

        } else 
            add_Article(formData)


    }

    const changehandle = (event) => {
        updateFormData({ ...formData, [event.target.name]: event.target.value })
    }
        return (

            

            <div className="contactadd"   >
                <h2 > Add a Contact </h2>
                <form  >
                    <div className="form-group">
                        <label for="exampleInputPassword1">Article Name</label>
                        <input type="text" name="name" className="form-control" id="exampleInputPassword1" placeholder="Enter Contact Name" onChange={(e) => changehandle(e)} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Article Phone Number</label>
                        <input type="text" name="phone" className="form-control" id="exampleInputPassword1" placeholder="Enter Contact Phone Number" onChange={(e) => changehandle(e)} />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => changehandle(e)} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <Link to='/articlelist'> <button type="submit" className="btn btn-primary" onClick={(e) => onadd(e)} > Submit</button> </Link>
                </form>


            </div>

        );
    

}

const mapDispatchToProps = dispach => {
    return {
        add_Article: (e) => dispach(add_Article(e))
    }
}


export default connect(null, mapDispatchToProps)(Addarticle);

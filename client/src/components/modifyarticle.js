import { connect } from 'react-redux'
import { Route, Link } from "react-router-dom";
import React, { useState } from 'react'
import { edit_Article } from '../Action/ActionsArticle';


function Modifyarticle({edit,edit_Article}) {
    const [dataForm, setDataForm] = useState(edit);
  
    const changehandle = (event) => {
        setDataForm({ ...dataForm,[event.target.name]: event.target.value })
    }
       
    const updatecontent = () => { edit_Article(dataForm)

    }
     
     
            
        
      return (

          <div className="contactadd"   >
          <h2 > Update Contact </h2>
          <form  >
            <div className="form-group">
                      <label for="exampleInputPassword1">Article Name</label>
                      <input type="text" name="name" className="form-control" id="exampleInputPassword1" placeholder={dataForm.name} onChange={(e) => changehandle(e)} />
            </div>
            <div className="form-group">
                      <label for="exampleInputPassword1"> Phone Number</label>
                      <input type="text" name="phone" className="form-control" id="exampleInputPassword1" placeholder={dataForm.phone} onChange={(e) => changehandle(e)} />
            </div>
  
            <div className="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={dataForm.email} onChange={(e) => changehandle(e)} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
  
                  <Link to='/articlelist'> <button type="submit" className="btn btn-primary" onClick={() => updatecontent()} > Edit </button> </Link>
</form>


      </div>
      
    );
  
}
const dispachEditToProp = dispach => {
    return {
        edit_Article: (Article) => dispach(edit_Article(Article))

    }
}

export default connect(null,dispachEditToProp)(Modifyarticle) ;

//import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import React, { useEffect } from 'react';
import { fetch_Articles, delete_Article } from '../Action/ActionsArticle'


function Articlelist({ userData, fetch_Articles, delete_Article,transfert }) {

    useEffect(() => {
        fetch_Articles();
      
    }, [])

    const onclickedit = (el) => transfert({
        id: el.id,
        name: el.name,
        phone: el.phone,
        email: el.email
    });
    
   
    return (
        
        
      <div className="contactlist">

            {userData.Articles.map(el => <div key={el.id} className="card" style={{ width: "22rem" }}>
                <div  className="card-body">
              
                    <p  className="card-text">Article Name : {el.name} </p>
                    <p  className="card-text"> Phone Number : {el.phone} </p>
                    <p  className="card-text"> Email : {el.email} </p>
                    <button type="button" class="btn btn-danger" onClick={() => delete_Article(el.id)}>Delete</button>
                   
                    <div class="buttoncard">

                        <Link to="/editarticle" ><button  type="button" class="btn btn-warning" onClick={() => onclickedit(el)}> Edit</button> </Link>

                    </div>
                </div>
      </div> )}
</div>
    );
  
}


const mapStateToProp = state => {
    return {
        userData: state.Article

    }
}
const mapDispatchToProps = dispach => {
    return {
        fetch_Articles: () => dispach(fetch_Articles()),
        delete_Article: (e) => dispach(delete_Article(e))
    }
}


export default connect(mapStateToProp, mapDispatchToProps)(Articlelist)

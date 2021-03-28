import React, { Component } from 'react';
import Addarticle from './addarticle'
import { Route,Switch, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Articlelist from './articletlist'
import Modifyarticle from './modifyarticle'


class Contactapp extends Component {
    constructor(props) {
        super(props)
        this.state={editcontact :""}
     
           }

    statetransfert=(data)=>{
     this.setState({editcontact:data})
    }

  render() {
    return (
      <Router>
      <div className="contactnav" >
      <h1> Welcome to App_Interview </h1>
      <div className="buttonform">
     
      <Link to="/articlelist"> <button type="button" class="btn btn-secondary">Article List</button> </Link>
      <Link to="/addarticle"> <button type="button" class="btn btn-success" > Add Article</button> </Link>
                </div>
      
          <Switch>
              <Route exact path="/addarticle"  render={() => <Addarticle />}/> 
              <Route exact path="/articlelist" render={() => <Articlelist transfert={this.statetransfert}/>} /> 
              <Route exact path="/editarticle" render={() => <Modifyarticle edit={this.state.editcontact} />} /> 
              
          </Switch>
       

   


      </div>
      </Router>


    );
  }
}

export default Contactapp ;
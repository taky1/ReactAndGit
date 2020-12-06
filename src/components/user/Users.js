import React, { Component } from 'react';
import SearchUser  from './SearchUser';
import User  from './User';
import axios from 'axios';

export class Users extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }    
    }

    getUsers = () => {
        axios.get('http://api.github.com/users')
        .then(Response => {
            this.setState({
                users: Response.data
            })
        })
    }

    componentDidMount() {
                this.getUsers();
                        }

    searchUsersFromGit = (data) => {
        if(data !== '') {
            axios.get(`https://api.github.com/search/users?q=${data}`)  
            .then(Response => {
            this.setState({
            users: Response.data.items
                          })
                      })
                    }
            }


    render() {
        return (
            <div>
           <div className="row my-2">
               <div className="col-md-12">
                    <SearchUser  getUserSearch={this.searchUsersFromGit}/>
               </div>
           </div>
            <div className="row">
                {this.state.users.map(user => (
                   <div className="col-md-4" key={user.id}>
                   <User user={user}/>
                   </div>
                   
                ))}
        
            </div>
            </div>
                )
    }
}

export default Users

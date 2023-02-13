import React from "react";
import { Redirect, Link } from 'react-router-dom';
import  axios from 'axios'

class Etudiant extends React.Component {
    state = {
        redirect: false,
        etudiant: [],
    }

    componentDidMount(){
        if(localStorage.getItem('token')){
           let id = this.props.match.params.id
            let headers = {
                headers: {
                    'API-TOKEN': localStorage.getItem('token')
                }
            }
            axios.get(`http://127.0.0.1:8000/api/etudiants/${id}`, headers)
            .then(res => {
                console.log(res.data.length)
                this.setState({etudiant: res.data})
            })
            .catch(err=>console.log(err))

        } else {
            this.setState({redirect: true});
        }
    }

     handleDelete = (id) => {
        console.log(id)
        axios.delete(`http://127.0.0.1:8000/api/delete/${id}`, {id})
        .then (res => {
            alert('Supprimer')
            this.setState({redirect: true});
        })
        .catch(error => 
            error.response
        )
    }
    

    

    render(){
        if(this.state.redirect){
            return (<Redirect to="/" />)
        }
        return(
            <>
                {<div class="container">  
                    <div className="jumbotron jumbotron-fluid text-success">Nombre d'étudiant: {this.state.etudiant.length}</div>       
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>N° Matricule</th>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Email</th>
                                <th>Filiere</th>
                                <th>Sexe</th>
                                <th>Date de naissance</th>
                                <th>Tel</th>
                                <th>profession_pere</th>
                                <th>profession_mere</th>
                                <th>Nom Entreprise</th>
                                <th>Durée de l'alternance</th>
                                <th>Supprimer</th>
                                <th>Modifier</th>
                            </tr>
                        </thead>
                        <tbody>                
                            {this.state.etudiant.length !== 0 &&
                            this.state.etudiant.map((element) => 
                                <tr>
                                    <td>{new Date().getFullYear()}-{element.niveau}{element.sexe}-0{element.id}</td>
                                    <td>{element.nom}</td>
                                    <td>{element.prenom}</td>
                                    <td>{element.email}</td>
                                    <td>{element.filiere}</td>
                                    <td>{element.sexe}</td>
                                    <td>{element.date_naissance}</td>
                                    <td>{element.telephone}</td>
                                    <td>{element.profession_pere}</td>
                                    <td>{element.profession_mere}</td>
                                    <td>{element.nom_entreprise}</td>
                                    <td>{element.duree}</td>
                                    <td><button type="button" className="btn btn-danger " onClick={ () => this.handleDelete( element.id)}>Supprimer</button></td>
                                    <td><Link className="btn btn-success  text-white" to={`/edit/${element.id}`}>Modifier</Link> </td> 
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                }
            </>
        )
    }
}

export default Etudiant;

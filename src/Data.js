import React from 'react'
import axios from 'react' 
const statistique = () =>{ 
  
  axios.get(`http://127.0.0.1:8000/api/statistique/niveau2`)
           .then(res => {
               //console.log(res.data)
               this.setState({statistique: res.data.statistique})
               this.setState({zavatra: null})
               this.setState({redirect: true});
               //console.log(typeof(this.state.niveau))
           })

  return (
  <div>
    <h1>zrztz</h1>
  </div>
  )
}


export const UserData = [
  {
    id: 1,
    year: 2019 ,
    userGain: 466,
    userLost: 344,
  },
  {
    id: 2,
    year: 2020,
    userGain: 467,
    userLost: 345,
  },
  {
    id: 3,
    year: 2021,
    userGain: 988,
    userLost: 555,
  },
  {
    id: 4,
    year: 2022,
    userGain: 900,
    userLost: 555,
  },
  {
    id: 5,
    year:2023,
    userGain: 830,
    userLost: 434,
  },
  
];

class Niveau extends React.Component {
  state = {
      niveau: []
  }

  componentDidMount(){
           axios.get(`http://127.0.0.1:8000/api/etudiants/niveau`)
           .then(res => {
               //console.log(res.data)
               this.setState({niveau: res.data.niveau})
               this.setState({zavatra: null})
               this.setState({redirect: true});
               //console.log(typeof(this.state.niveau))
           })
           .catch(err=>console.log(err))
       }
       render(){
        return (
            <div className="container">
                
              
            </div>
        )
    }
}



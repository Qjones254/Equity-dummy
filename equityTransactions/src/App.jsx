import "./App.css"
import  React, {useEffect,useState}from "react";
import image from './Components/images.png'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

function App(){
    //this is for the search bar
    const [search,setSearch] = useState('')
    console.log(search)
    const [columns,setColumns]=useState([])
    const[records,setRecords]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        //fetching from db json
      fetch('http://localhost:3000/transactions')
      .then(res=>{
        //calling the response
        return res.json();
       
       
      })    //displaying the transactions on raws and columns bcause it is a table 
      .then(data=>{
        setRecords(data)
         setColumns(object.keys(data[0]))

        })
    },[])
    return(
    //link allows routing to the add page
    //th tag is for the headers on the table
    //td tags allows the transactions from json to be arranged in the table
    //the ${d.id}allows us to see what is in the webpage without it the page will be empty
        <div className="container">
            <div className="header">
                <h1> <img className="image" src={image} alt="" /> EQUITY TRANSACTIONS</h1>
            </div>
            <div>
                <form >
                    <input onChange={(e)=> setSearch(e.target.value)} className="input" type="text" placeholder="Search Transactions"/>
                </form>
            </div>
            <div className="link"><Link to='/create' >Add</Link></div>
            <table className="table">
                <thead>
                    <tr>
                 {columns.map((c,i)=>(
                    <th key={i}>{c}</th>
                    
                 ))}
                 
                <th>ID</th>
                <th>DATE</th>
                <th>DESCRIPTION</th>
                <th>CATEGORY</th>
                <th>AMMOUNT</th>
                <th>ACTION</th>
                 </tr>
                </thead>
                <tbody>
                    {//the delete button has a function handle Submit for delete functionality
                       
                       //filtering the search bar
                       records.filter((d)=>{
                            return search.toLowerCase() ===''? d:d.
                            description.toLowerCase().includes(search);
                            
                           

                        }).map((d,i) => (
                           <tr key={i}>
                            <td>{d.id}</td>
                            <td> {d.date} </td>
                            <td> {d.description} </td>
                            <td> {d.category} </td>
                            <td> {d.ammount} </td>
                            <td>
                                
                                <button onClick={e=> handleSubmit (d.id)}className="delete">Delete</button>
                            </td>
                           </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
    //function for deleting
    function handleSubmit(id){
     const conf=  window.confirm("Do you want to Delete?");
     if(conf){
        //deleting the data from the db json
        axios.delete('http://localhost:3000/transactions/' +id)
        .then(()=>{
            alert('record has been deleted');
            navigate('/')
        
        }).catch(err=> console.log(err))
     }
    }
}

export default App;
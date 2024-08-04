import "./App.css"
import  React, {useEffect,useState}from "react";
import image from './Components/images.png'
import { Link } from "react-router-dom";

function App(){
    const [columns,setColumns]=useState([])
    const[records,setRecords]=useState([])
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
                    {
                        records.map((d,i) => (
                           <tr key={i}>
                            <td>{d.id}</td>
                            <td> {d.date} </td>
                            <td> {d.description} </td>
                            <td> {d.category} </td>
                            <td> {d.ammount} </td>
                            <td>
                                
                                <button onclick={e=> handleSubmit (d.id)}className="delete">Delete</button>
                            </td>
                           </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
    function handleSubmit(id){
        
    }
}

export default App;
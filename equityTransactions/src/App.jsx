import "./App.css"
import  React, {useEffect,useState}from "react";

function App(){
    const [columns,setColumns]=useState([])
    const[records,setRecords]=useState([])
    useEffect(()=>{
      fetch('http://localhost:3000/transactions')
      .then(res=>{
        return res.json();
       
       
      })
      .then(data=>{
        setRecords(data)
         setColumns(object.keys(data[0]))

      })
    },[])
    return(
        <div className="container">
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
                            <td>Up/De</td>
                           </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default App;
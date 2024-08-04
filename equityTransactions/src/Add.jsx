//importing axios for fetching
import axios from 'axios'
import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
//creating functionality to the add page
function Add(){
    const [inputData,setInputData]=useState({date:'',description:'',category:'',ammount:''})
    const navigate = useNavigate();
    //event and event listener
    function handleSubmit(event){
        event.preventDefault()
        //this returns input to the json
        axios.post('http://localhost:3000/transactions',inputData)
        .then(res=>{
            alert("Data Added Successfully!");
            navigate('/');
            

    }).catch(err =>console.log(err));
    }
     return(
    <div className='addPage'>
        <div className='addLayout'>
        <form onSubmit={handleSubmit} >
            
            <div>
                <label htmlFor="date">  Date</label>
                <input type="text" name='date' className='date'
                 onChange={e=>setInputData({...inputData, date:e.target.value})}/>
            </div>
           
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" name='description' className='description' 
                onChange={e=>setInputData({...inputData, description:e.target.value})}/>
                
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <input type="text" name='category' className='category' 
                 onChange={e=>setInputData({...inputData, category:e.target.value})}/>
            </div>
            <div>
                <label htmlFor="ammount">Ammount</label>
                <input type="text" name='ammount' className='ammount'
                 onChange={e=>setInputData({...inputData, ammount:e.target.value})} />
            </div><br/>
            <button className='btn'>Submit</button>
            </form>
        </div>
    </div>
)}

export default Add
import "./App.css"
import dbJson from "/db.json"
import * as React from "react";
import {useTable} from 'react-table'
function App(){
const data = React.useMemo(()=>dbJson,[]);
const columns=React.useMemo(()=>[
{
    Header:"Id",
    accessor:"id",
},
{
    Header:"Date",
    accessor:"date",
},
{
    Header:"Description",
    accessor:"description",
},
{
    Header:"Category",
    accessor:"category",
},
{
    Header:"Ammount",
    accessor:"amount",
},
],
[]
);
const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=useTable({columns,data});

return <div className="App">
    <div className="container">
        <table {...getTableProps()}>
            <thead>
             {headerGroups.map((headerGroups)=>(
                <tr {...headerGroups.getHeaderGroupProps()}>
                   {headerGroups.headers.map((column)=>(
                    <th {...column.getFooterGroupProps()}>
                        {column.render("Header")}
                    </th>
                   ))}
                </tr>
             ))}
            </thead>
            <tbody {...getTableBodyProps()}>
               {rows.map((row)=>{
                prepareRow(row)
                return(
                    <tr {...row.getRowProps()}>
                      {row.allCells.map((cell)=(
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      ))}
                    </tr>
                )
               })}

            </tbody>
        </table>
    </div>
</div>}
export default App;
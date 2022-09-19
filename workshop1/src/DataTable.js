import React, { useState, useEffect } from "react";
import TableAction from "./TableAction";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";



const AFMain = ()=>{
const [studentList, setStudentList] = useState([{id:0, firstName:'1firstname', lastName:'1last', age:10, birthday:'1', country:'', city:''},
{id:20, firstName:'2', lastName:'2', age:20, birthday:'', country:'', city:''}]);
return(
    
    <div className="container">
        <div className="col-5 offset-3">
        <table className="table" >
        <TableHeader></TableHeader>     
        <TableRow student={studentList}></TableRow>
    </table>
        </div>
    
    </div>
)
}

export default AFMain;
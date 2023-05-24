import React from "react";
import Table from 'react-bootstrap/Table';


const Users = ({users}) => {
  let columnName;
  if (users.length>0){
     columnName=Object.keys(users[0])
  }

  return (
    <div>
       <Table striped bordered hover>
      <thead>
        <tr>
       {columnName && columnName.map((columnHeading, index)=>{
        return <th key={index}>{columnHeading}</th>
       })} 
        </tr>
      </thead>
      <tbody>
        {users.map((row, index)=>{
         return <tr key={index}>
          {
            Object.values(row).map((rowData)=>{
            return <td key={rowData.id}>{typeof rowData==='object'?JSON.stringify(rowData):rowData}</td>
            })
          }
         </tr>
        })

        }
        
      </tbody>
    </Table>
    </div>
  );
};

export default Users;

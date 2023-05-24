import React from 'react'
import Table from 'react-bootstrap/Table';

const Post = ({posts}) => {
let objKeys;
let objVal;
  if(posts.length>0){
  objKeys= Object.keys(posts[0]);
  objVal=Object.values(posts)
  console.log(posts)
  // console.log(objVal);
}

 
  return (
    <div>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          { objKeys && objKeys.map((key)=>{
            return <th key={key}>
              {key}
            </th>

          })

          }
         
        </tr>
      </thead>
     <tbody>
      {
        posts.map((val,index)=>{
          return <tr key={index}>
            {Object.values(val).map((post)=>{
              return(
                <>
                <td key={post.id}>
                  {typeof post === "object" ? JSON.stringify(post) : post};
                </td>

                </>
              )
            })}
          </tr>

            })
      }
     </tbody>
    </Table>
    </div>
  )
}

export default Post



import React from "react";
// import { useEffect, useState } from "react";
// import { getData } from "../services/axios.service";
// import { USER_URL } from "../constants/api.constants";
import Button from 'react-bootstrap/Button';
import {Card} from 'react-bootstrap';

const Users = ({users}) => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     getData(USER_URL).then((resp) => setUsers(resp.data.users));
//   },[]);

  return (
    <div className="d-flex justify-content-center  flex-wrap">
      {users.map((user) => {
        return (
        <div key={user.id} className="m-3" >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" className="h-50" src={user.image} />

            <Card.Body>
              <Card.Title>{user.firstName}</Card.Title>
              <Card.Text>{user.email}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Users;

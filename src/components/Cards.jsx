import React from "react";
// import { useState, useEffect } from 'react'
import CardItem from "./CardItems";
import { Button } from "react-bootstrap";
// import {getData} from '../services/axios.service'
// import { PRODUCT_URL } from '../constants/api.constants'

const Cards = ({ prod, handleDel, handleEdit, handleAdd }) => {
  // const [prod, setProd]=useState([])

  // useEffect(()=>{
  //  getData(PRODUCT_URL).then((resp)=>setProd(resp.data.products))
  // },[])

  return (
    <>
      <Button variant="secondary" onClick={handleAdd}>
        Add Product
      </Button>
      <div className="d-flex flex-wrap justify-content-center">
        {prod.map((product) => {
          return (
            <CardItem
              key={product.id}
              product={product}
              handleDel={handleDel}
              handleEdit={handleEdit}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cards;

import { Tab, Tabs } from "react-bootstrap";
import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import Users from "../components/Users";
import Posts from "../components/Posts";
import { getData } from "../services/axios.service";
import ModalComp from "../components/ModalComp";
import AddModal from "../components/AddModal";

function TabComp() {
  const [key, setKey] = useState("products");
  const [prod, setProd] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const [editProduct, seteditProduct] = useState({});
  const [addShow, setaddShow] = useState(false);
  const [addProduct, setaddProduct] = useState({});

  const handleDel = (e, id) => {
    e.preventDefault();
    const filteredItems = prod.filter((item) => {
      return item.id !== id;
    });
    setProd(filteredItems);
  };

  const handleEdit = (e, product) => {
    e.preventDefault();
    //editProduct is created n saved because this product is a individual data from whichever edit btn
    //we clicked. the data is available locally within the function only. we need to send this data
    //to modal. so through set we created a global variable to send data.
    seteditProduct(product);
    setShow(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const updatedData = {
      ...editProduct,
      [e.target.name]: e.target.value,
    };

    seteditProduct(updatedData);
  };

  const handleEditChanges = (e) => {
    e.preventDefault();
    const updatedProd = prod.map((item) => {
      return item.id === editProduct.id ? editProduct : item;
    });
    setProd(updatedProd);
    setShow(false);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setaddShow(true);
  };

  const handleAddClose = () => {
    setaddShow(false);
  };

  const handleAddChange = (e) => {
    const newProduct = {
      ...addProduct,
      [e.target.name]: e.target.value,
      id: Math.random(),
    };
    setaddProduct(newProduct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    prod.unshift(addProduct);
    setaddShow(false);
  };

  useEffect(() => {
    getData(key).then((res) => {
      if (key === "products") {
        setProd(res.data.products);
      } else if (key === "users") {
        setUsers(res.data.users);
      } else {
        setPosts(res.data.posts);
      }
    });
  }, [key]);

  return (
    <>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="products" title="Product">
          <Cards
            prod={prod}
            handleDel={handleDel}
            handleEdit={handleEdit}
            handleAdd={handleAdd}
          />
        </Tab>
        <Tab eventKey="users" title="Users">
          <Users users={users} />
        </Tab>
        <Tab eventKey="posts" title="Posts">
          <Posts posts={posts} />
        </Tab>
      </Tabs>
      <ModalComp
        handleChange={handleChange}
        handleClose={handleClose}
        show={show}
        handleEditChanges={handleEditChanges}
        prod={editProduct}
      />
      <AddModal
        show={addShow}
        handleAddChange={handleAddChange}
        handleSubmit={handleSubmit}
        handleAddClose={handleAddClose}
      />
    </>
  );
}

export default TabComp;

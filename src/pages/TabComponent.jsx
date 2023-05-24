import { Tab, Tabs } from "react-bootstrap";
import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import Users from "../components/Users";
import Posts from "../components/Posts";
import { getData } from "../services/axios.service";
import ModalComp from "../components/ModalComp";

function TabComp() {
  const [key, setKey] = useState("products");
  const [prod, setProd] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const [editProduct, seteditProduct] = useState({});

  const handleDel = (e, id) => {
    e.preventDefault();
    const filteredItems = prod.filter((item) => {
      return item.id !== id;
    });
    setProd(filteredItems);
  };

  const handleEdit = (e, product) => {
    e.preventDefault();
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
          <Cards prod={prod} handleDel={handleDel} handleEdit={handleEdit} />
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
    </>
  );
}

export default TabComp;

import { Tab, Tabs } from "react-bootstrap";
import {useState,useEffect} from 'react'
import Cards from '../components/Cards'
import Users from '../components/Users';
import Posts from '../components/Posts';
import { getData } from "../services/axios.service";

function TabComp() {
    const [key, setKey] = useState('products');
    const [prod, setProd]=useState([])
    const [users, setUsers] = useState([]);
   const [posts, setPosts] = useState([]);

   useEffect(()=>{
    getData(key).then((res)=>{
      if (key==='products'){
        setProd(res.data.products)
      }
        else if (key==='users') {
          setUsers(res.data.users)
        }
        else {
          setPosts(res.data.posts)
        }
    
       
      
//       setPosts(res.data.posts)
    })
   },[key])
  
    return (
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="products" title="Product">
        <Cards prod={prod}/>
        </Tab>
        <Tab eventKey="users" title="Users">
          <Users users={users}/>
          
        </Tab>
        <Tab eventKey="posts" title="Posts" >
         <Posts posts={posts} />
        </Tab>
      </Tabs>
    );
  }
  

export default TabComp;
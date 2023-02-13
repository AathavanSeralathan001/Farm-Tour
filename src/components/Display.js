import React,{useState, useEffect} from 'react'
import firebase from "../firebase";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTranslation } from 'react-i18next'
import './display.css'
import '../styles/display.css'
import Background from './Background';
import Payment from './Payment';
import SlotsDisplay from './SlotsDisplay';
import { Link, useNavigate } from "react-router-dom"

export default function Display(props) {

  

    const { t } = useTranslation()
    const ref = firebase.firestore().collection("landRegistration")
    console.log(ref);
  
    const[data, setData] = useState([])
    const[loader, setLoader] = useState(true)
    function getData(){
      ref.onSnapshot((querySnapshot) => {
        const items = []
        querySnapshot.forEach((doc)=>{
          items.push(doc.data())
        })
        setData(items)
        setLoader(false)
      })
    }
  
    useEffect(() => {
      getData()
      console.log(data);
    
    
      }, [])
    

  return (
    <>


     <h2 className="text-center" >{t('POSTS')}</h2>
      {loader === false && (data.map((user)=>(

       
<div key={user.id}>


<div id="container1">    
    
    <div class="product-details">
        
    <h1>{t('Location')}: {user.location} </h1><br />
    <h2> {t('Land Owner Name')}: {user.landOwnerName} </h2><br />
    <h2>{t('Phone')}: {user.phone}  </h2><br />
    <h2>{t('Land Number')}:  {user.landNumber}  </h2><br /><br />
            
            <p class="information">{user.landDescription}</p><br />

        
        
<div class="control">
<Link to="/slots-display">
    <button class="btn11" href='/slots-display'>
     <span class="price">₹ 400</span>
   <span class="shopping-cart"><i class="fa fa-tree" aria-hidden="true"></i></span>
   <span class="buy" >Book now</span>
 </button>
 </Link>   
</div>
            
</div>
    
<div class="product-image">
    
    <img src={user.imageUrl || "https://img.freepik.com/free-photo/green-tea-bud-leaves-green-tea-plantations-morning_335224-955.jpg?w=996&t=st=1667454160~exp=1667454760~hmac=5d608b22be88384a12bc6d5d10979aa30b44ab8bfc82fb8631bd1f80c47e24eb" } alt="" />
    

<div class="info">
    <h2>{t('Rules and Regulations')} </h2>
    <ul>
        <li><strong> {user.rulesAndReg}  </strong> </li>
       
        
        
    </ul>
</div>
</div>

</div>









{/* <Card style={{ width: '40rem' }} className='mx-auto mb-5'>
   
      <Card.Body>
        <Card.Title><b>{t('Location')}:</b>{user.location}</Card.Title>
        <Card.Text>
       <b> {t('Land Description')}:</b>{user.landDescription}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><b> {t('Land Owner Name')}:</b>{user.landOwnerName} </ListGroup.Item>
        <ListGroup.Item> <b>{t('Phone')} :</b>{user.phone} </ListGroup.Item>
        <ListGroup.Item> <b>{t('Land Number')} :</b> {user.landNumber} </ListGroup.Item>
        <ListGroup.Item> <b>{t('Rules and Regulations')} :</b> {user.rulesAndReg} </ListGroup.Item>
      </ListGroup>
     
    </Card> */}

</div>

)))}
    </>
  )
}

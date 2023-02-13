import React,{useState, useEffect} from 'react'
import firebase from "../firebase";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Alert } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next'
export default function SlotsDisplay(props){
  const { t } = useTranslation()
    const ref = firebase.firestore().collection("slotCreation")
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

      function bookSlot(e){
        return(
            <>
               
            </>
        )
      }

  return (

    <>
    <h2 className="text-center" >{('POSTS')}</h2>
    {loader === false && (data.map((user)=>(
    <div  key={user.id}>

   
      <Card style={{ width: '40rem' }} className='mx-auto mb-5'>
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
      <Card.Body>
       
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><b> {t('Date')}:  </b>{user.Date} </ListGroup.Item>
        <ListGroup.Item> <b>{t('Time')}:  </b>{user.Time} </ListGroup.Item>
       
      </ListGroup>
      <Card.Body>
      <Link to="/payment">
        <Card.Link onClick={bookSlot}>{t('BOOK SLOT')}</Card.Link>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )))}
  </>
  )}



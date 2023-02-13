import React, {useRef, useState} from "react"
import { Form,Card,Button,Alert } from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import '../firebase'
import { setDoc, doc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"

export default function Signup() {
   
  // const [formData, setFormData] = useState({
    
  //   email: '',
  //   password: '',
  // })
  // const {email, password} = formData
    
  const { t } = useTranslation()
  const  emailRef = useRef()
  const  passwordRef = useRef()
  const  passwordConfirmRef = useRef()
  const { signup }  = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate(); 

  // const onChange = (e)=>{
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.id]: e.target.value,
  //   }))
  // }

 async function handleSubmit(e) {
    e.preventDefault()

   
    if(passwordRef.current.value !== passwordConfirmRef.current.value)
    {
        return setError('Passwords do not match')
    }

    try{
      const auth = getAuth()
        setError("")
        setLoading(true)

        // const userCredential = await createUserWithEmailAndPassword(
        //   auth,
        //   email,
        //   password
        // )
        // const user = userCredential.user
      const {user} = await signup(emailRef.current.value, passwordRef.current.value)
      console.log(user)

      // const formDataCopy = {...formData}
      // delete formDataCopy.password
      // formDataCopy.timestamp = serverTimestamp()
  
      // await setDoc(doc(db, 'landRegistration', user.uid), formDataCopy)


       navigate("/")
    } catch{
        setError('Failed to create an account')
        console.log(error)
    }
   
   

    setLoading(false)
  }

  return (
    <div>
      <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>{t('Sign Up')}</h2>
           
            {/* {JSON.stringify(currentUser)} */}
            {error && <Alert variant ="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>{t('Email')}</Form.Label>
                    <Form.Control type="email"  ref={emailRef} required/>
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>{t('Password')}</Form.Label>
                    <Form.Control type="password"  ref={passwordRef} required/>
                </Form.Group>
                <Form.Group id="password-confirm">
                    <Form.Label>{t('Confirm Password')}</Form.Label>
                    <Form.Control type="password"  ref={passwordConfirmRef} required/>
                </Form.Group>
                <Button disabled={loading} className='w-100 mt-2' type="submit"> {t('Sign Up')} </Button>
            </Form>
        </Card.Body>
      </Card>

      <div className='w-100 text-center mt-2'>
      {t('Already have an account?')}<Link to="/login">{t('Log In')}</Link>
        </div>
    </div>
  )
}

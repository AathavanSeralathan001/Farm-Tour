import React, {useRef, useState} from "react"
import { Form,Card,Button,Alert } from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom"
import GoogleButton from 'react-google-button'
import { useTranslation } from 'react-i18next'


export default function Login() {


  const { t } = useTranslation()

  const  emailRef = useRef()
  const  passwordRef = useRef()
  const {login, googleSignIn}  = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
 async function handleSubmit(e) {
    e.preventDefault()

    try{
        setError("")
        setLoading(true)
       await login(emailRef.current.value, passwordRef.current.value)
       navigate("/")
    } catch{
        setError('Failed to log in!')
        console.log(error)
    }
    setLoading(false)
  }
 const handleGoogleSignIn = async(e)=>{
   e.preventDefault();

   try{
    await googleSignIn();
    navigate ("/");
   }catch(err){
     setError(err.message)
   }

   
 }
  return (
    <div>
      <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>{t('Log In')}</h2>
           
            {/* {JSON.stringify(currentUser)} */}
            {error && <Alert variant ="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>{t('Email')}</Form.Label>
                    <Form.Control type="email" ref={emailRef} required/>
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>{t('Password')}</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required/>
                </Form.Group>
                
                <Button disabled={loading} className='w-100 mt-2' type="submit">{t('Log In')}</Button>
            </Form>
            <div className='w-100 text-center mt-2'>
            <Link to="/forgot-password">{t('Forgot Password')}</Link>
            </div>
        </Card.Body>
        <hr/>
        <div>
            <GoogleButton className='g-btn mx-auto' type="dark" onClick={handleGoogleSignIn}/>
        </div>
      </Card>

      <div className='w-100 text-center mt-2'>
      {t('Need an Account')} <Link to="/signup">{t('Sign Up')}</Link>
        </div>
    </div>
  )
}

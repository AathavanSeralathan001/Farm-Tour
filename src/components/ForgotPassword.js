import React, {useRef, useState} from "react"
import { Form,Card,Button,Alert } from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'

export default function ForgotPassword() {
  const  emailRef = useRef()
  const { t } = useTranslation()
  const { resetPassword}  = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
const [message, setMessage] = useState("")
 async function handleSubmit(e) {
    e.preventDefault()

    try{
        setMessage("")
        setError("")
        setLoading(true)
        await resetPassword(emailRef.current.value)
       setMessage('Check your inbox for further instructions')
    } catch{
        setError('Failed to reset password!')
        console.log(error)
    }
    setLoading(false)
  }

  return (
    <div>
      <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>{t('Password Reset')}</h2>
            {message && <Alert variant ="success">{message}</Alert>}
            {/* {JSON.stringify(currentUser)} */}
            {error && <Alert variant ="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>{t('Email')}</Form.Label>
                    <Form.Control type="email" ref={emailRef} required/>
                </Form.Group>
               
                
                <Button disabled={loading} className='w-100 mt-2' type="submit"> {t('Password Reset')}</Button>
            </Form>
            <div className='w-100 text-center mt-2'>
            <Link to="/login">{t('Log In')}</Link>
            </div>
        </Card.Body>
        
      </Card>

      <div className='w-100 text-center mt-2'>
      {t('Need an Account')} <Link to="/signup">{t('Sign Up')}</Link>
        </div>
    </div>
  )
}

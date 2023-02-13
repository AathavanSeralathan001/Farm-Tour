import React,{useState, useEffect} from 'react'

import { useFormik } from 'formik';
import * as Yup from "yup"
import { db } from '../firebase';
import axios from 'axios';
import { useTranslation } from 'react-i18next'
import PreviewImage from './PreviewImage';
import { FloatingLabel } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';

const RegisterForm = () => {

  const { t } = useTranslation()
 const formik = useFormik({
  initialValues: {
    image: ""
  },
  validationSchema: Yup.object({
    image: Yup.mixed().required("Required!!")
    .test("FILE_SIZE", "Too Big!", (value)=>value && value.size < 1024 *1024)
    .test("FILE_TYPE","Invalid file type!", (value)=>value && ['image/png', 'image/jpeg'].includes(value.type))
  }),
  onSubmit:async()=>{
    console.log(formik.values)
    const { image } = formik.values
    const formData = new FormData()
    
    try {
      formData.append("file", image)
      formData.append("upload_preset", "q5tx7gvm")
      const res = await axios.post("https://api.cloudinary.com/v1_1/aathavan/image/upload", formData)
      db.collection("landRegistration").add({'imageUrl':res.data.url})
      console.log(res)
      console.log(res.data.url)

    } catch (error) {
      console.log(error)
    }
  }
   
}
 )
  const saveResponse = (e)=>{
    e.preventDefault();
    const elementsArray = [...e.target.elements];
    console.log(elementsArray);
    const formData = elementsArray.reduce((accumulator, currentValue)=>{
      if(currentValue.id){
        accumulator[currentValue.id] = currentValue.value;

      }
      return accumulator;
    }, {});
    db.collection("landRegistration").add(formData )
    console.log({formData})

  }







  // const saveResponse = (e)=>{
  //   e.preventDefault();
  //   const elementsArray = [...e.target.elements];
  //   console.log(elementsArray);
  //   const formData = elementsArray.reduce((accumulator, currentValue)=>{
  //     if(currentValue.id){
  //       accumulator[currentValue.id] = currentValue.value;

  //     }
  //     return accumulator;
  //   }, {});
  //   db.collection("landRegistration").add(formData )
  //   console.log({formData})

  // }


  



  return (
    <div className="container">

      <form method='post'>

      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>{t('Upload Field Image')}</Form.Label>
        <Form.Control type="file" name="image"  id="ImageUrl" onChange={(e)=> formik.setFieldValue("image", e.target.files[0])}  size="lg" />
      </Form.Group>
       {formik.errors.image && (
        <p style={{color:'red'}}>{formik.errors.image}</p>
       )}
       <Button variant="success" onClick={formik.handleSubmit} size="lg" className="justify-content-md-center">{t('Upload')}</Button>
           <br />

       </form>
       <br/>
        {formik.values.image && <PreviewImage file={formik.values.image}/>}
        <br />
      <form onSubmit={saveResponse}>

      <FloatingLabel
        controlId="floatingInput"
        label={t('Land Owner Name')}
        className="mb-3"
      >
        <Form.Control type="text" id='landOwnerName' required placeholder={t('Land Owner Name')} />
      </FloatingLabel>
      
      <FloatingLabel
        controlId="floatingInput"
        label={t('Phone')}
        className="mb-3"
      >
        <Form.Control type="tel" id='phone' required placeholder={t('Phone')} />
      </FloatingLabel>
        
      <FloatingLabel
        controlId="floatingInput"
        label={t('Location')}
        className="mb-3"
      >
        <Form.Control type="text" id='location' required placeholder={t('Location')} />
      </FloatingLabel>
       
      <FloatingLabel
        controlId="floatingInput"
        label={t('Land Number')}
        className="mb-3"
      >
        <Form.Control type="text" id='landNumber' required placeholder={t('Land Number')}/>
      </FloatingLabel>
       
      <FloatingLabel
        controlId="floatingInput"
        label={t('Land Description')}
        className="mb-3"
      >
        <Form.Control type="text" id='landDescription' required placeholder={t('Land Description')} />
      </FloatingLabel>
       
      <FloatingLabel
        controlId="floatingTextarea"
        label={t('Rules and Regulations')}
        className="mb-3"
      >
        <Form.Control as="textarea" id="rulesAndReg" required placeholder={t('Rules and Regulations')} />
      </FloatingLabel>

     
      <Button variant="primary" type='submit' size="lg">
             {t('Register Land')}
      </Button>
      
       
      </form>
    </div>
  )
}

export default RegisterForm


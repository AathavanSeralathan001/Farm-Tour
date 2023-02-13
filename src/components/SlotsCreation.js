import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { db } from '../firebase';
import './slotsCreation.css';
import { useTranslation } from 'react-i18next'

const SlotsCreation = () => {

  const { t } = useTranslation()
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
    db.collection("slotCreation").add(formData )
    console.log({formData})
     
  }

  return (
    <div>

{/* <div class="main-container">
  <div class="heading">
    <h1 class="heading__title">SLOTS</h1>
    <p class="heading__credits">Create slots !!</p>
  </div>
  <div class="cards">
    <div class="card card-4">
      <div class="card__icon"><i class="fa fa-tree"></i></div>
      <p class="card__exit"><i class="fa fa-times"></i></p>
      
      <form onSubmit={saveResponse}>
      
      <div class="form-group row">
        <label  class="col-sm-2 col-form-label" label="Date" ><strong>Date</strong></label>
        <div class="col-sm-10" style={{paddingLeft:"30px",paddingTop:"4px"}}>
          <input style={{width:"300px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px"}} type="date"  id='Date' placeholder="Date" required  class="form-control-plaintext" label="Date" />
        </div>
      </div>

      <div class="form-group row">
        <label  class="col-sm-2 col-form-label" label="Timing"> <strong>Timing</strong></label>
        <div class="col-sm-10" style={{paddingLeft:"30px",paddingTop:"8px"}}>
          <input style={{width:"300px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px"}} type="time" id='Time' placeholder="Timing" required class="form-control-plaintext" label="Date" />
        </div>
      </div>
      <br />

      <Button variant="primary" type='submit' size="lg" className=' w-50 mt-4 mx-auto'>
         Create Slots
      </Button>

      
      </form>
      
    </div>
    
  </div>
</div> */}






      <h1>{t('SLOTS CREATION')}</h1>

      <Card>
        <Card.Body>
    <form onSubmit={saveResponse}>
      <FloatingLabel
        controlId="floatingInput"
        label={t('Date')}
        className="mb-3"
      >
        <Form.Control type="date" id='Date' placeholder={t('Date')} required/>
      </FloatingLabel>
      <FloatingLabel controlId="Timing" label={t('Timing')}>
        <Form.Control type="time" id='Time' placeholder={t('Timing')} required />
      </FloatingLabel>
      
      <Button variant="primary" type='submit' size="lg" className=' w-50 mt-4 mx-auto'>
      {t('Create Slot')}
      </Button>
      </form>
      </Card.Body>
      </Card>
    </div>
  )
}

export default SlotsCreation

import React, { useState } from 'react'
import Aboutus from '../../shared/components/Aboutus/Aboutus'
import Helmetcomponent from '../Helmetcomponent/Helmetcomponent'
import { useNavigate } from 'react-router-dom';

function Aboutuspage() {

  const navigate = useNavigate();
 
  return (
    <div>

      <Helmetcomponent title={'About us - International Journal of Blockchain and FinTech Applications'} />
      <Aboutus navigate={navigate}/>

    </div>
  )
}

export default Aboutuspage
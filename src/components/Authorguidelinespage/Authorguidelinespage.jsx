import React, { useState } from 'react'
import Authorguidelines from '../../shared/components/Authorguidelines/Authorguidelines'
import Helmetcomponent from '../Helmetcomponent/Helmetcomponent'

function Authorguidelinespage() {



  return (
    <div>
      <Helmetcomponent title={'Author Guidelines - International Journal of Blockchain and FinTech Applications'} />
      <Authorguidelines/>
    </div>
  )
}

export default Authorguidelinespage
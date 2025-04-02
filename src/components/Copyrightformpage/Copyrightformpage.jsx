import React, { useState } from 'react'
import Copyrightform from '../../shared/components/Copyrightform/Copyrightform'
import Helmetcomponent from '../Helmetcomponent/Helmetcomponent'

function Copyrightformpage() {

   
  return (
    <div>
      <Helmetcomponent title={'Copyright Form - International Journal of Blockchain and FinTech Applications'} />
      <Copyrightform />
      </div>
  )
}

export default Copyrightformpage
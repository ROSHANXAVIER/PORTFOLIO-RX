import React from 'react'
import '../App.css'
import Me from './images/me.png'
import Linked from './images/op.png'
import Git from './images/icone-github-rouge.png'
import Mail from './images/gmail.png'
import Tele from './images/tele.png'
function intro() {
  return (

      
    <div className='intro'>
        <div className='i-left'>
            <div className='i-leftwrapper'>
                <h2 className='i-intro'>My name is </h2>
                <h1 className='i-name'>Roshan Xavier</h1>
                <div className='i-title'>
                  <div>  <div className='i-title-wrapper'>
                    <div className='i-title-item'>FREELANCER</div>
                    <div className='i-title-item'>PYTHON PROGRAMMER</div>
                    <div className='i-title-item'>MERNSTACK DEVELOPER</div>
                    <div className='i-title-item'>BTECH GRADUATE</div>
                    <div className='i-title-item'>UI/UX DESIGNER</div>
                  </div>
                </div>
            </div>
            <div className='description'>Mernstack Developer , worked as intern at crowdoveflow . Completed BTECH degree in IT from Rajagairi School Of Engineering And Technology. I am an enthusiastic learner and enjoys working as a team .Know more about me from the below given links.</div>
            <div>
                <a href="c.htm"><img src={Linked} alt='' className='links' onClick={()=>{window.open("https://www.linkedin.com/in/roshan-xavier-1ab097214/")}}/></a>
                <a href="g.htm"><img src={Git} alt='' className='links' onClick={()=>{window.open("https://github.com/ROSHANXAVIER")}}/></a>
                <a href="m.htm"><img src={Mail} alt='' className='links' onClick={()=>{window.open("mailto:rxgody@gmail.com")}}/></a>
                <a href="tel:9447567495"><img src={Tele} alt='' className='links'/></a>
            </div>
        </div>
        
    </div> 
        <div className='i-right'> 
            <div className='i-bg'></div>
            <img src={Me} alt=" " className='i-img'/>
        </div> 
    </div>
  )
}

export default intro

import './Header.css';
import face from '../static/Logo/face.png';
import insta from '../static/Logo/insta.png';
import mail from '../static/Logo/mail.png';
import React from 'react';


function HeaderInit(){
  return(
    <div class="containerhd row">
      <div id="hd" >
        <i>Conheça a melhor empresa de (Função da empresa)! </i>
      </div>
      <div id="hd-2" class="col-md-6">
        <div>
          <i>Siga-nos em nossas redes sociais!</i>
        </div>
        <div class="elements-hd" href="#">
          <img src={face} class="icon" alt='Facebook'/>
        </div>  
        <div class="elements-hd">
          <a href="https://www.instagram.com/gbraganholo_/?hl=en"> 
            <img src={insta} class="icon" alt='Instagram' /> 
          </a>
        </div>
        <div class="elements-hd"href="#">
          <img src={mail} class="icon" alt='Email'/>
        </div>
      </div>
      <div id="hd-last" >
        <ul>
          <li>Aqui</li>
        </ul>
      </div> 
    </div>
    
  )
    
}

export default HeaderInit;

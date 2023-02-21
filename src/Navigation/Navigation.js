
import {HiHome} from 'react-icons/hi';
import {TbCertificate} from 'react-icons/tb'
import {BsFillTelephoneFill} from 'react-icons/bs'

const Navigation=({goToTop,scrollToBottom})=>{
 
 

    return(
          <nav class="fixed backdrop-blur-3xl bb border-red-600 shadow-md z-50 w-full px-5 py-2 flex justify-between items-center ">
    
    <img src="/logo.png" alt="Logo" class="h-14 w-14" />
  
    <div class="flex items-center">
    <p class="pa2 text-white hover-text-Home hover-bg-green rounded mr-6 b f3 pointer" title='Home' onClick={goToTop}><HiHome /></p>
      <p class="pa2 text-white hover-bg-orange rounded mr-6 f3 pointer" title='Certifications'>
      <a href='./certifications.pdf'><TbCertificate /></a>
      </p>
      <p class="pa2 text-white hover-bg-blue rounded f3 mr-6 b pointer" title='Contact' onClick={scrollToBottom}><BsFillTelephoneFill/> </p>
    </div>
  </nav>

      

    );
}
export default Navigation;
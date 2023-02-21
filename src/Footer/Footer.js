import { SocialIcon } from 'react-social-icons';

const Footer=()=>{
    return(
        <footer class="text-red-600 py-4 bt border-red-600">
        <div class="container mx-auto px-4">
          <div class="tc pa2">
            <p class="text-sm font-serif f4 b">
              © Thanvir Ibrahim
            </p>
            <div className='mx-auto mt-4 py-4 f4 b'>
                <label className='underline '>Contact:</label>
            </div>
            
            <nav class="tc pa2">
                
              <SocialIcon className='pa2 ma2' url="https://github.com/ThanvirXo" bgColor='white' />
              <SocialIcon className="pa2 ma2" url="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=thanvir200@gmail.com&tf=1" bgColor='lightblue'/>
              <SocialIcon className='pa2 ma2' url="https://www.reddit.com/user/Thanvir_ibrahim" bgColor='pink' />
              <SocialIcon className='pa2 ma2' url="https://www.linkedin.com/in/thanvir-ibrahim-b12827206/" />
            </nav>
            <div className='pa2 b underline text-blue-600 f4 i'>
              <p>"Believe in yourself"</p>
            </div>
          </div>
        </div>
      </footer>
    );
}
export default Footer;
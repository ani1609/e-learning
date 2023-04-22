import React from 'react';
import '../styles/Header.css';
import Comma from '../icons/comma.png';
import Rating from '../icons/5star.jpg';



function Header() {
  return (
    <div>
        <header>
            {/* <div className='bg'>
              <img src={Girl}></img>
            </div> */}

            <div className='heading'>
              <h1>Meet the Professional Mentor</h1>
            </div>

            <div className='texts'>

              <div className='left_text'>

                  <img src={Comma}></img>
                  <p>Now you can learn anywhere, anytime, even if there is no internet access!</p>
                  <h1>10K+</h1>
                  <p>Mentors</p>

              </div>

              <div className='right_text'>

                <img src={Rating}></img>
                <p>"This course was comprehensive covered everything I needed to know about animation"</p>

                <div className='reviewer'>

                  <div className='name_designation_container'>
                    <h4>Pristia Candra</h4>
                    <p>UI/UX Designer</p>
                  </div>
                  
                  <div className='reviewer_image'>

                  </div>
                </div>
                
              </div>


            </div>

            <div className='buttons'>

            </div>
        </header>
    </div>
  );
}

export default Header;

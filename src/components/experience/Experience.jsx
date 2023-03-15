import React from 'react'
import './experience.css'
import { GiNorthStarShuriken } from 'react-icons/gi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <GiNorthStarShuriken className='experience__details-icons' />
              <div>
                <h4>HTML, CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <GiNorthStarShuriken className='experience__details-icons'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <GiNorthStarShuriken className='experience__details-icons'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <GiNorthStarShuriken className='experience__details-icons' />
              <div>
              <h4>TailWind</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <GiNorthStarShuriken className='experience__details-icons' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>            
            </article>

            <article className='experience__details'>
              <GiNorthStarShuriken className='experience__details-icons'/>
              <div>
                <h4>Next.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>

          {/* End of FrontEnd */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
            <div className="experience__content">

                <article className='experience__details'>
                  <GiNorthStarShuriken className='experience__details-icons' />
                  <div>
                    <h4>Python</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <GiNorthStarShuriken className='experience__details-icons'/>
                  <div>
                    <h4>Django</h4>
                   <small className='text-light'>Intermediate</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <GiNorthStarShuriken className='experience__details-icons'/>
                  <div> 
                    <h4>MySql</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <GiNorthStarShuriken className='experience__details-icons' />
                  <div>
                    <h4>PostGres</h4>
                  
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <GiNorthStarShuriken className='experience__details-icons'/>
                  <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <GiNorthStarShuriken className='experience__details-icons' />
                  <div>
                    <h4>Next.js</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>

              </div>

        </div>


      </div>





    </section>
  )
}

export default Experience
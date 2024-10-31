import React from 'react'
import { projects } from '../contants';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';

const Projects = () => {
  return (
    <section className= 'max-container'>
      <h1 className='head-text'>
        Mes<span className='blue-gradient_text font-semibold drop-shadow'>Projets</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus dapibus ligula, vitae pulvinar orci aliquet vel.
          Nam sit amet ornare felis. Cras dignissim, neque at sagittis volutpat, augue est condimentum lacus, in volutpat quam augue non leo. 
          Vivamus consectetur purus vitae diam tempus vehicula. Curabitur eu convallis nulla, nec consequat felis. Nullam non sapien velit.
            Nullam faucibus aliquet odio non tincidunt.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus dapibus ligula, vitae pulvinar orci aliquet vel.
          Nam sit amet ornare felis. Cras dignissim, neque at sagittis volutpat, augue est condimentum lacus, in volutpat quam augue non leo. 
          Vivamus consectetur purus vitae diam tempus vehicula. Curabitur eu convallis nulla, nec consequat felis. Nullam non sapien velit.
            Nullam faucibus aliquet odio non tincidunt.
          </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src= {project.iconUrl} alt="Project Icon" className='w-1/2 h-1/2 object-contain'/>
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className=' mt-2 text-slate-500'>
                {project.description}
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                  >
                    Live Link
                  </Link>
                  <img src={arrow} alt={arrow} className='w-4 h-4 object-contain'/>
                </div>
              </p>
            </div>
          </div> 
        ))}
      </div>

      <hr className='border-slate-200' />
      <CTA/>

    </section>
  )
}

export default Projects
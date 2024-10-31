import React from 'react'

import {skills} from '../contants';

const About = () => {
  return (
    <section className= 'max-container'>
        <h1 className='head-text'>
          Bonjour, je suis <span className='blue-gradient_text font-semibold drop-shadow'>Richard PETIT</span>
        </h1>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Développeur Web à Bordeaux, ayant appris en faisant du PHP Symfony, et travaillant actuellement en C# .Net depuis plus de 2 ans.
            </p>
        </div>
        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>Mes compétences</h3>
          <div className='mt-16 flex flex-wrap gap-12'>
            {skills.map((skill) => (
              <div className='block-container w-20 h-20'> 
              <div className='btn-back rounded-xl'></div>
                <div className='btn-front rounded-xl flex justify-center items-center'> 
                  <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />

                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='py-16'>
            <h3 className='subhead-text'>Expériences Professionnelles</h3>
            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>Durant mes formations pour ma reconversion et ensuite avec mon expérience professionelles, j'ai travaillé de sorte à améliorer mes compétences et 
              ai pu faire équipe avec des personnes inspirantes qui m'ont permises de m'améliorer chaque jour. <br />
              En voici un récapitulatif:
            </p>
            </div>
            <div className='mt-12 flex'>
              
            </div>
        </div>
    </section>

  )
}

export default About
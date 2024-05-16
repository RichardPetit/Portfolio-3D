import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons' 

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalim-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)


const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Portfolio de <span className='font-semibold'>Richard</span>
            <br/>
            Développeur Web
            </h1>
    ), 
    2: (
        // <InfoBox 
        //     text="Petit dév deviendra grand"
        //     link = "/about"
        //     btnText="Apprenez en plus sur moi"
        // />
        <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Aucune idée du texte à mettre ici <br /> pour donner envie de cliquer
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
            En savoir plus
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    ),
    3: (
        // <InfoBox 
        //     text="Quelques petits projet à montrer ?"
        //     link = "/projects"
        //     btnText="Visitez mon portfolio"
        // />
        <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
        Mon expérience et mes envies mon fait réaliser ces quelques projets
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
            Visitez mon portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>

    ),
    4: (
        // <InfoBox 
        //     text="Vous recherchez un dév?"
        //     link = "/contact"
        //     btnText="Discutons en"
        // />
        <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        Vous recherchez un dév? Discutons en!
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Me contacter
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    ),
}

const HomeInfo = ({ currentStage}) => {
  return renderContent [currentStage] || null;
}

export default HomeInfo
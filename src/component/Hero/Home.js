import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container dflex flexd'>
          <div className='left'>
            <h3>Bem-Vindo ao meu Portfólio</h3>
            <h1>
              Sou <span>André Chaves</span>
            </h1>
            <h2>
              e 
              <span>
                <Typewriter words={[" FrontEnd Developer.", " Web App Developer"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>Especialista em desenvolvimento de aplicações Web FrontEnd com React.js, utilizo animações
              em 2D e efeitos em meus projetos a maior parte em código puro. Tenho conhecimentos avançados em 
              CSS3 e Sass, que sempre uso em meus trabalhos a anos. Bem como o Javascript para criação de 
              componentes e para consumo de APIs externas e internas.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <div className="button">
                  <h4>BEST SKILL ON</h4>
                  <button className='btn_shadow'>
                    <img src={skill1} alt='' />
                  </button>
                  <button className='btn_shadow'>
                    <img src={skill2} alt='' />
                  </button>
                  <button className='btn_shadow'>
                    <img src={skill3} alt='' />
                  </button>
                  <button className='btn_shadow'>
                    <img src={skill1} alt='' />
                  </button>
                  <button className='btn_shadow'>
                    <img src={skill2} alt='' />
                  </button>
                  <button className='btn_shadow'>
                    <img src={skill3} alt='' />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex1 right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

import React from 'react';
import cube from '../../assets/cube.svg';
import develop from '../../assets/develop.svg';
import edit from '../../assets/edit.svg';
import thumb from '../../assets/thumb.svg';
import './main-content.css';

const MainContent = () => {
  return (
    <section className='main-content'>
      <div className='top'>
        <h2>Catering Services in New York</h2>
        <p>We specialize in corporate and private events</p>
      </div>
      <div className='layout'>
        <div className='portfolio'>My Portfolio</div>
        <div className='concept'>
          <div>
            <img src={cube} alt="cube"/>
            <h4>Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quia!</p>
          </div>
          <div>
            <img src={develop} alt="cube"/>
            <h4>Develop</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quia!</p>
          </div>
          <div>
            <img src={edit} alt="cube"/>
            <h4>Write</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quia!</p>
          </div>
          <div>
            <img src={thumb} alt="cube"/>
            <h4>Promote</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quia!</p>
          </div>
        </div>
        <div className='services'>
          <h4>Services</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, saepe? Est facilis rem accusamus nulla non! Aperiam, dolor magnam. Illo veniam nisi fuga natus magnam, nam architecto tempore error exercitationem eius dolore repudiandae cum excepturi minima nostrum commodi aspernatur laudantium corporis consectetur ipsa pariatur sapiente odio? Quam inventore vel soluta autem est vero quia ullam quibusdam dicta excepturi voluptates velit sapiente, ipsa ab iste voluptatum non fugiat ratione laborum nemo dolor fuga atque reprehenderit! Provident ipsam tempore..</p>
          <div className='services-button'>
            <button>Download CV</button>
            <button>Check My Portfolio</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainContent
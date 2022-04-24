import React from 'react';
import './jumbotron.css'

const Jumbotron = () => {
  return (
    <section className="jumbotron">
      <div className="jumbotron-content">
        <h1>We use only the finest and freshest ingredients</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci sit voluptatibus nam vero accusantium mollitia, commodi sunt officia eaque quod sapiente reprehenderit. Doloribus praesentium repellendus nesciunt animi? Omnis, nam quidem.</p>
        <button>Request a Guide</button>
      </div>
      <div className='wave'></div>
    </section>
  )
}

export default Jumbotron
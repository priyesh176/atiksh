import React from 'react';
import './App.css';
import Countdown from 'react-countdown';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  const birthdayDate = new Date('2024-12-25T00:00:00');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Atiksh's 1st Birthday!</h1>
        <p>Join us in celebrating Atiksh's special day!</p>
        <Countdown date={birthdayDate} />
      </header>
      <section id="gallery">
        <h2>Gallery</h2>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          <div>
            <img src={`${process.env.PUBLIC_URL}/photo1.jpg`} alt="Photo 1" />
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/photo2.jpg`} alt="Photo 2" />
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/photo3.jpg`} alt="Photo 3" />
          </div>
        </Carousel>
      </section>
      <section id="location">
        <h2>Location</h2>
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0864873153!2d-122.4194154846818!3d37.7749292797591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2f2f2f2f%3A0x2f2f2f2f2f2f2f2f!2s123%20Birthday%20Lane%2C%20Party%20City%2C%20PC%2012345!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <section id="rsvp">
        <h2>RSVP</h2>
        <form id="rsvp-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your RSVP!'); }}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <button type="submit">Submit</button>
        </form>
      </section>
      <footer>
        <p>&copy; 2024 Atiksh's 1st Birthday</p>
      </footer>
    </div>
  );
}

export default App;
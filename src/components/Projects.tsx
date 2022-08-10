import './Projects.css';

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <p>
        Here is a selection of projects I have worked on.
        Click the name of the project to view the source code and documentation on GitHub.
        <br/><br/>
        More projects will be added when they are ready to be published.
      </p>
      <div className='project'>
        <a href='https://github.com/rikurauhala/yesan'>yesan</a>
        <span className='year'>2022</span>
        <p>
          Yesan (예산, Korean for <i>budget</i>) is a personal finance application written in Python.
          This desktop application allows the user to take control of their finances and see where
          their money is going. Yesan encourages the user to keep track of their spending by writing
          down every transaction.
          <br/><br/>        
          The application has a graphical user interface created with the tkinter library.
          User data is stored in an SQLite3 database.
          <br/><br/>
          This project is well documented and tested.
        </p>
        <p className='tags'>
          <span className='tag python'>● Python</span>
          <span className='tag sql'>● SQL</span>
          <span className='tag shell'>● Shell</span>
        </p>
      </div>
      <div className='project'>
        <span>
          <a href='https://github.com/rikurauhala/film-review-app'>film-review-app</a>
        </span>
        <span className='year'>2021</span>
        <p>
          A web application for reading and writing film reviews made using the Flask web framework.
          Data is stored in a PostgreSQL database.
          A live demonstration is hosted online on Heroku.
          <br/><br/>
          This project is no longer being actively maintained so it may not function as intended.
        </p>
        <p className='tags'>
          <span className='tag python'>● Python</span>
          <span className='tag sql'>● SQL</span>
          <span className='tag html'>● HTML</span>
          <span className='tag css'>● CSS</span>
        </p>
      </div>
      <div className='project'>
        <a href='https://github.com/rikurauhala/tj-bot'>tj-bot</a>
        <span className='year'>2021</span>
        <p>A Discord bot created with discord.py to remind your friend serving in the Finnish
          military how many mornings they have left.</p>
        <p className='tags'>
          <span className='tag python'>● Python</span>
        </p>
      </div>
      <div className='project'>
        <a href='https://github.com/rikurauhala/rikurauhala.github.io'>rauhala.io</a>
        <span className='year'>2022</span>
        <p>
          My personal home page on the internet. You are looking at it!
          <br/><br/>
          I'm looking to eventually updating this project to a more modern JavaScript-based version.
        </p>
        <p className='tags'>
          <span className='tag html'>● HTML</span>
          <span className='tag css'>● CSS</span>
          <span className='tag javascript'>● JavaScript</span>
        </p>
      </div>
      <div className='project'>
        <a href='https://github.com/rikurauhala/pakettiseuranta'>pakettiseuranta</a>
        <span className='year'>2020</span>
        <p>A simple package tracking application made with Java and SQLite.</p>
        <p className='tags'>
          <span className='tag java'>● Java</span>
          <span className='tag sql'>● SQL</span>
        </p>
      </div>
    </div>
  );
};

export default Projects;

import logo from './logo.svg';
import circle from './img/circle.svg';
import optionsleft from './img/options-left.svg';
import optionsright from './img/option-right.svg';
import logo1 from './img/s_1.jpg';
import logo2 from './img/s_2.jpg';
import logo3 from './img/s_3.jpg';
import logo4 from './img/s_4.jpg';
import logo5 from './img/s_5.jpg';
import logo6 from './img/s_6.jpg';
import './App.css';

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      setPosition(position + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [position]);

  const moveLeft = () => setPosition(position - 10);
  const moveRight = () => setPosition(position + 10);
  return (
    <div className="App">
      <header className="Container-Head">

        <div className='header-info'>
          <div className='header-title'>Big Comeback</div> <br />
          <div className='description-header'>Nullam porta, eros id aliquam pulvinar, urna ex mattis eros, quis vestibulum urna turpis et risus. Mauris porttitor risus faucibus, auctor arcu a,tincidunt nibh...</div>
          <br />
          <div className='header-buttons'>
            <button className='button-watch'>WATCH NOW</button>
            <button className='button-playlist'>+ PLAYLIST</button>
          </div>
        </div>
        <div className='header-video'>
          <img src={circle} alt="Movie poster" className="card-img" />
        </div>
      </header>
      <div className='container-body'>
        <div className='container-movies-categories-left'>
          <div>
            <div className=''><a href="">Today</a> / <a href="">This week</a>/ <a href="">Last 30 days</a></div>
            <br />
            <div className='movie-cards'>
              <div className='movie-card'>
                <img src={logo1} alt="Movie poster" className="card-img" />
                <div>
                  <p className='card-categories'>Comedy, 2018</p>
                  <h6 className='card-title'>Mignight Sun</h6>
                </div>
              </div>
              <div className='movie-card'>
                <img src={logo2} alt="Movie poster" className="card-img" />
                <div>
                  <p className='card-categories'>Acction, Comedy, 2018</p>
                  <h6 className='card-title'>Chapter & Verse</h6>
                </div>
              </div>
              <div className='movie-card'>
                <img src={logo3} alt="Movie poster" className="card-img" />
                <div>
                  <p className='card-categories'>Comedy, 2018</p>
                  <h6 className='card-title'>Bad Genius</h6>
                </div>
              </div>
              <div className='movie-card'>
                <img src={logo4} alt="Movie poster" className="card-img" />
                <div>
                  <p className='card-categories'>Comedy, Thiller 2018</p>
                  <h6 className='card-title'>My Generation</h6>
                </div>
              </div>
              <div className='movie-card'>
                <img src={logo5} alt="Movie poster" className="card-img" />
                <div>
                  <p className='card-categories'>Comedy, War 2018</p>
                  <h6 className='card-title'>Have a Nice Day</h6>
                </div>
              </div>
              <div className='movie-card'>
                <img src={logo6} alt="Movie poster" className="card-img" />
                <div>
                  <p className='card-categories'>Comedy, 2018</p>
                  <h6 className='card-title'>Gnome Alone</h6>
                </div>
              </div>
            </div></div>
          <div className='drive-categories'>
            <div className='categories-title'>Action & Drama Movies</div>
            <div className='categories-buttons'>
              <button className='button-left' onClick={moveLeft}> <img src={optionsleft} alt="Movie poster" className="card-img" /></button>
              <button className='button-right' onClick={moveRight}> <img src={optionsright} alt="Movie poster" className="card-img" /></button>
            </div>
            <div><a href="#">VIEW ALL</a></div>
          </div>
        </div>
        <div className='container-movies-categories-left'>
          <div className='drive-categories'>
            <div className='categories-title'>Action & Drama Movies</div>
            <div className=''>
              <button className='button-left' onClick={moveLeft}> <img src={optionsleft} alt="Movie poster" className="card-img" /></button>
              <button className='button-right' onClick={moveRight}> <img src={optionsright} alt="Movie poster" className="card-img" /></button>
            </div>
            <div><a href="#">VIEW ALL</a></div>
          </div>
          <div>
            <div className=''><a href="">Today</a> / <a href="">This week</a>/ <a href="">Last 30 days</a></div>
            <br />
            <div className='movie-cards'>
              <div className='movie-card'>
                <img src={logo1} alt="Movie poster" className="card-img" />
                <div>
                  <p className='card-categories'>Comedy, 2018</p>
                  <h6 className='card-title'>Mignight Sun</h6>
                </div>
              </div>
              <div className='movie-card'>
                <img src={logo2} alt="Movie poster" className="card-img" />
                <div>
                  <p className='card-categories'>Acction, Comedy, 2018</p>
                  <h6 className='card-title'>Chapter & Verse</h6>
                </div>
              </div>
              <div className='movie-card'>
                <img src={logo3} alt="Movie poster" className="card-img" />
                <div>
                  <p className='card-categories'>Comedy, 2018</p>
                  <h6 className='card-title'>Bad Genius</h6>
                </div>
              </div>
              <div className='movie-card'>
                <img src={logo4} alt="Movie poster" className="card-img" />
                <div>
                  <p className='card-categories'>Comedy, Thiller 2018</p>
                  <h6 className='card-title'>My Generation</h6>
                </div>
              </div>
              <div className='movie-card'>
                <img src={logo5} alt="Movie poster" className="card-img" />
                <div>
                  <p className='card-categories'>Comedy, War 2018</p>
                  <h6 className='card-title'>Have a Nice Day</h6>
                </div>
              </div>
              <div className='movie-card'>
                <img src={logo6} alt="Movie poster" className="card-img" />
                <div>
                  <p className='card-categories'>Comedy, 2018</p>
                  <h6 className='card-title'>Gnome Alone</h6>
                </div>
              </div>
            </div></div>

        </div>

        <div></div>
      </div></div>

  );
}

export default App;

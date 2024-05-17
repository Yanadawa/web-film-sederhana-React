
import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingPage.css"
import Intro from './components/Intro';
import Trending from './components/Trending'
import SuperHero from './components/Superhero'

function App() {
  return (
    <div>
      {/* Intro Start */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* Intro End */}

      {/* Trenfing Start */}
      <div className="trending">
        <Trending />
      </div>
      {/* Trending End */}

      {/* Superhero Start */}
      <div className="superhero">
        <SuperHero />
      </div>
      {/* Superhero End */}

    </div>
  );
}

export default App;

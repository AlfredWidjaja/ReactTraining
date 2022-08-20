import logo from './logo.svg';
import './App.css';
import Profile from './component/Profile.js'

// React Component
function App() {
  var profiles = [
    {
      id: 1,
      name: "Alfred Widjaja",
      hobby: "Playing Games"
    },
    {
      id: 2,
      name:"TESTING",
      hobby:"Testing"
    }
  ]
  // JSX => Syntactical Sugar utk HTML
  return (
    <div className="App">
      <h1>Belajar React JS</h1>
      <hr/>
      {
        profiles.map(profile => {
          const {id, name, hobby} = profile
          return (
            <Profile key={id} name={name} hobby={hobby}></Profile>  
          )
        })
      }
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

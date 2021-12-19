import './App.css';
import Parse from 'parse/dist/parse.min.js';
import UserLogin from './Component/UserLogIn.js';
import { PersonComponent } from './Component/PersonComponent';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'ONX2K2pTF2JmV0zT3ZRUYEgKAcWbRf487znesmY2';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'kQSzJDmSWBI5SCioJQa4w5o3TOiQrULs4NN4GBV6';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserLogin/>
        <PersonComponent />
      </header>
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import Contactusbtn from './buttons/contactusbtn'
import Download from './buttons/Download'
import Help from './buttons/Help'
import Home from './buttons/Home'
import Settings from './buttons/Settings'
import JoinUs from './buttons/JoinUs'
import Login from './buttons/login'
import Search from './buttons/Search'
import Universal from './buttons/Universal';

function App() {
  return (
    <div className="App">
      <div>
      <h1>Mobile Operating System</h1>
         <ul>
           <li>Android</li>
           <li>Blackberry</li>
           <li>IOS</li>
           <li>Windows Phone</li>
         </ul>
         </div>
         <div>
      <h1>Mobile Manufacturers</h1>
           <ul id="styled_ul">
             <li>Samsung</li>
             <li>HTC</li>
             <li>Micromax</li>
             <li>Apple</li>
           </ul>
         </div>
      <h1>8 separate functional components for Buttons</h1>
      <div className="button_div">
        <JoinUs/>
        <Settings/>
        <Login/>
        <Contactusbtn/>
        <Search/>
        <Help/>
        <Home/>
        <Download/>
      </div>
      <div></div>
      <h1>Single functional component for Buttons</h1>
      <Universal Join="JOIN US" Sett="SETTINGS" Login="LOGIN" Cont="CONTACT US" Sear="SEARCH" Hel="HELP" Hom="HOME" Down="DOWNLOAD" />
    </div>
  );
}

export default App;

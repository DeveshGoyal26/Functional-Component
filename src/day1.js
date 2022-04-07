import logo from './logo.svg';
import './day1.css';
import Contactusbtn from './day1/contactusbtn'
import Download from './day1/Download'
import Help from './day1/Help'
import Home from './day1/Home'
import Settings from './day1/Settings'
import JoinUs from './day1/JoinUs'
import Login from './day1/login'
import Search from './day1/Search'
import Universal from './day1/Universal';

function Data() {
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

export default Data;

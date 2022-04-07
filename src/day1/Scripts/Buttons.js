import '../Styles/day1.css';
import Contactusbtn from '../Components/contactusbtn'
import Download from '../Components/Download'
import Help from '../Components/Help'
import Home from '../Components/Home'
import Settings from '../Components/Settings'
import JoinUs from '../Components/JoinUs'
import Login from '../Components/login'
import Search from '../Components/Search'
import Universal from '../Components/Universal';

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

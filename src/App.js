import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import "./Component/Profile/ProfilePhoto.css"
import "./Component/Profile/FullName.css"

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
     
    </div>
  );
}
export default App;

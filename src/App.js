import logo from './logo.svg';
import './App.css';
import CyberSquare from './CyberSuqre';
import Search from './Search';

const content = "Cybersquare professional";

const obj ={"title":"Cybersquare", "name":"monish"};
const list1=["monish", "athira", "lekha"]
function App() {

function handleOnChange(evt){
  console.log(evt.target.value);
}


  return(
    <div>
      content
      {content
      /* This is a comment */
      }
    <ul>
      {
      list1.map(function(item, index){
        return <CyberSquare data={item}/>
      })
      }
      </ul>
      <br/> <br/> 
      {obj.name}
      <br/><br/>
     <label>Name: </label> <input type="text" onChange={handleOnChange}/>
<Search/>
    </div>
  );
}

export default App;

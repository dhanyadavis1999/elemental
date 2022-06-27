//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div>
      <h2>please Answer the following questions</h2>
      <div>
        <label>how old are you?</label>
        <input type="number" />
      </div>
      <div><label>what is your sex?</label>
        <input type="radio" value="female" />
        <input type="radio" value="male" /></div>
      <div><label>what is the highest level of education you have completed</label>
        <select name="CHOOSE from this list" >
          <option value="b tech">b tech</option>
          <option value="mca">mca</option>
          <option value="bca">bca</option>
          <option value="ba">ba</option>
        </select>
      </div>
      <div><label>enter your comments here</label>
        <input type="text box" />
        <input type="button" value="submit" /></div>
    </div>


  );
}

export default App;

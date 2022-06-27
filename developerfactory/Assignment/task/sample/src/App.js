import one from "./images/1.webp";
import two from "./images/2.webp";
import three from "./images/3.webp";
import four from "./images/4.webp";
import five from "./images/5.webp";
import logo from "./images/logonew.svg";
import nbg from "./images/nbg.webp";
import "./App.css";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const nextpage = (a) => { navigate("/SignUp"); };
  return (

    <>
      <div className="home_firstrow">
        <div className="home_firstrow_col1">
          <img src={logo} />
          <div className="home_firstrow_col1_col1">
            <label className="home_firstrow_col1_col1_label1">
              ChristianMatrimony.com
            </label>
            <label>From Matrimony.com Group</label>
          </div>
        </div>
        <div className="home_firstrow_col2">
          <label>Already a member?</label>
          <div>
            <button onClick={(a) => { nextpage(a) }}>Log In</button>
          </div>
        </div>
      </div>
      <div className="home_secondary" style={{backgroundImage:'url(${nbg})'}}>
        <div className="home_secondary_inner ">
          <label>NO.1 and official matrimony service exclusively for christians </label>
          <label>Meet your christian soulmate here!</label></div>
        <div className="home_secondary_inner1">
          <div ><label>Matrimony profile</label>
            <select name="select" >
              <option value="Self">self</option>
              <option value="Relative">Relative</option>
              <option value="Friend">Friend</option>
            </select>
          </div>
          <div>
            <label>Name</label>
            <input type="text" value="Name" />
          </div>
          <div>
            <label>mobile number</label>
            <input type="number" value="number" />
          </div>
          <div>
            <button>register free</button>
          </div>
        </div>
      
      <div className="home_four">
<div>
  <label className="home_four">By clicking on register free you agree to Terms and conditions and privacy policy</label>
</div>
</div>
      </div>
      <div className="home_thirdrow">
        <ul>
          <li>
            <div className="home_thirdrow_imgdiv"><img src={one} /></div>
            <label>
              10+ years of service in helping Christians cherish the meaning of
              Happy marriage
            </label>
          </li>
          <li>
            <div className="home_thirdrow_imgdiv"><img src={two} /></div>
            <label>
              2 Lakh+ people have found their life partner using our services
            </label>
          </li>
          <li>
            <div className="home_thirdrow_imgdiv"><img src={three} /></div>
            <label>
              2020's winner of 'India's Growth Champions Award' by The Economic
              Times
            </label>
          </li>
          <li>
            <div className="home_thirdrow_imgdiv"><img src={four} /></div>
            <label>
              1 Lakh+ genuine profiles with 100% verified phone numbers
            </label>
          </li>
          <li>
            <div className="home_thirdrow_imgdiv"><img src={five} /></div>
            <label>130+ branches across India to serve you better</label>
          </li>
        </ul>
      </div>
    </>
  );
};
export default App;
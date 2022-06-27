import './Profile.css';
function profile() {
    return (
        <div>
            <div>
            <div><ul>
  <li><a href="default.asp"> My Home</a></li>
  <li><a href="news.asp">Search</a></li>
  <li><a href="contact.asp">Matches</a></li>
  <li><a href="about.asp">Mail box</a></li>
  <li><a href="profile.js">Upgrade Now</a></li>
</ul></div>
<div><input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." />
    </div></div>
            <div>
                <h1>writter</h1>
                <table>
  <tr>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td>26 years,5'5''</td>
    <td>BHMS</td>
  </tr>
  <tr>
    <td>Hindhu/brahmin</td>
    <td>0-1 lakhs</td>
  </tr>
  <tr>
    <td>Bhumihar</td>
  </tr>
  <tr>
    <td>Hindhi-up/uk</td>
    <td>Never married</td>
  </tr>
  <tr>
    <td colspan="2">Sum: $180</td>
  </tr>
</table>
</div>
                    <input type="button" value="edit profile" />
                    </div>

        
    );
}
export default profile;
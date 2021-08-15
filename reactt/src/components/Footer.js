import {useState} from 'react';
function Footer(){
  const [email ,setEmail] = useState('');

  const handleChange = e =>{
    setEmail(e.target.value)
  }
  return (
    <div className="footer">
      <div className="left__side">
        <h2>SIGN UP AND SAVE</h2>
        <div className="inputs">
          <input type="text" name="email" value={email} placeholder="Email" onChange={handleChange} />
          <a href="/#">JOIN</a>
        </div>
        <p>Join our email list for deals and news about kids and coding</p>
        <a href="/#" className="reviews">Check out our amazing reviews!</a>
        <div className="icons">
          <a href="/#"><i className="fab fa-facebook-square"></i></a>
          <a href="/#"><i className="fab fa-twitter-square"></i></a>
          <a href="/#"><i className="fab fa-instagram-square"></i></a>
          <a href="/#"><i className="fab fa-pinterest-square"></i></a>
          <a href="/#"><i className="fab fa-youtube"></i></a>
        </div>
        <p><b><a href="/#">Terms of Service</a></b>, <b> <a href="/#">Privacy Policy</a></b> and <b> <a href="/#">Children's Privacy Policy</a> </b> </p>
      </div>
      <div className="right__side">
        <div className="">
          <h3>FOR HOME</h3>
          <ul>
            <li><a href="/#">Link</a></li>
            <li><a href="/#">Link</a></li>
            <li><a href="/#">Link</a></li>
            <li><a href="/#">Link</a></li>
            <li><a href="/#">Link</a></li>
          </ul>
        </div>
        <div className="">
          <h3>FOR SCHOOLS</h3>
          <ul>
            <li><a href="/#">Link</a></li>
            <li><a href="/#">Link</a></li>
            <li><a href="/#">Link</a></li>
          </ul>
        </div>
        <div className="">
          <h3>STORE</h3>
          <ul>
            <li><a href="/#">Link</a></li>
            <li><a href="/#">Link</a></li>
            <li><a href="/#">Link</a></li>

          </ul>
        </div>
        <div className="">
          <h3>BLOG</h3>
          <ul>
            <li><a href="/#">Link</a></li>
            <li><a href="/#">Link</a></li>
            <li><a href="/#">Link</a></li>

          </ul>
        </div>
        <div className="">
          <h3>SUPPORT</h3>
          <ul>
            <li><a href="/#">Link</a></li>
            <li><a href="/#">Link</a></li>
            <li><a href="/#">Link</a></li>
            <li><a href="/#">Link</a></li>
            <li><a href="/#">Link</a></li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;



function Navbar(){
  return (
    <div className="navbar">
      <i className="fas fa-bars" id="sidebar" onClick="toggleNav()"></i>
      <div className="logo">
        <img src="https://bitsbox.com/img/logo-color.png" alt="" />
      </div>
      <div className="middle">
        <ul>
          <li>
            <a href="/#">For Home </a>
            <ul>
              <li>
                <a href="/#">Link</a>
              </li>
              <li>
                <a href="/#">Link</a>

              </li>
              <li>
                <a href="/#">Link</a>
              </li>
            </ul>
          </li>


          <li>
            <a href="/#">Schools </a>
            <ul>
              <li>
                <a href="/#">Link</a>
              </li>
              <li>
                <a href="/#">Link</a>

              </li>
              <li>
                <a href="/#">Link</a>
              </li>
            </ul>
          </li>
          <li><a href="/#">HomeSchool </a>

            <ul>
              <li>
                <a href="/#">Link</a>
              </li>
              <li>
                <a href="/#">Link</a>

              </li>
              <li>
                <a href="/#">Link</a>
              </li>
            </ul>
          </li>
          <li><a href="/#">STORE </a>

            <ul>
              <li>
                <a href="/#">Link</a>
              </li>
              <li>
                <a href="/#">Link</a>

              </li>
              <li>
                <a href="/#">Link</a>
              </li>
            </ul>
          </li>
          <li><a href="/#">Reviews </a>
            <ul>
              <li>
                <a href="/#">Link</a>
              </li>
              <li>
                <a href="/#">Link</a>

              </li>
              <li>
                <a href="/#">Link</a>
              </li>
            </ul>
          </li>
          <li><a href="/#">Blog </a>

            <ul>
              <li>
                <a href="/#">Link</a>
              </li>
              <li>
                <a href="/#">Link</a>

              </li>
              <li>
                <a href="/#">Link</a>
              </li>
            </ul>
          </li>
          <li><a href="/#">Help </a>

            <ul>
              <li>
                <a href="/#">Link</a>
              </li>
              <li>
                <a href="/#">Link</a>

              </li>
              <li>
                <a href="/#">Link</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li><a href="/#">Kids Sign In</a></li>
          <li><a href="/#">Account</a></li>
          <li><a href="/#">Cart</a></li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar

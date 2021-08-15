function toggleNav(){
    document.getElementById('sidebar__container').classList.toggle('active');
}




function Sidebar(){
  return (
    <div className="sidebar__container" id="sidebar__container">
        <div className="cross" onClick={toggleNav}>
          <i className="fas fa-times"></i>
        </div>
        <div className="nav__item">
          <p href="/#">For Home</p>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="nav__item__drop">
          <a href="/#">LINK</a>
          <a href="/#">LINK</a>
          <a href="/#">LINK</a>
        </div>
        <div className="nav__item">
          <p href="/#">For Home</p>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="nav__item__drop">
          <a href="/#">LINK</a>
          <a href="/#">LINK</a>
          <a href="/#">LINK</a>
        </div>
        <div className="nav__item">
          <p href="/#">For Home</p>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="nav__item__drop">
          <a href="/#">LINK</a>
          <a href="/#">LINK</a>
          <a href="/#">LINK</a>
        </div>
        <div className="nav__item">
          <p href="/#">For Home</p>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="nav__item__drop">
          <a href="/#">LINK</a>
          <a href="/#">LINK</a>
          <a href="/#">LINK</a>
        </div>
        <div className="nav__item">
          <p href="/#">For Home</p>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="nav__item__drop">
          <a href="/#">LINK</a>
          <a href="/#">LINK</a>
          <a href="/#">LINK</a>
        </div>
    </div>
  )
}

export default Sidebar

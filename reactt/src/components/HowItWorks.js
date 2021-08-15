function HowItWorks(){
  return (
    <div className="how__it__works">
      <h2>How It Works</h2>

      <div className="details">
        <div className="left__image" >
          <img src="img1.png" alt="" />
          <h2>1</h2>
          <p><b>Kids look through the materials and pick an app.</b></p>
          <p>Every box comes with a mix of coding projects, ranging from simple to more advanced.</p>
        </div>

        <div className="middle__image">
          <img src="img2.png" alt="" />
          <h2>2</h2>
          <p><b>Kids type the app into the Bitsbox website.</b></p>
          <p>Kids start with the code from the materials, then change it to make it their own.</p>
        </div>

        <div className="right__img">
          <img src="img3.png" alt="" />
          <h2>3</h2>
          <p><b>Kids use and share their apps on any mobile device.</b></p>
          <p>Bitsbox apps run on any computer, tablet, or phone with a web browser.</p>
        </div>
      </div>

      <a href="/#" className="signup__button">Sign Me Up!</a>
    </div>
  )
}

export default HowItWorks;

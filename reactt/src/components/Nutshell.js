
function Nutshell(){
  return(
    <div className="nutshell">
      <h2>Bitsbox in a nutshell</h2>
      <div className="videos">
        <div className="left__video">
          <iframe id="video-iframe" src="//www.youtube.com/embed/izDWUho5cEE?rel=0" scrolling="no" frameBorder="0" allowFullScreen="" title="video iframe"></iframe>
          <p className="where">Why should kids learn to code? (1:41)</p>
        </div>
        <div className="right__video">
          <iframe id="video-iframe" src="//www.youtube.com/embed/3x_54UfJqP0?rel=0" scrolling="no" frameBorder="0" allowFullScreen="" title="video iframe"></iframe>
          <p className="where">What is Bitsbox? (0:30)</p>
        </div>
      </div>
    </div>
  )
}

export default Nutshell;


function ConvinceBox(){
  return(
    <div className="convince__box">
      <h2>Is Bitsbox right for your kid?</h2>
      <p> <b>Over a million</b> kids have built apps on our website, and we have subscribers in over <b>70 countries</b> .</p>
      <div className="images">
        <div className="left">
          <img src="https://bitsbox.com/img/infographic-age.png" alt="" />
          <p>Bitsbox is designed for 6 to 12 year olds.</p>
        </div>
        <div className="middle">
          <img src="https://bitsbox.com/img/infographic-gender.png" alt="" />
          <p>Bitsbox appeals to both boys and girls.</p>
        </div>
        <div className="right">
          <img src="https://bitsbox.com/img/infographic-beginner.png" alt="" />
          <p>No coding experience needed.</p>
        </div>
      </div>
      <p className="note"> <b>Attention grownups!</b> You don't need to know anything about code to help your kid learn with Bitsbox.</p>
    </div>
  )
}

export default ConvinceBox;

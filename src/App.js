import { useState } from 'react';
import './App.css';


function Figma(){

  const [size, setFontSize] = useState({
    heading: "24px",
    paragraph: "16px"
  })

  const [family, setFontFamily] = useState({
    heading: "Roboto",
    paragraph: "San-serif"
  })

  const [BGColor, setBGColor] = useState({
    headColor: "#e66465",
    bodyColor: "#f6b73c",
    textColor: "black"
  })

  function onChangeSize(oEvent){
      setFontSize({...size, [oEvent.target.id]: oEvent.target.value})
  }

  function onChangeFamily(oEvent){
      setFontFamily({...family, [oEvent.target.id]: oEvent.target.value})
  }

  function onColorChange(oEvent){
    let newObj = BGColor;
    if(oEvent.target.id === "headColor"){
      setBGColor({...BGColor, ["headColor"]: oEvent.target.value})
    }else if(oEvent.target.id === "bodyColor"){
      setBGColor({...BGColor, ["bodyColor"]: oEvent.target.value})
    }else{
      setBGColor({...BGColor, ["textColor"]: oEvent.target.value})
    }
  }
  function copyCSS(){
    
  }
  return(
    <div className="container">
        <header>
           <h1>Mini Figma App</h1>
        </header>
        <div className="example">
          <h1 className="example-item" style={{fontSize: size.heading, 
                       fontFamily: family.heading,
                       backgroundColor: BGColor.headColor,
                       color: BGColor.textColor }}>
          This is my Heading template
          </h1>
          <p className="example-item" style={{fontSize: size.paragraph, 
                       fontFamily: family.paragraph,
                       backgroundColor: BGColor.bodyColor,
                       color: BGColor.textColor }}>
            Lorem ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>
        </div>
        <h2>Select Font-size</h2>
        <div className="font-size">
          <div>  
            <label>Heading: </label>
            <select name="font-size" id="heading" onChange={onChangeSize}>
              <option value="8px">8px</option>
              <option value="16px">16px</option>
              <option value="24px" selected>24px</option>
              <option value="32px">32px</option>
            </select>
          </div>  
          <div>
            <label>Paragraph: </label>
            <select name="font-size" id="paragraph" onChange={onChangeSize}>
              <option value="8px">8px</option>
              <option value="16px" selected>16px</option>
              <option value="24px">24px</option>
              <option value="32px">32px</option>
            </select>
          </div>
        </div>
        <h2>Select Font-family</h2>
        <div className="font-family">
          <div>  
            <label>Heading: </label>
            <select name="font-size" id="heading" onChange={onChangeFamily}>
              <option value="Roboto" selected>Roboto</option>
              <option value="Open Sans">Open Sans</option>
              <option value="Playfair Display">Playfair Display</option>
              <option value="Raleway">Raleway</option>
            </select>
          </div>  
          <div>
            <label>Paragraph: </label>
            <select name="font-family" id="paragraph" onChange={onChangeFamily}>
              <option value="Roboto">Roboto</option>
              <option value="Open Sans" selected>Open Sans</option>
              <option value="Raleway">Raleway</option>
              <option value="Montserrat">Montserrat</option>
            </select>
          </div>
        </div>
        <h2>Select backround</h2>
        <div className="background">
          <div>
            <label>Heading: </label>
            <input type="color" id="headColor" onChange={onColorChange} value={BGColor.headColor} />
          </div>
          <div>
            <label>Body: </label>
            <input type="color" id="bodyColor" onChange={onColorChange} value={BGColor.bodyColor} />
          </div>
          <div>
            <label>Text: </label>
            <input type="color" id="textColor" onChange={onColorChange} value={BGColor.textColor} />
          </div>
        </div>
        <button className="copy" onClick={copyCSS}>Copy CSS</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
        <Figma />
    </div>
  );
}

export default App;

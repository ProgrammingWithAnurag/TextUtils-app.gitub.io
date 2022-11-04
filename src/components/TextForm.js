import React ,{useState} from 'react'

export default function TextForm(props) {
      const handleUpClick =()=>{
            console.log("Uppercase was clicked");
            let newText = text.toUpperCase();
            setText(newText);
      }
      const handleLoClick =()=>{
            let newText = text.toLowerCase();
            setText(newText);
      }
      const handleClearClick =()=>{
        let newText = "";
        setText(newText);
      }
      const handleCopyClick =()=>{
            var text = document.getElementById('mybox');
            text.select();
            navigator.clipboard.writeText(text.value);
      }
      const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
      }
      const handleOnChange =(event)=>{
            console.log("Uppercase was clicked");
            setText(event.target.value)
      }

      const [text,setText] = useState('Enter text here');
  return (
      <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div class="mb-3">
      <label htmlFor="mybox" class="form-label">Example textarea</label>
      <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to Uppercase</button>
      <button className='btn btn-primary mx-2' onClick={handleLoClick} >Convert to Lowercase</button>
      <button className='btn btn-primary mx-2' onClick={handleClearClick} >Clear</button>
      <button className='btn btn-primary mx-2' onClick={handleCopyClick} >Copy</button>
      <button className='btn btn-primary mx-2' onClick={handleExtraSpaces} >Remove extra spaces</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

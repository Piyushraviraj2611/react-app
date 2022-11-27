import React ,{useState} from 'react';


export default function Contain(props){
const handleUpper =()=>{
    let newtext=text.toUpperCase();
    setText(newtext);
}
const handleLower =()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
}
const handleClear =()=>{
    let newtext='';
    setText(newtext);
}
const handleCopy =()=>{
    var text=document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
}

let handleOnChange =(event)=>{
    
   setText(event.target.value)
}

    const [text, setText] = useState('');
    return(
    <div>
<div className="mb-3">
    <div>
    <h1 style={{color:props.mode==='dark'?'white':'black'}}>ENTER YOUR TEXT</h1>
</div>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="9" placeholder='Enter A Text Here'  ></textarea>
</div>
<div>
<p style={{color:props.mode==='dark'?'white':'black'}} > {text.split(" ").length} words {text.length} characters</p>
</div>
<div>
<button className={`mx-1 btn btn-${props.mode==='light'?'dark':'primary'}`} onClick={handleUpper}>TO UPPER </button>
<button className={`mx-1 btn btn-${props.mode==='light'?'dark':'primary'}`}  onClick={handleLower}>TO LOWER</button>
<button className={`mx-1 btn btn-${props.mode==='light'?'dark':'primary'}`}  onClick={handleClear}>CLEAR</button>
<button className={`mx-1 btn btn-${props.mode==='light'?'dark':'primary'}`}  onClick={handleCopy}>COPY </button>

</div>
<div>
    <h2  className='my-4' style={{color:props.mode==='dark'?'white':'black'}}>PREVIEW</h2>
    <h6 style={{color:props.mode==='dark'?'white':'black'}}>{text}
    </h6>
</div>
</div>
      )
    } 
 
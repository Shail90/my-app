import React,{useState} from 'react';
export default function Form(props) {
    const handleUpClick =()=>{
        console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleLowClick =()=>{
        console.log("Lowercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick =()=>{
        console.log("Clear Case was clicked" + text);
        let newText='';
        setText(newText);
        props.showAlert("Text is Cleared","success");
    }

    const handleCopyClick =()=>{
        console.log("Copy text was clicked" + text);
        var text=document.getElementById("TextBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied successfully","success");
    }

    const handleExtraSpaces =()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed","success");
    }

    const handleOnChange =(event)=>{
        console.log("On Change");
        var c=event.target.value;
        setText(c);
    }
    const [text, setText]= useState('')
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className='form-control' value={text} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="TextBox" rows="8"></textarea> 
                </div>
                <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleCopyClick}>Copy Text</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in above text area to preview here"}</p>
        </div>
        </>
    );
};

import React,{useState} from 'react';

export default function About(props) {

    const [myStyle, setmyStyle]= useState({
        color: '#042743',
        backgroundColor: 'white'
    })

    const [btntext, setbtntext]=useState("Enable Light Mode")

    const stylefun =()=>{
        if(myStyle.color==='#042743')
        {
            setmyStyle({
                color: 'white',
                backgroundColor:'#042743',
                border:'1px solid white'
            })
            setbtntext("Enable Light Mode")
        }
        else{
            setmyStyle({
                color: '#042743',
                backgroundColor:'white'
            })
            setbtntext("Enable Dark Mode")

        }
    }
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className="my-3"> About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Information #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the TextUtils react app which is used to manipulate user text in the way they want</strong>                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Information #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This React App is developed for learning purpose and implemented basic functionality of React JS</strong>                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Information #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>App is Developed by Shailendra Kumar Saini with help of YouTube Learning Platform from code with harry</strong>         </div>
                    </div>
                </div>
            </div>

            <div className="container my-3"></div>
            <button onClick={stylefun} type="button" className="btn btn-primary">{btntext}</button>

        </div>
        </>
    );
}

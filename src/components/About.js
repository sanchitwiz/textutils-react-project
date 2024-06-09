import React from 'react'

export default function About(props) {

    // const [myStyle , setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })

    // const[button , setButton] = useState({
    //     // innerHTML: 'dark mode',
    //     backgroundColor: 'black',
    //     color: 'white'
    // })

    // const[text , setText] = useState("Dark Mode")

    // const toggelStyle = () => {
    //     if (myStyle.backgroundColor === 'black'){
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white",
    //         })
    //         setButton({
    //             backgroundColor: 'black',
    //             color: 'white'
    //         })
    //         setText("Dark Mode")
    //     }else{
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black"
    //         })
    //         setButton({
    //             backgroundColor: 'white',
    //             color: 'black'

    //         })
    //         setText("Light Mode")
    //     }
    // }

    // if(props.mode === 'dark'){
    //     setMyStyle({
    //         color: 'white',
    //         backgroundColor: 'black'
    //     })
    // }

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#696969' : 'white'
    }
    
  return (
    <div className="container my-3" style={myStyle}>
        <h1 style={myStyle}>About Us </h1>
        <div className="accordion" id="accordionExample" style={myStyle} >
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" style={myStyle}>
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                <strong>Analyze Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            </div>
        </div>
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                <strong>Free to Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            </div>
        </div>
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            </div>
        </div>
        </div>
        {/* <button type="button" className="btn btn-primary my-3" onClick={toggelStyle} style={button}>{text}</button> */}

    </div>
  )
}

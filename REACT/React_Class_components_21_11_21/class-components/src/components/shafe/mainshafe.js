import React from "react";
import Img from "./img";
import Names from "./chefNames";

class Mainshafe extends React.Component{
    constructor (){
        super();
    }
    render(){
        const imgObj={img1:"https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885__340.jpg",img2:"https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885__340.jpg",img3:"https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885__340.jpg",img4:"https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885__340.jpg"}
        const names={connon:"Connon Quin",samuel:"Samuel Schick", fred:"Fred Morison",celia:"Celia Almeda"}
        return <div>
            <Img image={imgObj}/>
            <Names name={names}/>
        </div>
    }
}

export default Mainshafe;
import React from "react";
import Img from "./img";

class Mainshafe extends React.Component{
    constructor (){
        super();
    }
    render(){
        const imgObj={img1:"https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885__340.jpg",img2:"https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885__340.jpg",img3:"https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885__340.jpg",img4:"https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885__340.jpg"}
        return <div>
            <Img image={imgObj}/>
        </div>
    }
}

export default Mainshafe;
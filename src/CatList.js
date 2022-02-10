import React from "react";

const CatList = props => {

    let images = props.catPics.map(catPic => {
        return (
            <li>
                <img src={catPic.url} alt="A cute cat" />
            </li>
        )
    })

    return(
        <ul>
            {images}
        </ul>
    )
}

export default CatList;
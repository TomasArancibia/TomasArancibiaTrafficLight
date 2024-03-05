import React, { useState } from "react";

const Light = (props) => {
    const [selectedColor, setSelectedColor] = useState("")
    return (
        <>
            <div onClick={() => setSelectedColor(props.color[0])} className={`light ${props.color[0]} ${selectedColor === props.color[0] ? `${props.color[0]}Glow` : "opacity"}`}></div>
            <div onClick={() => setSelectedColor(props.color[1])} className={`light ${props.color[1]} ${selectedColor === props.color[1] ? `${props.color[1]}Glow` : "opacity"}`}></div>
            <div onClick={() => setSelectedColor(props.color[2])} className={`light ${props.color[2]} ${selectedColor === props.color[2] ? `${props.color[2]}Glow` : "opacity"}`}></div>
        </>
    )

}

export default Light
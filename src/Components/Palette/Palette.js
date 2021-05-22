import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox'
import './Palette.css'
class Palette extends Component {
    render() {

        const colorBox = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name} />
        ))
        return (
            <div className="Palette">
                <div className="Palette-colors">{colorBox}</div>
            </div>
        )
    }
}

export default Palette;





// function Palette(props) {
//     const colorBox =  props.colors.map(color => (
//         <ColorBox background={color.color} />
//     ))
//     return (
//         <div>
//             {colorBox}
//         </div>
//     )
// }

// export default Palette;
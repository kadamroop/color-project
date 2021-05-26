import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider';
import './Palette.css'
class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500 };
        this.changeLevel = this.changeLevel.bind(this)
    }
    changeLevel(level) {
        this.setState({ level });
    }
    render() {
        const {colors} = this.props.palette;
        const {level} = this.state
        const colorBox = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ))
        return (
            <div className="Palette">
                <Slider
                    defaultValue={level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={this.changeLevel}
                />
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
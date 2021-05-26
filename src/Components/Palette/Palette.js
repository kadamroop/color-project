import React, { Component, useState } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import 'rc-slider/assets/index.css'
import './Palette.css'
import Slider from 'rc-slider';
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
        const { colors } = this.props.palette;
        const { level } = this.state
        const colorBox = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ))
        return (
            <div className="Palette">
                <div className="slider">
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={this.changeLevel}
                    />
                </div>
                <div className="Palette-colors">{colorBox}</div>
            </div>
        )
    }
}

export default Palette;





// function Palette(props) {
//     const [level, setLevels] = useState(500);
//     // const { colors } = props.palette

//     //  console.log('props.palette', props.palette.colors)
//     const colorBox = props.palette.colors[level].map(color => (
//         <ColorBox background={color.hex} name={color.name} />
//     ))
//     const changeLevel = (level) => {
//         setLevels({ level });
//     }
//     return (
//         <div className="Palette">
//             <div className="slider">
//                 <Slider
//                     defaultValue={level}
//                     min={100}
//                     max={900}
//                     step={100}
//                     onAfterChange={changeLevel}
//                 />
//             </div>
//             <div className="Palette-colors">{colorBox}</div>
//         </div>
//     )
// }

// export default Palette;
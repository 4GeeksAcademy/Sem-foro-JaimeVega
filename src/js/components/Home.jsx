import { useState, useEffect  } from 'react';
import {Color} from './Colors';


export function Home() {
	let [red,setRed] = useState(false);
	let [yellow,setYellow] = useState(false);
	let [green,setGreen] = useState(false);
	let [purple,setPurple] = useState(false);
	let [state,setState] = useState(false);
	let [color,setColor] = useState(0);
	let [showPurple,setShowPurple] = useState(false);
	let colors = ["red","yellow","green","purple"]
	    useEffect(() => {
			const timer = setInterval(() => {
				if (state) {
					if (!showPurple && color === 3) {
						setRed(true);
						setYellow(false);
						setGreen(false);
						setPurple(false);
						setColor(1);	
					}
					else {
						(colors[color] === "red")? setRed(true): setRed(false);
						(colors[color] === "yellow")? setYellow(true): setYellow(false);
						(colors[color] === "green")? setGreen(true): setGreen(false);
						(colors[color] === "purple")? setPurple(true): setPurple(false);
						if (color < 3) {
								setColor(color + 1)
							}
						else {
							setColor(0);
						}
					}
				}
					
			}, 2000);

			return () => clearInterval(timer);
		}, [state,color, showPurple]);
	return (
		<div className="container">
			<div>
				<div className="pole"></div>
				<div className="colors">
					<Color 
					color={(red)? "rgba(233, 11, 11, 0.88)": " rgba(131, 16, 16, 0.88)" }
					onClick={() => {
						setRed(!red);
						setYellow(false);
						setGreen(false);
						setPurple(false);
						}
					}
					selected = {(red)? "selected": "" }
					show={true}/>

					<Color 
					color={(yellow)? " rgba(244, 248, 7, 1)": " rgba(178, 180, 22, 0.88)" }
					onClick={() => {
						setRed(false);
						setYellow(!yellow);
						setGreen(false);
						setPurple(false);
						}
					}
					selected = {(yellow)? "selected": "" }
					show={true}/>

					<Color 
					color={(green)? "rgba(15, 221, 43, 0.88)": "rgba(29, 143, 44, 0.88)"}
					onClick={() => {
						setRed(false);
						setYellow(false);
						setGreen(!green);
						setPurple(false);
						}
					}
					selected = {(green)? "selected": "" }
					show={true}/>
					<Color 
					color={(purple)? "rgba(121, 15, 221, 0.88)": "rgba(82, 29, 143, 0.88)"}
					onClick={() => {
						setRed(false);
						setYellow(false);
						setGreen(false);
						setPurple(!purple);
						}
					}
					selected = {(purple)? "selected": "" }
					show={showPurple}/>
				</div>
			</div>
			<div className='buttons'>
				<button className='btn'
				onClick={() => {
						setState(!state)
						if (!state == false) {
							setRed(false);
							setYellow(false);
							setGreen(false);
							setPurple(false);
						}
					}
				}
				>{(state)? "Apagar": "Encender" }</button>
				<button className='btn'
				onClick={() => {
						setShowPurple(!showPurple)
					}
				}>Agregar Color</button>
			</div>
		</div>
	);
};
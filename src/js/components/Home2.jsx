import { useState, useEffect  } from 'react';
import {Color} from './Colors';


export function Home2() {
	let [color, setColor] = useState("");
	let [auto,setAuto] = useState(false);
	let [showPurple,setShowPurple] = useState(false);
	let colors = (showPurple)? ["red","yellow","green","purple"]:["red","yellow","green"];
	    useEffect(() => {
			let show;
			if (auto) {
				let index = colors.indexOf(color)
				show = setTimeout(() => {
					if (index == colors.length-1) {
						setColor('red');
					}
					else {
						setColor(colors[index + 1]);
					}
				}, 1000);

			}
			return () => clearTimeout(show);
		}, [auto,color,showPurple]);
	return (
		<div className="container">
			<div>
				<div className="pole"></div>
				<div className="colors">
					<Color 
					color={(color == 'red')? "rgba(233, 11, 11, 0.88)": " rgba(131, 16, 16, 0.88)" }
					onClick={() => {
						(color == 'red')? setColor(''):setColor('red');
						}
					}
					selected = {(color == 'red')? "selected": "" }
					show={true}/>

					<Color 
					color={(color == 'yellow')? " rgba(244, 248, 7, 1)": " rgba(178, 180, 22, 0.88)" }
					onClick={() => {
						(color == 'yellow')? setColor(''):setColor('yellow');
						}
					}
					selected = {(color == 'yellow')? "selected": "" }
					show={true}/>

					<Color 
					color={(color == 'green')? "rgba(15, 221, 43, 0.88)": "rgba(29, 143, 44, 0.88)"}
					onClick={() => {
						(color == 'green')? setColor(''):setColor('green');
						}
					}
					selected = {(color == 'green')? "selected": "" }
					show={true}/>
					<Color 
					color={(color == 'purple')? "rgba(121, 15, 221, 0.88)": "rgba(82, 29, 143, 0.88)"}
					onClick={() => {
						(color == 'purple')? setColor(''):setColor('purple');
						}
					}
					selected = {(color == 'purple')? "selected": "" }
					show={showPurple}/>
				</div>
			</div>
			<div className='buttons'>
				<button className='btn'
				onClick={() => {
						let acendido = auto;
						setAuto(!auto);
						(acendido)? setColor(''): setColor('red');
						
					}
				}
				>{(auto)? "Apagar": "Encender" }</button>
				<button className='btn'
				onClick={() => {
						setShowPurple(!showPurple)
					}
				}>Agregar Color</button>
			</div>
		</div>
	);
};
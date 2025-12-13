import { useState } from 'react';
import {Color} from './Colors';


export function Home() {
	let [red,setRed] = useState(false);
	let [yellow,setYellow] = useState(false);
	let [green,setGreen] = useState(false);
	return (
		<div>
		<div className="palo"></div>
		<div className="semaforo">
			<Color 
			color={(red)? "rgba(233, 11, 11, 0.88)": " rgba(131, 16, 16, 0.88)" }
			onClick={() => {
          		setRed(!red);
				setYellow(false);
				setGreen(false);
				}
			}
			selected = {(red)? "selected": "" }/>

			<Color 
			color={(yellow)? " rgba(244, 248, 7, 1)": " rgba(178, 180, 22, 0.88)" }
			onClick={() => {
          		setRed(false);
				setYellow(!yellow);
				setGreen(false);
				}
			}
			selected = {(yellow)? "selected": "" }/>

			<Color 
			color={(green)? "rgba(15, 221, 43, 0.88)": "rgba(29, 143, 44, 0.88)"}
			onClick={() => {
          		setRed(false);
				setYellow(false);
				setGreen(!green);
				}
			}
			selected = {(green)? "selected": "" }/>
		</div>
		</div>
	);
};
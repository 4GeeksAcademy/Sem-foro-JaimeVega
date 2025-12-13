import {Color} from './Colors';


export function Home() {
	return (
		<div>
		<div className="palo"></div>
		<div className="semaforo">
			<Color/>
			<Color/>
			<Color/>
		</div>
		</div>
	);
};
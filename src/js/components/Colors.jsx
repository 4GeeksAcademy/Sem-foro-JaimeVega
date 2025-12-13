export function Color(props) {
	return (
		<div 
		className={`color ${props.selected} ${props.color}`}
		style={{backgroundColor: props.color}}
		onClick={props.onClick}>
	
		</div>
	);
};
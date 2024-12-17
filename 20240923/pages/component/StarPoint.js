import * as ListStyle from "../styles/ListStyle";

function StarPoint(point) {
	let full = Math.trunc(point/1);
	let half = 0;
	switch(Math.trunc(point%1/0.25)){
		case 0:
		case 1:
			half = 0;
			break;
		default: 
			half = 0.5;
	}
	let empty = (half === 0.5 ? 5-full-1 : 5-full);
	
	const stars = [];
	
	for(let i = 0; i < full; i++){
		stars.push(<ListStyle.StarImg src="/img/FullStar.png" alt=""/>)
	}
	if(half > 0){
		stars.push(<ListStyle.StarImg src="/img/HalfStar.png" alt=""/>)
	}
	for(let i = 0; i < empty; i++){
		stars.push(<ListStyle.StarImg src="/img/EmptyStar.png" alt=""/>)
	}
	
	return (
		<span>
			{stars}
		</span>
	)
}

export default StarPoint;
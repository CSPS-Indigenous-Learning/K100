console.log("TestJS");
window.onhashchange = funcRef;
var isActive,oldStrokeColor,oldFillColor;
function funcRef(e){
	var loc=this.location.hash;
	var hash=loc.split('_')[1];
	var changeStroke=document.querySelector("#"+hash);
	var style = window.getComputedStyle(changeStroke),
    strokeColor = style.getPropertyValue('stroke');
    fillColor = style.getPropertyValue('fill');
	if(isActive){isActive.setAttribute("stroke-width","1px");isActive.setAttribute("stroke",oldStrokeColor);isActive.setAttribute("fill",oldFillColor)}
	changeStroke.setAttribute("fill",strokeColor);
	changeStroke.setAttribute("stroke","#000");
	oldFillColor=fillColor;
	oldStrokeColor=strokeColor;
	isActive=changeStroke;
}

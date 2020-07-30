console.log("Loaded");
var isActive, oldStrokeColor, oldFillColor;
window.onhashchange = funcRef;
window.onload = updateTitle;
var closeButton=document.querySelector("#Close");
closeButton.onclick=function(){console.log("Closing");window.close()}
var css = '#MapTitle{ background-color: rgba(10,10,10,.8);color:#fff;position:absolute;font-size:28px;top:0px;margin:auto;width:100%;text-align:center;padding:1em;font-family:SANS-SERIF,Sans; }.sozi-frame-list{top:8em;list-style:none;}.sozi-frame-number { position: absolute; top: 8em;}',
	style = document.createElement('style'),
	mapTag = document.createElement('div');
mapTag.id = "MapTitle";
mapTag.innerHTML = "Canada";
style.type = 'text/css';
if (style.styleSheet) {
	// This is required for IE8 and below.
	style.styleSheet.cssText = css;
} else {
	style.appendChild(document.createTextNode(css));
}
document.head.appendChild(style);
var body = document.querySelector("body");
body.appendChild(mapTag);
var frameNum = document.querySelector("#MapTitle");

function updateTitle() {
	var locc = this.location.hash;
	var loc = locc.split('#')[1];
	var clickedFrame = -1;
soziPresentationData.frames.some(function(el, i) {
    if (el.frameId == loc) {
        clickedFrame = i;
        return true;
    }
});
	// var clickedFrame = soziPresentationData.frames.findIndex(function(element) { return element.frameId == loc });
	// var thisTitle = sozi.player.currentFrame.title;
	var thisTitle = soziPresentationData.frames[clickedFrame].title;
	console.log(thisTitle);
	frameNum.innerHTML = thisTitle;
}

function funcRef(e) {
	var loc = this.location.hash;
	var hash = loc.split('_')[1];
	var changeStroke = document.querySelector("#" + hash);
	var style = window.getComputedStyle(changeStroke),
		strokeColor = style.getPropertyValue('stroke');
	fillColor = style.getPropertyValue('fill');
	if (isActive) {
		isActive.setAttribute("stroke-width", "10px");
		isActive.setAttribute("stroke", oldStrokeColor);
		isActive.setAttribute("fill", oldFillColor)
	}
	changeStroke.setAttribute("fill", "#FFF");
	changeStroke.setAttribute("stroke-width", "5px");
	changeStroke.setAttribute("stroke", "#000");
	oldFillColor = fillColor;
	oldStrokeColor = strokeColor;
	isActive = changeStroke;
	updateTitle()
}

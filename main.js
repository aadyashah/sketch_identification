function preload(){
classifier=ml5.imageClassifier('DoodleNet');
}
function setup(){
c=createCanvas(300,300);
c.center();
background("white");
c.mouseReleased(classify_canvas);
synth=window.SpeechSynthesis;

}
function draw(){
strokeWeight(12);
stroke(0);
if (mouseIsPressed){
line(pmouseX,pmouseY, mouseX, mouseY);
}
}
function clearCanvas(){
background("white");
}
function classify_canvas(){
classifier.classify(c,got_results);
}

function got_results(error , results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    document.getElementById("label").innerHTML= "label : "+results[0].label;
    document.getElementById("confidence").innerHTML= "confidence : "+Math.round(results[0].confidence *100)+"%";
    
    s=new SpeechSynthesisUtterance(results[0].label);
    synth.speak(s);
}
}

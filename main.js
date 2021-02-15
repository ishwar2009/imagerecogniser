Webcam.set({
    width :360,
    height :310,
    image_format :'png',
    png_quality : 90
});
camera=document.getElementById("camera");
Webcam.attach('#camera')

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="the_image" src="'+data_uri+'">'
    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/E2KW1C-qX/model.json",model_loaded);
function model_loaded(){
    console.log("model loded");
}
function check(){
    img=document.getElementById("the_image");
    classifier.classify(img ,gotresult);
}
function gotresult(error,results){
    if(error){
  console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("name").innerHTML=results[0].label;
        percent= Math.floor(results[0].confidence*100);
        document.getElementById("accuracy").innerHTML=percent+ "%";
    }
    
}

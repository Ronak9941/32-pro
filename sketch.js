const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png";

var time = 0;
var HOUR;




function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add

    if(backgroundImg){

   
        background(backgroundImg);
        }

        getBackgroundImg();
        textSize(30);
    fill("red");
    if(HOUR<=12){
    text("time : " + HOUR + "AM",width  - 150)
    }
    else{
        text("time : " + "HOUR + PM",width  - 150)
        }
    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

   

    var response  = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var ResJSON  = await response.json()
    var DT = ResJSON.datetime;
     HOUR = DT.slice(11,13);
    //console.log(HOUR)
    if(HOUR >= 06 && HOUR<= 07){
        bg = "sunrise1.png"
    }

      if(HOUR >= 05  && HOUR <= 07){
            bg = "sunrise2.png";
      }


      if(HOUR >= 07  && HOUR <= 09){
        bg = "sunrise3.png";
  }

      if(HOUR >= 09  && HOUR <= 11){
      bg = "sunrise4.png";
        }

        if(HOUR >= 11  && HOUR <= 13){
            bg = "sunrise5.png";
      }

      if(HOUR >= 13  && HOUR <= 16){
        bg = "sunrise6  .png";
  }

  if(HOUR >= 16  && HOUR <= 17){
    bg = "sunset7.png";
    }

    if(HOUR >= 17  && HOUR <= 18){
    bg = "sunset8.png";
    }

    if(HOUR >= 18  && HOUR <= 19){
        bg = "sunset9.png";
    }

    if(HOUR >= 19  && HOUR <= 20){
        bg = "sunset10.png";
    }
    
    if(HOUR >= 20  && HOUR <= 24){
        bg = "sunset11.png";
    }

    if(HOUR >= 24  && HOUR <= 05){
        bg = "sunset12.png";
  }



  




      backgroundImg = loadImage(bg);

}

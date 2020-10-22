let time =0;
let wave =[];
let slider;

function setup(){
    createCanvas(1520,700);
    slider = createSlider(1,100,1);
}

function draw(){
    background(0);
    translate(250,350);
    

    // //polar cordinates
    // let x=radius*cos(time);
    // let y=radius*sin(time);

    let x=0;
    let y=0;

    for(let i=0;i<slider.value();i++){
        let prevx=x;
        let prevy=y;
        let n=i*2+1;
    let radius =100*(4/(n*PI));
    x+=radius*cos(n*time);
    y+=radius*sin(n*time);
    
    
        //circles
    stroke(255,100);
    noFill();
    ellipse(prevx,prevy,radius*2);

    // fill(255);
    stroke(255);
    // ellipse(x,y,8);
    line(prevx,prevy,x,y); //radius line


    
    }
// wave.push(y); //waveline
wave.unshift(y);
//for wave
    translate(250,0); //wave cordinate
    line(x-250,y,0,wave[0]); //straight line to connect wave and circle

    beginShape();
    noFill();
    for(let i=0;i<wave.length;i++){
        // point(i,wave[i]);
        vertex(i,wave[i]);
    }
    endShape();

    time+=0.05; //speed up and down + or -for opposite direction

    //to finish in limited length
    if(wave.length>600){
        wave.pop();
    }
}
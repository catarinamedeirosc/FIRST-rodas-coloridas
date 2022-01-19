let colors = ['#f0101c', '#f05697', '#0b469b', '#32b6c3', '#f78000', '#fddf0e', '#9fe063', '#315423', '#16141b','#ffffff'];

let arcos = [];

let border = -200;

function setup() {
	createCanvas(windowWidth,windowHeight);
	colorMode(HSB, 360, 100, 100, 100);
	pixelDensity(2);
	
  for(let xx =border/2;xx <= width-border;xx+=200)
	{
		for(let yy =border/2;yy <= height-border;yy+=200)
		{
			 let mySeed = random(1,10000);
		   arcos.push(new arco(xx,yy,190,mySeed));
			 stroke(0);
		}
		//print(xx);
	}
	
	/*
	strokeWeight(0.1);
	for(let xx =border;xx <= width-border;xx+=20)
	{
		for(let yy = border;yy <= height-border;yy+=20)
		{
        line(xx,0,xx,height);
				line(0,yy,width,yy);
		}
	}*/
	
	//noLoop();
	
	smooth(8);
	
}

function draw() {
	
	strokeWeight(1);
	for(let i=0;i < arcos.length;i++)
	{
		arcos[i].resetChoice();
		arcos[i].display();
	}
	
	/*
	stroke(0);
	strokeWeight(0.1);
	for(let xx =border;xx <= width-border;xx+=20)
	{
		for(let yy = border;yy <= height-border;yy+=20)
		{
        line(xx,0,xx,height);
				line(0,yy,width,yy);
		}
	}*/

}



class arco
{
	constructor(x,y,mySize,mySeed) 
	{
		this.x = x;
		this.y = y;
		this.size = mySize;
		this.seed = mySeed;
		this.rad = random(0.5,2);
		this.speed = random(0,0.5);
		//this.choice = floor(random(1,16));
		this.direction = random([-1,1]);
	}

	resetChoice()
	{
		//this.choice = floor(random(1,16));
	}
	
	display() 
	{
		randomSeed(this.seed);
	
		push();
		translate(this.x,this.y);
		//rotate(frameCount*0.05);
		noStroke();
		for(let i=0;i < this.size;i+=20)
		{
			rotate(this.direction*frameCount*0.05*i/200);
			fill(0);
			let temp = random(0,2*PI);
			arc(0-3,0,this.size-i,this.size-i,temp,temp + 3*PI/2);
			fill(generateColor(10));
			arc(0,0,this.size-i,this.size-i,temp,temp + 3*PI/2);
		}
		pop();
		
	}
}

function generateColor(scale) {
	let temp = color(colors[floor(random(0,10))]);

	myColor = color(hue(temp) + randomGaussian() * scale,
		saturation(temp) + randomGaussian() * scale,
		brightness(temp) + randomGaussian() * scale,
		random(50,100));
	return myColor;
}

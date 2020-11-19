canvas = document.getElementById("myCanvas"); 
ctx = canvas.getContext("2d");

images = ["Image1.jpeg","Image2.jpeg","Image3jpg","Image 4.jpg"];
random_number = Math.floor(Math.random()*4);
console.log(random_number);

rover_Width = 100;
rover_Height = 90;
rover_Image = "rover.png";
background_Image = images [random_number];
console.log(background_Image);
rover_X = 10;
rover_Y = 10;


function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackgroundImage;
    background_imgTag.src = background_Image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRoverImage;
    rover_imgTag.src = rover_Image;
}

function uploadBackgroundImage() {
    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);
}

function uploadRoverImage(){
    ctx.drawImage(rover_imgTag,rover_X,rover_Y,rover_Width,rover_Height);
}

window.addEventListener( "keydown", my_keydown );
function my_keydown(e){
    keypress = e.keyCode;
    console.log(keypress);  

    if ( keypress == "38" ) {
        up();
        console.log("up");
    }
    if ( keypress == "40" ) {
        down();
        console.log("down");
    }
    if ( keypress == "37" ) {
        left();
        console.log("left");
    }
    if ( keypress == "39" ) {
        right();
        console.log("right");
    }
}

function up() {
    if (rover_Y >= 0){
        rover_Y = rover_Y - 5;
        console.log("When up arrow is pressed, x=" + rover_X + " y= " + rover_Y);
        uploadBackgroundImage();
        uploadRoverImage();
    }
}

function down() {
    if (rover_Y <= 510){
        rover_Y = rover_Y + 5;
        console.log("When down arrow is pressed, x=" + rover_X + " y= " + rover_Y);
        uploadBackgroundImage();
        uploadRoverImage();
    }
}

function left() {
    if (rover_X >= 0){
        rover_X = rover_X - 5;
        console.log("When left arrow is pressed, x=" + rover_X + " y= " + rover_Y);
        uploadBackgroundImage();
        uploadRoverImage();
    }
}

function right() {
    if (rover_X <= 700){
        rover_X = rover_X + 5;
        console.log("When right arrow is pressed, x=" + rover_X + " y= " + rover_Y);
        uploadBackgroundImage();
        uploadRoverImage();
    }
}


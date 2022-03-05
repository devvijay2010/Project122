x = 0;
y = 0;

screen_width = 0;
screen_height = 0;

apple = "";

noofapple = "";
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition =  new SpeechRecognition();

function preload()
{
    apple = loadImage("apple.png");
}

function start()
{
    document.getElementById("status").innerHTML = "System is listening. Please speak.";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Your speech has been recognized as: " + content + ".";
        to_number = Number(content);
        if(Number.isInteger(to_number))
        {
        document.getElementById("status").innerHTML = "Started drawing apple."
        draw_apple = "set";
        }
        else
        {
            document.getElementById("status").innerHTML = "The speech AI has not recognized your speech as a number.";
        }
}

function setup()
{
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(screen_width, screen_height - 150);
    canvas.position(Math.floor(Math.random() * 150));
    Synth = window.speechSynthesis;
}

function draw()
{
    if(draw_apple == "set")
    {
        for(let i = 1; i <= to_number; i++)
        {
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            image(apple, x, y, 50, 50);
        }

        document.getElementById("status").innerHTML = to_number + " Apples drawn.";
        draw_circle = "";
        var utterThis = new SpeechSynthesisUtterance(to_number + " Apples drawn");
        Synth.speak(utterThis);
    }

}

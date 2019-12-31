var penColor = "#ffffff"
var canvasColor = ""
var brushSize = 6

function StartDrawing() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let start = false;
    let lastX;
    let lastY;
    let currX;
    let currY;

    // Get proper height and width for canvas, then set resize handler.
    canvas.width = document.getElementById("body").clientWidth;
    canvas.height = window.innerHeight - 50
    window.addEventListener(
        "resize",
        ({ target: { innerWidth, innerHeight } }) => {
            canvas.width = document.getElementById('body').clientWidth;
            canvas.height = canvas.height = window.innerHeight - 50
        },
        false
    );

    window.addEventListener("mousedown", ({ pageX, pageY }) => {
        start = true
        lastX = pageX
        lastY = pageY
        currX = pageX
        currY = pageY
        drawOver();
    })

    // onMouseUp prevent drawing
    window.addEventListener('mouseup', () => {
        start = false;
    })

    function drawOver() {
        // On mouse move update cursor position.
        window.addEventListener(
            "mousemove",
            ({ pageX, pageY }) => {

                draw = () => {
                    // Set current x and y
                    currX = pageX
                    currY = pageY

                    if (start == true) {
                        ctx.beginPath();
                        ctx.lineWidth = brushSize;
                        ctx.moveTo(lastX, lastY - 30);
                        ctx.lineTo(currX, currY - 30);
                        ctx.strokeStyle = penColor;
                        ctx.stroke();
                        ctx.lineJoin = "round";
                        ctx.lineCap = "round";

                        // lastX and Y becomes the current x and y
                        lastX = currX
                        lastY = currY
                    };
                }
                requestAnimationFrame(draw);
            },
            false
        );

        window.addEventListener(
            "mousedown",
            ({ pageX, pageY }) => {

                draw = () => {
                    // Set current x and y
                    currX = pageX
                    currY = pageY

                    if (start == true) {
                        ctx.beginPath();
                        ctx.lineWidth = brushSize;
                        ctx.moveTo(lastX, lastY - 30);
                        ctx.lineTo(currX, currY - 30);
                        ctx.strokeStyle = penColor;
                        ctx.stroke();
                        ctx.lineJoin = "round";
                        ctx.lineCap = "round";

                        // lastX and Y becomes the current x and y
                        lastX = currX
                        lastY = currY
                    };
                }
                requestAnimationFrame(draw);
            },
            false
        );

    }
};

StartDrawing()

// Change the Pen Color
function changePenColor(element) {
    penColor = element.className
}

//Change the Brush Size
function changeBrushSize() {
    var input = document.getElementById("brush-size")
    input.value = brushSize
    input.addEventListener('input', () => {
        brushSize = input.value
    })
}
changeBrushSize();
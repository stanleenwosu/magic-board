function StartDrawing() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let start = false;
    let lastX; 
    let lastY;
    let currX;
    let currY;

    // Get proper height and width for canvas, then set resize handler.
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener(
        "resize",
        ({ target: { innerWidth, innerHeight } }) => {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
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
                        ctx.lineWidth = 6;
                        ctx.moveTo(lastX, lastY);
                        ctx.lineTo(currX, currY);
                        ctx.strokeStyle = "#b200f0";
                        ctx.stroke();
                        ctx.lineJoin = "round";
                        ctx.lineCap = "round";

                        // lastX and Y becomes the current x and y
                        lastX = currX
                        lastY = currY

                        // Fade out the previous tails
                        ctx.fillStyle = `rgba(0, 0, 0, 0)`;
                        ctx.fillRect(0, 0, canvas.width, canvas.height);

                        // Request an animation frame to update it for a smooth 60fps independent of mousemove updates.
                    };
                }
                requestAnimationFrame(draw);
            },
            false
        );

    }
};

StartDrawing()
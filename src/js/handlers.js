function handlers() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    function clear() {
        var button = document.getElementById('clear-button');
        button.addEventListener('click', () => {
            if (confirm('Do you want to clear board')) {
                console.log(canvas.clientWidth, canvas.clientHeight);
                return ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
            } else {
                return;
            }
        })
    }
    clear();

}

handlers();
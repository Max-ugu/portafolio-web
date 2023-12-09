let app = document.getElementById('typewriter');

let typewriter = new typewriter(app, {
    loop: true,
    delay: 75,
    cursor: "<span style='color: #fb4993;'></span>",
});

typewriter
.pausefor(2500)
.typeString('<span style="color: #fb4993;">CONOCE MÁS SOBRE BTS</span>')
.pausefor(200)
.deleteChars(10)
.start();
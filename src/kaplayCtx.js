import kaplay from "kaplay";

//configuration for kaplay background and display
const k =kaplay({
    width: 1920,
    height: 1080,
    letterbox: true, 
    background: [0, 0, 0], 
    global:false, 
    touchToMouse:true,
    buttons:{
        jump:{
            keyboard:["space"],
            mouse: "left",
        }
    },
    touchToMouse:true,
    debug: false,
});

export default k
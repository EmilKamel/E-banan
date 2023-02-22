import { useEffect, useRef, useState } from "react";
import banana from "./banana_9343861_940.png"



export const Canvas = (props: {message?: string}) => {
    const canvasRef = useRef<HTMLCanvasElement|null>(null);

    const [screenWidth, setScreenSize] = useState<number | null>(null);
    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setScreenSize(window.innerWidth);
        });
        return ()=>{
            window.removeEventListener("resize", ()=>{
                setScreenSize(window.innerWidth);
            })
        }
    });

    const urlSearchParams = new URLSearchParams(window.location.search);
    const prettyMessage = urlSearchParams.get("besked"); 


    // original bananapic size: 3013 x 1495
    const heightRatio = 1495/3013;

    const renderBanan = ()=>{
        const width = window.innerWidth;
        const height = width * heightRatio;

        const canvas = canvasRef.current
        if(!canvas) return;
        if(!prettyMessage) return;

        const context = canvas.getContext("2d")
        if(!context) return;

        context.clearRect(0,0,width,height);

        const bananpicture = document.getElementById("bananpic");

        context.fillStyle = "black";
        context.fillRect(0,0,width,height);

        if(!bananpicture) return;

        const bMarginWidth = width * 0.2;
        const bMarginheight = height * 0.2;

        const img = <img src={banana} style={{visibility: "hidden", position: "absolute", width: "0px", opacity: "0"}} id="bananpic"></img>

        context.drawImage(
            bananpicture as any, 
            0 + bMarginWidth, 
            0 + bMarginheight, 
            width - (2*bMarginWidth), 
            (height) - (2*bMarginheight))

        context.fillStyle = "black";
        context.font = "30px Comic Sans MS";
        context.fillText(prettyMessage, (width/2) - (0.1 * width), height/2 + (0.2 * height))

        //console.log(canvas.toDataURL());
        
    }

    useEffect(()=>{
        renderBanan();
    }, [screenWidth])
     
    renderBanan();

    return <canvas ref = {canvasRef} width={window.innerWidth} height={window.innerHeight}/>
}
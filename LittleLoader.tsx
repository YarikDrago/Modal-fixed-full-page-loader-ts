import React, {useEffect, useRef} from 'react';
import styled from 'styled-components'

const Backdrop = styled.section<{backdropColor?: string}>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  backdrop-filter: blur(10px);
  background-color: rgba(170, 217, 177, 0.7);
  color: #5e7705;
  font-family: Comfortaa;
`

const CentralBlock = styled.div`
  position: relative;
  display: block;
  width: 100px;
  height: 100px;
`

const Frame = styled.div`
    position: relative;
  width: 100px;
  height: 100px;
  background-color: greenyellow;
  //clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%, 50% 0, 50% 10%, 10% 30%, 10% 70%, 50% 90%, 90% 70%, 90% 30%, 50% 10%);
  
`
const Initials = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  //background-color: red;


  h1 {
    font-family: Comfortaa;
    font-weight: bold;
    font-size: 60px;
    margin: 0;
    transform: translateY(5px);
    //background: -webkit-linear-gradient(0deg, #30940e, rgba(28, 231, 123, 0.15));
    //-webkit-background-clip: text;
    //background-clip: text;
    //-webkit-text-fill-color: transparent;
    //text-fill-color: transparent;

`
interface ILoader{
    loaderText: string
    backdropColor?: string
}

const LittleLoader = ({loaderText}: ILoader) => {
    const refFrame = useRef<HTMLDivElement>(null)
    const refInitials = useRef<HTMLDivElement>(null)
    const refText = useRef<HTMLHeadingElement>(null)

    useEffect(()=>{
        mainAnime()
    },[])

    function mainAnime(){
        console.log("main anime")
        const startTime = Date.now()
        window.requestAnimationFrame(anime)
        // window.cancelAnimationFrame(anime)


        function anime(){
            const dR = -20/2
            const dG = 83/2
            const dB = 107/2
            const speedDivider = 500
            const wobbleFnc = (Math.sin((Date.now()- startTime)* Math.PI/ speedDivider)+1)/2
            const wobbleFnc2 = (Math.cos((Date.now()- startTime)* Math.PI/ speedDivider/2))
            const firstColor = `rgb(${38+dR*wobbleFnc2},${189.5+dG*wobbleFnc2}, ${67.5+dB*wobbleFnc2})`
            const secondColor = `rgb(${38-dR*wobbleFnc2},${189.5-dG*wobbleFnc2}, ${67.5-dB*wobbleFnc2})`
            if (refFrame.current){
                refFrame.current.style.background = `linear-gradient(90deg, ${firstColor}, ${secondColor})`
                refFrame.current.style.transform = `scaleX(${wobbleFnc/2 + 0.5})`
            }
            if (refInitials.current){
                refInitials.current.style.transform = `scaleX(${wobbleFnc/2 + 0.5})`
            }
            if (refText.current){
                refText.current.style.background = `linear-gradient(90deg, ${firstColor}, ${secondColor})`
                refText.current.style.webkitBackgroundClip = "text"
                refText.current.style.webkitTextFillColor = "transparent"
            }
            window.requestAnimationFrame(anime)
        }
    }
    return (
        <Backdrop>
            <CentralBlock>
                <Frame
                    ref={refFrame}
                />
                <Initials
                    ref = {refInitials}
                >
                    <h1
                        ref ={refText}
                    >IU</h1>
                </Initials>
            </CentralBlock>

            <h3>{loaderText}</h3>
        </Backdrop>
    );
};

export default LittleLoader;

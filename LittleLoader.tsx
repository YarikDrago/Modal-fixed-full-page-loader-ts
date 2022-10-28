import React from 'react';
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
  //div {
  //  animation:  2s woobling linear infinite;
  //}
  

  @keyframes woobling{
    0% {
      transform: scaleX(1);
      background: linear-gradient(-90deg, green, green);
    }
    25%{
      transform: scaleX(0.5);
      background: linear-gradient(-90deg, green, greenyellow);
    }
    50%{
      transform: scaleX(1);
      background: linear-gradient(-90deg, green, green);
    }
    75%{
      transform: scaleX(0.5);
      background: linear-gradient(90deg, green, greenyellow);
    }
    100%{
      transform: scaleX(1);
      background: linear-gradient(-90deg, green, green);
    }
  }
  
`

const Frame = styled.div`
    position: relative;
  width: 100px;
  height: 100px;
  background-color: greenyellow;
  //clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%, 50% 0, 50% 10%, 10% 30%, 10% 70%, 50% 90%, 90% 70%, 90% 30%, 50% 10%);
  
  animation:  2s woobling linear infinite;
  
  @keyframes woobling{
    0% {
      transform: scaleX(1);
      background: green;
    }
    25%{
      transform: scaleX(0.5);
      background: linear-gradient(-90deg, green, greenyellow);
    }
    50%{
      transform: scaleX(1);
      background: green;
    }
    75%{
      transform: scaleX(0.5);
      background: linear-gradient(90deg, green, greenyellow);
    }
    100%{
      transform: scaleX(1);
      background: green;
    }
  }
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
  animation: 2s wooble linear infinite;

  @keyframes wooble {
    0% {
      transform: scaleX(1);
      //background: green;
      
    }
    25% {
      transform: scaleX(0.5);
      //background: linear-gradient(-90deg, green, greenyellow);
      
    }
    50% {
      transform: scaleX(1);
      //background: green;
    }
    75% {
      transform: scaleX(0.5);
      //background: linear-gradient(90deg, green, greenyellow);
    }
    100% {
      transform: scaleX(1);
      //background: green;
    }
  }

  h1 {
    font-family: Comfortaa;
    font-weight: bold;
    font-size: 60px;
    margin: 0;
    transform: translateY(5px);
    //color: green;
    //font-size: 72px;
    animation: 2s woobleText linear infinite;
    background: -webkit-linear-gradient(0deg, #30940e, #1ce77b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @keyframes woobleText {
      0% {
        background: green;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      25% {
        background: linear-gradient(-90deg, green, greenyellow);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

      }
      50% {
        background: green;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      75% {
        background: linear-gradient(90deg, green, greenyellow);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      100% {
        background: green;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`
interface ILoader{
    loaderText: string
    backdropColor?: string
}

const LittleLoader = ({loaderText, backdropColor}: ILoader) => {
    return (
        <Backdrop>
            <CentralBlock>
                <Frame/>
                <Initials>
                    <h1>IU</h1>
                </Initials>
            </CentralBlock>

            <h3>{loaderText}</h3>
        </Backdrop>
    );
};

export default LittleLoader;

import React from "react";
import './Intro.css'
import { UnderlinedText} from "./underlined-text"
import {StickyNavBar} from "./sticky-navbar"
import { useSvgAnimation } from './svg-animation';


export function Intro () {
    const { pathRefs, handleMouseEnter, handleMouseLeave, handleAnimationRestart } = useSvgAnimation({autoPlay: true});
    return (
        <section className="intro">
                <div className="boceto-uno" onMouseEnter={handleAnimationRestart} >
                    <svg className="svg-one" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.03 337.93" >
        <path ref={(el) => (pathRefs.current[11] = el)} d="M193.7,333.25c-6.58-5.04-11.28-12.45-16.1-19.04-6.83-9.32-13.67-18.64-20.5-27.96-13.62-18.58-27.23-37.15-40.85-55.73-13.62-18.58-27.15-37.03-40.71-55.56-13.35-18.24-26.63-36.54-39.36-55.22-6.15-9.03-12.26-18.11-17.92-27.45-5.66-9.34-10.5-18.4-14.17-28.32-.71-1.92-1.86-4.68-.55-6.58.21-.3.46-.52.73-.7-.7-.72-1.41-1.44-2.13-2.15-.45.37-.85.81-1.18,1.32-1.32,2.08-1.09,4.66-.43,6.92,1.44,4.96,3.78,9.82,6.03,14.45,4.68,9.64,10.33,18.78,16.18,27.75,12.53,19.22,25.82,37.93,39.29,56.5,13.65,18.81,27.43,37.51,41.17,56.25,13.91,18.98,27.82,37.96,41.73,56.94,6.93,9.46,13.86,18.91,20.79,28.37,3.44,4.69,6.88,9.39,10.32,14.08,3.04,4.14,5.99,8.37,9.35,12.26,2.87,3.31,6.11,6.32,9.9,8.54-.6-1.54-1.13-3.1-1.58-4.68Z"/>
      <path ref={(el) => (pathRefs.current[10] = el)} d="M208.09,248.41c.38.98.76,1.95,1.13,2.93,1.1,1.16,2.2,2.32,3.3,3.48-1.52-2.12-2.99-4.26-4.44-6.41Z"/>
      <path ref={(el) => (pathRefs.current[9] = el)} d="M211.66,258.02c-.79-2.23-1.6-4.45-2.44-6.67-12-12.63-23.66-25.58-35.15-38.68-13.1-14.93-26.03-30.01-39.15-44.93-13.12-14.92-26.24-29.44-39.99-43.56-13.66-14.03-27.86-27.55-42.87-40.13-7.54-6.32-15.29-12.41-23.25-18.2-3.94-2.87-7.94-5.66-11.99-8.37-3.3-2.21-7.13-4.75-11.32-4.31-1.26.14-2.42.6-3.36,1.38.72.71,1.43,1.43,2.13,2.15,1.02-.68,2.41-.65,3.6-.39,4.18.92,7.78,3.98,11.23,6.35,7.97,5.48,15.72,11.27,23.26,17.32,15,12.03,29.19,25.04,42.8,38.61,13.75,13.7,26.91,27.98,39.82,42.47,12.93,14.51,25.6,29.25,38.37,43.91,12.75,14.64,25.59,29.21,38.87,43.39,3.25,3.47,6.52,6.91,9.82,10.33.89.93,2.58.18,2.58-1.01-.24-.32-.49-.64-.73-.97l-2.24,1.3Z"/>
      <path ref={(el) => (pathRefs.current[8] = el)} d="M93.26,44.4c3.52,7.86,7.39,15.58,11.42,23.19,8.05,15.2,16.88,29.97,26,44.56,9.13,14.62,18.55,29.06,27.78,43.62s18.2,29.13,26.52,44.16c8.32,15.03,15.96,30.44,22.3,46.4.28.69.54,1.39.81,2.09,1.44,2.15,2.92,4.29,4.44,6.41.55.58,1.09,1.16,1.65,1.73l-.27.16c.24.32.48.64.73.97,0-.15-.02-.3-.07-.45-5.61-15.92-12.54-31.35-20.29-46.34s-16.31-29.51-25.19-43.84c-8.88-14.33-18.16-28.62-27.27-42.91-9.11-14.29-18.15-28.77-26.56-43.56-4.16-7.31-8.16-14.71-11.96-22.21-1.91-3.78-3.77-7.59-5.57-11.43-.89-1.91-1.89-3.82-2.58-5.82-.6-1.72-1.11-3.93.31-5.4.02-.02.04-.03.06-.05-.77-.65-1.52-1.3-2.27-1.96-2.84,3-1.47,7.34.03,10.69Z"/>
      <path ref={(el) => (pathRefs.current[7] = el)} d="M259.55,206.94c-1.83-1.99-3.65-3.99-5.45-6.02,1.36,2.11,3.32,4.06,5.45,6.02Z"/>
      <path ref={(el) => (pathRefs.current[6] = el)} d="M241.85,154.26c-9.82-19.73-20.61-38.96-31.13-58.32-10.51-19.33-20.78-38.83-29.52-59.05-2.18-5.04-4.25-10.12-6.21-15.24-.96-2.52-1.93-5.05-2.8-7.6-.67-1.96-1.19-4.03-1.16-6.11.01-.92.17-1.85.55-2.66-.77-.66-1.54-1.32-2.32-1.97-1.18,2.09-1.37,4.84-1.01,7.3.35,2.41,1.21,4.68,2.04,6.96.94,2.57,1.91,5.13,2.91,7.68,8.25,21.08,18.41,41.35,29.07,61.3,10.66,19.95,21.77,39.51,32.11,59.56,10.36,20.08,19.93,40.62,27.18,62.04.1.29.19.57.28.86,1.54,1.38,3.1,2.8,4.52,4.3-6.45-20.35-15.02-39.96-24.51-59.05Z"/>
      <path ref={(el) => (pathRefs.current[5] = el)} d="M173.6,3.31c2.4-.96,5.24.46,7.34,1.55,4.96,2.58,9.82,5.35,14.61,8.22,19.29,11.55,37.31,25.17,53.67,40.59,2.04,1.92,4.04,3.87,6.03,5.84,1.38,1.37,3.41-.7,2.12-2.12h0s-2.11,2.1-2.11,2.1l-4.09-4.53v.02c-.98-1.07-.03-2.54,1.05-2.59-15.02-14.26-31.42-27.05-48.93-38.1-4.86-3.06-9.8-5.99-14.82-8.78-2.46-1.37-4.93-2.82-7.5-3.99-2.36-1.07-5.01-1.94-7.61-1.3-1.96.48-3.27,1.63-4.1,3.09.77.65,1.55,1.31,2.32,1.97.4-.86,1.04-1.58,2.02-1.97Z"/>
      <path ref={(el) => (pathRefs.current[4] = el)} d="M266.36,213.31c-1.42-1.5-2.98-2.92-4.52-4.3.08.24.16.47.23.71,1.5,1.6,3,3.2,4.52,4.78l-2.51,1.46c-.65-2.08-1.32-4.17-2.01-6.24-.85-.91-1.68-1.85-2.53-2.77-2.13-1.95-4.09-3.9-5.45-6.02-6.91-7.79-13.59-15.78-20.13-23.89-10.39-12.9-20.42-26.09-30.51-39.23-10.04-13.09-20.14-26.14-30.7-38.82-10.56-12.68-21.41-24.79-33.15-36.21-5.88-5.72-11.95-11.23-18.25-16.47-3.16-2.63-6.37-5.18-9.63-7.67-2.93-2.23-5.8-4.6-9.26-5.95-2.85-1.11-6.52-1.56-8.95.7-.11.1-.2.21-.3.32.75.66,1.5,1.32,2.27,1.96,2.09-2.06,6.02-.31,8.1.86,3.28,1.83,6.25,4.4,9.2,6.71,6.35,4.98,12.49,10.24,18.41,15.72,11.86,10.96,22.9,22.79,33.41,35.04,10.56,12.31,20.61,25.05,30.52,37.89,9.95,12.89,19.76,25.87,29.84,38.66,10.08,12.79,20.45,25.43,31.43,37.48,2.65,2.91,5.33,5.78,8.05,8.61,1.02,1.07,2.95-.03,2.51-1.46-.19-.63-.41-1.24-.61-1.87Z"/>
      <path ref={(el) => (pathRefs.current[3] = el)} d="M253.28,52.86c-.32-.36-.7-.49-1.06-.47,1.66,1.58,3.31,3.16,4.94,4.77l-3.88-4.3Z"/>
      <path ref={(el) => (pathRefs.current[2] = el)} d="M251.16,54.98v-.02s4.1,4.53,4.1,4.53l2.11-2.11-.21-.23c-1.62-1.61-3.28-3.2-4.94-4.77-1.08.06-2.03,1.52-1.06,2.59Z"/>
      <path ref={(el) => (pathRefs.current[1] = el)} d="M214.17,256.56c-.55-.57-1.1-1.16-1.65-1.73.45.63.91,1.26,1.38,1.89l.27-.16Z"/>
      <path ref={(el) => (pathRefs.current[0] = el)} d="M212.52,254.82c-1.1-1.16-2.2-2.32-3.3-3.48.84,2.22,1.66,4.44,2.44,6.67l2.24-1.3c-.46-.63-.92-1.26-1.38-1.89Z"/>
      
</svg>
                </div>
                <div className="intro-text">
                    <h1 className="text">
                        <span>¡Hola! Soy </span>
                        <UnderlinedText text="Eva" href="about" />
                        <span>, </span>
                        <UnderlinedText text="diseñadora gráfica" href="proyectos" />
                        <span> y </span>
                        <UnderlinedText text="artista visual" href="proyectos" />
                        <span>.</span>
                </h1>
                </div>
        </section>
    )
}
import React from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import FezAnimations from "../animations";

import img1 from "../../images/00000.png";
import img2 from "../../images/00001.png";
import img3 from "../../images/00002.png";
import img4 from "../../images/00003.png";
import img5 from "../../images/00004.png";

const images = [img1, img2, img3, img4, img5];

const ImagesComponent = () => {

  function map(val, minA, maxA, minB, maxB) {
    return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
  }
  
  function Card3D(card, ev) {
    let img = card.querySelector('img');
    let imgRect = card.getBoundingClientRect();
    let width = imgRect.width;
    let height = imgRect.height;
    let mouseX = ev.offsetX;
    let mouseY = ev.offsetY;
    let rotateY = map(mouseX, 0, 180, -25, 25);
    let rotateX = map(mouseY, 0, 250, 25, -25);
    let brightness = map(mouseY, 0, 250, 1.5, 0.5);
    
    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    img.style.filter = `brightness(${brightness})`;
  }
  
  var cards = document.querySelectorAll('.card3d');
  
  cards.forEach((card) => {
    card.addEventListener('mousemove', (ev) => {
      Card3D(card, ev);
    });
    
    card.addEventListener('mouseleave', (ev) => {
      let img = card.querySelector('img');
      
      img.style.transform = 'rotateX(0deg) rotateY(0deg)';
      img.style.filter = 'brightness(1)';
    });
  });


  return (
    <>
      {images.map((img, i) => (
        <m.div
          className="card3d flex h-full w-full flex-col items-center justify-end gap-4 rounded border-secondary-500 py-4 px-2 backdrop-blur-sm lg:border"
          variants={FezAnimations.container}
          key={i}
        >
          <div className="h-full w-full">
            <img
              className="title-font h-full w-full font-medium text-white"
              src={img}
            />
          </div>
        </m.div>
      ))}
    </>
  );
};

export default ImagesComponent;

import React, { use, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState } from 'react';
import { _numWithUnitExp } from 'gsap/gsap-core';
import 'remixicon/fonts/remixicon.css'
function App() {

const [showContent, setshowContent] = useState(false);

  useGSAP(() => {
  const tl = gsap.timeline();

  tl.to(".vi-mask-group", {
    rotate: 10,
    duration: 3,
    ease: "Power4.easeInOut",
    transformOrigin: "50% 50%",
  })
  .to(".vi-mask-group",{
   
    scale:10,
    duration:3,
    delay:-1.8,
    ease:"Expo.easeInOut",
    transformOrigin:"50% 50%",
    opacity:0,
    onUpdate:function(){
      if(this.progress()>=0.9){
        document.querySelector(".svg").remove();
        setshowContent(true);
        this.kill()
      }
    }
    

  });
});


useGSAP(()=>{
const main=document.querySelector(".main")

main?.addEventListener("mousemove",(e)=>{

let xMove=((e.clientX/window.innerWidth)-0.5)*40

gsap.to(".main .textdiv",{
  x:`${xMove*0.4}%`,
})

gsap.to(".sky",{
  x: xMove*1.7,
})

gsap.to(".bg",{
  x:xMove,
})

})

},[showContent])


  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && 
      
      <div className='main w-full bg-black'>
      <div className="landing w-full h-screen">
        <div className="navbar absolute top-0 z-[10] left-0 w-full py-8 px-10    ">
          <div className="logo flex gap-3">

            <div className="lines flex flex-col gap-1">
             <div className="line w-15 h-2 bg-white"></div>
             <div className="line w-8 h-2 bg-white"></div>
             <div className="line w-5 h-2 bg-white"></div>
            </div>

            <h3 className='text-4xl -mt-[11px] text-white'>Rockstar</h3>
          </div>
        
        
        </div>

        <div className="imagediv w-full h-screen relative overflow-hidden">
          <img src="./sky.png" alt="" className='w-full sky h-full object-cover absolute top-0 left-0 scale-[1.5]'/>
          <img src="./bg.png" alt="" className='w-full bg h-full object-cover absolute top-0 left-0 scale-[1.5]'/>

          <div className="textdiv absolute top-5 left-1/2 -translate-x-1/2  flex flex-col gap-2">
          <h1 className='text-9xl text-pink-500 ml-[-40px] leading-none'>GRAND</h1>
          <h1 className='text-9xl  text-pink-500 ml-[40px] leading-none'>THEFT</h1>
          <h1 className='text-9xl  text-pink-500 ml-[-40px] leading-none'>AUTO</h1>
          
          </div>
          <img src="./girlbg.png" alt="girl.png" className='absolute -bottom-[40%] left-1/4 scale-[0.8]'/>
        </div>

        <div className="btm absolute bottom-0 left-0 w-full py-15 px-10  bg-gradient-to-t from-black to-transparent">



       <div className="scrolldown flex gap-4 items-center">

        <i className="ri-arrow-down-line text-white text-4xl"></i>

        <h3 className='text-white font-["font-serif"]'>Scroll Down</h3>
       </div>

<img src="./ps5.png" alt="" className='h-[45px] absolute top-1/2 left-1/2 right-6 -translate-x-1/2 -translate-y-1/2'/>




        </div>
      
      

      </div>
        

     <div className="foot bg-black flex items-center justify-center w-full h-screen">

        <div className="cntn w-full h-[80%]  flex items-center">



       <div className="imag w-1/2 relative h-full overflow-hidden">
        <img src="./imag.png" alt="" className='aboslute top-1/2 left-1/2 scale-[0.8]'/>
       </div>

       <div className="content mt-4">
        <h1 className='text-white text-5xl'>Still Running</h1>
        <h1 className='text-white text-5xl'>Not Huntinng</h1>

        <p className='font-["font-serif"] mt-6 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorum perspiciatis officiis praesentium distinctio illo maxime facilis nesciunt dolores vel atque, ad quidem fugiat. Ipsum eaque, blanditiis itaque vero nobis sapiente odit?</p>

        <p className='font-["font-serif"] mt-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorum perspiciatis officiis praesentium distinctio illo maxime facilis nesciunt dolores vel atque, ad quidem fugiat. Ipsum eaque, blanditiis itaque vero nobis sapiente odit?</p>


        <p className='font-["font-serif"] mt-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorum perspiciatis officiis praesentium distinctio illo maxime facilis nesciunt dolores vel atque, ad quidem fugiat. Ipsum eaque, blanditiis itaque vero nobis sapiente odit?</p>
       </div>

          
        </div>



     </div>


        </div>
        
        
        
        }
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import video from "../assets/ga-download-720p.mp4";
import logo from "../assets/iga-logo-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faGlobeAmericas,
  faSearch,
  faMapMarkerAlt,
  faAlignRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons" ;

function IntroSection() {
  const [navbar,setNavbar] = useState(false);

 const changeBackground = () => {
   if(window.scrollY >= 80) {
     setNavbar(true)
   } else {
     setNavbar(false)
   }
 }

window.addEventListener('scroll' ,changeBackground);

  return (
    <div >
      <div >
        <VideoSection >
        <div className="textContent">
              <div className="title">
                 Keşfettikçe Aşık Olunan Kent: 
                 <div>
                <span>İstanbul</span>
                </div>
              </div>
            </div>
          <VideoNav  className={navbar ? 'active' : 'navbar'} style={{fontFamily:"Arial, Helvetica, sans-serif", fontSize:"14px"}}>
          {/* <LeftText top={280} fontSize={54} left={540} >
              Keşfettikçe Aşık Olunan Kent:
            </LeftText>
            <LeftText
              top={340}
              fontSize={50}
              left={290}
              maxWidth={300}
              fontWeight={400}
            >
              İstanbul
            </LeftText> */}

            
            
            
            <VideoNavItem leftMargin className='activeItem'>
              <IgaLogo src={logo}></IgaLogo>
              
            </VideoNavItem>
      
            <VideoNavItem className={navbar ? 'activeItem' : 'navbar'}  >
              İGA HAKKINDA 
            </VideoNavItem >
            <ul style={{width:" 15px"}}></ul>
            <VideoNavItem className={navbar ? 'activeItem' : 'navbar'} >
              İSTANBUL HAVALİMANI
            </VideoNavItem>
            <ul style={{width:" 15px"}} ></ul>
            <VideoNavItem className={navbar ? 'activeItem' : 'navbar'} >
            SÜRDÜRÜLEBİLİRLİK
            </VideoNavItem>
            <ul style={{width:" 15px"}}></ul>
            <VideoNavItem className={navbar ? 'activeItem' : 'navbar'} >
            BASIN MERKEZİ
            </VideoNavItem>
            <ul style={{width:" 15px"}}></ul>
            <VideoNavItem className={navbar ? 'activeItem' : 'navbar'} >
            İNSAN KAYNAKLARI
            </VideoNavItem>
            <ul style={{width:" 15px"}}></ul>
            <VideoNavItem style= {{color:"red"}}>
            COVİD-19
            </VideoNavItem>
            <ul style={{width:" 15px"}}></ul>
            
            <FontAwesomeIcon className={navbar ? 'activeItem' : 'navbar'}  icon={faPlaneDeparture } style={{color:"white"}}/>
            <ul ></ul>
            <FontAwesomeIcon className={navbar ? 'activeItem' : 'navbar'}  icon={faGlobeAmericas } style={{color:"white"}}/>
            <ul ></ul>
            <FontAwesomeIcon className={navbar ? 'activeItem' : 'navbar'}  icon={faMapMarkerAlt} style={{color:"white"}}/>
            <ul ></ul>
            <FontAwesomeIcon className={navbar ? 'activeItem' : 'navbar'}  icon={faSearch} style={{color:"white"}}/>
            <VideoNavItem>
            </VideoNavItem>
           
          </VideoNav>
          <Video className="gradient" src={video} loop autoPlay muted></Video>
          <VideoContent >
          <button className="a-btn ">
            <span className="a-btn-slide-text">DETAYA GİT</span>
            <span className="a-btn-slide-right"></span>
            <span className="a-btn-slide-hover" wfd-invisible="true"></span>
          <FontAwesomeIcon  icon={faArrowRight} style={{color:"00bed6"}}/>
          </button>
          </VideoContent>
          
        </VideoSection>
        

        <br  ></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        
      </div>
    </div>
  );
}

const VideoSection = styled.div`
  width: 100%;
  height: 44em;
  
`;
// filter:   drop-shadow(8px 8px 10px gray);

const VideoContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(rgba(0,0,0,0.6), transparent);
  width: 100%;
  height: 100%;
  content: '';
  z-index: 1;
`;



const LeftText = styled.div`
  position: absolute;
  top: ${(props) => props.top && `${props.top}px`};
  left: ${(props) => props.left && `${props.left}px`};
  transform: translate(-50%, -50%);
  color: white !important;

  font-family:  "DINNextLTPro-Heavy";
  max-width: ${(props) => props.maxWidth && `${props.maxWidth}px`};
  text-align: left;
  ${(props) => props.fontSize && `font-size:${props.fontSize}px;`}

`;

const Video = styled.video`

  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
  opacity: 1;
  content: '';
  z-index: 3;
  
`;


const IgaLogo = styled.img`
position: l;
  width: 70px;
  height: 70px;
  margin-left: -220px;
  margin-top: 40px;
  display: block;
`;

const VideoNav = styled.div`
  position: fixed;
  z-index: 1001;
  top: 30px;
  left: -px;
  width: 102%;
  height: 10%;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

const VideoNavItem = styled.div`
  transition: all 0.3s ease;
  display: flex;
  cursor: pointer;
  align-items: center;
  ${(props) =>
    props.leftMargin &&
    `
    margin-left:13rem;`}
    
  color:white;
  &:hover{
    color:#00bed6;
  }
`;

export default IntroSection;

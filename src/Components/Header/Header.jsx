// the header component

//importation of motion for activation of animation 
import {motion } from "framer-motion"

// importation of header css file 
import "./header.css";

// importation of calories css file 
import "./calories.css";

// importation of the sub header component 
import SubHeader from "../SubHeader/SubHeader";

// importation  of header images
import HeaderImg from "../../assets/removebg-preview.png";

import HeaderImgBack from "../../assets/hero_image_back.png";

import HeartImg from "../../assets/heart.png";

import CaloriesImg from "../../assets/calories.png";

const Header = () => {

    //define transition type and duration 
    const transition = { type: "spring", duration: 3 }
    
    const mobile = window.innerWidth <= 768 ? true:false;

    return (
      
        <>
            <div className="header">

                <div className="blur header-blur"></div>
                {/* dividing the header section into 2 parts that is the left and right side  */}
                {/* the left side section start from here  */}
                <div className="left-h">

                    {/* subHeader component being used here  */}
                    <SubHeader />
                    
                    {/* the best ad start from here  */}
                    <div className="the-best-ad">

                        {/* this the div is for the orange oval color  */}
                        <motion.div

                            initial={{ left: mobile ?"185px": "238px" }}
                            whileInView={{ left: "8px" }}
                            transition={{ ...transition, type: "tmeen" }}
                            
                        ></motion.div>

                        <span>the best fitness club in the town</span>

                    </div>
                    {/* the best ad ends here  */}

                    {/* header heading start from here  */}
                    <div className="header-text">
                    
                        <div>

                            <span className="stroke-text">Shape</span>

                            <span>Your</span>

                        </div>

                        
                        <div><span>Ideal body</span></div>
                        
                        <div>

                            <span>In here we will help to shape and transform into your dream body and live life to the fullest</span>

                        </div>
                        
                    </div>
                    {/* header heading ends from here */}

                    {/* figures start here  */}
                    <div className="figures">

                        <div>

                            <span>+180</span>
                            <span>expert coaches</span>

                        </div>

                        <div>

                            <span>+972</span>
                            <span>members joined</span>

                        </div>

                        <div>

                            <span>+60</span>
                            <span>fitness programs</span>

                        </div>

                    </div>
                    {/* figures ends here */}

                    {/* header button section start from here*/}
                    <div className="header-button">

                        <button className="btn">Get Started</button>

                        <button className="btn">Know More</button>

                    </div>
                     {/* header button section ends here*/}
                    

                </div>
                {/* left side section ends here  */}

                <div className="right-h">

                    <button className="btn">Join Us Now</button>

                    {/* heart-rate start from here*/}
                    <motion.div
                        initial={{right:"-1rem"}}
                        whileInView={{ right: "5rem" }}
                        transition={{transition}}

                    className="heart-rate">

                        <img src={HeartImg} alt={HeartImg} loading="lazy" />

                        <span>Heart Rate</span>

                        <span>118 bpm</span>

                    </motion.div>
                    
                    {/* heart rate section ends here  */}

                    {/* header images  */}
                    <img src={HeaderImg} alt={HeaderImg} loading="lazy" className="header-img"/>
                    
                    <img src={HeaderImgBack} alt={HeaderImgBack} loading="lazy" className="header-img-back"/>

                    {/* calories  */}
                    <div className="calories">

                        <img src={CaloriesImg} alt={CaloriesImg} loading="lazy" />

                        <div>
                            
                        <span>Calories Burn Out</span>

                        <span>250 Kcal</span>
                            
                       </div>

                    </div>

                </div>

            </div>
            
        </>
        
    )
}

export default Header

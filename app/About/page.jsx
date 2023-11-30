"use client";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const About = () => {
    const data = {
        title: "FAQ (How it works)",
        rows: [
            {
                title: "What Travelery is about?",
                content: `The major problem in our college is going anywhere outside because of high price and remote location .<br/> Here we came into action where we keep a log of who is going where and can we mutually go there and save money + time`,
            },
            {
                title: "What is Equal contribution?",
                content:
                    "Equal contibution mean the fair of the ride will be divided equally between all the peers .",
            },
            {
                title: "What is Free rides?",
                content: `In every college many folks have car or bike for  travel purpose, So if they are okay with it and want to help can give you free ride . `,
            },
            {
                title: "What is the package version",
                content: <h1 style={{color:"red"}}>current version is 1.0.0</h1>,
            },
            {
                title: "What is the Testimonials",
                content: `Testimonial as in a feedback for us what you guys want from us <br/> Is the site compatible ? <br/> Are we satisfying you ? <br/> We are open for every feedback!!!` ,
            },   
            {
                title: "Are the data user provide are secured ?",
                content: `All the data that are displayed on site are visible to everyone<br/> 
                    Honestly I myself concern about the mobile number of every user at first<br/>
                    But to be very honest , In college it's not hard to get anyone number   
                    <br/> Still if you guys think that instead of number we should give a chat option <br/>
                    You can write a testimonials and after a subsequent number we will update our page for chats.
                ` 
            },
            {
                title: "In calender the date are not selected visibly ?",
                content: ` We are working on the visibility issue but it should work fine just put a date and then choose time and submit a post . Sorry for inconvience.
                ` 
            },
            {
                title: "Filter button is not working properly  ?",
                content: `The thing is there is difference in user that write location name<br/>
                For eg:- some write bagulur and some write baglur ( there is spelling mismatch )
                It's is advised to all of you to write loaction as suggested in dropdown in landing page
                ` 
            },
        ],
    };
    const styles = {
        // bgColor: 'white',
        titleTextColor: "#654C4F",
        rowTitleColor: "#654C4F",
        rowContentColor: 'grey',
        // arrowColor: "red",
    };
    
    const config = {
        animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
    };
  return (
    <>
        <div className="mt-10">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    </>
  )
}

export default About

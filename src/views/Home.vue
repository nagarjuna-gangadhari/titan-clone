

<script setup>
import { ref } from 'vue'
import { useAuthStore } from "@/stores";
const { user } = useAuthStore();
var active_tab = ref(1)
var myDate = new Date();
</script>

<style>

#container {
    width: 2400px;
    height: 575px;
    margin-top: 45px;
    border-radius: 5px;
    background-color: #F9F9F9;
}

#header {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: white;
}

#menu{
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 13px;
    color: #6c7073;
}




#account {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    width: 165px;
    justify-content: flex-end;
    align-items: center;
}

#name {
    font-family: "Nunito", sans-serif;
    font-weight: 900;
    font-size: 11px;
    color: #2d2d2d;
}

.arrowWrapper {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    height: 8px;
    width: 8px;
    margin-left: 15px;
}

.arrow {
    width: 100%;
    fill: #CFD1D2;
}

#timeArrow {
    margin-left: 7px;
}

#page1 {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: auto;
    margin-top: 40px;
}

#page2 {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: auto;
    margin-top: 40px;
}

#page3 {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: auto;
    margin-top: 40px;
}

#page4 {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-top: 40px;
    width: 1000px;
    height: 78%;
}

.pageContent {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: flex-start;
    width: 1000px;
    height: 370px;
    padding: 0 12px;
    box-sizing: border-box;
}

#wrap {
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: flex-start;
}

#box1 {
    width: 140px;
    height: 65px;
    margin-bottom: 10px;
    background-color: #f3f3f3;
}

#box2 {
    width: 140px;
    height: 65px;
    margin-bottom: 10px;
    background-color: #f3f3f3;
}

#box3 {
    width: 140px;
    height: 65px;
    margin-bottom: 10px;
    background-color: #f3f3f3;
}

#box4 {
    width: 140px;
    height: 65px;
    margin-bottom: 10px;
    background-color: #f3f3f3;
}

#box5 {
    width: 140px;
    height: 65px;
    margin-bottom: 10px;
    background-color: #f3f3f3;
}

#box6 {
    width: 140px;
    height: 65px;
    margin-bottom: 10px;
    background-color: #f3f3f3;
}

#box7 {
    width: 140px;
    height: 65px;
    margin-bottom: 10px;
    background-color: #f3f3f3;
}

#box8 {
    width: 140px;
    height: 65px;
    margin-bottom: 10px;
    background-color: #f3f3f3;
}

#box9 {
    width: 140px;
    height: 65px;
    margin-bottom: 10px;
    background-color: #f3f3f3;
}

#box10 {
    width: 140px;
    height: 65px;
    margin-bottom: 10px;
    background-color: #f3f3f3;
}

#box11 {
    width: 140px;
    height: 210px;
    background-color: #f3f3f3;
}

#box12 {
    width: 140px;
    height: 210px;
    background-color: #f3f3f3;
}

#box13 {
    width: 140px;
    height: 210px;
    background-color: #f3f3f3;
}

#box14 {
    width: 140px;
    height: 210px;
    background-color: #f3f3f3;
}

#box15 {
    width: 140px;
    height: 210px;
    background-color: #f3f3f3;
}

.leftContent {
    width: 350px;
    height: 70%;
    background-color: #f3f3f3;
    margin-right: 50px;
    position: relative;
}

.leftContent:after {
    position: absolute;
    content: "";
    background: #f3f3f3;
    width: 350px;
    height: 33.5%;
    margin-top: 283px;
}

.rightContent {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#row1 {
    height: 30px;
    width: 278px;
    background-color: #f3f3f3;
}

#row2 {
    height: 30px;
    width: 285px;
    background-color: #f3f3f3;
}

#row3 {
    height: 30px;
    width: 213px;
    background-color: #f3f3f3;
}

#row4 {
    height: 30px;
    width: 286px;
    background-color: #f3f3f3;
}

#row5 {
    height: 30px;
    width: 211px;
    background-color: #f3f3f3;
}

#row6 {
    height: 30px;
    width: 215px;
    background-color: #f3f3f3;
}

#row7 {
    height: 30px;
    width: 258px;
    background-color: #f3f3f3;
}

#spaceBetween {
    flex-direction: column;
}

.topContent {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    width: 100%;
    height: 190px;
    justify-content: space-between;
}

.bottomContent {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 150px;
}

.row {
    width: 100%;
    height: 30px;
    background-color: #f3f3f3;
}

.person {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 160px;
    height: 100px;
    background-color: #f3f3f3;
    position: relative;
    margin-top: 20px;
}

.person:after {
    position: absolute;
    content: "";
    width: 160px;
    background: #f3f3f3;
    height: 20px;
    margin-top: 120px;
}

.line1 {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 1000px;
    height: 50px;
    padding: 0 12px;
    box-sizing: border-box;
}

.line1 p {
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 17px;
    color: #6c7073;
}

.line1 #time {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    cursor: pointer;
    align-items: center;
    position: relative;
}

.line1 #time p {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 11px;
    color: #a1a9af;
}

.line2 {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: space-around;
    width: 1000px;
}

.cardEvent {
    width: 170px;
    height: 110px;
    border-radius: 10px;
    background-color: #FFFFFF;
    box-shadow: 0 15px 15px #f7f7f7;
    padding-left: 23px;
    padding-top: 20px;
    box-sizing: border-box;
}

.cardEvent p:nth-of-type(1) {
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    font-size: 11px;
    color: #6a6a6a;
}

.cardEvent p:nth-of-type(2) {
    font-family: "Nunito", sans-serif;
    font-size: 10px;
    color: #a9a9a9;
}

.circle {
    width: 12px;
    height: 12px;
    border-radius: 20px;
    border-style: solid;
    margin-bottom: 25px;
}

#red {
    border-color: #FF442B;
}

#blue {
    border-color: #54C2FF;
}

#green {
    border-color: #40DE8A;
}

#orange {
    border-color: #FF9816;
}

.line3 {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 1000px;
    margin-top: 40px;
    padding-bottom: 40px;
}

.cardSpecific {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    cursor: pointer;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    width: 170px;
    height: 220px;
    border-radius: 10px;
    background-color: #FFFFFF;
    box-shadow: 0 15px 15px #f7f7f7;
    padding-left: 23px;
    padding-top: 21px;
    padding-bottom: 21px;
    box-sizing: border-box;
    position: relative;
    -moz-transform: perspective(800px) rotateY(0deg);
    -webkit-transform: perspective(800px) rotateY(0deg);
    -o-transform: perspective(800px) rotateY(0deg);
    -ms-transform: perspective(800px) rotateY(0deg);
    transform: perspective(800px) rotateY(0deg);
    -webkit-transition: all 370ms ease;
    -moz-transition: all 370ms ease;
    -ms-transition: all 370ms ease;
    -o-transition: all 370ms ease;
    transition: all 370ms ease;
}

.cardSpecific.rotate {
    -moz-transform: perspective(800px) rotateY(180deg);
    -webkit-transform: perspective(800px) rotateY(180deg);
    -o-transform: perspective(800px) rotateY(180deg);
    -ms-transform: perspective(800px) rotateY(180deg);
    transform: perspective(800px) rotateY(180deg);
}

.cardSpecific:after {
    position: absolute;
    content: "";
    width: 2px;
    height: 22px;
    border-radius: 2px;
    left: -2px;
    top: 25px;
}

.cardSpecific:nth-of-type(1):after {
    background: #FF442B;
}

.cardSpecific:nth-of-type(2):after {
    background: #54C2FF;
}

.cardSpecific:nth-of-type(3):after {
    background: #40DE8A;
}

.cardSpecific:nth-of-type(4):after {
    background: #FF9816;
}

.left {
    font-family: Arial;
    font-weight: 400;
    font-size: 28px;
    color: #6a6a6a;
    float: left;
    height: 29px;
    align-items: baseline;
}

.right {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 27px;
    padding-left: 5px;
    padding-top: 2px;
    box-sizing: border-box;
}

.right p:nth-of-type(1) {
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    font-size: 11px;
    color: #6a6a6a;
}

.right p:nth-of-type(2) {
    font-family: "Nunito", sans-serif;
    font-size: 9px;
    color: #a9a9a9;
}

.bottom {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    clear: left;
    flex-direction: column;
    justify-content: flex-end;
    padding-right: 23px;
}

.desc {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 5px;
    padding-top: 2px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

.desc p:nth-of-type(1) {
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    font-size: 11px;
    color: #6a6a6a;
}

.desc p:nth-of-type(2) {
    font-family: "Nunito", sans-serif;
    font-size: 9px;
    margin-top: 3px;
    color: #a9a9a9;
}

.attendees {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
}

.pic {
    width: 26px;
    height: 26px;
    border-radius: 7px;
    background-color: rgba(106, 106, 106, 0.15);
}

.back {
    z-index: -1;
    opacity: 0;
    width: 170px;
    height: 220px;
    border-radius: 10px;
    left: 0;
    top: 0;
    background-color: #ffffff;
    position: absolute;
    padding: 28px 27px;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    box-sizing: border-box;
    -moz-transform: scale(-1, 1);
    -webkit-transform: scale(-1, 1);
    -o-transform: scale(-1, 1);
    -ms-transform: scale(-1, 1);
    transform: scale(-1, 1);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    animation-name: rotateBack;
    animation-duration: 370ms;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-animation-play-state: paused;
}

.back p:first-of-type {
    font-size: 13px;
    margin-bottom: 12px;
    color: #2d2d2d;
}

.back p:last-of-type {
    font-size: 11px;
    color: #6a6a6a;
}

.back.showBack {
    z-index: 1;
    animation-name: rotate;
    animation-duration: 370ms;
}

@keyframes rotate {
    0% {
        opacity: 0;
    }

    30% {
        opacity: 0;
    }

    31% {
        opacity: 1;
    }

    100% {
        opacity: 1;
    }
}

@keyframes rotateBack {
    0% {
        z-index: 1;
        opacity: 1;
    }

    30% {
        z-index: 1;
        opacity: 1;
    }

    31% {
        z-index: -1;
        opacity: 0;
    }

    100% {
        z-index: -1;
        opacity: 0;
    }
}

#a4,
#a8,
#a12,
#a16 {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    font-size: 11px;
    color: #ffffff;
}

#a4 {
    background: -webkit-gradient(linear, left top, right bottom, from(#FD4026), to(#F02305));
}

#a4:before {
    content: "+8";
}

#a8 {
    background: -webkit-gradient(linear, left top, right bottom, from(#72DAFF), to(#28E2FF));
}

#a8:before {
    content: "+4";
}

#a12 {
    background: -webkit-gradient(linear, left top, right bottom, from(#6CFF86), to(#40EC8F));
}

#a12:before {
    content: "+5";
}

#a16 {
    background: -webkit-gradient(linear, left top, right bottom, from(#FAD54D), to(#F6BC22));
}

#a16:before {
    content: "+8";
}
</style>

<template>
    <div >
        <div id="menu" class="flex items-center justify-center space-x-8 p-8 font-['Nunito', 'Open_Sans']">
            <div @click="active_tab=1" class="cursor-pointer" :class="{'border-b-2 border-[#FFA800]': active_tab==1 }">Today</div>
            <div @click="active_tab=2" class="cursor-pointer" :class="{'border-b-2 border-[#FFA800]': active_tab==2 }">Planning</div>
            <div @click="active_tab=3" class="cursor-pointer" :class="{'border-b-2 border-[#FFA800]': active_tab==3 }">Contacts</div>
            <div @click="active_tab=4" class="cursor-pointer" :class="{'border-b-2 border-[#FFA800]': active_tab==4 }">Events</div>
        </div>
        <div id="wrapper">
            <div class="ml-20">
                <div v-if="active_tab==1" id="page1" class="transition duration-150 ease-out">
                    <div class="line1">
                        <p>Today</p>
                    </div>
                    <div class="pageContent">
                        <div class="leftContent"></div>
                        <div class="rightContent">
                            <div id="row1"></div>
                            <div id="row2"></div>
                            <div id="row3"></div>
                            <div id="row4"></div>
                            <div id="row5"></div>
                            <div id="row6"></div>
                            <div id="row7"></div>
                        </div>
                    </div>
                </div>
                <div v-if="active_tab==2" id="page2" class="transition duration-150 ease-out">
                    <div class="line1">
                        <p>Planning</p>
                    </div>
                    <div class="pageContent" id="wrap">
                        <div id="box1"></div>
                        <div id="box2"></div>
                        <div id="box3"></div>
                        <div id="box4"></div>
                        <div id="box5"></div>
                        <div id="box6"></div>
                        <div id="box7"></div>
                        <div id="box8"></div>
                        <div id="box9"></div>
                        <div id="box10"></div>
                        <div id="box11"></div>
                        <div id="box12"></div>
                        <div id="box13"></div>
                        <div id="box14"></div>
                        <div id="box15"></div>
                    </div>
                </div>
                <div v-if="active_tab==3" id="page3" class="transition duration-150 ease-out">
                    <div class="line1">
                        <p>Contacts</p>
                    </div>
                    <div class="pageContent" id="spaceBetween">
                        <div class="topContent">
                            <div class="person"></div>
                            <div class="person"></div>
                            <div class="person"></div>
                            <div class="person"></div>
                        </div>
                        <div class="bottomContent">
                            <div class="row"></div>
                            <div class="row"></div>
                            <div class="row"></div>
                            <div class="row"></div>
                        </div>
                    </div>
                </div>
                <div v-if="active_tab==4" id="page4" class="transition duration-150 ease-out">
                    <div class="line1">
                        <p>Popular Events</p>
                        <div id="time">
                            <p>This Month</p>
                            <div class="arrowWrapper" id="timeArrow">
                                <svg class="arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 451.847 451.847">
                                    <path
                                        d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751 c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0 c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="line2">
                        <div class="cardEvent">
                            <div class="circle" id="red"></div>
                            <p>Designer's Events</p>
                            <p>22 Events</p>
                        </div>
                        <div class="cardEvent">
                            <div class="circle" id="blue"></div>
                            <p>Corporate Events</p>
                            <p>46 Events</p>
                        </div>
                        <div class="cardEvent">
                            <div class="circle" id="green"></div>
                            <p>Tech Events</p>
                            <p>30 Events</p>
                        </div>
                        <div class="cardEvent">
                            <div class="circle" id="orange"></div>
                            <p>Entertainment Events</p>
                            <p>88 Events</p>
                        </div>
                    </div>
                    <div class="line3">
                        <div class="cardSpecific">
                            <div class="date">
                                <div class="left">12</div>
                                <div class="right">
                                    <p>saturday</p>
                                    <p>december 2018</p>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="desc">
                                    <p>Dribbble Meetup</p>
                                    <p>Starts at 6:30 P.M.</p>
                                </div>
                                <div class="attendees">
                                    <div class="pic" id="a1"></div>
                                    <div class="pic" id="a2"></div>
                                    <div class="pic" id="a3"></div>
                                    <div class="pic" id="a4"></div>
                                </div>
                            </div>
                            <div class="back">
                                <p>Meetups</p>
                                <p>Dribbble Meetups are a chance for designers to socialize, talk shop, and foster
                                    their local design communities.</p>
                            </div>
                        </div>
                        <div class="cardSpecific">
                            <div class="date">
                                <div class="left">15</div>
                                <div class="right">
                                    <p>tuesday</p>
                                    <p>december 2018</p>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="desc">
                                    <p>Mercedes Benz Fashion Week 17-18</p>
                                    <p>Starts at 8:30 P.M.</p>
                                </div>
                                <div class="attendees">
                                    <div class="pic" id="a5"></div>
                                    <div class="pic" id="a6"></div>
                                    <div class="pic" id="a7"></div>
                                    <div class="pic" id="a8"></div>
                                </div>
                            </div>
                            <div class="back">
                                <p>Fashion Week</p>
                                <p>Mercedes-Benz Fashion Week was a series of international fashion weeks sponsored
                                    by Mercedes-Benz and produced by IMG.</p>
                            </div>
                        </div>
                        <div class="cardSpecific">
                            <div class="date">
                                <div class="left">18</div>
                                <div class="right">
                                    <p>friday</p>
                                    <p>december 2018</p>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="desc">
                                    <p>Apple Special Keynote</p>
                                    <p>Starts at 9:30 A.M.</p>
                                </div>
                                <div class="attendees">
                                    <div class="pic" id="a9"></div>
                                    <div class="pic" id="a10"></div>
                                    <div class="pic" id="a11"></div>
                                    <div class="pic" id="a12"></div>
                                </div>
                            </div>
                            <div class="back">
                                <p>Apple Special Event</p>
                                <p>Announcements included a new generation of iPhone, Apple Watch with cellular
                                    connectivity, Apple TV 4K, and much more.</p>
                            </div>
                        </div>
                        <div class="cardSpecific">
                            <div class="date">
                                <div class="left">21</div>
                                <div class="right">
                                    <p>monday</p>
                                    <p>december 2018</p>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="desc">
                                    <p>Dribbble Meetup</p>
                                    <p>Starts at 6:30 P.M.</p>
                                </div>
                                <div class="attendees">
                                    <div class="pic" id="a13"></div>
                                    <div class="pic" id="a14"></div>
                                    <div class="pic" id="a15"></div>
                                    <div class="pic" id="a16"></div>
                                </div>
                            </div>
                            <div class="back">
                                <p>Meetups</p>
                                <p>Dribbble Meetups are a chance for designers to socialize, talk shop, and foster
                                    their local design communities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

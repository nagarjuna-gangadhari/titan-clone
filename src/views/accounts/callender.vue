
<style>


h1,
h2,
h3,
h4,
h5,
h6 {
  -webkit-font-smoothing: antialiased;
}

/* p,
span,
ul,
li {
  color: #2d4338;
  font-weight: 100;
  -webkit-font-smoothing: subpixel-antialiased;
  font-size: 1rem;
} */

.calendar-contain {
  position: relative;
  left: 0;
  right: 0;
  border-radius: 0;
  width: 100%;
  overflow: hidden;
  /* max-width: 1020px; */
  min-width: 450px;
  padding: 25px;
  background-color: #f5f7f6;
  box-shadow: 5px 5px 72px rgba(30, 46, 50, 0.5);
  color: #040605;
}
@media screen and (min-width: 55em) {
  .calendar-contain {
    margin: auto;
    top: 5%;
  }
}

.title-bar {
  position: relative;
  width: 100%;
  display: table;
  text-align: right;
  background: #f5f7f6;
  padding: 0.5rem;
  margin-bottom: 0;
}
.title-bar:after {
  display: table;
  clear: both;
}

.title-bar__burger {
  display: block;
  position: relative;
  float: left;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 38px;
  height: 30px;
  font-size: 0;
  text-indent: -9999px;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  box-shadow: none;
  border-radius: none;
  border: none;
  cursor: pointer;
  background: none;
}
.title-bar__burger:focus {
  outline: none;
}

.burger__lines {
  display: block;
  position: absolute;
  width: 18px;
  top: 15px;
  left: 0;
  right: 0;
  margin: auto;
  height: 1px;
  background: #040605;
}
.burger__lines:before, .burger__lines:after {
  position: absolute;
  display: block;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #040605;
  content: "";
}
.burger__lines:before {
  top: -5px;
}
.burger__lines:after {
  bottom: -5px;
}

.title-bar__year {
  display: block;
  position: relative;
  float: left;
  font-size: 1rem;
  line-height: 30px;
  width: 43%;
  padding: 0 0.5rem;
  text-align: left;
}
@media screen and (min-width: 55em) {
  .title-bar__year {
    width: 27%;
  }
}

.title-bar__month {
  position: relative;
  float: left;
  font-size: 1rem;
  line-height: 30px;
  width: 22%;
  padding: 0 0.5rem;
  text-align: left;
}
@media screen and (min-width: 55em) {
  .title-bar__month {
    width: 12%;
  }
}
.title-bar__month:after {
  content: "";
  display: inline;
  position: absolute;
  width: 10px;
  height: 10px;
  right: 0;
  top: 5px;
  margin: auto;
  border-top: 1px solid black;
  border-right: 1px solid black;
  transform: rotate(135deg);
}

.title-bar__minimize,
.title-bar__maximize,
.title-bar__close {
  position: relative;
  float: left;
  width: 34px;
  height: 34px;
}
.title-bar__minimize:before, .title-bar__minimize:after,
.title-bar__maximize:before,
.title-bar__maximize:after,
.title-bar__close:before,
.title-bar__close:after {
  top: 30%;
  right: 30%;
  bottom: 30%;
  left: 30%;
  content: " ";
  position: absolute;
  border-color: #8e8e8e;
  border-style: solid;
  border-width: 0 0 2px 0;
}

.title-bar .title-bar__controls {
  display: inline-block;
  vertical-align: top;
  position: relative;
  float: right;
  width: auto;
}
.title-bar .title-bar__controls:before, .title-bar .title-bar__controls:after {
  content: none;
}

.title-bar .title-bar__minimize:before {
  border-bottom-width: 2px;
}

.title-bar .title-bar__maximize:before {
  border-width: 1px 1px 2px 1px;
}

.title-bar .title-bar__close:before,
.title-bar .title-bar__close:after {
  bottom: 50%;
  top: 49.9%;
}

.title-bar .title-bar__close:before {
  transform: rotate(45deg);
}

.title-bar .title-bar__close:after {
  transform: rotate(-45deg);
}

.calendar__sidebar {
  width: 100%;
  margin: 0 auto;
  float: none;
  background: linear-gradient(120deg, #eff3f3, #e1e7e8);
  /* padding-bottom: 0.7rem; */
}
@media screen and (min-width: 55em) {
  .calendar__sidebar {
    position: absolute;
    height: 100%;
    width: 30%;
    float: left;
    margin-bottom: 0;
  }
}

.calendar__sidebar .content {
  padding: 2rem 1.5rem 2rem 4rem;
  color: #040605;
}

.sidebar__nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.9rem;
  padding: 0.7rem 1rem;
  background-color: #f5f7f6;
}

.sidebar__nav-item {
  display: inline-block;
  width: 22px;
  margin-right: 23px;
  padding: 0;
  opacity: 0.8;
}

.sidebar__list {
  list-style: none;
  margin: 0;
  padding-left: 1rem;
  padding-right: 1rem;
}

.sidebar__list-item {
  margin: 1.2rem 0;
  color: #2d4338;
  font-weight: 100;
  font-size: 1rem;
}

.list-item__time {
  display: inline-block;
  width: 60px;
}
@media screen and (min-width: 55em) {
  .list-item__time {
    margin-right: 2rem;
  }
}

.sidebar__list-item--complete {
  color: rgba(4, 6, 5, 0.3);
}
.sidebar__list-item--complete .list-item__time {
  color: rgba(4, 6, 5, 0.3);
}

.sidebar__heading {
  font-size: 2.2rem;
  font-weight: bold;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 3rem;
  margin-top: 1rem;
}
.sidebar__heading span {
  float: right;
  font-weight: 300;
}

.calendar__heading-highlight {
  color: #2d444a;
  font-weight: 900;
}

.calendar__days {
  display: flex;
  flex-flow: column wrap;
  align-items: stretch;
  width: 100%;
  float: none;
  min-height: 580px;
  height: 100%;
  font-size: 12px;
  padding: 0.8rem 0 1rem 1rem;
  background: #f5f7f6;
}
@media screen and (min-width: 55em) {
  .calendar__days {
    width: 70%;
    float: right;
  }
}

.calendar__top-bar {
  display: flex;
  flex: 32px 0 0;
}

.top-bar__days {
  width: 100%;
  padding: 0 5px;
  color: #2d4338;
  font-weight: 100;
  -webkit-font-smoothing: subpixel-antialiased;
  font-size: 1rem;
}

.calendar__week {
  display: flex;
  flex: 1 1 0;
}

.calendar__day {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 100%;
  padding: 1.9rem 0.2rem 0.2rem;
}

.calendar__date {
  color: #040605;
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 0.7;
}
@media screen and (min-width: 55em) {
  .calendar__date {
    font-size: 2.3rem;
  }
}

.calendar__week .inactive .calendar__date,
.calendar__week .inactive .task-count {
  color: #c6c6c6;
}
.calendar__week .today .calendar__date {
  color: #fd588a;
}

.calendar__task {
  color: #040605;
  display: flex;
  font-size: 0.8rem;
}
@media screen and (min-width: 55em) {
  .calendar__task {
    font-size: 1rem;
  }
}
.calendar__task.calendar__task--today {
  color: #fd588a;
}
</style>

<template>
    <div class="">
        <main class="calendar-contain">

            <!-- <section class="title-bar">
            <button class="title-bar__burger">
                <span class="burger__lines">Toggle Menu</span>
            </button>
            <span class="title-bar__year">
                Calendar > May 2017
            </span>
            <span class="title-bar__month">
                Month
            </span>
            <div class="title-bar__controls">
                <div class="title-bar__minimize"></div>
                <div class="title-bar__maximize"></div>
                <div class="title-bar__close"></div>
            </div>
            </section> -->

            <aside class="calendar__sidebar">
            <div class="sidebar__nav">
                <!-- Icons by Icons8 -->
                <span class="sidebar__nav-item"><img class="icon icons8-Plus-Math" width="22px" height="22px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAWUlEQVRYR+2WMQoAIAgA9f+PrsWmEMQSEa7Z8rzEUmle2pxfABhvYFkPpQtJb7TEAGAAAxgoM3AO/v1YXoPPm4TtANHKy64AAAxgAANjDERB3bjXXzEA8w1s3k4WIU0YaEoAAAAASUVORK5CYII="></span>
                <span class="sidebar__nav-item"><img class="icon icons8-Share" width="22px" height="22px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB+klEQVRYR+2W0VEdMQxFDxUQKoBUkFABUAFQAaGDUEFCBQkVABUAFRAqgFRAUgFQQTJnxprx2/V67f3h5+nnzfNK8vXVteQN3tk23nl/1gCWMrAD/AD2UwlvgTPgtbekSwB8AJ4Bf3Nz84+9IJYAuAJOgAfgKGNgD7gGvvSwsATAH2Ab2MpOKxsvgN9kodl6AHha6279tRyAa5ZFE4R6UBez1gogaM8T/gKO08JNJsjw+ZmAVEG0AMg3Pwf8/wRsDjK/AZ+TBr6lbxfA1xqCOQDS7um0A8BTa1L+fSBC/0u/lsfJ0mQ55gCE4KyplPaYJ1czVWHWAHidLoG/mfB6AIQgvTGnqXSj+BoAaTusBTegCRbusnKthNUABP157Rv2XHGxVd/XylAD8C+lmtNJDVQ0KH2KeaaSDxuL104hhsrnmIhh5bWMxmWHHMWXABjwODFsdhtAdMWXANSGzaSYMkpCvE3DqgQgar902DiW7ZKl+JEWSgBKCUITttvhO2Coh1r8qKeUAASFpWHTMu+jhKX4UQmnRFgaNp7Ufu9Aqpk+MYxyP9mTyZVnW+0a2vu9RrZSBeWLJ9qr31wTqKaf3+18ce0iRtr1s7WP3ow9TcauJr0CqpkbullMzqpzD4BIZHLBeOpPafF3OqWbCrLZlgBoTt7iuAawZuA/xAh3Ifk/Dm0AAAAASUVORK5CYII="></span>
                <span class="sidebar__nav-item"><img class="icon icons8-Up" width="22px" height="22px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAxklEQVRYR+3VwQ2DMAyF4Z8NOkI36AodpZ2sjMAoHaWdoJWlIEXI4RHnwMWROAH2ZxuSiZPXdHJ+EjDagUcZ4Rwd5QjAkr9K4icQQkQBdfK1+BAiAvCShxG9gG3b6xGExtED8Gb+K6VbnNA3cRTQCl4DzNKNOALYC7oFdCMUQFXkAboQCvAGbkDrF2sBasQXuAIfb7NSgAtwB5bGTrcHWBFWhF3uUgC1wyqAen/4NExAdiA7kB3IDmQH5GGjHhg9DVV8eT8Bf2HqNiEP+isaAAAAAElFTkSuQmCC"></span>
                <span class="sidebar__nav-item"><img class="icon icons8-Down" width="22px" height="22px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA4UlEQVRYR+2WgQnCMBBFXzdwBSdwBUfRyXQER3EUN1AOEgnxLrkkhYCkUFpI7/+Xf1fajcnHNtmfBTCawDu0sFunuzAYL4CVwEpgJbAS+P8EDsAZeBj/DbUELsAznKpE7WMkxSfgCtwVhRKAmN+AF3AM1x+JGkAUkUINwgKo1X1BagDyYElMA3Cbi7gHoASRAzSZtwBYEClAs3krgAYhQxbnI73XBrbrLdCK0p3m69bbYv79e2cgF9Agms17WpCCdPU830lvAlFHIORw93xvALO33oXRBLw+uw/hsHEUmJ7ABzErNiGyzfJcAAAAAElFTkSuQmCC"></span>
            </div>
            <h2 class="sidebar__heading">Wednesday<br>April 6</h2>
            <ul class="sidebar__list">
                <li class="sidebar__list-item sidebar__list-item--complete"><span class="list-item__time">8.30</span> Team Meeting</li>
                <li class="sidebar__list-item sidebar__list-item--complete"><span class="list-item__time">10.00</span> Lunch with Sasha</li>
                <li class="sidebar__list-item"><span class="list-item__time">2.30</span> Design Review</li>
                <li class="sidebar__list-item"><span class="list-item__time">4.00</span> Get Groceries</li>
            </ul>
            </aside>


            <section class="calendar__days">
            <section class="calendar__top-bar">
                <span class="top-bar__days">Mon</span>
                <span class="top-bar__days">Tue</span>
                <span class="top-bar__days">Wed</span>
                <span class="top-bar__days">Thu</span>
                <span class="top-bar__days">Fri</span>
                <span class="top-bar__days">Sat</span>
                <span class="top-bar__days">Sun</span>
            </section>

            <section class="calendar__week">
                <div class="calendar__day inactive">
                <span class="calendar__date">30</span>
                <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day inactive">
                <span class="calendar__date">31</span>
                <span class="calendar__task">4</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">1</span>
                <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">2</span>
                <span class="calendar__task">3</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">3</span>
                <span class="calendar__task">1</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">4</span>
                <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">5</span>
                <span class="calendar__task">4</span>
                </div>
            </section>

            <section class="calendar__week">
                <div class="calendar__day">
                <span class="calendar__date">6</span>
                <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">7</span>
                <span class="calendar__task">3</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">8</span>
                <span class="calendar__task">3</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">9</span>
                <span class="calendar__task">1</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">10</span>
                <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">11</span>
                <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">12</span>
                <span class="calendar__task">1</span>
                </div>
            </section>

            <section class="calendar__week">
                <div class="calendar__day">
                <span class="calendar__date">13</span>
                <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">14</span>
                <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day today">
                <span class="calendar__date">15</span>
                <span class="calendar__task calendar__task--today">4 items</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">16</span>
                <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">17</span>
                <span class="calendar__task">1</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">18</span>
                <span class="calendar__task">4</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">19</span>
                <span class="calendar__task">2</span>
                </div>
            </section>

            <section class="calendar__week">
                <div class="calendar__day">
                <span class="calendar__date">20</span>
                <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">21</span>
                <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">22</span>
                <span class="calendar__task">1</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">23</span>
                <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">24</span>
                <span class="calendar__task">5</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">25</span>
                <span class="calendar__task">3</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">26</span>
                <span class="calendar__task">1</span>
                </div>
            </section>

            <section class="calendar__week">
                <div class="calendar__day">
                <span class="calendar__date">27</span>
                <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                <span class="calendar__date">28</span>
                <span class="calendar__task">1</span>
                </div>
                <div class="calendar__day inactive">
                <span class="calendar__date">1</span>
                <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day inactive">
                <span class="calendar__date">2</span>
                <span class="calendar__task">1</span>
                </div>
                <div class="calendar__day inactive">
                <span class="calendar__date">3</span>
                <span class="calendar__task">5</span>
                </div>
                <div class="calendar__day inactive">
                <span class="calendar__date">4</span>
                <span class="calendar__task">3</span>
                </div>
                <div class="calendar__day inactive">
                <span class="calendar__date">5</span>
                <span class="calendar__task">1</span>
                </div>
            </section>
            </section>

        </main>


    </div>
</template>
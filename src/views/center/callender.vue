<style>
    :root {
  --padding: 4rem;
  --border: hsl(0, 0%, 20%);
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-size: 4rem;
}

h3 {
  font-size: 2.8rem;
}

body {
  background: #000000;
  color: #ffffff;
  font-family: system-ui, sans-serif;
}

.heading {
  line-height: 2;
  font-weight: 900;
}

.section-container {
  padding: var(--padding);
}
.section-container a {
  color: #ffffff;
}

.schedule-container {
  overflow: auto;
}

.schedule-stage__wrapper {
  display: inline-block;
}

.schedule-stage {
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  grid-gap: 2rem;
  padding-bottom: 5rem;
  padding-top: 2rem;
  min-width: 100vw;
}
.schedule-stage::after {
  content: "";
  width: var(--padding);
}

.divider {
  position: sticky;
  left: 0;
  border: none;
  border-bottom: 1px solid var(--border);
}

.schedule-stage:nth-child(1) > .schedule-stage__title > h3 {
  background: red;
  background: linear-gradient(to right, #eb3349, #f45c43);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.schedule-stage:nth-child(3) > .schedule-stage__title > h3 {
  background: red;
  background: linear-gradient(to right, #1d976c, #93f9b9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.schedule-stage__title {
  position: sticky;
  left: 0;
  padding-right: 5rem;
  height: 100%;
  padding-left: var(--padding);
  background: linear-gradient(to right, #000000 30%, rgba(0, 0, 0, 0));
}
.schedule-stage__title > h3 {
  font-weight: 900;
}

.schedule-stage_guide-container {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 280px;
  grid-gap: 2rem;
}

.guide-slot {
  color: gray;
}
.guide-slot > p {
  margin-bottom: 1rem;
}

.guide-slot_card {
  background: #0a0a0a;
  border: 1px solid var(--border);
  border-radius: 0.8rem;
  font-size: 1.4rem;
  margin-bottom: 2rem;
  padding: 1.6rem;
  cursor: pointer;
}
.guide-slot_card:hover {
  border-color: #b3b3b3;
}
.guide-slot_card > h4 {
  margin-right: 5rem;
  font-size: 1.4rem;
  color: #ffffff;
}

.author-wrapper {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}
.author-wrapper > picture {
  display: inline-block;
  inline-size: 2.6rem;
  block-size: 2.6rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  border: 1px solid var(--border);
}
.author-wrapper > picture > img {
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
}
</style>


<template>

<div class="schedule-container">
  <div class="schedule-stage__wrapper">
    <section class="schedule-stage">
      <div class="schedule-stage__title">
        <h3>Stage X</h3>
      </div>
      <div class="schedule-stage_guide-container">
        <div class="guide-slot">
          <p>8:00am - 9:00am</p>
          <div class="guide-slot_card">
            <h4>CSR, SSR, SSG, ISR and OMG.WTF?BBQ!</h4>
            <figure class="author-wrapper">
              <picture>
                <img src="https://randomuser.me/api/portraits/lego/6.jpg" alt="" />
              </picture>
              <figcaption>Ahmad Awais</figcaption>
            </figure>
          </div>
        </div>
        <div class="guide-slot">
          <p>9:00am - 10:00am</p>
          <div class="guide-slot_card">
            <h4>Changing Lanes with Lyft</h4>
            <figure class="author-wrapper">
              <picture>
                <img src="https://randomuser.me/api/portraits/lego/2.jpg" alt="" />
              </picture>
              <figcaption>Joshua Callender</figcaption>
            </figure>
          </div>
          <div class="guide-slot_card">
            <h4>Magic Authentication - The Missing LEGO Piece</h4>
            <figure class="author-wrapper">
              <picture>
                <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="" />
              </picture>
              <figcaption>Sean Li</figcaption>
            </figure>
          </div>
        </div>
        <div class="guide-slot">
          <p>10:00am - 11:00am</p>
          <div class="guide-slot_card">
            <h4>
              Introducing: Edge Slice Rerendering. Performant A/B Testing,
              Personalization, and more.
            </h4>
            <figure class="author-wrapper">
              <picture>
                <img src="https://randomuser.me/api/portraits/lego/3.jpg" alt="" />
              </picture>
              <figcaption>Jay Phelps</figcaption>
            </figure>
          </div>
        </div>
        <div class="guide-slot">
          <p>11:00am - 12:00pm</p>
          <div class="guide-slot_card">
            <h4>Everything Is a CMS</h4>
            <figure class="author-wrapper">
              <picture>
                <img src="https://randomuser.me/api/portraits/lego/5.jpg" alt="" />
              </picture>
              <figcaption>Sean C Davis</figcaption>
            </figure>
          </div>
        </div>
        <div class="guide-slot">
          <p>12:00pm - 1:00pm</p>
          <div class="guide-slot_card">
            <h4>Responsive Rendering with Next.js</h4>
            <figure class="author-wrapper">
              <picture>
                <img src="https://randomuser.me/api/portraits/lego/8.jpg" alt="" />
              </picture>
              <figcaption>Armando Gonzalez</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="schedule-stage">
      <div class="schedule-stage__title">
        <h3>Stage Y</h3>
      </div>
      <div class="schedule-stage_guide-container">
        <div class="guide-slot">
          <p>8:00am - 9:00am</p>
          <div class="guide-slot_card">
            <h4>Changing Lanes with Lyft</h4>
            <figure class="author-wrapper">
              <picture>
                <img src="https://randomuser.me/api/portraits/lego/2.jpg" alt="" />
              </picture>
              <figcaption>Joshua Callender</figcaption>
            </figure>
          </div>
          <div class="guide-slot_card">
            <h4>Magic Authentication - The Missing LEGO Piece</h4>
            <figure class="author-wrapper">
              <picture>
                <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="" />
              </picture>
              <figcaption>Sean Li</figcaption>
            </figure>
          </div>
        </div>
        <div class="guide-slot">
          <p>9:00am - 10:00am</p>
          <div class="guide-slot_card">
            <h4>CSR, SSR, SSG, ISR and OMG.WTF?BBQ!</h4>
            <figure class="author-wrapper">
              <picture>
                <img src="https://randomuser.me/api/portraits/lego/6.jpg" alt="" />
              </picture>
              <figcaption>Ahmad Awais</figcaption>
            </figure>
          </div>
        </div>
        <div class="guide-slot">
          <p>10:00am - 11:00am</p>
          <div class="guide-slot_card">
            <h4>Responsive Rendering with Next.js</h4>
            <figure class="author-wrapper">
              <picture>
                <img src="https://randomuser.me/api/portraits/lego/8.jpg" alt="" />
              </picture>
              <figcaption>Armando Gonzalez</figcaption>
            </figure>
          </div>
        </div>
        <div class="guide-slot">
          <p>11:00am - 12:00pm</p>
          <div class="guide-slot_card">
            <h4>Everything Is a CMS</h4>
            <figure class="author-wrapper">
              <picture>
                <img src="https://randomuser.me/api/portraits/lego/5.jpg" alt="" />
              </picture>
              <figcaption>Sean C Davis</figcaption>
            </figure>
          </div>
        </div>
        <div class="guide-slot">
          <p>12:00pm - 1:00pm</p>
          <div class="guide-slot_card">
            <h4>
              Introducing: Edge Slice Rerendering. Performant A/B Testing,
              Personalization, and more.
            </h4>
            <figure class="author-wrapper">
              <picture>
                <img src="https://randomuser.me/api/portraits/lego/3.jpg" alt="" />
              </picture>
              <figcaption>Jay Phelps</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
  </div>
</div>
</template>
<template>
  <div class="experience-game">
    <h2>Well, that was a hard one, but this one is impossible</h2>
    Is this information about me correct?
    <div class="list">
      <ul>
        <li>Frontend developer</li>
        <li>Worked 1 year with Angular 1.5? (but doesn't want to work with it again)</li>
        <li>Solid React experience? ({{reactExperience}} years working with it daily)</li>
        <li>Some experience with Vue (I won the
          <external-link href="https://twitter.com/aerolab/status/946100876942262272">
            <span>Aerolab coding challenge</span>
          </external-link>
          <span> with </span>
          <external-link href="https://github.com/goncy/aerolab-challenge">
            <span>a Vue project</span>
          </external-link>, also this CV is made in Vue)
        </li>
        <li>Made some projects with GraphQL and would love to make more</li>
        <li>
          Like to teach and give lessons
          (Like
          <external-link href="https://github.com/goncy/ramda-lesson">Ramda</external-link>,
          <external-link href="https://github.com/goncy/cypress-lesson">Cypress</external-link>,
          <external-link href="https://github.com/goncy/recompose-lesson">Recompose</external-link>
          , etc.)
        </li>
        <li>
          Created apps to help community
          (like
          <external-link href="https://github.com/goncy/trency">Trency</external-link>
          <span> or </span>
          <external-link href="https://github.com/goncy/mapgen">Mapgen</external-link>
          )
        </li>
        <li>
          Love to try new libs and frameworks in my free time (
          <external-link href="https://github.com/goncy">
            <span>+80 repos on GitHub</span>
          </external-link>
          )
        </li>
      </ul>
    </div>
    <div class="actions">
      <touchable @click.native="notify('Mmmmmm', 'Sure boi?')">Naw way</touchable>
      <touchable @click.native="nextStep">Is that true? Give me your contact information please</touchable>
      <touchable @click.native="notify('Sorry', 'Just press ctrl + q (cmd + q on mac), or throw away your phone if you are on mobile')">I'm {{ visitorName }}, stop wasting my time</touchable>
      <external-link href="http://bfy.tw/HTkm">
        <touchable
          class="nested"
          role="button"
        >
          I have an open JAVA position for you
        </touchable>
      </external-link>
    </div>
  </div>
</template>

<script>
import {diffInYears} from "../utils/date";

export default {
  name: "ExperienceGame",
  props: {
    notify: {
      type: Function,
      required: true,
    },
    nextStep: {
      type: Function,
      required: true,
    },
    visitorName: {
      type: String,
      default: "hacker",
    },
  },
  computed: {
    reactExperience() {
      return diffInYears("06/06/2016");
    },
  },
};
</script>

<style lang="scss" scoped>
.experience-game {
  max-width: 800px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .list {
    text-align: left;
    max-width: 640px;
    margin: 1rem 0;
    font-size: 1rem;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>

<template>
  <div class="experience-game">
    <h2>Well, that was a hard one, but this one is impossible</h2>
    Is this information about me correct?
    <div class="list">
      <ul>
        <li>Frontend developer</li>
        <li>Worked 1 year with Angular 1.5? (but doesn't want to work with it again)</li>
        <li>Solid React experience? (2.5 years working with it daily)</li>
        <li>Some experience with Vue (I won the
          <external-link href="https://twitter.com/aerolab/status/946100876942262272">
            Aerolab coding challenge
          </external-link>
          <span> with </span>
          <external-link href="https://github.com/goncy/aerolab-challenge">
            a Vue project
          </external-link>)
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
            +80 repos on GitHub
          </external-link>
          )
        </li>
      </ul>
    </div>
    <div class="actions">
      <button @click="notify('Mmmmmm', 'Sure boi?')">Naw way</button>
      <button @click="nextStep">Is that true? Give me your contact information please</button>
      <button @click="notify('Sorry', 'Just press ctrl + q (cmd + q on mac), or throw away your phone if you are on mobile')">I'm {{ visitorName }}, stop wasting my time</button>
      <external-link href="http://bfy.tw/HTkm">
        <button role="button">I have an open JAVA position for you</button>
      </external-link>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
.experience-game {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .list {
    text-align: left;
    max-width: 640px;
    margin: 1rem 0;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>

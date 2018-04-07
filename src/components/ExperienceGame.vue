<template>
  <div class="experience-game">
    <h2>Well, that was a hard one, but this one is impossible</h2>
    I'm all of this?:
    <div class="list">
      <ul>
        <li>Frontend developer</li>
        <li>Worked 1 year with Angular 1.5? (but doesn't want to work with it again)</li>
        <li>Solid React experience? (2.5 years working with it daily)</li>
        <li>Some experience with Vue (I won the <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/aerolab/status/946100876942262272"
        >Aerolab coding challenge</a>
          <span> with </span>
          <a
            href="https://github.com/goncy/aerolab-challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            a Vue project
          </a>)
        </li>
        <li>Made some projects with GraphQL and would love to make more</li>
        <li>
          Like to teach and give lessons
          (Like <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/goncy/ramda-lesson"
          >Ramda</a>,
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/goncy/cypress-lesson"
          >Cypress</a>,
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/goncy/recompose-lesson"
          >Recompose</a>, etc.)
        </li>
        <li>
          Created apps to help community
          (like <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/goncy/trency"
          >Trency</a>
          or <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/goncy/mapgen"
          >Mapgen</a>)
        </li>
        <li>
          Love to try new libs and frameworks in my free time (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/goncy"
          >
            +80 repos on GitHub
          </a>)
        </li>
      </ul>
    </div>
    <div class="actions">
      <button @click="notify('Mmmmmm', 'Sure boi?')">Naw way</button>
      <button @click="nextStep">Is that true? Give me your contact information please</button>
      <button @click="notify('Sorry', 'Just press ctrl + q (cmd + q on mac), or throw away your phone if you are on mobile')">Stop wasting my time</button>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="http://bfy.tw/HTkm"
      >
        <button role="button">I have an open JAVA position for you</button>
      </a>
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

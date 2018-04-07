<template>
  <div class="summary">
    <section>
      <div>
        <img
          class="avatar"
          src="https://placehold.it/128x128"
          alt="Gonzalo Pozzo"
        >
        <div>
          <h4>I'm Gonzalo Pozzo, a frontend developer from Buenos Aires, Argentina.</h4>
          <p>I usually work with the React / Redux stack, but i'm open to technologies like GraphQL, Elm or Vue.
          I'm 26 years old and I have a Multimedia Design degree from Escuela Davinci, I never stopped learning.</p>
        </div>
      </div>
      <i
        class="fa fa-caret-down more"
        @click="more(2)"
      />
    </section>
    <section>
      <div>
        <p>We can spend a lot of time listing every work i made, or i can give you my
          <a
            href="https://github.com/goncy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
          </a>
          and some of the main projects I made.</p>

        <p>
          Like
          <a
            href="https://github.com/goncy/trency"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Trency</span>
          </a>
          and
          <a
            href="https://github.com/goncy/trency-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>it's API</span>
          </a>
        <span>, used to locate trains in realtime for almost every station in Buenos Aires.</span></p>
        <p>
          Or
          <a
            href="https://github.com/goncy/mapgen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Mapgen</span>
          </a>
          <span>, a free service for ONGs and community services, used by fire departements, police, etc. Used also to promote 2 laws (I can talk more about this in our call tomorrow)</span>
        </p>
      </div>
      <i
        class="fa fa-caret-down more"
        @click="more(3)"
      />
    </section>
    <section>
      <div>
        <p>
          I started working on frontend in 2013, with jQuery and vanilla Javascript,
          picked Angular at mid 2014 as my first framework and
          had some clients in the meanwhile doing landings or small applications, also doing apps in AS3 (sorry, you have to know that),
        </p>
        <p>
          you can see the whole timeline in
          <a
            href="https://www.linkedin.com/in/gonzalopozzo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>my LinkedIN</span>
          </a>
        </p>
      </div>
      <i
        class="fa fa-caret-down more"
        @click="more(4)"
      />
    </section>
    <section>
      <div>
        <p>
          Then i started working at
          <a
            href="http://www.etermax.com/es/home/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Etermax</span>
          </a>
          in 2015.
        </p>
        <p>
          I learned a lot about working with a team and doing agile,
          the project was made in Backbone and Marionette (and i don't want to go back to that).
        </p>
        <p>
          I was spending 4 hours traveling to work, 2 going, 2 coming back,
          and Etermax didn't have the remote option...
        </p>
      </div>
      <i
        class="fa fa-caret-down more"
        @click="more(5)"
      />
    </section>
    <section>
      <div>
        <p>
          So, in 2016 I decided to go half-remote at
          <a
            href="http://www.madmobile.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Mad mobile</span>
          </a>
          .
        </p>
        <p>
          It was my first approach to React and i loved it.
          Have been using it everyday since, i also learnt some cool things like Redux, Redux Saga and more!
        </p>
        <p>
          Unfortunately, they didn't have full remote option neither, and i really wanted to travel around the world...
        </p>
      </div>
      <i
        class="fa fa-caret-down more"
        @click="more(6)"
      />
    </section>
    <section>
      <div>
        <p>
          So, in 2017 I decided to go full-remote at
          <a
            href="http://thenextad.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>The Next Ad</span>
          </a>
          .
        </p>
        <p>
          It was my first full remote job and I love it.
          I also went to the Amsterdam offices for 2 months and it was incredible!
        </p>
      </div>
      <i
        class="fa fa-caret-down more"
        @click="more(7)"
      />
    </section>
    <section>
      <div>
        <p>
          But i always said, i never wanted to change my job when i changed it,
          it was really hard each time,
          but a good opportunity shouldn't be missed right?
        </p>
      </div>
      <i
        class="fa fa-caret-down more"
        @click="more(8)"
      />
    </section>
    <section>
      <div>
        <p>
          Well, today is your lucky day because you can have this bad boy,
          rockstar frontend developer working at your company for just a good project!
        </p>
        <small class="tiny">And a lot of money, but we will discuss that in our call tomorrow</small>
      </div>
      <i
        class="fa fa-caret-down more"
        @click="more(9)"
      />
    </section>
    <section>
      <div>
        <p>
          Now you know a lot about me, let me know something about you at
        </p>
        <p>
          List
        </p>
        <p>
          See you tomorrow!
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    more: function(section) {
      window.scroll({
        top: (section - 1) * window.innerHeight,
        behavior: "smooth",
      });
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../styles/variables.scss";

.summary {
  section {
    box-sizing: border-box;
    padding: 2rem;
    min-height: 100vh;
    font-size: 1rem;
    background: $primary;
    color: $white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    .more {
      color: $white;
      position: absolute;
      bottom: 0;
      font-size: 48px;
      animation: float 4s ease-in-out infinite;
    }

    &:nth-child(odd) {
      background: $white;
      color: $black;

      .more {
        color: $primary;
      }
    }
  }

  .avatar {
    border-radius: 50%;
    border: 3px solid $primary;
    margin-bottom: 12px;
  }
}
</style>

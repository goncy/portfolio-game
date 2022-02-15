<template>
  <div class="summary">
    <section>
      <div class="content">
        <img
          class="avatar"
          src="../assets/faces/me.jpg"
          alt="Gonzalo Pozzo"
        />
        <div>
          <h4>I'm Gonzalo Pozzo, a frontend developer from Buenos Aires, Argentina.</h4>
          <p>I usually work with the React / Redux stack, but i'm open to technologies like GraphQL, Elm or Vue.
          I'm {{birthday}} years old and I have a Multimedia Design degree from Escuela Davinci, I never stopped learning.</p>
        </div>
      </div>
      <i
        class="fa fa-caret-down more"
        @click="more(2)"
      />
    </section>
    <section>
      <div class="content">
        <p>We can spend a lot of time listing every work I made, or I can give you my
          <external-link
            href="https://github.com/goncy"
          > <span>GitHub</span>
          </external-link>
          and some of the main projects I made.</p>

        <p>
          Like
          <external-link
            href="https://github.com/goncy/trency"
          > <span>Trency</span>
          </external-link>
          and
          <external-link
            href="https://github.com/goncy/trency-api"
          > <span>it's API</span>
          </external-link>
        <span>, used to locate trains in realtime for almost every station in Buenos Aires.</span></p>
        <p>
          Or
          <external-link
            href="https://github.com/goncy/mapgen"
          > <span>Mapgen</span>
          </external-link>
          <span>, a free service for NGOs and community services, used by fire departements, police, etc. Used also to promote 2 laws (I can talk more about this in <external-link href="https://calendly.com/goncy/15"><span>our call tomorrow</span></external-link>)</span>
        </p>
      </div>
      <i
        class="fa fa-caret-down more"
        @click="more(3)"
      />
    </section>
    <section>
      <div class="content">
        <p>
          I started working on frontend in 2013, with jQuery and vanilla Javascript,
          picked Angular at mid 2014 as my first framework and
          had some clients in the meanwhile doing landings or small applications, also doing apps in AS3 (sorry, you have to know that),
        </p>
        <p>
          you can see the whole timeline in
          <external-link href="https://www.linkedin.com/in/gonzalopozzo/">
            <span>my LinkedIN</span>
          </external-link>
        </p>
      </div>
      <i
        class="fa fa-caret-down more"
        @click="more(4)"
      />
    </section>
    <section>
      <div class="content">
        <p>
          Then I started working at
          <external-link href="http://www.etermax.com/es/home/">
            <span>Etermax</span>
          </external-link>
          in 2015.
        </p>
        <p>
          I learned a lot about working with a team and doing agile,
          the project was made in Backbone and Marionette (and I don't want to go back to that).
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
      <div class="content">
        <p>
          So, in 2016 I decided to go half-remote at <external-link href="http://www.madmobile.com/">Mad mobile</external-link>.
        </p>
        <p>
          It was my first approach to React and I loved it.
          Have been using it everyday since, I also learnt some cool things like Redux, Redux Saga and more!
        </p>
        <p>
          Unfortunately, they didn't have full remote option neither, and I really wanted to travel around the world...
        </p>
      </div>
      <i
        class="fa fa-caret-down more"
        @click="more(6)"
      />
    </section>
    <section>
      <div class="content">
        <p>
          So, in 2017 I decided to go full remote at <external-link href="http://thenextad.com/">The Next Ad</external-link>.
        </p>
        <p>
          It was my first full remote job and I loved it.
          I also went to the Amsterdam offices for 2 months and it was incredible!
        </p>
      </div>
      <i
        class="fa fa-caret-down more"
        @click="more(7)"
      />
    </section>
    <section>
      <div class="content">
        <p>
          In 2018 I started generating content, on <external-link href="https://twitter.com/goncy">Twitter</external-link>, <external-link href="https://twitch.tv/goncypozzo">Twitch</external-link>, <external-link href="https://blog.gonzalopozzo.com">my personal blog</external-link>, and I became a <external-link href="https://cypress.io/ambassadors/">Cypress.io Ambassador</external-link>!.
        </p>
        <p>
          My path as a speaker also started and I even left my province for giving conferences (which was a big thing to me).
        </p>
      </div>
      <i
        class="fa fa-caret-down more"
        @click="more(8)"
      />
    </section>
    <section>
      <div class="content">
        <p>
          From 2019 to 2021 I worked at <external-link href="https://tradehelm.com/">Tradehelm</external-link>.
        </p>
        <p>
          Met great people, made great progress on my professional career, learning new technologies, working with different architectures and being involved in challenges I have never been before.
        </p>
      </div>
      <i
        class="fa fa-caret-down more"
        @click="more(9)"
      />
    </section>
    <section>
      <div class="content">
        <p>
          In 2021 I made a master plan to get an interview at <external-link href="https://vercel.com/">Vercel</external-link>, and I made it!.
        </p>
        <p>
          Since then I have been working as a Solutions Architect, learning lot of new things, super happy.
        </p>
      </div>
      <i
        class="fa fa-caret-down more"
        @click="more(10)"
      />
    </section>
    <section>
      <div class="content">
        <p>
          I never wanted to change my job when I changed it,
          it was really hard each time.
          But a good opportunity shouldn't be missed right?
        </p>
      </div>
      <i
        class="fa fa-caret-down more"
        @click="more(11)"
      />
    </section>
    <section>
      <div class="content">
        <p>
          Well, today is your lucky day because you can have this bad boy,
          rockstar frontend developer working at your company for just a good project!
        </p>
        <small class="tiny">And a lot of money, but we will discuss that in our call tomorrow</small>
      </div>
      <i
        class="fa fa-caret-down more"
        @click="more(12)"
      />
    </section>
    <section>
      <div class="content">
        <p>
          Now you know a lot about me, let me know something about you at
        </p>
        <div class="medias">
          <external-link href="mailto:gonzalo.pozzo4@gmail.com">
            <i class="fa fa-envelope"/>
          </external-link>
          <external-link href="https://www.linkedin.com/in/gonzalopozzo/">
            <i class="fa fa-linkedin-square"/>
          </external-link>
          <external-link href="tel:5491141634695">
            <i class="fa fa-phone-square"/>
          </external-link>
          <external-link href="skype:gonzalo.pozzo4?userinfo">
            <i class="fa fa-skype"/>
          </external-link>
          <external-link href="https://github.com/goncy">
            <i class="fa fa-github"/>
          </external-link>
          <external-link href="https://twitter.com/goncy">
            <i class="fa fa-twitter"/>
          </external-link>
          <external-link href="https://twitch.tv/goncypozzo">
            <i class="fa fa-twitch"/>
          </external-link>
        </div>
        <p>
          See you tomorrow {{ visitorName }}!
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import {diffInYears} from "../utils/date"

export default {
  props: {
    visitorName: {
      type: String,
      default: "hacker",
    },
  },
  methods: {
    more: function(section) {
      window.scroll({
        top: (section - 1) * window.innerHeight,
        behavior: "smooth",
      });
    },
  },
  computed: {
    birthday: function() {
      return diffInYears("04/05/1992")
    }
  }
};
</script>


<style lang="scss" scoped>
.summary {
  max-width: 100vw;

  section {
    box-sizing: border-box;
    padding: 2rem;
    min-height: 100vh;
    font-size: 1rem;
    background-color: var(--primary);
    will-change: background-color;
    transition: background-color 0.2s;
    color: var(--light);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    .content {
      max-width: 640px;
      font-size: 1.125rem;
    }

    .more {
      color: var(--light);
      position: absolute;
      bottom: 0;
      font-size: 48px;
      animation: float 4s ease-in-out infinite;
    }

    &:nth-child(odd) {
      background: var(--light);
      color: var(--black);

      .more {
        color: var(--primary);
        will-change: color;
        transition: color 0.2s;
      }
    }
  }

  .avatar {
    border-radius: 50%;
    border: 3px solid var(--primary);
    margin-bottom: 12px;
    will-change: border-color;
    transition: border-color 0.2s;
    max-width: 150px;
    max-height: 150px;
  }

  .medias {
    a {
      font-size: 2.5rem;
      padding: 6px;
      color: var(--light);
      will-change: color;
      transition: color 0.2s;

      .fa.fa-twitch {
        font-size: 2.2rem;
      }
    }
  }
}
</style>

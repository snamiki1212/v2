<div class="footer">
  <div class="footer__message">Opportunity only knocks once.</div>
  <div class="footer-bottom">
    <div class="footer-bottom__source">
      This site is managed in here <a href="https://github.com/snamiki1212/v2"
        >GitHub</a
      >.
    </div>
    <hr class="footer-bottom__horizon" />
    <div class="footer-bottom__copyright">
      <div>© 2021 NamikiShun a.k.a Nash</div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "https://fonts.googleapis.com/css?family=Reenie+Beanie";
  .footer {
    min-height: 50vh;
    background: var(--black);
    opacity: 0.7;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__message {
      margin: 5rem;
      font-family: "Reenie Beanie";
      font-size: 3rem;
    }
  }

  .footer-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__horizon {
      border: 1px solid var(--magenta-transparent-05);
      width: 80%;
    }
    &__source {
      & > a {
        color: var(--cyan);
      }
    }
    &__copyright {
      color: var(--yellow-transparent-08);
    }
  }
</style>

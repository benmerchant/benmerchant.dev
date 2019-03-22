export const projectsTemplate =   `
  <div class='projects-container'>
    <h1>Projects</h1>
    <ul>
      <li>Start POS</li>
      <li>Algorithms</li>
      <li><h2>Just finished this one this morning for the job fair.</h2></li>
      <p>Web pack is killing me. I can't just load a JS script whenever I feel like it.
      Have to plan that out. Which I get. So here's a direct
      <a href="https://gist.github.com/benmerchant/82f5f163aff483e749dff82e72535ce1" target="_blank">LINK TO THE GIST.</a></p>
      <script src="https://gist.github.com/benmerchant/82f5f163aff483e749dff82e72535ce1.js"></script>

      <p>
        I went to took at all of the employers to see if there were more than I knew about.
        Tried to copy/paste the PDF and break it down in excel. All 200+ jobs providers came
        out as one string of employers. So, I broke it down into JSON. Don't have time to finish,
        but the plan was to make it a game.
      </p>
      <h4>tl;dr:</h4>
      <p>
        There are no delimiters between the jobs. So I just used the spaces by saving their position in the long string.
        Then, take the spaces and make an array of each indiviual word.
        Don't forget to make a map of each respective word by pairing each one with the position of the space that comes
        immediately after it.
      </p>
      <p>
        I'm going to be late for the fair if I finish this, but the next step would be to make a game here on my site.
        Get users to do the work for you. Click a button, it gives you a random word. Then shows you the word either before
        or after it, and you tell the computer whether that second word goes together with the first or not.

        <br>

        To prevent bad sports/rotten eggs, we coul d make it a voting system, just some sort of catch for real life.
        here's the code. Gotta go.
      </p>
    </ul>
  </div> <!-- # end .projects-container -->
  `
;

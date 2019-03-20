console.log('welcome.component');
export const welcome = {
  template: `
  <div class='main-container'>
    <h1>Welcome to my site!</h1>
    <button ui-sref='welcome'>Home</button>
    <button ui-sref='about'>About</button>

  </div> # end .main-container
  `
};

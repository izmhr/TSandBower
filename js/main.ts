/// <reference path="../typings/tsd.d.ts" />

window.onload = function() {
  console.log("onload");
  new Main();
};

class Main {
  constructor() {
    let div: JQuery = $('#hoge');
    div.css({'background-color': '#ffff00'});
    div.on('click', ()=>{
      div.css({'background-color': '#00ffff'});
    });
    let divs: JQuery = $('div');
    _.each(divs, alert);
  }
}

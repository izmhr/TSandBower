window.onload = function () {
    console.log("onload");
    new Main();
};
var Main = (function () {
    function Main() {
        var div = $('#hoge');
        div.css({ 'background-color': '#ffff00' });
        div.on('click', function () {
            div.css({ 'background-color': '#00ffff' });
        });
        var divs = $('div');
        _.each(divs, alert);
    }
    return Main;
}());

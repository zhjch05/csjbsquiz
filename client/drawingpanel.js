Template.drawpanel.rendered = function() {
  mycanvas.height = window.innerHeight;
  mycanvas.width = window.innerWidth;
  context = mycanvas.getContext("2d");
  defaultcolor = "#000000";
  ismousedown = false;
  mycanvas.onmousedown = function(e) {
    ismousedown = true;
    x = e.pageX - mycanvas.offsetLeft;
    y = e.pageY - mycanvas.offsetTop;
    $('#ppos').html('Position: (' + x + ',' + y + ')');
  }
  mycanvas.onmousemove = function(e) {
    if (ismousedown === true) {
      context.beginPath();
      context.moveTo(x, y);
      x = e.pageX - mycanvas.offsetLeft;
      y = e.pageY - mycanvas.offsetTop;
      $('#ppos').html('Position: (' + x + ',' + y + ')');

      context.lineTo(x, y);
      context.lineWidth = 3;
      context.stroke();


      // context.beginPath();
      // context.arc(e.pageX - mycanvas.offsetLeft, e.pageY - mycanvas.offsetTop, 10, 0, 2 * Math.PI);
      // context.fillStyle = defaultcolor;
      // context.fill();
    }
  }
  mycanvas.onmouseup = function(e) {
    ismousedown = false;
  }
  mycanvas.onmouseout = function(e) {
    ismousedown = false;
  }
}

Template.drawpanel.events({
  'click #btnclear': function(event) {
    context.clearRect(0, 0, mycanvas.width, mycanvas.height);
  }
});

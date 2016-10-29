// d3.select('body').selectAll('.container');
var data = [];
var createRandomNumbers = function(){
        for(var i = 0; i<10 ; i++)
            data.push(Math.ceil(Math.random()*1000));
}


var display = function () {
  var bars = d3.select('body').select('.graph')
      .selectAll('div')
      .data(data, function (d) {
        return d;
    });
  var color = d3.scaleLinear()
          .domain([1,100,200,400,6,800,1000])
          .range(["blue", "DodgerBlue","lightblue","LightSkyBlue","RoyalBlue","SteelBlue","PowderBlue"]);

  bars.enter().append('div')
    .text(function(d){return d})
    .style('text-align', 'right')
    .style('padding-right', '10px')
    .style('width', function(d){return d+'px'})
    .style('height', 30+'px')
    .style('margin',10+'px')
    .style('color', 'white')
    .style('background-color', color);

    bars.exit().remove();
}

window.onload = function () {
  createRandomNumbers();
    setInterval(function () {
      display();
      data.shift()
      data.push(Math.ceil(Math.random()*1000));
    },300)
};

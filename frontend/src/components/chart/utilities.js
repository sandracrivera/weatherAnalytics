const getHex = () =>
 "#000000".replace(/0/g, function(){ return (~~(Math.random()*16)).toString(16); });

 export const getLineProps = ({ label }) => {
  const color = getHex();
  return ({ 
    label,
    fillColor: 'transparent',
    strokeColor: color,
    pointColor: color,
    pointStrokeColor: '#fff',
    pointHighlightFill: '#fff',
    pointHighlightStroke: color
  });
}

export const options = {
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: false,
  pointDot: true,
  pointDotRadius: 5,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
}

export const styles = {
  graphContainer: {
    border: "none",
    padding: "2rem"
  }
}

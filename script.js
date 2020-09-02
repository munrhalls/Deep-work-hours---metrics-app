window.addEventListener('load', function () {
  console.log('This function is executed once the page is fully loaded');
  // 0. CREATE DEEP WORK HOURS COLUMN TO THE LEFT
  var hours = document.createElement('div');
    hours.className = 'hours'; 
    hours.innerText ='Hours'
    hours.style.color = "#fff";
    hours.style.border = '1px solid gray';   hours.style.padding = '3px 30px'; 
    hours.style.display = 'inline-block';
    hours.style.height = '100vh'; hours.style.backgroundColor = '#000';
  document.getElementById('root').appendChild(hours);
  // 1. CREATE WEEK DIV
  var week = document.createElement('div');
    week.className = 'week';
    week.style.display = 'inline-block';
  document.getElementById('root').appendChild(week);
  // 2. CREATE DAYS DIVS
  var daysDATA = [
    {name: 'Monday', hours: 3},
    {name: 'Tuesday', hours: 0}, 
    {name: 'Wendesday', hours: 0},
    {name: 'Thursday', hours: 0},
    {name: 'Friday', hours: 0},
    {name: 'Saturday', hours: 0},
    {name: 'Sunday', hours: 0},
  ];
  //create: container divs -> corresponding divs: 1) day's title divs, 2) day's deep work hour ticks
  daysDATA.forEach(function(el){
    //day div
    var day = document.createElement('div');
      day.innerText = el['name'];
      //style
      day.style.border = '1px solid gray'; day.style.padding = '3px 30px'; 
    var dayContainer = document.createElement('div');
      dayContainer.appendChild(day);
      dayContainer.style.display = 'inline-block'; 
      week.appendChild(dayContainer);
    //3. APPEND ADD HOUR TICKS BUTTON TO EACH DAY
    var input = document.createElement('input');
      // input.style.width = "15px";
      // input.style.height = '15px';
      input.style.hover = "cursor";
      input.setAttribute('type', 'button');
      input.style.marginLeft = "auto";
      input.setAttribute('value', '+');
      input.onclick = (function(){
    var parent = input.parentNode;
      // 4. (REPRESENT TICKS DATA) - CREATE DIVS FOR HOUR TICKS 
    var svg = document. createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "28");
      svg.setAttribute('display', 'block');
      svg.style.marginTop = '7px';
    var tick = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      tick.setAttributeNS(null, 'd', 'M95.833,0C42.991,0,0,42.99,0,95.833s42.991,95.834,95.833,95.834s95.833-42.991,95.833-95.834S148.676,0,95.833,0z   M150.862,79.646l-60.207,60.207c-2.56,2.56-5.963,3.969-9.583,3.969c-3.62,0-7.023-1.409-9.583-3.969l-30.685-30.685  c-2.56-2.56-3.97-5.963-3.97-9.583c0-3.621,1.41-7.024,3.97-9.584c2.559-2.56,5.962-3.97,9.583-3.97c3.62,0,7.024,1.41,9.583,3.971  l21.101,21.1l50.623-50.623c2.56-2.56,5.963-3.969,9.583-3.969c3.62,0,7.023,1.409,9.583,3.969  C156.146,65.765,156.146,74.362,150.862,79.646z');
      // tick.setAttributeNS(null, 'cx', '50%');
      // tick.setAttributeNS(null, 'r', '14');
      // tick.setAttributeNS(null, 'fill', '#000');
      tick.style.scale = "0.1";
      svg.appendChild(tick);
      parent.appendChild(svg);
    });
    
    dayContainer.appendChild(input);
  });
});


let currentpic = 1;

document.getElementById('next').addEventListener('click', function(){
  if (currentpic == 1){
    document.getElementById('image1').classList.remove('selected');
    document.getElementById('image2').classList.add('selected');
    currentpic++;
  }
  else if (currentpic == 2){
    document.getElementById('image2').classList.remove('selected');
    document.getElementById('image3').classList.add('selected');
    currentpic++;
  }
  else if (currentpic == 3){
    document.getElementById('image3').classList.remove('selected');
    document.getElementById('image1').classList.add('selected');
    currentpic = 1;
  }
});

document.getElementById('prev').addEventListener('click', function(){
  if (currentpic == 1){
    document.getElementById('image1').classList.remove('selected');
    document.getElementById('image3').classList.add('selected');
    currentpic =  3;
  }
  else if (currentpic == 2){
    document.getElementById('image2').classList.remove('selected');
    document.getElementById('image1').classList.add('selected');
    currentpic--;
  }
  else if (currentpic == 3){
    document.getElementById('image3').classList.remove('selected');
    document.getElementById('image2').classList.add('selected');
    currentpic--;
  }
});

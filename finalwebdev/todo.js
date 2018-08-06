let head1 = document.getElementById('list-head1');
let head2 = document.getElementById('list-head2');
let head3 = document.getElementById('list-head3');

head1.addEventListener('click', function() {
  let hidden = document.getElementById('hidden1');
  if (hidden.style.display == "none" || hidden.style.display == "")
    hidden.style.display = "block";
  else if (hidden.style.display == "block")
    hidden.style.display = "none";
});

head2.addEventListener('click', function() {
  let hidden = document.getElementById('hidden2');
  if (hidden.style.display == "none" || hidden.style.display == "")
    hidden.style.display = "block";
  else if (hidden.style.display == "block")
    hidden.style.display = "none";
});

head3.addEventListener('click', function() {
  let hidden = document.getElementById('hidden3');
  if (hidden.style.display == "none" || hidden.style.display == "")
    hidden.style.display = "block";
  else if (hidden.style.display == "block")
    hidden.style.display = "none";
});

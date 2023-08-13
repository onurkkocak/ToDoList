// Kapat tusu olusturularak her satira eklendi
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Kaydi silmek icin kapat dugmesinin fonksiyonu
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// list satirinda tiklandiginda check isaretinin fonksiyonu 
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Toast gösterme fonksiyonu

  function showToast(type) {
  // Toast öğesini seçin
  
  var toast = document.querySelector('.toast.' + type);
  console.log(toast);
  var closeButton = toast.querySelector('.close');
  closeButton.addEventListener('click', function() {
   $(toast).toast('hide');
  });
 
   //Toast'u göster
  $(toast).toast('show');
}

 //Yeni öğe ekleme fonksiyonu
function newElement() {
  var inputValue = document.getElementById('task').value.trim();
  if (inputValue === '') {
    showToast('error'); 
  
  
  } 
  
  else {
    var list = document.getElementById('list');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(inputValue));
    list.appendChild(li);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    document.getElementById('task').value = '';
    showToast('success');
  }
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}






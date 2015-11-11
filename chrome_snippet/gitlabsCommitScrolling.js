var aDiffHeaders = document.querySelectorAll('.diff-header');
var div = document.createElement('div');
var ul = document.createElement('ol');
div.style.position = 'fixed';
div.style.top = '90px';
div.style.left = '240px';
div.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
div.style.color = 'rgba(255, 255, 255, 1)';
//ul.style.opacity = 0.5;
div.style.zIndex = 99;

for( var i=0,l=aDiffHeaders.length,elm=null,li=null,a=null; i<l; i++ ){
    elm  = aDiffHeaders[i];
    li   = document.createElement('li');
  
    a   = document.createElement('a');
    a.href = '#';
    a.innerHTML = elm.innerText;
    a.style.color = 'rgba(255, 255, 255, 1)';
    (function addE( a, elm ){
        a.addEventListener('click',function(e){
            e.preventDefault();
            elm.scrollIntoView(true);
           window.scrollBy(0,-58)
            return false;
        });
    })(a,elm);

    li.appendChild(a);
    ul.appendChild(li);
}

var button = document.createElement('button');
button.innerHTML = 'X';
button.style.color = 'black';
button.style.fontWeight = 'bold';
button.style.float = 'right';
button.addEventListener('click', function(e){
    div.remove();
})
div.appendChild(button);
div.appendChild(ul);
document.body.appendChild(div);
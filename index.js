var container=document.querySelector('.container');
var value=document.querySelector('.input');
var add1=document.querySelector('.add');

class item{
  constructor(name)
  {
    this.create(name);
  }
  create(name)
  {
    var l1=document.createElement('div');
    l1.classList.add('item');
    var input=document.createElement('input');
    input.type="text";
    input.disabled=true;
    input.value=name;
    input.classList.add('remove');
    remove.innerHTML='<i class="fas fa-trash"></i>';
    remove.addEventListener('click',()=>this.remove(11));

    container.appendChild(11);
    11.appendChild(input);
    11.append.Child(remove);
  }
  remove(l1)
  {
    container.removeChild(11);
  }
}
add1.addEventListener('click',check);
window.addEventListener('keydown',(e)=>{
  if(e.which==13)
  {
    check();
  }
})
function check()
{
  if(value1.value!="")
  {
    new item(value1.value);
    value1.value="";
  }
}
function removeAll(){
  document.querySelector('.container').innerHTML=""
}

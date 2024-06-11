var form1 =document.querySelector('.form-1');
var form2 =document.querySelector('.form-2');
var btn =document.querySelector('.btn-primary');
var link =document.querySelector('.sign');
var erro =document.querySelector('.erro');
var bage =document.querySelector('.contain');
var log =document.querySelector('.sign2'); 
var demo =document.querySelector('.demo'); 
var demo2 =document.querySelector('.mb-8'); 



var vaild=[];
var addData={
    Email:form1.value,
    password:form2.value,
}
  function index1(data){
   var regax =/[a-zA-Z0-9]+@gmail.com/ig;
   data =form1.value;
   if(regax.test(data) == false || form1.value == '' || form2.value == ''){
    erro.style.display='block';
   }
   else{
    erro.style.display='none';
    showbge();
   }
   vaild.push(addData);  
        found();
        clear();
       
}
function clear(){
    form1.value =null;
    form2.value =null;
  
}
btn.addEventListener('click',function(){
    index1();
});
 function found(lastData){
    var lastData =addData.Email.value;
    if(vaild['']!=null){
        if(vaild.containes(lastData)){
            alert("هذا البريد مسجل بالفعل");
               }
    }        
    }
    function showbge(){
        bage.style.display="block";
    }
 log.addEventListener('click',function(){
            bage.style.display="none";
        })
    

        link.addEventListener('click',function(){
        demo2.style.display="block";
        demo.style.display="none";
        })

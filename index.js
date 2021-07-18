function submitName(){
    alert('FORM HAS BEEN SUBMITED')
    var dateTime = document.getElementById("date").value;
    // console.log(dateTime);
    // var D = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
    var maleAnkan = [
        'Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'
    ];
    var femaleAnkan = [
        'Akosua', 'Adwoa', 'Abeena', 'Akua', 'Yaa', 'Afua', 'Ama'
    ];
    
    var date = new Date(dateTime) 
    var maleindex = date.getDay()
    if (document.getElementById('male').checked){
     var namesM = maleAnkan[maleindex];
     
     
    }
    var date = new Date(dateTime)
    var femaleindex = date.getDay()
    if (document.getElementById('female').checked){
     var namesF = femaleAnkan[femaleindex];   

    }
    var newName  = document.getElementById("").innerHTML = date.getDay();
    // var  = document.getElementById("male").innerHTML = date.getDay();
    //  console.log(namesF)
    
}

function submitName(){
    var dateTime = document.getElementById("date").value;
    // console.log(dateTime);
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
    console.log(namesM)
    
}

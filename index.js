function submitName(){
    event.preventDefault();
    document
    var dateTime = document.getElementById("date").value;
    // console.log(dateTime);
    // var D = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
    var maleAnkan = [
        'Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'
    ];
    var femaleAnkan = [
        'Akosua', 'Adwoa', 'Abeena', 'Akua', 'Yaa', 'Afua', 'Ama'
    ];
    
    var date = new Date(dateTime) ;
    var nameIndex = date.getDay();
    if (document.getElementById('male').checked){
        var namesMale = maleAnkan[nameIndex];
        document.getElementById("card").innerHTML = namesMale ;
        
        
    };
   
    if (document.getElementById('female').checked){
        var namesFemale = femaleAnkan[nameIndex];   
        document.getElementById("card").innerHTML= namesFemale;
    };    
    
    
    // alert('FORM HAS BEEN SUBMITED');
    
};

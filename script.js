//a program that counts body fat percentage based on some inputs.


const genderMale=document.getElementById("genderMale");
const genderFemale=document.getElementById("genderFemale");
const age=document.querySelector("#age");
const height=document.querySelector("#height");
const weight=document.querySelector("#weight");
const submit=document.querySelector("#calculate");
const bodyfat=document.querySelector("#bodyfat");
const meter=document.querySelector("#meter");

//select one of the bf calculating functions based on which radio button
//is clicked and calculate the body fat for the user when the calculate
//button is clicked.
//======================================================================
submit.addEventListener("click",()=>{
    if(genderMale.checked==true){
        meter.min=2;
        meter.max=50;
        meter.low=10;
        meter.high=25;
        meter.optimum=15;
        
     
     bodyfat.value=maleBodyFat(age.value,BMI(weight.value,height.value));
     meter.value=bodyfat.value;
    }else if(genderFemale.checked==true){
        meter.min=10;
        meter.max=50;
        meter.low=13;
        meter.high=30;
        meter.optimum=24;
        
       bodyfat.value=femaleBodyFat(age.value,BMI(weight.value,height.value));
       meter.value=bodyfat.value;
     }else if(genderMale.checked==false&genderFemale.checked==false){
         alert("please check your gender!");
     }
});



//======================================================================
//BMI calculator function.
function BMI(a,b){
    if(a!=NaN&b!=NaN)
    {let heightInMeter=b/100;
    let BMIN=(a)/((heightInMeter*heightInMeter));
    return BMIN;}
    
}




//a function that calculates bodyfat for male users.
//======================================================================
function maleBodyFat(age,bmi){
   let BFP;
    if(age<18&age!=NaN){
        BFP=1.51 * bmi - 0.70 * age - 2.2;
        return BFP;

    }else if(age>=18&age!=NaN){
        BFP = 1.20 * bmi  +  0.23 * age - 16.2;
        return BFP;
    }
    

}


//a function that calculates bodyfat for female users.
//======================================================================
function femaleBodyFat(age,bmi){
    let BFP;
    if(age<18&age!=NaN){
        BFP=1.51 * bmi - 0.70 * age + 1.4;
        return BFP;

    }else if(age>=18&age!=NaN){
        BFP = 1.20 * bmi + 0.23 * age - 5.4;
        return BFP;
    }

}







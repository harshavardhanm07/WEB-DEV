
//BMI calculator
function bmiCalculator(weigth,height){
    BMI = weigth/height*height;
    return Math.round(BMI);
}
var BMI=bmiCalculator(65,1.8);
console.log(BMI);

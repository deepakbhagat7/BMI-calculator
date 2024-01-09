const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const res = document.querySelector('#results')

    if(height<0 || height===''|| isNaN(height)){
        res.innerHTML = `Please enter a valid height ${height}`;  
    }

    if(weight<0 || weight===''|| isNaN(weight)){

        res.innerHTML = `Please enter a valid weight ${weight}`;
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        
        if(bmi<18.60) res.innerHTML=`You are under weight:- ${bmi}`;
        else if(bmi>18.60&& bmi<24.90) res.innerHTML = `Your BMI is normal:- ${bmi}`;
        else res.innerHTML = `You are overweight:- ${bmi}`;
    }
    
    

})
function fnReset(){
    alert('Form Reseted!');
    

}

var errorMsg = document.getElementById('error');

function submitForm(){
    var form = document.getElementById("Form");
    form.submit();
}

function fnValidate(){
    if(!validateEmail())
    {
        return;
    }else if(!validateUsername()){
        return;
    }else if (!validatePassword()){
        return;
    }else if(!validateCPassword()){
        return;
    }else if(!validateDob()){
        return ;
    }else if (!validateGender()){
        return;
    }else if(!validateNation())
    {
        return ;
    }
    else if (!validateAgree()){
        return;
    }
    else {
        errorMsg.innerHTML = '';
        alert('Registration success!') ;

        
        submitForm();
        
    }
}


function validateEmail(){
    
    var pEmail = document.getElementById('Form_email').value;

    if (pEmail == ''){
        errorMsg.innerHTML = '*Email Must Be Filled';
        return false;
    }else if(!pEmail.endsWith('.com') || !pEmail.includes('@') ){
        errorMsg.innerHTML = '*Wrong email format!' ;
        return false;
    }


    errorMsg.innerHTML = '';
    return true;
}

function validateUsername(){
    
    var pUsername = document.getElementById('Form_username').value;


    if (pUsername == ''){
        errorMsg.innerHTML = '*Username Must Be Filled';
        return false;
    }else if (pUsername.length < 5){
        errorMsg.innerHTML = '*Username must be more than 5 characters';
        return false;
    }


    errorMsg.innerHTML = '';
    return true;
}



function validatePassword(){
    var pPassword = document.getElementById('Form_password').value;
    
    if (pPassword == ''){
        errorMsg.innerHTML = '*Password must be filled';
        return false;
    }
    else if (pPassword.length < 5){
        errorMsg.innerHTML = '*Password must be more than 5 character';
        return false;
    }
    
    errorMsg.innerHTML = '';
    return true;
}


function validateCPassword(){
    var pPassword = document.getElementById('Form_password').value;
    var cPassword = document.getElementById('Form_cpassword').value;
    
    if (cPassword != pPassword){
        errorMsg.innerHTML = '*Password did not match';
        return false;
    }
    
    
    errorMsg.innerHTML = '';
    return true;
}

function validateDob(){
    var pDate = document.getElementById('Date').value ;
    var pMonth = document.getElementById('Month').value ;
    var pYear = document.getElementById('Year').value ;

    if(pDate == '') 
    {
        errorMsg.innerHTML = '*Choose your date of birth';
        return false ;
    }else if(pMonth == '')
    {
        errorMsg.innerHTML = '*Choose your birth month' ;
        return false ;
    }else if(pYear == '')
    {
        errorMsg.innerHTML = '*Choose your year of birth' ;
        return false ;
    }

    errorMsg.innerHTML = '' ;
    return true ;
}


function validateGender (){
    var pMale = document.getElementById('Form_Gender_Male').checked;
    var pFemale = document.getElementById('Form_Gender_Female').checked;

    
    if (!pMale && !pFemale){
        errorMsg.innerHTML = '*Choose your gender';
        return false;
    }

    errorMsg.innerHTML = '';
    return true;
}

function validateNation(){
    var pNation = document.getElementById('Form_Nation').value;

    if (pNation == ''){
        errorMsg.innerHTML = '*Select your Nation!';
        return false;
    }

    errorMsg.innerHTML = '';
    return true;
}



function validateAgree (){
    var pAgree = document.getElementById('Form_Agree').checked;

    if  (!pAgree){
        errorMsg.innerHTML = '*You must agree with the term and condition!';
        return false;
    }

    errorMsg.innerHTML = '';
    return true;
}
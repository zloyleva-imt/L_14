console.log('App was loaded...');

const exampleInputEmail1 = document.getElementById('exampleInputEmail1');
const exampleInputPassword1 = document.getElementById('exampleInputPassword1');
const isPasswordValid = password => password.length < 6;
const isEmailValid = email => !email.split('').filter(el=>el === '@').length;

exampleInputEmail1.addEventListener('input', e => {

    // resEmail.innerHTML = e.target.value;

    if(isEmailValid(e.target.value)){
        // Error
        e.target.classList.add('is-invalid')
        e.target.classList.remove('is-valid')
    }else{
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    }
})

exampleInputPassword1.addEventListener('input', e => {
    if(isPasswordValid(e.target.value)){
        // Error
        // console.log(e)
        e.target.classList.add('is-invalid')
        e.target.classList.remove('is-valid')
    }else{
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    }
})

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Form was submit');
    console.log('email', e.target[0].value);
    console.log('password', e.target[1].value);

    [{email: 'olevchenko@gmail.com', password: '11111111'}, 'test@gmail.com']

})

// eye.addEventListener('click', () => {
//     exampleInputPassword1.setAttribute('type', 'text')
// })
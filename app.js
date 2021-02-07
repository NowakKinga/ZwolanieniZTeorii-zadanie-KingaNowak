import { route } from './router';
import { handler } from './functions/login';

route('/', 'home', function() {
  this.$on('.submit', 'click', () => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');  
    if(username.value  === 'zwzt' && password.value === 'secret'){
      const httpMethod = {httpMethod: 'POST',
                        body: '{"password":"success"}'};

      console.log(handler(httpMethod))
      location.href="#/success"
    }else{
      if(username.value != 'zwzt'){
        username.value = '';
        username.style.background = '#E6B5AC';
        username.placeholder = 'Wrong username!';
      }
      if(password != 'secret'){
        password.value = '';
        password.style.background = '#E6B5AC';
        password.placeholder = 'Wrong password!';
      }
      const httpMethod = {httpMethod: 'POST',
                          body: '{"password":"error"}'};
      console.log(handler(httpMethod))
    }
  });
});


route('*', '404', function () {});

route('/success', 'success', function() {
  this.title = 'Success';
});

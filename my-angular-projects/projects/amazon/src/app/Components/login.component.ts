import { Component } from '@angular/core';

@Component({
  selector: 'app-login', //how this component is accessible
  template: `
    <div class="container">
      <h2>{{ title }}</h2>
      <dl>
        <dt>User Name</dt>
        <dt></dt>
        <dd><input type="text" /></dd>
        <dt>Password</dt>
        <dd><input type="password" /></dd>
        <dd class="btn btn-primary">Login</dd>
      </dl>
    </div>
  `,
  styles: [
    'h2{background-color:red;color:white}',
    'button{background-color:blue}',
  ],
})
export class LoginComponent {
  title = 'User Login';
}

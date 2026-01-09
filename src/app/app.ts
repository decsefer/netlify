import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="hero">
      <section class="card">
        <h1>¡Mensaje desde angular!</h1>
        <p>Este es un mensaje mejor presentado la practica de netlify.</p>
      </section>
    </div>
    <router-outlet />
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto-angular-netlify');
}

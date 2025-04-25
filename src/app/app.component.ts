import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NarbarComponent } from './core/navbar/navbar.component'
import { FooterComponent } from './core/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NarbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}

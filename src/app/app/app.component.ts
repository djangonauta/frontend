import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../layouts/header/header.component";

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

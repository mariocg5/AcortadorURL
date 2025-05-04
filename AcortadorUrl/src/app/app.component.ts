import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaUrlComponent } from "./tabla-url/tabla-url.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TablaUrlComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AcortadorUrl';
}

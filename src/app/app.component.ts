import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ferramentas de Desenvolvimento Web - UNINTER';

  // Define o título da página
  public constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}

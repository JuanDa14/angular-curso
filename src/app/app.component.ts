import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portafolio-app';
  public cards: Array<any> = [];

  ngOnInit(): void {
    this.cards = [
      {
        title: 'Video 1',
        subtitle: 'Subtitulo 1',
      },
      {
        title: 'Video 2',
        subtitle: 'Subtitulo 2',
      },
      {
        title: 'Video 3',
        subtitle: 'Subtitulo 3',
      },
      {
        title: 'Video 4',
        subtitle: 'Subtitulo 4',
      },
      {
        title: 'Video 5',
        subtitle: 'Subtitulo 5',
      },
      {
        title: 'Video 6',
        subtitle: 'Subtitulo 6',
      },
    ];
  }
}

import { Component, OnInit } from '@angular/core';
import { UrlDatabaseService } from '../url-database.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tabla-url',
  imports: [HttpClientModule],
  templateUrl: './tabla-url.component.html',
  styleUrl: './tabla-url.component.css'
})

export class TablaUrlComponent implements OnInit{

  urls: any[] = [];

  constructor(private urlService: UrlDatabaseService) {}

  ngOnInit() {
    this.urlService.getUrls().subscribe(
      (data) => {
        this.urls = data;
      },
      (error) => {
        console.error('Error fetching URLs:', error);
      }
    );
  }

  navigate(url: string) {
    window.open(url, '_blank');
  }
  
}


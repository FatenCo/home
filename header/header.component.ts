import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';

  constructor() { }

  ngOnInit() {
  }
  Search() {
    // Add your search logic here based on the searchTerm
    // For now, let's just log the search term to the console
    console.log('Searching for:', this.searchTerm);
  }
}

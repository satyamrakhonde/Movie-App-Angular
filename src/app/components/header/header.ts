import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  @Output() search = new EventEmitter<string>();
  searchText: string = '';

  onSearch() {
    this.search.emit(this.searchText);
    console.log('Search button clicked');
  }
}

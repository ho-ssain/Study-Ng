import { Component } from '@angular/core';

@Component({
  selector: 'p-search',
  templateUrl: './p-search.component.html',
  styleUrl: './p-search.component.scss',
})
export class PSearchComponent {
  searchText: string = '';

  // updateSearchText(event: any) {
  //   this.searchText = event.target?.value;
  // }
}

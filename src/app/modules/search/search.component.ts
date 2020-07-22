import { Component, OnInit } from '@angular/core';
import {WikipediaService} from 'src/app/wikipedia.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  term = '';
  result: any = [];
  constructor(private wiki: WikipediaService) { }

  ngOnInit() {
  }
  onformSubmit(event: any) {
    event.preventDefault();
  }
  fetchSearchResult() {
    this.result = this.wiki.search(this.term).subscribe((res: any) =>{
      this.result = res.query.search;
    });
  }
}

import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() term = '';
  @Input() result: any = [];
  constructor() { }

  ngOnInit() {
  }
}

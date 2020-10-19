import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Technology } from '../Technology';

@Component({
  selector: 'technology-tag-display',
  templateUrl: './technology-tag-display.component.html',
  styleUrls: ['./technology-tag-display.component.css'],
})
export class TechnologyTagDisplayComponent implements OnInit {
  @Input() Tags: Technology[];
  @Output() filter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onFilter(tag: Technology) {
    this.filter.emit(tag);
  }
}

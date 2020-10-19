import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'showcase-tag-display',
  templateUrl: './showcase-tag-display.component.html',
  styleUrls: ['./showcase-tag-display.component.css'],
})
export class ShowcaseTagDisplayComponent implements OnInit {
  @Input() Tags: string[];
  @Output() filter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onFilter(tag: string) {
    this.filter.emit(tag);
  }
}

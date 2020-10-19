import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'showcase-tag-display',
  templateUrl: './showcase-tag-display.component.html',
  styleUrls: ['./showcase-tag-display.component.css'],
})
export class ShowcaseTagDisplayComponent implements OnInit {
  @Input() Tags: string[];

  constructor() {}

  ngOnInit(): void {}
}

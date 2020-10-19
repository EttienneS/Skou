import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { Technology } from './Technology';

export interface IShowcaseItem {
  Name: string;

  SubTitle: string;

  Image: string;

  ProjectUrl: string;

  DemoUrl: string;

  Description: string;

  Tags: Technology[]
}

;

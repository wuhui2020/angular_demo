import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personalized } from 'src/app/services/data-types/common.types';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-single-sheet',
  templateUrl: './single-sheet.component.html',
  styleUrls: ['./single-sheet.component.less'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class SingleSheetComponent implements OnInit {

  constructor() { }
  @Input() sheetList:Personalized;
  @Output() onPlay = new EventEmitter<number>();
  ngOnInit(): void {
  }
  playSheet(id:number){
    // console.log(id)
    this.onPlay.emit(id);
  }

}

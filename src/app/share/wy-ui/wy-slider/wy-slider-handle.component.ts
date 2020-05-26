import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wy-slider-handle',
  template: `<div class="wy-slider-handle" [ngStyle]= "style"></div>`,
  changeDetection:ChangeDetectionStrategy.OnPush
}) 
export class WySliderHandleComponent implements OnInit,OnChanges{
  @Input() wyVertical = false;
  @Input() wyOffset:number;
  style:WySliderStyle = {};
  constructor() { }
  
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['wyVertiacl']){
      this.style[this.wyVertical?'bottom':'left'] = this.wyOffset + '%'
    }
  }
}
interface WySliderStyle{
  left? : string|null;
  bottom? : string|null;
}
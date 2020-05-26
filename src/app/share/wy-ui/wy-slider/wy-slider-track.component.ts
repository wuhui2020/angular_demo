import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wy-slider-track',
  template: `<div class="wy-slider-track"></div>`,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WySliderTrackComponent implements OnInit ,OnChanges{
  @Input() wyVertical = false;
  @Input() wyLength:number;
  style:WySliderStyle = {};
  constructor() { }
  
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['wyLength']){
      if(this.wyVertical){
        this.style.height = this.wyLength + "%";
        this.style.left = null;
        this.style.width = null;
      }
    }else{
      this.style.width = this.wyLength +"%";
      this.style.bottom = null;
      this.style.height = null;
    }
  }
}

interface WySliderStyle{
  width? : string|null;
  height? : string|null;
  left? : string|null;
  bottom? : string|null;
}

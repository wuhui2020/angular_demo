import { Component, OnInit, ViewChild, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';


@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class WyCarouselComponent implements OnInit {
  @Input() activeIndex:0;

  // @Output() changeSlide = new EventEmitter<string>();
  @Output() changeSlide = new EventEmitter<'pre'|'next'>();
  @ViewChild('dot',{static:true}) dotRef:TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }
  onChangeSlie(type:'pre'|'next'){
    this.changeSlide.emit(type);
  }
}

import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, ViewChild, Input, Inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap, pluck, map } from 'rxjs/internal/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-wy-slider',
  templateUrl: './wy-slider.component.html',
  styleUrls: ['./wy-slider.component.less'],
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WySliderComponent implements OnInit {
  @ViewChild('wySlider',{static:true}) private wySlider:ElementRef;
  constructor(@Inject(DOCUMENT) private doc:Document,private el:ElementRef) { }
  private sliderDom:HTMLDivElement;
  @Input() wyVertical = false;
  ngOnInit(): void {
    console.log(this.el.nativeElement)
    console.log(this.wySlider.nativeElement)
    this.sliderDom = this.wySlider.nativeElement;
    this.cerateDraggingObervables();
  }

  private cerateDraggingObervables(){
    const orientField = this.wyVertical?'pageY':'pageX'
    const mouse = {
      start:'mousedown',
      move:'mousemove',
      end:'mouseup',
      filter:(e:MouseEvent) => e instanceof MouseEvent,
      pluckKey:[orientField]
    };
    const touch = {
      start:'touchstart',
      move:'touchmove',
      end:'touchend',
      filter:(e:TouchEvent) => e instanceof TouchEvent,
      pluckKey:['touches','0',orientField]
    };
    // [mouse,touch].forEach(source => {
    //   const [start,move,end,filter,pluckKey] = source;
    //   fromEvent(this.sliderDom,start).pipe(
    //     filter(filter),
    //     tap((e:Event)=>{
    //       e.stopPropagation();
    //       e.preventDefault();
    //     }),
    //     pluck(...pluckKey),
    //     map((position:number)=>{
    //       this.findClosestValue(position)
    //     })
    //     source.end$ = fromEvent(document,end);
    //   )
    // });
  }

}

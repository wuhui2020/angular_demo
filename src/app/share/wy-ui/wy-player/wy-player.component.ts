import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-wy-player',
  templateUrl: './wy-player.component.html',
  styleUrls: ['./wy-player.component.less'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class WyPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

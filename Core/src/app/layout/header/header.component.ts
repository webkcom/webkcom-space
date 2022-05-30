import { ChangeDetectorRef, Component, HostListener, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})

export class HeaderComponent implements OnInit {
  date!:number;
  // 获取当前窗口大小
  scrWidth!: number;
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.scrWidth = window.innerWidth;
    // console.log(this.crowded);
  }

  constructor() {
  }
  ngOnInit(): void {
    this.getScreenSize();
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less'],
})
export class HomepageComponent implements OnInit {
  isVisible = false;
  isVisited = false;
  constructor() {

   }
  // 第一次出现弹窗且根据sessionStorage只显示一次,浏览器关闭后sessionStorage数据被清除
  showModal(): void {
    if (!sessionStorage.getItem("isVisited")) {
      this.isVisible = true;
    }
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  ngOnInit(): void {
    this.showModal();
    this.isVisited = true;
    sessionStorage.setItem("isVisited", "false");
  }

}
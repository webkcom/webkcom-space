import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/services/icon/icon.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less'],
})
export class HomepageComponent implements OnInit {
  isVisible = false;
  isVisited = false;
  date!: number;
  constructor(private iconService: IconService) {
    setInterval(() => {
      this.date = Date.now();
    }, 1000);
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
    this.date = Date.now();
    this.showModal();
    this.isVisited = true;
    sessionStorage.setItem("isVisited", "false");
  }

}
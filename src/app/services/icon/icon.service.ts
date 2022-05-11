// 调用iconfont.cn的图标
import { NzIconService } from 'ng-zorro-antd/icon';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class IconService {
  constructor(private iconService: NzIconService) { 
    this.iconService.fetchFromIconfont({
        // 个人iconfont项目地址
        scriptUrl: 'https://at.alicdn.com/t/font_3335543_qc1qwrbihh9.js'
      });
  }
}
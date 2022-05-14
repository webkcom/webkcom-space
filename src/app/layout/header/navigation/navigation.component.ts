import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ul[nz-menu][app-navigation]',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.less'],
})

export class NavigationComponent implements OnInit {
    date!: number;
    constructor() {
        setInterval(() => {
            this.date = Date.now();
          }, 1000);
    }

    ngOnInit(): void {
        this.date = Date.now();
    }


}
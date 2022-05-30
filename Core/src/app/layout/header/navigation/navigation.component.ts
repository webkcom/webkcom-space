import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.less'],
})

export class NavigationComponent implements OnInit {
    @Input() scrWidth!:number;
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
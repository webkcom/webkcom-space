import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.less'],
})

export class SearchbarComponent implements OnInit {
    @Input() scrWidth!:number;
    constructor() {}
    ngOnInit(): void {
    }
}
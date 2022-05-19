import { Component, OnInit } from '@angular/core';
import { IPDetectorService } from 'src/app/services/tools/ipdetector/ipdetector.service';

@Component({
  selector: 'app-ipdetector',
  templateUrl: './ipdetector.component.html',
  styleUrls: ['./ipdetector.component.less']
})
export class IPDetectorComponent implements OnInit {
  ip!:string;
  detailInfo:any;
  country!:string;
  regionName!:string;
  city!:string;
  isp!:string;
  org!:string;

  constructor(private ipDetector: IPDetectorService) { }

  ngOnInit(): void {
    this.ipDetector.getIPAddress().subscribe((result)=>this.ip=Object.getOwnPropertyDescriptor(result,'IP')?.value);
    this.ipDetector.getDetailInfo(this.ip)
    .subscribe((result)=>{
      this.country=Object.getOwnPropertyDescriptor(result,'country')?.value,
      this.regionName=Object.getOwnPropertyDescriptor(result,'regionName')?.value,
      this.city =Object.getOwnPropertyDescriptor(result,'city')?.value
    })
  }


}

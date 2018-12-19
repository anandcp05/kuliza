import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

svalue=1;
public loadingTimeEnable="true";
public mintime=0;
public maxtime=100;
total=(this.mintime+this.maxtime);
public timerpoint=this.total/2;
public enableslider=false;
public showPage;
  timeRange=[{
id:1,value:"0-100",minvalue:0,maxvalue:100
},
{
'id':2,value:"100-200",minvalue:100,maxvalue:200
},
{
'id':3,value:"200-500",minvalue:200,maxvalue:500
},
{
'id':4,value:"500-1000",minvalue:500,maxvalue:1000
},
{
'id':5,value:"1000-2000",minvalue:1000,maxvalue:2000
}
]

  constructor() { }

  ngOnInit() {
  }

  setTimeRange(event){
   
    this.mintime=this.timeRange[event.target.value-1].minvalue;
      
     this.maxtime=this.timeRange[event.target.value-1].maxvalue;
     this.total=(this.mintime+this.maxtime);
     this.timerpoint=this.total/2;

  }

  loadpage(){
    console.log(this.loadingTimeEnable);
    if(this.loadingTimeEnable=='true'){
      this.showPage="page will get load after"+ this.timerpoint+"Sec";
      setTimeout(function(){
      //redirect to 2nd page after timerpoint seconds
     this.showPage="page loaded";
    },this.timerpoint);

    }else{
      this.showPage="page loaded";
       //redirect to 2nd page
    }
  }

}
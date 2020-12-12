import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';
import{SecurityProvider}from'../../providers/security/security'
import { count } from 'rxjs/operator/count';
import { StatsPage } from '../stats/stats';
/**
 * Generated class for the DatedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datedetail',
  templateUrl: 'datedetail.html',
})
export class DatedetailPage {
@ViewChild (Slides) slides:Slides
customPickerOptions: any;

  public event = {
    
  }
dataArr=[1,2,3,4,5,6,7,8,9]
shouldAnimate: boolean = true;
currentDates
eventdates
selecteddate
indexslide
actualdate
monthdate
count
datastatus

loadingstatus
user_name
acdate
timeinmin

newpatient
appointment
scheduled
UnScheduleTx
  constructor(public navCtrl: NavController, public navParams: NavParams,public securityP:SecurityProvider) {
    this.user_name=localStorage.getItem('user_name')
    this.actualdate = new Date().toLocaleDateString()
    this.datastatus=false
     this.loadingstatus=true
    this.securityP.getDateData(this.actualdate).subscribe(data=>{
      this.calcount()
    this.newpatient=data.newPatiantCount
      this.appointment=data.totalAppointement
      this.eventdates=data.finalPatiantData
      this.scheduled=data.scheduled
      this.UnScheduleTx=data.UnScheduleTx
     
      console.log('eventstatus',this.eventdates.length)
      if(this.eventdates.length>0){
        this.datastatus=true
        this.timeinmin=this.eventdates[0].timemin/60
     }
     else
     {
       this.datastatus=false
     }
      this.monthdate=data.monthFullDate
     // this.currentDates=data.dates
     console.log('current',this.currentDates)
     if(this.eventdates.length>0)
     {
      
      this.selecteddate=data.finalPatiantData[0].apptdate
     }
     else
     {
      this.selecteddate=this.actualdate
     }
      var today = new Date(this.selecteddate);
      var tomorrow = new Date(today);
      tomorrow.setDate(today.getDate()+1);
   // tomorrow.setDate(today.getDate());
      tomorrow.toLocaleDateString();

      this.selecteddate= new Date(tomorrow).toJSON().split('T')[0];
   
      var datenumb = today.getDate();
      
      this.indexslide=this.currentDates.findIndex(i=>i.dateNo==datenumb)
      setTimeout(()=>{
        this.onNext()
      },2000)
    
       
    })
  }
  ngOnInit()
  { 
    
  
   
  }
  slideChanged(slide, index) {
    let currentIndex = this.slides.getActiveIndex();
   
    console.log('Current index is', currentIndex);
     let selecteddate=this.monthdate[currentIndex+1]
     console.log('selectdate',selecteddate)
    let date=new Date(selecteddate)
    console.log('date',date)
    this.actualdate=((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()
    console.log('sss',this.actualdate)
    console.log('ssssss',currentIndex+1)
    console.log('actualdate',this.indexslide)
   
    if(this.indexslide!=currentIndex+1){
    
     this.loadingstatus=true
     this.securityP.getDateData(this.actualdate).subscribe(data=>{
      this.newpatient=data.newPatiantCount
      this.appointment=data.totalAppointement
      this.eventdates=data.finalPatiantData
      this.scheduled=data.scheduled
      this.UnScheduleTx=data.UnScheduleTx
    //  this.currentDates=data.dates
      console.log('dd',this.eventdates)
     if(this.eventdates.length>0)
     {
       console.log('ddd')
       this.timeinmin=this.eventdates[0].timemin/60
   //   this.selecteddate=data.finalPatiantData[0].apptdate
     }
      var today = new Date(this.selecteddate);
      var tomorrow = new Date(today);
      tomorrow.setDate(today.getDate()+1);
      tomorrow.toLocaleDateString();
      if(this.eventdates.length>0){
        this.datastatus=true
     }
     else
     {
       this.datastatus=false
     }
   //   this.selecteddate= new Date(tomorrow).toJSON().split('T')[0];
   
      
   this.loadingstatus=false
       
    })
    }
    
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad DatedetailPage');
   
    
  }
  onNext()
  {
    this.loadingstatus=false
    this.slides.slideTo(this.indexslide-1,500)
    
  }
  getdatedata(){
    this.loadingstatus=true
    this.securityP.getDateData(this.actualdate).subscribe(data=>{
      this.newpatient=data.newPatiantCount
      this.appointment=data.totalAppointement
      this.eventdates=data.finalPatiantData
      this.scheduled=data.scheduled
      this.UnScheduleTx=data.UnScheduleTx
   //   this.currentDates=data.dates
     this.calcountdynamic()
      console.log('dd',this.eventdates)
     if(this.eventdates.length>0)
     {
      
      this.selecteddate=data.finalPatiantData[0].apptdate
      var today = new Date(this.selecteddate);
      var tomorrow = new Date(today);

      tomorrow.setDate(today.getDate()+1);
   //  tomorrow.setDate(today.getDate());
      tomorrow.toLocaleDateString();
      this.timeinmin=this.eventdates[0].timemin/60
     }
     else
     {
      var today = new Date(this.selecteddate);
      var tomorrow = new Date(today);

      tomorrow.setDate(today.getDate());
      
      tomorrow.toLocaleDateString();
     }
      // var today = new Date(this.selecteddate);
      // var tomorrow = new Date(today);

      // tomorrow.setDate(today.getDate()+1);
      
      // tomorrow.toLocaleDateString();

      this.selecteddate= new Date(tomorrow).toJSON().split('T')[0];
      console.log('selecteddate',this.selecteddate)
      var datenumb = today.getDate();
      this.monthdate=[]
     // this.monthdate=data.monthFullDate
      for(let i=0;i<data.monthFullDate.length;i++){
         let getyear=data.monthFullDate[i].split('-')
         this.monthdate.push(this.currentDates[0].year+'-'+getyear[1]+'-'+getyear[2])
         console.log('getyear',this.monthdate)
      }
      this.indexslide=this.currentDates.findIndex(i=>i.dateNo==datenumb)
      setTimeout(()=>{
        this.onNext()
      },2000)
      if(this.eventdates.length>0){
        this.datastatus=true
     }
     else
     {
       this.datastatus=false
     }
       
    })
  }
  parseDate(){
  
    // this.customPickerOptions = {
    //   buttons: [{
    //     text: 'Save Year',
    //     handler: (res) => {
    //       console.log('Save Year', res)
          
    //     }
    //   }, {
    //     text: 'Set Today',
    //     handler: (res) => {
    //       console.log('Set Today', res)
          
    //     }
    //   }, {
    //     text: 'Cancel',
    //     handler: () => {
    //       console.log('Clicked Log. Do not Dismiss.');
    //       return false;
    //     }
    //   }]
    // }
    let count=0
     let date=new Date(this.selecteddate)
     console.log('datessss',date.getFullYear())
     this.acdate=date
     this.actualdate=((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()
      this.getdatedata()
     
  }
  navigatetoStats(id)
  {
    console.log(id)
    console.log('events',this.eventdates[id])
    this.navCtrl.push(StatsPage,{data:this.eventdates[id]})
  }
  calcount()
  {
   
   
    let DateArr=[]
    var date = new Date();
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0); 
    
     let firstdate = firstDay.getDate();
     let lastdate  = lastDay.getDate();
     let daycount=firstDay.getDay();
     let valyear=firstDay.getFullYear()
     console.log('valyear',valyear)
     for(let i=1;i<lastdate+1;i++)
     {
         if(daycount==7)
         {
          daycount=0
         }           
      DateArr.push({'dateNo':i,'dateDay':daycount,'year':valyear})
      daycount=daycount+1 
     }
     this.currentDates=DateArr
     console.log('DateArr',DateArr)

  }
  calcountdynamic()
  {
   
   
    let DateArr=[]
   
    let firstDay = new Date(this.acdate.getFullYear(), this.acdate.getMonth(), 1);
    let lastDay = new Date(this.acdate.getFullYear(), this.acdate.getMonth() + 1, 0); 
    console.log('firstday',firstDay)
    console.log('lastday',lastDay)
     let firstdate = firstDay.getDate();
     let lastdate  = lastDay.getDate();
     let daycount=firstDay.getDay() 
     let valyear=firstDay.getFullYear()
     for(let i=1;i<lastdate+1;i++)
     {
         if(daycount==7)
         {
          daycount=0
         }           
         DateArr.push({'dateNo':i,'dateDay':daycount,'year':valyear})
      daycount=daycount+1 
     }
     this.currentDates=DateArr
     console.log('DateArr',DateArr)

  }

}

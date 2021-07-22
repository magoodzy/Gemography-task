import { Component, OnInit } from '@angular/core';
import { DemoService } from './../../Services/demo.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit {
  //------------------------------------------------------
  // Calling the service in the constructor to get all the data from it, and
  // give it an access modifier "Private" so I can call it in all of my Functions.
  //------------------------------------------------------

  constructor(private ourService: DemoService) {}

  //------------------------------------------------------
  // my Variables
  //------------------------------------------------------

  myData: any;
  nowDay: any = new Date();
  diffDays: any;
  myId: number = 1;

  //------------------------------------------------------
  // Call the Backend to get all the data from the Service
  //------------------------------------------------------

  ngOnInit(): void {
    this.ourService.getDataById(this.myId).subscribe(
      (res) => {
        this.myData = res;
      },
      (err) => {
        alert(err);
      }
    );
  }

  //------------------------------------------------------
  // Function to calculate the difference between two dates in days
  //------------------------------------------------------

  getTime(t: any) {
    const date1: any = new Date(t);
    const date2: any = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  //------------------------------------------------------
  // Function to get the Id from the click on number of the page
  //------------------------------------------------------

  dataPage(e: any) {
    this.myId = parseInt(e.target.textContent);
    console.log(parseInt(e.target.textContent));

    this.ourService.getDataById(this.myId).subscribe(
      (res) => {
        this.myData = res;
        console.log(this.myData);
      },
      (err) => {
        alert(err);
      }
    );
  }

  //------------------------------------------------------
  // The Prev button Function in the Pagination
  //------------------------------------------------------

  prevPage() {
    if (this.myId > 1)
      this.ourService.getDataById(this.myId--).subscribe(
        (res) => {
          this.myData = res;
          console.log(this.myData.items);
        },
        (err) => {
          alert(err);
        }
      );
    else if (this.myId == 1) {
      this.myId = 10;
      this.ourService.getDataById(this.myId).subscribe(
        (res) => {
          this.myData = res;
          console.log(this.myData.items);
        },
        (err) => {
          alert(err);
        }
      );
    }
  }

  //------------------------------------------------------
  // The Next button Function in the Pagination
  //------------------------------------------------------

  nextPage() {
    if (this.myId < 10)
      this.ourService.getDataById(this.myId++).subscribe(
        (res) => {
          this.myData = res;
          console.log(this.myData.items);
        },
        (err) => {
          alert(err);
        }
      );
    else if (this.myId == 10) {
      this.myId = 1;
      this.ourService.getDataById(this.myId).subscribe(
        (res) => {
          this.myData = res;
          console.log(this.myData.items);
        },
        (err) => {
          alert(err);
        }
      );
    }
  }
}

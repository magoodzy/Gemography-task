import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit {
 //------------------------------------------------------
  // my Variables
  //------------------------------------------------------

  myData: any;
  nowDay: any = new Date();
  diffDays: any;
  myPage: number = 1;
  pageNumbers = [1,2,3,4,5,6,7,8,9,10];


  //------------------------------------------------------
  // Calling the service in the constructor to get all the data from it, and
  // give it an access modifier "Private" so I can call it in all of my Functions.
  //------------------------------------------------------

  constructor(private ourService: DemoService) {}



  //------------------------------------------------------
  // Call the Backend to get all the data from the Service
  //------------------------------------------------------

  ngOnInit(): void {
  this.dataPage(1);
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

  dataPage(pageNumber: any =1) {

    this.myPage = pageNumber;
    this.ourService.getDataByPageNumber(pageNumber).subscribe(
      (res) => {
        this.myData = res;
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
    if (this.myPage > 1)
      this.ourService.getDataByPageNumber(this.myPage--).subscribe(
        (res) => {
          this.myData = res;
        },
        (err) => {
          console.log(err);
        }
      );
    else if (this.myPage == 1) {
      this.myPage = 10;
      this.ourService.getDataByPageNumber(this.myPage).subscribe(
        (res) => {
          this.myData = res;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  //------------------------------------------------------
  // The Next button Function in the Pagination
  //------------------------------------------------------

  nextPage() {
    if (this.myPage < 10)
      this.ourService.getDataByPageNumber(this.myPage++).subscribe(
        (res) => {
          this.myData = res;
        },
        (err) => {
          alert(err);
        }
      );
    else if (this.myPage == 10) {
      this.myPage = 1;
      this.ourService.getDataByPageNumber(this.myPage).subscribe(
        (res) => {
          this.myData = res;
        },
        (err) => {
          alert(err);
        }
      );
    }
  }

}

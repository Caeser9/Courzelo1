import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {
  clientSecret: string | null = null;
  constructor(private http: HttpClient , private ac :ActivatedRoute , private courseService:CourseService) {   }
  amount: any
  email!:string
url= "http://localhost:8282/Courzelou/cour"
  ngOnInit() {
   this.amount =this.ac.snapshot.paramMap.get('prix');
 
  }
 
  pay(amountee: number) {    
   this.http.post<any>(`${this.url}/stripe/${this.amount}` ,{}).subscribe(data => {
      this.clientSecret = data;
    });
    this.courseService.sendHtmlEmail(this.email,this.amount).subscribe(
      () => {
        console.log(this.email)
        alert("email envoyé !!");
      },
      (error) => {        
        console.error("Erreur lors de l'envoie de mail :", error);
      }
    );
  }
pdfGenerator(){
  this.courseService.PdfGenerator(this.amount).subscribe(
    () => {
      alert("facture génerer !!");
    },
    (error) => {
      console.log(this.email)
      
      console.error("Erreur lors de l'envoie de pdf :", error);
    }
  );
}
 
 
}

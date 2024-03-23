// chat.component.ts
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import Pusher from 'pusher-js';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
date=new Date();
username = '';
message :any = '';
messages = [];

constructor(private http: HttpClient ,private toastr: ToastrService) {
}

ngOnInit(): void {
  Pusher.logToConsole = true;
    var pusher = new Pusher('b549ae65445917884c97', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('Courzelou');
    channel.bind('message', (data) => {
      this.messages.push(data); // Ajouter le nouveau message à la liste des messages
    });
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
    console.log("aaa"+this.toastr.success);
  }
submit(): void {
  this.http.post('http://localhost:8282/api/messages', {
    username: this.username,
    message: this.message
  }).subscribe(() => this.message = '');
  this.toastr.success(this.message , this.username +' '+'a envoyé un message ');

}
}

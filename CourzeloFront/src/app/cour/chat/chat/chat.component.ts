// chat.component.ts
import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/service/chat.service';
import { ActivatedRoute } from '@angular/router';
import { ChatMessage } from 'src/app/model/ChatMessage';
import { HttpClient } from '@angular/common/http';
import Pusher from 'pusher-js';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
 /* messageInput: string = '';
  userId: string="";
  messageList: any[] = [];

  constructor(private chatService: ChatService, private route: ActivatedRoute){}

  ngOnInit() {
  //  this.userId = this.route.snapshot.params['userId'];
   this.chatService.joinRoom("ABC");
    this.lisenerMessage();
  }

  sendMessage() {
    const chatMessage = {
      message: this.messageInput,
      user: this.userId
    }as ChatMessage
    this.chatService.sendMessage("ABC", chatMessage);
    this.messageInput = '';
  }

  lisenerMessage() {
    this.chatService.getMessageSubject().subscribe((messages: any) => {
      this.messageList = messages.map((item: any)=> ({
        ...item,
        message_side: item.user === 1 ? 'sender': 'receiver'
      }))
    });
  }
*/


date=new Date();
username = '';
message :any = '';
messages = [];

constructor(private http: HttpClient) {
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

submit(): void {
  this.http.post('http://localhost:8282/api/messages', {
    username: this.username,
    message: this.message
  }).subscribe(() => this.message = '');
  console.log("****************************************"+this.messages)


  
}
}

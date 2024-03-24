import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service-call';
  posts:any;
  
    constructor(private service:PostService) {}
  
    ngOnInit() {
  
      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
        });
  }
}

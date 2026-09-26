import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { PostServicies } from '../servicies/post-servicies';
import { Post } from '../post/post';
import { Cards } from '../cards/cards';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inactive-post',
  imports: [CommonModule, Cards],
  templateUrl: './inactive-post.html',
  styleUrl: './inactive-post.scss',
})

export class InactivePost implements OnInit {

  posts: Post[] = [] 

  constructor(private postServices: PostServicies){}

  ngOnInit(): void{
    let allPosts = this.postServices.getPosts()
    this.posts = allPosts.filter(post => !post.active)
  }

  updatePost(id:number){
     this.postServices.updatePosts(id)
     this.posts = this.posts.filter(post => !post.active)
  }

}

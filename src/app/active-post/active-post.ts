import { Component, Input, OnInit, ChangeDetectorRef} from '@angular/core';
import { PostServicies } from '../servicies/post-servicies';
import { Post } from '../post/post';
import { Cards } from '../cards/cards';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-active-post',
  imports: [CommonModule, Cards],
  templateUrl: './active-post.html',
  styleUrl: './active-post.scss',
})

export class ActivePost implements OnInit{

  posts: Post[] = [] 

  constructor(private postServices: PostServicies){}

  ngOnInit(): void{
    let allPosts = this.postServices.getPosts()
    this.posts = allPosts.filter(post => post.active)
  }

  updatePost(id:number){
     this.postServices.updatePosts(id)
     this.posts = this.posts.filter(post => post.active) //in service prende gli id, qui, tra gli id esistenti, filtra per ACTIVE
  }
}


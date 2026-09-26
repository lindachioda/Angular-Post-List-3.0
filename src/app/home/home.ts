
import { Component, signal, OnInit, Input } from '@angular/core';
import { Routes, RouterLink } from '@angular/router';
import { PostServicies } from '../servicies/post-servicies';
import { Post } from '../post/post';
import { Highlight } from '../shared/direttive/highlight';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Highlight],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  posts: Post[] = []  

  constructor(private postServices: PostServicies){}

  
  ngOnInit(): Post[] {
    this.posts = this.postServices.getPosts()
    return this.posts
  }


}

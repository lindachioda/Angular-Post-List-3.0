import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServicies } from '../servicies/post-servicies';
import { Post } from '../post/post';


@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
})
export class Detail implements OnInit {

  post?: Post

  constructor(private postServices: PostServicies, 
              private route:ActivatedRoute){
  }

  ngOnInit() {
    let id = Number (
    this.route.snapshot.paramMap.get(`id`))

    this.post = this.postServices.getPostId(id)
  }
}

import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PostServicies } from './servicies/post-servicies';
import { Post } from '../app/post/post';
import { ActivePost } from "./active-post/active-post";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('myapp-two');


}

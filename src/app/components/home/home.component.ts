import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContentComponent } from '../content/content.component';
import { ContactComponent } from '../contact/contact.component';
import { StoryComponent } from "../story/story.component";
import { CreatePostComponent } from "../posts/create-post/create-post.component";
import { PostsComponent } from "../posts/posts.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, ContentComponent, ContactComponent, StoryComponent, CreatePostComponent, PostsComponent]
})
export class HomeComponent {}

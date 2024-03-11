import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContentComponent } from '../content/content.component';
import { ContactComponent } from '../contact/contact.component';
import { StoryComponent } from "../story/story.component";
import { CreatePostComponent } from "../posts/create-post/create-post.component";
import { PostsComponent } from "../posts/posts.component";
import { FriendRequestComponent } from "../friend-request/friend-request.component";
import { SuggestGroupComponent } from "../suggest-group/suggest-group.component";
import { SuggestPageComponent } from "../suggest-page/suggest-page.component";
import { SuggestEventComponent } from "../suggest-event/suggest-event.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, ContentComponent, ContactComponent, StoryComponent, CreatePostComponent, PostsComponent, FriendRequestComponent, SuggestGroupComponent, SuggestPageComponent, SuggestEventComponent]
})
export class HomeComponent {}

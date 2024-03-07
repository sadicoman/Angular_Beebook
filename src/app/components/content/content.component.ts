import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { PreloaderWrapComponent } from "../preloader-wrap/preloader-wrap.component";

@Component({
    selector: 'app-content',
    standalone: true,
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss',
    imports: [HomeComponent, PreloaderWrapComponent]
})
export class ContentComponent {}

import { Component, AfterViewInit } from '@angular/core';

declare var $: any; // Déclare $ pour utiliser jQuery

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [],
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss',
})
export class StoryComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    $('.carousel-card').owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      autoplay: false,
      dots: false,
      autoWidth: true,
    });

    $('.category-card').owlCarousel({
      loop: false,
      margin: 7,
      nav: true,
      autoplay: false,
      dots: false,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      autoWidth: true,
    });

    $('.banner-slider').owlCarousel({
      loop: true,
      margin: 15,
      nav: true,
      autoplay: false,
      dots: true,
      navText: [
        "<i class='ti-angle-left icon-nav'></i>",
        "<i class='ti-angle-right icon-nav'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });

    $('.brand-slider').owlCarousel({
      loop: true,
      margin: 15,
      nav: false,
      autoplay: false,
      dots: false,
      items: 5,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1200: {
          items: 5,
        },
      },
    });

    $('.product-slider').owlCarousel({
      loop: true,
      margin: 3,
      // nav:true,
      // navText: ["<i class='ti-angle-left icon-nav'></i>","<i class='ti-angle-right icon-nav'></i>"],
      autoplay: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1200: {
          items: 2,
        },
      },
    });

    $('.feedback-slider').owlCarousel({
      loop: true,
      margin: 15,
      nav: true,
      autoplay: false,
      dots: false,
      items: 5,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });
    $('.feedback-slider2').owlCarousel({
      loop: true,
      margin: 15,
      nav: true,
      autoplay: false,
      dots: false,
      items: 5,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1200: {
          items: 2,
        },
      },
    });

    $('.story-slider').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      autoplay: true,
      dots: true,
      touchDrag: true,
      navText: [
        "<i class='ti-angle-left icon-nav'></i>",
        "<i class='ti-angle-right icon-nav'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });

    $('.product-slider-6').owlCarousel({
      loop: true,
      margin: 15,
      nav: false,
      autoplay: false,
      dots: false,
      items: 5,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1200: {
          items: 6,
        },
      },
    });
  }
}

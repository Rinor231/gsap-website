import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-fixed-section',
  templateUrl: './fixed-section.component.html',
  styleUrls: ['./fixed-section.component.css']
})
export class FixedSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".fixed-image .image", {
      duration: 0.5,
      scale: 0.4,
      transformOrigin: "top left",
      ease: "none",
      scrollTrigger: {
        trigger: ".fixed-image",
        start: "top top",
        end: "top -100%",
        scrub: true
      }
    });
  }

}

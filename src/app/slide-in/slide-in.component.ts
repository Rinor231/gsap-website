import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';


@Component({
  selector: 'app-slide-in',
  templateUrl: './slide-in.component.html',
  styleUrls: ['./slide-in.component.css']
})
export class SlideInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".slide-in"
        }
      })
      .to(".slide-in .left", { x: 0, duration: 0.5 })
      .to(".slide-in .right", { x: 0, duration: 0.5 })
      .to(".slide-in p", { y: 0, opacity: 1, duration: 1 });
  }

}

import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-pined-section',
  templateUrl: './pined-section.component.html',
  styleUrls: ['./pined-section.component.css']
})
export class PinedSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    const pinedList = document.querySelector(".pined-list");
    const pinedInner = document.querySelector(".pined-inner");

    if (pinedList && pinedInner) {
      gsap.to(pinedList, {
        x: -pinedList.clientWidth + pinedInner.clientWidth,
        scrollTrigger: {
          trigger: ".pined",
          start: "top top",
          end: `+=${pinedList.clientWidth}`,
          pin: true,
          scrub: 1
        }
      });
    }
  }

}

import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { AfterViewInit, ChangeDetectorRef, COMPILER_OPTIONS, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BioComponent } from '../bio/bio.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  tabs: any;
  constructor() { }

  ngOnInit(): void {
    this.tabs = [
      {
        label: 'Home',
        redirect: '/home',
        svgIconName: 'home',
        isVisible: true,
        isHighlighted: false,
      },
      {
        label: 'Bio',
        redirect: '/bio',
        svgIconName: 'bio',
        isVisible: true,
        isHighlighted: false,
      },
      {
        label: 'Projects',
        redirect: '/projects',
        svgIconName: 'projects',
        isVisible: true,
        isHighlighted: false,
      },
      {
        label: 'Contact',
        redirect: '/contact',
        svgIconName: 'contact',
        isVisible: true,
        isHighlighted: false,
      }
    ];
  }

  setActiveItem(url: string) {
  }

}

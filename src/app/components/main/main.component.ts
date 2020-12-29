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
  @ViewChild('home') homeElement: HomeComponent;
  @ViewChild('bio') bioElement: BioComponent;
  @ViewChild('projects') projectElement: ProjectsComponent;
  @ViewChild('contact') contactElement: ContactComponent;

  constructor() { }

  ngOnInit(): void {
    this.tabs = [
      {
        label: 'Home',
        redirect: '/home',
        svgIconName: 'home',
        isVisible: true,
        isHighlighted: true,
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

  scroll(id) {
    switch (id) {
      case 'home': { this.highlightItem(id); this.homeElement.scroll(); break;}
      case 'bio': { this.highlightItem(id); this.bioElement.scroll(); break;}
      case 'projects': { this.highlightItem(id); this.projectElement.scroll(); break;}
      case 'contact': { this.highlightItem(id); this.contactElement.scroll(); break;}
    }
  }

  highlightItem(item: string) {
    this.tabs.forEach(tab => {
      if(tab.svgIconName === item) {
        tab.isHighlighted = true;
      } else {
        tab.isHighlighted = false;
      }
    });
  }
}

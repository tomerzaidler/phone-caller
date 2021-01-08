import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { isQuote } from '@angular/compiler';
import { AfterViewInit, ChangeDetectorRef, COMPILER_OPTIONS, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { Scroll } from '@angular/router';
import { BioComponent } from '../bio/bio.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  tabs: any;
  @ViewChild(MatSidenavContainer) sidenavContainer: MatSidenavContainer;
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
        maxOffset: 967
      },
      {
        label: 'Bio',
        redirect: '/bio',
        svgIconName: 'bio',
        isVisible: true,
        isHighlighted: false,
        maxOffset: 1924
      },
      {
        label: 'Projects',
        redirect: '/projects',
        svgIconName: 'projects',
        isVisible: true,
        isHighlighted: false,
        maxOffset: 2881
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

  ngAfterViewInit() {
    // this.sidenavContainer.scrollable.elementScrolled().subscribe((e) => {
    //   console.log(e);
    // });
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

  onScroll(event: any) {
    const scrollPosition = event?.srcElement?.scrollTop;
      if (scrollPosition > 0 && scrollPosition < 739) { this.highlightItem('home');}
      else if (scrollPosition >= 739 && scrollPosition < 1739) { this.highlightItem('bio');}
      else if (scrollPosition >= 1739 && scrollPosition < 2739) { this.highlightItem('projects');}
      else if (scrollPosition >= 2739 && scrollPosition <= 2891) { this.highlightItem('contact');}
  }
}

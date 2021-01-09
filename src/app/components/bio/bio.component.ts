import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BioComponent implements OnInit {
  @ViewChild('bio') element: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  scroll() {
    if (this.element) {
      this.element.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }

}

import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollService } from 'src/app/scroll.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  @ViewChild('home') element: ElementRef;
  private mainScrollOffset: number;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.mainScrollOffsetObservable.subscribe(offset => {
      this.mainScrollOffset = offset;
      console.log(this.mainScrollOffset);
    });
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

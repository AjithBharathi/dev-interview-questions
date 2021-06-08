import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Html } from './data/html';
import { Css } from './data/css';
import { Javascript } from './data/javascript';
import { Angular } from './data/angular';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    let returnItems: any = items.filter(item => {
      return Object.keys(item).some(key => {
        return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
      });
    });
    return returnItems;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FilterPipe]
})
export class AppComponent implements OnInit {
  title = "Interview Questions";
  searchInput: string = "";
  showTitle: boolean = true;
  options = [
    { label: 'HTML', value: 'html' },
    { label: 'CSS', value: 'css' },
    { label: 'Javascript', value: 'js' },
    { label: 'Angular', value: 'angular' },
  ];
  questions: any = [];
  questionsCopy: any = [];

  scrollTop = 0;
  hideNav = false;

  constructor(private filterPipe: FilterPipe, private element: ElementRef) {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth <= 768) {
      this.showTitle = false;
    }
    else {
      this.showTitle = true;
    }
  }

  onScroll(event: any) {
    console.log(this.scrollTop, event.target.scrollTop)

    if (this.scrollTop < event.target.scrollTop && event.target.scrollTop > 30) {
      this.hideNav = true;
      this.scrollTop = event.target.scrollTop;
    }
    if (this.scrollTop > event.target.scrollTop && this.scrollTop - event.target.scrollTop >= 30) {
      this.hideNav = false;
      this.scrollTop = event.target.scrollTop;
    }

  }

  ngOnInit() {
    if (window.innerWidth <= 768) {
      this.showTitle = false;
    }
    else {
      this.showTitle = true;
    }

    this.questions = Html;
    this.questionsCopy = Html;
  }

  optionChange(val: string) {
    switch (val) {
      case 'html':
        this.questions = Html;
        this.questionsCopy = Html;
        break;
      case 'css':
        this.questions = Css;
        this.questionsCopy = Css;
        break;
      case 'js':
        this.questions = Javascript;
        this.questionsCopy = Javascript;
        break;
      case 'angular':
        this.questions = Angular;
        this.questionsCopy = Angular;
        break;
      default:
        this.questions = Html
        this.questionsCopy = Html
    }
  }

  optionClick() {
    let el = this.element.nativeElement.querySelector('#drawer_content');
    el.scrollTo(0, 0);
  }

  onUpdateFilter() {
    this.questions = this.filterPipe.transform(this.questionsCopy, this.searchInput);
  }

}



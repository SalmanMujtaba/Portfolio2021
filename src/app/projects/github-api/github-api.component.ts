import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: '[app-github-api]',
  templateUrl: './github-api.component.html',
  styleUrls: ['./github-api.component.scss']
})
export class GithubApiComponent implements AfterViewInit, OnInit {
  @ViewChild('videoPlayer', { static: true }) videoplayer: ElementRef;
  video: HTMLVideoElement;
  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.video = this.videoplayer.nativeElement;
    this.video.muted = true;
    this.video.play();
  }

}

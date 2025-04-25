import {Directive, ElementRef, Renderer2, inject, Input, AfterViewInit} from '@angular/core';


type QueueItem = () => Promise<void>

@Directive({
  selector: '[typewriter]',
})

export class TypewriterDirective implements AfterViewInit{
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  
  queue: QueueItem[] = [];
  
  @Input() isLoop: boolean = false;
  @Input() typewriter: string[] = [];
  @Input() typeSpeed: number = 60;
  @Input() deleteSpeed: number = 40;
  @Input() pauseDuration: number = 2000;
  
  ngAfterViewInit() {
    for (let i = 0; i < this.typewriter.length; i++) {
      this.addString(this.typewriter[i])

      // Don't remove the last string
      if (this.isLoop || i < this.typewriter.length - 1) {
        this.waitForNext()
        this.removeString()
      }
    }
  
    this.start()
  }
  
  private addToQueue(callback: (resolve: () => void) => void) {
    this.queue.push(() => {
      return new Promise(callback);
    })
  }

  addString(string: string) {
    this.addToQueue((resolve) => {
      let i = 0;
      let word = "";
      const interval = setInterval(() => {
        word += string[i]
        this.renderer.setProperty(this.el.nativeElement, 'innerHTML', word)
        i ++
        if (i >= string.length) {
          clearInterval(interval)
          resolve()
        }
      }, this.typeSpeed);
    });
  }

  removeString() {
    this.addToQueue((resolve) => {
      let word = this.el.nativeElement.innerHTML;

      const interval = setInterval(() => {
        word = word.slice(0,-1)
        this.renderer.setProperty(this.el.nativeElement, 'innerHTML', word)

        if (word.length <= 0) {
          clearInterval(interval)
          resolve()
        }
      }, this.deleteSpeed);
    });
  }

  waitForNext() {
    this.addToQueue((resolve) => {
      setTimeout(resolve, this.pauseDuration);
    });
  }

  async start() {
    let callback = this.queue.shift()
    while (callback != null) {
      await callback()

      // Angular 19 unable to handle loop at this moment, not sure is it cause by SSR
      if (this.isLoop) {
        this.queue.push(callback)
      }
      callback = this.queue.shift()
    }
  }
}
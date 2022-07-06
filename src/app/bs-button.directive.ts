import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective {
  @Input() appBsButton: any
  @Input() mouseDownClass: any

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(){
    // const button = (this.el.nativeElement as HTMLElement)
    // button.classList.add('btn')
    // button.classList.add('btn-primary')
    this.renderer.addClass(this.el.nativeElement, `btn-${this.appBsButton || 'primary'}`)
  }
  @HostListener('mousedown') onMouseDown(){
    // 移除原來的樣式
    this.renderer.addClass(this.el.nativeElement, `btn-${this.appBsButton}`)
    // 加入mousedown樣式
    this.renderer.addClass(this.el.nativeElement, `btn-${this.mouseDownClass}`)
  }
  @HostListener('mouseup') onMouseUp(){
    // 移除mousedown樣式
    this.renderer.addClass(this.el.nativeElement, `btn-${this.mouseDownClass}`)
    // 加入原來的樣式
    this.renderer.addClass(this.el.nativeElement, `btn-${this.appBsButton}`)
  }
}

import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Component({
    selector: 'app-simple-modal',
    template: `
  <div id="{{elementId}}" #modalcontainer class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content bg-dark">
        <div class="modal-header">
        <h3 class="modal-title text-light font-weight-normal">{{title}}</h3>
          <button type="button" class="close text-light" data-dismiss="modal"><span>&times;</span></button>
        </div>
        <div class="modal-body " (click)="closeModal()">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  </div>
  `,
    styles: [`
  `]
})
export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;
    @ViewChild('modalcontainer') containerEl: ElementRef;

    constructor(@Inject(JQ_TOKEN) private $: any) { }

    closeModal() {
        if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
            console.log(this.$);
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    }
}

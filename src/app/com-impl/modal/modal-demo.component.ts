import { Component, ViewChild } from '@angular/core';

// todo: change to ng2-bootstrap
import { ModalDirective } from '../../com/modal/modal.component';
// webpack html imports
//let template = require('./modal-demo.component.html');

@Component({
  selector: 'modal-demo',
  templateUrl: './modal-demo.component.html'
  //template: template
})
export class ModalDemoComponent {
  @ViewChild('childModal') public childModal:ModalDirective;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }
}

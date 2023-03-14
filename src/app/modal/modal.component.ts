import { Component } from '@angular/core';
import { ModalDismissReasons, NgbOffcanvas  } from '@ng-bootstrap/ng-bootstrap';
//import { ModalComponent } from './modal.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  textareaValue: string = '';
  constructor(private offcanvasService: NgbOffcanvas) {}

  open(content: any) {
    this.offcanvasService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onSubmit() {
    console.log('Submit button clicked!');
    console.log(this.textareaValue);
    location.reload();
  }
}

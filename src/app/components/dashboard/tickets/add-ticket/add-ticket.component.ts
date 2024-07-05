import { Component, ElementRef, EventEmitter, input, Output, ViewChild, viewChild } from '@angular/core';
import { ComtrolComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { Ticket } from '../ticket.model';

@Component({
    selector: 'app-add-ticket',
    standalone: true,
    templateUrl: './add-ticket.component.html',
    styleUrl: './add-ticket.component.css',
    imports: [ComtrolComponent,FormsModule,ButtonComponent]
})
export class AddTicketComponent {
    inputTitle:string = "";
    inputRequest:string = ""
    @ViewChild("form") form?:ElementRef<HTMLFormElement>
    @Output() ticket = new EventEmitter<Ticket>()
    handleSubmit(){
        const time = new Date().getTime();
        this.ticket.emit({
            id:String(time),
            title:this.inputTitle,
            request:this.inputRequest,
            status:"open"
        });
        this.form?.nativeElement.reset();
    }
}

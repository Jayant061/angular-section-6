import { Component, input, Input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
// @Input({required:true}) ticketData!:Ticket;
ticketData = input.required<Ticket>();
isExpand = signal<boolean>(false);
handleToggle(){
  this.isExpand.update((prev)=>!prev);
}
ticketId = output<string>();
handleCloseTicket(){
this.ticketId.emit(this.ticketData().id);
}
}

import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { AddTicketComponent } from "./add-ticket/add-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
    selector: 'app-tickets',
    standalone: true,
    templateUrl: './tickets.component.html',
    styleUrl: './tickets.component.css',
    imports: [ButtonComponent, AddTicketComponent, TicketComponent]
})
export class TicketsComponent {
    tickets:Ticket[] = [];
    handleTicket(ticket:Ticket){
        this.tickets.push(ticket);
    }
    handleTicketId(id:string){

        this.tickets = this.tickets.map((ticket)=>{
            if(ticket.id===id){
                return {...ticket,status:"closed"}
            }
            return ticket;
        })
    }
}

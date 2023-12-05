import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.scss',
})
export class BalanceComponent {
  // Variable implícita
  title: string = "The Balance Component";

  // Variable explícita
  search: string = "Buscar...";
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-lista-de-compras',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './lista-de-compras.html',
  styleUrl: './lista-de-compras.scss',
})
export class ListaDeCompras {
  form = {
    item: '',
    quantity: null as number | null,
  };

  items: Array<{ item: string; quantity: number }> = [];
  displayedColumns: string[] = ['item', 'quantity', 'actions'];

  addItem(formRef: NgForm) {
    if (formRef.valid) {
      const novo = {
        item: this.form.item.trim(),
        quantity: Number(this.form.quantity),
      };

      this.items = [...this.items, novo];

      formRef.resetForm();
    }
  }

  removeItem(element: { item: string; quantity: number }) {
    this.items = this.items.filter(
      (i) => !(i.item === element.item && i.quantity === element.quantity)
    );
  }
}

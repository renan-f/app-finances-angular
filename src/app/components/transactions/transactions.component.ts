import { Component, OnInit } from '@angular/core';
import { Transactions } from 'src/app/models/transactions.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: any[] = [];



  constructor() {
    this.addTransation();
  }

  ngOnInit(): void {
  }

  formatTrasaction(transaction: Transactions) {
    let transactionFormat = {
      description: transaction.description,
      category: transaction.category,
      date: transaction.date,
      type: transaction.type === '1' ? 'Receita' : 'Despesa',
      value: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(transaction.value)
    }
    this.transactions.push(transactionFormat);
  }

  addTransation() {
    this.formatTrasaction(new Transactions('Salário', 'Salário', '05/08/2021', '1', 1525.25));
    this.formatTrasaction(new Transactions('Cartão', 'Outros', '15/08/2021', '0', 1200.76));
    this.formatTrasaction(new Transactions('Corte de cabelo', 'Beleza', '22/08/2021', '0', 25.00));
  }

}

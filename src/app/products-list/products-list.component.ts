import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products = [
    { id: 1, nome: 'jaca', descricao: 'Jaca plantada na fazenda do seu Zé', preco: '20.50', batch: '1' },
    { id: 2, nome: 'kiwi', descricao: 'Kiwi verde', preco: '15.75', batch: '2' },
    { id: 3, nome: 'abacate', descricao: 'Abacate maduro', preco: '2.50', batch: '3' },
    { id: 4, nome: 'batata sala', descricao: 'Batata salsa podre', preco: '.58', batch: '1' },
    { id: 5, nome: 'batata', descricao: 'Batata inglesa', preco: '4.42', batch: '2' },
    { id: 6, nome: 'morango', descricao: 'Bandeja de morangos grande e avermelhados', preco: '5', batch: '3' },
    { id: 7, nome: 'açaí', descricao: 'Balde de açaí 3l', preco: '30', batch: '1' },
    { id: 8, nome: 'banana', descricao: 'Cacho de banana madura', preco: '7', batch: '2' },
  ]

  constructor() { }

  ngOnInit() {
  }

}

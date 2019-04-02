import { Component, OnInit } from '@angular/core';

//  SERVICES
import { APIService } from 'src/app/services/api.service';
//  THIRD PARTYS
import { NgxLoadingConfig, ngxLoadingAnimationTypes } from 'ngx-loading';


// PRODUCTs INTERFACE
export interface ProductInterface {
  name     : string;
  quantity : number;
  price    : number;
  subtotal : number;
}


@Component({
  selector    : 'app-new-sale',
  templateUrl : './new-sale.page.html',
  styleUrls   : ['./new-sale.page.scss'],
})
export class NewSalePage implements OnInit {
  public clients       : Array<{ name: string }>;
  public branchOffices : Array<{name: string, currencyCode: string}>;
  public products      : Array<ProductInterface>;

  public selectedClient       : string;
  public selectedBranchOffice : string;
  public selectedCurrency     : string;
  public selectedProducts     : Array<ProductInterface>

  public total : number;

  public isLoading   : boolean;
  public loadingOpts : NgxLoadingConfig;

  constructor(private _api: APIService) {
    this.clients       = [];
    this.branchOffices = [];
    this.products      = [];

    this.selectedClient       = '';
    this.selectedBranchOffice = '';
    this.selectedCurrency     = '';
    this.selectedProducts     = [];

    this.total = 0;

    this.isLoading   = false;
    this.loadingOpts = {
      animationType            : ngxLoadingAnimationTypes.circle,
      primaryColour            : '#279AFF',
      secondaryColour          : 'rgba(255, 255, 255, .5)',
      backdropBackgroundColour : 'rgba(25, 40, 67, .25)'
    };
  }

  ngOnInit() {
    // this.isLoading = true;
    this.addProduct();

    this._api.getClients()
      .then(clients => this.clients = clients)
      .then(_ => this._api.getBranchOffices() )
      .then(branchOffices => this.branchOffices = branchOffices)
      .then(_ => this._api.getProducts() )
      .then(products => this.products = products)
      .then(_ => this.isLoading = false )
      .catch(err => {
        console.log('OCURRIO UN ERROR', err);
        this.isLoading = false;
      });
  }

  /** AGREGA UN NUEVO CLIENTE AL ARRAY `clients` */
  addClient(newClient): void {
    if ( newClient != '' ){
      this.clients = [...this.clients, { name: newClient}];
      this.selectedClient = newClient;
    }
  }

  /** AGREGA UN PRODUCTO VACIO AL ARRAY DE `selectedProducts` */
  addProduct(): void {
    this.selectedProducts.push({
      name: '', quantity: 1, price: 0, subtotal: 0
    })
  }


  /** REMUEVE EL PRODUCTO SELECCIONADO DEL ARRAY `selectedProducts` */
  removeProduct(index): void {
    this.selectedProducts.splice(index, 1);
  }

  /** SELECCIONA EL CODIGO DE LA MONEDA DEL `brachOffice` CUANDO CAMBIA DE VALOR */
  onBranchOfficeChange(branchOffice): void {
    this.selectedCurrency = branchOffice.currencies[0].code;
  }

  /** */
  onSelectedProductChange(product, pIndex): void {
    //
  }

  /** CALCULA EL SUBTOTAL CUANDO CAMBIE LA CANTIDAD O EL PRECIO DEL PRODUCTO */
  calcSubtotal(index): void {
    let p = this.selectedProducts[index];
    p.subtotal = p.quantity * p.price;

    this.calcTotal();
  }

  /** CALCULAR TOTAL DE VENTA */
  calcTotal(): void {
    this.total = this.selectedProducts.reduce((prev, val) => prev + val.subtotal, 0)
  }
}

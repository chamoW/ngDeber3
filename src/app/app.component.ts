import { Item } from './item/item.interface';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  urlData = 'https://gist.githubusercontent.com/jdjuan/165053e6cb479a840c88e3e94b33e724/raw/4542ef950b2b32fbe2eea0b3df0338ffe67eae12/todo.json';

  data: Item[] = [];
  allData: Item[] = [];
  inputValue = '';
  faltantes = 0;
  completos = 0;
  mostrando = 'Todos';


  constructor(httpClient: HttpClient) {
    httpClient.get<any>(this.urlData).subscribe(data => {
        console.log(data);

        data.filter(value => {
          const item: Item = {
          title : value,
          state: false
        };

        console.log(item);
        this.data.push(item);
        this.allData = this.data;
        this.countData();
      });
    });



  }

  grabarRegistro(event) {
    if (event.code === 'Enter') {

      if (this.inputValue !== '') {
        console.log(event, this.inputValue);
        const item: Item = {
          title : this.inputValue,
          state: false
        };
        this.allData.push(item);

        if (this.mostrando !== 'Completados') {
          this.data.push(item);
        }

        this.inputValue = '';
        this.countData();
      }
    }
  }

  deleteItemOnParent(event) {
    this.data = this.data.filter(item => item !== event);
    this.allData = this.allData.filter(item => item !== event);
    this.countData();

  }

  doUndoAll(value) {


    this.allData.filter(item => {
      item.state = value;
    });


    if (this.mostrando === 'Completados') {
      this.data = this.allData.filter(item => item.state === true) ;
    } else if (this.mostrando === 'Faltantes') {
      this.data = this.allData.filter(item => item.state === false) ;
    } else {
      this.data = this.allData;
    }

    console.log(this.allData);
    console.log(this.data);


    this.countData();
    }

  verifyDataOnParent(event) {
    console.log('VERIFICANDO ...');
    this.countData();

    if (this.mostrando !== 'Todos') {
       this.loadFilteredData(!event.state);
    }

  }

  showAll() {
    this.mostrando = 'Todos';
    this.data = this.allData;


  }

  loadFilteredData(valueToFilter) {
    if (valueToFilter) {
      this.mostrando = 'Completados';
    } else {
      this.mostrando = 'Faltantes';
    }

    this.data = this.allData.filter(item => item.state === valueToFilter) ;


  }
  private countData() {
    this.faltantes = this.allData.filter(itemFiltro => itemFiltro.state === false).length;
    this.completos = this.allData.filter(itemFiltro => itemFiltro.state === true).length;
  }

  deleteCompleted() {
    this.allData = this.allData.filter(item => item.state === false);
    this.data = this.data.filter(item => item.state === false);
    this.countData();
  }


}

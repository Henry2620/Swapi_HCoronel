import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SwapiService } from '../services/swapi.service';
import { CommonModule } from '@angular/common';
import { NzCardComponent, NzCardMetaComponent } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-character-list',
  standalone : true, 
  imports : [CommonModule, HttpClientModule, NzCardComponent, NzCardMetaComponent],
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class CharacterListComponent implements OnInit {
  people: any[] = [];

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiService.getPeople().subscribe(data => {
      if (Array.isArray(data.results)) {
        this.people = data.results;
      } else {
        console.error('La respuesta no contiene un array en la propiedad results:', data);
      }
    });
  }
}

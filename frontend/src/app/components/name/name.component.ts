import {Component, OnInit} from '@angular/core';
import {NameService} from "../../services/name.service";

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrl: './name.component.scss'
})
export class NameComponent implements OnInit {
  names: string[] = [];  // Array to store the fetched names

  constructor(private nameService: NameService) {}  // Inject the service into the component

  ngOnInit(): void {
    this.nameService.getNames().subscribe((names) => {
      this.names = names;  // Store the names returned from the service
    });
  }
}

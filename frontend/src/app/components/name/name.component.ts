import {Component, OnInit} from '@angular/core';
import {NameService} from "../../services/name.service";

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrl: './name.component.scss'
})
export class NameComponent implements OnInit {
  names: string[] = [];

  constructor(private nameService: NameService) {}

  ngOnInit(): void {
    this.nameService.getNames().subscribe((names) => {
      this.names = names;
    });
  }
}

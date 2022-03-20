import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignant-home',
  templateUrl: './enseignant-home.component.html',
  styleUrls: ['./enseignant-home.component.scss']
})
export class EnseignantHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (!localStorage.getItem('page_js')) {
      localStorage.setItem('page_js', 'no reload');
      location.reload();
      console.log(localStorage.getItem('page_js'));
    } else {
      localStorage.removeItem('page_js');
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant-home',
  templateUrl: './etudiant-home.component.html',
  styleUrls: ['./etudiant-home.component.scss']
})
export class EtudiantHomeComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursService } from 'src/app/_services/cours.service';

@Component({
  selector: 'app-cours-etudiants',
  templateUrl: './cours-etudiants.component.html',
  styleUrls: ['./cours-etudiants.component.scss']
})
export class CoursEtudiantsComponent implements OnInit {
  id;

  ids: string;
  url 
  cours ;
  coursResults : any = [];
  url2
  constructor(private route: ActivatedRoute,private router: Router,private coursService :CoursService,private sanitization: DomSanitizer) {}
  ngOnInit(): void {
   
    //console.log(this.id)
    //console.log(this.ids)
    console.log(this.router.url)
    this.id=this.router.url.split('/');
    console.log(this.id[2])
    this.ids=this.id[2]
    console.log(this.ids)
    this.getCours();
  }

  // getCours(){
  //   let results =[]
    
  //   console.log("imed")
  //  this.coursService.getToutesCours().subscribe(e=>{
    
  //      this.cours=e.map(p=>{
  //       p.filename=this.sanitization.bypassSecurityTrustResourceUrl("http://localhost:3007/"+p.filename);
  //       //window.open(p.filename)
  //       console.log('file',p.filename.changingThisBreaksApplicationSecurity)
  //       this.url2=p.filename.changingThisBreaksApplicationSecurity
  //       //this.openExercice(this.url2)
  //       console.log('p',this.url2)
  //       p.path=p.filename.changingThisBreaksApplicationSecurity;
        
  //     return p;
     
      
     
  //     })   

  //       console.log(e)
  //       for (let i of e )
  //       {
  //           console.log('i :',i.classe)
  //           for (let c of i.classe )
  //           {
  //             console.log('classeList :',c._id)
  //             console.log('classsecourant',this.ids)
  //             if(c._id == this.ids)
  //                {
  //                  this.coursResults.push(i);
  //                }
              
  //           }
  //       }
  //       console.log('this.coursResults[0]',this.coursResults[0])
  //       console.log('this.coursResults',this.coursResults)
        
  //         })   
  // }

  getCours()
  {
    //let results =[]
    
    console.log("imed")
    this.coursService.getCoursByClasse(this.ids).subscribe(e=>{
    
        this.cours=e.map(p=>{
         p.filename=this.sanitization.bypassSecurityTrustResourceUrl("http://localhost:3007/"+p.filename);
         //window.open(p.filename)
         console.log('file',p.filename.changingThisBreaksApplicationSecurity)
         this.url2=p.filename.changingThisBreaksApplicationSecurity
         //this.openExercice(this.url2)
         console.log('p',this.url2)
         p.path=p.filename.changingThisBreaksApplicationSecurity;
        
       return p;
     
      
     
      })  
  }
    )}
    

  updateDowload(id)
  {
      this.coursService.updateDownload(id).subscribe(e=>{
        console.log(e)
      })
  }
  openFile(x,id)
 {
  this.updateDowload(id)
   window.open(x)
 }

}

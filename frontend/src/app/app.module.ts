import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSummernoteModule } from 'ngx-summernote';
import { ToastrModule } from 'ngx-toastr';

import {
  HashLocationStrategy,
  Location,
  LocationStrategy,
} from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './backoffice/products/products.component';
import { AddComponent } from './backoffice/products/add/add.component';
import { MainComponent } from './backoffice/main/main.component';
import { RoleComponent } from './backoffice/role/role.component';
import { AddRoleComponent } from './backoffice/role/add-role/add-role.component';
import { UserListComponent } from './backoffice/user-list/user-list.component';
import { AddUserComponent } from './backoffice/user-list/add-user/add-user.component';
import { UpdateUserComponent } from './backoffice/user-list/update-user/update-user.component';
import { TemplateCrecheComponent } from './creche/directeur/template-creche/template-creche.component';
import { HomeEnseigCrecheComponent } from './creche/enseignant/home-enseig-creche/home-enseig-creche.component';
import { HomeParentCrecheComponent } from './creche/parent/home-parent-creche/home-parent-creche.component';
import { AuthGuard } from './_helpers/auth.guard';
import { UpdateRoleComponent } from './backoffice/role/update-role/update-role.component';
import { EtablissementComponent } from './backoffice/etablissement/etablissement.component';
import { AddEtablissementComponent } from './backoffice/etablissement/add-etablissement/add-etablissement.component';
import { UpdateEtablissementComponent } from './backoffice/etablissement/update-etablissement/update-etablissement.component';
import { TokenInterceptorServiceService } from './_services/token-interceptor-service.service';

import { EtbalissementemplComponent } from './Etablissements/etbalissementempl/etbalissementempl.component';
import { MatieresComponent } from './Etablissements/etbalissementempl/matieres/matieres.component';
import { AddMatiereComponent } from './Etablissements/etbalissementempl/matieres/add-matiere/add-matiere.component';
import { UpdateMatiereComponent } from './Etablissements/etbalissementempl/matieres/update-matiere/update-matiere.component';
import { EnseignantsComponent } from './Etablissements/etbalissementempl/enseignants/enseignants.component';
import { AddEnseignantComponent } from './Etablissements/etbalissementempl/enseignants/add-enseignant/add-enseignant.component';
import { UpdateEnseignantComponent } from './Etablissements/etbalissementempl/enseignants/update-enseignant/update-enseignant.component';
import { ClassesComponent } from './Etablissements/etbalissementempl/classes/classes.component';
import { AddClassesComponent } from './Etablissements/etbalissementempl/classes/add-classes/add-classes.component';
import { UpdateClasseComponent } from './Etablissements/etbalissementempl/classes/update-classe/update-classe.component';
import { DirecteurHomeComponent } from './Etablissements/etbalissementempl/directeur-home/directeur-home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EtudiantsComponent } from './Etablissements/etbalissementempl/etudiants/etudiants.component';
import { AddEtudiantComponent } from './Etablissements/etbalissementempl/etudiants/add-etudiant/add-etudiant.component';
import { UpdateEtudiantComponent } from './Etablissements/etbalissementempl/etudiants/update-etudiant/update-etudiant.component';
import { ViewClasseComponent } from './Etablissements/etbalissementempl/classes/view-classe/view-classe.component';
//import { TemplEnseignantComponent } from './Etablissements/templ-enseignant/templ-enseignant.component';
import { EnseignantHomeComponent } from './Etablissements/Enseignant/templ-enseignant/enseignant-home/enseignant-home.component';
import { TemplEnseignantComponent } from './Etablissements/Enseignant/templ-enseignant/templ-enseignant.component';
import { ClassesEnseigComponent } from './Etablissements/Enseignant/templ-enseignant/classes-enseig/classes-enseig.component';
import { CoursComponent } from './Etablissements/Enseignant/templ-enseignant/cours/cours.component';
import { AddCoursComponent } from './Etablissements/Enseignant/templ-enseignant/cours/add-cours/add-cours.component';
import { UpdateCoursComponent } from './Etablissements/Enseignant/templ-enseignant/cours/update-cours/update-cours.component';
import { MatieresEnseigComponent } from './Etablissements/Enseignant/templ-enseignant/matieres-enseig/matieres-enseig.component';
import { ListEtudiantsComponent } from './Etablissements/Enseignant/templ-enseignant/list-etudiants/list-etudiants.component';
import { TemplEtudiantComponent } from './Etablissements/Etudiant/templ-etudiant/templ-etudiant.component';
import { EtudiantHomeComponent } from './Etablissements/Etudiant/templ-etudiant/etudiant-home/etudiant-home.component';
import { CoursEtudiantsComponent } from './Etablissements/Etudiant/templ-etudiant/cours-etudiants/cours-etudiants.component';
//import { TemplEtudiantComponent } from './Etablissements/Etudiant/templ-etudiant/templ-etudiant.component';
//import { EtudiantHomeComponent } from './Etablissements/Etudiant/templ-etudiant/etudiant-home/etudiant-home.component';
//import { CoursEtudiantsComponent } from './Etablissements/Etudiant/templ-etudiant/cours-etudiants/cours-etudiants.component';
//import { TemplEtudiantComponent } from './Etablissements/templ-etudiant/templ-etudiant.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BackofficeComponent,
    RegisterComponent,
    ProductsComponent,
    AddComponent,
    MainComponent,
    RoleComponent,
    AddRoleComponent,
    UserListComponent,
    AddUserComponent,
    UpdateUserComponent,
    TemplateCrecheComponent,
    HomeEnseigCrecheComponent,
    HomeParentCrecheComponent,
    UpdateRoleComponent,
    EtablissementComponent,
    AddEtablissementComponent,
    UpdateEtablissementComponent,
  
    EtbalissementemplComponent,
  
    MatieresComponent,
  
    AddMatiereComponent,
  
    UpdateMatiereComponent,
  
    EnseignantsComponent,
  
    AddEnseignantComponent,
  
    UpdateEnseignantComponent,
  
    ClassesComponent,
  
    AddClassesComponent,
  
    UpdateClasseComponent,
  
    DirecteurHomeComponent,
  
    EtudiantsComponent,
  
    AddEtudiantComponent,
  
    UpdateEtudiantComponent,
  
    ViewClasseComponent,
  
    TemplEnseignantComponent,
  
    EnseignantHomeComponent,
  
    ClassesEnseigComponent,
  
    CoursComponent,
  
    AddCoursComponent,
  
    UpdateCoursComponent,
  
    MatieresEnseigComponent,
  
    ListEtudiantsComponent,
  
    TemplEtudiantComponent,
  
    EtudiantHomeComponent,
  
    CoursEtudiantsComponent,
  
    //TemplEtudiantComponent,
  
    //EtudiantHomeComponent,
  
    //CoursEtudiantsComponent,
  
  
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    FormsModule, 
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSummernoteModule,
    NgSelectModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorServiceService,
      multi : true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

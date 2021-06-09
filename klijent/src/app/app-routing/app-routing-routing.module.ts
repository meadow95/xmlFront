import { PorukeComponent } from './../poruke/poruke.component';
import { NovaPorukaComponent } from './../profil/nova-poruka/nova-poruka.component';
import { DetaljiComponent } from './../smestaj/detalji/detalji.component';
import { ProfilComponent } from './../profil/profil.component';
import { RegistracijaComponent } from './../registracija/registracija.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { SmestajComponent } from '../smestaj/smestaj.component';
import { LoginComponent } from '../login/login.component';
import { TagoviComponent } from '../tagovi/tagovi.component';
import { LokacijeComponent } from '../lokacije/lokacije.component';
import { ProfilPretragaComponent } from '../profil-pretraga/profil-pretraga.component';
import { NoviComponent } from '../novi_post/novi.component';
import { ZahteviComponent } from '../zahtevi/zahtevi.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: 'smestaj', component: SmestajComponent },
  { path: 'registracija', component: RegistracijaComponent },
  { path: 'login', component: LoginComponent},
  { path: 'profil', component: ProfilComponent },
  { path: 'smestaj/detalji/:smestajId', component: DetaljiComponent},
  { path: 'profil/poruka/:agentId', component: NovaPorukaComponent},
  { path: 'poruke', component: PorukeComponent},
  { path: 'tagovi', component: TagoviComponent},
  { path: 'lokacije', component: LokacijeComponent},
  { path: 'profilPretraga', component: ProfilPretragaComponent},
  { path: 'newPost', component: NoviComponent},
  { path: 'zahtevi', component: ZahteviComponent},
  { path: 'home', component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingRoutingModule { }

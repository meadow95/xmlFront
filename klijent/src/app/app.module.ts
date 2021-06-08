import { NovaPorukaComponent } from './profil/nova-poruka/nova-poruka.component';
import { KomentarService } from './services/komentar.service';
import { Interceptor } from './login-core/interceptor';
import { ToggleLoginService } from './login/toggle-login.service';
import { AlertService } from './alert/alert.service';
import { AuthService } from './login-core/auth.service';
import { HttpClient, HttpHandler, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { KorisnikService } from './korisnik/korisnik.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { AppRoutingRoutingModule } from './app-routing/app-routing-routing.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router/src/router_module';
import { HeaderComponent } from './header/header.component';
import { SmestajComponent } from './smestaj/smestaj.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TokenStorage } from './login-core/token-storage';
import { AlertComponent } from './alert/alert.component';
import { ProfilComponent } from './profil/profil.component';
import { SmestajService } from './smestaj/smestaj.service';
import { DetaljiComponent } from './smestaj/detalji/detalji.component';
import { PorukaService } from './services/poruka.service';
import { PorukeComponent } from './poruke/poruke.component';
import { LokacijeComponent } from './lokacije/lokacije.component';
import { TagoviComponent } from './tagovi/tagovi.component';
import { ProfilPretragaComponent } from './profil-pretraga/profil-pretraga.component';
import { PostComponent } from './post/post.component';
import { PostService } from './post.service';
import { HomeComponent } from './home/home.component';
import { ZahteviComponent } from './zahtevi/zahtevi.component';
import { NoviComponent } from './novi_post/novi.component';
import { ZahteviService } from './zahtevi.service';



@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    HeaderComponent,
    SmestajComponent,
    RegistracijaComponent,
    LoginComponent,
    AlertComponent,
    ProfilComponent,
    DetaljiComponent,
    NovaPorukaComponent,
    PorukeComponent,
    LokacijeComponent,
    TagoviComponent,
    ProfilPretragaComponent,
    PostComponent,
    HomeComponent,
    ZahteviComponent,
    NoviComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    KorisnikService,
    AuthService,
    TokenStorage,
    AlertService,
    ToggleLoginService,
    KomentarService,
    PorukaService,
    PostService,
    ZahteviService,
    {provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi : true},
    SmestajService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

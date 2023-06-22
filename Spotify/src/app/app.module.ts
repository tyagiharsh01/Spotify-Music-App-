import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { RegisterationFormComponent } from './registeration-form/registeration-form.component';
import { CreatePlayListComponent } from './create-play-list/create-play-list.component';
import { SongComponent } from './song/song.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { SongFromPlayListComponent } from './song-from-play-list/song-from-play-list.component';
import { DeletePlaylistComponent } from './delete-playlist/delete-playlist.component';
import { ShowPlayListComponent } from './show-play-list/show-play-list.component';
import { NameComponent } from './name/name.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterationFormComponent,
    CreatePlayListComponent,
    SongComponent,
    DashBoardComponent,
    SongFromPlayListComponent,
    DeletePlaylistComponent,
    ShowPlayListComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatRippleModule,
    LayoutModule,
    MatSidenavModule,
    MatInputModule,
    AppRoutingModule,
    MatListModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

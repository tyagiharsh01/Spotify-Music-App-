import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterationFormComponent } from './registeration-form/registeration-form.component';
import { AppComponent } from './app.component';
import { CreatePlayListComponent } from './create-play-list/create-play-list.component';
import { SongComponent } from './song/song.component';
import { AuthGuard } from './guards/auth.guard';
import { SongFromPlayListComponent } from './song-from-play-list/song-from-play-list.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { DeletePlaylistComponent } from './delete-playlist/delete-playlist.component';
import { LogoutGuard } from './guards/logout.guard';
import { ShowPlayListComponent } from './show-play-list/show-play-list.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"registration",component:RegisterationFormComponent,
    canDeactivate:[LogoutGuard]
   },
  {
    path:"createPlayList",component:CreatePlayListComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"showSong",component:SongFromPlayListComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"deletePlaylist",component:DeletePlaylistComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"playlist",component:ShowPlayListComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"dashBoard",component:DashBoardComponent
  },
  {
    path: "", redirectTo: "/dashBoard", pathMatch: "full"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullBodyPictureComponent } from './full-body-picture/full-body-picture.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

const routes: Routes = [
  { path: '', component: SlideshowComponent },
  { path: 'legal_notice', component: LegalNoticeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

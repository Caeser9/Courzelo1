import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './core/front-office/Formateur-Admin/login/login.component';
import { RegisterComponent } from './core/front-office/Formateur-Admin/register/register.component';
import { EditProfileComponent } from './core/back-office/User/edit-profile/edit-profile.component';
import { AdminListComponent } from './core/back-office/User/admin-list/admin-list.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { AddProfileComponent } from './core/back-office/User/add-profile/add-profile.component';
import { TwoWayFactorPageComponent } from './core/front-office/two-way-factor-page/two-way-factor-page.component';
import { FormateurListComponent } from './core/back-office/User/formateur-list/formateur-list.component';
import { UploadFileComponent } from './core/back-office/User/upload-file/upload-file.component';
import { AddAdminComponent } from './core/back-office/User/add-admin/add-admin.component';
import { AddFormateurComponent } from './core/back-office/User/add-formateur/add-formateur.component';
import { CourseListComponent } from './cour/course-list/course-list.component';
import { AddCourseComponent } from './cour/add-course/add-course.component';
import { CourseDeleteComponent } from './cour/course-delete/course-delete.component';
import { CourseUpdateComponent } from './cour/course-update/course-update.component';
import { StripeComponent } from './cour/stripe/stripe.component';
import { AddRessourceComponent } from './cour/add-ressource/add-ressource.component';
import { RessourceListComponent } from './cour/ressource-list/ressource-list.component';
import { RessourceMaterialsComponent } from './cour/ressource-materials/ressource-materials.component';
import { ListComponent } from './cour/video/list/list.component';
import { ChatComponent } from './cour/chat/chat/chat.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "verify-code", component: TwoWayFactorPageComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "sidebar", component: SideBarComponent },
  { path: "home", component: HomeComponent },

  { path: "addProfile", component: AddProfileComponent },
  { path: "editProfile", component: EditProfileComponent },
  { path: "upload/:id", component: UploadFileComponent },

  { path: "formateur-list", component: FormateurListComponent },
  { path: "admin-list", component: AdminListComponent },

  { path: "addAdmin", component: AddAdminComponent },
  { path: "addFormateur", component: AddFormateurComponent },
  { path: "courselist", component: CourseListComponent },
  { path: "add-course", component: AddCourseComponent },
  { path: "delete-course", component: CourseDeleteComponent },
  { path: "course-update/:id", component: CourseUpdateComponent },
  { path: "course-stripe/:prix", component: StripeComponent },
  { path: "add-ressource/:id", component: AddRessourceComponent },
  { path: "ressource-list/:id", component: RessourceListComponent },
  { path: "ressource-materials/:id", component: RessourceMaterialsComponent },
  { path: 'listVideo/:nomVideo', component: ListComponent },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

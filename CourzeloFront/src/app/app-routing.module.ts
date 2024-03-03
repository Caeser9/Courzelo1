import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { ListDomaineComponent } from './domaine/list-domaine/list-domaine.component';
import { UpdateDomaineComponent } from './update-domaine/update-domaine.component';
import { DeleteDomaineComponent } from './domaine/delete-domaine/delete-domaine.component';
import { AjoutDomaineComponent } from './domaine/ajout-domaine/ajout-domaine.component';
import { PhotoComponent } from './photo/photo.component';
import { AddCommentaireComponent } from './commentaire/add-commentaire/add-commentaire.component';
import { ListeCommentaireComponent } from './liste-commentaire/liste-commentaire.component';


import { SupportComponent } from './support/support.component';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';
import { AddBlogComponent } from './Blog/add-blog/add-blog.component';
import { ListBlogComponent } from './Blog/list-blog/list-blog.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UploadFileComponent } from './Blog/upload-file/upload-file.component';
import { UpdateBlogComponent } from './Blog/update-blog/update-blog.component';
import { BlogDetailsComponent } from './Blog/blog-details/blog-details.component';
import { BlogGridsComponent } from './Blog/blog-grids/blog-grids.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
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
import { AddFaculteComponent } from './Faculte/add-faculte/add-faculte.component';
import { EditFaculteComponent } from './Faculte/edit-faculte/edit-faculte.component';
import { DeleteFaculteComponent } from './Faculte/delete-faculte/delete-faculte.component';
import { FaculteListComponent } from './Faculte/faculte-list/faculte-list.component';
import { UpdatePoleComponent } from './Pole/update-pole/update-pole.component';
import { DeletePoleComponent } from './Pole/delete-pole/delete-pole.component';
import { PoleListComponent } from './Pole/pole-list/pole-list.component';
import { AddPoleComponent } from './Pole/add-pole/add-pole.component';
import { UploadFileComponent } from './Faculte/upload-file/upload-file.component';
import { UploadFilePoleComponent } from './Pole/upload-file-pole/upload-file-pole.component';

const routes: Routes = [
  //youssef
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "verify-code", component: TwoWayFactorPageComponent },
  //dev
  { path: "navbar", component: NavbarComponent },
  { path: "sidebar", component: SideBarComponent },
  { path: "home", component: HomeComponent },
  //youssef
  { path: "addProfile", component: AddProfileComponent },
  { path: "editProfile", component: EditProfileComponent },
  { path: "upload/:id", component: UploadFileComponent },
  
  { path: "formateur-list", component: FormateurListComponent },
  { path: "admin-list", component: AdminListComponent },
  { path: "addAdmin", component: AddAdminComponent },
  { path: "addFormateur", component: AddFormateurComponent },
  //oussema
  { path: "courselist", component: CourseListComponent },
  { path: "add-course", component: AddCourseComponent },
  { path: "delete-course", component: CourseDeleteComponent },
  { path: "course-update/:id", component: CourseUpdateComponent },
  { path: "course-stripe/:prix", component: StripeComponent },
  { path: "add-ressource/:id", component: AddRessourceComponent },
  { path: "ressource-list/:id", component: RessourceListComponent },
  { path: "ressource-materials/:id", component: RessourceMaterialsComponent },
  { path: 'listVideo/:nomVideo', component: ListComponent },
  { path: 'chat', component: ChatComponent },
  //kaycer
  {path: "addBlog", component: AddBlogComponent},
  {path: "listBlog", component: ListBlogComponent},
  {path: "dashboard", component: UserDashboardComponent},
  {path:"upload/:id", component:UploadFileComponent},
  {path:"updateBlog/:id", component: UpdateBlogComponent},
  {path: "detailsBlog/:id", component: BlogDetailsComponent},
  {path:"blogsGrids", component: BlogGridsComponent},
  //yosra 
  { path: '', redirectTo: 'getAllFacultes', pathMatch: 'full' },
  { path: 'getAllFacultes', component: FaculteListComponent },  
  { path: 'addFaculte', component: AddFaculteComponent },
   
  { path: 'modifierFaculte/:id', component: EditFaculteComponent },  
  { path: 'deleteFaculte', component: DeleteFaculteComponent },   
 
{ path: 'getAllPoles', component: PoleListComponent },  
{ path: 'addPole', component: AddPoleComponent },
 
{ path: 'modifierPole/:id', component: UpdatePoleComponent },  
{ path: 'deletePole', component: DeletePoleComponent },  
{path: 'uploadFacultePhoto/:id', component:UploadFileComponent} ,
{path: 'uploadPolePhoto/:id', component:UploadFilePoleComponent} ,
//nabil

  {path:"support",component:SupportComponent},

  {path:"list",component:ListReclamationComponent}

//iheb 
{ path: 'domaines', component:ListDomaineComponent},
  { path: 'addDomaine', component:AjoutDomaineComponent},
  { path: 'update-domaine/:id', component:UpdateDomaineComponent},
  { path: 'deleteDomain/:id', component:DeleteDomaineComponent},
  { path: 'uploadimg/:id', component:PhotoComponent},
  { path: 'addCommentaire', component:AddCommentaireComponent},
  { path: 'commentaires', component:ListeCommentaireComponent},
  //404 error
  { path: '**', pathMatch: 'full',  component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

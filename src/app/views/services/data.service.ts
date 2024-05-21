import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Abonnement } from '../super-admin/abonnement';
import { catchError, throwError } from 'rxjs';
import { Organization } from '../super-admin/organization';
import { Adminorganization } from '../super-admin/adminorganization';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getAllAdminsOrg(){
    return this.http.get<Adminorganization[]>('http://localhost:3000/adminorg')
  }

  createAdminOrg(profile:Adminorganization){
    return this.http.post('http://localhost:3000/adminorg', profile)
  }

  editAdminOrg(id:number){
    return this.http.get<Adminorganization>('http://localhost:3000/adminorg/'+id)
  }

  updateAdminOrg(profile: Adminorganization){
    return this.http.put<Adminorganization>(`http://localhost:3000/adminorg/${profile.id}`, profile)
  }

  deleteAdminOrg(id:number){
    return this.http.delete<Adminorganization>('http://localhost:3000/adminorg/'+id)
  }

  getAllAbonnements(){
    return this.http.get<Abonnement[]>('http://localhost:3000/subscription')
  }

  createAbonnement(profile:Abonnement){
    return this.http.post('http://localhost:3000/subscription', profile).pipe(
      catchError((error) => {
        return throwError('erreur se produite lors de recupuration de donnees');
      })
    );
  }

  editAbonnement(id:number){
    return this.http.get<Abonnement>('http://localhost:3000/subscription/'+id)
  }

  updateAbonnement(profile: Abonnement){
    return this.http.put<Abonnement>(`http://localhost:3000/subscription/${profile.id}`, profile)
  }

  deleteAbonnement(id:number){
    return this.http.delete<Abonnement>('http://localhost:3000/subscription/'+id)
  }

  getAllOrganizations(){
    return this.http.get<Organization[]>('http://localhost:3000/organization')
  }

  createOrganization(profile:Organization){
    return this.http.post('http://localhost:3000/organization', profile)
  }

  editOrganization(id:number){
    return this.http.get<Organization>('http://localhost:3000/organization/'+id)
  }

  updateOrganization(profile: Organization){
    return this.http.put<Organization>(`http://localhost:3000/organization/${profile.id}`, profile)
  }

  deleteOrganization(id:any){
    return this.http.delete('http://localhost:3000/organization/'+id)
  }

  getAllUsersOrg(){
    return this.http.get('http://localhost:3000/usersorg')
  }

  createUserOrg(profile:any){
    return this.http.post('http://localhost:3000/createuserorg', profile)
  }

  deleteUserOrg(id:any){
    return this.http.delete('http://localhost:3000/usersorg/'+id)
  }

  getAllContainers(){
    return this.http.get('http://localhost:3000/containers')
  }

  createContainer(profile:any){
    return this.http.post('http://localhost:3000/createcontainer', profile)
  }

  deleteContainer(id:any){
    return this.http.delete('http://localhost:3000/containers/'+id)
  }
}

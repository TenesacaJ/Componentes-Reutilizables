import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ejercicio1',
    pathMatch: 'full'
  },
  {
    path: 'ejercicio1',
    loadChildren: () => import('./Views/ejercicio1/ejercicio1.module').then( m => m.Ejercicio1PageModule)
  },
  {
    path: 'ejercicio2',
    loadChildren: () => import('./Views/ejercicio2/ejercicio2.module').then( m => m.Ejercicio2PageModule)
  },
  {
    path: 'ejercicio3',
    loadChildren: () => import('./Views/ejercicio3/ejercicio3.module').then( m => m.Ejercicio3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

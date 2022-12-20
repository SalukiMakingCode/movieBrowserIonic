import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'header',
  //   loadChildren: () => import('./shared/components/header/header.module').then( m => m.HeaderPageModule)
  // },
  // {
  //   path: 'trending',
  //   loadChildren: () => import('./shared/components/trending/trending.module').then( m => m.TrendingPageModule)
  // },
  // {
  //   path: 'now-playing',
  //   loadChildren: () => import('./shared/components/now-playing/now-playing.module').then( m => m.NowPlayingPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

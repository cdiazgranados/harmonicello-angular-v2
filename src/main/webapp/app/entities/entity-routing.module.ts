import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'presets',
        data: { pageTitle: 'harmonicelloApp.presets.home.title' },
        loadChildren: () => import('./presets/presets.module').then(m => m.PresetsModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}

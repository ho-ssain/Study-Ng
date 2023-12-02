import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnderstandingComponentComponent } from './Concepts/understanding-component/understanding-component.component';
import { ComponentSelectorComponent } from './Concepts/component-selector/component-selector.component';
import { NgContentComponent } from './Concepts/ng-content/ng-content.component';

import { ContainerComponent } from './Concepts/ng-content/container/container.component';
import { LifeCycleHookComponent } from './Concepts/life-cycle-hook/life-cycle-hook.component';
import { DemoComponent } from './Concepts/life-cycle-hook/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    UnderstandingComponentComponent,
    ComponentSelectorComponent,
    NgContentComponent,

    ContainerComponent,
     LifeCycleHookComponent,
     DemoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

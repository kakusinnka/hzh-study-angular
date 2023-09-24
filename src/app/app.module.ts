import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

// @NgModule 装饰器用于定义模块，包括声明该模块使用的组件、引入的模块、提供的服务等。
// @NgModule 是 Angular 模块装饰器，用于定义和配置 Angular 模块。
// 这个装饰器接受一个对象作为参数，该对象包含了模块的各种配置选项。
@NgModule({
  // declarations 是一个数组，包含了本模块中声明的所有组件、指令、管道等的列表。
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  // imports 是一个数组，包含了本模块所依赖的其他 Angular 模块。
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // providers 是一个数组，用于指定在本模块中提供的服务提供者。
  providers: [],
  // bootstrap 是一个数组，包含了该模块的根组件。根组件是应用的入口点。
  bootstrap: [AppComponent]
})
export class AppModule { }

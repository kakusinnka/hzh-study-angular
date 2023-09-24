import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// 在 Routes 数组中定义您的路线。
// 该数组中的每个路由都是一个包含两个属性的 JavaScript 对象。
// 第一个属性 path 定义路由的 URL 路径。
// 第二个属性 component 定义 Angular 应用于相应路径的组件。
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  // 最后一条 path 为 ** 的路由是通配符路由。
  // 如果请求的 URL 与列表中前面的任何路径都不匹配，则路由器会选择此路由并将用户发送到 PageNotFoundComponent 。
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

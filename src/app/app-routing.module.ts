import { NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');

// 在 Routes 数组中定义您的路线。
// 该数组中的每个路由都是一个包含两个属性的 JavaScript 对象。
// 第一个属性 path 定义路由的 URL 路径。
// 第二个属性 component 定义 Angular 应用于相应路径的组件。
const routes: Routes = [
  {
    // 子路由与任何其他路由一样，它需要 path 和 component 。一个区别是您将子路由放置在父路由内的 children 数组中。
    path: 'first-component', component: FirstComponent, children: [
      {
        path: 'child-a',
        // 使用 Route 配置中的 title 属性设置文档的标题。
        title: resolvedChildATitle,
        component: ChildAComponent,
      },
      {
        path: 'child-b',
        component: ChildBComponent,
      }
    ],
  },
  { path: 'second-component', component: SecondComponent },
  { path: 'second-component-dynamic', component: SecondComponent },
  { path: 'second-component-dynamic/1/2', component: SecondComponent },
  { path: 'second-component-dynamic/param/', component: SecondComponent },
  // 前缀匹配 ["/abc" 或 "/abc/..."]
  { path: 'abc', redirectTo: '/first-component', pathMatch: 'prefix' },
  // 全路径匹配 ["/efg" 或 "/efg/"]
  { path: 'efg', redirectTo: '/second-component', pathMatch: 'full' },
  // 最后一条 path 为 ** 的路由是通配符路由。
  // 如果请求的 URL 与列表中前面的任何路径都不匹配，则路由器会选择此路由并将用户发送到 PageNotFoundComponent 。
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

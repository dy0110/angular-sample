import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// ルーティングするコンポーネントをインポート
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

const routes: Routes = [
  // デフォルトルートを追加
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent},
  { path: "heroes", component: HeroesComponent },
  // パラメータ付きルート
  { path: "detail/:id", component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // ルーターの初期化
  exports: [RouterModule]
})
export class AppRoutingModule {}

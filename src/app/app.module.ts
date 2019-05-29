import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// formにデータバインディングするために必要
import { FormsModule } from "@angular/forms";
// HTTP通信を行うため
import { HttpClientModule } from '@angular/common/http';
// インメモリ Web API をインポート
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService  } from "./in-memory-data.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// コマンドで生成されて自動的に登録される
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModuleモジュールはHTTP要求をインターセプトし、
    // シミュレートされたサーバー応答を返します。
    // 実サーバがリクエストを受信する準備ができたらそれを削除します。
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

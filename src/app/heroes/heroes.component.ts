import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  // サービスを注入する
  constructor(private heroService: HeroService) {}
  // 初期化イベント
  ngOnInit() {
    // 初期化イベントの中でデータ取得する
    this.getHeroes();
  }
  // サービスからデータを受け取る関数
  getHeroes(): void {
    // subscribe関数でObservableからの出力を待機する 
    // => 取得したらコールバックが実行
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }
}

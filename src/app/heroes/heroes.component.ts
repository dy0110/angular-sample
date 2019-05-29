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
  // ヒーローの追加
  add( name: string ): void{
    name = name.trim();
    // 空の時は何もしない
    if( !name ){
      return ;
    }
    // サービスから追加メソッド呼び出し
    this.heroService.addHero({ name } as Hero).subscribe(hero=>{
      // 永続化が終わったら配列に追加
      this.heroes.push(hero);
    })
  }

  // ヒーローの削除
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe(); // API実行後に何もしなくてもsubscribeはする
  }
}

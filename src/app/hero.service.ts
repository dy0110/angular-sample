import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
// message.service の依存性を注入
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  // 非同期(Observable )として定義する
  getHeroes(): Observable<Hero[]> {
    // 取得されたときにメッセージを送信
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add("HeroService: fetched heroes");
    // 全件を返す
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // idから該当データを検索
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    // マッチしたデータを
    return of(HEROES.find(hero => hero.id === id));
  }
}

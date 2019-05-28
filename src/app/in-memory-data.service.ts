import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "Mr. Nice" },
      { id: 12, name: "Narco" },
      { id: 13, name: "Bombasto" },
      { id: 14, name: "Celeritas" },
      { id: 15, name: "Magneta" },
      { id: 16, name: "RubberMan" },
      { id: 17, name: "Dynama" },
      { id: 18, name: "Dr IQ" },
      { id: 19, name: "Magma" },
      { id: 20, name: "Tornado" }
    ];
    return { heroes };
  }

  // genIdメソッドをオーバーライドして、heroが常にIDを持つようにします。
  // heroの配列が空の場合、
  // 以下のメソッドは初期番号（11）を返します。
  // heroの配列が空でない場合、以下のメソッドは最高のもの(id最大値)を返します。
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}

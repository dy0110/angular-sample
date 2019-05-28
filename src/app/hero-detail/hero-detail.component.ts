import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  // サービスの依存性を注入
  constructor(
    private route: ActivatedRoute, // インスタンスへのルートに関する情報
    private heroService: HeroService, // ヒーローのデータを取得
    private location: Location // ブラウザと対話するためのAngularサービス
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(Number(id)).subscribe(hero => {
      this.hero = hero;
    });
  }

  // 戻るボタン
  goBack(): void {
    this.location.back();
  }
}

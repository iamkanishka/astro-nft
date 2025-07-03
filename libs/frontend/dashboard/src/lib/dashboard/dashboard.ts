import { Component } from '@angular/core';
import { ArtistsSection } from '../components/artists-section/artists-section';
import { AuctionSection } from '../components/auction-section/auction-section';
import { CollectionsSection } from '../components/collections-section/collections-section';
import { HerosSection } from '../components/heros-section/heros-section';
import { TodaysPick } from '../components/todays-pick/todays-pick';
import { FeaturesSection } from '../components/features-section/features-section';
 
@Component({
  selector: 'lib-dashboard',
  imports: [ArtistsSection, AuctionSection, CollectionsSection, FeaturesSection, HerosSection, TodaysPick],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  title = 'admin-end';
}

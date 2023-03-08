import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://www.hangoverweekends.co.uk/uploads/images/mojito.jpg',
      description:
        'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.',
    },
    {
      name: 'Cosmopolitan',
      img: 'https://www.hangoverweekends.co.uk/uploads/images/cosmo.jpg',
      description:
        'The tangy concoction of vodka, triple sec, lime juice and cranberry juice has managed to leapfrog the venerable screwdriver as many vodka drinkers prefer the Cosmopolitan’s cleaner and slightly tart taste. The keys to the preparation of a Cosmopolitan are a good brand of cranberry juice and Cointreau Triple Sec, two essential elements to the drink.',
    },
    {
      name: 'Californication',
      img: 'https://www.hangoverweekends.co.uk/uploads/images/californication-cocktail.jpg',
      description:
        'Californication as used by the Red Hot Chili Peppers means the mixing of different cultures. The cocktail reflects this with the various spirits used within the cocktail from all over the world. A mixture of run, vodka, tequila and gin finished with orange liqueur, lemon juice and orange juice to mask the various spirits used throughout. Strong and yet sweet. The cocktail is finished with either a slice of orange or a twisted peel of orange rind.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

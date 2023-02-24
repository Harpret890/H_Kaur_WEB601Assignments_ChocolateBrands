import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentsList: Content[];
  Title: string = '';
  ifTitleExists : boolean | null = null;

  searchByTitle(){
    this.ifTitleExists = this.contentsList.some(content => content.title === this.Title);
  }

  constructor(){
    this.contentsList = [
    {
      id: 1,
      title: 'Cadbury',
      description: 'The second largest confectionert brand in the worls',
      creator: 'John Cadbury',
      imgURL: 'https://en.wikipedia.org/wiki/Cadbury',
      type:"chocolate"
    },
    {
      id: 2,
      title: 'Mars',
      description: 'MARS® Chocolate Bars are an irresistible blend of chocolate, caramel and nougat. The tried and true original MARS® chocolate bar was created by Forrest Mars in 1932 and has since been a coveted favorite.',
      creator: 'Forrest Mars',
      imgURL: 'https://en.wikipedia.org/wiki/Franklin_Clarence_Mars',
      type:"milk chocolate"
    },
    {
      id: 3,
      title: 'Galaxy',
      description: 'It is unmistakably smooth and creamy and has been loved by the nation for generations.',
      creator: 'Mars Incorporated',
      imgURL: 'https://chocolate.fandom.com/wiki/Galaxy',
      type:"milk chocolate"
    },
    {
      id: 4,
      title: 'M&M',
      description: 'M&M are multi-colored button-shaped chocolates, each of which has the letter "m" printed in lower case in white on one side, consisting of a candy shell surrounding a filling which varies depending upon the variety of M&Ms',
      creator: 'Mars Incorporated',
      imgURL: 'https://allthatsinteresting.com/wordpress/wp-content/uploads/2017/12/mars-dad-son.png',
      type:"candy"
    },
    {
      id: 5,
      title: 'Godiva',
      description: 'Godiva iconic chocolate is a harmonious balance of smooth hazelnut praliné. A traditional recipe that has been passed on by Godivas founders and preciously guarded by our chefs chocolatier.',
      creator: 'Joseph Draps',
      imgURL: 'https://www.godivachocolates.eu/en/our-story.htm',
      type:"chocolate"
    },
    {
      id: 6,
      title: 'Dairy Milk',
      description: 'George Cadbury Jr was given the challenge to develop a milk chocolate bar with more milk than anything else on the market. That how Cadbury Dairy Milk was born!',
      creator:'George Cadbury Jr',
      imgURL: 'https://www.mondelezinternational.com/Our-Brands/Cadbury-Dairy-Milk#:~:text=In%201904%2C%20George%20Cadbury%20Jr,Cadbury%20Dairy%20Milk%20was%20born!',
      type:"milk chocolate"
    },
    {
      id: 7,
      title: 'Hersheys',
      description: 'Hersheyland is home to our favorite dessert recipes, the latest candy innovations and endless sweet inspiration, from everyday treats to special occasion',
      creator:'Milton S. Hershey',
      imgURL: 'https://www.hersheyland.com/home',
      type:"milk chocolate"
    }
    ]
  }
}

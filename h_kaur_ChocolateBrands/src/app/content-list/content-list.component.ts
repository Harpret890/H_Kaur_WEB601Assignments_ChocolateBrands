import { Component , Input} from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentsList: Content[];
   searchTitle: string = '';
   isTitleExist: boolean | null = null;
   errorText: boolean = false;

  addContent(newContent: Content){
    const AddPromise = new Promise((resolve, reject) => {
    this.contentsList.push(newContent);
    this.contentsList = [...this.contentsList];
    console.log(`Content Added successfully, Title: ${newContent.title}`);
    });
    AddPromise.then(data => {
      console.log(`Content Added successfully with title: ${data}`);
      this.errorText = false;
    }).catch(err => {
      this.errorText = true;
    });
  }
  constructor(){
    this.contentsList = [
    {
      id: 1,
      title: 'Cadbury',
      description: 'The second largest confectionert brand in the worls',
      creator: 'John Cadbury',
      imgURL: 'https://en.wikipedia.org/wiki/Cadbury#/media/File:Cadbury_(2020).svg'
    },
    {
      id: 2,
      title: 'Mars',
      description: 'MARS® Chocolate Bars are an irresistible blend of chocolate, caramel and nougat. The tried and true original MARS® chocolate bar was created by Forrest Mars in 1932 and has since been a coveted favorite.',
      creator: 'Forrest Mars',
      imgURL: 'https://en.wikipedia.org/wiki/Franklin_Clarence_Mars'
    },
    {
      id: 3,
      title: 'Galaxy',
      description: 'It is unmistakably smooth and creamy and has been loved by the nation for generations.',
      creator: 'Mars Incorporated',
      imgURL: 'https://chocolate.fandom.com/wiki/Galaxy'
    },
    {
      id: 4,
      title: 'M&M ',
      description: 'M&M are multi-colored button-shaped chocolates, each of which has the letter "m" printed in lower case in white on one side, consisting of a candy shell surrounding a filling which varies depending upon the variety of M&Ms',
      creator: 'Mars Incorporated',
      imgURL: 'https://allthatsinteresting.com/wordpress/wp-content/uploads/2017/12/mars-dad-son.png'
    },
    {
      id: 5,
      title: 'Godiva',
      description: 'Godiva iconic chocolate is a harmonious balance of smooth hazelnut praliné. A traditional recipe that has been passed on by Godivas founders and preciously guarded by our chefs chocolatier.',
      creator: 'Joseph Draps',
      // imgURL: 'https://www.godivachocolates.eu/en/our-story.htm'
    }
    ]
  }
}

import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getHeadlineTab(){
    return element(by.xpath('//*[@id="navbarSupportedContent"]/ul/li[1]/a'));
  }

  getFavoritesTab(){
    return element(by.css('[ng-reflect-router-link="/favorites"]'));
  }

  getSearchButtton(){
    return element(by.xpath('//*[@id="search-btn"]'));
  }

  
  getheadlinesSection(){
    return element(by.xpath('/html/body/app-root/app-home/main/div/div/div[1]'));
  }

  getCategorySection(){
    return element(by.xpath('/html/body/app-root/app-home/main/div/div/div[2]'));
  }

  getHeadlineNews(){
    return element.all(by.xpath('/html/body/app-root/app-home/main/div/div/div/mat-card/mat-card-content/app-news'));
  }

  getCategoryNews(){
    return element.all(by.xpath('/html/body/app-root/app-home/main/div/div/div[2]/mat-card/mat-card-content/app-news'));
  }

  navigateToHeadlines() {
    return browser.get('/headlines');
  }

  navigateToFavoritess() {
    return browser.get('/favorites');
  }

  getAddFavoriteButton() {
    return element(by.className('btn-favorite'));
  }

  getRemoveFavoriteButton() {
    return element(by.className('btn-unfavorite'));
  }
}

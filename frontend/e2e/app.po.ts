import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToHome() {
    return browser.get('/home');
  }

  navigateToFavorites() {
    return browser.get('/favorites');
  }

  navigateToSearch() {
    return browser.get('/search-result?searchText=hi'); 
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

  getHomeTab(){
    return element(by.xpath('/html/body/app-root/app-header/div/nav/ul/li[2]/a'));
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
  getSearchNews(){
    return element.all(by.xpath('/html/body/app-root/app-news-search/div/div/app-news'));
  }

  getAddFavoriteButton() {
    return element(by.className('btn-favorite'));
  }

  getRemoveFavoriteButton() {
    return element(by.className('btn-favorite'));
  }
}

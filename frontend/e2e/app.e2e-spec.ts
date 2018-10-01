import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';
import { DebugElement } from '@angular/core';


describe('NewsAPI App', () => {
  let page: AppPage;
  let de: DebugElement;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Home button', () => { 
    page.navigateTo(); 
    expect(page.getHomeTab().getText()).toContain('Home');
  });

  it('should display favorite tab', () => {
    page.navigateTo();
    expect(page.getFavoritesTab().getText()).toEqual('Favorites');
  });

  it('should display search button', () => {
    page.navigateTo();
    expect(page.getSearchButtton().getText()).toEqual('Search');
  });


  it('Home page should have top headline section', () => {
    page.navigateTo();
    expect(page.getheadlinesSection()).toBeTruthy();
  });

  it('Home page should have category section', () => {
    expect(page.getCategorySection()).toBeTruthy();
  });

  it('Home page should have headlines section with news', () => {
        expect(page.getHeadlineNews().count()).toBeGreaterThan(0);
          
  });

  it('Home page should have category section with news', () => {
    expect(page.getCategoryNews().count()).toBeGreaterThan(0);
  });
  
  it('Search page should have news', () => {  
    page.navigateToSearch();   
    expect(page.getSearchNews().count()).toBeGreaterThan(0);
  });

  it('Add to Favorites button should add news to favorites', () => {
    expect(page.getAddFavoriteButton()).toBeTruthy();
    page.getAddFavoriteButton().click();
  });

  it('Remove from Favorites button should remove news from favorites', () => {
    page.navigateToFavorites();  
    expect(page.getRemoveFavoriteButton()).toBeTruthy();  
  });


});

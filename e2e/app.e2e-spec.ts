import { ShoppingcartPage } from './app.po';

describe('shoppingcart App', () => {
  let page: ShoppingcartPage;

  beforeEach(() => {
    page = new ShoppingcartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

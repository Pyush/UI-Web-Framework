import { UIWebFrameworkPage } from './app.po';

describe('ui-web-framework App', () => {
  let page: UIWebFrameworkPage;

  beforeEach(() => {
    page = new UIWebFrameworkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

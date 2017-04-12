import { NespressoPage } from './app.po';

describe('nespresso App', () => {
  let page: NespressoPage;

  beforeEach(() => {
    page = new NespressoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

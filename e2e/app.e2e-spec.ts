import { GlPage } from './app.po';

describe('gl App', function() {
  let page: GlPage;

  beforeEach(() => {
    page = new GlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

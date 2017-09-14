import { InjectorReproPage } from './app.po';

describe('injector-repro App', () => {
  let page: InjectorReproPage;

  beforeEach(() => {
    page = new InjectorReproPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

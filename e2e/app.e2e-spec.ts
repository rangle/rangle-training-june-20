import { RangleBcbsTodoPage } from './app.po';

describe('rangle-bcbs-todo App', () => {
  let page: RangleBcbsTodoPage;

  beforeEach(() => {
    page = new RangleBcbsTodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { RpplePage } from './app.po';

describe('rpple App', () => {
  let page: RpplePage;

  beforeEach(() => {
    page = new RpplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

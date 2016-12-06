import { Ng2DeploymentPage } from './app.po';

describe('ng2-deployment App', function() {
  let page: Ng2DeploymentPage;

  beforeEach(() => {
    page = new Ng2DeploymentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

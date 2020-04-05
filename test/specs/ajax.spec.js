import ajaxPage from '../pages/ajax.page';

describe('Ajax Page Suite', function() {
  it('should retrieve Ajax response', function() {
    ajaxPage
        .open()
        .ajaxButton.click();
    expect(ajaxPage.ajaxContent).toHaveText(
        'Data loaded with AJAX get request.', { wait: 20000 });
    utilities.takeScreenshot('ajax_with_request_capture');
  });
});

describe('validationSummary Spec', function () {

  var scope;
  var compile;

  beforeEach(function(){

    module('mm.iban');

    inject(function($compile, $rootScope){
      scope = $rootScope.$new();
      compile = $compile;
    });

  });

  it('Should validate a valid IBAN (spain) and return success', function(){

    // Arrange
    var html = "<div ng-init='person = {destinationIBAN: 'ES7921000813610123456789'}'>" +                    
                  "<input type='text' id='IBANCode' ng-model='destinationIBAN' />"+                  
             "</div>";

    var element = angular.element(html); // If jQuery is available, angular.element is an alias for the jQuery function. If jQuery is not available, angular.element delegates to Angular's built-in subset of jQuery called jQuery lite

    // Act
    var compiled = compile(element)(scope);
    scope.$digest();

    // Assert
    var length= $(element[0]).find('#errorListContainer').children().length;

    expect(length).toBe(1);
    expect($(element[0]).find('.validation-summary-box.ng-hide').length).toBe(0);
  });
});
describe('validationSummary Spec', function () {

  var scope,
        compile,
        html,
        form;

  beforeEach(function(){

    module('mm.iban');
    
    html = 
              "<div ng-init='person = {destinationIBAN: null}'>" +                    
              "<form name='containerform'>" +                
                  "<input type='text'" +
                  " id='ibancode' name='ibancode'" +
                  " ng-iban='' countrycodecheck='' ng-model='destinationIBAN' />" +                                
              "</form>" +
              "</div>" 
                ;

    inject(function($compile, $rootScope){
      scope = $rootScope.$new();
      compile = $compile;

      //get the jqLite or jQuery element
      elem = angular.element(html);
      
      //compile the element into a function to 
      // process the view.
      compiled = $compile(elem);
      
      //run the compiled view.
      compiled(scope);
      
      //call digest on the scope!
      scope.$digest();

      // Get the angularjs form control
      form = scope.containerform;
    });
  });

  it('Should validate a valid IBAN (spain) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('ES7921000813610123456789');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (spain) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('ES7921000813615123456789');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

});
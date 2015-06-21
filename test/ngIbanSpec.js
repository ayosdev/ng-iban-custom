describe('ngIban Spec', function () {

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

   // Samples taken from http://formvalidation.io/validators/iban/
   // ** Albania
  it('Should validate a valid IBAN (Albania) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('AL47212110090000000235698741');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Albania) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('AL47212110190000000235698741');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

   // ** Algeria
  it('Should validate a valid IBAN (Algeria) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('DZ4000400174401001050486');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Algeria) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('DZ4001400174401001050486');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

   // ** Angola
  it('Should validate a valid IBAN (Angola) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('AO06000600000100037131174');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Angola) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('AO06000600200100037131174');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

   // ** Andorra
  it('Should validate a valid IBAN (Andorra) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('AD1200012030200359100100');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Andorra) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('AD1220012030200359100100');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });
  
// ** Austria
  it('Should validate a valid IBAN (Austria) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('AT611904300234573201');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Austria) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('AT611904300234573501');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  //  ** Azerbaijan
  it('Should validate a valid IBAN (Azerbaijan) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('AZ21NABZ00000000137010001944');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Azerbaijan) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('AZ21NABZ00000000137010001344');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  
  //** Bahrain
  it('Should validate a valid IBAN (Bahrain) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('BH29BMAG1299123456BH00');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Bahrain) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('BH29B3AG1299123456BH00');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Bosnia and Herzegovina
  it('Should validate a valid IBAN (Bosnia and Herzegovina) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('BA391290079401028494');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Bosnia and Herzegovina) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('BA391290039401028494');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Belgium
  it('Should validate a valid IBAN (Belgium) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('BE68539007547034');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Belgium) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('BE68539007544034');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Benin
  it('Should validate a valid IBAN (Benin) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('BJ11B00610100400271101192591');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Benin) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('BJ11B00610100403271101192591');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Brazil
  it('Should validate a valid IBAN (Brazil) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('BR9700360305000010009795493P1');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Brazil) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('BR9700360303000010009795493P1');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Burkina Faso
  it('Should validate a valid IBAN (Burkina Faso) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('BF1030134020015400945000643');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Burkina Faso) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('BF1030134020015430945000643');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Bulgaria
  it('Should validate a valid IBAN (Bulgaria) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('BG80BNBG96611020345678');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Bulgaria) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('BG80BNBG96612020345678');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Burundi
  it('Should validate a valid IBAN (Burundi) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('BI43201011067444');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Burundi) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('BI43201013067444');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Cameroon
  it('Should validate a valid IBAN (Cameroon) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('CM2110003001000500000605306');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Cameroon) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('CM2110003001000200000605306');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Cape Verde
  it('Should validate a valid IBAN (Cape Verde) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('CV64000300004547069110176');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Cape Verde) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('CV64000300004547069110276');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Costa Rica
  it('Should validate a valid IBAN (Costa Rica) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('CR0515202001026284066');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Costa Rica) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('CR0515202001026274066');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Croatia
  it('Should validate a valid IBAN (Croatia) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('HR1210010051863000160');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Croatia) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('HR1210010051862000160');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Cyprus
  it('Should validate a valid IBAN (Cyprus) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('CY17002001280000001200527600');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Cyprus) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('CY17002001280000001200527500');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Czech Republic
  it('Should validate a valid IBAN (Cyprus) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('CZ6508000000192000145399');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Cyprus) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('CZ6508000000192000145299');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Denmark
  it('Should validate a valid IBAN (Denmark) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('DK5000400440116243');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Denmark) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('DK5000400440113243');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Dominican Republic
  it('Should validate a valid IBAN (Dominican Republic) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('DO28BAGR00000001212453611324');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Dominican Republic) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('DO28BAGR00000001312453611324');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** East Timor
  it('Should validate a valid IBAN (East Timor) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('TL380080012345678910157');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (East Timor) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('TL380080012345478910157');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Estonia
  it('Should validate a valid IBAN (Estonia) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('EE382200221020145685');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Estonia) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('EE482200221020145685');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Faroe Islands
  it('Should validate a valid IBAN (Faroe Islands) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('FO1464600009692713');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Faroe Islands) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('FO1464600009592713');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Finland
  it('Should validate a valid IBAN (Finland) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('FI2112345600000785');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Finland) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('FI2312345600000785');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** France
  it('Should validate a valid IBAN (France) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('FR1420041010050500013M02606');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (France) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('FR1450041010050500013M02606');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Guatemala
  it('Should validate a valid IBAN (Guatemala) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('GT82TRAJ01020000001210029690');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Guatemala) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('GT82TRAJ01020000001210028690');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Georgia
  it('Should validate a valid IBAN (Georgia) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('GE29NB0000000101904917');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Georgia) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('GE29NB0000000101904817');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Germany
  it('Should validate a valid IBAN (Germany) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('DE89370400440532013000');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Germany) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('DE89370400430532013000');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Gibraltar
  it('Should validate a valid IBAN (Gibraltar) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('GI75NWBK000000007099453');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Gibraltar) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('GI75NWIK000000007099453');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Greece
  it('Should validate a valid IBAN (Greece) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('GR1601101250000000012300695');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Greece) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('GR1601101250000000012300694');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });


  // ** Greenland
  it('Should validate a valid IBAN (Greenland) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('GL8964710001000206');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Greenland) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('GL8964710002000206');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Hungary
  it('Should validate a valid IBAN (Hungary) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('HU42117730161111101800000000');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Hungary) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('HU42117730161111101800000010');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Iceland
  it('Should validate a valid IBAN (Iceland) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('IS140159260076545510730339');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Iceland) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('IS140159260076545510730334');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Iran
  it('Should validate a valid IBAN (Iran) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('IR580540105180021273113007');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Iran) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('IR580540105180021473113007');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });


  // ** Ireland
  it('Should validate a valid IBAN (Iran) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('IE29AIBK93115212345678');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Iran) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('IE29AIBY93115212345678');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Israel
  it('Should validate a valid IBAN (Israel) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('IL620108000000099999999');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Israel) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('IL620108000000099989999');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Italy
  it('Should validate a valid IBAN (Italy) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('IT60X0542811101000000123456');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Italy) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('IT60X6542811101000000123456');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Ivory Coast
  it('Should validate a valid IBAN (Ivory Coast) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('CI05A00060174100178530011852');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Ivory Coast) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('CI05A00060174100177530011852');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Jordan
  it('Should validate a valid IBAN (Jordan) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('JO94CBJO0010000000000131000302');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Jordan) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('JO94CBJO0012000000000131000302');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Kazakhstan
  it('Should validate a valid IBAN (Kazakhstan) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('KZ176010251000042993');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Kazakhstan) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('KZ176010251000042193');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Kuwait
  it('Should validate a valid IBAN (Kuwait) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('KW74NBOK0000000000001000372151');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Kuwait) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('KW74NBOE0000000000001000372151');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Latvia
  it('Should validate a valid IBAN (Latvia) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('LV80BANK0000435195001');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Latvia) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('LV80BANK0000425195001');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Lebanon
  it('Should validate a valid IBAN (Lebanon) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('LB30099900000001001925579115');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Lebanon) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('LB30099900000001001925579114');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Liechtenstein
  it('Should validate a valid IBAN (Liechtenstein) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('LI21088100002324013AA');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Liechtenstein) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('LI21088100002324013BA');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Lithuania
  it('Should validate a valid IBAN (Lithuania) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('LT121000011101001000');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Lithuania) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('LT121000011101002000');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Luxembourg
  it('Should validate a valid IBAN (Luxembourg) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('LU280019400644750000');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Luxembourg) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('LU280019400634750000');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Macedonia
  it('Should validate a valid IBAN (Macedonia) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('MK07300000000042425');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Macedonia) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('MK06300000000042425');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

/*

50  Madagascar  MG  MG4600005030010101914016056 
51  Malta SEPA  MT  MT84MALT011000012345MTLCAST001S 
52  Mauritania  MR  MR1300012000010000002037372 
53  Mauritius MU  MU17BOMM0101101030300200000MUR  
54  Mali  ML  ML03D00890170001002120000447  
55  Moldova MD  MD24AG000225100013104168  
56  Monaco SEPA MC  MC5813488000010051108001292 
57  Montenegro  ME  ME25505000012345678951  
58  Mozambique  MZ  MZ59000100000011834194157 
59  Netherlands SEPA  NL  NL91ABNA0417164300  
60  Norway SEPA NO  NO9386011117947 
61  Pakistan  PK  PK24SCBL0000001171495101  
62  Palestine PS  PS92PALS000000000400123456702 
63  Poland SEPA PL  PL27114020040000300201355387  
64  Portugal SEPA PT  PT50000201231234567890154 
65  Qatar QA  QA58DOHB00001234567890ABCDEFG 
66  Republic of Kosovo  XK  XK051212012345678906  
67  Romania SEPA  RO  RO49AAAA1B31007593840000  
68  San Marino SEPA SM  SM86U0322509800000000270100 
69  Saudi Arabia  SA  SA0380000000608010167519  
70  Senegal SN  SN12K00100152000025690007542  
71  Serbia  RS  RS35260005601001611379  
72  Slovakia SEPA SK  SK3112000000198742637541  
73  Slovenia SEPA SI  SI56191000000123438 
74  Spain SEPA  ES  ES9121000418450200051332  
75  Sweden SEPA SE  SE3550000000054910000003  
76  Switzerland SEPA  CH  CH9300762011623852957 
77  Tunisia TN  TN5914207207100707129648  
78  Turkey  TR  TR330006100519786457841326  
79  United Arab Emirates  AE  AE260211000000230064016 
80  United Kingdom SEPA GB  GB29NWBK60161331926819  
81  Virgin Islands, British VG  VG96VPVG0000012345678901  
*/


  // ** Spain
  it('Should validate a valid IBAN (Spain) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('ES7921000813610123456789');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Spain) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('ES7921000813615123456789');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });



});
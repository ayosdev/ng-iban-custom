describe('ngIban Spec', function () {

  var scope,
        compile,
        html,
        form,
        timeout;

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

    inject(function($compile, $rootScope, $timeout){
      scope = $rootScope.$new();
      compile = $compile;
      timeout = $timeout;

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

   // TODO Big lists to add (valid emails):
   
   // http://www.rbs.co.uk/corporate/international/g0/guide-to-international-business/regulatory-information/iban/iban-example.ashx
   
   // Same as samples implemented:
   // http://www.letterofcredit.biz/Business-Identifier-Code-(BIC)-and-International-Bank-Account-Number-(IBAN).html
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

  // ** Madagascar
  it('Should validate a valid IBAN (Madagascar) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('MG4600005030010101914016056');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Madagascar) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('MG4600005030010101814016056');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Malta
  it('Should validate a valid IBAN (Malta) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('MT84MALT011000012345MTLCAST001S');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Malta) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('MT84MALT011000012345YTLCAST001S');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Mauritania
  it('Should validate a valid IBAN (Mauritania) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('MR1300012000010000002037372');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Mauritania) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('MR1300012001010000002037372');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Mauritius
  it('Should validate a valid IBAN (Mauritius) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('MU17BOMM0101101030300200000MUR');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Mauritius) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('MU17BOMM0101101030300200010MUR');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });


  // ** Mali
  it('Should validate a valid IBAN (Mali) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('ML03D00890170001002120000447');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Mali) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('ML03D00890170001002120000347');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Moldova
  it('Should validate a valid IBAN (Moldova) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('MD24AG000225100013104168');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Moldova) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('MD24AG000224100013104168');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });


  // ** Monaco
  it('Should validate a valid IBAN (Monaco) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('MC5813488000010051108001292');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Monaco) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('MC5813478000010051108001292');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Montenegro
  it('Should validate a valid IBAN (Montenegro) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('ME25505000012345678951');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Montenegro) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('ME24505000012345678951');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Mozambique
  it('Should validate a valid IBAN (Mozambique) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('MZ59000100000011834194157');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Mozambique) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('MZ59000100000011734194157');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Netherlands
  it('Should validate a valid IBAN (Netherlands) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('NL91ABNA0417164300');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Netherlands) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('NL91ABNA0417164301');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Norway
  it('Should validate a valid IBAN (Norway) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('NO9386011117947');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Norway) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('NO9386011117937');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Pakistan
  it('Should validate a valid IBAN (Pakistan) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('PK24SCBL0000001171495101');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Pakistan) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('PK24SCBL0000101171495101');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Palestine
  it('Should validate a valid IBAN (Palestine) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('PS92PALS000000000400123456702');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Palestine) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('PS92PALS000000000400122456702');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Poland
  it('Should validate a valid IBAN (Poland) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('PL27114020040000300201355387');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Poland) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('PL23114020040000300201355387');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Portugal
  it('Should validate a valid IBAN (Portugal) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('PT50000201231234567890154');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Portugal) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('PT50000201231234567890153');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Qatar
  it('Should validate a valid IBAN (Qatar) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('QA58DOHB00001234567890ABCDEFG');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Qatar) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('QA58EOHB00001234567890ABCDEFG');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // WATCH OUT !! THIS TWO TESTS ARE FAILING
  // ** Republic of Kosovo
  
  it('Should validate a valid IBAN (Republic of Kosovo) and return valid', function(){

    // Arrange                                     
                                     
    form.ibancode.$setViewValue('XK051212012345678906');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

 
  it('Should validate a valid IBAN (Republic of Kosovo - second test) and return valid', function(){

    // Arrange                                     
    form.ibancode.$setViewValue('XK051000000000000053');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });


  it('Should validate a non valid IBAN (Republic of Kosovo) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('XK051212012345678907');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Romania
  it('Should validate a valid IBAN (Romania) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('RO49AAAA1B31007593840000');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Romania) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('RO49AABA1B31007593840000');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** San Marino
  it('Should validate a valid IBAN (San Marino) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('SM86U0322509800000000270100');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (San Marino) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('SM86U0322509800000000275100');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });


  // ** Saudi Arabia
  it('Should validate a valid IBAN (Saudi Arabia) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('SA0380000000608010167519');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Saudi Arabia) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('SA0380000000600010167519');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Senegal
  it('Should validate a valid IBAN (Senegal) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('SN12K00100152000025690007542');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Senegal) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('SN12K00100152000025680007542');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });


  // ** Serbia
  it('Should validate a valid IBAN (Serbia) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('RS35260005601001611379');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Serbia) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('RS35260005601101611379');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Slovakia
  it('Should validate a valid IBAN (Slovakia) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('SK3112000000198742637541');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Slovakia) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('SK2112000000198742637541');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Slovenia
  it('Should validate a valid IBAN (Slovenia) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('SI56191000000123438');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Slovenia) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('SI56191000000223438');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

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

  // ** Sweden
  it('Should validate a valid IBAN (Sweden) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('SE3550000000054910000003');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Sweden) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('SE3550000000154910000003');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Switzerland
  it('Should validate a valid IBAN (Switzerland) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('CH9300762011623852957');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Switzerland) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('CH9300762011623852857');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Tunisia
  it('Should validate a valid IBAN (Tunisia) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('TN5914207207100707129648');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Tunisia) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('TN5914207207100707329648');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** Turkey
  it('Should validate a valid IBAN (Turkey) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('TR330006100519786457841326');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Turkey) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('TR330006100519786557841326');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** United Arab Emirates
  it('Should validate a valid IBAN (United Arab Emirates) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('AE260211000000230064016');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (United Arab Emirates) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('AE260261000000230064016');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  // ** United Kingdom
  it('Should validate a valid IBAN (United Kingdom) and return valid', function(){

    // Arrange      
    form.ibancode.$setViewValue('GB29NWBK60161331926819');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (United Kingdom) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('GB29NWBK60161331326819');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });


  // ** Virgin Islands, British VG
  it('Should validate a valid IBAN (Virgin Islands, British VG) and return valid', function(){

    // Arrange    
    form.ibancode.$setViewValue('VG96VPVG0000012345678901');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(true);
  });

  it('Should validate a non valid IBAN (Virgin Islands, British VG) and return error', function(){

    // Arrange    
    form.ibancode.$setViewValue('VG96VYVG0000012345678901');

    // Act
    scope.$digest();    
    
    // Assert
    expect(form.ibancode.$valid).toBe(false);
  });

  it('Should validate a non a list of valid IBANs (extracted from: http://www.rbs.co.uk/corporate/international/g0/guide-to-international-business/regulatory-information/iban/iban-example.ashx) and return valid', function(){

    var validIbans = [
         {country: 'Albania',iban: 'AL47 2121 1009 0000 0002 3569 8741'}  // replaced, original form the list was erroneus
        ,{country: 'Andorra',iban: 'AD12 0001 2030 2003 5910 0100'}
        ,{country: 'Austria',iban: 'AT61 1904 3002 3457 3201'}
        ,{country: 'Azerbaijan',iban: 'AZ21 NABZ 0000 0000 1370 1000 1944'}
        ,{country: 'Bahrain',iban: 'BH67 BMAG 0000 1299 1234 56'}
        ,{country: 'Belgium',iban: 'BE62 5100 0754 7061'}
        ,{country: 'Bosnia and Herzegovina',iban: 'BA39 1290 0794 0102 8494'}
        ,{country: 'Bulgaria',iban: 'BG80 BNBG 9661 1020 3456 78'}
        ,{country: 'Croatia',iban: 'HR12 1001 0051 8630 0016 0'}
        ,{country: 'Cyprus',iban: 'CY17 0020 0128 0000 0012 0052 7600'}
        ,{country: 'Czech Republic',iban: 'CZ65 0800 0000 1920 0014 5399'}
        ,{country: 'Denmark',iban: 'DK50 0040 0440 1162 43'}
        ,{country: 'Estonia',iban: 'EE38 2200 2210 2014 5685'}
        ,{country: 'Faroe Islands',iban: 'FO97 5432 0388 8999 44'}
        ,{country: 'Finland',iban: 'FI21 1234 5600 0007 85'}
        ,{country: 'France',iban: 'FR14 2004 1010 0505 0001 3M02 606'}
        ,{country: 'Georgia',iban: 'GE29 NB00 0000 0101 9049 17'}
        ,{country: 'Germany',iban: 'DE89 3704 0044 0532 0130 00'}
        ,{country: 'Gibraltar',iban: 'GI75 NWBK 0000 0000 7099 453'}
        ,{country: 'Greece',iban: 'GR16 0110 1250 0000 0001 2300 695'}
        ,{country: 'Greenland',iban: 'GL56 0444 9876 5432 10'}
        ,{country: 'Hungary',iban: 'HU42 1177 3016 1111 1018 0000 0000'}
        ,{country: 'Iceland',iban: 'IS14 0159 2600 7654 5510 7303 39'}
        ,{country: 'Ireland',iban: 'IE29 AIBK 9311 5212 3456 78'}
        ,{country: 'Israel',iban: 'IL62 0108 0000 0009 9999 999'}
        ,{country: 'Italy',iban: 'IT40 S054 2811 1010 0000 0123 456'}
        ,{country: 'Jordan',iban: 'JO94 CBJO 0010 0000 0000 0131 0003 02'}
        ,{country: 'Kuwait',iban: 'KW81 CBKU 0000 0000 0000 1234 5601 01'}
        ,{country: 'Latvia',iban: 'LV80 BANK 0000 4351 9500 1'}
        ,{country: 'Lebanon',iban: 'LB62 0999 0000 0001 0019 0122 9114'}
        ,{country: 'Liechtenstein',iban: 'LI21 0881 0000 2324 013A A'}
        ,{country: 'Lithuania',iban: 'LT12 1000 0111 0100 1000'}
        ,{country: 'Luxembourg',iban: 'LU28 0019 4006 4475 0000'}
        ,{country: 'Macedonia',iban: 'MK072 5012 0000 0589 84'}
        ,{country: 'Malta',iban: 'MT84 MALT 0110 0001 2345 MTLC AST0 01S'}
        ,{country: 'Mauritius',iban: 'MU17 BOMM 0101 1010 3030 0200 000M UR'}
        ,{country: 'Moldova',iban: 'MD24 AG00 0225 1000 1310 4168'}
        ,{country: 'Monaco',iban: 'MC93 2005 2222 1001 1223 3M44 555'}
        ,{country: 'Montenegro',iban: 'ME25 5050 0001 2345 6789 51'}
        ,{country: 'Netherlands',iban: 'NL39 RABO 0300 0652 64'}
        ,{country: 'Norway',iban: 'NO93 8601 1117 947'}
        ,{country: 'Pakistan',iban: 'PK36 SCBL 0000 0011 2345 6702'}
        ,{country: 'Poland',iban: 'PL60 1020 1026 0000 0422 7020 1111'}
        ,{country: 'Portugal',iban: 'PT50 0002 0123 1234 5678 9015 4'}
        ,{country: 'Qatar',iban: 'QA58 DOHB 0000 1234 5678 90AB CDEF G'}
        ,{country: 'Romania',iban: 'RO49 AAAA 1B31 0075 9384 0000'}
        ,{country: 'San Marino',iban: 'SM86 U032 2509 8000 0000 0270 100'}
        ,{country: 'Saudi Arabia',iban: 'SA03 8000 0000 6080 1016 7519'}
        ,{country: 'Serbia',iban: 'RS35 2600 0560 1001 6113 79'}
        ,{country: 'Slovak Republic',iban: 'SK31 1200 0000 1987 4263 7541'}
        ,{country: 'Slovenia',iban: 'SI56 1910 0000 0123 438'}
        ,{country: 'Spain',iban: 'ES80 2310 0001 1800 0001 2345'}
        ,{country: 'Sweden',iban: 'SE35 5000 0000 0549 1000 0003'}
        ,{country: 'Switzerland',iban: 'CH93 0076 2011 6238 5295 7'}
        ,{country: 'Tunisia',iban: 'TN59 1000 6035 1835 9847 8831'}
        ,{country: 'Turkey',iban: 'TR33 0006 1005 1978 6457 8413 26'}
        ,{country: 'UAE',iban: 'AE07 0331 2345 6789 0123 456'}
        ,{country: 'United Kingdom',iban: 'GB77BARC20201530093459'} // Not from original link list, that was erroneus       
    ];

    var index = 0;
    var max = validIbans.length;

    for(index = 0;index < max;index++) {
        // Arrange    
        form.ibancode.$setViewValue(validIbans[index].iban);

        // Act
        scope.$digest();       

        // Assert
        // Adding context information: https://github.com/jasmine/jasmine/issues/641#issuecomment-54736801
       expect( form.ibancode.$valid ).toEqual( true, 'Failed on this country:' + validIbans[index].country );            
    }
  });

});
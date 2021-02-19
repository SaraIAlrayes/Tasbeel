// Data
var longString = ' هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، ';
longString = longString + ' هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، ';
longString = longString + ' هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، ';
longString = longString + ' هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، ';
longString = longString + ' هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، ';

// Opportunities array
var opps = [{
    title: 'فرصة عمل تطوعية',
    category: 'تطوع',
    desc: longString,
    fields: 'تقني، إداري',
    period: 'شهر',
    rewards: 'شهادة, ساعات تطوعية',
  },
  {
    title: 'فرصة عمل مرن',
    category: 'عمل مرن',
    desc: longString,
    fields: 'إجتماعي، تربوي، إداري',
    period: '3 أشهر',
    rewards: 'شهادة, ساعات تطوعية',
    wage: '2000',
  },
  {
    title: 'فرصة عمل تطوعية',
    category: 'تطوع',
    desc: longString,
    fields: 'تقني، إداري',
    rewards: 'شهادة, ساعات تطوعية',
    period: 'شهر',
  },
];

// display opportunities
var oppScript = "";
opps.forEach(function(opp) {
  oppScript = oppScript + '<div class="col-md-4 opp-col pb-4"> <div class="opp-container"> <h3>' + opp.title + '</h3> <p class="opp-category">' + opp.category;
  oppScript = oppScript + '</p> <p class="opp-desc">' + (opp.desc).substring(0, 50) + '...' + '</p> <p class="opp-field">' + opp.fields;
  oppScript = oppScript + '</p> <p class="opp-period">' + 'لمدة ' + opp.period + '</p>';
  if (typeof opp.wage != 'undefined') {
    oppScript = oppScript + '<p class="opp-wage">' + opp.wage + ' ريال ' + '</p>'
  }
  oppScript = oppScript + '<div class="text-center"> <a type="button" class="btn" href="opp.html">التفاصيل</a> </div> </div> </div>'
});
$(".opps-row").html(oppScript);

// Add opportunity (on form submission)
function addOpp() {

  // Get Data from the input fields
  var newOpp = {
    title: $('#title').val(),
    category: $('#category').val(),
    desc: $('#desc').val(),
    fields: $('#fields').val(),
    period: $('#period').val(),
  }

  if ($('#reward-c').val() || $('#reward-h').val()) {
    let rewards = "";
    let first = true;
    if ($('#reward-c').val()) {
      rewards = rewards + $('#reward-c').val();
    }
    if ($('#reward-h').val()) {
      if (first) {
        first = false;
        rewards = rewards + $('#reward-h').val();
      } else {
        rewards = rewards + ', ' + $('#reward-h').val();
      }
    }
    newOpp.rewards = rewards;
  }

  if ($('#wage').val()) {
    newOpp.wage = $('#wage').val();
  }

  // Push new opportunity to the array of opportunities
  opps.push(newOpp);

  // display the new array of opportunities
  var oppScript = "";
  opps.forEach(function(opp) {
    oppScript = oppScript + '<div class="col-md-4 opp-col pb-4"> <div class="opp-container"> <h3>' + opp.title + '</h3> <p class="opp-category">' + opp.category;
    oppScript = oppScript + '</p> <p class="opp-desc">' + (opp.desc).substring(0, 50) + '...' + '</p> <p class="opp-field">' + opp.fields;
    oppScript = oppScript + '</p> <p class="opp-period">' + 'لمدة ' + opp.period + '</p>';
    if (typeof opp.wage != 'undefined') {
      oppScript = oppScript + '<p class="opp-wage">' + opp.wage + ' ريال ' + '</p>'
    }
    oppScript = oppScript + '<div class="text-center"> <a type="button" class="btn" href="opp.html">التفاصيل</a> </div> </div> </div>'
  });
  $(".opps-row").html(oppScript);

  $('.message-container').slideDown();

  setTimeout(
    function() {
      $('.message-container').slideUp();
    }, 3000);

  // $('.message').append('<div class="message-container fixed-top">تم إضافة الفرصة بنجاح!</div>');
  //
  // setTimeout(
  //   function() {
  //     $('.message').empty();
  //   }, 5000);

}


// Opportunity Page
$('.opp-page-header-details h1').append(opps[1].title);
$('.opp-page-desc-container').append(opps[1].desc);
$('.opp-page-details-container .category').append(opps[1].category);
$('.opp-page-details-container .fields').append(opps[1].fields);
$('.opp-page-details-container .period').append(opps[1].period);
$('.opp-page-details-container .rewards').append(opps[1].rewards);
if (opps[1].wage) {
  $('.opp-page-details-container .wage').append(opps[1].wage + ' ريال');

}

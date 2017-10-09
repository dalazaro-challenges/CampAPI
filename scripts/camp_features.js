const FEATURES = [
  {
    'title': 'Toilet',
    'id': 101,
    'presence': true,
    'subfeatures': []
  },
  {
    'title': 'Pets allowed',
    'id': 102,
    'presence': true,
    'subfeatures': []
  },
  {
    'title': 'Shower',
    'id': 103,
    'presence': false,
    'subfeatures': [
      {
        'title': 'Outdoor shower',
        'id': 105,
        'presence': false,
        'subfeatures': []
      }
    ]
  },
  {
    'title': 'Trash',
    'id': 104,
    'presence': true,
    'subfeatures': [
      {
        'title': 'Recycling bin',
        'id': 106,
        'presence': true,
        'subfeatures': []
      },
      {
        'title': 'Compost bin',
        'id': 107,
        'presence': true,
        'subfeatures': []
      },
      {
        'title': 'Trash bin',
        'id': 108,
        'presence': false,
        'subfeatures': [
          {
            'title': 'Pack in, pack out',
            'id': 109,
            'presence': true,
            'subfeatures': []
          }
        ]
      }
    ]
  }
];

$(document).ready(function(){

  FEATURES.forEach(function(featureA){
    const titleA = featureA.title;
    const idA = featureA.id;
    const presenceA = featureA.presence;
    isPresent(presenceA);

    $('.features-list-a').append(`
      <li class="feature-a ${idA}">
        <span id="${idA}">${titleA}: ${exists}</span>
        <ul class="features-list-b">
        </ul>
      </li>
    `);

    featureA.subfeatures.forEach(function(featureB){
      const titleB = featureB.title
      const idB = featureB.id;
      const presenceB = featureB.presence;
      isPresent(presenceB);

      $(`.${idA} .features-list-b`).append(`
        <li class="feature-b ${idB}">
          <span id="${idB}">${titleB}: ${exists}</span>
          <ul class="features-list-c">
          </ul>
        </li>
      `);

      featureB.subfeatures.forEach(function(featureC){
        const titleC = featureC.title;
        const idC = featureC.id
        const presenceC = featureC.presence;
        isPresent(presenceC);

        $(`.${idB} .features-list-c`).append(`
          <li class="feature-c ${idC}">
            <span id="${idC}">${titleC}: ${exists}</span>
            <ul class="features-list-d">
            </ul>
          </li>
        `);
      })
    })
  })
  markAbsentFeatures();
  addIcons();
  featureClick();

});

// variable and function for adding Yes or No to each feature depending on presence
let exists = null;

function isPresent(condition){
  if (condition === true) {
    exists = "Yes";
  } else {
    exists = "No";
  }
};

// denote all absent features with gray font and strikethrough
function markAbsentFeatures(){
  $("span:contains('No')").addClass("feature-absent");
}

// add Font Awesome icons to each top level <li>
function addIcons(){
  $(".101").prepend('<div class="icon"><i class="fa fa-male" aria-hidden="true"></i><i class="fa fa-female" aria-hidden="true"></i></div>');
  $(".102").prepend('<div class="icon"><i class="fa fa-paw" aria-hidden="true"></i></div>');
  $(".103").prepend('<div class="icon"><i class="fa fa-shower" aria-hidden="true"></i></div>');
  $(".104").prepend('<div class="icon"><i class="fa fa-trash" aria-hidden="true"></i></div>');
};

// each feature is a clickable bubble that opens up nested subfeatures
function featureClick(){
  $(".features-list-a").find(".feature-a").each(function(){
    $(this).click(function(){
      $(this).find(".feature-b, .feature-c").each(function(){
        $(this).toggle("medium");
      })
    })
  })
};

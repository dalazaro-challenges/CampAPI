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

  FEATURES.forEach(function(feature){
    let title = feature.title;
    let id = feature.id;
    let presence = feature.presence;
    isPresent(presence);


    $('.feature-list').append(`
      <li class="feature ${id}" id="">
        <span id="${id}">${title}: ${exists}</span>
        <ul class="subfeature-render">
        </ul>
      </li>
    `);

    feature.subfeatures.forEach(function(sub){
      let subTitle = sub.title
      let subId = sub.id;
      let subPresence = sub.presence;
      isPresent(subPresence);

      $(`.${id} .subfeature-render`).append(`
        <li class="subfeature ${subId}" id="">
          <span id="${subId}">${subTitle}: ${exists}</span>
          <ul class="sub-subfeature-render">
          </ul>
        </li>
      `);

      sub.subfeatures.forEach(function(subSub){
        let subSubTitle = subSub.title;
        let subSubId = subSub.id
        let subSubPresence = subSub.presence;
        isPresent(subSubPresence)

        $(`.${subId} .sub-subfeature-render`).append(`
          <li class="sub-subfeature ${subSubId}" id="">
            <span id="${subSubId}">${subSubTitle}: ${exists}</span>
            <ul class="sub-subfeature-render">
            </ul>
          </li>
        `);
      })
    })
  })

  // denote all absent features with gray font and strikethrough
  $("span:contains('No')").addClass("absent-feature");

  // each feature is a clickable bubble that opens up nested subfeatures
  $(".feature-container").find(".feature").each(function(){
    $(this).click(function(){
      $(this).find(".subfeature, .sub-subfeature").each(function(){
        $(this).toggle("medium");
      })
    })
  })


});

// variable and function for adding Yes or No to each feature depending on presence
let exists = null;

function isPresent(el){
  if (el === true) {
    exists = "Yes";
  } else {
    exists = "No";
  }
};

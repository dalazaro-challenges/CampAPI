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
      <li class="feature">
        <div class="bubble" id="${id}">
          <span>${title}: ${exists}</span>
          <ul class="subfeature-render">
          </ul>
        </div>
      </li>
    `);

    feature.subfeatures.forEach(function(sub){
      let subtitle = sub.title
      let subId = sub.id;
      let subpresence = sub.presence;
      isPresent(subpresence);

      $(`#${id} .subfeature-render`).append(`
        <li id="${subId}">
          <span>${subtitle}: ${exists}</span>
          <ul class="sub-subfeature-render">
          </ul>
        </li>
      `);

      sub.subfeatures.forEach(function(subSub){
        let subSubTitle = subSub.title;
        let subSubId = subSub.id
        let subSubPresence = subSub.presence;
        isPresent(subSubPresence)

        $(`#${subId} .sub-subfeature-render`).append(`
          <li id="${subSubId}">
            <span>${subSubTitle}: ${exists}</span>
            <ul class="sub-subfeature-render">
            </ul>
          </li>
        `);
      })
    })
  })

});

let exists = null;

function isPresent(el){
  if (el === true) {
    exists = "Yes"
  } else {
    exists = "No"
  }
};

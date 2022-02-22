// const example = 'https://api.spacexdata.com/v3/launches';


// $.getJSON(example, function (result) {
//     console.log(result);
// });




const API1 = 'https://www.boredapi.com/api/activity';

$.getJSON(API1, function (result) {
    console.log(result.activity);

    for (i = 0; i <= result.length; i++) {
        console.log(result[i].activity);
        // console.log(result[i].image);
        $(".left").append(
            "<div class='left row'>\
               <p>Bored API</p>\
                <p class='bored-1'>'"+ result[i].activity + "'</p>\
            </div>"
        );
    };
});

//         < h1 > Some Fun with API's</h1>\
//                     <p>Bored API</p>\
//  <p class=bored'>'"+ result[i].activity + "'</p > \
//             < div class='left row' > \
//             </div > \
//     < div class='right row' > \
//         < p >"+ result[i].type + "</p > \
//     </div > \
//     </div > "
// <div class="left row">
// //     <p>Bored API</p>
// //     
// //     <p class="bored"></p>
// // </div>



//   
// $(".right").append(
//     "<div class='container'>\
//         < h1 > Some Fun with API's</h1>\
//                     <p>Bored API</p>\
//     < div class= 'left row' > \
//             </div > \
//     < div class='right row' > \
//         < p >'"+ result[i].type + "'</p > \
//     </div > \
//     </div > "
// )




const API2 = 'http://api.open-notify.org/astros.json';

$.getJSON(API2, function (result) {
    console.log(result);

    for (i = 0; i < result.length; i++) {
        $(".left-bottom row").append(
            "<div class='left-bottom row'>\
            <p>Person in Space:"+ result[i].people.number.length + "</p>\
            <p>Craft Name:"+ result[i].people.craft + "</p>\
            <p>Message:"+ result[i].message + "</p>\
        </div>"
        )
    };

});
$.getJSON('http://api.open-notify.org/astros.json?callback=?', function (data) {
    var number = data['number'];
    $('#spacepeeps').html(number);

    data['people'].forEach(function (d) {
        $('.left-bottom').append('' + d['name'] + '');
    }); //WHY DOES THIS WORK?
});




const API3 = 'http://api.open-notify.org/iss-now.json?callback=?';
// https://api.wheretheiss.at/v1/satellites/25544 other API considering

$.getJSON(API3, function (result) {
    console.log(result);



    for (i = 0; i < result.length; i++) {
        $(".bottom-middle row").append(
            "<div class='container'>\
                    <h1>'APIs'</h1>\
                        <div class='left row'>\
                             <p>'Bored API'</p>\
                            <p class='bored'></p>\
                         </div>\
                    <div class='right row'>\
                    <p></p>\
                </div>\
                <div class='left-bottom row'>\
                    <p>Person in Space:</p>\
                        <p>Craft Name:</p>\
                    <p>Message:</p>\
                </div>\
                <div class='right-bottom row'>\
                    <p></p>\
                </div>\
            </div>\
            <div class='bottom-middle row'>\
                 <p>Where's the ISS now?'"+ result[i].iss_position.latitude + "'</p>\
            </div>"
        );
    };
});
// var lat = data['iss_position']['latitude'];
// var lon = data['iss_position']['longitude'];

// See leaflet docs for setting up icons and map layers
// The update to the map is done here:
// iss.setLatLng([lat, lon]);
// isscirc.setLatLng([lat, lon]);
// map.panTo([lat, lon], animate = true);








const API4 = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

$.getJSON(API4, function (result) {
    console.log(result);

    //     for (i = 1; i <= result.length; i++) {

    //         $(".right-bottom row").append(
    //             "<div class='container'>\
    //                 <h1>'APIs'</h1>\
    //                     <div class='left row'>\
    //                          <p>'Bored API'</p>\
    //                         <p class='bored'></p>\
    //                      </div>\
    //                 <div class='right row'>\
    //                 <p></p>\
    //             </div>\
    //             <div class='left-bottom row'>\
    //                 <p>Person in Space:</p>\
    //                     <p>Craft Name:</p>\
    //                 <p>Message:</p>\
    //             </div>\
    //             <div class='right-bottom row'>\
    //             <p></p>\
    //                 <li>''</li>\
    //                  " + result[i].strDrink.strDrinkThumb + " ' alt=''>\
    //                         </div>\
    //             </div>\
    //         </div>\
    // ");
    //         console.log(strDrinkThumb);
    //     };
});
const API5 = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

$.getJSON(API5, function (result) {
    console.log(result);
    //     for (i = 0; i <= result.length; i++) {
    //         $(".right row").append(
    //             "<div class='container'>\
    //     <h1>'APIs'</h1>\
    //         <div class='left row'>\
    //              <p>'Bored API'</p>\
    //             <p class='bored'></p>\
    //          </div>\
    //     <div class='right row'"+ result[i].strMeal.strArea + ">\
    //     <p></p>\
    // </div>\
    // )"
    //     )
    // };
});



const API6 = 'https://elephant-api.herokuapp.com/elephants';

$.getJSON(API6, function (result) {
    console.log(result);
});

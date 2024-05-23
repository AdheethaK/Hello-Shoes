$("#btn-login").on('click',() =>{
    $("#body-menu").css("left",0).css("z-index",1);
    $("#body-login").css("z-index",0);
})
// sale
$("#sidebar-menu > .sale").on('click',() =>{
    $("#body-sale").css("left",0).css("z-index",1);
    $("#body-menu").css("z-index",0);
})
$("#body-sale > div > .btn-back-to-menu").on('click',()=>{
    $("#body-sale").css("left","-100%").css("z-index",0);
    $("#body-menu").css("z-index",1);
})
// supplier
$("#sidebar-menu > .supplier").on('click',() =>{
    $("#body-supplier").css("left",0).css("z-index",1);
    $("#body-menu").css("z-index",0);
})
$("#body-supplier > div > .btn-back-to-menu").on('click',()=>{
    $("#body-supplier").css("left","-100%").css("z-index",0);
    $("#body-menu").css("z-index",1);
})
// customer
$("#sidebar-menu > .customer").on('click',() =>{
    $("#body-customer").css("left",0).css("z-index",1);
    $("#body-menu").css("z-index",0);
})
$("#body-customer > div > .btn-back-to-menu").on('click',()=>{
    $("#body-customer").css("left","-100%").css("z-index",0);
    $("#body-menu").css("z-index",1);
})
// employee
$("#sidebar-menu > .employee").on('click',() =>{
    $("#body-employee").css("left",0).css("z-index",1);
    $("#body-menu").css("z-index",0);
})
$("#body-employee > div > .btn-back-to-menu").on('click',()=>{
    $("#body-employee").css("left","-100%").css("z-index",0);
    $("#body-menu").css("z-index",1);
})
// inventory
$("#sidebar-menu > .inventory").on('click',() =>{
    $("#body-inventory").css("left",0).css("z-index",1);
    $("#body-menu").css("z-index",0);
})
$("#body-inventory > div > .btn-back-to-menu").on('click',()=>{
    $("#body-inventory").css("left","-100%").css("z-index",0);
    $("#body-menu").css("z-index",1);
})
// admin
$("#sidebar-menu > .admin").on('click',() =>{
    $("#body-admin").css("left",0).css("z-index",1);
    $("#body-menu").css("z-index",0);
})
$("#body-admin > div > .btn-back-to-menu").on('click',()=>{
    $("#body-admin").css("left","-100%").css("z-index",0);
    $("#body-menu").css("z-index",1);
})
// user services
$("#sidebar-menu > .user-service").on('click',() =>{
    $("#body-user-service").css("left",0).css("z-index",1);
    $("#body-menu").css("z-index",0);
})
$("#body-user-service > div > .btn-back-to-menu").on('click',()=>{
    $("#body-user-service").css("left","-100%").css("z-index",0);
    $("#body-menu").css("z-index",1);
})

$(document).ready(function(){
    $(".customer-box > .choose-gender > select.level").change(function(){
        var selectedLevel = $(this).children("option:selected").val();

        switch (selectedLevel){
            case 'red' : $(".choose-level .icon > i").css("-webkit-text-fill-color","red");break;
            case 'bronze' : $(".choose-level .icon > i").css("-webkit-text-fill-color","#FDB835");break;
            case 'silver' : $(".choose-level .icon > i").css("-webkit-text-fill-color","#A6A8AB");break;
            case 'gold' : $(".choose-level .icon > i").css("-webkit-text-fill-color","#8F784D");break;
            case 'platinum' : $(".choose-level .icon > i").css("-webkit-text-fill-color","#18242C");break;
        }
    });

    // choose gender for customer
    $(".customer-box > .choose-gender  > select.gender").change(function(){
        var selectedGender = $(this).children("option:selected").val();
        var genderIconCustomer = $(".customer-box > .choose-gender .icon > i");

        switch (selectedGender){
            case 'male' : genderIconCustomer.replaceWith("<i class=\"fa-solid fa-person fa-2xl\" style=\"color: #74C0FC;\"></i>");break;
            case 'female' : genderIconCustomer.replaceWith("<i class=\"fa-solid fa-person-dress fa-2xl\" style=\"color: #fe1667;\"></i>");break;
            case 'other' : genderIconCustomer.replaceWith("<i class=\"fa-solid fa-person-half-dress fa-2xl\" style=\"color: #FF9800;\"></i>");break;
            case 'rather-not-say' : genderIconCustomer.replaceWith("<i class=\"fa-solid fa-neuter fa-2xl\" style=\"color: #4cfe0b;\"></i>");break;
        }
    });
    // choose gender for employee
    $(".employee-box > .choose-gender  > select.gender").change(function(){
        var selectedGender = $(this).children("option:selected").val();
        var genderIconEmployee = $(".employee-box > .choose-gender .icon > i");

        switch (selectedGender){
            case 'male' : genderIconEmployee.replaceWith("<i class=\"fa-solid fa-person fa-2xl\" style=\"color: #74C0FC;\"></i>");break;
            case 'female' : genderIconEmployee.replaceWith("<i class=\"fa-solid fa-person-dress fa-2xl\" style=\"color: #fe1667;\"></i>");break;
            case 'other' : genderIconEmployee.replaceWith("<i class=\"fa-solid fa-person-half-dress fa-2xl\" style=\"color: #FF9800;\"></i>");break;
            case 'rather-not-say' : genderIconEmployee.replaceWith("<i class=\"fa-solid fa-neuter fa-2xl\" style=\"color: #4cfe0b;\"></i>");break;
        }
    });
    // choose main state customer
    $(".customer-box > select.address_main_state").change(function(){
        var selectedState = $(this).children("option:selected").val();

        switch (selectedState){
            case 'central' :central_remove_then_Add();break;
            case 'eastern' : eastern_remove_then_Add();break;
            case 'north-central' : north_central_remove_then_Add();break;
            case 'northern' : northern_remove_then_Add();break;
            case 'north-western' : north_western_remove_then_Add();break;
            case 'sabaragamuwa' : sabaragamuwa_remove_then_Add();break;
            case 'southern' : southern_remove_then_Add();break;
            case 'uva' : uva_remove_then_Add();break;
            case 'western' : western_remove_then_Add();break;
        }
    });
    // choose main state employee
    $(".employee-box > select.address_main_state").change(function(){
        var selectedState = $(this).children("option:selected").val();

        switch (selectedState){
            case 'central' :central_remove_then_Add();break;
            case 'eastern' : eastern_remove_then_Add();break;
            case 'north-central' : north_central_remove_then_Add();break;
            case 'northern' : northern_remove_then_Add();break;
            case 'north-western' : north_western_remove_then_Add();break;
            case 'sabaragamuwa' : sabaragamuwa_remove_then_Add();break;
            case 'southern' : southern_remove_then_Add();break;
            case 'uva' : uva_remove_then_Add();break;
            case 'western' : western_remove_then_Add();break;
        }
    });

    // choose customer main city
    $(".customer-box > select.address_main_city").change(function(){
        let selectedMainCity = $(this).children("option:selected").val();
        var postal_code_txt = $(".customer-box > .postal-code-txt");

        switch (selectedMainCity){
            // central province
            case 'kandy' : postal_code_txt.val("2000");break;
            case 'matale' : postal_code_txt.val("21000");break;
            case 'gampola' : postal_code_txt.val("20500");break;
            case 'nuwara-eliya' : postal_code_txt.val("22200");break;
            case 'dambulla' : postal_code_txt.val("21100");break;
            case 'hatton' : postal_code_txt.val("22000");break;
            case 'nawalapitiya' : postal_code_txt.val("20650");break;
            case 'kadugannawa' : postal_code_txt.val("20300");break;
            case 'wattegama' : postal_code_txt.val("20810");break;
            case 'talawakele' : postal_code_txt.val("22100");break;
            // eastern province
            case 'ampara' : postal_code_txt.val("32000");break;
            case 'batticaloa' : postal_code_txt.val("30000");break;
            case 'trincomalee' : postal_code_txt.val("31000");break;
            // north central province
            case 'anuradhapura' : postal_code_txt.val("50000");break;
            case 'polonnaruwa' : postal_code_txt.val("51000");break;
            // northern province
            case 'vavuniya' : postal_code_txt.val("43000");break;
            case 'jaffna' : postal_code_txt.val("40000");break;
            case 'chavakacheri' : postal_code_txt.val("40500");break;
            case 'mannar' : postal_code_txt.val("41000");break;
            case 'point-pedro' : postal_code_txt.val("40600");break;
            case 'valvettithurai' : postal_code_txt.val("40540");break;
            // north western
            case 'kurunegala' : postal_code_txt.val("60000");break;
            case 'puttalam' : postal_code_txt.val("61300");break;
            case 'kuliyapitiya' : postal_code_txt.val("60200");break;
            case 'chilaw' : postal_code_txt.val("61000");break;
            case 'narammula' : postal_code_txt.val("60100");break;
            // sabaragamuwa
            case 'kegalle' : postal_code_txt.val("71000");break;
            case 'ratnapura' : postal_code_txt.val("70000");break;
            // southern
            case 'galle' : postal_code_txt.val("80000");break;
            case 'matara' : postal_code_txt.val("81000");break;
            case 'hikkaduwa' : postal_code_txt.val("80240");break;
            case 'hambantota' : postal_code_txt.val("82000");break;
            case 'weligama' : postal_code_txt.val("81700");break;
            case 'ambalangoda' : postal_code_txt.val("80300");break;
            case 'tangalle' : postal_code_txt.val("82200");break;
            // uva
            case 'badulla' : postal_code_txt.val("90000");break;
            case 'bandarawela' : postal_code_txt.val("90100");break;
            case 'haputale' : postal_code_txt.val("90160");break;
            case 'monaragala' : postal_code_txt.val("91050");break;
            case 'welimada' : postal_code_txt.val("90200");break;
            case 'wellawaya' : postal_code_txt.val("91200");break;
            case 'ella' : postal_code_txt.val("90020");break;
            // western
            case 'colombo' : postal_code_txt.val("00100");break;
            case 'gampaha' : postal_code_txt.val("11870");break;
            case 'kalutara' : postal_code_txt.val("12000");break;
        }
    });
    // choose employee main city
    $(".employee-box > select.address_main_city").change(function(){
        let selectedMainCity = $(this).children("option:selected").val();
        var postal_code_txt = $(".employee-box > .postal-code-txt");

        switch (selectedMainCity){
            // central province
            case 'kandy' : postal_code_txt.val("2000");break;
            case 'matale' : postal_code_txt.val("21000");break;
            case 'gampola' : postal_code_txt.val("20500");break;
            case 'nuwara-eliya' : postal_code_txt.val("22200");break;
            case 'dambulla' : postal_code_txt.val("21100");break;
            case 'hatton' : postal_code_txt.val("22000");break;
            case 'nawalapitiya' : postal_code_txt.val("20650");break;
            case 'kadugannawa' : postal_code_txt.val("20300");break;
            case 'wattegama' : postal_code_txt.val("20810");break;
            case 'talawakele' : postal_code_txt.val("22100");break;
            // eastern province
            case 'ampara' : postal_code_txt.val("32000");break;
            case 'batticaloa' : postal_code_txt.val("30000");break;
            case 'trincomalee' : postal_code_txt.val("31000");break;
            // north central province
            case 'anuradhapura' : postal_code_txt.val("50000");break;
            case 'polonnaruwa' : postal_code_txt.val("51000");break;
            // northern province
            case 'vavuniya' : postal_code_txt.val("43000");break;
            case 'jaffna' : postal_code_txt.val("40000");break;
            case 'chavakacheri' : postal_code_txt.val("40500");break;
            case 'mannar' : postal_code_txt.val("41000");break;
            case 'point-pedro' : postal_code_txt.val("40600");break;
            case 'valvettithurai' : postal_code_txt.val("40540");break;
            // north western
            case 'kurunegala' : postal_code_txt.val("60000");break;
            case 'puttalam' : postal_code_txt.val("61300");break;
            case 'kuliyapitiya' : postal_code_txt.val("60200");break;
            case 'chilaw' : postal_code_txt.val("61000");break;
            case 'narammula' : postal_code_txt.val("60100");break;
            // sabaragamuwa
            case 'kegalle' : postal_code_txt.val("71000");break;
            case 'ratnapura' : postal_code_txt.val("70000");break;
            // southern
            case 'galle' : postal_code_txt.val("80000");break;
            case 'matara' : postal_code_txt.val("81000");break;
            case 'hikkaduwa' : postal_code_txt.val("80240");break;
            case 'hambantota' : postal_code_txt.val("82000");break;
            case 'weligama' : postal_code_txt.val("81700");break;
            case 'ambalangoda' : postal_code_txt.val("80300");break;
            case 'tangalle' : postal_code_txt.val("82200");break;
            // uva
            case 'badulla' : postal_code_txt.val("90000");break;
            case 'bandarawela' : postal_code_txt.val("90100");break;
            case 'haputale' : postal_code_txt.val("90160");break;
            case 'monaragala' : postal_code_txt.val("91050");break;
            case 'welimada' : postal_code_txt.val("90200");break;
            case 'wellawaya' : postal_code_txt.val("91200");break;
            case 'ella' : postal_code_txt.val("90020");break;
            // western
            case 'colombo' : postal_code_txt.val("00100");break;
            case 'gampaha' : postal_code_txt.val("11870");break;
            case 'kalutara' : postal_code_txt.val("12000");break;
        }
    });

    $("#categories-one").change(function(){
        var selectedCategoryMain = $(this).children("option:selected").val();
        var img = $("#item-category-img > img");

        switch (selectedCategoryMain){
            case 'shoes' :
                img.replaceWith("<img src=\"assets/img/shoes.png\" alt=\"\" height=\"50px\" width=\"auto\">");
                shoes_remove_then_add();
                shoe_size_one_remove_then_add();
                break;
            case 'shoe-polish' : img.replaceWith("<img src=\"assets/img/polish.png\" alt=\"\" height=\"50px\" width=\"auto\">");break;
            case 'shampoo' : img.replaceWith("<img src=\"assets/img/conditioner.png\" alt=\"\" height=\"50px\" width=\"auto\">");break;
            case 'socks' : img.replaceWith("<img src=\"assets/img/sock.png\" alt=\"\" height=\"50px\" width=\"auto\">");break;
        }
    });
    $("#item-size-one").change(function(){
        var selectedSizeCategory = $(this).children("option:selected").val();

        switch (selectedSizeCategory){
            case 'women' :shoe_size_women_remove_then_add();break;
            case 'men' : shoe_size_men_remove_then_add();break;
            case 'big-kid' : shoe_size_big_kid_remove_then_add();break;
            case 'little-kid' : shoe_size_little_kid_remove_then_add();break;
            case 'toddler' : shoe_size_toddler_remove_then_add();break;
            case 'infant' : shoe_size_infant_remove_then_add();break;
        }
    });

    // body supplier
    $("select.supplier-category").change(function(){
        var selectedSupplierCategory = $(this).children("option:selected").val();

        switch (selectedSupplierCategory){
            case 'local' : $(".choose-supplier-category .icon > i").replaceWith("<i class=\"fa-solid fa-location-dot fa-2xl\" style=\"color: #63E6BE;\"></i>");break;
            case 'international' : $(".choose-supplier-category .icon > i").replaceWith("<i class=\"fa-solid fa-earth-americas fa-2xl\" style=\"color: #74C0FC;\"></i>");break;
        }
    });
});

var central_remove_then_Add = function () {
    $("select.address_main_city").find("option").remove().end().append(
        '<option value="" disabled selected class="placeholder-select" style="color: lightgray">Main City</option>' +
        '<option value = "kandy">Kandy</option>' +
        '<option value = "matale">Matale</option>' +
        '<option value = "gampola">Gampola</option>' +
        '<option value = "nuwara-eliya">Nuwara Eliya</option>' +
        '<option value = "dambulla">Dambulla</option>' +
        '<option value = "hatton">Hatton</option>' +
        '<option value = "nawalapitiya">Nawalapitiya</option>' +
        '<option value = "kadugannawa">Kadugannawa</option>' +
        '<option value = "wattegama">Wattegama</option>' +
        '<option value = "talawakele">Talawakele</option>'
    );
}
var eastern_remove_then_Add = function () {
    $("select.address_main_city").find("option").remove().end().append(
        '<option value="" disabled selected class="placeholder-select" style="color: lightgray">Main City</option>' +
        '<option value = "ampara">Ampara</option>' +
        '<option value = "batticaloa">Batticaloa</option>' +
        '<option value = "trincomalee">Trincomalee</option>'
    );
}
var north_central_remove_then_Add = function () {
    $("select.address_main_city").find("option").remove().end().append(
        '<option value="" disabled selected class="placeholder-select" style="color: lightgray">Main City</option>' +
        '<option value = "anuradhapura">Anuradhapura</option>' +
        '<option value = "polonnaruwa">Polonnaruwa</option>'
    );
}
var northern_remove_then_Add = function () {
    $("select.address_main_city").find("option").remove().end().append(
        '<option value="" disabled selected class="placeholder-select" style="color: lightgray">Main City</option>' +
        '<option value = "vavuniya">Vavuniya</option>' +
        '<option value = "jaffna">Jaffna</option>' +
        '<option value = "chavakacheri">Chavakacheri</option>' +
        '<option value = "mannar">Mannar</option>' +
        '<option value = "point-pedro">Point Pedro</option>' +
        '<option value = "valvettithurai">Valvettithurai</option>'
    );
}
var north_western_remove_then_Add = function () {
    $("select.address_main_city").find("option").remove().end().append(
        '<option value="" disabled selected class="placeholder-select" style="color: lightgray">Main City</option>' +
        '<option value = "kurunegala">Kurunegala</option>' +
        '<option value = "puttalam">Puttalam</option>' +
        '<option value = "kuliyapitiya">Kuliyapitiya</option>' +
        '<option value = "chilaw">Chilaw</option>' +
        '<option value = "narammula">Narammula</option>'
    );
}
var sabaragamuwa_remove_then_Add = function () {
    $("select.address_main_city").find("option").remove().end().append(
        '<option value="" disabled selected class="placeholder-select" style="color: lightgray">Main City</option>' +
        '<option value = "kegalle">Kegalle</option>' +
        '<option value = "ratnapura">Ratnapura</option>'
    );
}
var southern_remove_then_Add = function () {
    $("select.address_main_city").find("option").remove().end().append(
        '<option value="" disabled selected class="placeholder-select" style="color: lightgray">Main City</option>' +
        '<option value = "galle">Galle</option>' +
        '<option value = "matara">Matara</option>' +
        '<option value = "hikkaduwa">Hikkaduwa</option>' +
        '<option value = "hambantota">Hambantota</option>' +
        '<option value = "weligama">Weligama</option>' +
        '<option value = "ambalangoda">Ambalangoda</option>'+
        '<option value = "tangalle">Tangalle</option>'
    );
}
var uva_remove_then_Add = function () {
    $("select.address_main_city").find("option").remove().end().append(
        '<option value="" disabled selected class="placeholder-select" style="color: lightgray">Main City</option>' +
        '<option value = "badulla">Badulla</option>' +
        '<option value = "bandarawela">Bandarawela</option>' +
        '<option value = "haputale">Haputale</option>' +
        '<option value = "monaragala">Monaragala</option>' +
        '<option value = "welimada">Welimada</option>' +
        '<option value = "wellawaya">Wellawaya</option>'+
        '<option value = "ella">Ella</option>'
    );
}
var western_remove_then_Add = function () {
    $("select.address_main_city").find("option").remove().end().append(
        '<option value="" disabled selected class="placeholder-select" style="color: lightgray">Main City</option>' +
        '<option value = "colombo">Colombo</option>' +
        '<option value = "gampaha">Gampaha</option>' +
        '<option value = "kalutara">Kalutara</option>'
    );
}

// the specific item select options
var shoes_remove_then_add = function () {
    $("#categories-two").find("option").remove().end().append(
        '<option value="" disabled selected class="placeholder-select" style="color: lightgray">Select specific item</option>' +
        // athletic shoes
        '<option value = "running-shoes">Running Shoes</option>' +
        '<option value = "basketball-shoes">Basketball Shoes</option>' +
        '<option value = "soccer-shoes">Soccer Shoes</option>' +
        '<option value = "hiking-boots">Hiking Boots</option>' +
        '<option value = "golf-shoes">Golf Shoes</option>' +
        '<option value = "climbing-shoes">Climbing Shoes</option>' +
        '<option value = "tennis-shoes">Tennis Shoes</option>' +
        '<option value = "skate-shoes">Skate Shoes</option>' +
        '<option value = "sneakers">Sneakers</option>' +
        // boots
        '<option value = "ankle-boots">Ankle Boots</option>'+
        '<option value = "knee-high-boots">Knee High Boots</option>' +
        '<option value = "combat-boots">Combat Boots</option>' +
        '<option value = "hiking-boots">Hiking Boots</option>' +
        '<option value = "work-boots">Work Boots</option>' +
        '<option value = "cowboy-boots">Cowboy Boots</option>' +
        '<option value = "wellington-boots">Wellington Boots</option>' +
        '<option value = "snow-boots">Snow Boots</option>' +
        // heels
        '<option value = "stiletto-heels">Stiletto Heels</option>'+
        '<option value = "wedge-heels">Wedge Heels</option>' +
        '<option value = "block-heels">Block Heels</option>' +
        '<option value = "kitten-heels">Kitten Heels</option>' +
        '<option value = "platform-heels">Platform Heels</option>' +
        // flats
        '<option value = "ballet-flats">Ballet Flats</option>' +
        '<option value = "loafers">Loafers</option>' +
        '<option value = "flip-flops">Flip Flops</option>' +
        '<option value = "espadrilles">Espadrilles</option>'+
        '<option value = "sandals">Sandals</option>' +
        '<option value = "moccasins">Moccasins</option>' +
        // herring's men's shoes
        '<option value = "oxford-shoes">Oxford Shoes</option>' +
        '<option value = "spectator-shoes">Spectator Shoes</option>' +
        '<option value = "brogue-shoes">Brogue Shoes</option>' +
        '<option value = "monk-shoes">Monk Shoes</option>' +
        '<option value = "derby-shoes">Derby Shoes</option>' +
        '<option value = "loafers">Loafers</option>'+
        '<option value = "chelsea-boots">Chelsea Boots</option>' +
        '<option value = "deck-shoes">Deck Shoes</option>' +
        '<option value = "slippers">Slippers</option>' +
        '<option value = "men’s-wedding-shoes">Men’s Wedding Shoes</option>'
    );
}

// the sizing categories
var shoe_size_one_remove_then_add = function () {
    $("#item-size-one").find("option").remove().end().append(
        '<option value="" disabled selected class="placeholder-select" style="color: lightgray">Category</option>' +
        '<option value = "women">Women</option>' +
        '<option value = "men">Men</option>' +
        '<option value = "big-kid">Big Kid</option>' +
        '<option value = "little-kid">Little Kid</option>' +
        '<option value = "toddler">Toddler</option>' +
        '<option value = "infant">Infant</option>'
    );
}
// the sizing : women
var shoe_size_women_remove_then_add = function () {
    $("#item-size-two").find("option").remove().end().append(
        '<option value="" disabled selected class="placeholder-select" style="color: lightgray">Size</option>' +
        '<option value = "4">4</option>' +
        '<option value = "4.5">4.5</option>' +
        '<option value = "5">5</option>' +
        '<option value = "5.5">5.5</option>' +
        '<option value = "6">6</option>' +
        '<option value = "6.5">6.5</option>' +
        '<option value = "7">7</option>' +
        '<option value = "7.5">7.5</option>' +
        '<option value = "8">8</option>' +
        '<option value = "8.5">8.5</option>'+
        '<option value = "9">9</option>' +
        '<option value = "9.5">9.5</option>' +
        '<option value = "10">10</option>' +
        '<option value = "10.5">10.5</option>'+
        '<option value = "11">11</option>' +
        '<option value = "11.5">11.5</option>' +
        '<option value = "12">12</option>'
    );
}
// the sizing : men
var shoe_size_men_remove_then_add = function () {
    $("#item-size-two").find("option").remove().end().append(
        '<option value="" disabled selected class="placeholder-select" style="color: lightgray">Size</option>' +
        '<option value = "6">6</option>' +
        '<option value = "6.5">6.5</option>' +
        '<option value = "7">7</option>' +
        '<option value = "7.5">7.5</option>' +
        '<option value = "8">8</option>' +
        '<option value = "8.5">8.5</option>' +
        '<option value = "9">9</option>' +
        '<option value = "9.5">9.5</option>' +
        '<option value = "10">10</option>' +
        '<option value = "10.5">10.5</option>'+
        '<option value = "11">11</option>' +
        '<option value = "11.5">11.5</option>' +
        '<option value = "12">12</option>' +
        '<option value = "13">13</option>'+
        '<option value = "14">14</option>' +
        '<option value = "15">15</option>' +
        '<option value = "16">16</option>'
    );
}
// the sizing : big kid
var shoe_size_big_kid_remove_then_add = function () {
    $("#item-size-two").find("option").remove().end().append(
        '<option value="" disabled selected class="placeholder-select" style="color: lightgray">Size</option>' +
        '<option value = "3.5">3.5</option>' +
        '<option value = "4">4</option>' +
        '<option value = "4.5">4.5</option>' +
        '<option value = "5">5</option>' +
        '<option value = "5.5">5.5</option>' +
        '<option value = "6">6</option>' +
        '<option value = "6.5">6.5</option>' +
        '<option value = "7">7</option>'
    );
}
// the sizing : little kid
var shoe_size_little_kid_remove_then_add = function () {
    $("#item-size-two").find("option").remove().end().append(
        '<option value="" disabled selected class="placeholder-select" style="color: lightgray">Size</option>' +
        '<option value = "10.5">10.5</option>' +
        '<option value = "11">11</option>' +
        '<option value = "11.5">11.5</option>' +
        '<option value = "12">12</option>' +
        '<option value = "12.5">12.5</option>' +
        '<option value = "13">13</option>' +
        '<option value = "13.5">13.5</option>' +
        '<option value = "1">1</option>'+
        '<option value = "1.5">1.5</option>' +
        '<option value = "2">2</option>' +
        '<option value = "2.5">2.5</option>' +
        '<option value = "3">3</option>'
    );
}
// the sizing : toddler
var shoe_size_toddler_remove_then_add = function () {
    $("#item-size-two").find("option").remove().end().append(
        '<option value="" disabled selected class="placeholder-select" style="color: lightgray">size</option>' +
        '<option value = "3.5">3.5</option>' +
        '<option value = "4">4</option>' +
        '<option value = "4.5">4.5</option>' +
        '<option value = "5">5</option>' +
        '<option value = "5.5">5.5</option>' +
        '<option value = "6">6</option>' +
        '<option value = "6.5">6.5</option>' +
        '<option value = "7">7</option>'+
        '<option value = "7.5">7.5</option>' +
        '<option value = "8">8</option>' +
        '<option value = "8.5">8.5</option>' +
        '<option value = "9">9</option>' +
        '<option value = "9.5">9.5</option>' +
        '<option value = "10">10</option>'
    );
}
// the sizing : infant
var shoe_size_infant_remove_then_add = function () {
    $("#item-size-two").find("option").remove().end().append(
        '<option value="" disabled selected class="placeholder-select" style="color: lightgray">size</option>' +
        '<option value = "0">0</option>' +
        '<option value = "1">1</option>' +
        '<option value = "1.5">1.5</option>' +
        '<option value = "2">2</option>' +
        '<option value = "2.5">2.5</option>' +
        '<option value = "3">3</option>'
    );
}
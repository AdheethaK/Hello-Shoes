import {CustomerModel} from "../model/CustomerModel.js";

// -------- 01. Load Customer tbl--------------
// -------- 02. Save Customer --------------
$("#customer-btn-save").on('click',() =>{

    let customer = get_object_customer();
    console.log(customer);

    // JavaEE
    //create JSON
    const customerJSON = JSON.stringify(customer);

    //send data to endpoint via ajax
    // AJAX - JQuery
    $.ajax({
        url : "http://localhost:8080/HelloShoes/api/v1/customer",
        type : "POST",
        data : customerJSON ,
        headers : {"Content-Type":"application/json"} ,
        success : (resp) => {
            Swal.fire(
                'Success!',
                'Customer has been saved successfully!',
                'success'
            );
            // clean_input();

        },
        error : (err) => {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Input',
                text: 'Error in customer save ! :('
            })
        }
    });

    // alert("customer save : )");
})
// -------- 03. Update Customer --------------
$("#customer-btn-update").on('click',()=>{
    alert("customer update : )")
})
// -------- 04. Search Customer --------------
$("#customer-btn-search").on('click',()=>{

    let customer_code = $('#input-customer-code').val();
    // send data to endpoint via ajax
    // AJAX - JQuery
    $.ajax({
        traditional : true,
        url : "http://localhost:8080/HelloShoes/api/v1/customer",
        type : "GET",
        data : {"customerCode" : customer_code},
        headers : {"Content-Type":"application/json"} ,
        success:
            function (customer){
                console.log(customer);
                fill_all_fields_customer(customer)
                Swal.fire(
                    'Success!',
                    'Customer has been saved successfully!',
                    'success'
                );
                // let customer = $.parseJSON(customerJSON)
                // console.log(customer.customer_name)
                // fill_all_fields_customer(customer)
            },
        error : (err) => {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Input',
                text: err
            })
        }
    });
})
// -------- 05. Delete Customer --------------
$("#customer-btn-delete").on('click',()=>{
    alert("customer delete : )")
})
// -------- 06. New ID Customer --------------
$("#customer-btn-new-id").on('click',()=>{
    clear_input();
})
// -------- 06. Clear Input --------------
const clear_input = () => {
    $("#input-customer-code").val('');
    $("#input-customer-name").val('');
    $("#input-customer-gender").val('').css("-webkit-text-fill-color","lightgrey");
    $("#input-customer-joined-date").val('').css("-webkit-text-fill-color","lightgrey");
    $("#input-customer-level").val('').css("-webkit-text-fill-color","lightgrey");
    $("#input-customer-total-points").val('');
    $("#input-customer-dob").val('').css("-webkit-text-fill-color","lightgrey");
    $("#input-customer-address-building-no-or-name").val('');
    $("#input-customer-address-lane").val('');
    $("#input-customer-address-main-city").val('').css("-webkit-text-fill-color","lightgrey");
    $("#input-customer-address-main-state").val('').css("-webkit-text-fill-color","lightgrey");
    $("#input-customer-address-postal-code").val('');
    $("#input-customer-contact-no").val('');
    $("#input-customer-email").val('');
    $("#input-customer-recent-purchase").val('');

    // clear all icons
    $(".choose-gender > .icon > i").replaceWith("<i></i>");
    $(".choose-level > .icon > i").css("-webkit-text-fill-color","transparent");
}
// -------- 07. Get object : Customer --------------
const get_object_customer = ()=>{
    let customer_code = $("#input-customer-code").val();
    let customer_name = $("#input-customer-name").val();
    let customer_gender = $("#input-customer-gender").val();
    let customer_joined_date = $("#input-customer-joined-date").val();
    let customer_level = $("#input-customer-level").val();
    let customer_total_points = $("#input-customer-total-points").val();
    let customer_dob = $("#input-customer-dob").val();
    let customer_address_building_no_or_name = $("#input-customer-address-building-no-or-name").val();
    let customer_address_lane = $("#input-customer-address-lane").val();
    let customer_address_main_city = $("#input-customer-address-main-city").val();
    let customer_address_main_state = $("#input-customer-address-main-state").val();
    let customer_address_postal_code = $("#input-customer-address-postal-code").val();
    let customer_contact_no = $("#input-customer-contact-no").val();
    let customer_email = $("#input-customer-email").val();
    let customer_recent_purchase = $("#input-customer-recent-purchase").val();

    // create customer object
    let customer = new CustomerModel(
        customer_code,
        customer_name,
        customer_gender,
        customer_joined_date,
        customer_level,
        customer_total_points,
        customer_dob,
        customer_address_building_no_or_name,
        customer_address_lane,
        customer_address_main_city,
        customer_address_main_state,
        customer_address_postal_code,
        customer_contact_no,
        customer_email,
        customer_recent_purchase
    );

    return customer;
}
// -------- 08. Fill all fields : Customer --------------
const fill_all_fields_customer = (customer)=>{
    $("#input-customer-code").val(customer.customer_code.substring(0, 4));
    $("#input-customer-name").val(customer.customer_name);
    $("#input-customer-gender").val(customer.customer_gender).change(change_select_to_dark_grey($("#input-customer-gender")));
    choose_gender(customer.customer_gender,$(".customer-box > .choose-gender .icon > i"));

    $("#input-customer-joined-date").val(customer.customer_joined_date).change(change_select_to_dark_grey($("#input-customer-joined-date")));
    $("#input-customer-level").val(customer.customer_level).change(change_select_to_dark_grey($("#input-customer-level")));
    choose_level(customer.customer_level,$(".choose-level .icon > i"))

    $("#input-customer-total-points").val(customer.customer_total_points);
    $("#input-customer-dob").val(customer.customer_dob).change(change_select_to_dark_grey($("#input-customer-dob")));
    $("#input-customer-address-building-no-or-name").val(customer.customer_address_building_no_or_name);
    $("#input-customer-address-lane").val(customer.customer_address_lane);
    $("#input-customer-address-main-state").val(customer.customer_address_main_state).change(change_select_to_dark_grey($("#input-customer-address-main-state")));
    change_main_city(customer.customer_address_main_state);
    $("#input-customer-address-main-city").val(customer.customer_address_main_city).change(change_select_to_dark_grey($("#input-customer-address-main-city")));
    $("#input-customer-address-postal-code").val(customer.customer_address_postal_code);
    $("#input-customer-contact-no").val(customer.customer_contact_no);
    $("#input-customer-email").val(customer.customer_email);
    $("#input-customer-recent-purchase").val(customer.customer_recent_purchase);
    change_all_to_dark_grey_customer();
}
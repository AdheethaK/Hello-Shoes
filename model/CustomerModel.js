export class CustomerModel{
    constructor(customer_code,
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
                customer_recent_purchace) {
        this.customer_code = customer_code;
        this.customer_gender = customer_gender;
        this.customer_joined_date = customer_joined_date;
        this.customer_level = customer_level;
        this.customer_total_points = customer_total_points;
        this.customer_dob = customer_dob;
        this.customer_address_building_no_or_name = customer_address_building_no_or_name;
        this.customer_address_lane = customer_address_lane;
        this.customer_address_main_city = customer_address_main_city;
        this.customer_address_main_state = customer_address_main_state;
        this.customer_address_postal_code = customer_address_postal_code;
        this.customer_contact_no = customer_contact_no;
        this.customer_email = customer_email;
        this.customer_recent_purchace = customer_recent_purchace;
    }
}
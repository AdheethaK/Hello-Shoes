export class EmployeeModel{
    constructor(employee_code,
                employee_name,
                employee_profile_img,
                employee_gender,
                employee_status,
                employee_designation,
                employee_access_role,
                employee_date_of_birth,
                employee_joined_date,
                employee_attached_branch,
                employee_address_building_no_or_name,
                employee_address_lane,
                employee_address_main_city,
                employee_address_main_state,
                employee_address_postal_code,
                employee_contact_no,
                employee_email,
                employee_inform_in_emergency,
                employee_emergency_contact) {
        this.employee_code = employee_code;
        this.employee_name = employee_name;
        this.employee_profile_img = employee_profile_img;
        this.employee_gender = employee_gender;
        this.employee_status = employee_status;
        this.employee_designation = employee_designation;
        this.employee_access_role = employee_access_role;
        this.employee_date_of_birth = employee_date_of_birth;
        this.employee_joined_date = employee_joined_date;
        this.employee_attached_branch = employee_attached_branch;
        this.employee_address_building_no_or_name = employee_address_building_no_or_name;
        this.employee_address_lane = employee_address_lane;
        this.employee_address_main_city = employee_address_main_city;
        this.employee_address_main_state = employee_address_main_state;
        this.employee_address_postal_code = employee_address_postal_code;
        this.employee_contact_no = employee_contact_no;
        this.employee_email = employee_email;
        this.employee_inform_in_emergency = employee_inform_in_emergency;
        this.employee_emergency_contact = employee_emergency_contact;
    }
}
export class SupplierModel{
    constructor(supplier_code,
                supplier_name,
                supplier_category,
                supplier_address_building_no_or_name,
                supplier_address_lane,
                supplier_address_main_city,
                supplier_address_main_state,
                supplier_address_postal_code,
                supplier_original_country,
                supplier_contact_no_1,
                supplier_contact_no_2,
                supplier_email){
        this.supplier_code = supplier_code;
        this.supplier_name = supplier_name;
        this.supplier_category = supplier_category;
        this.supplier_address_building_no_or_name = supplier_address_building_no_or_name;
        this.supplier_address_lane = supplier_address_lane;
        this.supplier_address_main_city = supplier_address_main_city;
        this.supplier_address_main_state = supplier_address_main_state;
        this.supplier_address_postal_code = supplier_address_postal_code;
        this.supplier_original_country = supplier_original_country;
        this.supplier_contact_no_1 = supplier_contact_no_1;
        this.supplier_contact_no_2 = supplier_contact_no_2;
        this.supplier_email = supplier_email;
    }
}
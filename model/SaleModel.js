export class SaleModel{
    constructor(sale_item_code,
                sale_order_no,
                sale_customer_name,
                sale_item_description,
                sale_size,
                sale_unit_price,
                sale_item_qty,
                sale_total_price,
                sale_purchased_date,
                sale_payment_method,
                sale_added_points,
                sale_cashier_name) {
        this.sale_item_code = sale_item_code;
        this.sale_order_no = sale_order_no;
        this.sale_customer_name = sale_customer_name;
        this.sale_item_description = sale_item_description;
        this.sale_size = sale_size;
        this.sale_unit_price = sale_unit_price;
        this.sale_item_qty = sale_item_qty;
        this.sale_total_price = sale_total_price;
        this.sale_purchased_date = sale_purchased_date;
        this.sale_payment_method = sale_payment_method;
        this.sale_added_points = sale_added_points;
        this.sale_cashier_name = sale_cashier_name;
    }
}
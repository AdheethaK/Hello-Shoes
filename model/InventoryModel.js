export class InventoryModel{
    constructor(item_code,
                item_description,
                item_image,
                item_category_main,
                item_category_specific,
                item_size_category,
                item_size_size,
                item_supplier_code,
                item_unit_price_sale,
                item_unit_price_buy,
                item_expected_profit,
                item_profit_margin,
                item_status) {
        this.item_code = item_code;
        this.item_description = item_description;
        this.item_image = item_image;
        this.item_category_main = item_category_main;
        this.item_category_specific = item_category_specific;
        this.item_size_category = item_size_category;
        this.item_size_size = item_size_size;
        this.item_supplier_code = item_supplier_code;
        this.item_unit_price_sale = item_unit_price_sale;
        this.item_unit_price_buy = item_unit_price_buy;
        this.item_expected_profit = item_expected_profit;
        this.item_profit_margin = item_profit_margin;
        this.item_status = item_status;
    }
}
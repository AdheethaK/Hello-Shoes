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
    $("select.level").change(function(){
        var selectedLevel = $(this).children("option:selected").val();

        switch (selectedLevel){
            case 'red' : $(".icon > i").css("-webkit-text-fill-color","red");break;
            case 'bronze' : $(".icon > i").css("-webkit-text-fill-color","#FDB835");break;
            case 'silver' : $(".icon > i").css("-webkit-text-fill-color","#A6A8AB");break;
            case 'gold' : $(".icon > i").css("-webkit-text-fill-color","#8F784D");break;
            case 'platinum' : $(".icon > i").css("-webkit-text-fill-color","#18242C");break;
        }
    });
});
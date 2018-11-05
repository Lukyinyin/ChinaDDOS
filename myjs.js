/**
 * Created by L on 2018/9/26.
 */
// js,jq引入写一个入口函数就行
$(function () {
    //轮播图
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay:{
            delay:3000,
            disableOnInteraction: false
        },
        effect : 'fade',
        fadeEffect: {
            crossFade: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    // 会员登录 / 会员注册
    $("#Log_in,#Register").on("mouseenter", function () {
        $(this).css("color","#007aff")
    }).on("mouseleave", function () {
        $(this).css("color","#ffffff")
    });

    //点登录按钮出现遮罩层
    $("#Log_in").on("click", function (e) {
        $("#Mask").show();
        $("#Show").show();
        $(document).css("overflow","hidden");

        e.stopPropagation();
    });
    //点注册按钮出现遮罩层
    $("#Register").on("mouseenter", function () {
        $(this).css("color","#007aff");
    }).on("click", function (e) {
        $(".colorbtn input").eq(0).val("注册");
        $(".colorbtn input").eq(1).val("手机号注册");
        $("#Mask").show();
        $("#Show").show();
        $(document).css("overflow","hidden");
        e.stopPropagation();
    }).on("keydown","#Txt_message",function (e) {
        if($(this).val() == ""){
            $("#Message").css("display","block");
        }
        else{
            $("#Message").css("display","none");
        }
        //e.stopPropagation();
    });

    // 点击空白处隐藏遮罩层
   $(".close").on("click", function () {
       console.log(11);
    ////if(e.currentTarget != "#Show") {
       $("#Mask").css("display","none");
    //    $("#Show").css("display","none");
    //    $(document).css("overflow", "visible");
    //    //}
    });





    // 登录的输入框,不会做
    $("#Txt_message").on("input,change", function (e) {
        if($(this).val() == ""){
            $("#Message").show();
        }
        else{
            $("#Message").hide();
        }
        e.stopPropagation();
    });





    // 导航栏变色
    $(function () {
        // 给当前的元素添加active属性
        // 给当前元素的兄弟删除active属性
        $("#Nav li").mouseenter(function () {
            $(this).addClass("active").siblings().removeClass("active");
        })
    })









})

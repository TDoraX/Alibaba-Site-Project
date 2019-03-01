"use strict";
define(['config'], function (config) {
    require(['jquery'], function ($) {
        // 首页模块的构造器
        function IndexModule() {

        }

        // 首页的初始化方法
        IndexModule.prototype.init = function () {
            this.scrollSearch();
            this.toggleMenu();
            this.slideShow();
            this.recommendDataInit();
            this.dataInit();
        };

        // 滚动固定搜索栏功能
        IndexModule.prototype.scrollSearch = function () {
            const fixedBar = $('#fixed-search-bar');
            // 开关变量保证动画只触发一次
            let derail = false;
            $(window).on('scroll', function () {
                if ($(window).scrollTop() >= 200 && !derail) {
                    derail = true;
                    fixedBar.animate({
                        top: 0
                    });
                }
                if ($(window).scrollTop() < 200 && derail) {
                    derail = false;
                    fixedBar.animate({
                        top: '-54px'
                    });
                }
            });
        };

        // 左侧菜单栏切换功能
        IndexModule.prototype.toggleMenu = function () {
            const subNav = $('#subnav');
            const floatMenu = $('.float-menu');
            const lists = $('#subnav > li').not(floatMenu);
            subNav.on('mouseover', function () {
                floatMenu.stop(true, true).show();
            });
            // 需要冒泡，用mouseover事件
            lists.each(function (index) {
                $(lists[index]).on('mouseover', function () {
                    $(this).addClass('current').siblings().removeClass('current');
                });
            });
            // 阻止冒泡，用mouseleave事件
            subNav.on('mouseleave', function () {
                lists.each(function (index) {
                    $(lists[index]).removeClass('current');
                });
                floatMenu.stop(true, true).fadeOut(100);
            });
        };

        // 幻灯片功能
        IndexModule.prototype.slideShow = function () {
            const slides = $('.slide-show ul > li');
            const prev = $('.slide-show .prev');
            const next = $('.slide-show .next');
            const slideButtons = $('.slide-show .slide-btn-list .slide-btn');
            let playNum = 0;
            slides.eq(0).animate({opacity: 1}, 200);
            next.on('click', function () {
                slides.eq(playNum).animate({opacity: 0}, 200);
                if (playNum >= slides.length - 1) {
                    playNum = 0;
                    slides.eq(playNum).animate({opacity: 1}, 200);
                } else {
                    slides.eq(playNum + 1).animate({opacity: 1}, 200);
                    playNum++;
                }
                slideButtons.eq(playNum).addClass('current').siblings().removeClass('current');
            });
            prev.on('click', function () {
                slides.eq(playNum).animate({opacity: 0}, 200);
                if (playNum <= 0) {
                    playNum = slides.length - 1;
                    slides.eq(playNum).animate({opacity: 1}, 200);
                } else {
                    slides.eq(playNum - 1).animate({opacity: 1}, 200);
                    playNum--;
                }
                slideButtons.eq(playNum).addClass('current').siblings().removeClass('current');
            });
            slideButtons.each(function (index) {
                slideButtons.eq(index).on('click', function () {
                    slides.eq(playNum).animate({opacity: 0}, 200);
                    if (index !== playNum) {
                        slideButtons.eq(index).addClass('current').siblings().removeClass('current');
                        slides.eq(index).animate({opacity: 1}, 200);
                        playNum = index;
                    }
                })
            })
        };

        // 同店商品的获取
        IndexModule.prototype.recommendDataInit = function () {
            $.ajax({
                url: 'http://10.31.162.43/ali1688/php/recommend.php',
                dataType: 'json'
            }).done(function (data) {
                const recommendItem = $('.recommend-image-container');
                const recommendAll = $('.recommend-item');
                let derail = false;
                recommendAll.each(function (allIndex) {

                    $.each(data, function (index, value) {
                        recommendAll.eq(allIndex).find('.recommend-image-container').eq(index)
                            .find('img').attr('src', value.img);
                        recommendAll.eq(allIndex).find('.recommend-image-container').eq(index)
                            .find('.item-price').text('￥ ' + value.price);
                        recommendAll.eq(allIndex).find('.recommend-image-container').eq(index)
                            .find('.item-ordered').text('交易量：' + value.salenum);
                    });
                    recommendAll.eq(allIndex).find('.recommend-image-container').each(function (index) {
                        recommendAll.eq(allIndex).find('.recommend-image-container').eq(index).on('mouseover', function () {
                            if (!derail) {
                                $(this).find('.image-cover').stop(true, true).animate({opacity: 1}, 200);
                                derail = true;
                            }

                        });
                        recommendAll.eq(allIndex).find('.recommend-image-container').eq(index).on('mouseout', function () {
                            if (derail) {
                                $(this).find('.image-cover').stop(true, true).animate({opacity: 0}, 200);
                                derail = false;
                            }

                        });
                    });
                });
            });
        };

        // 商品的获取（首页 - 猜你喜欢）
        IndexModule.prototype.dataInit = function () {
            $.ajax({
                url: 'http://10.31.162.43/ali1688/php/information.php',
                dataType: 'json'
            }).done(function (data) {
                const guessItem = $('.guess-item');
                $.each(data, function (index, value) {
                    guessItem.eq(index)
                        .attr('data-id', value.sid)
                        .find('.image-container img')
                        .attr('src', value.img);
                    guessItem.eq(index).find('.price').html(value.price);
                    guessItem.eq(index).find('.text-content').html(value.title);
                });
            });
        };

        // 初始化首页模块
        new IndexModule().init();
    });
});
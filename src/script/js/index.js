define(['config'], function (config) {
    require(['jquery'], function ($) {
        // 首页模块的构造器
        function IndexModule() {
            this._this = this;
        }

        // 首页的初始化方法
        IndexModule.prototype.init = function () {
            this.scrollSearch();
            this.toggleMenu();
            this.slideShow();
        };

        // 滚动固定搜索栏功能
        IndexModule.prototype.scrollSearch = function () {
            var fixedBar = $('#fixed-search-bar');
            // 开关变量保证动画只触发一次
            var derail = false;
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
            var subNav = $('#subnav');
            var floatMenu = $('.float-menu');
            var lists = $('#subnav > li').not(floatMenu);
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
            var slides = $('.slide-show ul > li');
            var prev = $('.slide-show .prev');
            var next = $('.slide-show .next');
            var slideButtons = $('.slide-show .slide-btn-list .slide-btn');
            var playNum = 0;
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

        // 初始化首页模块
        new IndexModule().init();
    });
});
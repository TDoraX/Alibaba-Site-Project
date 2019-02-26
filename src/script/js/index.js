define(['config'], function (config) {
    require(['jquery'], function ($) {

        // 左侧菜单栏样式切换
        function MenuLists() {
            this.lists = $('.main .left #subnav > li');
            this.floatLayer = $('.main .left .floatLayer');
            this.floatText = $('.main .left .floatLayer_text');
            this.floatImg = $('.main .left .floatLayer_img');
            this.textMenu = $('.main .left div.text');
            this.imgMenu = $('.main .left div.image');
        }
        MenuLists.prototype.init = function () {
            var _this = this;
            this.showLists(_this);
        };
        MenuLists.prototype.showLists = function (_this) {
            this.lists.each(function (index) {
                $(_this.lists[index]).on('mouseenter', function () {
                    $(_this.lists[index]).addClass('current').siblings().removeClass('current');
                    _this.floatLayer.show();
                    _this.floatText.show();
                    _this.floatImg.show();
                    $(_this.textMenu[index]).show().siblings().hide();
                    $(_this.imgMenu[index]).show().siblings().hide();
                });
            });
        };
        MenuLists.prototype.hideLists = function (_this) {

        };
        new MenuLists().init();
    })
});
'use strict';

/**
 * @ngdoc function
 * @name sdpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sdpApp
 */
angular.module('sdpApp')
        .controller('MainCtrl', function ($scope) {

            var carousel = $('#carousel-refi').carousel({interval: false, wrap: false});
            var panelsTotal = $('#carousel-refi .carousel-inner div.item').length - 1;
            //console.log(panelsTotal);

            //After the carousel has completed sliding
            carousel.on('slid.bs.carousel', function (index) {
                var panelID = $('.carousel-inner .item.active').index();

                //If this is the first panel, hide the left arrow. Otherwise show both
                if (panelID === 0) {
                    $('#carousel-refi .left').fadeOut('fast');
                } else {
                    $('#carousel-refi .left').fadeIn('fast');
                }

                //If this is the last panel hide the right arrow, otherwise show all others
                if (panelID === panelsTotal) {
                    $('#carousel-refi .right').fadeOut('fast');
                } else {
                    $('#carousel-refi .right').fadeIn('fast');
                }
                
                
                if(panelID === (panelsTotal - 1)){
                    console.log('Pre End');
                    $('#carousel-refi .right').addClass('ready');
                }

                //Update progress bar
                $('#progress').css('width', Math.floor(panelID / panelsTotal * 100) + '%');
            });


            //When a carousel has started sliding
            carousel.on('slide.bs.carousel', function (index) {
                $('.right.carousel-control').removeClass('ready');
            });


            //When an input has data in it+
            $('#carousel-refi input').on('keyup', function () {
                $('.right.carousel-control').addClass('ready');
            });


            //When an input has data in it
            $('#carousel-refi .money').on('keyup', function () {
                var money = $(this).val();
                $(this).val(commaSeparateNumber(money));
            });


            //When a label within a frame is clicked, make it active and unactive all the others
            $('#carousel-refi label').on('click', function () {
                $(this).closest('.item').find('label').removeClass('active');
                $(this).addClass('active');
                $('.right.carousel-control').addClass('ready');
            });
            
            $('#tabs').tabCollapse();

            //Add commas to format numbers
            function commaSeparateNumber(val) {
                val = val.replace(',', '');
                return val.toString().replace(',', '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

        });

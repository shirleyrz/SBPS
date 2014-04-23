/**
 * Created by Rong on 4/22/2014.
 */

//photo slider
jQuery(function () {
    var myCamera = jQuery('#camera532f92b3e5d86');
    if (!myCamera.hasClass('motopress-camera')) {
        myCamera.addClass('motopress-camera');
        myCamera.camera({
            autoAdvance: true, //true, false
            mobileAutoAdvance: true, //true, false. Auto-advancing for mobile devices
            cols: 12,
            fx: "simpleFade", //'random','simpleFade', 'curtainTopLeft', 'curtainTopRight', 'curtainBottomLeft',          'curtainBottomRight', 'curtainSliceLeft', 'curtainSliceRight', 'blindCurtainTopLeft', 'blindCurtainTopRight', 'blindCurtainBottomLeft', 'blindCurtainBottomRight', 'blindCurtainSliceBottom', 'blindCurtainSliceTop', 'stampede', 'mosaic', 'mosaicReverse', 'mosaicRandom', 'mosaicSpiral', 'mosaicSpiralReverse', 'topLeftBottomRight', 'bottomRightTopLeft', 'bottomLeftTopRight', 'bottomLeftTopRight'
            loader: "no", //pie, bar, none (even if you choose "pie", old browsers like IE8- can't display it... they will display always a loading bar)
            navigation: true, //true or false, to display or not the navigation buttons
            navigationHover: false, //if true the navigation button (prev, next and play/stop buttons) will be visible on hover state only, if false they will be visible always
            pagination: false,
            playPause: false, //true or false, to display or not the play/pause buttons
            rows: 8,
            slicedCols: 12,
            slicedRows: 8,
            thumbnails: false,
            time: 7000, //milliseconds between the end of the sliding effect and the start of the next one
            transPeriod: 1500, //lenght of the sliding effect in milliseconds

            alignment: 'topCenter',
            barDirection: 'leftToRight',
            barPosition: 'top',
            easing: 'easeOutQuad',
            mobileEasing: '',
            mobileFx: '',
            gridDifference: 250,
            imagePath: 'images/',
            minHeight: "50px",
            height: "33.88%",
            loaderColor: '#ffffff',
            loaderBgColor: '#eb8a7c',
            loaderOpacity: 1,
            loaderPadding: 0,
            loaderStroke: 3,
            pieDiameter: 33,
            piePosition: 'rightTop',
            portrait: true,
            ////////callbacks
            onEndTransition: function () {
            }, //this callback is invoked when the transition effect ends
            onLoaded: function () {
            }, //this callback is invoked when the image on a slide has completely loaded
            onStartLoading: function () {
            }, //this callback is invoked when the image on a slide start loading
            onStartTransition: function () {
            } //this callback is invoked when the transition effect starts
        });
    }
});
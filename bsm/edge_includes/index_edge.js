/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'a22',
                type: 'image',
                rect: ['0px', '0px','300px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a2.jpg",'0px','0px']
            },
            {
                id: 't',
                type: 'image',
                rect: ['-305px', '-118px','1080px','190px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'l',
                type: 'image',
                rect: ['-607px', '-184px','1373px','420px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'a3',
                type: 'image',
                rect: ['-614px', '-144px','1080px','473px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a3.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'a2',
                type: 'image',
                rect: ['-687px', '-31px','1200px','270px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a2.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'a1',
                type: 'image',
                rect: ['-676px', '-51px','1180px','240px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_a2}": [
                ["style", "height", '270px'],
                ["style", "top", '-31px'],
                ["style", "left", '-687px'],
                ["style", "width", '1200px']
            ],
            "${_a3}": [
                ["style", "height", '473px'],
                ["style", "top", '-146px'],
                ["style", "left", '-614px'],
                ["style", "width", '1080px']
            ],
            "${_t}": [
                ["style", "top", '-118px'],
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0'],
                ["style", "left", '-305px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '180px'],
                ["style", "width", '300px']
            ],
            "${_a22}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_l}": [
                ["style", "top", '-184px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '420px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-607px'],
                ["style", "width", '1373px']
            ],
            "${_a1}": [
                ["style", "left", '-676px'],
                ["style", "top", '-51px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12000,
            autoPlay: true,
            timeline: [
                { id: "eid1", tween: [ "style", "${_a1}", "left", '-520px', { fromValue: '-676px'}], position: 750, duration: 829, easing: "easeInOutElastic" },
                { id: "eid12", tween: [ "style", "${_a1}", "left", '-676px', { fromValue: '-520px'}], position: 6206, duration: 1124, easing: "easeInOutElastic" },
                { id: "eid4", tween: [ "style", "${_l}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1124, easing: "easeInOutElastic" },
                { id: "eid49", tween: [ "style", "${_l}", "opacity", '0', { fromValue: '1'}], position: 11618, duration: 382, easing: "easeInOutElastic" },
                { id: "eid22", tween: [ "transform", "${_l}", "scaleY", '0.1', { fromValue: '0'}], position: 0, duration: 1124, easing: "easeInOutElastic" },
                { id: "eid24", tween: [ "transform", "${_t}", "scaleY", '0.1', { fromValue: '0'}], position: 779, duration: 1721, easing: "easeInOutElastic" },
                { id: "eid29", tween: [ "transform", "${_t}", "scaleY", '0', { fromValue: '0.1'}], position: 9369, duration: 1804, easing: "easeInOutElastic" },
                { id: "eid2", tween: [ "style", "${_a2}", "left", '-531px', { fromValue: '-687px'}], position: 866, duration: 829, easing: "easeInOutElastic" },
                { id: "eid13", tween: [ "style", "${_a2}", "left", '-687px', { fromValue: '-531px'}], position: 6049, duration: 1124, easing: "easeInOutElastic" },
                { id: "eid9", tween: [ "style", "${_a3}", "left", '-471px', { fromValue: '-614px'}], position: 6364, duration: 1124, easing: "easeInOutElastic" },
                { id: "eid48", tween: [ "style", "${_a3}", "left", '-621px', { fromValue: '-471px'}], position: 10119, duration: 1499, easing: "easeInOutElastic" },
                { id: "eid21", tween: [ "transform", "${_l}", "scaleX", '0.1', { fromValue: '0'}], position: 0, duration: 1124, easing: "easeInOutElastic" },
                { id: "eid16", tween: [ "style", "${_t}", "top", '-69px', { fromValue: '-118px'}], position: 779, duration: 1160, easing: "easeInOutElastic" },
                { id: "eid30", tween: [ "style", "${_t}", "top", '-118px', { fromValue: '-69px'}], position: 9369, duration: 1881, easing: "easeInOutElastic" },
                { id: "eid23", tween: [ "transform", "${_t}", "scaleX", '0.1', { fromValue: '0'}], position: 779, duration: 1721, easing: "easeInOutElastic" },
                { id: "eid28", tween: [ "transform", "${_t}", "scaleX", '0', { fromValue: '0.1'}], position: 9369, duration: 1804, easing: "easeInOutElastic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-3053170");

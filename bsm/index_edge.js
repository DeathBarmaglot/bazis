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
                id: 'l',
                type: 'image',
                rect: ['-871px', '-261px','1952px','586px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['-458px', '27px','1080px','190px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px'],
                transform: [[],[],[],['0.12','0.12']]
            },
            {
                id: 's',
                type: 'image',
                rect: ['-1299px', '37px','2898px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"s.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'a3',
                type: 'image',
                rect: ['-462px', '3px','1120px','160px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a3.svg",'0px','0px'],
                transform: [[],[],[],['0.18','0.18']]
            },
            {
                id: 'a2',
                type: 'image',
                rect: ['-453px', '-6px','1120px','251px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a2.svg",'0px','0px'],
                transform: [[],[],[],['0.12','0.12']]
            },
            {
                id: 'a1',
                type: 'image',
                rect: ['-482px', '-39px','1180px','240px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a1.svg",'0px','0px'],
                transform: [[],[],[],['0.12','0.12']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_a2}": [
                ["style", "top", '-6px'],
                ["transform", "scaleY", '0.12'],
                ["transform", "scaleX", '0.12'],
                ["style", "height", '251px'],
                ["style", "opacity", '0'],
                ["style", "left", '-651px'],
                ["style", "width", '1120px']
            ],
            "${_s}": [
                ["style", "top", '37px'],
                ["style", "opacity", '0'],
                ["style", "left", '-1299px'],
                ["style", "width", '2898px']
            ],
            "${_a3}": [
                ["style", "top", '3px'],
                ["transform", "scaleY", '0.18'],
                ["transform", "scaleX", '0.18'],
                ["style", "opacity", '0'],
                ["style", "left", '-660px']
            ],
            "${_l}": [
                ["style", "top", '-261px'],
                ["style", "height", '586px'],
                ["style", "opacity", '0'],
                ["style", "left", '-871px'],
                ["style", "width", '1952px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_t}": [
                ["style", "top", '27px'],
                ["transform", "scaleY", '0.12'],
                ["transform", "scaleX", '0.12'],
                ["style", "opacity", '0'],
                ["style", "left", '-656px']
            ],
            "${_a22}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_a1}": [
                ["style", "top", '-39px'],
                ["transform", "scaleY", '0.12'],
                ["transform", "scaleX", '0.12'],
                ["style", "opacity", '0'],
                ["style", "left", '-680px']
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
                { id: "eid53", tween: [ "style", "${_a1}", "left", '-487px', { fromValue: '-680px'}], position: 75, duration: 1424, easing: "easeInOutBack" },
                { id: "eid81", tween: [ "style", "${_a1}", "left", '-680px', { fromValue: '-487px'}], position: 5704, duration: 1424, easing: "easeInOutBack" },
                { id: "eid69", tween: [ "style", "${_a2}", "opacity", '1', { fromValue: '0'}], position: 900, duration: 1132, easing: "easeInOutBack" },
                { id: "eid84", tween: [ "style", "${_a2}", "opacity", '0', { fromValue: '1'}], position: 5838, duration: 1132, easing: "easeInOutBack" },
                { id: "eid91", tween: [ "style", "${_a2}", "opacity", '0', { fromValue: '1'}], position: 10868, duration: 1132, easing: "easeInOutBack" },
                { id: "eid85", tween: [ "style", "${_s}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1124, easing: "easeInOutBack" },
                { id: "eid89", tween: [ "style", "${_s}", "opacity", '0', { fromValue: '1'}], position: 10868, duration: 1132, easing: "easeInOutBack" },
                { id: "eid2", tween: [ "style", "${_l}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1124, easing: "easeInOutBack" },
                { id: "eid87", tween: [ "style", "${_l}", "opacity", '0', { fromValue: '1'}], position: 10868, duration: 1132, easing: "easeInOutBack" },
                { id: "eid73", tween: [ "style", "${_a3}", "opacity", '1', { fromValue: '0'}], position: 6131, duration: 1132, easing: "easeInOutBack" },
                { id: "eid90", tween: [ "style", "${_a3}", "opacity", '0', { fromValue: '1'}], position: 10868, duration: 1132, easing: "easeInOutBack" },
                { id: "eid75", tween: [ "style", "${_a1}", "opacity", '1', { fromValue: '0'}], position: 450, duration: 1132, easing: "easeInOutBack" },
                { id: "eid82", tween: [ "style", "${_a1}", "opacity", '0', { fromValue: '1'}], position: 5838, duration: 1132, easing: "easeInOutBack" },
                { id: "eid86", tween: [ "style", "${_a1}", "opacity", '0', { fromValue: '1'}], position: 10868, duration: 1132, easing: "easeInOutBack" },
                { id: "eid71", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 6505, duration: 1132, easing: "easeInOutBack" },
                { id: "eid88", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 10868, duration: 1132, easing: "easeInOutBack" },
                { id: "eid65", tween: [ "style", "${_a2}", "left", '-462px', { fromValue: '-651px'}], position: 450, duration: 1424, easing: "easeInOutBack" },
                { id: "eid83", tween: [ "style", "${_a2}", "left", '-651px', { fromValue: '-462px'}], position: 5621, duration: 1424, easing: "easeInOutBack" },
                { id: "eid61", tween: [ "style", "${_a3}", "left", '-456px', { fromValue: '-660px'}], position: 5838, duration: 1424, easing: "easeInOutBack" },
                { id: "eid93", tween: [ "style", "${_a3}", "left", '-685px', { fromValue: '-456px'}], position: 10250, duration: 1250, easing: "easeInOutBack" },
                { id: "eid92", tween: [ "style", "${_a22}", "opacity", '0', { fromValue: '1'}], position: 10868, duration: 1132, easing: "easeInOutBack" },
                { id: "eid57", tween: [ "style", "${_t}", "left", '-449px', { fromValue: '-656px'}], position: 6213, duration: 1424, easing: "easeInOutBack" },
                { id: "eid95", tween: [ "style", "${_t}", "left", '-641px', { fromValue: '-449px'}], position: 10500, duration: 1000, easing: "easeInOutBack" }            ]
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
})(jQuery, AdobeEdge, "EDGE-2751113");

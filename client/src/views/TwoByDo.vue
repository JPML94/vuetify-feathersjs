<template>
    <v-container fluid>
        <div class="main">
        <v-btn @click="noteCounter += 1">+</v-btn>
            <div id="board" class="clear">
                <div v-for="i in noteCounter" :key="i" class="stickies">
                    <stiky-note v-drag></stiky-note>
                </div>               
                <div class="y-axis">
                  <div class="y-axis-title-top" id="y-axis-title-top" contenteditable>{{ titleTop }}</div>
                  <div class="y-axis-title-bottom" id="y-axis-title-bottom" contenteditable>{{ titleBottom }}</div>
                </div>
                <div class="x-axis">
                  <div class="x-axis-title-right" id="x-axis-title-right" contenteditable>{{ titleRight }}</div>
                  <div class="x-axis-title-left" id="x-axis-title-left" contenteditable>{{ titleLeft }}</div>
            </div>
  	        </div>
        </div>
    </v-container>
</template>

<script>
import StickyNote from '@/views/StickyNote';
import drag from '@branu-jp/v-drag';

export default {
  name: 'twobydo',
  components: {
      'stiky-note': StickyNote,
  },
  directives: {
      drag,
  },
  data: function () {
    return {
        titleRight: 'Title Right',
        titleLeft: 'Title Left',
        titleTop: 'Title Top',
        titleBottom: 'Title Bottom',
        noteCounter: 0,
    };
  },
//   mounted: {
//       getTitles: {

//       },
//       getStickies: {

//       },
//  },
};
</script>

<style lang="scss" scoped>
.animated {
	-webkit-animation-fill-mode:both;
	-moz-animation-fill-mode:both;
	-ms-animation-fill-mode:both;
	-o-animation-fill-mode:both;
	animation-fill-mode:both;
	-webkit-animation-duration:1s;
	-moz-animation-duration:1s;
	-ms-animation-duration:1s;
	-o-animation-duration:1s;
	animation-duration:1s;
}

@-webkit-keyframes bounceInDown {
	0% {
		opacity: 0;
		-webkit-transform: translateY(-2000px);
	}	60% {
		opacity: 1;
		-webkit-transform: translateY(30px);
	}

	80% {
		-webkit-transform: translateY(-10px);
	}

	100% {
		-webkit-transform: translateY(0);
	}
}

@-moz-keyframes bounceInDown {
	0% {
		opacity: 0;
		-moz-transform: translateY(-2000px);
	}

	60% {
		opacity: 1;
		-moz-transform: translateY(30px);
	}

	80% {
		-moz-transform: translateY(-10px);
	}

	100% {
		-moz-transform: translateY(0);
	}
}

@-o-keyframes bounceInDown {
	0% {
		opacity: 0;
		-o-transform: translateY(-2000px);
	}

	60% {
		opacity: 1;
		-o-transform: translateY(30px);
	}

	80% {
		-o-transform: translateY(-10px);
	}

	100% {
		-o-transform: translateY(0);
	}
}

@keyframes bounceInDown {
	0% {
		opacity: 0;
		transform: translateY(-2000px);
	}

	60% {
		opacity: 1;
		transform: translateY(30px);
	}

	80% {
		transform: translateY(-10px);
	}

	100% {
		transform: translateY(0);
	}
}

.bounceInDown {
	-webkit-animation-name: bounceInDown;
	-moz-animation-name: bounceInDown;
	-o-animation-name: bounceInDown;
	animation-name: bounceInDown;
}
@-webkit-keyframes pulseUp {
    0% { -webkit-transform: scale(1); }
    100% { -webkit-transform: scale(1.1); }
}
@-moz-keyframes pulseUp {
    0% { -webkit-transform: scale(1); }
    100% { -webkit-transform: scale(1.1); }
}
@-o-keyframes pulseUp {
    0% { -webkit-transform: scale(1); }
    100% { -webkit-transform: scale(1.1); }
}
@keyframes pulseUp {
    0% { -webkit-transform: scale(1); }
    100% { -webkit-transform: scale(1.1); }
}

.pulseUp {
	-webkit-animation-duration:0.1s;
	-moz-animation-duration:0.1s;
	-ms-animation-duration:0.1s;
	-o-animation-duration:0.1s;
	animation-duration:0.1s;
	-webkit-animation-name: pulseUp;
	-moz-animation-name: pulseUp;
	-o-animation-name: pulseUp;
	animation-name: pulseUp;
}

@-webkit-keyframes pulseDown {
    0% { -webkit-transform: scale(1.1); }
    100% { -webkit-transform: scale(1.0); }
}
@-moz-keyframes pulseDown {
    0% { -webkit-transform: scale(1.1); }
    100% { -webkit-transform: scale(1.0); }
}
@-o-keyframes pulseDown {
    0% { -webkit-transform: scale(1.1); }
    100% { -webkit-transform: scale(1.0); }
}
@keyframes pulseDown {
    0% { -webkit-transform: scale(1.1); }
    100% { -webkit-transform: scale(1.0); }
}

.pulseDown {
	-webkit-animation-duration:0.1s;
	-moz-animation-duration:0.1s;
	-ms-animation-duration:0.1s;
	-o-animation-duration:0.1s;
	animation-duration:0.1s;
	-webkit-animation-name: pulseDown;
	-moz-animation-name: pulseDown;
	-o-animation-name: pulseDown;
	animation-name: pulseDown;
}

html, body, div, span, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, tbody,
tfoot, thead, tr, th, td, article, aside, footer, header, hgroup, nav, section {
   border: 0;
   font-size: 100%;
   font: inherit;
   vertical-align: baseline;
   background: transparent;
   margin: 0;
   padding: 0;
}

table {
   border-collapse: collapse;
   border-spacing: 0;
}

ol, ul {
   list-style: none;
}

img {
   border: none;
}

a {
   color: #000;
   text-decoration: none;
}

 a:hover {
   text-decoration: none;
 }

html {
  height: 100vh;
}

body
{
   line-height: 1;
   color: #000;
   padding: 0px 70px 0px 0px;
   height: 100%;
   box-sizing: border-box;
   background: #F8F9FA;
	 display: flex;
}

#board {
   position: relative;
   height: 80vh;
   background: white;
   box-shadow: 0 1px 3px rgba(0,0,0,.1);
   border-radius: 2px;
}

.main {
	flex-grow: 1;
}

* {
	box-sizing: border-box;
}

.clear:after {
   content: "";
   display: block;
   height: 0;
   clear: both;
}
.pen { background-position: 0 0; width: 16px; height: 16px; }
.sticky .save-no { background-position: 0 -21px; width: 16px; height: 16px; }
.sticky-save { background-position: 0 -42px; width: 16px; height: 16px; }
.sticky-delete { background-position: 0 -67px; width: 16px; height: 16px; }

#add-note {
   position: absolute;
   top: 20px;
   right: 20px;
   display: inline-block;
   white-space: nowrap;
   background: black;
   padding: 15px 20px;
   font-size: 20px;
   text-transform: uppercase;
   text-decoration: none;
   color: white;
   border-radius: 4px;
}

.pen {
   margin-right: 5px;
   display: inline-block;
}

/*************************************************************
Board
************************************************************/

#to-do, #in-progress, #done {
   width: 33%;
   min-height: 800px;
   float: left;
}

#to-do {
   border-right: 1px solid #cfcfcf;
}

#in-progress {
   border-left: 1px solid #f7f7f7;
   border-right: 1px solid #cfcfcf;
}

#done {
    border-left: 1px solid #f7f7f7;
}


/*************************************************************
Sticky
************************************************************/

.sticky {
  background: #fffad6;
   position: absolute;
   width:200px;
   min-height:50px;
   box-shadow: 0 1px 3px rgba(0,0,0,.1);
   border-radius: 4px;
   padding: 20px;
   &:hover {
     .sticky-delete, .sticky-save {
         opacity: 1;
      }
    }
}

   .sticky-delete {
     background: #fffad6;
       position: absolute;
       cursor: pointer;
       z-index: 111;
       color: black;
       padding: 10px;
       top: 0;
       right: 0;
       opacity: 0;

   }



   .sticky-drag {
       cursor: move;
   }

   .sticky-save {
     background: #fffad6;
       position: absolute;
       cursor: pointer;
       z-index: 111;
       color: black;
       padding: 10px;
       top: 0;
       right: 30px;
       opacity: 0;
   }


   .sticky h2 {
       position: relative;
       margin-bottom: 10px;
       z-index: 12;
   }

   .sticky p {
       position: relative;
       z-index: 11;
   }



   .sticky .fix-shadow {
       position:absolute;
       bottom: 0;
       width: 300px;
       height: 200px;
       background: inherit;
       z-index: 2;
   }

   .handle {
       position:absolute;
       width: 100%;
       left: 0;
       right: 0;
       top: 0;
       height: 40px;
       //background-color:red;

   }

.y-axis {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #f2f2f2;
  left: 50%;
  transform: translateX(-50%);
}

.y-axis-title-top {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 100;
  padding: 20px;
  text-transform: uppercase;
  background: white;
}

.y-axis-title-bottom {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 100;
  padding: 20px;
  text-transform: uppercase;
  background: white;
}

.x-axis {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: #f2f2f2;
  top: 50%;
  transform: translateY(-50%);
}

.x-axis-title-left {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: left;
  z-index: 100;
  padding: 20px;
  text-transform: uppercase;
  background: white;
}

.x-axis-title-right {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: right;
  z-index: 100;
  padding: 20px;
  text-transform: uppercase;
  background: white;
}

.sidebar-item {
	border-radius: 2px;
	padding: 15px 20px;
	margin-bottom: 5px;
	text-align: center;
	&.active {
		background: white;
	}
}

.sidebar {
	width: 240px;
	background: #F1F3F5;
	height: 100%;
	position: sticky;
	top: 0;
	flex-grow: 0;
	padding: 20px;
}

.logotype {
  font-size: 16px;
  color: #868E96;
  text-transform: lowercase;
  letter-spacing: .5px;
	text-align: center;
	position: absolute;
	bottom: 20px;
	left: 0;
	width: 100%;
}

.main {
	padding: 20px;
}

</style>

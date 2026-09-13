export default function absVideo(premium) {
    if (typeof premium === 'object') {
        const def = {
            icons: {
                centerPlay: `<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6"/></svg>`,
                centerPause: `<svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 512 512"><path fill="currentColor" d="M208 432h-48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v320a16 16 0 0 1-16 16m144 0h-48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v320a16 16 0 0 1-16 16"/></svg>`,
                playBtn: `<svg width="25px" height="25px"  viewBox="0 0 24 24"><path fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>`,
                adsPlayBtn: `<svg width="65px" height="65px" viewBox="-0.5 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-347.000000, -3766.000000)" fill="#ff0000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322" id="play-[#1003]"> </path> </g> </g> </g> </g></svg>`,
                pauseBtn: `<svg  width="25px" height="25px" viewBox="0 0 24 24"><path fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" d="M14,19H18V5H14M6,19H10V5H6V19Z"></path></svg>`,
                fullScreenEnter: `<svg  width="25px" height="25px" viewBox="0 0 24 24"><path fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></svg>`,
                fullScreenOut: `<svg  width="27px" height="27px" viewBox="0 0 24 24"><path fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></svg>`,
                rightArrow: `<svg version="1.1" dth="12px" fill="#fff" height="12px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 59.414 59.414" style="enable-background:new 0 0 59.414 59.414;" xml:space="preserve"><polygon points="15.561,0 14.146,1.414 42.439,29.707 14.146,58 15.561,59.414 45.268,29.707 "/></svg>`,
                muteBtn: `<svg width="25px" height="25px" viewBox="0 0 24 24"><path fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"></path></svg>`,
                soundLower: `<svg width="25px" height="25px" viewBox="0 0 24 24"><path fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z"></path></svg>`,
                soundHigher: `<svg width="25px" height="25px" viewBox="0 0 24 24"><path fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"></path></svg>`,
                moveForward: `<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.4314 16.9203H12.1414C11.7314 16.9203 11.3914 16.5803 11.3914 16.1703C11.3914 15.7603 11.7314 15.4203 12.1414 15.4203H14.4314C14.8614 15.4203 15.2114 15.0703 15.2114 14.6403C15.2114 14.2103 14.8614 13.8603 14.4314 13.8603H12.1414C11.9014 13.8603 11.6714 13.7403 11.5314 13.5503C11.3914 13.3603 11.3514 13.1003 11.4314 12.8703L12.1914 10.5803C12.2914 10.2703 12.5814 10.0703 12.9014 10.0703H15.9614C16.3714 10.0703 16.7114 10.4103 16.7114 10.8203C16.7114 11.2303 16.3714 11.5703 15.9614 11.5703H13.4414L13.1814 12.3603H14.4314C15.6914 12.3603 16.7114 13.3803 16.7114 14.6403C16.7114 15.9003 15.6814 16.9203 14.4314 16.9203Z" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }"></path> <path d="M9.54041 16.9208C9.13041 16.9208 8.79041 16.5808 8.79041 16.1708V12.7808L8.60041 13.0008C8.32041 13.3108 7.85041 13.3308 7.54041 13.0608C7.24041 12.7808 7.21041 12.3108 7.49041 12.0008L8.99041 10.3308C9.20041 10.1008 9.53041 10.0208 9.82041 10.1308C10.1104 10.2408 10.3004 10.5208 10.3004 10.8308V16.1808C10.2904 16.5908 9.96041 16.9208 9.54041 16.9208Z" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }"></path> <path d="M19.6916 7.3488C19.4416 7.0188 18.9716 6.9488 18.6416 7.1988C18.3116 7.4488 18.2416 7.9188 18.4916 8.2488C19.5716 9.6888 20.1416 11.3688 20.1416 13.1088C20.1416 17.5988 16.4916 21.2488 12.0016 21.2488C7.51156 21.2488 3.86156 17.5988 3.86156 13.1088C3.86156 8.6188 7.51156 4.9788 12.0016 4.9788C12.5816 4.9788 13.1716 5.0488 13.8116 5.1988C13.8416 5.2088 13.8716 5.1988 13.9016 5.1988C13.9316 5.1988 13.9516 5.2188 13.9716 5.2188C14.0016 5.2188 14.0216 5.2088 14.0516 5.2088C14.0816 5.2088 14.1116 5.1988 14.1516 5.1888C14.2116 5.1788 14.2616 5.1488 14.3116 5.1288C14.3416 5.1088 14.3716 5.0988 14.4016 5.0788C14.4116 5.0688 14.4316 5.0688 14.4416 5.0588C14.4716 5.0388 14.4816 5.0088 14.5016 4.9888C14.5416 4.9488 14.5716 4.9188 14.6016 4.8688C14.6316 4.8288 14.6416 4.7788 14.6616 4.7288C14.6716 4.6988 14.6916 4.6688 14.7016 4.6388C14.7016 4.6188 14.7016 4.6088 14.7016 4.5888C14.7116 4.5388 14.7116 4.4888 14.7016 4.4388C14.7016 4.3888 14.7016 4.3488 14.6916 4.2988C14.6816 4.2588 14.6616 4.2188 14.6416 4.1688C14.6216 4.1188 14.6016 4.0688 14.5716 4.0288C14.5716 4.0188 14.5716 4.0088 14.5616 3.9988L12.5816 1.5288C12.3216 1.2088 11.8516 1.1488 11.5316 1.4088C11.2116 1.6688 11.1616 2.1388 11.4116 2.4588L12.2316 3.4788C12.1516 3.4788 12.0716 3.4688 11.9916 3.4688C6.68156 3.4688 2.35156 7.7888 2.35156 13.1088C2.35156 18.4288 6.67156 22.7488 11.9916 22.7488C17.3116 22.7488 21.6316 18.4288 21.6316 13.1088C21.6416 11.0388 20.9616 9.0488 19.6916 7.3488Z" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }"></path> </g></svg>`,
                moveBackward: `<svg viewBox="0 0 24 24" width="25px" height="25px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.96 10.8301H12.9L12.14 13.1201H14.43C15.27 13.1201 15.96 13.8001 15.96 14.6501C15.96 15.4901 15.28 16.1801 14.43 16.1801H12.14" stroke="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.54004 16.17V10.8301L8.04004 12.5001" stroke="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.02 4.46997L12 2" stroke="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4.90997 7.79999C3.79997 9.27999 3.10999 11.11 3.10999 13.11C3.10999 18.02 7.09 22 12 22C16.91 22 20.89 18.02 20.89 13.11C20.89 8.19999 16.91 4.21997 12 4.21997C11.32 4.21997 10.66 4.31002 10.02 4.46002" stroke="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
                playlist: `<svg fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13 16.493C13 18.427 14.573 20 16.507 20s3.507-1.573 3.507-3.507c0-.177-.027-.347-.053-.517H20V6h2V4h-3a1 1 0 0 0-1 1v8.333a3.465 3.465 0 0 0-1.493-.346A3.51 3.51 0 0 0 13 16.493zM2 5h14v2H2z"></path><path d="M2 9h14v2H2zm0 4h9v2H2zm0 4h9v2H2z"></path></g></svg>`,
                backBtn: `<svg version="1.1" id="Capa_1" width="12px" height="12px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 197.402 197.402" style="enable-background:new 0 0 197.402 197.402;" xml:space="preserve"> <g> <g> <g> <polygon style="fill:${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                };" points="146.883,197.402 45.255,98.698 146.883,0 152.148,5.418 56.109,98.698 152.148,191.98  "/> </g> </g> </g> </svg>`,
                settings: `<svg width="18px" height="18px" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 93.5 93.5" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M93.5,40.899c0-2.453-1.995-4.447-4.448-4.447H81.98c-0.74-2.545-1.756-5.001-3.035-7.331l4.998-5 c0.826-0.827,1.303-1.973,1.303-3.146c0-1.19-0.462-2.306-1.303-3.146L75.67,9.555c-1.613-1.615-4.673-1.618-6.29,0l-5,5 c-2.327-1.28-4.786-2.296-7.332-3.037v-7.07C57.048,1.995,55.053,0,52.602,0H40.899c-2.453,0-4.447,1.995-4.447,4.448v7.071 c-2.546,0.741-5.005,1.757-7.333,3.037l-5-5c-1.68-1.679-4.609-1.679-6.288,0L9.555,17.83c-1.734,1.734-1.734,4.555,0,6.289 l4.999,5c-1.279,2.33-2.295,4.788-3.036,7.333h-7.07C1.995,36.452,0,38.447,0,40.899V52.6c0,2.453,1.995,4.447,4.448,4.447h7.071 c0.74,2.545,1.757,5.003,3.036,7.332l-4.998,4.999c-0.827,0.827-1.303,1.974-1.303,3.146c0,1.189,0.462,2.307,1.302,3.146 l8.274,8.273c1.614,1.615,4.674,1.619,6.29,0l5-5c2.328,1.279,4.786,2.297,7.333,3.037v7.071c0,2.453,1.995,4.448,4.447,4.448 h11.702c2.453,0,4.446-1.995,4.446-4.448V81.98c2.546-0.74,5.005-1.756,7.332-3.037l5,5c1.681,1.68,4.608,1.68,6.288,0 l8.275-8.273c1.734-1.734,1.734-4.555,0-6.289l-4.998-5.001c1.279-2.329,2.295-4.787,3.035-7.332h7.071 c2.453,0,4.448-1.995,4.448-4.446V40.899z M62.947,46.75c0,8.932-7.266,16.197-16.197,16.197c-8.931,0-16.197-7.266-16.197-16.197 c0-8.931,7.266-16.197,16.197-16.197C55.682,30.553,62.947,37.819,62.947,46.75z"></path> </g> </g> </g></svg>`,
                snapIcon: `<svg width="22px" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" height="22px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_camera_28_filled" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" fill-rule="nonzero"> <path d="M16.9510797,2.50304787 C17.7274884,2.50304787 18.4490393,2.9033378 18.8600157,3.56205529 L20.3810589,6 L22.75,6 C24.5449254,6 26,7.45507456 26,9.25 L26,21.75 C26,23.5449254 24.5449254,25 22.75,25 L5.25,25 C3.45507456,25 2,23.5449254 2,21.75 L2,9.25 C2,7.45507456 3.45507456,6 5.25,6 L7.81851226,6 L9.2010861,3.62210494 C9.60389995,2.92930357 10.3448058,2.50304787 11.1462,2.50304787 L16.9510797,2.50304787 Z M14,9.50268415 C10.9624339,9.50268415 8.5,11.965118 8.5,15.0026842 C8.5,18.0402503 10.9624339,20.5026842 14,20.5026842 C17.0375661,20.5026842 19.5,18.0402503 19.5,15.0026842 C19.5,11.965118 17.0375661,9.50268415 14,9.50268415 Z M14,11.0026842 C16.209139,11.0026842 18,12.7935452 18,15.0026842 C18,17.2118232 16.209139,19.0026842 14,19.0026842 C11.790861,19.0026842 10,17.2118232 10,15.0026842 C10,12.7935452 11.790861,11.0026842 14,11.0026842 Z" id="Ã°Å¸Å½Â¨-Color"></path> </g> </g></svg>`,
                capCrossIcon: `<svg version="1.1" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve"> <polygon points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161  11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 " /> </svg>`,
                buffuerLoader: `<svg class="waitSVG" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" x="0px" y="0px" width="100px" height="100px" viewBox="5 5 40 40"><path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(39.9522 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg>`,
                pictureInPicture: `<svg viewBox="0 0 24 24" width="25px" height="25px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C17.7712 3 19.6569 3 20.8284 4.17157C22 5.34315 22 7.22876 22 11" stroke="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" stroke-width="1.5" stroke-linecap="round"></path> <path d="M13 17C13 15.1144 13 14.1716 13.5858 13.5858C14.1716 13 15.1144 13 17 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H17C15.1144 21 14.1716 21 13.5858 20.4142C13 19.8284 13 18.8856 13 17Z" stroke="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" stroke-width="1.5"></path> </g></svg>`,
                shareIcon: `<svg viewBox="0 0 24 24" width="23px" height="23px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }"></path> </g></svg>`,
                shareCloseIcon: `<svg viewBox="0 0 24 24" width="30px" height="30px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" stroke-width="1.5"></path> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>`,
                facebookIcon:
                    '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7208)"></circle> <path d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_7208" x1="16" y1="2" x2="16" y2="29.917" gradientUnits="userSpaceOnUse"> <stop stop-color="#18ACFE"></stop> <stop offset="1" stop-color="#0163E0"></stop> </linearGradient> </defs> </g></svg>',
                twitterIcon:
                    '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="24" cy="24" r="20" fill="#1DA1F2"></circle> <path fill-rule="evenodd" clip-rule="evenodd" d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z" fill="white"></path> </g></svg>',
                redditIcon:
                    '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 2C8.27812 2 2 8.27812 2 16C2 23.7219 8.27812 30 16 30C23.7219 30 30 23.7219 30 16C30 8.27812 23.7219 2 16 2Z" fill="#FC471E"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0193 8.90951C20.0066 8.98984 20 9.07226 20 9.15626C20 10.0043 20.6716 10.6918 21.5 10.6918C22.3284 10.6918 23 10.0043 23 9.15626C23 8.30819 22.3284 7.6207 21.5 7.6207C21.1309 7.6207 20.7929 7.7572 20.5315 7.98359L16.6362 7L15.2283 12.7651C13.3554 12.8913 11.671 13.4719 10.4003 14.3485C10.0395 13.9863 9.54524 13.7629 9 13.7629C7.89543 13.7629 7 14.6796 7 15.8103C7 16.5973 7.43366 17.2805 8.06967 17.6232C8.02372 17.8674 8 18.1166 8 18.3696C8 21.4792 11.5817 24 16 24C20.4183 24 24 21.4792 24 18.3696C24 18.1166 23.9763 17.8674 23.9303 17.6232C24.5663 17.2805 25 16.5973 25 15.8103C25 14.6796 24.1046 13.7629 23 13.7629C22.4548 13.7629 21.9605 13.9863 21.5997 14.3485C20.2153 13.3935 18.3399 12.7897 16.2647 12.7423L17.3638 8.24143L20.0193 8.90951ZM12.5 18.8815C13.3284 18.8815 14 18.194 14 17.3459C14 16.4978 13.3284 15.8103 12.5 15.8103C11.6716 15.8103 11 16.4978 11 17.3459C11 18.194 11.6716 18.8815 12.5 18.8815ZM19.5 18.8815C20.3284 18.8815 21 18.194 21 17.3459C21 16.4978 20.3284 15.8103 19.5 15.8103C18.6716 15.8103 18 16.4978 18 17.3459C18 18.194 18.6716 18.8815 19.5 18.8815ZM12.7773 20.503C12.5476 20.3462 12.2372 20.4097 12.084 20.6449C11.9308 20.8802 11.9929 21.198 12.2226 21.3548C13.3107 22.0973 14.6554 22.4686 16 22.4686C17.3446 22.4686 18.6893 22.0973 19.7773 21.3548C20.0071 21.198 20.0692 20.8802 19.916 20.6449C19.7628 20.4097 19.4524 20.3462 19.2226 20.503C18.3025 21.1309 17.1513 21.4449 16 21.4449C15.3173 21.4449 14.6345 21.3345 14 21.1137C13.5646 20.9621 13.1518 20.7585 12.7773 20.503Z" fill="white"></path> </g></svg>',
                whatsapIcon:
                    '<svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#FFFFFF;} .st1{fill:#3A559F;} .st2{fill:#F4F4F4;} .st3{fill:#FF0084;} .st4{fill:#0063DB;} .st5{fill:#00ACED;} .st6{fill:#FFEC06;} .st7{fill:#FF0000;} .st8{fill:#25D366;} .st9{fill:#0088FF;} .st10{fill:#314358;} .st11{fill:#EE6996;} .st12{fill:#01AEF3;} .st13{fill:#FFFEFF;} .st14{fill:#F06A35;} .st15{fill:#00ADEF;} .st16{fill:#1769FF;} .st17{fill:#1AB7EA;} .st18{fill:#6001D1;} .st19{fill:#E41214;} .st20{fill:#05CE78;} .st21{fill:#7B519C;} .st22{fill:#FF4500;} .st23{fill:#00F076;} .st24{fill:#FFC900;} .st25{fill:#00D6FF;} .st26{fill:#FF3A44;} .st27{fill:#FF6A36;} .st28{fill:#0061FE;} .st29{fill:#F7981C;} .st30{fill:#EE1B22;} .st31{fill:#EF3561;} .st32{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;} .st33{fill:#0097D3;} .st34{fill:#01308A;} .st35{fill:#019CDE;} .st36{fill:#FFD049;} .st37{fill:#16A05D;} .st38{fill:#4486F4;} .st39{fill:none;} .st40{fill:#34A853;} .st41{fill:#4285F4;} .st42{fill:#FBBC05;} .st43{fill:#EA4335;} </style> <path class="st8" d="M17,0C8.7,0,2,6.7,2,15c0,3.4,1.1,6.6,3.2,9.2l-2.1,6.4c-0.1,0.4,0,0.8,0.3,1.1C3.5,31.9,3.8,32,4,32 c0.1,0,0.3,0,0.4-0.1l6.9-3.1C13.1,29.6,15,30,17,30c8.3,0,15-6.7,15-15S25.3,0,17,0z"></path> <path class="st0" d="M25.7,20.5c-0.4,1.2-1.9,2.2-3.2,2.4C22.2,23,21.9,23,21.5,23c-0.8,0-2-0.2-4.1-1.1c-2.4-1-4.8-3.1-6.7-5.8 L10.7,16C10.1,15.1,9,13.4,9,11.6c0-2.2,1.1-3.3,1.5-3.8c0.5-0.5,1.2-0.8,2-0.8c0.2,0,0.3,0,0.5,0c0.7,0,1.2,0.2,1.7,1.2l0.4,0.8 c0.3,0.8,0.7,1.7,0.8,1.8c0.3,0.6,0.3,1.1,0,1.6c-0.1,0.3-0.3,0.5-0.5,0.7c-0.1,0.2-0.2,0.3-0.3,0.3c-0.1,0.1-0.1,0.1-0.2,0.2 c0.3,0.5,0.9,1.4,1.7,2.1c1.2,1.1,2.1,1.4,2.6,1.6l0,0c0.2-0.2,0.4-0.6,0.7-0.9l0.1-0.2c0.5-0.7,1.3-0.9,2.1-0.6 c0.4,0.2,2.6,1.2,2.6,1.2l0.2,0.1c0.3,0.2,0.7,0.3,0.9,0.7C26.2,18.5,25.9,19.8,25.7,20.5z"></path> </g></svg>',
                linkedinIcon:
                    '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" rx="14" fill="#1275B1"></rect> <path d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z" fill="white"></path> <path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="white"></path> <path d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z" fill="white"></path> </g></svg>',
                upArrow: `<svg width="25px" height="25px" viewBox="0 0 48 48" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" xmlns="http://www.w3.org/2000/svg"> <rect width="48" height="48" fill="none" fill-opacity="0.01"/> <path d="M16 40H6C4.89543 40 4 39.1046 4 38V10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16" stroke="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/> <rect x="24" y="24" width="20" height="16" rx="2" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" stroke="none" stroke-width="0" stroke-linejoin="round"/> </svg>`,
                castIcon: `<svg fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" width="25px" height="25px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 6 6 C 4.897 6 4 6.897 4 8 L 4 12 L 6 12 L 6 8 L 26 8 L 26 24 L 18 24 L 18 26 L 26 26 C 27.103 26 28 25.103 28 24 L 28 8 C 28 6.897 27.103 6 26 6 L 6 6 z M 4 14 L 4 16 C 9.169375 16 13.436179 19.942273 13.949219 24.978516 C 13.983421 25.314265 14 25.655375 14 26 L 16 26 C 16 19.383 10.617 14 4 14 z M 4 18 L 4 20 C 7.309 20 10 22.691 10 26 L 12 26 C 12 21.589 8.411 18 4 18 z M 4 22 L 4 26 L 8 26 C 8 23.791 6.209 22 4 22 z"></path></g></svg>`,
                playNext: `<svg viewBox="0 0 24 24" fill="none" width="21px" height="21px" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.60439 4.23093C4.94586 3.73136 4 4.20105 4 5.02762V18.9724C4 19.799 4.94586 20.2686 5.60439 19.7691L14.7952 12.7967C15.3227 12.3965 15.3227 11.6035 14.7952 11.2033L5.60439 4.23093ZM2 5.02762C2 2.54789 4.83758 1.13883 6.81316 2.63755L16.004 9.60993C17.5865 10.8104 17.5865 13.1896 16.004 14.3901L6.81316 21.3625C4.83758 22.8612 2 21.4521 2 18.9724V5.02762Z" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }"></path> <path d="M20 3C20 2.44772 20.4477 2 21 2C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V3Z" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }"></path> </g></svg>`,
                playPrev: `<svg fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" width="25px" height="25px" viewBox="0 0 32 32" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Icon"> <path d="M9.441,13.504c-0.834,0.556 -1.335,1.493 -1.335,2.496c-0,1.003 0.501,1.94 1.335,2.496l13.895,9.263c0.92,0.614 2.104,0.671 3.08,0.149c0.975,-0.522 1.584,-1.539 1.584,-2.645l-0,-18.526c-0,-1.106 -0.609,-2.123 -1.584,-2.645c-0.976,-0.522 -2.16,-0.465 -3.08,0.149l-13.895,9.263Zm1.11,1.664l13.894,-9.263c0.307,-0.205 0.702,-0.224 1.027,-0.05c0.325,0.174 0.528,0.513 0.528,0.882c-0,0 -0,18.526 -0,18.526c-0,0.369 -0.203,0.708 -0.528,0.882c-0.325,0.174 -0.72,0.155 -1.027,-0.05c0,0 -13.894,-9.263 -13.894,-9.263c-0.278,-0.185 -0.445,-0.498 -0.445,-0.832c-0,-0.334 0.167,-0.647 0.445,-0.832Z"></path> <path d="M3.977,4.987l-0.003,22c0,0.552 0.448,1.001 1,1.001c0.552,-0 1,-0.448 1,-1l0.003,-22c0.001,-0.552 -0.447,-1 -0.999,-1c-0.552,-0 -1,0.448 -1.001,0.999Z"></path> </g> </g></svg>`,
                nextFrame: `<svg viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" width="18px" height="18px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M364.8 106.666667L298.666667 172.8 637.866667 512 298.666667 851.2l66.133333 66.133333L768 512z" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }"></path></g></svg>`,
                prevFrame: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" width="25px" height="25px" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polyline fill="none" stroke="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" stroke-width="2" points="9 6 15 12 9 18" transform="matrix(-1 0 0 1 24 0)"></polyline> </g></svg>`,
                flipVideo: `<svg viewBox="0 0 48 48" width="25px" height="25px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" fill-opacity="0.01"></rect> <path d="M20 31L24 35L20 39" stroke="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M32 34.1679C39.0636 32.6248 44 29.1006 44 25C44 19.4772 35.0457 15 24 15C12.9543 15 4 19.4772 4 25C4 30.5228 12.9543 35 24 35" stroke="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
                playerBack: `<svg viewBox="0 0 1024 1024"  width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>`,
                episode: `<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.98966 10.91C10.4482 10.609 11.0657 10.5541 11.6048 10.8884L14.9764 12.9785C15.5136 13.3116 15.75 13.8874 15.75 14.4102C15.75 14.933 15.5136 15.5088 14.9764 15.8418L11.6048 17.932C11.0657 18.2662 10.4482 18.2114 9.98966 17.9103C9.539 17.6144 9.25 17.0934 9.25 16.5003V12.32C9.25 11.727 9.539 11.2059 9.98966 10.91ZM10.8129 12.1639C10.7945 12.176 10.75 12.2203 10.75 12.32V16.5003C10.75 16.6 10.7945 16.6443 10.8129 16.6564L10.8142 16.6572L14.186 14.5669C14.2072 14.5538 14.25 14.5085 14.25 14.4102C14.25 14.3118 14.2072 14.2665 14.186 14.2534L10.8145 12.1633L10.8129 12.1639Z" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.69935 1.25001C8.4795 1.24995 8.31094 1.2499 8.16359 1.26571C6.80943 1.41104 5.77295 2.52304 5.71005 3.87007C4.51917 4.22559 3.67058 5.3275 3.65528 6.5913C3.05445 6.77164 2.53621 7.05606 2.11196 7.51432C1.45997 8.21857 1.25792 9.08649 1.25023 10.1003C1.24283 11.075 1.41651 12.3067 1.63219 13.8363L2.07118 16.9499C2.23979 18.146 2.37676 19.1176 2.58989 19.879C2.81286 20.6756 3.14152 21.331 3.75003 21.8349C4.35372 22.3347 5.06993 22.5502 5.91647 22.6518C6.73501 22.75 7.76474 22.75 9.04682 22.75H14.9531C16.2352 22.75 17.265 22.75 18.0835 22.6518C18.9301 22.5502 19.6463 22.3347 20.25 21.8349C20.8585 21.331 21.1871 20.6756 21.4101 19.879C21.6232 19.1176 21.7602 18.146 21.9288 16.9499L22.3678 13.8363C22.5835 12.3067 22.7572 11.075 22.7498 10.1003C22.7421 9.08649 22.54 8.21857 21.888 7.51432C21.4637 7.05595 20.9453 6.77151 20.3443 6.59118C20.3289 5.3275 19.4805 4.22571 18.2897 3.87013C18.2268 2.52307 17.1903 1.41104 15.8362 1.26571C15.6888 1.2499 15.5203 1.24995 15.3004 1.25001H8.69935ZM18.8105 6.32781C18.6734 5.72018 18.1306 5.25001 17.4617 5.25001H6.53787C5.86896 5.25001 5.32618 5.72019 5.18902 6.32785C6.11481 6.24999 7.24973 6.25 8.61594 6.25001H15.384C16.75 6.25 17.8848 6.24999 18.8105 6.32781ZM16.7677 3.75001C16.6611 3.22633 16.2263 2.8162 15.6761 2.75715C15.6198 2.75111 15.5396 2.75001 15.2588 2.75001H8.74099C8.46013 2.75001 8.37993 2.75111 8.32365 2.75715C7.77344 2.8162 7.33862 3.22633 7.2321 3.75001H16.7677ZM3.21267 8.53336C3.51557 8.20618 3.97106 7.98917 4.85612 7.87145C5.75726 7.75159 6.96357 7.75001 8.67239 7.75001H15.3276C17.0364 7.75001 18.2427 7.75159 19.1439 7.87145C20.0289 7.98917 20.4844 8.20618 20.7873 8.53336C21.0832 8.85293 21.2436 9.28782 21.2498 10.1117C21.2563 10.9618 21.1002 12.0828 20.8738 13.6883L20.4509 16.6883C20.2731 17.9491 20.1486 18.821 19.9656 19.4747C19.7894 20.1042 19.582 20.4405 19.2934 20.6795C18.9999 20.9225 18.6058 21.0784 17.9048 21.1625C17.1861 21.2488 16.2465 21.25 14.9046 21.25H9.09536C7.75347 21.25 6.81393 21.2488 6.09519 21.1625C5.39417 21.0784 5.00014 20.9225 4.70664 20.6795C4.41795 20.4405 4.21058 20.1042 4.03437 19.4747C3.8514 18.821 3.7269 17.9491 3.54913 16.6883L3.12616 13.6883C2.89981 12.0828 2.74373 10.9618 2.75018 10.1117C2.75644 9.28782 2.91681 8.85293 3.21267 8.53336Z" fill="${
                    premium.iconColor !== undefined ? premium.iconColor : '#fff'
                }"></path> </g></svg>`,
                loaders: [
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><circle cx="12" cy="3" r="1" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate id="svgSpinners12DotsScaleRotate0" attributeName="r" begin="0;svgSpinners12DotsScaleRotate2.end-0.5s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="16.5" cy="4.21" r="1" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate id="svgSpinners12DotsScaleRotate1" attributeName="r" begin="svgSpinners12DotsScaleRotate0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="7.5" cy="4.21" r="1" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate id="svgSpinners12DotsScaleRotate2" attributeName="r" begin="svgSpinners12DotsScaleRotate4.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="19.79" cy="7.5" r="1" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate id="svgSpinners12DotsScaleRotate3" attributeName="r" begin="svgSpinners12DotsScaleRotate1.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="4.21" cy="7.5" r="1" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate id="svgSpinners12DotsScaleRotate4" attributeName="r" begin="svgSpinners12DotsScaleRotate6.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="21" cy="12" r="1" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate id="svgSpinners12DotsScaleRotate5" attributeName="r" begin="svgSpinners12DotsScaleRotate3.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="3" cy="12" r="1" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate id="svgSpinners12DotsScaleRotate6" attributeName="r" begin="svgSpinners12DotsScaleRotate8.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="19.79" cy="16.5" r="1" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate id="svgSpinners12DotsScaleRotate7" attributeName="r" begin="svgSpinners12DotsScaleRotate5.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="4.21" cy="16.5" r="1" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate id="svgSpinners12DotsScaleRotate8" attributeName="r" begin="svgSpinners12DotsScaleRotatea.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="16.5" cy="19.79" r="1" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate id="svgSpinners12DotsScaleRotate9" attributeName="r" begin="svgSpinners12DotsScaleRotate7.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="7.5" cy="19.79" r="1" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate id="svgSpinners12DotsScaleRotatea" attributeName="r" begin="svgSpinners12DotsScaleRotateb.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="12" cy="21" r="1" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate id="svgSpinners12DotsScaleRotateb" attributeName="r" begin="svgSpinners12DotsScaleRotate9.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><animateTransform attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="360 12 12;0 12 12"/></g></svg>`,
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>`,
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="4" cy="12" r="0" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate fill="freeze" attributeName="r" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/><animate id="svgSpinners3DotsMove0" fill="freeze" attributeName="r" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove1" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove0.end" dur="0.001s" values="20;4"/></circle><circle cx="4" cy="12" r="3" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate fill="freeze" attributeName="cx" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/><animate id="svgSpinners3DotsMove2" fill="freeze" attributeName="r" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove3" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove2.end" dur="0.001s" values="20;4"/><animate fill="freeze" attributeName="r" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/></circle><circle cx="12" cy="12" r="3" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate fill="freeze" attributeName="cx" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/><animate id="svgSpinners3DotsMove4" fill="freeze" attributeName="r" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove5" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove4.end" dur="0.001s" values="20;4"/><animate fill="freeze" attributeName="r" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/></circle><circle cx="20" cy="12" r="3" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate id="svgSpinners3DotsMove6" fill="freeze" attributeName="r" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove7" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove6.end" dur="0.001s" values="20;4"/><animate fill="freeze" attributeName="r" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/></circle></svg>`,
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="2.8" height="12" x="1" y="6" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"/></rect><rect width="2.8" height="12" x="5.8" y="6" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"/></rect><rect width="2.8" height="12" x="10.6" y="6" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate id="svgSpinnersBarsScaleMiddle0" attributeName="y" begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"/><animate attributeName="height" begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"/></rect><rect width="2.8" height="12" x="15.4" y="6" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"/></rect><rect width="2.8" height="12" x="20.2" y="6" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate id="svgSpinnersBarsScaleMiddle1" attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"/></rect></svg>`,
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="10" height="10" x="1" y="1" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }" rx="1"><animate id="svgSpinnersBlocksShuffle30" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle3b.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle31" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle38.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle32" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle39.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle33" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle3a.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" x="1" y="13" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }" rx="1"><animate id="svgSpinnersBlocksShuffle34" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle30.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle35" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle31.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle36" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle32.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle37" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle33.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" x="13" y="13" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }" rx="1"><animate id="svgSpinnersBlocksShuffle38" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle34.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle39" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle35.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle3a" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle36.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle3b" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle37.end" dur="0.2s" values="1;13"/></rect></svg>`,
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }" d="M20.27,4.74a4.93,4.93,0,0,1,1.52,4.61,5.32,5.32,0,0,1-4.1,4.51,5.12,5.12,0,0,1-5.2-1.5,5.53,5.53,0,0,0,6.13-1.48A5.66,5.66,0,0,0,20.27,4.74ZM12.32,11.53a5.49,5.49,0,0,0-1.47-6.2A5.57,5.57,0,0,0,4.71,3.72,5.17,5.17,0,0,1,9.53,2.2,5.52,5.52,0,0,1,13.9,6.45,5.28,5.28,0,0,1,12.32,11.53ZM19.2,20.29a4.92,4.92,0,0,1-4.72,1.49,5.32,5.32,0,0,1-4.34-4.05A5.2,5.2,0,0,1,11.6,12.5a5.6,5.6,0,0,0,1.51,6.13A5.63,5.63,0,0,0,19.2,20.29ZM3.79,19.38A5.18,5.18,0,0,1,2.32,14a5.3,5.3,0,0,1,4.59-4,5,5,0,0,1,4.58,1.61,5.55,5.55,0,0,0-6.32,1.69A5.46,5.46,0,0,0,3.79,19.38ZM12.23,12a5.11,5.11,0,0,0,3.66-5,5.75,5.75,0,0,0-3.18-6,5,5,0,0,1,4.42,2.3,5.21,5.21,0,0,1,.24,5.92A5.4,5.4,0,0,1,12.23,12ZM11.76,12a5.18,5.18,0,0,0-3.68,5.09,5.58,5.58,0,0,0,3.19,5.79c-1,.35-2.9-.46-4-1.68A5.51,5.51,0,0,1,11.76,12ZM23,12.63a5.07,5.07,0,0,1-2.35,4.52,5.23,5.23,0,0,1-5.91.2,5.24,5.24,0,0,1-2.67-4.77,5.51,5.51,0,0,0,5.45,3.33A5.52,5.52,0,0,0,23,12.63ZM1,11.23a5,5,0,0,1,2.49-4.5,5.23,5.23,0,0,1,5.81-.06,5.3,5.3,0,0,1,2.61,4.74A5.56,5.56,0,0,0,6.56,8.06,5.71,5.71,0,0,0,1,11.23Z"><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>`,
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="0" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate id="svgSpinnersPulse30" fill="freeze" attributeName="r" begin="0;svgSpinnersPulse32.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/><animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersPulse32.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/></circle><circle cx="12" cy="12" r="0" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate id="svgSpinnersPulse31" fill="freeze" attributeName="r" begin="svgSpinnersPulse30.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/><animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulse30.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/></circle><circle cx="12" cy="12" r="0" fill="${
                        premium.loader !== undefined
                            ? premium.loader[1]
                            : '#fff'
                    }"><animate id="svgSpinnersPulse32" fill="freeze" attributeName="r" begin="svgSpinnersPulse30.begin+0.8s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/><animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulse30.begin+0.8s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/></circle></svg>`,
                ],
            },
            fn: {
                create: function create(element) {
                    return document.createElement(element);
                },
                class: function getClass(element) {
                    return document.querySelector(`.${element}`);
                },
                classAll: function getClassAll(element) {
                    return document.querySelectorAll(`.${element}`);
                },
                id: function getID(element) {
                    return document.getElementById(element);
                },
                addClass: function addClass(element, className) {
                    element.classList.add(className);
                },
                removeClass: function removeClass(element, className) {
                    element.classList.remove(className);
                },
                html: function addHtml(element, html) {
                    element.innerHTML = html;
                },
                toggleClass: function toggleClass(element, className) {
                    if (element.classList.contain(className) === true) {
                        def.fn.removeClass(element, className);
                    } else {
                        def.fn.addClass(element, className);
                    }
                },
                append: function append(parent, child) {
                    parent.appendChild(child);
                },
                remove: function remove(parent, child) {
                    parent.removeChild(child);
                },
                fontColor: function setColor(element, fill = false) {
                    let colors;
                    if (
                        premium.fontColor === '' ||
                        premium.fontColor === undefined
                    ) {
                        colors = '#fff';
                    } else {
                        colors = premium.fontColor;
                    }
                    fill === false
                        ? (element.style.color = colors)
                        : (element.style.fill = colors);
                },
                hoverColor: function hover(
                    element,
                    fill = false,
                    mute = false,
                ) {
                    let hColors;
                    if (
                        premium.hoverColor === '' ||
                        premium.hoverColor === undefined
                    ) {
                        hColors = 'red';
                    } else {
                        hColors = premium.hoverColor;
                    }
                    element.addEventListener('mouseover', () => {
                        fill === false
                            ? (element.style.color = hColors)
                            : (element.style.fill = hColors);
                    });
                    element.addEventListener('mouseleave', () => {
                        fill === false
                            ? def.fn.fontColor(element, false)
                            : def.fn.fontColor(element, true);
                        def.fn.activeColor();
                    });
                    element.addEventListener('mouseenter', () => {
                        fill === false
                            ? (element.style.color = hColors)
                            : (element.style.fill = hColors);
                    });
                },
                activeColor: function activeColor() {
                    if (isMute === true) {
                        muteSvg.style.fill = premium.hoverColor;
                    } else {
                        def.fn.fontColor(muteSvg, true);
                    }
                    if (isLoud === true) {
                        loudSvg.style.fill = premium.hoverColor;
                    } else {
                        def.fn.fontColor(loudSvg, true);
                    }
                },
                css: function css(element, css = {}) {
                    let Scss = '';
                    Object.entries(css).forEach((entry) => {
                        const [key, value] = entry;
                        Scss += `${this.styleFormate(key)}:${value};`;
                    });
                    element.style.cssText = Scss;
                },
                setCss: function setCss(css) {
                    document.head.insertAdjacentHTML(
                        'beforeend',
                        `<style>${css}</style>`,
                    );
                },
                getCss: function getCss(objectName, keyName) {
                    return typeof objectName === 'object'
                        ? objectName
                        : def.css[keyName];
                },
                attribute: function attr(element, attr = {}) {
                    Object.entries(attr).forEach((entry) => {
                        const [key, value] = entry;
                        element.setAttribute(key, value);
                    });
                },
                remove_attribute: function attrRemove(element, attr = {}) {
                    Object.entries(attr).forEach((entry) => {
                        const [key, value] = entry;
                        element.removeAttribute(key);
                    });
                },
                event: function listener(element, event = {}) {
                    Object.entries(event).forEach((entry) => {
                        const [key, value] = entry;
                        element.addEventListener(
                            key,
                            () => {
                                value;
                            },
                            false,
                        );
                    });
                },
                getAjax: function getAjax(url, callback) {
                    fetch(url, {
                        method: 'get',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then((response) => response.json())
                        .then((response) => {
                            callback(response);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                },
                postAjax: function postAjax(url, data, callback) {
                    fetch(url, {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    })
                        .then((response) => response.json())
                        .then((response) => {
                            callback(response);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                },
                getLang: function getLanguage(key) {
                    for (const language in def.languages) {
                        if (newLanguage === language) {
                            return def.i18[language][key];
                        }
                    }
                },
                setPopover: function myPopover(item) {
                    console.log(item);
                    const popover = def.fn.create('absdiv');
                    def.fn.css(popover, def.css.toolTipInit);
                    popover.setAttribute(
                        'data-lang-key',
                        def.fn.getObjectKey(item),
                    );
                    popover.textContent = def.fn.getLang(
                        def.fn.getObjectKey(item),
                    );
                    premium.tooltip !== false
                        ? def.fn?.getObject(item).appendChild(popover)
                        : true;
                },
                togglePopover: function togglePopover(item, key) {
                    const popover = def.fn.create('absdiv');
                    def.fn.css(popover, def.css.toolTipInit);
                    popover.textContent = def.fn.getLang(key);
                    popover.setAttribute(
                        'data-lang-key',
                        def.fn.getObjectKey(item),
                    );
                    item?.children[1]
                        ? item.removeChild(item.children[1])
                        : true;
                    premium.tooltip !== false
                        ? item.appendChild(popover)
                        : true;
                },
                openToolTip: function toolTip(item, mode) {
                    if (
                        item.children[1] !== undefined &&
                        item.children[1] !== null
                    ) {
                        if (mode) {
                            def.fn.css(item.children[1], def.css.toolTip);
                        } else {
                            def.fn.css(item.children[1], def.css.toolTipInit);
                        }
                    }
                },
                getObjectKey: function getObjectKey(key) {
                    switch (key) {
                        case 'playPauseControl':
                            return 'play';
                        case 'backwardControl':
                            return 'backward';
                        case 'forwardControl':
                            return 'forward';
                        case 'castControl':
                            return 'chromecast';
                        case 'settingsControl':
                            return 'settings';
                        case 'screenControl':
                            return 'fullscreen';
                        case 'shareControl':
                            return 'share';
                        case 'volumeControl':
                            return 'mute';
                        case 'playlistControl':
                            return 'playlist';
                        case 'playNext':
                            return 'playnext';
                        case 'playPrev':
                            return 'playprevious';
                        case 'nextFrame':
                            return 'nextframe';
                        case 'prevFrame':
                            return 'prevframe';
                        case 'flipVideo':
                            return 'flipvideo';
                        case 'episode':
                            return 'episode';
                        default:
                            return false;
                    }
                },
                getObject: function controlElement(item) {
                    switch (item) {
                        case 'playPauseControl':
                            return playPauseControl;
                        case 'backwardControl':
                            return backwardControl;
                        case 'forwardControl':
                            return forwardControl;
                        case 'volumeContainer':
                            return volumeContainer;
                        case 'castControl':
                            return castControl;
                        case 'speedPlacement':
                            return speedPlacement;
                        case 'settingsControl':
                            return settingsControl;
                        case 'screenControl':
                            return screenControl;
                        case 'shareControl':
                            return shareControl;
                        case 'volumeControl':
                            return volumeControl;
                        case 'playlistControl':
                            return playlistControl;
                        case 'playNext':
                            return playNext;
                        case 'playPrev':
                            return playPrev;
                        case 'nextFrame':
                            return nextFrame;
                        case 'prevFrame':
                            return prevFrame;
                        case 'flipVideo':
                            return flipVideo;
                        case 'durationArea':
                            return durationArea;
                        case 'episode':
                            return episode;
                    }
                },
                domain: function setDomain() {
                    let dom = window.location.host;
                    if (dom.indexOf(':') != '-1') {
                        let Dm = dom.split(':');
                        return Dm[0];
                    } else {
                        return dom;
                    }
                },
                styleFormate: function camelToKebabCase(str) {
                    return str
                        .replace(/([a-z])([A-Z])/g, '$1-$2')
                        .toLowerCase();
                },
                getAnalytics: () => {
                    if (
                        premium.videoAnalytics &&
                        typeof premium.videoAnalytics === 'object'
                    ) {
                        const response = fetch(premium.videoAnalytics.getURL, {
                            method: 'get',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: premium.videoAnalytics.authToken,
                            },
                        }).then((response) =>
                            response.json().then((data) => {
                                if (data.code === 'success') {
                                    setPlayerAnalytics(data.analytics);
                                    analyticsInterval(
                                        premium.videoAnalytics.interval ?? 10,
                                    );
                                }
                            }),
                        );
                    }
                },
                postAnalytics: (data) => {
                    if (premium.videoAnalytics) {
                        data.duration = data.progress - xProgress;
                        fetch(premium.videoAnalytics.postURL, {
                            method: 'post',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: premium.videoAnalytics.authToken,
                            },
                            body: JSON.stringify(data),
                        })
                            .then((response) => response.json())
                            .then((response) => {
                                setPlayerProgress(response);
                            });
                    }
                },
            },
            css: {
                logoArea: {
                    position: 'absolute',
                    width: '70px',
                    height: '65px',
                    top: '30px',
                    right: '30px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    zIndex: 2,
                },
                logo: {
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    overflow: 'hidden',
                },
                liveText: {
                    position: 'absolute',
                    width: '55px',
                    height: 'auto',
                    display: 'none',
                    alignItems: 'center',
                    gap: '5px',
                    bottom: '40px',
                    left: '20px',
                    padding: '2px 8px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    background: 'rgba(0,0,0,0.8)',
                    color: '#fff',
                    zIndex: 5,
                },
                pipControl: {
                    position: 'absolute',
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    color: '#fff',
                    padding: '5px',
                    top: '45%',
                    right: '20px',
                    width: '30px',
                    height: '30px',
                    cursor: 'pointer',
                    display: 'flex',
                    zIndex: 5,
                    fontSize: '20px',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                progress: {
                    width: '98%',
                    height: '5px',
                    position: 'absolute',
                    bottom: '50px',
                    background: '#f9f9f9',
                    left: '1%',
                    right: '1%',
                    zIndex: 5,
                    borderRadius: '4px',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    transition: 'all 0.3s',
                },
                progressBuffer: {
                    width: '100%',
                    height: '100%',
                    background: 'darkgray',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    cursor: 'pointer',
                    zIndex: -2,
                },
                progressTimeline: {
                    position: 'absolute',
                    width: 0,
                    height: '100%',
                    top: 0,
                    left: 0,
                    background: 'red',
                    cursor: 'pointer',
                },
                progressTooltip: {
                    width: 'auto',
                    height: '18px',
                    background: '#fff',
                    position: 'absolute',
                    bottom: '62px',
                    left: 0,
                    cursor: 'pointer',
                    zIndex: 4,
                    color: '#000',
                    borderRadius: '3px',
                    padding: '5px 8px',
                    display: 'none',
                    fontSize: '12px',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                toolTipInit: {
                    position: 'absolute',
                    height: '25px',
                    background: '#fff',
                    color: '#000',
                    fontSize: '13px',
                    borderRadius: '5px',
                    padding: ' 5px 10px',
                    bottom: '150px',
                    display: 'none',
                    transition: 'all 0.1s',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                toolTip: {
                    position: 'absolute',
                    minHeight: '25px',
                    background: '#fff',
                    color: '#000',
                    fontSize: '13px',
                    borderRadius: '5px',
                    padding: ' 5px 10px',
                    bottom: '60px',
                    display: 'flex',
                    zIndex: 6,
                    alignItems: 'center',
                    transition: 'all 0.5s',
                    justifyContent: 'center',
                },
                durationArea: {
                    display: 'flex',
                    width: '98%',
                    position: 'absolute',
                    left: '1%',
                    right: '1%',
                    bottom: '60px',
                    zIndex: 2,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                },
                dividerCss: {
                    color: '#fff',
                    fontWeight: 'bold',
                    margin: '0px 4px',
                    marginBottom: '0px',
                    paddingBottom: '0px',
                },
                playPauseControl: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: '#fff',
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                volumeContainer: {
                    width: '110px',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'absolute',
                    justifyContent: 'center',
                    bottom: '98px',
                    right: '15px',
                    padding: '8px 10px',
                    zIndex: 5,
                    background: 'rgba(0,0,0,0.5)',
                    borderRadius: '5px',
                },
                volumeControl: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: '#fff',
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                volumeSliderArea: {
                    width: '100%',
                    height: '15px',
                    background: 'gray',
                    cursor: 'pointer',
                    transition: '0.5s',
                    position: 'relative',
                },
                volumeSlider: {
                    width: '0px',
                    height: '100%',
                    background: 'red',
                    height: '15px',
                    cursor: 'pointer',
                    transition: '0.5s',
                    position: 'absolute',
                    left: 0,
                },
                castControl: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: '#fff',
                    padding: '3px',
                    display: 'none',
                    width: '30px',
                    height: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px',
                    textAlign: 'center',
                },
                speedPlacement: {
                    background: '#fff',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    fontSize: '14px',
                    color: '#000',
                    padding: '0px 8px',
                    height: '24px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                },
                speedArea: {
                    background: 'rgba(0,0,0,0.71)',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: '#fff',
                    width: '85px',
                    position: 'absolute',
                    bottom: '60px',
                    left: '70px',
                    display: 'flex',
                    transition: 'all 0.5s',
                    maxHeight: '100%',
                    minHeight: '100px',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    zIndex: 6,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    borderRadius: '5px',
                    flexDirection: 'column',
                },
                backwardControl: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: '#fff',
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                forwardControl: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: '#fff',
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                shareControl: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: '#fff',
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                settingsControl: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: '#fff',
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                settingsOptions: {
                    width: '160px',
                    color: '#fff',
                    position: 'absolute',
                    bottom: '60px',
                    right: '12px',
                    padding: '2px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    transition: '0.5s',
                    zIndex: 5,
                },
                settingsOptionBefore: {
                    width: '100%',
                    height: 'auto',
                    background: 'rgba(0,0,0,0.3)',
                    color: '#fff',
                    position: 'absolute',
                    padding: '2px',
                    bottom: 0,
                    left: 0,
                    borderRadius: '4px',
                    display: 'none',
                    alignItems: 'center',
                    flexDirection: 'column',
                    transition: '0.5s',
                },
                itemQuality: {
                    width: '100%',
                    height: '27px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '12px',
                },
                itemPlayback: {
                    width: '100%',
                    height: '27px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '12px',
                },
                itemSubtitle: {
                    width: '100%',
                    height: '27px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '12px',
                },
                itemAudio: {
                    width: '100%',
                    height: '27px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '12px',
                },
                itemLoop: {
                    width: '100%',
                    height: '27px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '12px',
                },
                settingsBack: {
                    width: '100%',
                    height: '27px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '12px',
                },
                settingsOptionAfter: {
                    width: '100%',
                    height: 'auto',
                    background: 'rgba(0,0,0,0.8)',
                    color: '#fff',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    borderRadius: '4px',
                    display: 'none',
                    alignItems: 'center',
                    flexDirection: 'column',
                    transition: '0.5s',
                },
                playlistContainerBox: {
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: '#fff',
                    width: '170px',
                    height: 'calc(100% - 60px)',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    display: 'flex',
                    transition: 'all 0.5s each',
                    overflow: 'hidden',
                    maxHeight: 'calc(100% - 60px)',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                },
                playlistContainer: {
                    background: 'rgba(0,0,0,0.41)',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: '#fff',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    display: 'flex',
                    transition: 'all 0.5s',
                    marginRight: '-280px',
                    maxHeight: '100%',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    zIndex: 5,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                },
                episodeContainer: {
                    background: 'rgba(0,0,0,0.41)',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: '#fff',
                    width: '80%',
                    height: '80%',
                    position: 'absolute',
                    margin: '0 auto',
                    display: 'none',
                    transition: 'all 0.5s',
                    maxHeight: '100%',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    zIndex: 5,
                    left: 0,
                    right: 0,
                    top: '10%',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                },
                playlistControl: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    display: 'none',
                    fontSize: '20px',
                    color: '#fff',
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                playNext: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    display: 'flex',
                    fontSize: '20px',
                    color: '#fff',
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                playPrev: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    display: 'flex',
                    fontSize: '20px',
                    color: '#fff',
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                nextFrame: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    display: 'flex',
                    fontSize: '20px',
                    color: '#fff',
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                prevFrame: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    display: 'flex',
                    fontSize: '20px',
                    color: '#fff',
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                flipVideo: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    display: 'flex',
                    fontSize: '20px',
                    color: '#fff',
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                episode: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    display: 'flex',
                    fontSize: '20px',
                    color: '#fff',
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                screenControl: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: '#fff',
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                shareClose: {
                    width: '40px',
                    height: '40px',
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(0,0,0,0.4)',
                    display: 'flex',
                    border: 'none',
                    cursor: 'pointer',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 5,
                    borderRadius: '10px',
                    textAlign: 'center',
                },
            },
            i18: {
                EN: {
                    play: 'Play',
                    pause: 'Pause',
                    mute: 'Mute',
                    unMute: 'Unmute',
                    chromecast: 'Chromecast',
                    share: 'Share',
                    fullscreen: 'Enter Fullscreen',
                    exitFullscreen: 'Exit fullscreen',
                    playlist: 'Playlist',
                    forward: 'Forward',
                    backward: 'Backward',
                    next: 'Next',
                    previous: 'Previous',
                    quality: 'Quality',
                    playback: 'Playback',
                    subtitle: 'Subtitle',
                    loop: 'loop',
                    audio: 'Audio',
                    back: 'Back',
                    close: 'Close',
                    copyUrl: 'Copy URL',
                    morePlugin: 'More Plugins',
                    playerInfo: 'Player Information',
                    version: 'Version',
                    settings: 'Settings',
                    yes: 'Yes',
                    no: 'No',
                    playnext: 'Next',
                    playprevious: 'Previous',
                    nextframe: 'Next Frame',
                    prevframe: 'Previous Frame',
                    flipvideo: 'Flip Video',
                },
                BN: {
                    play: 'চালান',
                    pause: 'বিরতি',
                    mute: 'নিঃশব্দ',
                    unMute: 'শব্দ চালু',
                    chromecast: 'ক্রোমকাস্ট',
                    share: 'শেয়ার',
                    fullscreen: 'সম্পূর্ণ পর্দা চালু',
                    exitFullscreen: 'সম্পূর্ণ পর্দা বন্ধ',
                    playlist: 'প্লেলিস্ট',
                    forward: 'আগে যান',
                    backward: 'পেছনে যান',
                    next: 'পরবর্তী',
                    previous: 'পূর্ববর্তী',
                    quality: 'গুণমান',
                    playback: 'প্লেব্যাক',
                    subtitle: 'সাবটাইটেল',
                    loop: 'লুপ',
                    audio: 'অডিও',
                    back: 'ফিরুন',
                    close: 'বন্ধ করুন',
                    copyUrl: 'URL অনুলিপি করুন',
                    morePlugin: 'আরও প্লাগইন',
                    playerInfo: 'প্লেয়ার তথ্য',
                    version: 'সংস্করণ',
                    settings: 'সেটিংস',
                    yes: 'হ্যাঁ',
                    no: 'না',
                    playnext: 'পরবর্তী',
                    playprevious: 'পূর্ববর্তী',
                    nextframe: 'পরবর্তী ফ্রেম',
                    prevframe: 'পূর্ববর্তী ফ্রেম',
                    flipvideo: 'ভিডিও উল্টান',
                },
                HN: {
                    play: 'चलाएं',
                    pause: 'रोकें',
                    mute: 'मूक करें',
                    unMute: 'आवाज़ चालू करें',
                    chromecast: 'क्रोमकास्ट',
                    share: 'साझा करें',
                    fullscreen: 'पूर्ण स्क्रीन',
                    exitFullscreen: 'पूर्ण स्क्रीन बंद करें',
                    playlist: 'प्लेलिस्ट',
                    forward: 'आगे बढ़ाएं',
                    backward: 'पीछे जाएं',
                    next: 'अगला',
                    previous: 'पिछला',
                    quality: 'गुणवत्ता',
                    playback: 'प्लेबैक',
                    subtitle: 'उपशीर्षक',
                    loop: 'लूप',
                    audio: 'ऑडियो',
                    back: 'वापस जाएं',
                    close: 'बंद करें',
                    copyUrl: 'यूआरएल कॉपी करें',
                    morePlugin: 'अधिक प्लगइन्स',
                    playerInfo: 'प्लेयर जानकारी',
                    version: 'संस्करण',
                    settings: 'सेटिंग्स',
                    yes: 'हाँ',
                    no: 'नहीं',
                    playnext: 'अगला',
                    playprevious: 'पिछला',
                    nextframe: 'अगला फ़्रेम',
                    prevframe: 'पिछला फ़्रेम',
                    flipvideo: 'वीडियो पलटें',
                },
                HE: {
                    play: 'נגן',
                    pause: 'השהה',
                    mute: 'השתק',
                    unMute: 'בטל השתקה',
                    chromecast: 'כרומקאסט',
                    share: 'שתף',
                    fullscreen: 'מסך מלא',
                    exitFullscreen: 'צא ממסך מלא',
                    playlist: 'רשימת השמעה',
                    forward: 'קדימה',
                    backward: 'אחורה',
                    next: 'הבא',
                    previous: 'קודם',
                    quality: 'איכות',
                    playback: 'ניגון',
                    subtitle: 'כתוביות',
                    loop: 'לולאה',
                    audio: 'אודיו',
                    back: 'חזרה',
                    close: 'סגור',
                    copyUrl: 'העתק כתובת URL',
                    morePlugin: 'עוד תוספים',
                    playerInfo: 'מידע על הנגן',
                    version: 'גרסה',
                    settings: 'הגדרות',
                    yes: 'כן',
                    no: 'לא',
                    playnext: 'הבא',
                    playprevious: 'הקודם',
                    nextframe: 'פריים הבא',
                    prevframe: 'פריים קודם',
                    flipvideo: 'הפוך וידאו',
                },
                RU: {
                    play: 'Играть',
                    pause: 'Пауза',
                    mute: 'Отключить звук',
                    unMute: 'Включить звук',
                    chromecast: 'Chromecast',
                    share: 'Поделиться',
                    fullscreen: 'Полноэкранный режим',
                    exitFullscreen: 'Выйти из полноэкранного режима',
                    playlist: 'Плейлист',
                    forward: 'Вперед',
                    backward: 'Назад',
                    next: 'Следующий',
                    previous: 'Предыдущий',
                    quality: 'Качество',
                    playback: 'Воспроизведение',
                    subtitle: 'Субтитры',
                    loop: 'Зациклить',
                    audio: 'Аудио',
                    back: 'Назад',
                    close: 'Закрыть',
                    copyUrl: 'Копировать URL',
                    morePlugin: 'Больше плагинов',
                    playerInfo: 'Информация о плеере',
                    version: 'Версия',
                    settings: 'Настройки',
                    yes: 'Да',
                    no: 'Нет',
                    playnext: 'Следующий',
                    playprevious: 'Предыдущий',
                    nextframe: 'Следующий кадр',
                    prevframe: 'Предыдущий кадр',
                    flipvideo: 'Перевернуть видео',
                },
                SV: {
                    play: 'Spela',
                    pause: 'Pausa',
                    mute: 'Stäng av ljudet',
                    unMute: 'Slå på ljudet',
                    chromecast: 'Chromecast',
                    share: 'Dela',
                    fullscreen: 'Gå till fullskärm',
                    exitFullscreen: 'Avsluta fullskärm',
                    playlist: 'Spellista',
                    forward: 'Framåt',
                    backward: 'Bakåt',
                    next: 'Nästa',
                    previous: 'Föregående',
                    quality: 'Kvalitet',
                    playback: 'Uppspelning',
                    subtitle: 'Undertexter',
                    loop: 'Loop',
                    audio: 'Ljud',
                    back: 'Tillbaka',
                    close: 'Stäng',
                    copyUrl: 'Kopiera URL',
                    morePlugin: 'Fler plugins',
                    playerInfo: 'Spelarinformation',
                    version: 'Version',
                    settings: 'Inställningar',
                    yes: 'Ja',
                    no: 'Nej',
                    playnext: 'Nästa',
                    playprevious: 'Föregående',
                    nextframe: 'Nästa bildruta',
                    prevframe: 'Föregående bildruta',
                    flipvideo: 'Vänd video',
                },
                IT: {
                    play: 'Riproduci',
                    pause: 'Pausa',
                    mute: 'Disattiva audio',
                    unMute: 'Attiva audio',
                    chromecast: 'Chromecast',
                    share: 'Condividi',
                    fullscreen: 'Schermo intero',
                    exitFullscreen: 'Esci da schermo intero',
                    playlist: 'Playlist',
                    forward: 'Avanti',
                    backward: 'Indietro',
                    next: 'Successivo',
                    previous: 'Precedente',
                    quality: 'Qualità',
                    playback: 'Riproduzione',
                    subtitle: 'Sottotitoli',
                    loop: 'Ripeti',
                    audio: 'Audio',
                    back: 'Indietro',
                    close: 'Chiudi',
                    copyUrl: 'Copia URL',
                    morePlugin: 'Più plugin',
                    playerInfo: 'Informazioni giocatore',
                    version: 'Versione',
                    settings: 'Impostazioni',
                    yes: 'Sì',
                    no: 'No',
                    playnext: 'Successivo',
                    playprevious: 'Precedente',
                    nextframe: 'Fotogramma successivo',
                    prevframe: 'Fotogramma precedente',
                    flipvideo: 'Capovolgi video',
                },
                CN: {
                    play: '播放',
                    pause: '暂停',
                    mute: '静音',
                    unMute: '取消静音',
                    chromecast: 'Chromecast',
                    share: '分享',
                    fullscreen: '全屏',
                    exitFullscreen: '退出全屏',
                    playlist: '播放列表',
                    forward: '快进',
                    backward: '后退',
                    next: '下一个',
                    previous: '上一个',
                    quality: '质量',
                    playback: '播放',
                    subtitle: '字幕',
                    loop: '循环',
                    audio: '音频',
                    back: '返回',
                    close: '关闭',
                    copyUrl: '复制链接',
                    morePlugin: '更多插件',
                    playerInfo: '播放器信息',
                    version: '版本',
                    settings: '设置',
                    yes: '是',
                    no: '否',
                    playnext: '下一个',
                    playprevious: '上一个',
                    nextframe: '下一帧',
                    prevframe: '上一帧',
                    flipvideo: '翻转视频',
                },
                JP: {
                    play: '再生',
                    pause: '一時停止',
                    mute: 'ミュート',
                    unMute: 'ミュート解除',
                    chromecast: 'クロームキャスト',
                    share: '共有',
                    fullscreen: '全画面表示',
                    exitFullscreen: '全画面終了',
                    playlist: 'プレイリスト',
                    forward: '早送り',
                    backward: '巻き戻し',
                    next: '次へ',
                    previous: '前へ',
                    quality: '画質',
                    playback: '再生',
                    subtitle: '字幕',
                    loop: 'ループ',
                    audio: 'オーディオ',
                    back: '戻る',
                    close: '閉じる',
                    copyUrl: 'URLをコピー',
                    morePlugin: 'その他のプラグイン',
                    playerInfo: 'プレイヤー情報',
                    version: 'バージョン',
                    settings: '設定',
                    yes: 'はい',
                    no: 'いいえ',
                    playnext: '次へ',
                    playprevious: '前へ',
                    nextframe: '次のフレーム',
                    prevframe: '前のフレーム',
                    flipvideo: 'ビデオを反転',
                },
                ID: {
                    play: 'Putar',
                    pause: 'Jeda',
                    mute: 'Bisukan',
                    unMute: 'Bunyikan',
                    chromecast: 'Chromecast',
                    share: 'Bagikan',
                    fullscreen: 'Layar Penuh',
                    exitFullscreen: 'Keluar Layar Penuh',
                    playlist: 'Daftar Putar',
                    forward: 'Maju',
                    backward: 'Mundur',
                    next: 'Berikutnya',
                    previous: 'Sebelumnya',
                    quality: 'Kualitas',
                    playback: 'Pemutaran',
                    subtitle: 'Subtitel',
                    loop: 'Ulang',
                    audio: 'Audio',
                    back: 'Kembali',
                    close: 'Tutup',
                    copyUrl: 'Salin URL',
                    morePlugin: 'Lebih Banyak Plugin',
                    playerInfo: 'Informasi Pemutar',
                    version: 'Versi',
                    settings: 'Pengaturan',
                    yes: 'Ya',
                    no: 'Tidak',
                    playnext: 'Berikutnya',
                    playprevious: 'Sebelumnya',
                    nextframe: 'Frame Berikutnya',
                    prevframe: 'Frame Sebelumnya',
                    flipvideo: 'Balikkan Video',
                },
                DA: {
                    play: 'Afspil',
                    pause: 'Pause',
                    mute: 'Slå lyd fra',
                    unMute: 'Slå lyd til',
                    chromecast: 'Chromecast',
                    share: 'Del',
                    fullscreen: 'Fuld skærm',
                    exitFullscreen: 'Afslut fuld skærm',
                    playlist: 'Afspilningsliste',
                    forward: 'Fremad',
                    backward: 'Tilbage',
                    next: 'Næste',
                    previous: 'Forrige',
                    quality: 'Kvalitet',
                    playback: 'Afspilning',
                    subtitle: 'Undertekster',
                    loop: 'Løkke',
                    audio: 'Lyd',
                    back: 'Tilbage',
                    close: 'Luk',
                    copyUrl: 'Kopiér URL',
                    morePlugin: 'Flere plugins',
                    playerInfo: 'Afspillerinformation',
                    version: 'Version',
                    settings: 'Indstillinger',
                    yes: 'Ja',
                    no: 'Nej',
                    playnext: 'Næste',
                    playprevious: 'Forrige',
                    nextframe: 'Næste billede',
                    prevframe: 'Forrige billede',
                    flipvideo: 'Vend video',
                },
                DE: {
                    play: 'Abspielen',
                    pause: 'Pause',
                    mute: 'Stummschalten',
                    unMute: 'Stummschaltung aufheben',
                    chromecast: 'Chromecast',
                    share: 'Teilen',
                    fullscreen: 'Vollbildmodus',
                    exitFullscreen: 'Vollbildmodus verlassen',
                    playlist: 'Wiedergabeliste',
                    forward: 'Vorwärts',
                    backward: 'Rückwärts',
                    next: 'Nächster',
                    previous: 'Vorheriger',
                    quality: 'Qualität',
                    playback: 'Wiedergabe',
                    subtitle: 'Untertitel',
                    loop: 'Schleife',
                    audio: 'Audio',
                    back: 'Zurück',
                    close: 'Schließen',
                    copyUrl: 'URL kopieren',
                    morePlugin: 'Weitere Plugins',
                    playerInfo: 'Spielerinformationen',
                    version: 'Version',
                    settings: 'Einstellungen',
                    yes: 'Ja',
                    no: 'Nein',
                    playnext: 'Nächstes',
                    playprevious: 'Vorheriges',
                    nextframe: 'Nächstes Bild',
                    prevframe: 'Vorheriges Bild',
                    flipvideo: 'Video drehen',
                },
                AR: {
                    play: 'تشغيل',
                    pause: 'إيقاف مؤقت',
                    mute: 'كتم الصوت',
                    unMute: 'إلغاء كتم الصوت',
                    chromecast: 'كروم كاست',
                    share: 'مشاركة',
                    fullscreen: 'وضع ملء الشاشة',
                    exitFullscreen: 'الخروج من ملء الشاشة',
                    playlist: 'قائمة التشغيل',
                    forward: 'تقديم',
                    backward: 'ترجيع',
                    next: 'التالي',
                    previous: 'السابق',
                    quality: 'الجودة',
                    playback: 'التشغيل',
                    subtitle: 'الترجمة',
                    loop: 'تكرار',
                    audio: 'الصوت',
                    back: 'رجوع',
                    close: 'إغلاق',
                    copyUrl: 'نسخ الرابط',
                    morePlugin: 'المزيد من الإضافات',
                    playerInfo: 'معلومات المشغل',
                    version: 'الإصدار',
                    settings: 'الإعدادات',
                    yes: 'نعم',
                    no: 'لا',
                    playnext: 'التالي',
                    playprevious: 'السابق',
                    nextframe: 'الإطار التالي',
                    prevframe: 'الإطار السابق',
                    flipvideo: 'اقلب الفيديو',
                },
                UR: {
                    play: 'چلائیں',
                    pause: 'روکیں',
                    mute: 'خاموش کریں',
                    unMute: 'آواز بحال کریں',
                    chromecast: 'کروم کاسٹ',
                    share: 'شیئر کریں',
                    fullscreen: 'فل اسکرین',
                    exitFullscreen: 'فل اسکرین سے باہر نکلیں',
                    playlist: 'پلے لسٹ',
                    forward: 'آگے بڑھائیں',
                    backward: 'پیچھے جائیں',
                    next: 'اگلا',
                    previous: 'پچھلا',
                    quality: 'معیار',
                    playback: 'پلے بیک',
                    subtitle: 'سب ٹائٹل',
                    loop: 'لوپ',
                    audio: 'آڈیو',
                    back: 'واپس',
                    close: 'بند کریں',
                    copyUrl: 'URL کاپی کریں',
                    morePlugin: 'مزید پلگ انز',
                    playerInfo: 'پلیئر معلومات',
                    version: 'ورژن',
                    settings: 'ترتیبات',
                    yes: 'ہاں',
                    no: 'نہیں',
                    playnext: 'اگلا',
                    playprevious: 'پچھلا',
                    nextframe: 'اگلا فریم',
                    prevframe: 'پچھلا فریم',
                    flipvideo: 'ویڈیو پلٹائیں',
                },
                TH: {
                    play: 'เล่น',
                    pause: 'หยุดชั่วคราว',
                    mute: 'ปิดเสียง',
                    unMute: 'เปิดเสียง',
                    chromecast: 'Chromecast',
                    share: 'แบ่งปัน',
                    fullscreen: 'เต็มจอ',
                    exitFullscreen: 'ออกจากเต็มจอ',
                    playlist: 'เพลย์ลิสต์',
                    forward: 'ไปข้างหน้า',
                    backward: 'ย้อนกลับ',
                    next: 'ถัดไป',
                    previous: 'ก่อนหน้า',
                    quality: 'คุณภาพ',
                    playback: 'การเล่น',
                    subtitle: 'คำบรรยาย',
                    loop: 'ลูป',
                    audio: 'เสียง',
                    back: 'ย้อนกลับ',
                    close: 'ปิด',
                    copyUrl: 'คัดลอก URL',
                    morePlugin: 'ปลั๊กอินเพิ่มเติม',
                    playerInfo: 'ข้อมูลเครื่องเล่น',
                    version: 'เวอร์ชั่น',
                    settings: 'การตั้งค่า',
                    yes: 'ใช่',
                    no: 'ไม่',
                    playnext: 'ถัดไป',
                    playprevious: 'ก่อนหน้า',
                    nextframe: 'เฟรมถัดไป',
                    prevframe: 'เฟรมก่อนหน้า',
                    flipvideo: 'พลิกวิดีโอ',
                },
                ES: {
                    play: 'Reproducir',
                    pause: 'Pausar',
                    mute: 'Silenciar',
                    unMute: 'Reactivar sonido',
                    chromecast: 'Chromecast',
                    share: 'Compartir',
                    fullscreen: 'Pantalla completa',
                    exitFullscreen: 'Salir de pantalla completa',
                    playlist: 'Lista de reproducción',
                    forward: 'Adelantar',
                    backward: 'Retroceder',
                    next: 'Siguiente',
                    previous: 'Anterior',
                    quality: 'Calidad',
                    playback: 'Reproducción',
                    subtitle: 'Subtítulo',
                    loop: 'Bucle',
                    audio: 'Audio',
                    back: 'Atrás',
                    close: 'Cerrar',
                    copyUrl: 'Copiar URL',
                    morePlugin: 'Más complementos',
                    playerInfo: 'Información del reproductor',
                    version: 'Versión',
                    settings: 'Configuraciones',
                    yes: 'Sí',
                    no: 'No',
                    playnext: 'Siguiente',
                    playprevious: 'Anterior',
                    nextframe: 'Siguiente fotograma',
                    prevframe: 'Fotograma anterior',
                    flipvideo: 'Voltear video',
                },
                FR: {
                    play: 'Lecture',
                    pause: 'Pause',
                    mute: 'Muet',
                    unMute: 'Désactiver muet',
                    chromecast: 'Chromecast',
                    share: 'Partager',
                    fullscreen: 'Plein écran',
                    exitFullscreen: 'Quitter le plein écran',
                    playlist: 'Liste de lecture',
                    forward: 'Avancer',
                    backward: 'Reculer',
                    next: 'Suivant',
                    previous: 'Précédent',
                    quality: 'Qualité',
                    playback: 'Lecture',
                    subtitle: 'Sous-titres',
                    loop: 'Boucle',
                    audio: 'Audio',
                    back: 'Retour',
                    close: 'Fermer',
                    copyUrl: "Copier l'URL",
                    morePlugin: 'Plus de plugins',
                    playerInfo: 'Informations du lecteur',
                    version: 'Version',
                    settings: 'Paramètres',
                    yes: 'Oui',
                    no: 'Non',
                    playnext: 'Suivant',
                    playprevious: 'Précédent',
                    nextframe: 'Image suivante',
                    prevframe: 'Image précédente',
                    flipvideo: 'Retourner la vidéo',
                },
                PT: {
                    play: 'Reproduzir',
                    pause: 'Pausar',
                    mute: 'Silenciar',
                    unMute: 'Ativar som',
                    chromecast: 'Chromecast',
                    share: 'Compartilhar',
                    fullscreen: 'Tela cheia',
                    exitFullscreen: 'Sair da tela cheia',
                    playlist: 'Lista de reprodução',
                    forward: 'Avançar',
                    backward: 'Retroceder',
                    next: 'Próximo',
                    previous: 'Anterior',
                    quality: 'Qualidade',
                    playback: 'Reprodução',
                    subtitle: 'Legenda',
                    loop: 'Repetição',
                    audio: 'Áudio',
                    back: 'Voltar',
                    close: 'Fechar',
                    copyUrl: 'Copiar URL',
                    morePlugin: 'Mais plugins',
                    playerInfo: 'Informações do reprodutor',
                    version: 'Versão',
                    settings: 'Configurações',
                    yes: 'Sim',
                    no: 'Não',
                    playnext: 'Próximo',
                    playprevious: 'Anterior',
                    nextframe: 'Próximo quadro',
                    prevframe: 'Quadro anterior',
                    flipvideo: 'Inverter vídeo',
                },
                KR: {
                    play: '재생',
                    pause: '일시 정지',
                    mute: '음소거',
                    unMute: '음소거 해제',
                    chromecast: '크롬캐스트',
                    share: '공유',
                    fullscreen: '전체 화면',
                    exitFullscreen: '전체 화면 종료',
                    playlist: '재생 목록',
                    forward: '앞으로',
                    backward: '뒤로',
                    next: '다음',
                    previous: '이전',
                    quality: '화질',
                    playback: '재생',
                    subtitle: '자막',
                    loop: '반복',
                    audio: '오디오',
                    back: '뒤로 가기',
                    close: '닫기',
                    copyUrl: 'URL 복사',
                    morePlugin: '더 많은 플러그인',
                    playerInfo: '플레이어 정보',
                    version: '버전',
                    settings: '설정',
                    yes: '예',
                    no: '아니요',
                    playnext: '다음',
                    playprevious: '이전',
                    nextframe: '다음 프레임',
                    prevframe: '이전 프레임',
                    flipvideo: '비디오 뒤집기',
                },
            },
            languages: {
                EN: 'English',
                BN: 'Bengali',
                HN: 'Hindi',
                HE: 'Hebrew',
                RU: 'Russian',
                SV: 'Swedish',
                IT: 'Italian',
                CN: 'Chinese',
                JP: 'Japanese',
                ID: 'Indonesian',
                DA: 'Danish',
                DE: 'German',
                AR: 'Arabic',
                UR: 'Urdu',
                TH: 'Thai',
                ES: 'Spanish',
                FR: 'French',
                PT: 'Portuguese',
                KR: 'Korean',
            },
        };

        var device = getDevice();
        var subtitles = undefined,
            maxDuration = 0,
            currentDuration = undefined,
            activeApi = false,
            apiCall = 0,
            fileExtension = undefined,
            isYoutube = undefined,
            isVimeo = undefined,
            isFacebook = undefined,
            hlsFile = Array(),
            hlsItem = undefined,
            hlsSubtitle = undefined,
            hlsSubtitleUrl = Array(),
            hlsSubtitleType = Array(),
            hlsAudio = undefined,
            dashSubtitle = undefined,
            dashAudio = undefined,
            isLive = false,
            isSpeedMenu = false,
            vmPlayer = undefined,
            vmActive = false,
            vmDuration = undefined,
            vmCurrentTime = undefined,
            isSoundOpen = false,
            isControlOpen = false,
            isPlayFalse = false,
            isFirstPause = false,
            isMute = false,
            isVast = false,
            isCast = false,
            isCastEnable = false,
            isMidroll = false,
            encrypt = premium.encrypt,
            player = undefined,
            centerPlay = null,
            liveText = null,
            xplayer = [],
            playerName,
            nextURL,
            logoArea = undefined,
            playlist = [],
            playIndex = undefined,
            m3uIndex = undefined,
            activeQuality = undefined,
            activeSubtitle = undefined,
            activeAudio = undefined,
            activePlayback = undefined,
            activeLoop = undefined,
            youtubePlayer = undefined,
            dashPlayer = undefined,
            isPlaying = false,
            isLoop = false,
            isVideoEnded = false,
            isVideoClose = false,
            ytEvent = null,
            isMenu = true,
            player360 = undefined,
            VRvideo = undefined,
            isActiveAdd = undefined,
            normalIndex = 5,
            closeCounterNumber = 0,
            tvTimer = 0,
            xProgress = 0,
            fps = 30,
            isFlipped = false,
            currentURL = undefined,
            chapterList = undefined,
            chapterIndex = -1,
            currentChapter = undefined,
            chapterActive = false,
            ytQualityText = [
                'highres',
                'hd2160',
                'hd1440',
                'hd1080',
                'hd720',
                'large',
                'medium',
                'small',
                'tiny',
                'auto',
            ],
            ytSpeed = ['0.25', '0.5', '0.75', '1', '1.25', '1.5', '1.75', '2'],
            ytPlaylists = undefined,
            ytParsedData = undefined,
            currentEvent = {
                isPlaying: '',
                duration: '',
                currentTime: '',
                quality: [],
                qualityLabel: '',
                subtitle: [],
                audios: [],
                end: '',
                volume: '',
                mute: '',
                playback: '',
                mode: '',
                info: undefined,
                buffer: '',
            };

        let analytics = {
            os: device.os,
            device: device.mobile ?? device.browser,
            duration: 0,
            progress: 0,
            sound: 0,
            playback: 1,
            content_id: premium?.videoAnalytics?.videoId,
            events: {
                play: false,
                mute: false,
                fullscreen: false,
                end: false,
            },
        };

        let newLanguage = premium?.lang ?? 'EN';
        let activeLanguage = {};

        let langKey = [
            'play',
            'pause',
            'mute',
            'unMute',
            'chromecast',
            'share',
            'fullscreen',
            'exitFullscreen',
            'playlist',
            'forward',
            'backward',
            'next',
            'previous',
            'quality',
            'playback',
            'subtitle',
            'loop',
            'audio',
            'back',
            'close',
            'copyUrl',
            'morePlugin',
            'playerInfo',
            'version',
            'settings',
            'yes',
            'no',
            'playnext',
            'playprev',
            'nextframe',
            'prevframe',
            'videoflip',
        ];
        console.log('supported language', def.languages);

        let textCast = navigator.appVersion;
        let positionCast = textCast.indexOf('Chrome');
        if (positionCast > 0) {
            isCast = true;
        }

        activeLoop = premium?.loop ?? false;
        isLoop = premium?.loop ?? false;

        let thisID = def.fn.id(premium.id);
        if (!thisID) {
            console.log(`Player ID '${premium.id}' Not Found!`);
            return false;
        }
        def.fn.css(thisID, {
            'aspect-ratio': '16/9',
            background: 'rgba(0,0,0,0.8)',
            position: 'relative',
            width: '100%',
        });

        player = def.fn.create('absdiv');
        def.fn.css(player, {
            background: 'rgba(0,0,0,1)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            'flex-direction': 'column',
            overflow: 'hidden',
        });
        def.fn.attribute(player, {
            oncontextmenu: 'return true',
            id: 'absPlayer',
            dir: 'ltr',
        });

        centerPlay = def.fn.create('button');
        def.fn.html(centerPlay, def.icons.centerPlay);
        def.fn.css(centerPlay, {
            position: 'absolute',
            left: '50%',
            top: '50%',
            cursor: 'pointer',
            zIndex: 5,
            background: 'none',
            padding: 0,
            margin: 0,
            border: 0,
            color: '#fff',
            transform: 'translate(-50%,-50%)',
        });
        def.fn.append(player, centerPlay);

        centerPlay.addEventListener('click', togglePlayPause, false);

        logoArea = def.fn.create('absdiv');
        def.fn.attribute(logoArea, {
            oncontextmenu: 'return false',
        });

        liveText = def.fn.create('p');
        def.fn.html(
            liveText,
            "<span style='color:#0ff;margin:0 !important;height:8px;width:8px;border-radius:50%;background:#0ff;'></span> <span style='font-size:11px;margin:0 !important;'>LIVE</span>",
        );
        def.fn.css(liveText, def.css.liveText);
        def.fn.append(player, liveText);

        if (typeof premium.logo?.position === 'object') {
            def.fn.css(logoArea, premium.logo?.position);
        } else {
            def.fn.css(logoArea, def.css.logoArea);
        }
        def.fn.append(player, logoArea);

        let logo = def.fn.create('img');
        def.fn.css(
            logo,
            typeof premium.logo?.css === 'object'
                ? premium.logo.css
                : def.css.logo,
        );
        def.fn.attribute(logo, {
            oncontextmenu: 'return false',
            src: premium?.logo?.url,
            alt: 'ESY player',
        });
        premium?.logo?.url ? def.fn.append(logoArea, logo) : true;

        let pipControl = def.fn.create('button');
        def.fn.css(
            pipControl,
            def.fn.getCss(premium.pipControl?.css, 'pipControl'),
        );
        def.fn.html(pipControl, def.icons.pictureInPicture);
        premium.pip ? def.fn.append(player, pipControl) : '';

        let controls = def.fn.create('absdiv');
        def.fn.css(controls, {
            background: premium?.controls?.background ?? 'rgba(0,0,0,0.2)',
            width: '100%',
            height: '50px',
            position: 'absolute',
            left: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            zIndex: 5,
            transition: '0.5s',
        });
        def.fn.append(player, controls);

        let topControls = def.fn.create('absdiv');
        def.fn.css(topControls, {
            background: '#000',
            width: '100%',
            height: '0px',
            position: 'absolute',
            left: 0,
            top: 0,
            display: 'none',
            alignItems: 'center',
            flexDirection: 'column',
            zIndex: 3,
            transition: '0.5s',
        });
        def.fn.append(player, topControls);
        def.fn.attribute(topControls, {
            oncontextmenu: 'return false',
        });

        let titlePanel = def.fn.create('absdiv');
        def.fn.css(titlePanel, {
            background: 'transparent',
            width: '100%',
            height: '40px',
            position: 'absolute',
            left: 0,
            top: 0,
            display: 'flex',
            alignItems: 'center',
            zIndex: 5,
            transition: '0.5s',
            overflowX: 'hidde',
            gap: '20px',
            padding: '4px 10px',
        });
        def.fn.append(player, titlePanel);
        def.fn.attribute(titlePanel, {
            oncontextmenu: 'return false',
        });

        let playerBack = def.fn.create('absdiv');
        def.fn.css(playerBack, {
            display: premium?.topControls?.back == true ? 'flex' : 'none',
            cursor: 'pointer',
            width: '30px',
        });
        def.fn.append(titlePanel, playerBack);
        def.fn.html(playerBack, def.icons.playerBack);
        def.fn.attribute(playerBack, {
            oncontextmenu: 'return false',
        });
        playerBack.addEventListener('click', () => {
            history.back();
        });

        let title = def.fn.create('absdiv');
        def.fn.css(title, {
            flex: '1 1 0%',
            display: premium?.topControls?.title == true ? 'flex' : 'none',
            color: '#fff',
            cursor: 'none',
            overflow: 'hidden',
            textWrap: 'nowrap',
        });
        def.fn.append(titlePanel, title);
        def.fn.attribute(title, {
            oncontextmenu: 'return false',
        });
        title.textContent = premium?.title;
        title.addEventListener('click', togglePlayPause, false);

        let bottomControls = def.fn.create('absdiv');
        def.fn.css(bottomControls, {
            background: 'linear-gradient(to top,black,transparent)',
            width: '100%',
            height: '0px',
            position: 'absolute',
            left: 0,
            bottom: 0,
            display: 'none',
            alignItems: 'center',
            flexDirection: 'column',
            zIndex: 3,
            transition: '0.5s',
        });
        def.fn.append(player, bottomControls);
        def.fn.attribute(bottomControls, {
            oncontextmenu: 'return false',
        });

        let progress = def.fn.create('absdiv');
        def.fn.css(progress, def.fn.getCss(premium?.progress?.css, 'progress'));
        def.fn.append(player, progress);
        def.fn.attribute(progress, {
            oncontextmenu: 'return false',
        });

        let progressBuffer = def.fn.create('absdiv');
        def.fn.css(
            progressBuffer,
            def.fn.getCss(premium?.progressBuffer, 'progressBuffer'),
        );
        def.fn.append(progress, progressBuffer);

        let progressTimeline = def.fn.create('absdiv');
        def.fn.css(
            progressTimeline,
            def.fn.getCss(premium?.progressTimeline, 'progressTimeline'),
        );
        def.fn.append(progress, progressTimeline);

        let progressTooltip = def.fn.create('absdiv');
        def.fn.css(
            progressTooltip,
            def.fn.getCss(premium?.progressTooltip, 'progressTooltip'),
        );
        def.fn.append(player, progressTooltip);

        let durationArea = def.fn.create('absdiv');
        def.fn.css(
            durationArea,
            def.fn.getCss(premium?.durationArea?.css, 'durationArea'),
        );

        def.fn.attribute(durationArea, {
            oncontextmenu: 'return false',
        });

        let durationCurrent = def.fn.create('p');
        def.fn.css(durationCurrent, {
            color: '#fff',
            fontSize: '12px',
            marginBottom: '0px',
            paddingBottom: '0px',
        });
        def.fn.html(durationCurrent, '00:00');
        def.fn.append(durationArea, durationCurrent);

        let divider = def.fn.create('p');
        def.fn.css(
            divider,
            def.fn.getCss(premium?.durationArea?.divider?.css, 'dividerCss'),
        );
        def.fn.html(divider, premium?.durationArea?.divider?.content ?? '');
        def.fn.append(durationArea, divider);

        let durationText = def.fn.create('p');
        def.fn.css(durationText, {
            gap: '4px',
            color: '#fff',
            fontSize: '12px',
            marginBottom: '0px',
            paddingBottom: '0px',
            display: 'flex',
            alignItems: 'center',
        });
        def.fn.html(durationText, '00:00');
        def.fn.append(durationArea, durationText);

        let allControls = def.fn.create('absdiv');
        def.fn.css(allControls, {
            width: '98%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        });
        def.fn.append(controls, allControls);
        def.fn.attribute(allControls, {
            oncontextmenu: 'return false',
        });

        let leftControls = def.fn.create('absdiv');
        def.fn.css(leftControls, {
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'flex-start',
        });
        def.fn.append(allControls, leftControls);

        let playPauseControl = def.fn.create('button');
        def.fn.css(
            playPauseControl,
            def.fn.getCss(premium?.playPauseControl, 'playPauseControl'),
        );
        def.fn.html(playPauseControl, def.icons.playBtn);

        playPauseControl.addEventListener('click', () => {
            togglePlayPause();
        });

        let volumeContainer = def.fn.create('absdiv');
        def.fn.append(player, volumeContainer);

        let volumeControl = def.fn.create('button');
        def.fn.css(
            volumeControl,
            def.fn.getCss(premium?.volumeControl, 'volumeControl'),
        );
        def.fn.html(volumeControl, def.icons.soundLower);

        let speedControl = def.fn.create('button');
        def.fn.css(
            speedControl,
            def.fn.getCss(premium?.volumeControl, 'volumeControl'),
        );
        def.fn.html(speedControl, def.icons.soundLower);

        let volumeSliderArea = def.fn.create('absdiv');
        def.fn.css(
            volumeSliderArea,
            def.fn.getCss(premium?.volumeSliderArea, 'volumeSliderArea'),
        );
        def.fn.append(volumeContainer, volumeSliderArea);

        let volumeSlider = def.fn.create('absdiv');
        def.fn.css(
            volumeSlider,
            def.fn.getCss(premium?.volumeSlider, 'volumeSlider'),
        );
        def.fn.attribute(volumeSlider, {
            max: 100,
            min: 0,
            current: 20,
        });
        def.fn.append(volumeSliderArea, volumeSlider);

        thisID.append(player);

        let castControl = def.fn.create('button');
        def.fn.css(
            castControl,
            def.fn.getCss(premium?.castControl, 'castControl'),
        );
        def.fn.html(castControl, def.icons.castIcon);

        let speedPlacement = def.fn.create('button');
        def.fn.css(
            speedPlacement,
            def.fn.getCss(premium?.playback?.placement?.css, 'speedPlacement'),
        );
        def.fn.html(
            speedPlacement,
            (premium?.playback?.default ?? 1) +
                premium?.playback?.placement?.content,
        );

        let backwardControl = def.fn.create('button');
        def.fn.css(
            backwardControl,
            def.fn.getCss(premium?.backwardControl, 'backwardControl'),
        );
        def.fn.html(backwardControl, def.icons.moveBackward);

        let forwardControl = def.fn.create('button');
        def.fn.css(
            forwardControl,
            def.fn.getCss(premium?.forwardControl, 'forwardControl'),
        );
        def.fn.html(forwardControl, def.icons.moveForward);

        let rightControls = def.fn.create('absdiv');
        def.fn.css(rightControls, {
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
        });
        def.fn.append(allControls, rightControls);

        let shareControl = def.fn.create('button');
        def.fn.css(
            shareControl,
            def.fn.getCss(premium?.shareControl, 'shareControl'),
        );
        def.fn.html(shareControl, def.icons.shareIcon);

        let settingsControl = def.fn.create('button');
        def.fn.css(
            settingsControl,
            def.fn.getCss(premium?.settingsControl, 'settingsControl'),
        );
        def.fn.html(settingsControl, def.icons.settings);

        let settingsOptions = def.fn.create('absdiv');
        def.fn.css(
            settingsOptions,
            def.fn.getCss(premium?.settingsOptions, 'settingsOptions'),
        );
        def.fn.attribute(settingsOptions, {
            oncontextmenu: 'return false',
        });

        let settingsOptionBefore = def.fn.create('absdiv');
        def.fn.css(
            settingsOptionBefore,
            def.fn.getCss(
                premium?.settingsOptionBefore,
                'settingsOptionBefore',
            ),
        );

        let itemQuality = def.fn.create('absdiv');
        def.fn.css(
            itemQuality,
            def.fn.getCss(premium?.itemQuality, 'itemQuality'),
        );
        def.fn.html(
            itemQuality,
            `<p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;' data-lang-key='quality'>Quality</p><p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.rightArrow}</p>`,
        );

        let itemPlayback = def.fn.create('absdiv');
        def.fn.css(
            itemPlayback,
            def.fn.getCss(premium?.itemPlayback, 'itemPlayback'),
        );
        def.fn.html(
            itemPlayback,
            `<p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;' data-lang-key='playback'>Playback</p><p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.rightArrow}</p>`,
        );

        let itemSubtitle = def.fn.create('absdiv');
        def.fn.css(
            itemSubtitle,
            def.fn.getCss(premium?.itemSubtitle, 'itemSubtitle'),
        );
        def.fn.html(
            itemSubtitle,
            `<p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;' data-lang-key='subtitle'>Subtitle</p><p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important'>${def.icons.rightArrow}</p>`,
        );

        let itemAudio = def.fn.create('absdiv');
        def.fn.css(itemAudio, def.fn.getCss(premium?.itemAudio, 'itemAudio'));
        def.fn.html(
            itemAudio,
            `<p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;' data-lang-key='audio'>Audio</p><p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.rightArrow}</p>`,
        );

        let itemLoop = def.fn.create('absdiv');
        def.fn.css(itemLoop, def.fn.getCss(premium?.itemLoop, 'itemLoop'));
        def.fn.html(
            itemLoop,
            `<p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;' data-lang-key='loop'>Loop</p><p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.rightArrow}</p>`,
        );

        let settingsBack = def.fn.create('absdiv');
        def.fn.css(
            settingsBack,
            def.fn.getCss(premium?.settingsBack, 'settingsBack'),
        );
        def.fn.html(
            settingsBack,
            `<p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.backBtn}</p><p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;' data-lang-key='back'>Back</p>`,
        );

        let settingsOptionAfter = def.fn.create('absdiv');
        def.fn.css(
            settingsOptionAfter,
            def.fn.getCss(premium?.settingsOptionAfter, 'settingsOptionAfter'),
        );

        def.fn.attribute(settingsOptionAfter, {
            oncontextmenu: 'return false',
            onselectstart: 'return false',
        });

        let speedArea = def.fn.create('absdiv');

        let settingsOptionsItem = def.fn.create('absdiv');
        def.fn.css(settingsOptionsItem, {
            width: '100%',
            height: 'auto',
            background: 'rgba(0,0,0,0,3)',
        });

        let playlistContainerBox = def.fn.create('absdiv');
        def.fn.css(
            playlistContainerBox,
            def.fn.getCss(
                premium?.playlistContainerBox,
                'playlistContainerBox',
            ),
        );
        def.fn.attribute(playlistContainerBox, {
            oncontextmenu: 'return false',
            onselectstart: 'return false',
        });

        let playlistContainer = def.fn.create('absdiv');
        def.fn.css(
            playlistContainer,
            def.fn.getCss(premium?.playlistContainer, 'playlistContainer'),
        );

        let episodeContainer = def.fn.create('absdiv');
        def.fn.css(
            episodeContainer,
            def.fn.getCss(premium?.episodeContainer, 'episodeContainer'),
        );
        def.fn.attribute(episodeContainer, { onContextMenu: 'return false' });
        def.fn.append(player, episodeContainer);

        let playlistControl = def.fn.create('button');
        def.fn.css(
            playlistControl,
            def.fn.getCss(premium?.playlistControl, 'playlistControl'),
        );
        def.fn.html(playlistControl, def.icons.playlist);

        let playNext = def.fn.create('button');
        def.fn.css(playNext, def.fn.getCss(premium?.playNext, 'playNext'));
        def.fn.html(playNext, def.icons.playNext);
        playNext.addEventListener('click', playNextItem, false);

        let playPrev = def.fn.create('button');
        def.fn.css(playPrev, def.fn.getCss(premium?.playPrev, 'playPrev'));
        def.fn.html(playPrev, def.icons.playPrev);
        playPrev.addEventListener('click', playPrevItem, false);

        let nextFrame = def.fn.create('button');
        def.fn.css(nextFrame, def.fn.getCss(premium?.nextFrame, 'nextFrame'));
        def.fn.html(nextFrame, def.icons.nextFrame);
        nextFrame.addEventListener('click', nextFrames, 'false');

        let prevFrame = def.fn.create('button');
        def.fn.css(prevFrame, def.fn.getCss(premium?.prevFrame, 'prevFrame'));
        def.fn.html(prevFrame, def.icons.prevFrame);
        prevFrame.addEventListener('click', prevFrames, 'false');

        let flipVideo = def.fn.create('button');
        def.fn.css(flipVideo, def.fn.getCss(premium?.flipVideo, 'flipVideo'));
        def.fn.html(flipVideo, def.icons.flipVideo);
        flipVideo.addEventListener('click', toggleFlip, false);

        let episode = def.fn.create('button');
        def.fn.css(episode, def.fn.getCss(premium?.episode, 'episode'));
        def.fn.html(episode, def.icons.episode);
        episode.addEventListener('click', toggleEpisode, false);

        let screenControl = def.fn.create('button');
        def.fn.css(
            screenControl,
            def.fn.getCss(premium?.screenControl, 'screenControl'),
        );
        def.fn.html(screenControl, def.icons.fullScreenEnter);
        screenControl.addEventListener('click', () => {
            toggleFullscreen();
        });

        def.fn.append(player, settingsOptions);
        def.fn.append(settingsOptions, settingsOptionBefore);
        def.fn.append(settingsOptionBefore, itemQuality);
        def.fn.append(settingsOptionBefore, itemPlayback);
        def.fn.append(settingsOptionBefore, itemSubtitle);
        def.fn.append(settingsOptionBefore, itemAudio);
        def.fn.append(settingsOptionBefore, itemLoop);
        def.fn.append(settingsOptions, settingsOptionAfter);
        def.fn.append(player, playlistContainerBox);
        def.fn.append(player, speedArea);
        def.fn.append(playlistContainerBox, playlistContainer);

        if (premium?.controls?.left[0] === undefined) {
            def.fn.append(leftControls, playPauseControl);
            def.fn.append(leftControls, backwardControl);
            def.fn.append(leftControls, forwardControl);
            def.fn.append(leftControls, volumeControl);
            def.fn.append(leftControls, castControl);
            def.fn.append(leftControls, speedPlacement);
        } else {
            premium?.controls.left.forEach((item, index) => {
                def.fn.setPopover(item);
                def.fn.append(leftControls, def.fn.getObject(item));
            });
        }

        if (premium?.controls?.right[0] === undefined) {
            def.fn.append(rightControls, settingsControl);
            def.fn.append(rightControls, playlistControl);
            def.fn.append(rightControls, shareControl);
            def.fn.append(rightControls, screenControl);
        } else {
            premium?.controls.right.forEach((item, index) => {
                def.fn.setPopover(item);
                def.fn.append(rightControls, def.fn.getObject(item));
            });
        }

        let errorMsg = def.fn.create('h3');
        def.fn.css(errorMsg, {
            textAlign: 'center',
            position: 'absolute',
            zIndex: 9,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            color: 'red',
        });
        def.fn.append(player, errorMsg);
        def.fn.attribute(errorMsg, {
            oncontextmenu: 'return false',
        });

        settingsBack = def.fn.create('absdiv');
        def.fn.css(
            settingsBack,
            def.fn.getCss(premium?.settingsBack, 'settingsBack'),
        );
        def.fn.html(
            settingsBack,
            '<p style="font-family:sans-serif;margin:0 !important;" data-lang-key="back">Back</p><p style="font-family:sans-serif;margin:0 !important;">' +
                def.icons.backBtn +
                '</p>',
        );

        let video = def.fn.create('video');
        def.fn.css(video, {
            width: '100%',
            height: '100%',
            position: 'absolute',
        });
        def.fn.append(player, video);
        def.fn.attribute(video, {
            playsinline: 'true',
            webkitPlaysinline: 'true',
            disableremoteplayback: 'true',
            tabindex: '-1',
            preload: 'metadata',
            crossorigin: 'anonymous',
            xWebkitAirplay: 'true',
        });

        let ytIframeId = `${premium.id}_yt_iframe`;

        let ytPlayer = def.fn.create('absdiv');
        def.fn.attribute(ytPlayer, {
            id: ytIframeId,
        });
        def.fn.css(ytPlayer, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'none',
            zIndex: 2,
        });
        def.fn.append(player, ytPlayer);

        player360 = def.fn.create('absdiv');
        def.fn.css(player360, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'flex',
            background: 'transparent',
            cursor: 'pointer',
            zIndex: 2,
        });
        def.fn.append(player, player360);

        let youtubeClick = def.fn.create('absdiv');
        def.fn.css(youtubeClick, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'flex',
            background: 'transparent',
            zIndex: 4,
        });
        def.fn.append(player, youtubeClick);
        youtubeClick.addEventListener('click', () => {
            isNotMobile(togglePlayPause);
            isControlOpen = false;
            settingsOptionAfter.style.display = 'none';
            settingsOptionBefore.style.display = 'none';
        });
        def.fn.addClass(youtubeClick, 'abs_right_option');
        def.fn.addClass(youtubeClick, 'abs_option');
        premium?.contextMenu !== false
            ? rightOptions('.abs_right_option', player)
            : def.fn.attribute(player, { oncontextmenu: 'return false' });

        let vmFrameId = `${premium.id}_vm_iframe`;
        let vimeoPlayer = def.fn.create('absdiv');
        def.fn.attribute(vimeoPlayer, {
            id: vmFrameId,
        });
        def.fn.css(vimeoPlayer, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'none',
            overflow: 'hidden',
        });
        def.fn.append(player, vimeoPlayer);

        let vimeoClick = def.fn.create('absdiv');
        def.fn.css(vimeoClick, {
            width: '100%',
            height: 'calc(100% - 60px)',
            position: 'absolute',
            display: 'none',
            background: 'transparent',
            zIndex: 4,
        });
        def.fn.append(player, vimeoClick);
        vimeoClick.addEventListener('click', () => {
            isNotMobile(togglePlayPause);
            isControlOpen = false;
            settingsOptionAfter.style.display = 'none';
            settingsOptionBefore.style.display = 'none';
        });

        def.fn.addClass(vimeoClick, 'abs_right_option_vimeo');
        def.fn.addClass(vimeoClick, 'abs_option_vimeo');

        premium?.contextMenu !== false
            ? rightOptions('.abs_right_option_vimeo', player)
            : def.fn.attribute(player, { oncontextmenu: 'return false' });

        let adsContainer = def.fn.create('absdiv');
        def.fn.attribute(adsContainer, {
            id: 'adsContainer',
        });
        def.fn.css(adsContainer, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'none',
            background: '#000',
            zIndex: 5,
        });
        def.fn.append(player, adsContainer);
        def.fn.attribute(adsContainer, {
            oncontextmenu: 'return false',
        });

        let adsContent = def.fn.create('absdiv');
        def.fn.attribute(adsContent, {
            id: 'adsContent',
        });
        def.fn.css(adsContent, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'none',
        });
        def.fn.append(adsContainer, adsContent);

        let adsContentVideo = def.fn.create('video');
        def.fn.css(adsContentVideo, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'none',
            zIndex: 4,
        });
        def.fn.append(player, adsContentVideo);
        def.fn.attribute(adsContentVideo, {
            preload: 'metadata',
            tabindex: -1,
            disableremoteplayback: 'true',
            'webkit-playsinline': 'true',
            playsinline: 'true',
            controlsList: 'no download',
            oncontextmenu: 'return false',
            muted: 1,
            autoplay: 1,
        });

        let adsTimer = def.fn.create('absdiv');
        def.fn.css(adsTimer, {
            position: 'absolute',
            right: 0,
            bottom: '40px',
            width: 'auto',
            height: '35px',
            background: 'rgba(0,0,0,0.9)',
            padding: '4px 6px',
            color: '#fff',
            display: 'none',
            zIndex: 4,
            fontSize: '12px',
            fontFamily: 'sans-serif',
            alignItems: 'center',
            justifyContent: 'center',
        });
        def.fn.append(player, adsTimer);
        def.fn.attribute(adsTimer, {
            oncontextmenu: 'return false',
        });

        let adSkip = def.fn.create('span');
        def.fn.css(adSkip, {
            position: 'absolute',
            right: 0,
            bottom: '40px',
            width: 'auto',
            height: '35px',
            background: 'rgba(0,0,0,0.9)',
            padding: '4px 6px',
            color: '#fff',
            display: 'none',
            zIndex: 5,
            cursor: 'pointer',
            fontSize: '12px',
            fontFamily: 'sans-serif',
            alignItems: 'center',
            justifyContent: 'center',
        });
        def.fn.append(player, adSkip);

        let adsHandler = def.fn.create('svg');
        def.fn.css(adsHandler, {
            width: '100px',
            height: '100px',
            position: 'absolute',
            display: 'none',
            color: '#fff',
            cursor: 'pointer',
            zIndex: 5,
            alignItems:'center',
            justifyContent:'center',
            fontSize: '50px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        });
        def.fn.html(adsHandler, def.icons.adsPlayBtn);
        def.fn.append(player, adsHandler);

        let loader = def.fn.create('svg');
        def.fn.attribute(adsContent, {
            id: 'loader',
        });
        def.fn.css(loader, {
            width: '60px',
            height: '60px',
            position: 'absolute',
            display: 'none',
            left: '50%',
            top: '50%',
            zIndex: 5,
            transform: 'translate(-50%,-50%)',
        });
        def.fn.html(
            loader,
            def.icons.loaders[
                premium.loader !== undefined ? premium.loader[0] - 1 : 0
            ],
        );
        def.fn.append(player, loader);

        let shareArea = def.fn.create('absdiv');
        def.fn.css(shareArea, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'none',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 6,
        });
        def.fn.append(player, shareArea);

        let shareClose = def.fn.create('button');
        def.fn.css(
            shareClose,
            def.fn.getCss(premium?.shareClose, 'shareClose'),
        );
        def.fn.append(shareArea, shareClose);
        def.fn.attribute(shareArea, {
            oncontextmenu: 'return false',
        });
        def.fn.html(shareClose, def.icons.shareCloseIcon);

        let shareInner = def.fn.create('absdiv');
        def.fn.css(shareInner, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'flex',
            gap: '15px',
            zIndex: 3,
            alignItems: 'center',
            justifyContent: 'center',
        });
        def.fn.append(shareArea, shareInner);

        if (document.pictureInPictureEnabled) {
            pipControl.addEventListener('click', async () => {
                let pip = video.getAttribute('disablepictureinpicture');
                if (pip) {
                    video.removeAttribute('disablepictureinpicture');
                } else {
                    video.setAttribute('disablepictureinpicture', 1);
                }
                try {
                    if (video !== document.pictureInPictureElement) {
                        await video.requestPictureInPicture();
                    } else {
                        await document.exitPictureInPicture();
                    }
                } catch (error) {
                    console.error('PiP Error:', error);
                }
            });
        } else {
            console.log('PIP NOT ENABLED IN YOUR BROWSER');
            pipControl.style.display = 'none';
        }

        progress.addEventListener('click', (e) => {
            toggleScrubbing(e);
        });

        progress.addEventListener('mouseover', (e) => {
            scrubbing(e);
        });

        progress.addEventListener('mousemove', (e) => {
            scrubbing(e);
        });

        progress.addEventListener('touchover', (e) => {
            scrubbing(e);
        });

        progress.addEventListener('mouseleave', () => {
            progressTooltip.style.display = 'none';
            progress.style.height = premium?.progress?.defaultHeight ?? '5px';
        });

        progress.addEventListener('touchend', () => {
            progressTooltip.style.display = 'none';
            progress.style.height = premium?.progress?.defaultHeight ?? '5px';
        });

        settingsOptions.addEventListener('mouseleave', () => {
            isControlOpen = false;
            settingsOptionAfter.style.display = 'none';
            settingsOptionBefore.style.display = 'none';
        });

        speedPlacement.addEventListener('click', () => {
            if (isSpeedMenu) {
                def.fn.css(speedArea, {
                    display: 'none',
                    transition: '0.5s all',
                });
            } else {
                def.fn.html(speedArea, initPlayback());
                def.fn.css(
                    speedArea,
                    def.fn.getCss(
                        premium?.playback?.placement?.speedArea,
                        'speedArea',
                    ),
                );
                setPlayback();
            }
            isSpeedMenu = !isSpeedMenu;
        });

        speedArea.addEventListener('mouseleave', () => {
            def.fn.css(speedArea, {
                display: 'none',
                transition: '0.5s all',
            });
            isSpeedMenu = !isSpeedMenu;
        });

        speedArea.addEventListener('touchcancel', () => {
            def.fn.css(speedArea, {
                display: 'none',
                transition: '0.5s all',
            });
            isSpeedMenu = !isSpeedMenu;
        });

        [player].forEach((item) => {
            item.addEventListener('mouseleave', () => {
                closeControls();
                isControlOpen = false;
                progressTooltip.style.display = 'none';
                settingsOptionBefore.style.display = 'none';
                settingsOptionAfter.style.display = 'none';
                volumeContainer.style.display = 'none';
            });
        });

        function initVolumeSlider() {
            if (volumeSlider != undefined) {
                let activeCss = def.fn.getCss(
                    premium?.volumeSlider,
                    'volumeSlider',
                );
                activeCss.width = volumeSlider.getAttribute('current') + 'px';
                def.fn.css(volumeSlider, activeCss);
                def.fn.css(
                    volumeSliderArea,
                    def.fn.getCss(
                        premium?.volumeSliderArea,
                        'volumeSliderArea',
                    ),
                );
                def.fn.css(
                    volumeContainer,
                    def.fn.getCss(
                        premium?.volumeContainer?.css,
                        'volumeContainer',
                    ),
                );
            }
            isSoundOpen = !isSoundOpen;
            tvTimer = 0;
            touchVolumeHide(20);
        }

        volumeControl.addEventListener('mouseenter', initVolumeSlider, false);

        volumeContainer.addEventListener('mouseleave', () => {
            if (volumeSlider !== undefined) {
                def.fn.css(volumeSlider, { display: 'none' });
                def.fn.css(volumeContainer, { display: 'none' });
                def.fn.css(volumeSliderArea, { display: 'none' });
            }
        });
        volumeContainer.addEventListener('mousemove', () => {
            tvTimer = 0;
        });

        volumeControl.addEventListener('click', () => {
            toggleMute();
        });

        volumeSliderArea.addEventListener('click', (e) => {
            let rect = null;
            let soundWidth = 0;
            if (premium?.volumeContainer?.type === 'vertical') {
                rect = e.target.getBoundingClientRect();
                soundWidth = e.offsetX;
            } else {
                rect = e.target.getBoundingClientRect();
                soundWidth = Math.min(Math.max(0, e.x - rect.x), rect.width);
            }

            volumeSlider.setAttribute('current', soundWidth);
            let activeCss = def.fn.getCss(
                premium?.volumeSlider,
                'volumeSlider',
            );
            activeCss.width = soundWidth + 'px';
            def.fn.css(volumeSlider, activeCss);

            if (Math.ceil(soundWidth) > 0 && Math.ceil(soundWidth) < 50) {
                volumeControl.innerHTML = def.icons.soundLower;
            } else if (
                Math.ceil(soundWidth) > 49 &&
                Math.ceil(soundWidth) <= 100
            ) {
                volumeControl.innerHTML = def.icons.soundHigher;
            }
            if (
                (playerName == 'mp4') |
                (playerName == 'hls') |
                (playerName == 'dash') |
                (playerName == 'flv') |
                (playerName == 'mkv')
            ) {
                if (premium.v360) {
                    VRvideo.volume = soundWidth / 100;
                } else {
                    video.volume = soundWidth / 100;
                }
            } else if (isYoutube == 'yTb') {
                youtubePlayer.setVolume(soundWidth);
            } else if (playerName == 'vimeo') {
                vmPlayer.setVolume(soundWidth / 100);
            }
            if (isMute) {
                toggleMute();
            }
            events('sound', soundWidth);
            analytics.sound = soundWidth;
            localStorage.setItem('abs_active_sound', soundWidth);
            def.fn.postAnalytics(analytics);
        });

        function soundControls(amount) {
            let soundWidth = localStorage.getItem('abs_active_sound') ?? 0;
            soundWidth = parseInt(soundWidth) + amount;
            if (soundWidth < 0) {
                soundWidth = 0;
                localStorage.setItem('abs_active_sound', 0);
            } else if (soundWidth >= 100) {
                soundWidth = 100;
                localStorage.setItem('abs_active_sound', 100);
            } else {
                localStorage.setItem('abs_active_sound', soundWidth);
            }
            volumeSlider.setAttribute('current', soundWidth);
            if (Math.ceil(soundWidth) > 0 && Math.ceil(soundWidth) < 50) {
                volumeControl.innerHTML = def.icons.soundLower;
            } else if (
                Math.ceil(soundWidth) > 49 &&
                Math.ceil(soundWidth) <= 100
            ) {
                volumeControl.innerHTML = def.icons.soundHigher;
            }
            if (
                (playerName == 'mp4') |
                (playerName == 'hls') |
                (playerName == 'dash') |
                (playerName == 'flv') |
                (playerName == 'mkv')
            ) {
                if (premium.v360) {
                    VRvideo.volume = soundWidth / 100;
                } else {
                    video.volume = soundWidth / 100;
                }
            } else if (isYoutube == 'yTb') {
                if (
                    youtubePlayer &&
                    typeof youtubePlayer.setVolume === 'function'
                ) {
                    youtubePlayer.setVolume(soundWidth);
                }
            } else if (playerName == 'vimeo') {
                if (vmPlayer && typeof vmPlayer.setVolume === 'function') {
                    vmPlayer.setVolume(soundWidth / 100);
                }
            }
        }

        backwardControl.addEventListener('click', () => {
            seekBackward();
        });

        forwardControl.addEventListener('click', () => {
            seekForward();
        });

        shareControl.addEventListener('click', () => {
            shareArea.style.display = 'flex';
            shareController();
        });

        shareClose.addEventListener('click', () => {
            def.fn.html(shareInner, '');
            shareArea.style.display = 'none';
        });

        settingsControl.addEventListener('click', () => {
            if (isControlOpen == false) {
                isControlOpen = true;
                settingsOptionAfter.style.display = 'none';
                settingsOptionBefore.style.display = 'flex';
            } else {
                isControlOpen = false;
                settingsOptionAfter.style.display = 'none';
                settingsOptionBefore.style.display = 'none';
            }
        });

        settingsBack.addEventListener('click', () => {
            settingsOptionBefore.style.display = 'flex';
            settingsOptionAfter.style.display = 'none';
        });

        playlistControl.addEventListener('click', () => {
            togglePlaylist();
        });

        itemPlayback.addEventListener('click', () => {
            settingsOptionBefore.style.display = 'none';
            settingsOptionAfter.style.display = 'flex';

            def.fn.html(settingsOptionAfter, initPlayback());
            def.fn.append(settingsOptionAfter, settingsBack);
            setPlayback();
        });

        itemLoop.addEventListener('click', () => {
            settingsOptionBefore.style.display = 'none';
            settingsOptionAfter.style.display = 'flex';
            let loopItem = '';
            const loops = ['no', 'yes'];
            for (let l = 0; l < loops.length; l++) {
                loopItem += `<absdiv class="abs_loop ${
                    activeLoop == l ? 'abs_active' : ''
                }" data-id='${l}' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'  data-lang-key='${
                    loops[l]
                }'>${
                    loops[l]
                }</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                    def.icons.rightArrow
                }</p></absdiv>`;
            }
            def.fn.html(settingsOptionAfter, loopItem);
            def.fn.append(settingsOptionAfter, settingsBack);

            const allLoops = document.querySelectorAll('.abs_loop');
            allLoops.forEach((item, index) => {
                setCallback(item, togglePlaybackLoop);
            });
            setLanguage();
        });

        const hoverItems = [
            playPauseControl,
            castControl,
            volumeControl,
            backwardControl,
            forwardControl,
            shareControl,
            playlistControl,
            settingsControl,
            screenControl,
            playNext,
            playPrev,
            nextFrame,
            prevFrame,
            flipVideo,
        ];

        let hlsToggleCaption = () => {};

        if (
            device.os !== 'Android' &&
            device.os !== 'Ios' &&
            device.os !== 'Ipad'
        ) {
            hoverItems.forEach((item) => {
                item.addEventListener('mouseover', () => {
                    tvTimer = 0;
                    def.fn.openToolTip(item, true);
                    item.style.background =
                        premium?.iconHoverColor ?? 'rgba(219, 30, 30, 0.88)';
                    item.style.borderRadius = '5px';
                });

                item.addEventListener('touchstart', () => {
                    tvTimer = 0;
                    def.fn.openToolTip(item, true);
                    item.style.background =
                        premium?.iconHoverColor ?? 'rgba(219, 30, 30, 0.88)';
                    item.style.borderRadius = '5px';
                });

                item.addEventListener('mouseout', () => {
                    def.fn.openToolTip(item, false);
                    item.style.background = 'none';
                    item.style.borderRadius = '0';
                });
                item.addEventListener('mouseleave', () => {
                    def.fn.openToolTip(item, false);
                    item.style.background = 'none';
                    item.style.borderRadius = '0';
                });
                item.addEventListener('touchend', () => {
                    def.fn.openToolTip(item, false);
                    item.style.background = 'none';
                    item.style.borderRadius = '0';
                });
                item.addEventListener('touchcancel', () => {
                    def.fn.openToolTip(item, false);
                    item.style.background = 'none';
                    item.style.borderRadius = '0';
                });
                item.addEventListener('focusout', () => {
                    def.fn.openToolTip(item, false);
                    item.style.background = 'none';
                    item.style.borderRadius = '0';
                });
            });
        }

        if (player.offsetHeight < 400) {
            def.fn.css(settingsOptionAfter, {
                width: '100%',
                height: 'auto',
                background: 'rgba(0,0,0,0.3)',
                color: '#fff',
                position: 'absolute',
                bottom: 0,
                left: 0,
                borderRadius: '4px',
                display: 'none',
                alignItems: 'center',
                flexDirection: 'column',
                maxHeight: '150px',
                overflowY: 'auto',
                overflowX: 'hidden',
                '-ms-overflow-style': 'none',
                'scrollbar-width': 'none',
                '@::-webkit-scrollbar': 'none',
                transition: '0.5s',
            });
        }

        const settingItems = [
            itemPlayback,
            itemAudio,
            itemLoop,
            itemQuality,
            itemSubtitle,
            settingsBack,
        ];

        settingItems.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                item.style.background = 'rgba(0,0,0,0.6)';
                item.style.color = 'orange';
                item.style.padding = '3px 2px';
                item.style.borderRadius = '4px';
                item.style.paddingLeft = '4px';
                item.style.transition = '0.1s';
            });
            item.addEventListener('mouseleave', () => {
                item.style.background = 'none';
                item.style.padding = '0px';
                item.style.color = '#fff';
                item.style.borderRadius = '0px';
                item.style.paddingLeft = '0px';
                item.style.transition = '0.1s';
            });
        });

        const controlsItem = [
            player,
            video,
            controls,
            durationArea,
            youtubeClick,
            vimeoClick,
            progressTimeline,
            playlistContainerBox,
        ];
        controlsItem.forEach((item, index) => {
            if (item != undefined && item != null) {
                tvTimer = 0;
                item.addEventListener('mouseenter', () => {
                    openControls();
                });
                item.addEventListener('mouseover', () => {
                    isMouseMove();
                });
                item.addEventListener('mousemove', () => {
                    isMouseMove();
                });
                item.addEventListener('touchstart', () => {
                    openControls();
                });

                item.addEventListener('mouseleave', () => {
                    closeCounterNumber = 0;
                });
                item.addEventListener('touchend', () => {
                    closeCounterNumber = 0;
                });
            }
        });

        const fullscreenControls = [youtubeClick, video, VRvideo, vimeoPlayer];
        fullscreenControls.forEach((item) => {
            if (item != undefined && item != null) {
                item.addEventListener('dblclick', () => {
                    toggleFullscreen();
                });
            }
        });

        if ((premium.poster != '') | (premium.poster != undefined)) {
            addPoster();
        }

        let css = `.abs_active{color : orange !important;background:rgba(0,0,0,0.41) !important;}.abs_option{width:100%;height:100%;position:absolute;top:0;z-index:1;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.5);font-size:2vw}.contextMenu{--menu-border:rgba(255,255,255,.08);--menu-bg:linear-gradient(45deg,rgba(10,20,28,.2) 0%,rgba(10,20,28,.7) 100%);--item-border:rgba(255,255,255,.1);--item-color:#fff;--item-bg-hover:rgba(255,255,255,.1);height:0;overflow:hidden;background:var(--menu-bg);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);position:fixed;top:var(--top);left:var(--left);-webkit-animation:menuAnimation 0.4s 0s both;animation:menuAnimation 0.4s 0s both;transform-origin:left;list-style:none;margin:4px;padding:0;display:flex;flex-direction:column;z-index:999999999;box-shadow:0 0 0 1px var(--menu-border),0 2px 2px rgba(0,0,0,.03),0 4px 4px rgba(0,0,0,.04),0 10px 8px rgba(0,0,0,.05),0 12px 12px rgba(0,0,0,.06),0 30px 30px rgba(0,0,0,.07),0 70px 65px rgba(0,0,0,.09)}.contextMenu-item{padding:4px}.contextMenu-item[data-adsDivider="top"]{border-top:1px solid}.contextMenu-item[data-adsDivider="bottom"]{border-bottom:1px solid}.contextMenu-item[data-adsDivider="top-bottom"]{border-top:1px solid;border-bottom:1px solid}.contextMenu-item[data-adsDivider]{border-color:var(--item-border)}.contextMenu-button{color:var(--item-color);background:0;border:0;white-space:nowrap;width:100%;border-radius:4px;padding:6px 24px 6px 7px;text-align:left;display:flex;align-items:center;font-size:12px;width:100%;-webkit-animation:menuItemAnimation 0.2s 0s both;animation:menuItemAnimation 0.2s 0s both;font-family:"Inter",sans-serif;cursor:pointer}.contextMenu-button:hover{background-color:var(--item-bg-hover)}.contextMenu[data-theme="light"]{--menu-bg:linear-gradient(45deg,rgba(255,255,255,.45) 0%,rgba(255,255,255,.85) 100%);--menu-border:rgba(0,0,0,.08);--item-border:rgba(0,0,0,.1);--item-color:rgb(10,20,28);--item-bg-hover:rgba(10,20,28,.09)}@-webkit-keyframes menuAnimation{0%{opacity:0;transform:scale(.5)}100%{height:var(--height);opacity:1;border-radius:8px;transform:scale(1)}}@keyframes menuAnimation{0%{opacity:0;transform:scale(.5)}100%{height:var(--height);opacity:1;border-radius:8px;transform:scale(1)}}@-webkit-keyframes menuItemAnimation{0%{opacity:0;transform:translateX(-10px)}100%{opacity:1;transform:translateX(0)}}@keyframes menuItemAnimation{0%{opacity:0;transform:translateX(-10px)}100%{opacity:1;transform:translateX(0)}}absdiv::-webkit-scrollbar {display: none;}.abs_active>*{color : orange !important;}`;
        def.fn.setCss(css);

        function disableSelect(e) {
            return false;
        }
        thisID.onselectstart = (e) => {
            e.preventDefault();
        };
        thisID.onmousedown = disableSelect;

        if (Array.isArray(premium.src)) {
            playlist = premium.src;
            var items = [];
            var urls = [];
            playlist.forEach((item, index) => {
                if (
                    item &&
                    typeof item === 'object' &&
                    item.constructor === Object
                ) {
                    if (item.url != '' && item.title != '') {
                        urls.push(item.url);
                        if (index == 0) {
                            playIndex = index;
                            __init(urls[index], item.poster);
                        }
                        var box = def.fn.create('absdiv');
                        if (index == items.length - 1) {
                            def.fn.css(box, {
                                display: 'flex',
                                width: '100%',
                                height: '35px',
                                margin: '4px 0px',
                                position: 'relative',
                                cursor: 'pointer',
                                paddingBottom: '120px',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                            });
                        } else {
                            def.fn.css(box, {
                                display: 'flex',
                                width: '100%',
                                height: '35px',
                                margin: '4px 0px',
                                position: 'relative',
                                cursor: 'pointer',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                            });
                        }
                        def.fn.attribute(box, {
                            'data-id': index,
                        });

                        var img = def.fn.create('img');
                        def.fn.css(img, {
                            width: '30px',
                            height: '30px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            borderRadius: '50%',
                        });

                        def.fn.attribute(img, {
                            src: item.poster,
                        });

                        def.fn.append(box, img);
                        var title = def.fn.create('p');

                        def.fn.css(title, {
                            fontSize: '12px',
                            color: '#fff',
                            'font-family': 'sans-serif',
                            marginLeft: '4px',
                            marginBottom: '0px',
                            padding: '2px 0px',
                        });
                        def.fn.html(title, item.title.slice(0, 20));
                        def.fn.attribute(img, { loading: 'lazy' });
                        def.fn.append(box, title);
                        playlistControl.style.display = 'flex';
                        def.fn.append(playlistContainer, box);
                        setCallback(box, playlistActiveEvent, playlistActive);
                        playlistActive(playIndex);
                    }
                } else {
                    console.log('Please insert object data');
                }
            });
        } else {
            __init(premium.src);
        }

        if (Array.isArray(premium.subtitle)) {
            subtitles = premium.subtitle;
            let captions = [];
            let tracksController = '';
            tracksController = `<absdiv data-id='${100}' srclang='native' kind='off' class='abs_subtitle ${
                activeSubtitle == 100 ? 'abs_active' : ''
            }' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>Off</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                def.icons.rightArrow
            }</p></absdiv>`;
            subtitles.forEach((item, index) => {
                if (
                    item &&
                    typeof item === 'object' &&
                    item.constructor === Object
                ) {
                    let itemTextTrack = `<track srclang='${item.srclang}' kind='${item.kind}' label='${item.label}' data-id='${index}' src='${item.src}' />`;
                    tracksController += `<absdiv data-id='${index}' srclang='${
                        item.srclang
                    }' kind='${item.kind}' class='abs_subtitle ${
                        activeSubtitle == index ? 'abs_active' : ''
                    }' style='width:90%;color:#fff;height:28px; padding:2px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                        item.label
                    }</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                        def.icons.rightArrow
                    }</p></absdiv>`;
                    captions.push(itemTextTrack);
                } else {
                    return;
                }
            });

            itemSubtitle.addEventListener('click', () => {
                loadTextTracks();
            });

            function loadTextTracks() {
                if (
                    (playerName == 'mp4') |
                    (playerName == 'mkv') |
                    (playerName == 'flv')
                ) {
                    def.fn.html(settingsOptionAfter, '');
                    def.fn.html(video, captions);

                    def.fn.html(settingsOptionAfter, tracksController);
                    def.fn.append(settingsOptionAfter, settingsBack);
                    settingsOptionBefore.style.display = 'none';
                    settingsOptionAfter.style.display = 'flex';

                    const hlsCaptions =
                        document.querySelectorAll('.abs_subtitle');
                    hlsCaptions.forEach((item, index) => {
                        setCallback(item, textTrackChange);
                    });
                }
            }

            function textTrackChange(e) {
                let kind = e.getAttribute('kind');
                let value = e.getAttribute('srclang');
                activeSubtitle = e.getAttribute('data-id');
                if (value === 'off') {
                    hideTextTracks();
                } else {
                    hideTextTracks();

                    for (var i = 0; i < video.textTracks.length; i++) {
                        if (video.textTracks[i].kind === kind) {
                            if (video.textTracks[i].language === value) {
                                video.textTracks[i].mode = 'showing';
                                googleEvent(
                                    'subtitle_change',
                                    'Video subtitle',
                                    video.textTracks[i],
                                )?.label;
                            }
                        }
                    }
                }

                const hlsCaptions = document.querySelectorAll('.abs_subtitle');
                for (let i = 0; i < hlsCaptions.length; i++) {
                    def.fn.removeClass(hlsCaptions[i], 'abs_active');
                    if (
                        activeSubtitle == hlsCaptions[i].getAttribute('data-id')
                    ) {
                        def.fn.addClass(hlsCaptions[i], 'abs_active');
                    }
                }
            }

            function hideTextTracks() {
                for (var s = 0; s < video.textTracks.length; s++) {
                    video.textTracks[s].mode = 'hidden';
                }
            }
        } else {
            console.log('Subtitle not found');
        }

        function toggleFlip() {
            isFlipped
                ? events('video_flip', false)
                : events('video_flip', true);
            isFlipped = !isFlipped;
            video.style.transform = isFlipped ? 'scaleX(-1)' : 'scaleX(1)';
        }

        function nextFrames() {
            if (!video.paused) video.pause();
            video.currentTime += 1 / fps;
        }

        function prevFrames() {
            if (!video.paused) video.pause();
            video.currentTime -= 1 / fps;
        }

        function playNextItem() {
            if (chapterActive) {
                playNextChapter();
            } else if (Array.isArray(ytPlaylists)) {
                playYTNext();
            } else {
                events('current_index', playIndex);
                if (Array.isArray(urls) && urls?.length > playIndex) {
                    const limit = urls.length - 1;
                    playIndex = urls.length >= limit ? limit : playIndex++;

                    title.textContent = playlist[playIndex].title ?? '';
                    events('playing_index', playIndex);
                    isVideoClose = false;
                    __init(urls[playIndex]);
                    playlistActive(playIndex);
                }
            }
        }

        function playPrevItem() {
            if (chapterActive) {
                playPrevChapter();
            } else if (Array.isArray(ytPlaylists)) {
                playYTPrev();
            } else {
                events('current_index', playIndex);
                if (Array.isArray(urls) && urls?.length) {
                    playIndex = urls.length > 0 ? urls.length-- : 0;
                    title.textContent = playlist[playIndex].title ?? '';
                    events('playing_index', playIndex);
                    isVideoClose = false;
                    __init(urls[playIndex]);
                    playlistActive(playIndex);
                }
            }
        }

        function playYTNext() {
            events('current_index', playIndex);
            const limit = ytPlaylists?.length - 1;
            playIndex = playIndex < limit ? playIndex + 1 : limit;
            console.log('calculate index', playIndex, limit);
            const item = ytPlaylists[playIndex];
            title.textContent = item?.title;
            events('playing_index', playIndex);
            youtubePlayer.loadVideoById({
                videoId: item.id,
                startSeconds: 0,
            });
            youtubePlayer.playVideo();
            ytActiveIndex(playIndex);
        }

        function playYTPrev() {
            events('current_index', playIndex);
            playIndex = playIndex > 0 ? playIndex - 1 : 0;
            const item = ytPlaylists[playIndex];
            title.textContent = item?.title;
            events('playing_index', playIndex);
            youtubePlayer.loadVideoById({
                videoId: item.id,
                startSeconds: 0,
            });
            youtubePlayer.playVideo();
            ytActiveIndex(playIndex);
        }

        function playNextChapter() {
            events('current_chapter', chapterIndex);
            if (chapterIndex < chapterList.length - 1) {
                chapterIndex++;
            } else {
                chapterIndex = chapterList.length - 1;
            }
            const chapter = chapterList[chapterIndex];
            vmPlayer
                .setCurrentTime(chapter.startTime)
                .then(function (seconds) {
                    vmPlayer.play();
                    events('playing_chapter', chapterIndex);
                })
                .catch(function (error) {
                    console.log('Error in chapter playback');
                });
        }

        function playPrevChapter() {
            events('current_chapter', chapterIndex);
            if (chapterIndex > 0) {
                chapterIndex--;
            } else {
                chapterIndex = 0;
            }
            const chapter = chapterList[chapterIndex];
            vmPlayer
                .setCurrentTime(chapter.startTime)
                .then(function (seconds) {
                    vmPlayer.play();
                    events('playing_chapter', chapterIndex);
                })
                .catch(function (error) {
                    console.log('Error in chapter playback');
                });
        }

        function toggleEpisode() {
            if (episodeContainer.style.display == 'flex') {
                episodeContainer.style.display = 'none';
            } else {
                episodeContainer.style.display = 'flex';
            }
        }

        function events(event, data) {
            try {
                if (typeof premium.listener === 'function') {
                    premium.listener(event, data, player);
                }
            } catch (error) {
                console.log('Function does not exist!');
            }
        }

        function setPlayerCurrentTime(time) {
            if (vmPlayer) {
                vmPlayer.setCurrentTime(time);
            } else if (youtubePlayer) {
                if (typeof youtubePlayer.seekTo === 'function') {
                    youtubePlayer.seekTo(time);
                } else {
                    console.log(typeof youtubePlayer.seekTo);
                }
            } else {
                video.currentTime = time;
                videoListener();
            }
        }

        function setPlayerVolume(sound) {
            localStorage.setItem('abs_active_sound', sound);
            soundControls(0);
        }

        function setAnalyticsData(data) {
            loader.style.display = 'block';
            analytics.progress = data.progress;
            analytics.sound = data.sound;
            analytics.playback = data.playback;
        }

        function setPlayerProgress(response) {
            xProgress = response.progress;
        }

        function setPlayerAnalytics(response) {
            setPlayerCurrentTime(response.progress);
            setPlayerVolume(response.sound);
            setAnalyticsData(response);
            if (response?.events.play) {
                forcePlay();
            }
        }

        function launchIntoFullscreen(element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            } else {
                console.log(
                    `Fullscreen API is not supported in ${device.browser} browser.`,
                );
            }
            def.fn.html(screenControl, def.icons.fullScreenOut);
            def.fn.togglePopover(screenControl, 'exitFullscreen');
            if (
                device.os !== 'iOS' &&
                device.os !== 'Windows' &&
                device.os !== 'MacOs'
            ) {
                if ('orientation' in screen && 'lock' in screen.orientation) {
                    try {
                        screen.orientation.lock('landscape');
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    console.log(
                        'Orientation lock is NOT supported in this browser.',
                    );
                }
            }
        }

        function exitFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else {
                document.msExitFullscreen();
            }
            def.fn.html(screenControl, def.icons.fullScreenEnter);
            def.fn.togglePopover(screenControl, 'fullscreen');
            if (
                device.os !== 'iOS' &&
                device.os !== 'Windows' &&
                device.os !== 'MacOs'
            ) {
                if ('orientation' in screen && 'lock' in screen.orientation) {
                    try {
                        screen.orientation.lock('portrait');
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    console.log(
                        'Orientation lock is NOT supported in this browser.',
                    );
                }
            }
        }
        var fullscreen = false;

        function toggleFullscreen() {
            if (fullscreen) {
                exitFullscreen();
                events('fullscreen', false);
            } else {
                launchIntoFullscreen(player);
                events('fullscreen', true);
            }
            fullscreen = !fullscreen;
            analytics.events.fullscreen = fullscreen;
        }

        function togglePlayback(e) {
            activePlayback = e.getAttribute('index');
            const removePlayback = document.querySelectorAll('.abs_playback');
            for (let i = 0; i < removePlayback.length; i++) {
                def.fn.removeClass(removePlayback[i], 'abs_active');
                if (activePlayback == removePlayback[i].getAttribute('index')) {
                    def.fn.addClass(removePlayback[i], 'abs_active');
                    speedPlacement.textContent = removePlayback[i].textContent;
                }
            }

            def.fn.addClass(e, 'abs_active');
            if (
                (playerName == 'mp4') |
                (playerName == 'hls') |
                (playerName == 'dash') |
                (playerName == 'flv') |
                (playerName == 'mkv')
            ) {
                if (premium.v360) {
                    VRvideo.playbackRate = e.getAttribute('play-rate');
                } else {
                    video.playbackRate = e.getAttribute('play-rate');
                }
            } else if (isYoutube == 'yTb') {
                youtubePlayer.setPlaybackRate(
                    Number(getSpeedIndex(ytSpeed, e.getAttribute('play-rate'))),
                );
            } else if (playerName == 'vimeo') {
                vmPlayer.setPlaybackRate(e.getAttribute('play-rate'));
            }
            analytics.playback = e.getAttribute('play-rate');
            def.fn.postAnalytics(analytics);
        }

        function defaultPlayback(playback) {
            const removePlayback = document.querySelectorAll('.abs_playback');
            for (let i = 0; i < removePlayback.length; i++) {
                def.fn.removeClass(removePlayback[i], 'abs_active');
                if (playback == removePlayback[i].getAttribute('play-rate')) {
                    def.fn.addClass(removePlayback[i], 'abs_active');
                    speedPlacement.textContent = removePlayback[i].textContent;
                }
            }

            if (
                (playerName == 'mp4') |
                (playerName == 'hls') |
                (playerName == 'dash') |
                (playerName == 'flv') |
                (playerName == 'mkv')
            ) {
                if (premium.v360) {
                    VRvideo.playbackRate = playback;
                } else {
                    video.playbackRate = playback;
                }
            } else if (isYoutube == 'yTb' && youtubePlayer !== undefined) {
                youtubePlayer.setPlaybackRate(
                    Number(getSpeedIndex(ytSpeed, playback)),
                );
            } else if (playerName == 'vimeo' && vmPlayer !== undefined) {
                vmPlayer.setPlaybackRate(playback);
            }
        }

        function togglePlaybackLoop(e) {
            activeLoop = e.getAttribute('data-id');
            const allLoops = document.querySelectorAll('.abs_loop');
            for (let a = 0; a < allLoops.length; a++) {
                def.fn.removeClass(allLoops[a], 'abs_active');
                if (activeLoop == allLoops[a].getAttribute('data-id')) {
                    def.fn.addClass(allLoops[a], 'abs_active');
                }
            }

            if (
                fileExtension == 'mp4' ||
                fileExtension == 'webm' ||
                fileExtension == 'ogg' ||
                fileExtension == 'm3u8' ||
                fileExtension == 'mpd'
            ) {
                if (premium.v360) {
                    if (e.getAttribute('data-id') == 1) {
                        def.fn.attribute(VRvideo, {
                            loop: true,
                        });
                    } else {
                        def.fn.remove_attribute(VRvideo, {
                            loop: false,
                        });
                    }
                } else {
                    if (e.getAttribute('data-id') == 1) {
                        def.fn.attribute(video, {
                            loop: true,
                        });
                    } else {
                        def.fn.remove_attribute(video, {
                            loop: false,
                        });
                    }
                }
            } else if (playerName == 'youtube' && youtubePlayer != undefined) {
                if (e.getAttribute('data-id') == 1) {
                    youtubePlayer.setLoop(true);
                } else {
                    youtubePlayer.setLoop(false);
                }
            } else if (playerName == 'vimeo') {
                if (e.getAttribute('data-id') == 1) {
                    vmPlayer.setLoop(true);
                } else {
                    vmPlayer.setLoop(false);
                }
            } else {
                events('looping_error', 'Undefined player type');
            }
            isLoop = Boolean(Number(activeLoop));
            events('loop', Boolean(Number(activeLoop)));
        }

        function videoListener() {
            if (premium.v360) {
                videoEvent(VRvideo);
            } else {
                videoEvent(video);
            }
        }

        function videoEvent(videoItem) {
            videoItem.addEventListener('waiting', () => {
                loader.style.display = 'block';
            });

            videoItem.addEventListener('click', () => {
                togglePlayPause();
                def.fn.postAnalytics(analytics);
            });

            videoItem.addEventListener('playing', () => {
                isPlaying = true;
                loader.style.display = 'none';
            });

            videoItem.addEventListener('ended', () => {
                isVideoEnded = true;
                def.fn.html(playPauseControl, def.icons.playBtn);
                def.fn.togglePopover(playPauseControl, 'play');
                googleEvent('video_complete', 'Videos', 'video End');
                analytics.events.end = true;
                analytics.events.play = false;
                def.fn.postAnalytics(analytics);
                analytics.events.end = false;

                if (isVideoClose == false) {
                    videoEnded();
                }
            });

            videoItem.addEventListener('timeupdate', () => {
                isPlaying = true;
                def.fn.html(playPauseControl, def.icons.pauseBtn);
                analytics.progress = videoItem.currentTime;
                def.fn.togglePopover(playPauseControl, 'pause');
                getCurrentDuration();
                if (videoItem.paused) {
                    isPlaying = false;
                }
            });

            videoItem.addEventListener('loadeddata', () => {
                videoItem.addEventListener('playing', () => {
                    isPlaying = true;
                    loader.style.display = 'none';
                });
                getFullDuration();
            });

            videoItem.addEventListener('pause', () => {
                isPlaying = false;
                def.fn.html(playPauseControl, def.icons.playBtn);
                def.fn.togglePopover(playPauseControl, 'play');
                analytics.events.play = false;
            });

            videoItem.addEventListener('progress', () => {
                const duration = videoItem.duration;
                videoItem.addEventListener('playing', () => {
                    isPlaying = true;
                    loader.style.display = 'none';
                });
                if (duration > 0) {
                    for (let i = 0; i < video.buffered.length; i++) {
                        if (
                            videoItem.buffered.start(
                                videoItem.buffered.length - 1 - i,
                            ) < videoItem.currentTime
                        ) {
                            progressBuffer.style.width = `${
                                (videoItem.buffered.end(
                                    videoItem.buffered.length - 1 - i,
                                ) *
                                    100) /
                                duration
                            }%`;
                            break;
                        }
                    }
                }
            });

            videoItem.addEventListener('error', () => {
                const error = videoItem.error;
                if (error) {
                    switch (error.code) {
                        case MediaError.MEDIA_ERR_ABORTED:
                            console.error('MediaError: Playback aborted.');
                            break;
                        case MediaError.MEDIA_ERR_NETWORK:
                            console.error('MediaError: Network issue.');
                            break;
                        case MediaError.MEDIA_ERR_DECODE:
                            console.error('MediaError: Video decoding error.');
                            break;
                        case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                            console.error(
                                'MediaError: Video format not supported.',
                            );
                            break;
                        default:
                            console.error('MediaError: Unknown error.');
                            break;
                    }
                }
            });
        }

        function touchVolumeHide(num = 7) {
            const tvTimers = setInterval(() => {
                tvTimer++;
                if (tvTimer >= num) {
                    clearInterval(tvTimers);
                    tvTimer = 0;
                    if (volumeSlider !== undefined) {
                        def.fn.css(volumeContainer, { display: 'none' });
                        isSoundOpen = false;
                    }
                }
            }, 1000);
        }

        function __init(url, poster = null) {
            if ((url === undefined) | (url === null)) {
                return false;
            }

            isLive = false;
            currentURL = url;
            isPlaying = false;
            isVimeo = APIVimeo(url);
            isYoutube = APIYoutube(url);
            fileExtension = extChecker(url);
            events('init', 'player initialized');

            if (playlist.length > 0) {
                title.textContent = playlist[playIndex].title ?? '';
            }

            if (
                (fileExtension == 'mp4') |
                (fileExtension == 'webm') |
                (fileExtension == 'ogg') |
                (fileExtension == 'm4s')
            ) {
                isVideoClose = false;
                if (encrypt == true) {
                    video.src = isEncrypt(url);
                } else {
                    video.src = url;
                }
                def.fn.attribute(video, {
                    type: typeGenerator(fileExtension),
                    preload: 'metadata',
                    tabindex: -1,
                    disableremoteplayback: 'true',
                    'webkit-playsinline': 'true',
                    playsinline: 'true',
                    controlsList: 'no download',
                    oncontextmenu: 'return false',
                    disablepictureinpicture: 1,
                });
                video.load();

                poster !== null ? video.setAttribute('poster', poster) : true;
                videoListener();
                loadNativeTracks();
                def.fn.getAnalytics();
                playerName = 'mp4';
            }

            if (fileExtension == 'mkv') {
                isVideoClose = false;
                if (isCast) {
                    video.src = url;
                    video.load();

                    videoListener();
                    loadNativeTracks();
                }

                if (premium.v360) {
                    v360();
                } else {
                    console.log(
                        "Your browser doesn't support the mkv file. Open with Google Chrome",
                    );
                }
                playerName = 'mp4';
                poster !== null ? video.setAttribute('poster', poster) : true;
                def.fn.getAnalytics();
            }

            if (fileExtension == 'flv') {
                isVideoClose = false;
                videoListener();
                function loadFlv() {
                    (function loadFLVScript() {
                        const tag = document.createElement('script');
                        tag.src =
                            'https://bilibili.github.io/flv.js/dist/flv.js';
                        const firstScriptTag =
                            document.getElementsByTagName('script')[0];
                        firstScriptTag.parentNode.insertBefore(
                            tag,
                            firstScriptTag,
                        );
                        tag.onload = setupFLV;
                    })();

                    function setupFLV() {
                        var flvPlayer = flvjs.createPlayer({
                            type: 'flv',
                            url: url,
                        });
                        flvPlayer.attachMediaElement(video);
                        flvPlayer.load();
                        !premium?.autoplay ? forcePause() : flvPlayer.play();
                    }
                }
                if (document.readyState !== 'loading') {
                    console.info(
                        `document.readyState ==>`,
                        document.readyState,
                    );
                    loadFlv();
                } else {
                    document.addEventListener('DOMContentLoaded', function () {
                        console.info(
                            `DOMContentLoaded ==>`,
                            document.readyState,
                        );
                        loadFlv();
                    });
                }
                poster !== null ? video.setAttribute('poster', poster) : true;
                playerName = 'flv';
                def.fn.getAnalytics();
            }

            if (fileExtension == 'm3u8' || fileExtension == 'ts') {
                isVideoClose = false;
                poster !== null ? video.setAttribute('poster', poster) : true;
                playerName = 'hls';
                let hlsData = undefined;
                (() => {
                    const tag = document.createElement('script');
                    tag.src =
                        'https://cdn.jsdelivr.net/npm/hls.js@1.4.0/dist/hls.js';
                    const firstScriptTag =
                        document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                    tag.onload = hlsPlayer;
                })();
                function hlsPlayer() {
                    if (video.canPlayType('application/vnd.apple.mpegurl')) {
                        video.src = url;
                        video.load();
                        video.addEventListener('loadedmetadata', () =>
                            video.play(),
                        );
                        !premium?.autoplay ? forcePause() : video.play();
                        loadNativeTracks();
                    } else if (
                        !video.canPlayType('application/vnd.apple.mpegurl') &&
                        Hls.isSupported()
                    ) {
                        var hls = new Hls({
                            debug: false,
                        });
                        if (encrypt == true) {
                            hls.loadSource(isEncrypt(url));
                        } else {
                            hls.loadSource(url);
                        }
                        hls.attachMedia(video);
                        hls.currentLevel = 0;

                        hls.on(
                            Hls.Events.MANIFEST_PARSED,
                            function (event, data) {
                                events('hls_parsed', true);
                                hlsData = data;
                                if (
                                    hlsData?.levels?.length > 0 &&
                                    hlsData?.levels[0]
                                ) {
                                    setTimeout(() => {
                                        isLive =
                                            hlsData?.levels[0]?.details?.live ??
                                            false;
                                    }, 400);

                                    setTimeout(() => {
                                        isLive =
                                            hlsData?.levels[0]?.details?.live ??
                                            false;
                                    }, 3000);

                                    setTimeout(() => {
                                        isLive =
                                            hlsData?.levels[0]?.details?.live ??
                                            false;
                                    }, 8000);

                                    setTimeout(() => {
                                        isLive =
                                            hlsData?.levels[0]?.details?.live ??
                                            false;
                                    }, 1400);
                                } else {
                                    isLive = false;
                                }
                            },
                        );

                        let hlsError = false;
                        let hlsIntervalTime = 0;
                        let hlsInterval = setInterval(() => {
                            hlsIntervalTime++;
                            if (
                                hlsIntervalTime % 15 === 0 &&
                                hlsError &&
                                playerName == 'hls'
                            ) {
                                clearInterval(hlsInterval);
                                hlsIntervalTime = 0;
                                hlsError = false;
                                __init(currentURL);
                            }
                        }, 1000);

                        hls.on(Hls.Events.KEY_LOADED, function (event, data) {
                            events('hls_key_loaded', true);
                        });

                        hls.on(Hls.Events.ERROR, function (event, data) {
                            events('hls_error', data);
                            if (data.fatal) {
                                switch (data.type) {
                                    case Hls.ErrorTypes.NETWORK_ERROR:
                                        events(
                                            'network_error',
                                            'HLS network error',
                                        );
                                        hls.startLoad();
                                        break;

                                    case Hls.ErrorTypes.MEDIA_ERROR:
                                        events(
                                            'media_error',
                                            'HLS media error',
                                        );
                                        hls.recoverMediaError();
                                        break;

                                    default:
                                        hlsError = true;
                                        hlsIntervalTime = 0;
                                        break;
                                }
                            }
                        });

                        function hlsAudioTrack() {
                            if (hlsData != undefined) {
                                loadAudioTracks(hlsData.audioTracks);
                            }
                        }

                        itemAudio.addEventListener('click', () => {
                            hlsAudioTrack();

                            const audios =
                                document.querySelectorAll('.abs_audio');
                            audios.forEach((item, index) => {
                                setCallback(item, hlsToggleAudio);
                            });

                            setLanguage();
                        });

                        function hlsToggleAudio(e) {
                            activeAudio = e.getAttribute('data-id');
                            const audios =
                                document.querySelectorAll('.abs_audio');
                            for (let i = 0; i < audios.length; i++) {
                                def.fn.removeClass(audios[i], 'abs_active');
                                if (
                                    activeAudio ==
                                    audios[i].getAttribute('data-id')
                                ) {
                                    def.fn.addClass(audios[i], 'abs_active');
                                }
                            }

                            def.fn.addClass(e, 'abs_active');
                            hls.audioTrack = e.getAttribute('data-id');
                        }

                        function hlsSubtitleTracks() {
                            if (hlsData != undefined) {
                                loadCaptions(hlsData.subtitleTracks);
                            } else {
                                return false;
                            }
                        }

                        itemSubtitle.addEventListener('click', () => {
                            hlsSubtitleTracks();
                            setLanguage();
                        });

                        hlsToggleCaption = function hlsToggleCaption(e) {
                            activeSubtitle = e.getAttribute('data-id');
                            const hlsCaptions =
                                document.querySelectorAll('.abs_subtitle');
                            for (let i = 0; i < hlsCaptions.length; i++) {
                                def.fn.removeClass(
                                    hlsCaptions[i],
                                    'abs_active',
                                );
                                if (
                                    activeSubtitle ==
                                    hlsCaptions[i].getAttribute('data-id')
                                ) {
                                    def.fn.addClass(
                                        hlsCaptions[i],
                                        'abs_active',
                                    );
                                }
                            }

                            def.fn.addClass(e, 'abs_active');
                            hls.subtitleTrack = e.getAttribute('data-id');
                        };

                        function setHLSLevel(level) {
                            let nLevel = '';
                            level >= 160 && level < 239
                                ? (nLevel = 160)
                                : 'auto';
                            level >= 240 && level < 359
                                ? (nLevel = 240)
                                : 'auto';
                            level >= 360 && level < 479
                                ? (nLevel = 360)
                                : 'auto';
                            level >= 480 && level < 539
                                ? (nLevel = 480)
                                : 'auto';
                            level >= 540 && level < 719
                                ? (nLevel = 540)
                                : 'auto';
                            level >= 720 && level < 1079
                                ? (nLevel = 720)
                                : 'auto';
                            level >= 1080 && level < 1379
                                ? (nLevel = 1080)
                                : 'auto';
                            level >= 1380 && level < 1780
                                ? (nLevel = 1444)
                                : 'auto';

                            return nLevel;
                        }

                        function setHLSBandwidth(band) {
                            if (band != undefined && band != '') {
                                const stBand = band.toString();
                                let newBand;
                                band <= 999999
                                    ? (newBand = stBand.substr(0, 3))
                                    : (newBand = stBand.substr(0, 4));
                                return newBand;
                            } else {
                                return 360;
                            }
                        }

                        function hlsQuality() {
                            hlsItem = '';
                            def.fn.html(settingsOptionAfter, '');
                            if (hlsData != undefined) {
                                hlsItem += `<absdiv data-id='0' class='abs_quality ${
                                    activeQuality == 0 ||
                                    activeQuality == undefined
                                        ? 'abs_active'
                                        : ''
                                }' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='0'>Auto</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='0'>${
                                    def.icons.rightArrow
                                }</p></absdiv>`;
                                hlsData.levels.forEach((item, index) => {
                                    hlsFile.push(item.url[0]);
                                    const items = `<absdiv data-id='${
                                        index + 1
                                    }' class='abs_quality ${
                                        activeQuality == index + 1
                                            ? 'abs_active'
                                            : ''
                                    }' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='margin:0!important;font-size:12px;'>${
                                        setHLSLevel(item.height) +
                                        " <span style='font-size:12px;color:orange;font-family:sans-serif;'>(" +
                                        setHLSBandwidth(
                                            item.attrs['BANDWIDTH'],
                                        ) +
                                        ')</span>kbps'
                                    }</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' >${
                                        def.icons.rightArrow
                                    }</p></absdiv>`;
                                    hlsItem += items;
                                });
                                def.fn.html(settingsOptionAfter, hlsItem);
                                settingsOptionBefore.style.display = 'none';
                                settingsOptionAfter.style.display = 'flex';
                                def.fn.append(
                                    settingsOptionAfter,
                                    settingsBack,
                                );

                                const qualities =
                                    document.querySelectorAll('.abs_quality');
                                qualities.forEach((item, index) => {
                                    setCallback(item, hlsToggleQuality);
                                });
                            } else {
                                return false;
                            }
                        }

                        itemQuality.addEventListener('click', () => {
                            hlsQuality();
                            setLanguage();
                        });

                        function hlsToggleQuality(e) {
                            activeQuality = e.getAttribute('data-id');
                            const qualities =
                                document.querySelectorAll('.abs_quality');
                            for (let i = 0; i < qualities.length; i++) {
                                def.fn.removeClass(qualities[i], 'abs_active');
                                if (
                                    activeQuality ==
                                    qualities[i].getAttribute('data-id')
                                ) {
                                    def.fn.addClass(qualities[i], 'abs_active');
                                }
                            }

                            def.fn.addClass(e, 'abs_active');
                            if (e.getAttribute('data-id') == 0) {
                                hls.autoLevelEnabled;
                                console.log('auto level enabled');
                            } else {
                                hls.currentLevel =
                                    e.getAttribute('data-id') - 1;
                            }
                        }
                    } else {
                        console.log("Browser doesn't support HLS video");
                    }

                    if (premium.videoAnalytics) {
                        def.fn.getAnalytics();
                    } else {
                        videoListener();
                    }
                }
            }

            if (fileExtension == 'm3u') {
                fetch(url)
                    .then((response) => response.text())
                    .then((response) => {
                        var items = [];
                        var urls = [];

                        response.split('\n').map(function (item, index) {
                            if (item.indexOf('#EXTM3U') == -1) {
                                if (item.indexOf('#EXTINF:-1') != -1) {
                                    var et_txt = item.split(',');
                                    var info = et_txt[0].split(' ');
                                    var file_txt = item.replace(
                                        '#EXTINF:-1',
                                        '',
                                    );
                                    items.push({
                                        g_name: groupSanitiser(
                                            file_txt,
                                            'tvg-id',
                                        ),
                                        logo: groupSanitiser(
                                            file_txt,
                                            'tvg-logo',
                                        ),
                                        group: groupSanitiser(
                                            file_txt,
                                            'group-title',
                                        ),
                                        name: nameSanitizer(et_txt[1]),
                                    });
                                } else {
                                    var ur = item.split('\r');
                                    if (ur[0].indexOf('EXTVLCOPT') == -1) {
                                        if (ur[0].length >= 1) {
                                            urls.push(ur[0]);
                                        }
                                    }
                                }
                            }

                            function sanitizeText(txt) {
                                if (txt != undefined && txt != '') {
                                    var san = txt.split('=');
                                    var sant = san[1];
                                    var index = sant.slice(1, -1);
                                    return index;
                                } else {
                                    return ' ';
                                }
                            }

                            function nameSanitizer(txt) {
                                if (txt != undefined && txt != '') {
                                    var san = txt.split('(');
                                    var sant = san[0].split('[');
                                    return sant[0].replace('\r', '');
                                } else {
                                    return ' ';
                                }
                            }

                            function groupSanitiser(txt, group_name) {
                                if (txt != undefined && txt != '') {
                                    let result = txt.indexOf(group_name + '="');
                                    let ntxt = txt.slice(result);
                                    let newIndex = ntxt?.split(
                                        group_name + '="',
                                    );
                                    let group_txt =
                                        newIndex[1]?.split('"') ?? [];
                                    return group_txt[0];
                                } else {
                                    return ' ';
                                }
                            }
                        });
                        items.forEach((item, index) => {
                            if (index == 0) {
                                m3uIndex = index;
                                __init(urls[index], item.logo);
                            }
                            var box = def.fn.create('absdiv');
                            if (index == items.length - 1) {
                                def.fn.css(box, {
                                    display: 'flex',
                                    width: '100%',
                                    height: '35px',
                                    margin: '4px 0px',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                });
                            } else {
                                def.fn.css(box, {
                                    display: 'flex',
                                    width: '100%',
                                    height: '35px',
                                    margin: '4px 0px',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                });
                            }
                            def.fn.attribute(box, {
                                'data-id': index,
                            });

                            box.addEventListener('mouseover', () => {
                                box.style.background =
                                    'rgba(255, 255, 255, 0.1';
                            });
                            box.addEventListener('mouseout', () => {
                                box.style.background = 'transparent';
                            });

                            box.addEventListener('click', () => {
                                m3uIndex = index;
                                __init(urls[index], item.logo);
                                m3uActive(index);
                            });
                            var img = def.fn.create('img');
                            def.fn.css(img, {
                                width: '30px',
                                height: '30px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                borderRadius: '50%',
                            });
                            def.fn.attribute(img, {
                                src: item.logo,
                            });
                            def.fn.append(box, img);
                            var title = def.fn.create('p');
                            def.fn.css(title, {
                                fontSize: '12px',
                                color: '#fff',
                                'font-family': 'sans-serif',
                                marginLeft: '4px',
                                marginBottom: '0px',
                                padding: '2px 0px',
                            });
                            def.fn.html(title, item.name.slice(0, 20));
                            def.fn.attribute(img, { loading: 'lazy' });
                            def.fn.append(box, title);
                            playlistControl.style.display = 'flex';
                            def.fn.append(playlistContainer, box);
                            m3uActive(m3uIndex);
                        });

                        function m3uActive(item) {
                            var allM3u =
                                playlistContainer.querySelectorAll('absdiv');
                            allM3u.forEach((element) => {
                                if (element.getAttribute('data-id') == item) {
                                    element.style.background =
                                        'rgba(0,0,0,0.8)';
                                } else {
                                    element.style.background = 'none';
                                }
                            });
                        }
                        def.fn.getAnalytics();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }

            if (fileExtension == 'mpd' || fileExtension == 'dash') {
                console.log('Dash video start');
                playerName = 'dash';
                isVideoClose = false;
                poster !== null ? video.setAttribute('poster', poster) : true;
                function loadDash() {
                    (function loadDashScript() {
                        const tag = document.createElement('script');
                        tag.src =
                            'https://cdn.dashjs.org/latest/dash.all.min.js';
                        const firstScriptTag =
                            document.getElementsByTagName('script')[0];
                        firstScriptTag.parentNode.insertBefore(
                            tag,
                            firstScriptTag,
                        );
                        tag.onload = setupDash;
                    })();
                    def.fn.attribute(video, {
                        type: 'video/webm',
                    });
                    function playerSettigs() {
                        return dashPlayer.getSettings();
                    }
                    function setupDash() {
                        dashPlayer = dashjs.MediaPlayer().create();
                        dashPlayer.initialize(video, url, false);

                        dashPlayer.setInitialMediaSettingsFor('audio', {
                            lang: 'et-ET',
                        });
                        dashPlayer.on(
                            dashjs.MediaPlayer.events.STREAM_INITIALIZED,
                            function _onStreamActivated(e) {
                                var streamInfo = e.streamInfo;
                                video.load();
                                updateDuration(
                                    streamInfo.manifestInfo.isDynamic,
                                );
                                isLive = streamInfo.manifestInfo.isDynamic;

                                function dashQuality() {
                                    let videoLevels =
                                        (dashPlayer.getBitrateInfoListFor &&
                                            dashPlayer.getBitrateInfoListFor(
                                                'video',
                                            )) ||
                                        [];

                                    if (
                                        videoLevels != undefined &&
                                        Array.isArray(videoLevels)
                                    ) {
                                        dashItem = '';
                                        def.fn.html(settingsOptionAfter, '');
                                        dashItem = `<absdiv data-id='0' class='abs_quality ${
                                            activeQuality == 0 ||
                                            activeQuality == undefined
                                                ? 'abs_active'
                                                : ''
                                        }' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='0'>Auto</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='0'>${
                                            def.icons.rightArrow
                                        }</p></absdiv>`;
                                        videoLevels.forEach((item, index) => {
                                            const items = `<absdiv data-id='${
                                                index + 2
                                            }' class='abs_quality ${
                                                activeQuality == index + 2
                                                    ? 'abs_active'
                                                    : ''
                                            }' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='margin:0!important;'>${
                                                item.height +
                                                " <span style='font-size:12px;color:orange;font-family:sans-serif;'>(" +
                                                setDashSBandwidth(
                                                    item.bitrate,
                                                ) +
                                                ')</span>kbps'
                                            }</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' >${
                                                def.icons.rightArrow
                                            }</p></absdiv>`;
                                            dashItem += items;
                                        });
                                        def.fn.html(
                                            settingsOptionAfter,
                                            dashItem,
                                        );
                                        settingsOptionBefore.style.display =
                                            'none';
                                        settingsOptionAfter.style.display =
                                            'flex';
                                        def.fn.append(
                                            settingsOptionAfter,
                                            settingsBack,
                                        );

                                        const qualities =
                                            document.querySelectorAll(
                                                '.abs_quality',
                                            );
                                        qualities.forEach((item, index) => {
                                            setCallback(
                                                item,
                                                dashToggleQuality,
                                            );
                                        });
                                    }
                                }

                                itemQuality.addEventListener('click', () => {
                                    dashQuality();
                                    setLanguage();
                                });

                                function dashToggleQuality(e) {
                                    activeQuality = e.getAttribute('data-id');
                                    const qualities =
                                        document.querySelectorAll(
                                            '.abs_quality',
                                        );
                                    for (let i = 0; i < qualities.length; i++) {
                                        def.fn.removeClass(
                                            qualities[i],
                                            'abs_active',
                                        );
                                        if (
                                            activeQuality ==
                                            qualities[i].getAttribute('data-id')
                                        ) {
                                            def.fn.addClass(
                                                qualities[i],
                                                'abs_active',
                                            );
                                        }
                                    }

                                    def.fn.addClass(e, 'abs_active');
                                    if (e.getAttribute('data-id') == 0) {
                                        dashBitrateSwitch('video', 0);
                                        console.log('auto level enabled');
                                    } else {
                                        dashBitrateSwitch(
                                            'video',
                                            e.getAttribute('data-id') - 1,
                                        );
                                    }
                                }

                                function dashTrack() {
                                    let dashAudios =
                                        dashPlayer.getTracksFor('audio');
                                    dashAudio = '';
                                    def.fn.html(settingsOptionAfter, '');
                                    if (
                                        dashAudios.length != undefined &&
                                        Array.isArray(dashAudios)
                                    ) {
                                        dashAudio = '';
                                        dashAudios.forEach((item, index) => {
                                            const items = `<absdiv data-id='${
                                                index + 1
                                            }' class='abs_audio ${
                                                activeAudio == index
                                                    ? 'abs_active'
                                                    : ''
                                            }' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                                                item.lang +
                                                ' ' +
                                                setDashSBandwidth(
                                                    item.bitrateList[0]
                                                        .bandwidth,
                                                )
                                            }</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                                                def.icons.rightArrow
                                            }</p></absdiv>`;
                                            dashAudio += items;
                                        });
                                        def.fn.html(
                                            settingsOptionAfter,
                                            dashAudio,
                                        );
                                        settingsOptionBefore.style.display =
                                            'none';
                                        settingsOptionAfter.style.display =
                                            'flex';
                                        def.fn.append(
                                            settingsOptionAfter,
                                            settingsBack,
                                        );

                                        const audios =
                                            document.querySelectorAll(
                                                '.abs_audio',
                                            );
                                        audios.forEach((item, index) => {
                                            setCallback(item, dashToggleAudio);
                                        });
                                    }
                                }
                                itemAudio.addEventListener('click', () => {
                                    dashTrack();
                                    setLanguage();
                                });

                                function dashToggleAudio(e) {
                                    activeAudio = e.getAttribute('data-id');
                                    const audios =
                                        document.querySelectorAll('.abs_audio');
                                    for (let i = 0; i < audios.length; i++) {
                                        def.fn.removeClass(
                                            audios[i],
                                            'abs_active',
                                        );
                                        if (
                                            activeAudio ==
                                            audios[i].getAttribute('data-id')
                                        ) {
                                            def.fn.addClass(
                                                audios[i],
                                                'abs_active',
                                            );
                                        }
                                    }

                                    def.fn.addClass(e, 'abs_active');
                                    dashPlayer.setCurrentTrack(
                                        dashPlayer.getTracksFor('audio')[
                                            e.getAttribute('data-id')
                                        ],
                                    );
                                }
                            },
                        );

                        dashPlayer.on(
                            dashjs.MediaPlayer.events.TEXT_TRACKS_ADDED,
                            function _onTracksAdded(e) {
                                console.log('tracks loaded');
                                dashSubtitle = '';
                                def.fn.html(settingsOptionAfter, '');
                                function dashCaption() {
                                    let dashSubtitles = e.tracks;
                                    if (
                                        dashSubtitles.length != undefined &&
                                        Array.isArray(dashSubtitles)
                                    ) {
                                        dashSubtitles.forEach((item, index) => {
                                            const itemSub = `<absdiv data-id='${index}' class='abs_subtitle ${
                                                activeSubtitle == index
                                                    ? 'abs_active'
                                                    : ''
                                            }' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                                                item.name
                                            }</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                                                def.icons.rightArrow
                                            }</p></absdiv>`;
                                            dashSubtitle += itemSub;
                                        });
                                        def.fn.html(
                                            settingsOptionAfter,
                                            dashSubtitle,
                                        );
                                        def.fn.append(
                                            settingsOptionAfter,
                                            settingsBack,
                                        );
                                        settingsOptionBefore.style.display =
                                            'none';
                                        settingsOptionAfter.style.display =
                                            'flex';

                                        const hlsCaptions =
                                            document.querySelectorAll(
                                                '.abs_subtitle',
                                            );
                                        hlsCaptions.forEach((item, index) => {
                                            setCallback(
                                                item,
                                                dashToggleCaption,
                                            );
                                        });
                                    }
                                }

                                itemSubtitle.addEventListener('click', () => {
                                    dashCaption();
                                    setLanguage();
                                });

                                function dashToggleCaption(e) {
                                    activeSubtitle = e.getAttribute('data-id');
                                    const hlsCaptions =
                                        document.querySelectorAll(
                                            '.abs_subtitle',
                                        );
                                    for (
                                        let i = 0;
                                        i < hlsCaptions.length;
                                        i++
                                    ) {
                                        def.fn.removeClass(
                                            hlsCaptions[i],
                                            'abs_active',
                                        );
                                        if (
                                            activeSubtitle ==
                                            hlsCaptions[i].getAttribute(
                                                'data-id',
                                            )
                                        ) {
                                            def.fn.addClass(
                                                hlsCaptions[i],
                                                'abs_active',
                                            );
                                        }
                                    }

                                    def.fn.addClass(e, 'abs_active');
                                    dashPlayer.setTextTrack(
                                        e.getAttribute('data-id'),
                                    );
                                }
                            },
                        );

                        function dashBitrateSwitch(type, index) {
                            var cfg = {
                                streaming: {
                                    abr: {
                                        autoSwitchBitrate: {},
                                    },
                                },
                            };
                            if (index > 0) {
                                cfg.streaming.abr.autoSwitchBitrate[type] =
                                    false;
                                dashPlayer.updateSettings(cfg);
                                dashPlayer.setQualityFor(type, index, false);
                            } else {
                                cfg.streaming.abr.autoSwitchBitrate[type] =
                                    true;
                                dashPlayer.updateSettings(cfg);
                            }
                        }

                        function setDashSBandwidth(band) {
                            if (band != undefined && band != '') {
                                const stBand = band.toString();
                                let newBand;
                                band <= 999999
                                    ? (newBand = stBand.substr(0, 3))
                                    : (newBand = stBand.substr(0, 4));
                                return newBand;
                            } else {
                                return 360;
                            }
                        }
                        var updateDuration = function (dynamic) {
                            if (dynamic == true) {
                                liveText.style.display = 'flex';
                            }
                        };
                        def.fn.getAnalytics();
                    }
                    videoListener();
                }
                if (document.readyState !== 'loading') {
                    console.info(
                        `document.readyState ==>`,
                        document.readyState,
                    );
                    loadDash();
                } else {
                    document.addEventListener('DOMContentLoaded', function () {
                        console.info(
                            `DOMContentLoaded ==>`,
                            document.readyState,
                        );
                        loadDash();
                    });
                }
            }

            if (isYoutube == 'yTb') {
                playerName = 'youtube';
                ytPlaylists = [];
                ytParsedData = null;
                console.log('Youtube Start');
                function loadVideo() {
                    video.style.display = 'none';
                    ytPlayer.style.display = 'flex';
                    topControls.style.display = 'flex';
                    bottomControls.style.display = 'flex';
                    openControls();
                    controlResize();
                    isVideoClose = false;
                    let ytActualQuality = 'medium';
                    if (
                        playerName == 'youtube' &&
                        youtubePlayer !== undefined
                    ) {
                        youtubeID(url);
                        loadingVideo(ytEvent, ytParsedData?.videoId);
                        setTimeout(function () {
                            youtubePlayer.playVideo();
                        }, 300);
                        getFullDuration();
                    } else {
                        (function loadYoutubeIFrameApiScript() {
                            const tag = document.createElement('script');
                            tag.src = 'https://www.youtube.com/iframe_api';

                            const firstScriptTag =
                                document.getElementsByTagName('script')[0];
                            firstScriptTag.parentNode.insertBefore(
                                tag,
                                firstScriptTag,
                            );
                            tag.onload = setupPlayer;
                        })();
                    }

                    function setupPlayer() {
                        window.YT.ready(function () {
                            youtubeID(url);
                            if (!ytParsedData) return;
                            const ytOptions = {
                                height: '390',
                                width: '640',
                                playerVars: {
                                    autohide: 0,
                                    cc_load_policy: 0,
                                    controls: 0,
                                    disablekb: 1,
                                    iv_load_policy: 3,
                                    modestbranding: 0,
                                    rel: 0,
                                    showinfo: 0,
                                    start: 0,
                                    autoplay: 0,
                                    end: 0,
                                    enablejsapi: 1,
                                    playerapiid: 'absYtPlayer',
                                    html5: 1,
                                    playsinline: 1,
                                },
                                events: {
                                    onReady: onPlayerReady,
                                    onPlaybackQualityChange:
                                        onPlayerPlaybackQualityChange,
                                    onStateChange: onPlayerStateChange,
                                },
                            };

                            if (
                                ytParsedData?.playlistId &&
                                !ytParsedData?.videoId
                            ) {
                                ytOptions.playerVars.listType = 'playlist';
                                ytOptions.playerVars.list =
                                    ytParsedData?.playlistId;
                            } else if (
                                ytParsedData?.playlistId &&
                                ytParsedData?.videoId
                            ) {
                                ytOptions.videoId = ytParsedData.videoId;
                                ytOptions.playerVars.list =
                                    ytParsedData.playlistId;
                                ytOptions.playerVars.listType = 'playlist';
                            } else {
                                ytOptions.videoId = ytParsedData?.videoId;
                            }

                            if (youtubePlayer) youtubePlayer.destroy();

                            youtubePlayer = new window.YT.Player(
                                ytIframeId,
                                ytOptions,
                            );
                        });
                    }

                    function youTubePlayerActive() {
                        if (
                            playerName == 'youtube' &&
                            youtubePlayer !== undefined
                        ) {
                            currentEvent.info = youtubePlayer.playerInfo;
                            currentEvent.isPlaying =
                                youtubePlayer.getPlayerState();
                            currentEvent.duration = youtubePlayer.getDuration();
                            currentEvent.currentTime =
                                youtubePlayer.getCurrentTime();
                            currentEvent.volume = youtubePlayer.getVolume();
                            currentEvent.subtitle = youtubePlayer.cuePlaylist();
                            currentEvent.buffer =
                                currentEvent.info.videoLoadedFraction;
                            getCurrentDuration();
                            getFullDuration();
                            currentEventChecker();
                            getBuffer();

                            if (
                                playerName == 'youtube' &&
                                currentEvent.info != undefined &&
                                currentEvent.info.videoData != undefined
                            ) {
                                if (
                                    currentEvent.info.videoData.isLive == true
                                ) {
                                    isLive = true;
                                } else {
                                    isLive = false;
                                }
                            }
                        }
                        setTimeout(youTubePlayerActive, 1000);
                    }

                    ytPlayer.addEventListener('mousedown', (e) => {
                        e.preventDefault();
                        if (e.button == 2) {
                            return false;
                        }
                    });

                    function ytQualities() {
                        let data = currentEvent.info.availableQualityLevels;
                        currentEvent.qualityLabel = '';
                        currentEvent.quality = [];
                        def.fn.html(settingsOptionAfter, '');
                        if (
                            Array.isArray(data) &&
                            currentEvent.qualityLabel == ''
                        ) {
                            for (let q = 0; q < data.length; q++) {
                                switch (data[q]) {
                                    case 'highres':
                                        currentEvent.quality.push(4320);
                                        currentEvent.qualityLabel += `<absdiv data-id='4320' class='ytQuality ${
                                            activeQuality == '4320'
                                                ? 'abs_active'
                                                : ''
                                        }' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='4320'>4320p<sup data-id="4320">8k</sup></p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='4320'>${
                                            def.icons.rightArrow
                                        }</p></absdiv>`;
                                        break;
                                    case 'hd2160':
                                        currentEvent.quality.push(2160);
                                        currentEvent.qualityLabel += `<absdiv data-id='2160' class='ytQuality ${
                                            activeQuality == '2160'
                                                ? 'abs_active'
                                                : ''
                                        }' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='2160'>2160p<sup data-id="2160">4k</sup></p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='2160'>${
                                            def.icons.rightArrow
                                        }</p></absdiv>`;
                                        break;
                                    case 'hd1440':
                                        currentEvent.quality.push(1440);
                                        currentEvent.qualityLabel += `<absdiv data-id='1440' class='ytQuality ${
                                            activeQuality == '1440'
                                                ? 'abs_active'
                                                : ''
                                        }' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='1440'>1440p<sup data-id="1440">2k</sup></p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='1440'>${
                                            def.icons.rightArrow
                                        }</p></absdiv>`;
                                        break;
                                    case 'hd1080':
                                        currentEvent.quality.push(1080);
                                        currentEvent.qualityLabel += `<absdiv data-id='1080' class='ytQuality ${
                                            activeQuality == '1080'
                                                ? 'abs_active'
                                                : ''
                                        }' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='1080'>1080p<sup data-id="1080">hd</sup></p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='1080'>${
                                            def.icons.rightArrow
                                        }</p></absdiv>`;
                                        break;
                                    case 'hd720':
                                        currentEvent.quality.push(720);
                                        currentEvent.qualityLabel += `<absdiv data-id='720' class='ytQuality ${
                                            activeQuality == '720'
                                                ? 'abs_active'
                                                : ''
                                        }' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='720'>720p<sup data-id="720">hd</sup></p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='720'>${
                                            def.icons.rightArrow
                                        }</p></absdiv>`;
                                        break;
                                    case 'large':
                                        currentEvent.quality.push(480);
                                        currentEvent.qualityLabel += `<absdiv data-id='480' class='ytQuality ${
                                            activeQuality == '480'
                                                ? 'abs_active'
                                                : ''
                                        }' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='480'>480p<sup></sup></p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='480'>${
                                            def.icons.rightArrow
                                        }</p></absdiv>`;
                                        break;
                                    case 'medium':
                                        currentEvent.quality.push(360);
                                        currentEvent.qualityLabel += `<absdiv data-id='360' class='ytQuality ${
                                            activeQuality == '360'
                                                ? 'abs_active'
                                                : ''
                                        }' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='360'>360p</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='360'>${
                                            def.icons.rightArrow
                                        }</p></absdiv>`;
                                        break;
                                    case 'small':
                                        currentEvent.quality.push(240);
                                        currentEvent.qualityLabel += `<absdiv data-id='240' class='ytQuality ${
                                            activeQuality == '240'
                                                ? 'abs_active'
                                                : ''
                                        }' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='240'>240p</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='240'>${
                                            def.icons.rightArrow
                                        }</p></absdiv>`;
                                        break;
                                    case 'tiny':
                                        currentEvent.quality.push(144);
                                        currentEvent.qualityLabel += `<absdiv data-id='144' class='ytQuality ${
                                            activeQuality == '144'
                                                ? 'abs_active'
                                                : ''
                                        }' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='144'>144p</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='144'>${
                                            def.icons.rightArrow
                                        }</p></absdiv>`;
                                        break;
                                    default:
                                        currentEvent.quality.push(100);
                                        currentEvent.qualityLabel += `<absdiv data-id='100' class='ytQuality ${
                                            activeQuality == '100'
                                                ? 'abs_active'
                                                : ''
                                        }' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='100'>auto</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='100'>${
                                            def.icons.rightArrow
                                        }</p></absdiv>`;
                                }
                            }
                        }
                        settingsOptionBefore.style.display = 'none';
                        settingsOptionAfter.style.display = 'flex';
                        def.fn.html(
                            settingsOptionAfter,
                            currentEvent.qualityLabel,
                        );
                        def.fn.append(settingsOptionAfter, settingsBack);

                        const qualities =
                            document.querySelectorAll('.ytQuality');
                        qualities.forEach((item, index) => {
                            setCallback(item, ytToggleQuality);
                            if (item.getAttribute('data-id') == activeQuality) {
                                def.fn.addClass(item, 'abs_active');
                            }
                        });
                    }

                    function setYtQuality(q) {
                        let quality;
                        switch (q) {
                            case '4320':
                                quality = 'highres';
                                break;
                            case '2160':
                                quality = 'hd2160';
                                break;
                            case '1440':
                                quality = 'hd1440';
                                break;
                            case '1080':
                                quality = 'hd1080';
                                break;
                            case '720':
                                quality = 'hd720';
                                break;
                            case '480':
                                quality = 'large';
                                break;
                            case '360':
                                quality = 'medium';
                                break;
                            case '240':
                                quality = 'small';
                                break;
                            case '144':
                                quality = 'tiny';
                                break;
                            case '100':
                                quality = 'auto';
                                break;
                        }
                        return quality;
                    }

                    function currentEventChecker() {
                        if (currentEvent.isPlaying === 1) {
                            if (playerName == 'youtube') {
                                isPlaying = true;
                                playPauseControl.innerHTML = def.icons.pauseBtn;
                                def.fn.togglePopover(playPauseControl, 'pause');
                                analytics.events.play = true;
                            }
                        } else {
                            if (playerName == 'youtube') {
                                isPlaying = false;
                                controlResize();
                                playPauseControl.innerHTML = def.icons.playBtn;
                                def.fn.togglePopover(playPauseControl, 'play');
                                analytics.events.play = false;
                            }
                        }

                        if (currentEvent.isPlaying === 0) {
                            if (playerName == 'youtube') {
                                isVideoEnded = true;
                                isVideoClose = true;
                                isPlaying = false;
                                videoEnded();
                                def.fn.togglePopover(playPauseControl, 'play');
                                analytics.events.end = true;
                                def.fn.postAnalytics(analytics);
                                analytics.events.end = false;
                            }
                        }
                    }

                    itemQuality.addEventListener('click', () => {
                        ytQualities();
                        setLanguage();
                    });

                    itemSubtitle.addEventListener('click', () => {
                        console.log('RStream');
                    });

                    function ytToggleQuality(e) {
                        activeQuality = e.getAttribute('data-id');
                        const qualities =
                            document.querySelectorAll('.ytQuality');
                        for (let q = 0; q < qualities.length; q++) {
                            def.fn.removeClass(qualities[q], 'abs_active');
                            if (
                                qualities[q].getAttribute('data-id') ==
                                activeQuality
                            ) {
                                ytActualQuality = setYtQuality(
                                    qualities[q].getAttribute('data-id'),
                                );
                                def.fn.addClass(qualities[q], 'abs_active');
                                qualities[q].style.color = 'orange';
                                youtubePlayer.pauseVideo();
                                youtubePlayer.playerInfo.playbackQuality =
                                    setYtQuality(
                                        qualities[q].getAttribute('data-id'),
                                    );
                                youtubePlayer.setPlaybackQuality(
                                    getQualityIndex(
                                        ytQualityText,
                                        setYtQuality(
                                            qualities[q].getAttribute(
                                                'data-id',
                                            ),
                                        ),
                                    ),
                                );
                                youtubePlayer.loadVideoById({
                                    videoId: ytParsedData?.videoId,
                                    startSeconds: currentEvent.currentTime,
                                    suggestedQuality: setYtQuality(
                                        qualities[q].getAttribute('data-id'),
                                    ),
                                });
                                youtubePlayer.playVideo();
                            }
                        }
                    }

                    function renderPlaylist() {
                        playIndex = 0;
                        if (
                            Array.isArray(ytPlaylists) &&
                            ytPlaylists?.length > 0
                        ) {
                            console.log('rendering youtube playlist');
                            ytPlaylists.forEach((item, index) => {
                                var box = def.fn.create('absdiv');

                                if (index == ytPlaylists.length - 1) {
                                    def.fn.css(box, {
                                        display: 'flex',
                                        width: '100%',
                                        height: '35px',
                                        margin: '4px 0px',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                    });
                                } else {
                                    def.fn.css(box, {
                                        display: 'flex',
                                        width: '100%',
                                        height: '35px',
                                        margin: '4px 0px',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                    });
                                }
                                def.fn.attribute(box, {
                                    'data-title': item.title,
                                    'data-videoId': item.id,
                                    'data-index': index,
                                });

                                box.addEventListener('mouseover', () => {
                                    box.style.background =
                                        'rgba(255, 255, 255, 0.1';
                                });
                                box.addEventListener('mouseout', () => {
                                    box.style.background = 'transparent';
                                    ytActiveIndex(playIndex);
                                });

                                box.addEventListener('click', () => {
                                    playIndex = index;
                                    const playItem = ytPlaylists[playIndex];
                                    console.log(
                                        'clicked playlist item',
                                        playItem,
                                    );
                                    title = playItem?.title;
                                    youtubePlayer.loadVideoById({
                                        videoId: playItem.id,
                                        startSeconds: 0,
                                    });
                                    console.log(youtubePlayer);
                                    youtubePlayer.playVideo();
                                    ytActiveIndex(playIndex);
                                });
                                var title = def.fn.create('p');
                                def.fn.css(title, {
                                    fontSize: '12px',
                                    color: '#fff',
                                    'font-family': 'sans-serif',
                                    marginLeft: '4px',
                                    marginBottom: '0px',
                                    padding: '2px 0px',
                                    height: '100%',
                                });
                                def.fn.html(title, item.title.slice(0, 20));
                                def.fn.append(box, title);
                                playlistControl.style.display = 'flex';
                                def.fn.append(playlistContainer, box);
                                ytActiveIndex(index);
                            });
                            title.textContent = ytPlaylists[playIndex]?.title;
                        }
                    }

                    function onPlayerPlaybackQualityChange(event) {
                        event.target.setPlaybackQuality(ytActualQuality);
                        youtubePlayer.setPlaybackQuality(ytActualQuality);
                    }

                    function setNewQuality(q) {
                        youtubePlayer.loadVideoById({
                            videoId: youtubePlayer.videoId,
                            startSeconds: 0,
                            suggestedQuality: q,
                        });
                        youtubePlayer.playVideo();
                    }

                    function loadingVideo(event, q) {
                        if (event !== undefined && event !== null) {
                            event.target.cueVideoById({
                                videoId: q,
                                startSeconds: 0,
                            });
                        }
                        youtubePlayer.playVideo();
                        def.fn.getAnalytics();
                    }

                    function onPlayerReady(event) {
                        ytEvent = event;
                        youTubePlayerActive();
                        getFullDuration();
                        loadingVideo(event, ytParsedData?.videoId);
                        renderPlaylist();
                    }

                    function onPlayerStateChange(event) {
                        var videoStatuses = Object.entries(
                            window.YT.PlayerState,
                        );
                        const state = event.target.getPlayerState();
                    }
                    setDefaultVolume();
                }

                if (document.readyState !== 'loading') {
                    console.info(
                        `document.readyState ==>`,
                        document.readyState,
                    );
                    loadVideo();
                } else {
                    document.addEventListener('DOMContentLoaded', function () {
                        console.info(
                            `DOMContentLoaded ==>`,
                            document.readyState,
                        );
                        loadVideo();
                    });
                }

                function ytPlaylist(playlistId) {
                    const apiKey = premium.ytAPIKey ?? null;
                    if (!apiKey) return;
                    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;

                    fetch(url)
                        .then((response) => response.json())
                        .then((data) => {
                            ytPlaylists = data.items.map((item) => ({
                                id: item.contentDetails.videoId,
                                title: item.snippet.title,
                                thumbnail:
                                    item.snippet.thumbnails?.medium?.url ||
                                    item.snippet.thumbnails?.default?.url,
                                channelTitle:
                                    item.snippet.videoOwnerChannelTitle,
                                publishedAt: item.snippet.publishedAt,
                            }));
                        })
                        .catch((error) => {
                            console.error('Error fetching playlist:', error);
                        });
                }

                function youtubeID(URL) {
                    let url = encrypt ? atob(URL) : URL;

                    try {
                        const playlistMatch = url.match(/[?&]list=([^&]+)/);
                        const playlistId = playlistMatch
                            ? playlistMatch[1]
                            : null;

                        let videoId = null;

                        const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
                        if (shortMatch) {
                            videoId = shortMatch[1];
                        }

                        const watchMatch = url.match(/[?&]v=([^&]+)/);
                        if (watchMatch) {
                            videoId = watchMatch[1];
                        }

                        const shortsMatch = url.match(/shorts\/([^?&]+)/);
                        if (shortsMatch) {
                            videoId = shortsMatch[1];
                        }

                        if (videoId && playlistId) {
                            ytPlaylist(playlistId);
                            ytParsedData = {
                                type: 'video_playlist',
                                videoId: videoId,
                                playlistID: playlistId,
                            };
                        }
                        if (playlistId && !videoId) {
                            ytPlaylist(playlistId);
                            ytParsedData = {
                                type: 'playlist',
                                videoId: videoId,
                                playlistId: playlistId,
                            };
                        }
                        if (videoId) {
                            ytParsedData = { type: 'video', videoId: videoId };
                        }
                    } catch (e) {
                        console.error('Invalid YouTube URL:', url, e);
                        return null;
                    }
                }
            }

            if (isVimeo && isVimeo?.id !== undefined) {
                playerName = 'vimeo';
                console.log('Vimeo video start');
                function loadVimeo() {
                    isVideoClose = false;
                    video.style.display = 'none';
                    vimeoPlayer.style.display = 'block';
                    vimeoClick.style.display = 'block';
                    let vmqualityLabel = '';

                    (function loadVimeoScript() {
                        const tag = document.createElement('script');
                        tag.src = 'https://player.vimeo.com/api/player.js';
                        const firstScriptTag =
                            document.getElementsByTagName('script')[0];
                        firstScriptTag.parentNode.insertBefore(
                            tag,
                            firstScriptTag,
                        );
                        tag.onload = setupVimeo;
                    })();

                    let Vmoptions = null;

                    if (
                        isVimeo?.id !== undefined &&
                        isVimeo?.hash === undefined
                    ) {
                        Vmoptions = {
                            id: isVimeo?.id,
                            width: vimeoPlayer.offsetWidth,
                            height: vimeoPlayer.offsetHeight,
                            controls: false,
                            responsive: true,
                            chapters: true,
                        };
                    } else {
                        Vmoptions = {
                            url: premium?.src,
                            width: vimeoPlayer.offsetWidth,
                            height: vimeoPlayer.offsetHeight,
                            controls: false,
                            responsive: true,
                            chapters: true,
                        };
                    }

                    function setupVimeo() {
                        vmPlayer = new Vimeo.Player(vmFrameId, Vmoptions);

                        vmPlayer
                            .getChapters()
                            .then(function (chapters) {
                                chapterList = chapters;
                                chapterActive = true;
                                makeChapterList();
                            })
                            .catch(function (error) {
                                chapterActive = false;
                            });

                        vmPlayer.on('play', function () {
                            vmActive = true;
                            isPlaying = true;
                            durationCurrent.innerHTML =
                                formatDuration(vmCurrentTime);
                            analytics.events.play = true;
                        });
                        vmPlayer.on('pause', function () {
                            vmActive = false;
                            durationCurrent.innerHTML =
                                formatDuration(vmCurrentTime);
                            analytics.events.play = true;
                        });

                        function getVmQuality() {
                            vmqualityLabel = '';
                            def.fn.html(settingsOptionAfter, '');
                            vmPlayer
                                .getQualities()
                                .then(function (qualities) {
                                    qualities.forEach((item, index) => {
                                        vmqualityLabel += `<absdiv data-id='${
                                            item.id
                                        }' class='vmQuality ${
                                            activeQuality == item.id
                                                ? 'abs_active'
                                                : ''
                                        }' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                                            item.label
                                        }</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                                            def.icons.rightArrow
                                        }</p></absdiv>`;
                                    });
                                    def.fn.html(
                                        settingsOptionAfter,
                                        vmqualityLabel,
                                    );
                                    settingsOptionBefore.style.display = 'none';
                                    settingsOptionAfter.style.display = 'flex';
                                    def.fn.append(
                                        settingsOptionAfter,
                                        settingsBack,
                                    );

                                    const vqualities =
                                        settingsOptionAfter.querySelectorAll(
                                            '.vmQuality',
                                        );
                                    vqualities.forEach((item, index) => {
                                        setCallback(item, vmQualitySet);
                                        if (
                                            item.getAttribute('data-id') ==
                                            activeQuality
                                        ) {
                                            def.fn.addClass(item, 'abs_active');
                                        }
                                    });
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                        }

                        itemQuality.addEventListener('click', () => {
                            if (playerName == 'vimeo') {
                                getVmQuality();
                                setLanguage();
                            }
                        });

                        function vmSubtitles() {
                            vmPlayer
                                .getTextTracks()
                                .then(function (tracks) {
                                    hlsSubtitle = '';
                                    tracks.forEach((item, index) => {
                                        const itemSub = `<absdiv data-id='${
                                            item.language
                                        }' class='abs_subtitle ${
                                            activeSubtitle == item.language
                                                ? 'abs_active'
                                                : ''
                                        }' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                                            item.label
                                        }</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                                            def.icons.rightArrow
                                        }</p></absdiv>`;
                                        hlsSubtitle += itemSub;
                                    });

                                    settingsOptionBefore.style.display = 'none';
                                    settingsOptionAfter.style.display = 'flex';
                                    def.fn.html(
                                        settingsOptionAfter,
                                        hlsSubtitle,
                                    );
                                    def.fn.append(
                                        settingsOptionAfter,
                                        settingsBack,
                                    );

                                    const qualities =
                                        document.querySelectorAll(
                                            '.abs_subtitle',
                                        );
                                    qualities.forEach((item, index) => {
                                        setCallback(item, vmSubtitleSet);
                                        if (
                                            item.getAttribute('data-id') ==
                                            activeQuality
                                        ) {
                                            def.fn.addClass(item, 'abs_active');
                                        }
                                    });
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                        }

                        function makeChapterList() {
                            console.log('Chapters:', chapterList);
                            chapterList.forEach((item, index) => {
                                var box = def.fn.create('absdiv');
                                if (index == chapterList.length - 1) {
                                    def.fn.css(box, {
                                        display: 'flex',
                                        width: '100%',
                                        height: '35px',
                                        margin: '4px 0px',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                    });
                                } else {
                                    def.fn.css(box, {
                                        display: 'flex',
                                        width: '100%',
                                        height: '35px',
                                        margin: '4px 0px',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                    });
                                }
                                def.fn.attribute(box, {
                                    'data-title': item.title,
                                    'data-start': item.startTime,
                                    'data-index': item.index - 1,
                                });

                                box.addEventListener('mouseover', () => {
                                    box.style.background =
                                        'rgba(255, 255, 255, 0.1';
                                });
                                box.addEventListener('mouseout', () => {
                                    box.style.background = 'transparent';
                                });

                                box.addEventListener('click', () => {
                                    chapterIndex = index;
                                    vmPlayer
                                        .setCurrentTime(item.startTime)
                                        .then(function (seconds) {
                                            console.log(
                                                'Chapter changed to: ' +
                                                    item.title +
                                                    ' at ' +
                                                    seconds +
                                                    ' seconds ',
                                            );
                                            vmPlayer.play();
                                        })
                                        .catch(function (error) {
                                            console.log(
                                                'Error in chapter playback',
                                            );
                                        });
                                });
                                var title = def.fn.create('p');
                                def.fn.css(title, {
                                    fontSize: '12px',
                                    color: '#fff',
                                    'font-family': 'sans-serif',
                                    marginLeft: '4px',
                                    marginBottom: '0px',
                                    padding: '2px 0px',
                                });
                                def.fn.html(title, item.title.slice(0, 20));
                                def.fn.append(box, title);
                                playlistControl.style.display = 'flex';
                                def.fn.append(playlistContainer, box);
                            });
                        }

                        itemSubtitle.addEventListener('click', () => {
                            if (playerName == 'vimeo') {
                                vmSubtitles();
                                setLanguage();
                            }
                        });

                        vmPlayer
                            .disableTextTrack()
                            .then(function () {
                                console.log('Disabled captions');
                            })
                            .catch(function (error) {
                                console.log(error);
                            });

                        vmPlayer
                            .getDuration()
                            .then(function (duration) {
                                vmDuration = duration;
                                getFullDuration(vmDuration);
                                durationText.innerHTML =
                                    formatDuration(vmDuration);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });

                        vmPlayer.on('timeupdate', function (crTime) {
                            vmCurrentTime = crTime.seconds;
                            durationCurrent.innerHTML =
                                formatDuration(vmCurrentTime);
                            getCurrentDuration();
                            buffered();

                            if (chapterList.length > 0) {
                                vmPlayer
                                    .getCurrentChapter()
                                    .then(function (chapter) {
                                        currentChapter = chapter;
                                        chapterIndex = chapter.index - 1;
                                    })
                                    .catch(function (error) {});
                            }
                        });

                        vmPlayer.on('ended', function (data) {
                            isVideoClose = true;
                            isVideoEnded = true;
                            videoEnded();
                            analytics.events.play = false;
                            analytics.events.end = true;
                            def.fn.postAnalytics(analytics);
                            analytics.events.end = false;
                        });

                        let vmsoundWidth =
                            localStorage.getItem('abs_active_sound') ?? 20;
                        vmPlayer
                            .setVolume(vmsoundWidth / 100)
                            .then(function (volume) {
                                return;
                            })
                            .catch(function (error) {
                                console.log(error);
                            });

                        function buffered() {
                            vmPlayer
                                .getBuffered()
                                .then(function (buffered) {
                                    if (playerName == 'vimeo') {
                                        progressBuffer.style.width =
                                            parseInt(
                                                buffered[0][1] *
                                                    progress.offsetWidth,
                                            ) /
                                                vmDuration +
                                            buffered[0][1] +
                                            'px';
                                    }
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                        }

                        function vmQualitySet(e) {
                            activeQuality = e.getAttribute('data-id');
                            const qualities =
                                document.querySelectorAll('.vmQuality');
                            qualities.forEach((item, index) => {
                                def.fn.removeClass(item, 'abs_active');
                                if (
                                    item.getAttribute('data-id') ==
                                    activeQuality
                                ) {
                                    def.fn.addClass(item, 'abs_active');
                                }
                            });

                            vmPlayer
                                .setQuality(activeQuality)
                                .then(function (quality) {
                                    console.log(quality);
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                        }

                        function vmSubtitleSet(e) {
                            activeSubtitle = e.getAttribute('data-id');
                            const qualities =
                                document.querySelectorAll('.abs_subtitle');
                            qualities.forEach((item, index) => {
                                def.fn.removeClass(item, 'abs_active');
                                if (
                                    item.getAttribute('data-id') ==
                                    activeSubtitle
                                ) {
                                    def.fn.addClass(item, 'abs_active');
                                }
                            });

                            vmPlayer
                                .enableTextTrack(activeSubtitle)
                                .then(function (track) {
                                    console.log(track);
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                        }
                        def.fn.getAnalytics();
                    }
                }
                if (document.readyState !== 'loading') {
                    console.info(
                        `document.readyState ==>`,
                        document.readyState,
                    );
                    loadVimeo();
                } else {
                    document.addEventListener('DOMContentLoaded', function () {
                        console.info(
                            `DOMContentLoaded ==>`,
                            document.readyState,
                        );
                        loadVimeo();
                    });
                }
            }

            if (isCast && isCastEnable == false) {
                isCastEnable = true;
                console.log('Cast starting');
                castControl.style.display = 'flex';
                function loadCast() {
                    (function loadAdsScript() {
                        const tag = document.createElement('script');
                        tag.src =
                            'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1';
                        const firstScriptTag =
                            document.getElementsByTagName('script')[0];
                        firstScriptTag.parentNode.insertBefore(
                            tag,
                            firstScriptTag,
                        );
                        tag.onload = setupCast;
                    })();

                    function setupCast() {
                        var initializeCastApi = function () {
                            console.log('initializeCastApi');

                            var sessionRequest = new chrome.cast.SessionRequest(
                                chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
                            );
                            var apiConfig = new chrome.cast.ApiConfig(
                                sessionRequest,
                                sessionListener,
                                receiverListener,
                            );
                            chrome.cast.initialize(
                                apiConfig,
                                onInitSuccess,
                                onError,
                            );
                        };

                        if (!chrome.cast || !chrome.cast.isAvailable) {
                            setTimeout(initializeCastApi, 1000);
                        }

                        function onInitSuccess() {
                            console.log('onInitSuccess');
                        }

                        function onError(e) {
                            console.log('onError', e);
                        }

                        function sessionListener(e) {
                            console.log('sessionListener', e);
                        }

                        function receiverListener(availability) {
                            console.log('receiverListener', availability);

                            if (
                                availability ===
                                chrome.cast.ReceiverAvailability.AVAILABLE
                            ) {
                                console.log('cast disabled');
                            }
                        }

                        function onSessionRequestSuccess(session) {
                            console.log('onSessionRequestSuccess', session);

                            var mediaInfo = new chrome.cast.media.MediaInfo(
                                url,
                                'video/mp4',
                            );
                            var request = new chrome.cast.media.LoadRequest(
                                mediaInfo,
                            );
                            session.loadMedia(
                                request,
                                onMediaLoadSuccess,
                                onError,
                            );
                        }

                        function onMediaLoadSuccess(e) {
                            console.log('onMediaLoadSuccess', e);
                        }
                        castControl.addEventListener('click', () => {
                            chrome.cast.requestSession(
                                onSessionRequestSuccess,
                                onError,
                            );
                        });
                    }
                }

                if (document.readyState !== 'loading') {
                    console.info(
                        `document.readyState ==>`,
                        document.readyState,
                    );
                    loadCast();
                } else {
                    document.addEventListener('DOMContentLoaded', function () {
                        console.info(
                            `DOMContentLoaded ==>`,
                            document.readyState,
                        );
                        loadCast();
                    });
                }
            }

            function v360() {
                if (premium.v360) {
                    console.log('load360 video');
                    function load360() {
                        // openControls();
                        (function loadYoutubeIFrameApiScript() {
                            const tag = document.createElement('script');
                            tag.src =
                                'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
                            const firstScriptTag =
                                document.getElementsByTagName('script')[0];
                            firstScriptTag.parentNode.insertBefore(
                                tag,
                                firstScriptTag,
                            );

                            tag.onload = setupPlayer;
                        })();

                        function setupPlayer() {
                            const scene = new THREE.Scene();
                            const width = video.offsetWidth;
                            const height = video.offsetHeight;
                            const camera = new THREE.PerspectiveCamera(
                                75,
                                width / height,
                                1,
                                100,
                            );
                            const renderer = new THREE.WebGLRenderer();
                            renderer.setSize(width, height);
                            player360.appendChild(renderer.domElement);
                            youtubeClick.style.display = 'none';
                            const geometry = new THREE.SphereGeometry(
                                50,
                                64,
                                32,
                            );
                          
                            if(playerName == 'mp4' || playerName == 'hls'){
                              VRvideo = video;
                            }else{
                              VRvideo = document.createElement('video');
                              VRvideo.src = url;
                              VRvideo.playsInline = true;
                              VRvideo.crossOrigin = 'anonymous';
                            }


                            const texture = new THREE.VideoTexture(VRvideo);
                            const material = new THREE.MeshBasicMaterial({
                                map: texture,
                            });
                            material.side = THREE.BackSide;
                            const mesh = new THREE.Mesh(geometry, material);
                            scene.add(mesh);
                            renderer.setAnimationLoop(() =>
                                renderer.render(scene, camera),
                            );
                            const clamp = (v, min, max) =>
                                Math.max(min, Math.min(v, max));
                            renderer.domElement.addEventListener(
                                'wheel',
                                (e) => {
                                    camera.fov = clamp(
                                        camera.fov + e.deltaY / 10,
                                        10,
                                        120,
                                    );
                                    camera.updateProjectionMatrix();
                                },
                            );
                            let mouseDown = false;
                            renderer.domElement.addEventListener(
                                'mousedown',
                                (e) => {
                                    if (e.button === 0) mouseDown = true;
                                },
                            );
                            window.addEventListener('mouseup', (e) => {
                                if (e.button === 0) mouseDown = false;
                            });
                            window.addEventListener('mousemove', (e) => {
                                if (!mouseDown) return;
                                const { movementX, movementY } = e;
                                const rotateX = movementY / 100;
                                const rotateY = movementX / 100;
                                camera.rotateX(rotateX);
                                camera.rotateY(rotateY);
                            });

                            videoEvent(VRvideo);
                        }
                    }
                    if (document.readyState !== 'loading') {
                        console.info(
                            `document.readyState ==>`,
                            document.readyState,
                        );
                        load360();
                    } else {
                        document.addEventListener(
                            'DOMContentLoaded',
                            function () {
                                console.info(
                                    `DOMContentLoaded ==>`,
                                    document.readyState,
                                );
                                load360();
                            },
                        );
                    }
                    def.fn.getAnalytics();
                }
            }

            function runADS() {
                forcePause();
                if (premium.vast && premium.vast != '') {
                    console.log('Video ad start');
                    isVast = true;
                    adsLogic();
                    controls.style.display = 'none';
                    adsHandler.style.display = 'flex';
                    progress.style.display = 'none';
                    durationArea.style.display = 'none';
                    function loadAds() {
                        (function loadAdsScript() {
                            const tag = document.createElement('script');
                            tag.src =
                                'https://imasdk.googleapis.com/js/sdkloader/ima3.js';
                            const firstScriptTag =
                                document.getElementsByTagName('script')[0];
                            firstScriptTag.parentNode.insertBefore(
                                tag,
                                firstScriptTag,
                            );
                            tag.onload = setupAds;
                        })();
                        function setupAds() {
                            let adsManager;
                            let adsLoader;
                            let adDisplayContainer;
                            let intervalTimer;
                            let videoContent;
                            function init() {
                                videoContent = adsContentVideo;
                                videoContent.volume = 0.2;
                                isActiveAdd = true;
                                if (isVast == true) {
                                    adsHandler.addEventListener('click', () => {
                                        playAds();
                                        adsHandler.style.display = 'none';
                                        centerPlay.style.display = 'none';
                                    });
                                    adsHandler.addEventListener('click', () => {
                                        onContentResumeRequested();
                                    });
                                }

                                setUpIMA();
                            }
                            function setUpIMA() {
                                if(!window?.google?.ima){
                                    console.log(window.google);
                                    isActiveAdd = false;
                                    closeCounter();
                                    contentRelease();
                                }
                                try {
                                    createAdDisplayContainer();
                                    google.ima.settings.setVpaidMode(
                                        google.ima.ImaSdkSettings.VpaidMode
                                            .ENABLED,
                                    );
                                    adsLoader = new google.ima.AdsLoader(
                                        adDisplayContainer,
                                    );
                                    adsLoader.addEventListener(
                                        google.ima.AdsManagerLoadedEvent.Type
                                            .ADS_MANAGER_LOADED,
                                        onAdsManagerLoaded,
                                        false,
                                    );
                                    adsLoader.addEventListener(
                                        google.ima.AdErrorEvent.Type.AD_ERROR,
                                        onAdError,
                                        false,
                                    );

                                    const contentEndedListener = function () {
                                        adsLoader.contentComplete();
                                    };
                                    videoContent.onended = contentEndedListener;

                                    const adsRequest =
                                        new google.ima.AdsRequest();
                                    adsRequest.adTagUrl = premium.vast;

                                    adsRequest.linearAdSlotWidth =
                                        adsContainer.offsetWidth;
                                    adsRequest.linearAdSlotHeight =
                                        adsContainer.offsetHeight;

                                    adsRequest.nonLinearAdSlotWidth =
                                        adsContainer.offsetWidth;
                                    adsRequest.nonLinearAdSlotHeight =
                                        adsContainer.offsetHeight;

                                    adsLoader.requestAds(adsRequest);
                                } catch (error) {
                                    isActiveAdd = false;
                                    closeCounter();
                                    contentRelease();
                                }
                            }
                            function createAdDisplayContainer() {
                                adDisplayContainer =
                                    new google.ima.AdDisplayContainer(
                                        document.getElementById('loader'),
                                        videoContent,
                                    );
                            }
                            function playAds() {
                                if (isVast == true) {
                                    videoContent.load();
                                    adDisplayContainer.initialize();
                                    adsContainer.style.display = 'block';
                                    adsContent.style.display = 'block';
                                    adsContentVideo.style.zIndex = 4;
                                    adsContentVideo.style.display = 'block';
                                    try {
                                        adsManager.init(
                                            adsContainer.offsetWidth,
                                            adsContainer.offsetHeight,
                                            google.ima.ViewMode.NORMAL,
                                        );
                                        adsManager.start();
                                    } catch (adError) {
                                        isActiveAdd = false;
                                        contentRelease();
                                    }
                                }
                            }
                            function onAdsManagerLoaded(adsManagerLoadedEvent) {
                                const adsRenderingSettings =
                                    new google.ima.AdsRenderingSettings();
                                adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
                                adsManager =
                                    adsManagerLoadedEvent.getAdsManager(
                                        videoContent,
                                        adsRenderingSettings,
                                    );

                                adsManager.addEventListener(
                                    google.ima.AdErrorEvent.Type.AD_ERROR,
                                    onAdError,
                                );
                                adsManager.addEventListener(
                                    google.ima.AdEvent.Type
                                        .CONTENT_PAUSE_REQUESTED,
                                    onContentPauseRequested,
                                );
                                adsManager.addEventListener(
                                    google.ima.AdEvent.Type
                                        .CONTENT_RESUME_REQUESTED,
                                    onContentResumeRequested,
                                );
                                adsManager.addEventListener(
                                    google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
                                    onAdEvent,
                                );

                                adsManager.addEventListener(
                                    google.ima.AdEvent.Type.LOADED,
                                    onAdEvent,
                                );
                                adsManager.addEventListener(
                                    google.ima.AdEvent.Type.STARTED,
                                    onAdEvent,
                                );
                                adsManager.addEventListener(
                                    google.ima.AdEvent.Type.COMPLETE,
                                    onAdEvent,
                                );
                                adsManager.addEventListener(
                                    google.ima.AdEvent.Type.CLICK,
                                    onAdEvent,
                                );

                                adsManager.addEventListener(
                                    google.ima.AdEvent.Type.SKIPPED,
                                    onAdEvent,
                                );
                            }

                            function onAdEvent(adEvent) {
                                const ad = adEvent.getAd();
                                if (adEvent.type == 'loaded') {
                                    if (!ad.isLinear()) {
                                        videoContent.play();
                                    }
                                } else if (adEvent.type === google.ima.AdEvent.Type.SKIPPED) {

                                    isActiveAdd = false;
                                    contentRelease();
                                }else if (adEvent.type == 'start') {
                                    if (ad.isLinear()) {
                                        intervalTimer = setInterval(
                                            function () {},
                                            300,
                                        );
                                    }
                                } else if (
                                    adEvent.type == 'complete' ||
                                    adEvent.type == 'allAdsCompleted'
                                ) {
                                    contentRelease();
                                    forcePlay();
                                    if (ad.isLinear()) {
                                        clearInterval(intervalTimer);
                                    }
                                    isActiveAdd = false;
                                } else if (adEvent.type == 'click') {
                                    onContentResumeRequested();
                                }
                            }

                            function onAdError(adErrorEvent) {
                                console.log(adErrorEvent)
                                contentRelease();
                                isActiveAdd = false;

                                if (adsManager) {
                                    adsManager.destroy();
                                }
                            }

                            function onContentPauseRequested() {
                                videoContent.play();
                            }

                            function onContentResumeRequested() {
                                videoContent.play();
                            }

                            init();
                        }
                    }

                    function xmlVast() {
                        var vast = premium.encrypt
                            ? atob(premium.vast)
                            : premium.vast;
                        fetch(vast)
                            .then((response) => response.text())
                            .then((response) => {
                                if (
                                    response &&
                                    response != '' &&
                                    response != 'notFound'
                                ) {
                                    isActiveAdd = true;
                                    let myXml = new DOMParser().parseFromString(
                                        response,
                                        'text/xml',
                                    );
                                    let ads =
                                        myXml.firstChild.innerHTML ?? undefined;
                                    let adsXml =
                                        new DOMParser().parseFromString(
                                            ads,
                                            'text/xml',
                                        ) ?? undefined;
                                    if (adsXml) {
                                        let allAds =
                                            adsXml.querySelectorAll(
                                                'Creative',
                                            ) ?? [];
                                        if (allAds) {
                                            allAds.forEach((item, index) => {
                                                let time = xmlLinkparser(
                                                    item.querySelector(
                                                        'Duration',
                                                    )?.textContent ?? undefined,
                                                );
                                                let vastAds = xmlLinkparser(
                                                    item.querySelector(
                                                        'MediaFile',
                                                    )?.innerHTML ?? undefined,
                                                );
                                                let vastAdsType =
                                                    item
                                                        .querySelector(
                                                            'MediaFile',
                                                        )
                                                        ?.getAttribute(
                                                            'type',
                                                        ) ?? undefined;
                                                let impressions = xmlLinkparser(
                                                    adsXml.querySelector(
                                                        'Impression',
                                                    )?.innerHTML ?? undefined,
                                                );
                                                let Plays = xmlLinkparser(
                                                    adsXml.querySelector(
                                                        'Plays',
                                                    )?.innerHTML ?? undefined,
                                                );
                                                let Clicks = xmlLinkparser(
                                                    adsXml.querySelector(
                                                        'ClickTracking',
                                                    )?.innerHTML ?? undefined,
                                                );
                                                let vastImg = xmlLinkparser(
                                                    item.querySelector(
                                                        'ClickTracking',
                                                    )?.innerHTML ?? undefined,
                                                );
                                                let vastReffer = xmlLinkparser(
                                                    item.querySelector(
                                                        'ClickThrough',
                                                    )?.innerHTML ?? undefined,
                                                );
                                                vastStart(
                                                    vastAds,
                                                    vastAdsType,
                                                    vastReffer,
                                                    vastImg,
                                                    time,
                                                    Clicks,
                                                    Plays,
                                                    impressions,
                                                );
                                            });
                                        }
                                    }
                                } else {
                                    isActiveAdd = false;
                                    contentRelease();
                                    console.warn('No XML ads found');
                                }
                            })
                            .catch((error) => {
                                isActiveAdd = false;
                                contentRelease();
                                console.warn('ads running errors = ' + error);
                            });

                        function xmlLinkparser(link) {
                            if (link) {
                                let oldLink = link.replace('<![CDATA[', '');
                                let newLink = oldLink.replace(']]>', '');
                                return newLink.trim();
                            } else {
                                return link;
                            }
                        }

                        function vastImpressions(url) {
                            if (url) {
                                def.fn.getAjax(url, (response) => {
                                    console.log(response);
                                });
                            }
                        }

                        function clickHandler(url, clicks) {
                            if (window.open(url, '_blank')) {
                                def.fn.getAjax(
                                    clicks + '&data=1',
                                    (response) => {
                                        console.log(response);
                                    },
                                );
                            }
                        }

                        function vastStart(
                            ads,
                            type,
                            url,
                            img,
                            duration,
                            clicks,
                            Plays,
                            impressions,
                        ) {
                            if (ads != undefined) {
                                def.fn.attribute(adsContentVideo, {
                                    src: ads,
                                    type: type,
                                    poster: img,
                                });
                                let isClick = 'false';
                                let isAdsRunning = false;
                                adsHandler.style.display = 'none';
                                adsContainer.style.display = 'block';
                                adsContent.style.display = 'block';
                                adsContentVideo.style.display = 'block';
                                adsTimer.style.display = 'flex';
                                adsContentVideo.style.zIndex = 4;
                                let adsTime = duration.substring(
                                    duration.lastIndexOf(':') + 1,
                                );
                                adsContentVideo.play()
                                    ? true
                                    : adsContentVideo.load();
                                try {
                                    adsContentVideo.muted = true;
                                    adsContentVideo.play();
                                } catch (error) {
                                    console.log(error);
                                    adsHandler.style.display = 'flex';
                                    adsHandler.addEventListener('click', () => {
                                        adsHandler.style.display = 'none';
                                        adsContentVideo.play();
                                    });
                                }
                                adsContentVideo.addEventListener(
                                    'click',
                                    () => {
                                        if (isAdsRunning == true) {
                                            clickHandler(url, clicks);
                                        } else {
                                            adsContentVideo.play();
                                            adsHandler.style.display = 'none';
                                        }
                                    },
                                );
                                adsContentVideo.addEventListener(
                                    'ended',
                                    () => {
                                        isActiveAdd = false;
                                        contentRelease();
                                        def.fn.getAjax(Plays, (response) => {
                                            console.log(response);
                                        });
                                    },
                                );
                                adsContentVideo.addEventListener(
                                    'playing',
                                    () => {
                                        adsHandler.style.display = 'none';
                                    },
                                );
                                adSkip.addEventListener(
                                    'click', function(){
                                        contentRelease();
                                        forcePlay();
                                    });
                                adsContentVideo.addEventListener(
                                    'timeupdate',
                                    () => {
                                        forcePause();
                                        isAdsRunning = true;
                                        let adsCurrentTime = Math.floor(
                                            adsContentVideo.currentTime,
                                        );

                                        if (adsCurrentTime > 10) {
                                            adSkip.style.display = 'flex';
                                            adsTimer.style.display = 'none';
                                            def.fn.html(
                                                adSkip,
                                                `Skip in ${
                                                    (adsTime < 10
                                                        ? 10
                                                        : adsTime) -
                                                    adsCurrentTime
                                                }s `,
                                            );
                                            vastImpressions(impressions);
                                        } else {
                                            adSkip.style.display = 'none';
                                            adsTimer.style.display = 'flex';
                                            def.fn.html(
                                                adsTimer,
                                                (adsTime < 10 ? 10 : adsTime) -
                                                    adsCurrentTime,
                                            );
                                        }
                                    },
                                );
                            }
                        }
                    }

                    if (document.readyState !== 'loading') {
                        console.info(
                            `document.readyState ==>`,
                            document.readyState,
                        );
                        let adsExt = extChecker(premium.vast);
                        console.log('ads ', adsExt);
                        if (!adsExt) {
                            loadAds();
                        } else {
                            if (adsExt.indexOf('xml') != -1) {
                                xmlVast();
                            } else {
                                loadAds();
                            }
                        }
                    } else {
                        document.addEventListener(
                            'DOMContentLoaded',
                            function () {
                                console.info(
                                    `DOMContentLoaded ==>`,
                                    document.readyState,
                                );
                                let adsExt = extChecker(premium.vast);
                                if (adsExt && adsExt.indexOf('xml') != -1) {
                                    xmlVast();
                                } else {
                                    loadAds();
                                }
                            },
                        );
                    }
                } else {
                    isVast = false;
                    if (premium?.autoplay) forcePlay();
                }
            }

            function adsWaterFall() {
                if (premium.vast && premium.vast != '') {
                    isVast = true;
                    runADS();
                }
            }
            adsWaterFall();

            function adsLogic() {
                const adsCounter = setInterval(() => {
                    if (currentDuration == 50 && isMidroll == false) {
                        isMidroll = true;
                        clearInterval(adsCounter);
                        runADS();
                    }
                }, 1000);
            }

            if (xplayer.indexOf(playerName) == -1) {
                xplayer.push(playerName);
            }
            if (premium.v360) {
              v360();
            }
            hideXplayer(url);
            setTimeout(() => {
                defaultPlayback(premium?.playback?.default ?? 1);
                setDefaultVolume();
                !premium?.autoplay ? forcePause() : forcePlay();
            }, 500);
        }

        function loadAudioTracks(audioTracks) {
            hlsAudio = '';
            if (audioTracks != undefined) {
                audioTracks.forEach((item, index) => {
                    const items = `<absdiv data-id='${index}' class='abs_audio ${
                        activeAudio == index ? 'abs_active' : ''
                    }' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='${index}'>${
                        item.name + ' ' + item.groupId
                    }</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                        def.icons.rightArrow
                    }</p></absdiv>`;
                    hlsAudio += items;
                });
                def.fn.html(settingsOptionAfter, hlsAudio);
                settingsOptionBefore.style.display = 'none';
                settingsOptionAfter.style.display = 'flex';
                def.fn.append(settingsOptionAfter, settingsBack);
            } else {
                return false;
            }
        }

        function loadCaptions(subtitleTracks) {
            hlsSubtitle = '';
            def.fn.html(settingsOptionAfter, '');
            if (subtitleTracks != undefined && Array.isArray(subtitleTracks)) {
                subtitleTracks.forEach((item, index) => {
                    const itemSub = `<absdiv data-id='${index}' class='abs_subtitle ${
                        activeSubtitle == index ? 'abs_active' : ''
                    }' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                        item.name
                    }</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                        def.icons.rightArrow
                    }</p></absdiv>`;
                    hlsSubtitle += itemSub;
                    hlsSubtitleUrl.push(item.url);
                    hlsSubtitleType.push(item.type);
                });
                def.fn.html(settingsOptionAfter, hlsSubtitle);
                def.fn.append(settingsOptionAfter, settingsBack);
                settingsOptionBefore.style.display = 'none';
                settingsOptionAfter.style.display = 'flex';

                const hlsCaptions = document.querySelectorAll('.abs_subtitle');
                hlsCaptions.forEach((item, index) => {
                    setCallback(item, hlsToggleCaption);
                });
            } else {
                return false;
            }
        }

        function loadNativeTracks() {
            if (video.audioTracks) {
                loadAudioTracks(video.audioTracks);
            }
            if (video.textTracks) {
                loadCaptions(video.textTracks);
            }
        }

        function hideXplayer(url) {
            stopPlayer();
            if (
                playerName == 'youtube' &&
                youtubePlayer != undefined &&
                (isYoutube == 'yTb') | (isYoutube != undefined)
            ) {
                def.fn.id(ytIframeId).style.display = 'flex';
                video.style.display = 'none';
                vimeoPlayer.style.display = 'none';
                setTimeout(function () {
                    premium?.autoplay
                        ? (youtubePlayer.playVideo(), (isPlaying = true))
                        : true;
                }, 300);
            }

            if (
                (playerName == 'mp4') |
                (playerName == 'hls') |
                (playerName == 'dash') |
                (playerName == 'flv') |
                (playerName == 'mkv')
            ) {
                video.style.display = 'flex';
                def.fn.id(ytIframeId).style.display = 'none';
                vimeoPlayer.style.display = 'none';
                vimeoClick.style.display = 'none';
                setTimeout(function () {
                    premium?.autoplay
                        ? (video.play(), (isPlaying = true))
                        : true;
                }, 300);
            }

            if (playerName == 'vimeo') {
                def.fn.id(ytIframeId).style.display = 'none';
                video.style.display = 'none';
                vimeoPlayer.style.display = 'block';
                vimeoClick.style.display = 'block';

                if (vmPlayer != undefined && vmPlayer != null) {
                    vmPlayer.loadVideo(url).then(function (url) {
                        premium?.autoplay
                            ? (vmPlayer.play(), (isPlaying = true))
                            : true;
                    });
                    setTimeout(function () {
                        vmPlayer.play();
                    }, 300);
                }
                try {
                    setTimeout(function () {
                        premium?.autoplay
                            ? (vmPlayer.play(), (isPlaying = true))
                            : true;
                    }, 500);

                    if (isPlaying) {
                        setTimeout(() => {
                            centerPlay.style.display = 'none';
                        }, 500);
                    } else {
                        centerPlay.style.display = 'inline-block';
                    }
                } catch (error) {
                    console.log('Vimeo player is undefined');
                }
            }
        }

        function stopPlayer() {
            xplayer.forEach((xxplayer) => {
                if (
                    (xxplayer == 'mp4') |
                    (xxplayer == 'hls') |
                    (xxplayer == 'dash') |
                    (xxplayer == 'flv') |
                    (xxplayer == 'mkv')
                ) {
                    video.pause();
                }

                if (xxplayer == 'vimeo' && vmPlayer != undefined) {
                    vmPlayer.pause();
                }

                if (
                    xxplayer == 'youtube' &&
                    youtubePlayer != undefined &&
                    (isYoutube == 'yTb') | (isYoutube != undefined)
                ) {
                    youtubePlayer.pauseVideo();
                }
            });
        }

        function ytActiveIndex(index) {
            var allM3u = playlistContainer.querySelectorAll('absdiv');
            allM3u.forEach((element) => {
                if (element.getAttribute('data-index') == index) {
                    element.style.background = 'rgba(0,0,0,0.8)';
                } else {
                    element.style.background = 'none';
                }
            });
            title.textContent = ytPlaylists[index]?.title;
        }

        function videoEnded() {
            events('ended', true);
            events('current_index', playIndex);
            if (playerName == 'youtube' && (isLoop || activeLoop)) {
                events('loop', isLoop ?? activeLoop);
                youtubePlayer.playVideo();
                return;
            } else if (playerName == 'vmPlayer') {
                vmPlayer.setLoop(activeLoop);
                events('loop', activeLoop);
            } else {
                if (premium?.v360) {
                    v360.setAttribute('loop', activeLoop);
                } else {
                    video.setAttribute('loop', activeLoop);
                }
                events('loop', activeLoop);
            }
            if (playlist.length > 0 && playIndex < playlist.length) {
                playIndex++;
                title.textContent = playlist[playIndex].title ?? '';
                events('playing_index', playIndex);
                isVideoClose = false;
                __init(urls[playIndex]);
                playlistActive(playIndex);
            } else if (ytPlaylists?.length > 0) {
                playYTNext();
            } else if (nextURL !== undefined && nextURL !== null) {
                if (typeof nextURL === 'function') {
                    nextURL();
                } else {
                    __init(nextURL);
                }
            } else {
                events('finish', true);
                playIndex = 0;
                def.fn.html(playPauseControl, def.icons.playBtn);
                def.fn.togglePopover(playPauseControl, 'play');
                return;
            }
        }

        function playlistActive(item) {
            var allM3u = playlistContainer.querySelectorAll('absdiv');
            allM3u.forEach((element) => {
                if (element.getAttribute('data-id') == item) {
                    element.classList.add('abs_active');
                } else {
                    element.classList.remove('abs_active');
                }
            });
        }

        function playlistActiveEvent(e) {
            playIndex = e.getAttribute('data-id');
            __init(urls[playIndex]);
            playlistActive(playIndex);
        }

        function togglePlaylist() {
            if (playlistContainer.style.marginRight == '-280px') {
                playlistContainer.style.marginRight = '0px';
            } else {
                playlistContainer.style.marginRight = '-280px';
            }
        }

        function destroyPlayer(texts) {
            forcePause();
            const removeList = [
                video,
                ytPlayer,
                vimeoPlayer,
                adsHandler,
                controls,
                progress,
                youtubeClick,
                vimeoClick,
                adsContainer,
                durationArea,
                player360,
                loader,
            ];

            removeList.forEach((item) => {
                if (item && item != undefined) {
                    item.remove();
                }
            });
            def.fn.attribute(player, {
                oncontextmenu: 'return false',
            });
            errorMsg.textContent = texts;
            return false;
        }

        function initPlayback() {
            let playbackSpeed = '';
            if (premium?.playback && Array.isArray(premium?.playback?.speed)) {
                for (let p = 0; p < premium.playback.speed.length; p++) {
                    playbackSpeed += `<absdiv class="abs_playback ${
                        activePlayback == p ? 'abs_active' : ''
                    }" play-rate='${
                        premium.playback.speed[p]
                    }' index='${p}' style='width:90%;color:#fff;height:28px; padding:3px 0px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                        premium.playback.speed[p]
                    }x</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                        def.icons.rightArrow
                    }</p></absdiv>`;
                }
            } else {
                const playbacks = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
                for (let p = 0; p < playbacks.length; p++) {
                    playbackSpeed += `<absdiv class="abs_playback ${
                        activePlayback == p ? 'abs_active' : ''
                    }" play-rate='${
                        playbacks[p]
                    }' index='${p}' style='width:90%;color:#fff;height:28px;padding:3px 0px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                        playbacks[p]
                    }x</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${
                        buttons.rightArrow
                    }</p></absdiv>`;
                }
            }
            return playbackSpeed;
        }

        function setPlayback() {
            const allPlaybacks = document.querySelectorAll('.abs_playback');
            allPlaybacks.forEach((item, index) => {
                setCallback(item, togglePlayback);
            });
        }

        function isValidApi() {
            if (!activeApi) {
                destroyPlayer('Invalid API Key');
            }
        }

        function checkApi() {
            apiCall++;
            return;
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const response = JSON.parse(this.responseText);
                    if (response.status !== 1) {
                        destroyPlayer(response.message);
                    }
                }
            };
            xhttp.open(
                'GET',
                atob(
                    'aHR0cHM6Ly9hYmR1cnNvZnQuY29tL2xpY2Vuc2UvdmVyaWZ5L2FwaS8=',
                ) +
                    premium.api_key +
                    '/' +
                    window.location.hostname,
            );
            xhttp.send();
        }
        const apiInterval = setInterval(() => {
            checkApi();
            if (apiCall == 2) {
                clearInterval(apiInterval);
                apiCall = 0;
            }
        }, 1000);

        function contentRelease() {
            isVast = false;
            if (
                (fileExtension == 'mp4') |
                    (fileExtension == 'webm') |
                    (fileExtension == 'ogg') |
                    (fileExtension == 'm3u8') ||
                fileExtension == 'mpd'
            ) {
                video.style.display = 'block';
            } else if (isYoutube == 'yTb') {
                ytPlayer.style.display = 'flex';
            } else if (playerName == 'vimeo') {
                vimeoPlayer.style.display = 'block';
            } else {
                return;
            }

            controls.style.display = 'flex';
            progress.style.display = 'flex';
            adsContainer.style.display = 'none';
            adsContent.style.display = 'none';
            adsContentVideo.style.display = 'none';
            adsTimer.style.display = 'none';
            adSkip.style.display = 'none';
            adsHandler.style.display = 'none';
            forcePlay();
        }

        let closeControl = setInterval(() => {
            closeCounterNumber++;
            if (closeCounterNumber >= 5) {
                if (isMenu && isPlaying) {
                    closeControl;
                }
                closeControls();
            }
        }, 1000);

        function closeCounter() {
            if (isMenu && isPlaying) {
                closeControl;
            }
        }

        function isMouseMove() {
            closeCounterNumber = 0;
            openControls();
        }

        function openControls() {
            if (!isActiveAdd | (isActiveAdd === undefined) && !isVast) {
                def.fn.css(controls, {
                    background:
                        premium?.controls?.background ?? 'rgba(0,0,0,0.2)',
                    width: '100%',
                    height: '50px',
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    zIndex: normalIndex,
                    transition: '0.5s',
                });
                def.fn.css(
                    durationArea,
                    def.fn.getCss(premium?.durationArea?.css, 'durationArea'),
                );
                progress.style.bottom = '50px';
                isMenu = true;
                events('ui', true);
                if (premium.topControls) {
                    titlePanel.style.display = 'flex';
                }
            }
            closeCounter();
        }

        function closeControls() {
            if (isPlaying && isMenu) {
                def.fn.css(controls, {
                    background:
                        premium?.controls?.background ?? 'rgba(0,0,0,0.2)',
                    width: '100%',
                    height: '0',
                    position: 'absolute',
                    left: 0,
                    bottom: '-60px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    zIndex: 1,
                    transition: '0.5s',
                });
                def.fn.css(durationArea, {
                    bottom: '-20px',
                    display: 'none',
                });
                progress.style.bottom = '0px';
                titlePanel.style.display = 'none';
                progressTooltip.style.display = 'none';
                isMenu = !isMenu;
                events('ui', false);
            }
        }

        function getSpeedIndex(items, i) {
            for (let l = 0; l < items.length; l++) {
                if (items[l] == i) {
                    return items[l];
                }
            }
        }

        function getQualityIndex(items, i) {
            for (let l = 0; l < items.length; l++) {
                if (items[l] == i) {
                    return l;
                }
            }
        }

        function scrubbing(e) {
            let sTime = 0;
            let times = Math.round(e.offsetX);
            const rect = progress.getBoundingClientRect();
            const percent = e.x - rect.x;
            if (
                (playerName == 'mp4') |
                (playerName == 'hls') |
                (playerName == 'dash') |
                (playerName == 'flv') |
                (playerName == 'mkv')
            ) {
                sTime =
                    (percent * (video.duration ?? 0)) / progress.offsetWidth;
            } else if (playerName == 'youtube') {
                sTime =
                    (percent * (currentEvent.duration ?? 0)) /
                    progress.offsetWidth;
            } else if (playerName == 'vimeo') {
                sTime = (percent * (vmDuration ?? 0)) / progress.offsetWidth;
            }
            progress.style.height = premium?.progress?.extendHeight ?? '6px';
            progressTooltip.style.display = 'flex';
            progressTooltip.style.marginLeft =
                times - progressTooltip.offsetWidth / 3 + 'px';
            if (isLive) {
                def.fn.html(progressTooltip, '00:00');
            } else {
                def.fn.html(progressTooltip, formatDuration(sTime));
            }
        }

        function toggleScrubbing(e) {
            if (!isLive) {
                const rect = progress.getBoundingClientRect();
                const percent = e.x - rect.x;

                if (
                    (playerName == 'mp4') |
                    (playerName == 'hls') |
                    (playerName == 'dash') |
                    (playerName == 'flv') |
                    (playerName == 'mkv')
                ) {
                    video.currentTime =
                        (percent * (video.duration ?? 0)) /
                        progress.offsetWidth;
                    analytics.progress =
                        (percent * (video.duration ?? 0)) /
                        progress.offsetWidth;
                } else if (playerName == 'youtube') {
                    youtubePlayer.seekTo(
                        (percent * (currentEvent.duration ?? 0)) /
                            progress.offsetWidth,
                        true,
                    );
                    analytics.progress =
                        (percent * (currentEvent.duration ?? 0)) /
                        progress.offsetWidth;
                } else if (playerName == 'vimeo') {
                    vmPlayer.setCurrentTime(
                        (percent * (vmDuration ?? 0)) / progress.offsetWidth,
                    );
                    analytics.progress =
                        (percent * (vmDuration ?? 0)) / progress.offsetWidth;
                }
            }
            events(
                'progress',
                parseFloat(Number(analytics.progress).toFixed(2)),
            );
            def.fn.postAnalytics(analytics);
        }

        function getFullDuration() {
            if (
                (playerName == 'mp4') |
                (playerName == 'hls') |
                (playerName == 'dash') |
                (playerName == 'flv') |
                (playerName == 'mkv')
            ) {
                if (premium.v360) {
                    durationText.innerHTML =
                        formatDuration(VRvideo.duration) ?? '00';
                    maxDuration = VRvideo.duration ?? '00';
                } else {
                    durationText.innerHTML =
                        formatDuration(video.duration) ?? '00';
                    maxDuration = video.duration ?? '00';
                }
            } else if (playerName == 'youtube') {
                durationText.innerHTML =
                    formatDuration(currentEvent.duration) ?? '00';
                maxDuration = currentEvent.duration ?? '00';
            } else if (playerName == 'vimeo') {
                durationText.innerHTML = formatDuration(vmDuration) ?? '00';
                maxDuration = vmDuration ?? '00';
            }

            events(
                'duration',
                maxDuration > 0
                    ? parseFloat(Number(maxDuration).toFixed(2))
                    : parseFloat('0.00'),
            );
        }

        function nextDuration() {
            if (
                (playerName == 'mp4') |
                (playerName == 'hls') |
                (playerName == 'dash') |
                (playerName == 'flv') |
                (playerName == 'mkv')
            ) {
                return video.duration;
            } else if (playerName == 'youtube') {
                return currentEvent.duration;
            } else if (playerName == 'vimeo') {
                return vmDuration;
            }
        }

        function getCurrentDuration() {
            if (
                (playerName == 'mp4') |
                (playerName == 'hls') |
                (playerName == 'dash') |
                (playerName == 'flv') |
                (playerName == 'mkv')
            ) {
                durationCurrent.innerHTML = formatDuration(video.currentTime);
                var size = parseInt(
                    (video.currentTime * progress.offsetWidth) / video.duration,
                );
                currentDuration = Math.ceil(video.currentTime);
                progressTimeline.style.width = size + 'px';
                analytics.progress = video.currentTime.toFixed(2);
            }
            if (playerName == 'youtube') {
                durationCurrent.innerHTML = formatDuration(
                    parseInt(currentEvent.currentTime),
                );
                var size = parseInt(
                    (currentEvent.currentTime * progress.offsetWidth) /
                        currentEvent.duration,
                );
                currentDuration = parseInt(currentEvent.currentTime);
                progressTimeline.style.width = size + 'px';
                analytics.progress = parseInt(
                    currentEvent.currentTime ?? 0,
                ).toFixed(2);
                youtubeRemover();
            }
            if (playerName == 'vimeo') {
                var size = parseInt(
                    (vmCurrentTime * progress.offsetWidth) / vmDuration,
                );
                progressTimeline.style.width = size + 'px';
                currentDuration = Math.ceil(vmCurrentTime);
                analytics.progress = (vmCurrentTime ?? 0).toFixed(2);
            }

            if (isLive == true) {
                divider.style.display = 'none';
                progress.style.display = 'none';
                durationCurrent.style.display = 'none';
                speedPlacement.style.display = 'none';
                forwardControl.style.display = 'none';
                backwardControl.style.display = 'none';
                liveText.style.display = 'flex';
                durationText.style.display = 'flex';
                if (typeof premium.src === 'string') {
                    playNext.style.display = 'none';
                    playPrev.style.display = 'none';
                }
            } else {
                liveText.style.display = 'none';
                divider.style.display = 'flex';
                progress.style.display = 'flex';
                durationCurrent.style.display = 'flex';
                speedPlacement.style.display = 'flex';
                forwardControl.style.display = 'flex';
                backwardControl.style.display = 'flex';
            }
            analytics.events.play = true;
            analytics.events.end = false;

            loader.style.display = 'none';

            if (isPlaying === true) {
                centerPlay.style.display = 'none';
                def.fn.html(centerPlay, def.icons.pauseBtn);
                def.fn.html(playPauseControl, def.icons.pauseBtn);
                def.fn.togglePopover(playPauseControl, 'pause');
            }

            if (currentDuration >= 0.5) {
                removePoster();
                if (isVideoEnded) {
                    isVideoEnded = false;
                    if (premium.videoAnalytics) {
                        analyticsInterval(
                            premium.videoAnalytics.interval ?? 10,
                        );
                    }
                }
            }

            events('time', currentDuration);
            localStorage.setItem(`video_${btoa(currentURL)}`, currentDuration);
        }

        function getBuffer() {
            const duration = currentEvent.duration;
            if (duration > 0 && playerName == 'youtube') {
                progressBuffer.style.width =
                    parseInt(currentEvent.currentTime * progress.offsetWidth) /
                        currentEvent.duration +
                    currentEvent.buffer +
                    'px';
            }
        }

        function handleTimelineUpdate(e) {
            const rect = timelineContainer.getBoundingClientRect();
            const percent =
                Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
            const previewImgNumber = Math.max(
                1,
                Math.floor((percent * video.duration) / 10),
            );
            timelineContainer.style.setProperty('--preview-position', percent);

            if (scrubbing) {
                e.preventDefault();
                timelineContainer.style.setProperty(
                    '--progress-position',
                    percent,
                );
            }
        }

        const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
            minimumIntegerDigits: 2,
        });

        function formatDuration(time) {
            if (!time) {
                return '00:00';
            } else {
                const seconds = Math.floor(time % 60);
                const minutes = Math.floor(time / 60) % 60;
                const hours = Math.floor(time / 3600);
                if (hours === 0) {
                    return `${minutes ?? 0}:${leadingZeroFormatter.format(seconds ?? 0)}`;
                } else {
                    return `${hours ?? 0}:${
                        leadingZeroFormatter.format(minutes ?? 0) ?? '00'
                    }:${leadingZeroFormatter.format(seconds) ?? '00'}`;
                }
            }
        }

        function seekBackward() {
            if (
                (playerName == 'mp4') |
                (playerName == 'hls') |
                (playerName == 'dash') |
                (playerName == 'flv') |
                (playerName == 'mkv')
            ) {
                if (video.currentTime - 15 >= 0) {
                    durationCurrent.innerHTML = formatDuration(
                        video.currentTime - 15,
                    );
                    var size = parseInt(
                        ((video.currentTime - 15) * progress.offsetWidth) /
                            video.duration,
                    );
                    video.currentTime = video.currentTime - 15;
                    currentDuration = Math.ceil(video.currentTime);
                    progressTimeline.style.width = size + 'px';
                } else {
                    durationCurrent.innerHTML = formatDuration(0);
                    var size = parseInt(
                        (0 * progress.offsetWidth) / video.duration,
                    );
                    video.currentTime = 0;
                    currentDuration = Math.ceil(0);
                    progressTimeline.style.width = size + 'px';
                }
            }
            if (playerName == 'youtube') {
                if (currentEvent.currentTime - 15 >= 0) {
                    durationCurrent.innerHTML = formatDuration(
                        parseInt(currentEvent.currentTime - 15),
                    );
                    var size = parseInt(
                        ((currentEvent.currentTime - 15) *
                            progress.offsetWidth) /
                            currentEvent.duration,
                    );
                    currentDuration = parseInt(currentEvent.currentTime - 15);
                    progressTimeline.style.width = size + 'px';
                    youtubePlayer.seekTo(currentEvent.currentTime - 15);
                } else {
                    durationCurrent.innerHTML = formatDuration(parseInt(0));
                    var size = parseInt(
                        (0 * progress.offsetWidth) / currentEvent.duration,
                    );
                    currentDuration = parseInt(0);
                    progressTimeline.style.width = size + 'px';
                    youtubePlayer.seekTo(0);
                }
            }
            if (playerName == 'vimeo') {
                if (vmCurrentTime - 15 >= 0) {
                    var size = parseInt(
                        ((vmCurrentTime - 15) * progress.offsetWidth) /
                            vmDuration,
                    );
                    progressTimeline.style.width = size + 'px';
                    currentDuration = Math.ceil(vmCurrentTime - 15);
                    vmPlayer.setCurrentTime(vmCurrentTime - 15);
                } else {
                    var size = parseInt(
                        (0 * progress.offsetWidth) / vmDuration,
                    );
                    progressTimeline.style.width = size + 'px';
                    currentDuration = Math.ceil(0);
                    vmPlayer.setCurrentTime(0);
                }
            }
            events('backward', 15);
        }

        function seekForward() {
            if (
                (playerName == 'mp4') |
                (playerName == 'hls') |
                (playerName == 'dash') |
                (playerName == 'flv') |
                (playerName == 'mkv')
            ) {
                if (video.currentTime + 15 <= video.duration) {
                    durationCurrent.innerHTML = formatDuration(
                        video.currentTime + 15,
                    );
                    var size = parseInt(
                        ((video.currentTime + 15) * progress.offsetWidth) /
                            video.duration,
                    );
                    video.currentTime = video.currentTime + 15;
                    currentDuration = Math.ceil(video.currentTime);
                    progressTimeline.style.width = size + 'px';
                } else {
                    durationCurrent.innerHTML = formatDuration(video.duration);
                    var size = parseInt(
                        (video.duration * progress.offsetWidth) /
                            video.duration,
                    );
                    video.currentTime = video.duration;
                    currentDuration = Math.ceil(video.duration);
                    progressTimeline.style.width = size + 'px';
                }
            }
            if (playerName == 'youtube') {
                if (currentEvent.currentTime + 15 <= currentEvent.duration) {
                    durationCurrent.innerHTML = formatDuration(
                        parseInt(currentEvent.currentTime + 15),
                    );
                    var size = parseInt(
                        ((currentEvent.currentTime + 15) *
                            progress.offsetWidth) /
                            currentEvent.duration,
                    );
                    currentDuration = parseInt(currentEvent.currentTime + 15);
                    progressTimeline.style.width = size + 'px';
                    youtubePlayer.seekTo(currentEvent.currentTime + 15);
                } else {
                    durationCurrent.innerHTML = formatDuration(
                        parseInt(currentEvent.duration),
                    );
                    var size = parseInt(
                        (currentEvent.duration * progress.offsetWidth) /
                            currentEvent.duration,
                    );
                    currentDuration = parseInt(currentEvent.duration);
                    progressTimeline.style.width = size + 'px';
                    youtubePlayer.seekTo(currentEvent.duration);
                }
            }
            if (playerName == 'vimeo') {
                if (vmCurrentTime + 15 <= vmDuration) {
                    var size = parseInt(
                        ((vmCurrentTime + 15) * progress.offsetWidth) /
                            vmDuration,
                    );
                    progressTimeline.style.width = size + 'px';
                    currentDuration = Math.ceil(vmCurrentTime + 15);
                    vmPlayer.setCurrentTime(vmCurrentTime + 15);
                } else {
                    var size = parseInt(
                        (vmDuration * progress.offsetWidth) / vmDuration,
                    );
                    progressTimeline.style.width = size + 'px';
                    currentDuration = Math.ceil(vmDuration);
                    vmPlayer.setCurrentTime(vmDuration);
                }
            }
            events('forward', 15);
        }

        function setMuteicon() {
            if (isMute) {
                def.fn.html(volumeControl, def.icons.muteBtn);
            } else {
                def.fn.html(volumeControl, def.icons.soundLower);
            }
        }

        function setDefaultVolume() {
            let soundWidth = localStorage.getItem('abs_active_sound') ?? 10;
            volumeSlider.setAttribute('current', soundWidth);
            if (Math.ceil(soundWidth) > 0 && Math.ceil(soundWidth) < 50) {
                volumeControl.innerHTML = def.icons.soundLower;
            } else if (
                Math.ceil(soundWidth) > 49 &&
                Math.ceil(soundWidth) <= 100
            ) {
                volumeControl.innerHTML = def.icons.soundHigher;
            }
            if (
                (playerName == 'mp4') |
                (playerName == 'hls') |
                (playerName == 'dash') |
                (playerName == 'flv') |
                (playerName == 'mkv')
            ) {
                if (premium.v360 && VRvideo) {
                    VRvideo.volume = soundWidth / 100;
                } else {
                    video.volume = soundWidth / 100;
                }
            } else if (
                youtubePlayer != undefined &&
                (isYoutube == 'yTb') | (isYoutube != undefined)
            ) {
                if (typeof youtubePlayer.setVolume === 'function') {
                    youtubePlayer?.setVolume(soundWidth);
                } else {
                    console.log(youtubePlayer.setVolume);
                }
            } else if (vmPlayer != undefined && playerName == 'vimeo') {
                vmPlayer.setVolume(soundWidth / 100);
            }
            analytics.sound = soundWidth;
            events('sound', soundWidth);
        }

        function toggleMute() {
            if (
                (playerName == 'mp4') |
                (playerName == 'hls') |
                (playerName == 'dash') |
                (playerName == 'flv') |
                (playerName == 'mkv')
            ) {
                isMute == false ? (video.muted = true) : (video.muted = false);
            } else if (
                youtubePlayer != undefined &&
                (isYoutube == 'yTb') | (isYoutube != undefined)
            ) {
                isMute == false ? youtubePlayer.mute() : youtubePlayer.unMute();
            } else if (
                vmPlayer != undefined &&
                (playerName == 'vimeo') | (isVimeo != undefined)
            ) {
                isMute == false
                    ? vmPlayer.setMuted(true)
                    : vmPlayer.setMuted(false);
            }
            isMute == true ? events('mute', false) : events('mute', true);
            isMute = !isMute;
            setMuteicon();
            analytics.events.mute = isMute;
            def.fn.postAnalytics(analytics);
        }

        function togglePlayPause() {
            if (isVast == false) {
                if (
                    (playerName == 'mp4') |
                    (playerName == 'hls') |
                    (playerName == 'dash') |
                    (playerName == 'flv') |
                    (playerName == 'mkv')
                ) {
                    if (premium.v360) {
                        if (VRvideo.paused) {
                            VRvideo.play();
                            isPlaying = true;
                            def.fn.html(playPauseControl, def.icons.pauseBtn);
                            def.fn.html(centerPlay, def.icons.centerPause);
                            events('play', true);
                            googleEvent('video_play', 'Videos', 'Video paused');
                            def.fn.togglePopover(playPauseControl, 'pause');
                            isFirstPause = true;
                            analytics.events.play = true;
                            def.fn.postAnalytics(analytics);
                        } else {
                            VRvideo.pause();
                            isPlaying = false;
                            events('play', false);
                            def.fn.html(playPauseControl, def.icons.playBtn);
                            def.fn.html(centerPlay, def.icons.centerPlay);
                            googleEvent(
                                'video_pause',
                                'Videos',
                                'Video paused',
                            );
                            def.fn.togglePopover(playPauseControl, 'play');
                            isPlayFalse = false;
                        }
                    } else {
                        if (video.paused) {
                            video.play();
                            isPlaying = true;
                            def.fn.html(playPauseControl, def.icons.pauseBtn);
                            def.fn.html(centerPlay, def.icons.centerPause);
                            googleEvent('video_play', 'Videos', 'Video paused');
                            def.fn.togglePopover(playPauseControl, 'pause');
                            isFirstPause = true;
                            events('play', true);
                            analytics.events.play = true;
                            def.fn.postAnalytics(analytics);
                        } else {
                            events('play', false);
                            video.pause();
                            isPlaying = false;
                            def.fn.html(playPauseControl, def.icons.playBtn);
                            def.fn.html(centerPlay, def.icons.centerPlay);
                            googleEvent(
                                'video_pause',
                                'Videos',
                                'Video paused',
                            );
                            def.fn.togglePopover(playPauseControl, 'play');
                            isPlayFalse = false;
                        }
                    }
                    youtubeRemover();
                }
                if (playerName == 'youtube' && youtubePlayer != undefined) {
                    if (currentEvent.isPlaying != '1') {
                        events('play', true);
                        youtubePlayer.playVideo();
                        isPlaying = true;
                        def.fn.html(playPauseControl, def.icons.pauseBtn);
                        def.fn.html(centerPlay, def.icons.centerPause);
                        youtubeRemover();
                        googleEvent('video_play', 'Videos', 'Video paused');
                        def.fn.togglePopover(playPauseControl, 'pause');
                        isFirstPause = true;
                        analytics.events.play = true;
                        def.fn.postAnalytics(analytics);
                    } else {
                        events('play', false);
                        youtubePlayer.pauseVideo();
                        isPlaying = false;
                        controlResize();
                        def.fn.html(playPauseControl, def.icons.playBtn);
                        def.fn.html(centerPlay, def.icons.centerPlay);
                        googleEvent('video_pause', 'Videos', 'Video paused');
                        def.fn.togglePopover(playPauseControl, 'play');
                        analytics.events.play = false;
                    }
                }
                if (playerName == 'vimeo') {
                    if (vmActive == false) {
                        events('play', true);
                        vmPlayer.play();
                        isPlaying = true;
                        def.fn.html(playPauseControl, def.icons.pauseBtn);
                        def.fn.html(centerPlay, def.icons.centerPause);
                        googleEvent('video_play', 'Videos', 'Video paused');
                        def.fn.togglePopover(playPauseControl, 'pause');
                        isFirstPause = true;
                        analytics.events.play = true;
                        def.fn.postAnalytics(analytics);
                    } else {
                        events('play', false);
                        vmPlayer.pause();
                        isPlaying = false;
                        def.fn.html(playPauseControl, def.icons.playBtn);
                        def.fn.html(centerPlay, def.icons.centerPlay);
                        googleEvent('video_pause', 'Videos', 'Video paused');
                        def.fn.togglePopover(playPauseControl, 'play');
                        analytics.events.play = false;
                    }
                    youtubeRemover();
                }
            }
            !isMute ? setDefaultVolume() : true;
            if (isPlaying) {
                setTimeout(() => {
                    centerPlay.style.display = 'none';
                }, 500);
            } else {
                centerPlay.style.display = 'inline-block';
            }
            if (isFirstPause && !isPlaying) {
                def.fn.postAnalytics(analytics);
            }
        }

        function forcePause() {
            if (
                (playerName == 'mp4') |
                (playerName == 'hls') |
                (playerName == 'dash') |
                (playerName == 'flv') |
                (playerName == 'mkv')
            ) {
                video.pause();
                isPlaying = false;
                def.fn.html(playPauseControl, def.icons.playBtn);
            }
            if (
                youtubePlayer &&
                typeof youtubePlayer.pauseVideo === 'function'
            ) {
                try {
                    youtubePlayer.pauseVideo() ?? 'pause event error';
                    isPlaying = false;
                    def.fn.html(playPauseControl, def.icons.playBtn);
                } catch (error) {
                    console.log(typeof youtubePlayer.pauseVideo);
                }
            }
            if (
                vmPlayer != undefined &&
                (playerName == 'vimeo') | (isVimeo != undefined)
            ) {
                vmPlayer.pause();
                isPlaying = false;
                def.fn.html(playPauseControl, def.icons.playBtn);
            }
            def.fn.togglePopover(playPauseControl, 'pause');
            setDefaultVolume();
            analytics.events.play = false;
        }

        function forcePlay() {
            if (!isActiveAdd) {
                if (
                    (playerName == 'mp4') |
                    (playerName == 'hls') |
                    (playerName == 'dash') |
                    (playerName == 'flv') |
                    (playerName == 'mkv')
                ) {
                    video.play();
                }
                if (youtubePlayer && isYoutube && isYoutube == 'yTb') {
                    if (typeof youtubePlayer.playVideo === 'function') {
                        youtubePlayer.playVideo() ?? 'play event error';
                    }
                }
                if (
                    vmPlayer != undefined &&
                    (playerName == 'vimeo') | (isVimeo != undefined)
                ) {
                    vmPlayer.play();
                }
                isPlaying = true;
                setDefaultVolume();
                def.fn.html(playPauseControl, def.icons.pauseBtn);
                def.fn.togglePopover(playPauseControl, 'pause');
                analytics.events.play = true;
                console.log('playeing mode', isPlaying);
            }
        }

        function setCallback(item, callback, aftercallback = null) {
            item.addEventListener('mouseenter', () => {
                item.style.background = 'rgba(0,0,0,0.6)';
                item.style.color = 'orange';
                item.style.borderRadius = '4px';
                item.style.paddingLeft = '4px';
                item.style.transition = '0.1s';
            });
            item.addEventListener('mouseleave', () => {
                item.style.background = 'none';
                item.style.color = '#fff';
                item.style.borderRadius = '0px';
                item.style.paddingLeft = '0px';
                item.style.transition = '0.1s';
            });
            item.addEventListener('mouseover', () => {
                item.style.background = 'rgba(0,0,0,0.6)';
                item.style.color = 'orange';
                item.style.borderRadius = '4px';
                item.style.paddingLeft = '4px';
                item.style.transition = '0.1s';
            });
            item.addEventListener('click', () => {
                callback(item);
            });

            if (aftercallback != null) {
                aftercallback(item);
            }
        }

        function addPoster() {
            youtubeClick.style.background = `url('${premium.poster}') no-repeat center`;
            youtubeClick.style.backgroundSize = 'cover';
        }

        function removePoster() {
            youtubeClick.style.background = `transparent`;
        }

        window.addEventListener('keydown', (e) => {
            if (
                e.target.tagName === 'INPUT' ||
                e.target.tagName === 'TEXTAREA'
            ) {
                return;
            }
            switch (e.key) {
                case 'f':
                    toggleFullscreen();
                    break;
                case 'm':
                    toggleMute();
                    break;
                case ' ':
                    e.preventDefault();
                    togglePlayPause();
                    break;
                case 'p':
                    togglePlaylist();
                    break;
                case 'Enter':
                    toggleFullscreen();
                    break;
                case 'ArrowRight':
                    seekForward();
                    break;
                case 'ArrowLeft':
                    seekBackward();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    soundControls(15);
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    soundControls(-15);
                    break;
            }
        });

        function getFileInfo() {
            const nvideo = ['mp4', 'webm', 'ogg', 'm3u8', 'mpd'];
            if (nvideo.indexOf(fileExtension) >= 0) {
                return 'video';
            } else if (isYoutube == 'yTb') {
                return 'youtube';
            }
        }

        function setNextURL(url) {
            nextURL = url;
        }

        function typeGenerator(ext) {
            if (ext == 'mp4') {
                return 'video/mp4';
            } else if (ext == 'webm') {
                return 'video/webm';
            } else if (ext == 'ogg') {
                return 'video/ogg';
            } else if (ext == 'mkv') {
                return 'video/x-matroska';
            } else if (ext == 'm3u8' || ext == 'ts') {
                return 'application/x-mpegURL';
            } else if (ext == 'mpd') {
                return 'application/vnd.apple.mpegurl';
            }
        }
        function extractFacebookID(url) {
            const regex =
                /(?:https?:)?(?:\/\/)?(?:[0-9A-Z-]+\.)?(?:facebook)?\.com\/(?:\S+)(?:v=|videos\/|%2Fvideos%2F)(\d+)/;
            const newValue = url.match(regex);
            setTimeout(() => {
                if (regex.test(url)) {
                    return newValue[1];
                }
            }, 300);
        }

        function extChecker(indexFile) {
            let newUrl = undefined;
            if (encrypt == true) {
                newUrl = atob(indexFile);
            } else {
                newUrl = indexFile;
            }

            if (newUrl) {
                var exts = newUrl.substring(newUrl.lastIndexOf('.') + 1);
                var ext = exts.slice(0, 4).toLowerCase();
                let type = null;

                if (ext == 'm3u8' || ext == 'ts') {
                    type = 'm3u8';
                } else if (ext == 'webm') {
                    type = 'webm';
                } else {
                    switch (ext.slice(0, 3)) {
                        case 'mp4':
                            type = 'mp4';
                        case 'ogg':
                            type = 'ogg';
                        case 'avi':
                            type = 'avi';
                        case 'mkv':
                            type = 'mkv';
                        case 'mp3':
                            type = 'mp3';
                        case 'wav':
                            type = 'wav';
                        case 'm3u':
                            type = 'm3u';
                        case 'mpd':
                            type = 'mpd';
                        case 'xml':
                            type = 'xml';
                        case 'flv':
                            type = 'flv';
                        default:
                            type = 'mp4';
                    }
                }
                setPlayerType(type);
                return type;
            }
        }

        function isEncrypt($url) {
            return atob($url);
        }

        function driveGenerator(fileURL) {
            let fileURI = fileURL[0];
            if (fileURI.indexOf('drive') > -1) {
                return 'dLINK';
            } else {
                return 'Your video format is not supported!';
            }
        }

        function youtubedl(fileURL) {
            let fileURI = fileURL[0];
            if (fileURI.indexOf('googlevideo.com') > -1) {
                return 'yTDL';
            } else {
                return 'Your video format is not supported!';
            }
        }

        function APIYoutube(fileURL) {
            let fileURI;
            if (encrypt == true) {
                fileURI = atob(fileURL);
            } else {
                fileURI = fileURL;
            }
            if (
                fileURI.indexOf('youtube.com') > -1 ||
                fileURI.indexOf('youtu.be') > -1
            ) {
                const regex =
                    /(?:https?:)?(?:\/\/)?(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/\S*?[^\w\s-])((?!videoseries)[\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/;
                const newValue = fileURI.match(regex);
                return 'yTb';
            } else {
                return 'fail';
            }
        }

        function APIVimeo(fileURI) {
            let url = encrypt ? atob(fileURI) : fileURI;

            if (url.indexOf('vimeo.com') > -1) {
                // Extract numeric ID
                const match =
                    url.match(/\/video\/(\d+)/) ||
                    url.match(/vimeo\.com\/(\d+)/);
                let videoId = match ? match[1] : null;

                // Extract "h=" param if exists
                const hashMatch = url.match(/[?&]h=([^&]+)/);
                let hash = hashMatch ? hashMatch[1] : null;

                return hash ? { id: videoId, hash: hash } : { id: videoId };
            }
            return false;
        }

        async function loadScript(src) {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.onload = () => {
                    resolve();
                };
                script.onerror = () => {
                    console.log('Failed to load script', src);
                    reject();
                };
                script.src = src;
                document.head.appendChild(script);
            });
        }

        function controlResize() {
            let documents = document.querySelector('body');
            if (
                documents.offsetWidth < 667 &&
                playerName == 'youtube' &&
                isPlaying
            ) {
                topControls.style.height = '0px';
                bottomControls.style.height = '0px';
            } else {
                if (!isPlaying && playerName == 'youtube') {
                    topControls.style.height = '58px';
                    bottomControls.style.height = '58px';
                }
            }

            if (documents.offsetWidth < 992) {
                logoArea.style.width = '60px';
                logoArea.style.height = '45px';
                volumeContainer.style.display = 'none';
            } else if (documents.offsetWidth < 414) {
                logoArea.style.display = 'none';
                volumeContainer.style.display = 'none';
            } else {
                if (typeof premium.logo?.position === 'object') {
                    def.fn.css(logoArea, premium.logo?.position);
                } else {
                    def.fn.css(logoArea, def.css.logoArea);
                }
                volumeContainer.style.display = 'block';
            }
        }

        function youtubeRemover() {
            topControls.style.height = '0px';
            bottomControls.style.height = '0px';
        }

        function shareController() {
            let shares = [
                def.icons.facebookIcon,
                def.icons.whatsapIcon,
                def.icons.twitterIcon,
                def.icons.linkedinIcon,
                def.icons.redditIcon,
            ];
            shares.forEach((item, index) => {
                let shareOption = def.fn.create('button');
                def.fn.css(shareOption, {
                    background: 'none',
                    width: '80px',
                    height: '80px',
                    border: 'none',
                    cursor: 'pointer',
                });
                def.fn.html(shareOption, item);
                shareOption.addEventListener('click', () => {
                    shareRedirect(index);
                });

                def.fn.append(shareInner, shareOption);
            });
        }

        function shareRedirect(index) {
            let url = document.location.href;
            switch (index) {
                case 0:
                    shareOpen(`https://www.facebook.com/sharer.php?u=${url}`);
                    break;
                case 1:
                    shareOpen(`https://api.whatsapp.com/send?text=${url}`);
                    break;
                case 2:
                    shareOpen(
                        `https://twitter.com/share?url=${url}&text=Favorite-videos&via=hd&hashtags=absVideo`,
                    );
                    break;
                case 3:
                    shareOpen(
                        `https://www.linkedin.com/shareArticle?url=${url}&title=Favorite-videos`,
                    );
                    break;
                case 4:
                    shareOpen(
                        `https://reddit.com/submit?url=${url}&title=Favorite-videos`,
                    );
                    break;
                default:
                    console.log('embedded');
            }
        }

        function shareOpen(url) {
            window.open(url, ' _blank');
        }

        function loadAnalytics() {
            console.log('loading analytics');
            if (premium.analytics) {
                (function loadAnalyticsScript() {
                    const tag = document.createElement('script');
                    tag.src =
                        'https://www.googletagmanager.com/gtag/js?id=' +
                        premium.analytics.tag;
                    const firstScriptTag =
                        document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                    tag.onload = setupAnalytics;
                })();

                function setupAnalytics() {
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                        dataLayer.push(arguments);
                    }
                    gtag('js', new Date());
                    gtag('config', premium.analytics.tag);
                }
            }
        }
        loadAnalytics();

        function googleEvent(event, category, label) {
            try {
                gtag('event', event, {
                    event_category: category,
                    event_label: label,
                });
            } catch (error) {
                console.log("Google tag manager dosen't initialize");
            }
        }

        function getDevice() {
            var unknown = '-';
            var screenSize = '';
            var width = '';
            var height = '';
            if (screen.width) {
                width = screen.width ? screen.width : '';
                height = screen.height ? screen.height : '';
                screenSize += '' + width + ' x ' + height;
            }
            var nVer = navigator.appVersion;
            var nAgt = navigator.userAgent;
            var browser = navigator.appName;
            var version = '' + parseFloat(nVer);
            var nameOffset, verOffset, ix;
            if ((verOffset = nAgt.indexOf('YaBrowser')) != -1) {
                browser = 'Yandex';
                version = nAgt.substring(verOffset + 10);
            } else if ((verOffset = nAgt.indexOf('SamsungBrowser')) != -1) {
                browser = 'Samsung';
                version = nAgt.substring(verOffset + 15);
            } else if ((verOffset = nAgt.indexOf('UCBrowser')) != -1) {
                browser = 'UC Browser';
                version = nAgt.substring(verOffset + 10);
            } else if ((verOffset = nAgt.indexOf('OPR')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 4);
            } else if ((verOffset = nAgt.indexOf('Opera')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 6);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            } else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
                browser = 'Microsoft Legacy Edge';
                version = nAgt.substring(verOffset + 5);
            } else if ((verOffset = nAgt.indexOf('Edg')) != -1) {
                browser = 'Microsoft Edge';
                version = nAgt.substring(verOffset + 4);
            } else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(verOffset + 5);
            } else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
                browser = 'Chrome';
                version = nAgt.substring(verOffset + 7);
            } else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                browser = 'Safari';
                version = nAgt.substring(verOffset + 7);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            } else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                browser = 'Firefox';
                version = nAgt.substring(verOffset + 8);
            } else if (nAgt.indexOf('Trident/') != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(nAgt.indexOf('rv:') + 3);
            } else if (
                (nameOffset = nAgt.lastIndexOf(' ') + 1) <
                (verOffset = nAgt.lastIndexOf('/'))
            ) {
                browser = nAgt.substring(nameOffset, verOffset);
                version = nAgt.substring(verOffset + 1);
                if (browser.toLowerCase() == browser.toUpperCase()) {
                    browser = navigator.appName;
                }
            }
            if ((ix = version.indexOf(';')) != -1)
                version = version.substring(0, ix);
            if ((ix = version.indexOf(' ')) != -1)
                version = version.substring(0, ix);
            if ((ix = version.indexOf(')')) != -1)
                version = version.substring(0, ix);

            var majorVersion = parseInt('' + version, 10);
            if (isNaN(majorVersion)) {
                version = '' + parseFloat(nVer);
                majorVersion = parseInt(nVer, 10);
            }
            var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);
            var cookieEnabled = navigator.cookieEnabled ? true : false;

            if (
                typeof navigator.cookieEnabled == 'undefined' &&
                !cookieEnabled
            ) {
                document.cookie = 'testcookie';
                cookieEnabled =
                    document.cookie.indexOf('testcookie') != -1 ? true : false;
            }

            var os = unknown;
            var clientStrings = [
                { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
                { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
                { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
                { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
                { s: 'Windows Vista', r: /Windows NT 6.0/ },
                { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
                { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
                { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
                { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
                { s: 'Windows 98', r: /(Windows 98|Win98)/ },
                { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
                {
                    s: 'Windows NT 4.0',
                    r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,
                },
                { s: 'Windows CE', r: /Windows CE/ },
                { s: 'Windows 3.11', r: /Win16/ },
                { s: 'Android', r: /Android/ },
                { s: 'Open BSD', r: /OpenBSD/ },
                { s: 'Sun OS', r: /SunOS/ },
                { s: 'Chrome OS', r: /CrOS/ },
                { s: 'Linux', r: /(Linux|X11(?!.*CrOS))/ },
                { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
                { s: 'Mac OS X', r: /Mac OS X/ },
                {
                    s: 'Mac OS',
                    r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/,
                },
                { s: 'QNX', r: /QNX/ },
                { s: 'UNIX', r: /UNIX/ },
                { s: 'BeOS', r: /BeOS/ },
                { s: 'OS/2', r: /OS\/2/ },
                {
                    s: 'Search Bot',
                    r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
                },
            ];
            for (var id in clientStrings) {
                var cs = clientStrings[id];
                if (cs.r.test(nAgt)) {
                    os = cs.s;
                    break;
                }
            }

            var osVersion = unknown;

            if (/Windows/.test(os)) {
                osVersion = /Windows (.*)/.exec(os)[1];
                os = 'Windows';
            }

            switch (os) {
                case 'Mac OS':
                case 'Mac OS X':
                case 'Android':
                    osVersion =
                        /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(
                            nAgt,
                        )[1];
                    break;

                case 'iOS':
                    osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                    osVersion =
                        osVersion[1] +
                        '.' +
                        osVersion[2] +
                        '.' +
                        (osVersion[3] | 0);
                    break;
            }
            var flashVersion = 'no check';
            if (typeof swfobject != 'undefined') {
                var fv = swfobject.getFlashPlayerVersion();
                if (fv.major > 0) {
                    flashVersion =
                        fv.major + '.' + fv.minor + ' r' + fv.release;
                } else {
                    flashVersion = unknown;
                }
            }

            return {
                screen: screenSize,
                browser: browser,
                browserVersion: version,
                browserMajorVersion: majorVersion,
                mobile: mobile,
                os: os,
                osVersion: osVersion,
                cookies: cookieEnabled,
                flashVersion: flashVersion,
            };
        }

        function isNotMobile(callback) {
            if (
                device.os !== 'Android' &&
                device.os !== 'Ios' &&
                device.os !== 'Ipad'
            ) {
                callback();
            }
        }

        function setPlayerType(type) {
            const videoMimeTypes = {
                mp4: 'video/mp4',
                m3u8: 'application/vnd.apple.mpegurl',
                ts: 'video/mp2t',
                webm: 'video/webm',
                ogg: 'video/ogg',
                avi: 'video/x-msvideo',
                mkv: 'video/x-matroska',
                flv: 'video/x-flv',
                m3u: 'application/x-mpegURL',
                mpd: 'application/dash+xml',
                xml: 'application/xml',
            };

            video.setAttribute('type', videoMimeTypes[type.toLowerCase()]);
        }

        function analyticsInterval(time) {
            if (premium.videoAnalytics) {
                console.log('Interval started');
                let aInterval = setInterval(() => {
                    if (isVideoEnded) {
                        analytics.events.end = false;
                        clearInterval(aInterval);
                    } else {
                        def.fn.postAnalytics(analytics);
                    }
                }, 1000 * time);
            }
        }

        function setLanguage() {
            langKey.forEach((key) => {
                activeLanguage[key] = def.fn.getLang(key);

                const elements = document.querySelectorAll(
                    `[data-lang-key="${key}"]`,
                );
                elements.forEach(
                    (el) => (el.textContent = activeLanguage[key]),
                );
            });
        }

        checkApi();

        window.addEventListener('load', () => {
            controlResize();
            setLanguage();
        });

        window.addEventListener('resize', () => {
            controlResize();
        });

        document.addEventListener('visibilitychange', function () {
            if (premium.videoAnalytics) {
                def.fn.postAnalytics(analytics);
            }
        });

        function rightOptions(item, container) {
            isPlayFalse = true;
            class ContextMenu {
                constructor({
                    target = null,
                    menuItems = [],
                    mode = null,
                    box = null,
                }) {
                    this.target = target;
                    this.menuItems = menuItems;
                    this.mode = mode;
                    this.box = box;
                    this.targetNode = this.getTargetNode();
                    this.menuItemsNode = this.getMenuItemsNode();
                    this.isOpened = false;
                }

                getTargetNode() {
                    const nodes = this.box.querySelectorAll(this.target);
                    if (nodes && nodes.length !== 0) {
                        return nodes;
                    } else {
                        console.error(
                            `getTargetNode :: "${this.target}" target not found`,
                        );
                        return [];
                    }
                }

                getMenuItemsNode() {
                    const nodes = [];

                    if (!this.menuItems) {
                        console.error(
                            'getMenuItemsNode :: Please enter menu items',
                        );
                        return [];
                    }

                    this.menuItems.forEach((data, index) => {
                        const item = this.createItemMarkup(data);
                        item.firstChild.setAttribute(
                            'style',
                            `animation-delay: ${index * 0.08}s`,
                        );
                        nodes.push(item);
                    });

                    return nodes;
                }

                createItemMarkup(data) {
                    const button = document.createElement('BUTTON');
                    const item = document.createElement('LI');

                    button.innerHTML = data.content;
                    button.classList.add('contextMenu-button');
                    item.classList.add('contextMenu-item');

                    if (data.adsDivider)
                        item.setAttribute('data-adsDivider', data.adsDivider);
                    item.appendChild(button);

                    if (data.events && data.events.length !== 0) {
                        Object.entries(data.events).forEach((event) => {
                            const [key, value] = event;
                            button.addEventListener(key, value);
                        });
                    }

                    return item;
                }

                renderMenu() {
                    const menuContainer = document.createElement('UL');

                    menuContainer.classList.add('contextMenu');
                    menuContainer.setAttribute('data-theme', this.mode);

                    this.menuItemsNode.forEach((item) =>
                        menuContainer.appendChild(item),
                    );

                    return menuContainer;
                }

                closeMenu(menu) {
                    if (this.isOpened) {
                        this.isOpened = false;
                        isPlayFalse = false;
                        menu.remove();
                    }
                }

                init() {
                    const contextMenu = this.renderMenu();
                    document.addEventListener('click', () =>
                        this.closeMenu(contextMenu),
                    );
                    window.addEventListener('blur', () =>
                        this.closeMenu(contextMenu),
                    );

                    document.addEventListener('contextmenu', (e) => {
                        this.targetNode.forEach((target) => {
                            if (!e.target.contains(target)) {
                                contextMenu.remove();
                            }
                        });
                    });

                    this.targetNode.forEach((target) => {
                        target.addEventListener('contextmenu', (e) => {
                            e.preventDefault();
                            this.isOpened = true;

                            const { clientX, clientY } = e;
                            this.box.appendChild(contextMenu);
                            const positionY =
                                clientY + contextMenu.scrollHeight >=
                                window.innerHeight
                                    ? window.innerHeight -
                                      contextMenu.scrollHeight -
                                      20
                                    : clientY;
                            const positionX =
                                clientX + contextMenu.scrollWidth >=
                                window.innerWidth
                                    ? window.innerWidth -
                                      contextMenu.scrollWidth -
                                      20
                                    : clientX;

                            contextMenu.setAttribute(
                                'style',
                                `--width: ${contextMenu.scrollWidth}px;
                              --height: ${contextMenu.scrollHeight}px;
                              --top: ${positionY}px;
                              --left: ${positionX}px;
                              --z-index: 999999999`,
                            );
                        });
                    });
                }
            }

            setLanguage();
            const hostURL = 'aHR0cHM6Ly9lc3lwbGF5ZXIuY29tLw==';
            const menuItems = [
                {
                    content: def.fn.getLang('copyUrl'),
                    events: {
                        click: (e) => {
                            navigator.clipboard.writeText(window.location.href);
                        },
                    },
                },
                {
                    content: def.fn.getLang('playerInfo'),
                    events: {
                        click: (e) => {
                            window.open(
                                atob(hostURL) + 'docs',
                                '_blank',
                            );
                        },
                    },
                },
                {
                    content: `${def.fn.getLang('version')} 1.1.5`,
                    adsDivider: 'top',
                },
            ];

            const dark = new ContextMenu({
                target: item,
                menuItems,
                mode: 'dark',
                box: container,
            });
            dark.init();
            function removeMessage() {
                const message = container.querySelector('.right-click');
                if (message) message.remove();
            }
            window.addEventListener('click', removeMessage);
            window.addEventListener('contextmenu', removeMessage);
        }

        return {
            new: (url) => {
                __init(url);
            },
            next: (url) => {
                setNextURL(url);
            },
            loop: (value) => {
                activeLoop = value;
                isLoop = value;
            },
            lang(key) {
                newLanguage = key;
                setLanguage();
            },
            play: () => {
                forcePlay();
            },
            pause() {
                forcePause();
            },
        };
    } else {
        console.warn('Only object data allowed');
    }
}

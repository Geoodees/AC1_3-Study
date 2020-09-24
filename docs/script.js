// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Screen",
      "responses": {
        "keypress(Space)": "Continue"
      },
      "messageHandlers": {},
      "parameters": {},
      "files": {},
      "title": "Landing page",
      "content": "\u003Cheader\u003E \r\n  \u003Ch2\u003E Difference between liking and emotion within human judgment \u003C\u002Fh2\u003E \r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cstyle\u003E\r\naside {\r\n  width: 45%;\r\n  padding: 20px 40px;\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  margin-left: 30px; \r\n  float: text-centered-justify;\r\n  background-color: lightyellow;\r\n}\r\nsection {\r\n  width: 45%;\r\n  padding: 10px 30px;\r\n  margin-top: -620px;\r\n  margin-right: 30px; \r\n  float: right;\r\n  background-color: lightyellow;\r\n}\r\n\u003C\u002Fstyle\u003E\r\n\r\n\r\n\u003Cmain\u003E\r\n  \u003Cp\u003E\u003Ch4\u003E\u003Cem\u003EWelcome!\u003C\u002Fem\u003E This is a study conducted by students at KTH. The data gathered from this study will be used in the course Human Perception for Information Technology. We appreciate you taking part, please read the following information carefully before starting the test. \u003C\u002Fh4\u003E\u003C\u002Fp\u003E\r\n\r\n  \u003Cp\u003EThe interest here is to examine how variations in a particular feature relate to variations in judgments of liking and perceived emotions. We will ask you to rate a few images and sounds based on you personal liking and perceived emotion when interacting with the elements. We will then ask you to give some feedback and answer a short questionnaire. This will not take long, the whole session should take XX minutes.\u003C\u002Fp\u003E\r\n\r\n\u003Caside\u003E\r\n  \u003Cdiv class=\"text-centered-justify\"\u003E\r\n    \u003Ch3\u003ETechnical\u003C\u002Fh3\u003E\r\n    \u003Cdiv class=\"text-centered-justify\"\u003E\r\n    \u003Cp\u003EThe study uses web technologies and should work properly on any browser. However, we encourage you to use Chrome or Firefox. Please set your screen resolution to XX. We advice you to use a headphone set to comfortable volume levels and please stay in a quiet room with a stable internet connection and no distractions. \u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Faside\u003E\r\n\r\n\u003Caside\u003E\r\n  \u003Cdiv class=\"text-centered-justify\"\u003E\r\n    \u003Ch3\u003EEligibility\u003C\u002Fh3\u003E\r\n    \u003Cdiv class=\"text-centered-justify\"\u003E\r\n    \u003Cp\u003E\u003Cem\u003EYou do not need previous knowledge in music or art to participate!\u003C\u002Fem\u003E\u003C\u002Fp\u003E\r\n    \u003Cp\u003EHowever, to perform this test you have to be 18 years old or above, have normal or corrected-to-normal vision and hearing. \u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Faside\u003E\r\n\r\n\u003Csection\u003E\r\n  \u003Cdiv class=\"text-centered-justify\"\u003E\r\n    \u003Ch3\u003EDisclaimer\u003C\u002Fh3\u003E\r\n      \u003Cp\u003E\u003Cem\u003EYour participation is entirely voluntary and anonymous.\u003C\u002Fem\u003E\u003C\u002Fp\u003E\r\n\r\n      \u003Cp\u003EAll data are treated in strict confidence and handled securely. The\r\n        anonymised data will be made available to other researchers, however, the results of the study will not be published. This research implies no known risks or direct benefits.\u003C\u002Fp\u003E\r\n\r\n      \u003Cp\u003EPlease, click the button below to confirm your participation. You are welcome to withdraw at any time and without justification. To do that, simply close the browser window.\u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n    \u003Cdiv class=\"w-m text-justify\"\u003E\r\n      \u003Cp\u003EBy clicking the button you confirm and agree to the following: \r\n        \u003Cul\u003E\r\n          \u003Cli\u003EI am aged 18 or above.\u003C\u002Fli\u003E\r\n          \u003Cli\u003EI have normal or corrected-to-normal vision and hearing.\u003C\u002Fli\u003E\r\n          \u003Cli\u003EI have no cognative impairments.\u003C\u002Fli\u003E\r\n          \u003Cli\u003EI have read through and understood the disclaimer and information above, and agree to participate.\u003C\u002Fli\u003E\r\n        \u003C\u002Ful\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\u003C\u002Fsection\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\r\n\u003Cfooter\u003E\r\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Screen",
      "responses": {
        "keypress(Space)": "Continue"
      },
      "messageHandlers": {},
      "parameters": {},
      "files": {},
      "title": "Visual intro",
      "content": "\u003Cheader\u003E \r\n  \u003Ch2\u003E Visual Information \u003C\u002Fh2\u003E \r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain\u003E\r\n    \u003Cdiv class=\"text-centered-justify\"\u003E\r\n   \r\n\r\n   \u003Cp\u003EYou will now start the first part of the test, the \u003Cem\u003Evisual\u003C\u002Fem\u003E test.To start with, we will have a practice round where you will be presented four different graphics and be asked to rate them.\u003C\u002Fp\u003E\r\n\r\n      \u003Cp\u003EAfter the practice test, the real test will start. No worries, they will look the same. The real test consist of four different blocks, you are allowed to take a break between the different blocks. However, we encourage you to go through all the blocks without interruptions. You are allowed to listen to the sound as many times as you like.\u003C\u002Fp\u003E\r\n\r\n      \u003Cp\u003E\u003Ch4\u003EIf you have any questions, please let us know. Good Luck!\u003C\u002Fh4\u003E\u003C\u002Fp\u003E\r\n\r\n\u003C\u002Fmain\u003E"
    },
    {
      "type": "lab.html.Frame",
      "context": "\u003C!-- Nested components use this canvas --\u003E\n\u003Ccanvas \u002F\u003E",
      "contextSelector": "[data-labjs-section=\"frame\"]",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Frame",
      "content": {
        "type": "lab.flow.Loop",
        "templateParameters": [
          {
            "block": "Practice",
            "WAV": "b.wav",
            "PNG": "a.png"
          },
          {
            "block": "Practice",
            "WAV": "c.wav",
            "PNG": "e.png"
          },
          {
            "block": "Practice",
            "WAV": "k.wav",
            "PNG": "i.png"
          },
          {
            "block": "Practice",
            "WAV": "s.wav",
            "PNG": "o.png"
          }
        ],
        "sample": {
          "mode": "draw-shuffle",
          "n": ""
        },
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {},
        "title": "Loop",
        "shuffleGroups": [],
        "template": {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "circle",
                  "left": 0,
                  "top": "0",
                  "angle": 0,
                  "width": 55,
                  "height": 55,
                  "stroke": "#000000",
                  "strokeWidth": 1,
                  "fill": "#ffffff"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "keydown(space)": "premature"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Fixation",
              "timeout": "750"
            },
            {
              "type": "lab.html.Screen",
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous() {
const updateButtons = (buttonClass) => {
  let compareWith;

  if (buttonClass === 'liking') {
    compareWith = this.data.userLiking;
  }
  else if (buttonClass === 'SAM-val') {
    compareWith = this.data.userSamVal;
  } 
  else {
    compareWith = this.data.userSamAro;
  } 

  document.querySelectorAll(`.${buttonClass}`).forEach(
      button => {
        button.style.border = button.attributes.name.value === compareWith ? '5px solid #ffea2d' : '1px solid #dddddd';
      }
    )
}

// Setup handler for button clicks
this.options.events['click button'] = function(event) {
  let button = event.currentTarget;
  
  if (button.attributes.name.value != 'done') {
    if (button.className === 'liking') {
      this.data.userLiking = button.attributes.name.value;
      updateButtons(button.className);
    }
    else if (button.className === 'SAM-val') {
      this.data.userSamVal = button.attributes.name.value;
      updateButtons(button.className);
    }
    else if (button.className === 'SAM-aro') {
      this.data.userSamAro = button.attributes.name.value;
      updateButtons(button.className);
    }
    
  }
  else {
    this.end('done')
  } 
}
}
              },
              "title": "VisualStimuli",
              "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003C!-- Table styles are specified in the overall study CSS,\r\n       please see study options. This screen also includes\r\n       a fair amount of logic, which is visible in the scripts\r\n       tab. Please be invited to ask the authors if you have\r\n       any questions!\r\n  --\u003E\r\n\r\n  \u003Cstimuli\u003E\r\n    \u003Cimg src=\"https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002Fstimuli\u002Fvisual\u002F${this.parameters.PNG}\" width=\"50%\" height=\"50%\"\u003E\r\n  \u003Cstimuli\u003E\r\n\r\n  \u003Ctable class=\"table-plain table-span-recall\"\u003E\r\n    \u003Ctr\u003E \u003Ctd\u003EHow much do you like it?\u003C\u002Ftd\u003E \u003C\u002Ftr\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class=\"liking\" name=\"1\"\u003E-2\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class=\"liking\" name=\"2\"\u003E-1\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class=\"liking\" name=\"3\"\u003E0\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class=\"liking\" name=\"4\"\u003E1\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class=\"liking\" name=\"5\"\u003E2\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n    \u003Ctr\u003E \u003Ctd\u003E How much do you like it? \u003C\u002Ftd\u003E \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-val\" name=\"valence-2\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Fvalence-1.png\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-val\" name=\"valence-1\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Fvalence-2.png)\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-val\" name=\"valence0\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Fvalence-3.png)\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-val\" name=\"valence1\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Fvalence-4.png)\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-val\" name=\"valence2\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Fvalence-5.png)\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n    \u003Ctr\u003E \u003Ctd\u003E How do you perceive it? \u003C\u002Ftd\u003E \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-aro\" name=\"arousal-2\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Farousal-1.png\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-aro\" name=\"arousal-1\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Farousal-2.png)\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-aro\" name=\"arousal0\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Farousal-3.png)\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-aro\" name=\"arousal1\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Farousal-4.png)\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-aro\" name=\"arousal2\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Farousal-5.png)\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd colspan=\"9\"\u003E\r\n        \u003Cbutton name=\"done\"\u003EDone &rarr;\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n  \u003C\u002Ftable\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter\u003E\r\n\r\n\u003C\u002Ffooter\u003E\r\n\r\n\u003Cstyle\u003E\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.SAM-val {\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n.SAM-aro {\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n\u003C\u002Fstyle\u003E"
            }
          ]
        }
      }
    },
    {
      "type": "lab.html.Screen",
      "responses": {
        "keypress(Space)": "Continue"
      },
      "messageHandlers": {},
      "parameters": {},
      "files": {},
      "title": "Auditory info",
      "content": "\u003Cheader\u003E \r\n  \u003Ch2\u003E Auditory Information \u003C\u002Fh2\u003E \r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain\u003E\r\n    \u003Cdiv class=\"text-centered-justify\"\u003E\r\n\r\n      \u003Cp\u003E\u003Ch4\u003ECongratulations!\u003C\u002Fh4\u003E\u003C\u002Fp\u003E\r\n      \u003Cp\u003E The first part of the test is completed. We will now move on to \u003Cem\u003Eauditory\u003C\u002Fem\u003E testing. \r\n\r\n      \u003Cp\u003ETo start with, we will have a practice round where you will be presented 4 different images and be asked to rate them. After the practice test, the real test start, no worries they look the same.\u003C\u002Fp\u003E\r\n\r\n      \u003Cp\u003EThe real test consist of 4 different blocks, you are allowed to take a break between the blocks, however, we encourage you to go through all blocks without interruptions.\r\n\r\n      \u003Cp\u003E\u003Ch4\u003EIf you have any questions please let us know. God Luck!\u003C\u002Fh4\u003E\u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E"
    },
    {
      "type": "lab.html.Frame",
      "context": "\u003C!-- Nested components use this canvas --\u003E\n\u003Ccanvas \u002F\u003E",
      "contextSelector": "[data-labjs-section=\"frame\"]",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Frame",
      "content": {
        "type": "lab.flow.Loop",
        "templateParameters": [
          {
            "block": "Practice",
            "WAV": "b.wav",
            "PNG": "a.png"
          },
          {
            "block": "Practice",
            "WAV": "c.wav",
            "PNG": "e.png"
          },
          {
            "block": "Practice",
            "WAV": "k.wav",
            "PNG": "i.png"
          },
          {
            "block": "Practice",
            "WAV": "s.wav",
            "PNG": "o.png"
          }
        ],
        "sample": {
          "mode": "draw-shuffle",
          "n": ""
        },
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {},
        "title": "Loop",
        "shuffleGroups": [],
        "template": {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "circle",
                  "left": 0,
                  "top": "0",
                  "angle": 0,
                  "width": 55,
                  "height": 55,
                  "stroke": "#000000",
                  "strokeWidth": 1,
                  "fill": "#ffffff"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "keydown(space)": "premature"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Fixation",
              "timeout": "750"
            },
            {
              "type": "lab.html.Screen",
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous() {
const updateButtons = (buttonClass) => {
  let compareWith;

  if (buttonClass === 'liking') {
    compareWith = this.data.userLiking;
  }
  else if (buttonClass === 'SAM-val') {
    compareWith = this.data.userSamVal;
  } 
  else {
    compareWith = this.data.userSamAro;
  } 

  document.querySelectorAll(`.${buttonClass}`).forEach(
      button => {
        button.style.border = button.attributes.name.value === compareWith ? '5px solid #ffea2d' : '1px solid #dddddd';
      }
    )
}

// Setup handler for button clicks
this.options.events['click button'] = function(event) {
  let button = event.currentTarget;
  
  if (button.attributes.name.value != 'done') {
    if (button.className === 'liking') {
      this.data.userLiking = button.attributes.name.value;
      updateButtons(button.className);
    }
    else if (button.className === 'SAM-val') {
      this.data.userSamVal = button.attributes.name.value;
      updateButtons(button.className);
    }
    else if (button.className === 'SAM-aro') {
      this.data.userSamAro = button.attributes.name.value;
      updateButtons(button.className);
    }
    
  }
  else {
    this.end('done')
  } 
}
}
              },
              "title": "AudioStimuli",
              "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003C!-- Table styles are specified in the overall study CSS,\r\n       please see study options. This screen also includes\r\n       a fair amount of logic, which is visible in the scripts\r\n       tab. Please be invited to ask the authors if you have\r\n       any questions!\r\n  --\u003E\r\n\r\n  \u003Caudio id=\"sound\" controls style=\"display:none\"\u003E\r\n    \u003Csource src=\"https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002Fstimuli\u002Fauditory\u002F${this.parameters.WAV}\"\u003E\r\n  \u003C\u002Faudio\u003E\r\n\r\n  \u003Ctable class=\"table-plain table-span-recall\"\u003E\r\n    \u003Ctr\u003E \u003Ctd\u003E \u003Cbutton id =\"replay\" class=\"play\" \u003E\u003C\u002Fbutton\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\r\n    \u003Ctr\u003E \u003Ctd\u003EHow much do you like it?\u003C\u002Ftd\u003E \u003C\u002Ftr\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class=\"liking\" name=\"1\"\u003E-2\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class=\"liking\" name=\"2\"\u003E-1\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class=\"liking\" name=\"3\"\u003E0\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class=\"liking\" name=\"4\"\u003E1\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class=\"liking\" name=\"5\"\u003E2\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n    \u003Ctr\u003E \u003Ctd\u003E How do you perceive it? \u003C\u002Ftd\u003E \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-val\" name=\"valence-2\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Fvalence-1.png\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-val\" name=\"valence-1\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Fvalence-2.png)\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-val\" name=\"valence0\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Fvalence-3.png)\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-val\" name=\"valence1\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Fvalence-4.png)\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-val\" name=\"valence2\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Fvalence-5.png)\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n    \u003Ctr\u003E \u003Ctd\u003E How do you perceive it? \u003C\u002Ftd\u003E \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-aro\" name=\"arousal-2\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Farousal-1.png\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-aro\" name=\"arousal-1\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Farousal-2.png)\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-aro\" name=\"arousal0\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Farousal-3.png)\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-aro\" name=\"valence1\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Farousal-4.png)\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton class = \"SAM-aro\" name=\"valence2\" style=\"background-image: url(https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002FSAM-images\u002Farousal-5.png)\"\u002F\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd colspan=\"9\"\u003E\r\n        \u003Cbutton name=\"done\"\u003EDone &rarr;\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n  \u003C\u002Ftable\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter\u003E\r\n\r\n\u003C\u002Ffooter\u003E\r\n\r\n\u003Cstyle\u003E\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.SAM-val {\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n.SAM-aro {\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n#replay{\r\n    padding: 0;\r\n    background-color: white;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.play{\r\n    height: 124px;\r\n    border-style: solid;\r\n    border-width: 62px 0 62px 120px;\r\n    border-color: transparent transparent transparent black;\r\n    transition: all .5s ease;\r\n}\r\n.play:hover{\r\n    border-style: double;\r\n    border-width: 0px 0px 0px 120px;\r\n    border-color: black transparent transparent black;\r\n}\r\n\u003C\u002Fstyle\u003E",
              "timeline": [
                {
                  "type": "sound",
                  "start": 0,
                  "stop": "5000",
                  "priority": 0,
                  "payload": {
                    "src": "https:\u002F\u002Fraw.githubusercontent.com\u002FGeoodees\u002FAC1_3-Study\u002Fmaster\u002Fstimuli\u002Fauditory\u002F${this.parameters.WAV}"
                  }
                }
              ]
            }
          ]
        }
      }
    },
    {
      "type": "lab.html.Form",
      "scrollTop": true,
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "content": "\u003Cheader\u003E\n  \u003Ch2\u003EThe Need for Cognition Scale\u003C\u002Fh2\u003E\n  \u003Cp\u003E When answering the questionnoaire you will be ask to rate the questions from -4 to +4.  The scaling has the following meaning:\u003C\u002Fp\u003E\n  \u003Cp\u003E 4 = Very strong agreement, +3 = Strong agreement, +2 = Moderate agreement, +1 = Slight agreement, 0 = Neither agreement nor disagreement, -1 = Slight disagreement, -2 = Moderate disagreement, -3 = Strong disagreement, -4 = Very strong disagreement\u003C\u002Fp\u003E\n  \u003Cp\u003E If you see a * next to one of the questions it means that you are supposed to score it in revers.\u003C\u002Fp\u003E \n\u003C\u002Fheader\u003E\n\n\u003Cstyle\u003E\naside {\n  width: 50%;\n  padding: 20px 40px;\n  margin-top: 10px;\n  margin-bottom: 40px;\n  margin-left: 500px; \n  float: text-centered-justify;\n  background-color: lightyellow;\n}\n\u003C\u002Fstyle\u003E\n\n\u003Cmain\u003E\n  \u003Cform\u003E\n    \u003Cdiv class=\"text-justify\"\u003E\n      \u003Caside\u003E\n        \u003Cp\u003E1. I would prefer complex to simple problems.\u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"1\" value=\"-4\"\u003E-4\n        \u003Cinput type=\"radio\" name=\"1\" value=\"-3\"\u003E-3\n        \u003Cinput type=\"radio\" name=\"1\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"1\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"1\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"1\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"1\" value=\"+2\"\u003E+2\n        \u003Cinput type=\"radio\" name=\"1\" value=\"+3\"\u003E+3\n        \u003Cinput type=\"radio\" name=\"1\" value=\"+4\"\u003E+4\n\n        \u003Cp\u003E2. I like to have the responsibility of handling a situation that requires a lot of thinking.\u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"2\" value=\"-4\"\u003E-4\n        \u003Cinput type=\"radio\" name=\"2\" value=\"-3\"\u003E-3\n        \u003Cinput type=\"radio\" name=\"2\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"2\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"2\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"2\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"2\" value=\"+2\"\u003E+2\n        \u003Cinput type=\"radio\" name=\"2\" value=\"+3\"\u003E+3\n        \u003Cinput type=\"radio\" name=\"2\" value=\"+4\"\u003E+4\n\n        \u003Cp\u003E3. Thinking is not my idea of fun.* \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"3\" value=\"-4\"\u003E-4\n        \u003Cinput type=\"radio\" name=\"3\" value=\"-3\"\u003E-3\n        \u003Cinput type=\"radio\" name=\"3\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"3\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"3\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"3\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"3\" value=\"+2\"\u003E+2\n        \u003Cinput type=\"radio\" name=\"3\" value=\"+3\"\u003E+3\n        \u003Cinput type=\"radio\" name=\"3\" value=\"+4\"\u003E+4\n\n        \u003Cp\u003E4. I would rather do something that requires little thought than something that is sure to challenge my thinking abilities.* \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"4\" value=\"-4\"\u003E-4\n        \u003Cinput type=\"radio\" name=\"4\" value=\"-3\"\u003E-3\n        \u003Cinput type=\"radio\" name=\"4\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"4\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"4\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"4\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"4\" value=\"+2\"\u003E+2\n        \u003Cinput type=\"radio\" name=\"4\" value=\"+3\"\u003E+3\n        \u003Cinput type=\"radio\" name=\"4\" value=\"+4\"\u003E+4\n\n        \u003Cp\u003E5. I try to anticipate and avoid situations where there is likely chance I will have to think in depth about something.* \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"5\" value=\"-4\"\u003E-4\n        \u003Cinput type=\"radio\" name=\"5\" value=\"-3\"\u003E-3\n        \u003Cinput type=\"radio\" name=\"5\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"5\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"5\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"5\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"5\" value=\"+2\"\u003E+2\n        \u003Cinput type=\"radio\" name=\"5\" value=\"+3\"\u003E+3\n        \u003Cinput type=\"radio\" name=\"5\" value=\"+4\"\u003E+4\n\n        \u003Cp\u003E6. I find satisfaction in deliberating hard and for long hours. \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"6\" value=\"-4\"\u003E-4\n        \u003Cinput type=\"radio\" name=\"6\" value=\"-3\"\u003E-3\n        \u003Cinput type=\"radio\" name=\"6\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"6\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"6\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"6\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"6\" value=\"+2\"\u003E+2\n        \u003Cinput type=\"radio\" name=\"6\" value=\"+3\"\u003E+3\n        \u003Cinput type=\"radio\" name=\"6\" value=\"+4\"\u003E+4\n\n        \u003Cp\u003E7. I only think as hard as I have to. * \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"7\" value=\"-4\"\u003E-4\n        \u003Cinput type=\"radio\" name=\"7\" value=\"-3\"\u003E-3\n        \u003Cinput type=\"radio\" name=\"7\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"7\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"7\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"7\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"7\" value=\"+2\"\u003E+2\n        \u003Cinput type=\"radio\" name=\"7\" value=\"+3\"\u003E+3\n        \u003Cinput type=\"radio\" name=\"7\" value=\"+4\"\u003E+4\n\n        \u003Cp\u003E8. I prefer to think about small, daily projects to long-term ones.* \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"8\" value=\"-4\"\u003E-4\n        \u003Cinput type=\"radio\" name=\"8\" value=\"-3\"\u003E-3\n        \u003Cinput type=\"radio\" name=\"8\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"8\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"8\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"8\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"8\" value=\"+2\"\u003E+2\n        \u003Cinput type=\"radio\" name=\"8\" value=\"+3\"\u003E+3\n        \u003Cinput type=\"radio\" name=\"8\" value=\"+4\"\u003E+4\n\n        \u003Cp\u003E9. I like tasks that require little thought once I've learned them.* \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"9\" value=\"-4\"\u003E-4\n        \u003Cinput type=\"radio\" name=\"9\" value=\"-3\"\u003E-3\n        \u003Cinput type=\"radio\" name=\"9\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"9\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"9\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"9\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"9\" value=\"+2\"\u003E+2\n        \u003Cinput type=\"radio\" name=\"9\" value=\"+3\"\u003E+3\n        \u003Cinput type=\"radio\" name=\"9\" value=\"+4\"\u003E+4\n\n        \u003Cp\u003E10. The idea of relying on thought to make my way to the top appeals to me. \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"10\" value=\"-4\"\u003E-4\n        \u003Cinput type=\"radio\" name=\"10\" value=\"-3\"\u003E-3\n        \u003Cinput type=\"radio\" name=\"10\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"10\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"10\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"10\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"10\" value=\"+2\"\u003E+2\n        \u003Cinput type=\"radio\" name=\"10\" value=\"+3\"\u003E+3\n        \u003Cinput type=\"radio\" name=\"10\" value=\"+4\"\u003E+4\n\n        \u003Cp\u003E11. I really enjoy a task that involves coming up with new solutions to problems. \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"11\" value=\"-4\"\u003E-4\n        \u003Cinput type=\"radio\" name=\"11\" value=\"-3\"\u003E-3\n        \u003Cinput type=\"radio\" name=\"11\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"11\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"11\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"11\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"11\" value=\"+2\"\u003E+2\n        \u003Cinput type=\"radio\" name=\"11\" value=\"+3\"\u003E+3\n        \u003Cinput type=\"radio\" name=\"11\" value=\"+4\"\u003E+4\n\n        \u003Cp\u003E12. Learning new ways to think doesn't excite me very much.* \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"12\" value=\"-4\"\u003E-4\n        \u003Cinput type=\"radio\" name=\"12\" value=\"-3\"\u003E-3\n        \u003Cinput type=\"radio\" name=\"12\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"12\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"12\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"12\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"12\" value=\"+2\"\u003E+2\n        \u003Cinput type=\"radio\" name=\"12\" value=\"+3\"\u003E+3\n        \u003Cinput type=\"radio\" name=\"12\" value=\"+4\"\u003E+4\n\n        \u003Cp\u003E13. I prefer my life to be filled with puzzles that I must solve. \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"13\" value=\"-4\"\u003E-4\n        \u003Cinput type=\"radio\" name=\"13\" value=\"-3\"\u003E-3\n        \u003Cinput type=\"radio\" name=\"13\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"13\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"13\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"13\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"13\" value=\"+2\"\u003E+2\n        \u003Cinput type=\"radio\" name=\"13\" value=\"+3\"\u003E+3\n        \u003Cinput type=\"radio\" name=\"13\" value=\"+4\"\u003E+4\n\n        \u003Cp\u003E14. The notion of thinking abstractly is appealing to me. \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"14\" value=\"-4\"\u003E-4\n        \u003Cinput type=\"radio\" name=\"14\" value=\"-3\"\u003E-3\n        \u003Cinput type=\"radio\" name=\"14\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"14\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"14\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"14\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"14\" value=\"+2\"\u003E+2\n        \u003Cinput type=\"radio\" name=\"14\" value=\"+3\"\u003E+3\n        \u003Cinput type=\"radio\" name=\"14\" value=\"+4\"\u003E+4\n\n        \u003Cp\u003E15. I would prefer a task that is intellectual, difficult, and important to one that is somewhat important but does not require much thought. \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"15\" value=\"-4\"\u003E-4\n        \u003Cinput type=\"radio\" name=\"15\" value=\"-3\"\u003E-3\n        \u003Cinput type=\"radio\" name=\"15\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"15\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"15\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"15\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"15\" value=\"+2\"\u003E+2\n        \u003Cinput type=\"radio\" name=\"15\" value=\"+3\"\u003E+3\n        \u003Cinput type=\"radio\" name=\"15\" value=\"+4\"\u003E+4\n\n        \u003Cp\u003E16. I feel relief rather than satisfaction after completing a task that required a lot of mental effort.* \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"16\" value=\"-4\"\u003E-4\n        \u003Cinput type=\"radio\" name=\"16\" value=\"-3\"\u003E-3\n        \u003Cinput type=\"radio\" name=\"16\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"16\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"16\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"16\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"16\" value=\"+2\"\u003E+2\n        \u003Cinput type=\"radio\" name=\"16\" value=\"+3\"\u003E+3\n        \u003Cinput type=\"radio\" name=\"16\" value=\"+4\"\u003E+4\n\n        \u003Cp\u003E17. It's enough for me that something gets the job done; I don't care how or why it works.* \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"17\" value=\"-4\"\u003E-4\n        \u003Cinput type=\"radio\" name=\"17\" value=\"-3\"\u003E-3\n        \u003Cinput type=\"radio\" name=\"17\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"17\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"17\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"17\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"17\" value=\"+2\"\u003E+2\n        \u003Cinput type=\"radio\" name=\"17\" value=\"+3\"\u003E+3\n        \u003Cinput type=\"radio\" name=\"17\" value=\"+4\"\u003E+4\n\n        \u003Cp\u003E18. I usually end up deliberating about issues even when they do not affect me personally. \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"18\" value=\"-4\"\u003E-4\n        \u003Cinput type=\"radio\" name=\"18\" value=\"-3\"\u003E-3\n        \u003Cinput type=\"radio\" name=\"18\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"18\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"18\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"18\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"18\" value=\"+2\"\u003E+2\n        \u003Cinput type=\"radio\" name=\"18\" value=\"+3\"\u003E+3\n        \u003Cinput type=\"radio\" name=\"18\" value=\"+4\"\u003E+4\n      \u003C\u002Faside\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\"\u003E\n      Submit\n    \u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
      "title": "The Need for Cognition Scale"
    },
    {
      "type": "lab.html.Form",
      "scrollTop": true,
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "content": "\u003Cheader\u003E\n  \u003Ch2\u003EThe Need for Emotion Scale\u003C\u002Fh2\u003E\n  \u003Cp\u003E When answering the questionnoaire you will be ask to rate the questions from -2 to 2.  The scaling has the following meaning:\u003C\u002Fp\u003E\n  \u003Cp\u003E +2 = Strongly Agree, +1 = Slight agreement, 0 = Neither agreement nor disagreement, -1 = Slight disagreement, -2 = Strongly Disagree \u003C\u002Fp\u003E\n \u003Cp\u003E If you see a * next to one of the questions it means that you are supposed to score it in revers.\u003C\u002Fp\u003E \n\u003C\u002Fheader\u003E\n\n\u003Cstyle\u003E\naside {\n  width: 50%;\n  padding: 20px 40px;\n  margin-top: 10px;\n  margin-bottom: 40px;\n  margin-left: 500px; \n  float: text-centered-justify;\n  background-color: lightyellow;\n}\n\u003C\u002Fstyle\u003E\n\n\u003Cmain\u003E\n  \u003Cform\u003E\n    \u003Cdiv class=\"text-justify\"\u003E\n      \u003Caside\u003E\n        \u003Cp\u003E1. I try to anticipate and avoid situations where there is a likely chance of my getting emotionally involved. * \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"1\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"1\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"1\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"1\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"1\" value=\"+2\"\u003E+2\n\n        \u003Cp\u003E2. Experiencing strong emotions is not something I enjoy very much. * \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"2\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"2\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"2\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"2\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"2\" value=\"+2\"\u003E+2\n\n        \u003Cp\u003E3. I would rather be in a situation in which I experience little emotion than one which is sure to get me emotionally involved. * \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"3\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"3\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"3\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"3\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"3\" value=\"+2\"\u003E+2\n\n        \u003Cp\u003E4. I don't look forward to being in situations that others have found to be emotional. * \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"4\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"4\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"4\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"4\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"4\" value=\"+2\"\u003E+2\n\n        \u003Cp\u003E5. I look forward to situations that I know are less emotionally involving. * \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"5\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"5\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"5\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"5\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"5\" value=\"+2\"\u003E+2\n\n        \u003Cp\u003E6. I like to be unemotional in emotional situations. *  \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"6\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"6\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"6\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"6\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"6\" value=\"+2\"\u003E+2\n\n        \u003Cp\u003E7. I find little satisfaction in experiencing strong emotions. * \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"7\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"7\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"7\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"7\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"7\" value=\"+2\"\u003E+2\n\n        \u003Cp\u003E8. I prefer to keep my feelings under check. * \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"8\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"8\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"8\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"8\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"8\" value=\"+2\"\u003E+2\n\n        \u003Cp\u003E9. I feel relief rather than fulfilled after experiencing a situation that was very emotional. * \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"9\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"9\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"9\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"9\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"9\" value=\"+2\"\u003E+2\n\n        \u003Cp\u003E10. I prefer to ignore the emotional aspects of situations rather than getting involved in them. *  \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"10\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"10\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"10\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"10\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"10\" value=\"+2\"\u003E+2\n\n        \u003Cp\u003E11.More often than not, making decisions based on emotions just leads to more errors. * \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"11\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"11\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"11\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"11\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"11\" value=\"+2\"\u003E+2\n\n        \u003Cp\u003E12. I don't like to have the responsibility of handling a situation that is emotional in nature. * \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"12\" value=\"-2\"\u003E-2\n        \u003Cinput type=\"radio\" name=\"12\" value=\"-1\"\u003E-1\n        \u003Cinput type=\"radio\" name=\"12\" value=\"0\"\u003E0\n        \u003Cinput type=\"radio\" name=\"12\" value=\"+1\"\u003E+1\n        \u003Cinput type=\"radio\" name=\"12\" value=\"+2\"\u003E+2\n      \u003C\u002Faside\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\"\u003E\n      Submit\n    \u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
      "title": "The Need for Emotion Scale"
    },
    {
      "type": "lab.html.Form",
      "scrollTop": true,
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "content": "\u003Cheader\u003E\n  \u003Ch2\u003E Only one form to go!\u003C\u002Fh2\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cstyle\u003E\naside {\n  width: 50%;\n  padding: 20px 40px;\n  margin-top: 10px;\n  margin-bottom: 40px;\n  margin-left: 450px; \n  float: text-centered-justify;\n  background-color: lightyellow;\n}\n\u003C\u002Fstyle\u003E\n\n\u003Cform\u003E\n  \u003Cdiv class=\"text-center-justify\"\u003E\n    \u003Caside\u003E\n      \u003Cp\u003EWhat is your age: \u003Cinput name=\"age\" type=\"number\"\u003E\u003C\u002Fp\u003E\n\n      \u003Cp\u003EWhat is your gender: \u003C\u002Fp\u003E       \n        \u003Cinput type=\"radio\" name=\"gender\" value=\"woman\" \u003EWoman\u003Cbr\u003E\n        \u003Cinput type=\"radio\" name=\"gender\" value=\"man\" \u003EMan\u003Cbr\u003E\n        \u003Cinput type=\"radio\" name=\"gender\" value=\"other\" \u003EOther\u003Cbr\u003E\n    \n\n      \u003Cp\u003EWhat is your highest level of completed education? \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"education\" value=\"primary_school\" \u003EPrimary school or equivalent\u003Cbr\u003E\n        \u003Cinput type=\"radio\" name=\"education\" value=\"high_school\" \u003EHigh school or equivalent\u003Cbr\u003E\n        \u003Cinput type=\"radio\" name=\"education\" value=\"post_secondary\" \u003EPost-secondary education, not college \u002F university\u003Cbr\u003E\n        \u003Cinput type=\"radio\" name=\"education\" value=\"at_college_uni\" \u003EStudies at college \u002F university\u003Cbr\u003E\n        \u003Cinput type=\"radio\" name=\"education\" value=\"degree\" \u003EDegree from college \u002F university\u003Cbr\u003E\n    \n      \u003Cp\u003EDo you have an education in music?:  \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"music_education\" value=\"yes\" \u003EYes\u003Cbr\u003E\n        \u003Cinput type=\"radio\" name=\"music_education\" value=\"no\" \u003ENo\u003Cbr\u003E\n    \n      \u003Cp\u003EDo you have an education in visual art?: \u003C\u002Fp\u003E\n        \u003Cinput type=\"radio\" name=\"visual_education\" value=\"yes\" \u003EYes\u003Cbr\u003E\n        \u003Cinput type=\"radio\" name=\"visual_education\" value=\"no\" \u003ENo\u003Cbr\u003E\n      \u003Cbr\u003E\n      \u003Cbr\u003E\n      \u003Cbr\u003E\n    \u003C\u002Faside\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"text-center\"\u003E\n    \u003Cbutton type=\"submit\"\u003E\n      Submit\n    \u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n   \n\u003C\u002Fform\u003E",
      "title": "Demographics "
    }
  ]
})

// Let's go!
study.run()
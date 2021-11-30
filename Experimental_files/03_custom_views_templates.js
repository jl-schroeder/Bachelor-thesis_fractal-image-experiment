// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information

const blank_screen_short = function(config) {
  const view = {
    name: config.name,
    CT:0,
    trials: config.trials,
    render: function(CT, magpie) {
      $("main").html(`<div class='magpie-view'>
    `);


    setTimeout(function(){magpie.findNextView();},2000);
    }
  };
  return view;
};


const blank_screen_long = function(config) {
  const view = {
    name: config.name,
    CT:0,
    trials: config.trials,
    render: function(CT, magpie) {
      $("main").html(`<div class='magpie-view'>
    `);


    setTimeout(function(){magpie.findNextView();},4000);
    }
  };
  return view;
};


// first part of continuation task
const experiment_replication = function(config) {
  const view = {
    name: config.name,
    CT:0,
    trials: config.trials,
    render: function(CT, magpie) {
      $("main").html(`<div class='magpie-view'>
      <h1 class='magpie-view-title'>
      Which is the correct continuation? </h1>
      <center>
      <span id="picture1"></span>
      <span id="picture2"></span>
      </div>
      `);

      //js code
      var img1 = document.createElement("img");

      // picture 1
      img1.src = continuation_list[CT].p1;
      img1.height = "550";
      img1.width = "550";

      var src1 = document.getElementById('picture1');
      src1.appendChild(img1);

      // picture 2
      setTimeout(function(){
        img1.src = continuation_list[CT].p2;
        img1.height = "550";
        img1.width = "550";

        var src1 = document.getElementById('picture1');
        src1.appendChild(img1);
      },3000);

      // picture 3
      setTimeout(function(){
        img1.src = continuation_list[CT].p3;
        img1.height = "550";
        img1.width = "550";

        var src1 = document.getElementById('picture1');
        src1.appendChild(img1);
      },6000);

      // picture 4
      if(continuation_list[CT].p4 != null){
        setTimeout(function(){
          img1.src = continuation_list[CT].p4;
          img1.height = "550";
          img1.width = "550";

          var src1 = document.getElementById('picture1');
          src1.appendChild(img1);
        },9000);
      }

      // find next view
      if(continuation_list[CT].p4 != null){
        setTimeout(function(){
          magpie.findNextView();
        },12000);
      } else {
        setTimeout(function(){
          magpie.findNextView();
        },9000);
      }

    }
  };
  return view;
};


// second part of continuation task
const fractal_view = function(config) {
  const view = {
    name: config.name,
    CT: 0,
    trials: config.trials,
    render: function (CT, magpie) {
      $("main").html(`<div class='magpie-view' style="float:center;">
      <h1 class='magpie-view-title'>
      Which is the correct continuation?
      </h1>
      <div style="float:left; display:flex;">
      <span id="pic1"></span>
      <span id="pic2"></span>
      </div>
      <center>
      <div style="padding: 50px; width: 400px; display: inline-block;"> <button id="leftButton">Left</button> </div>
      <div style="padding: 50px; width: 100px; display: inline-block;"> <button id="rightButton">Right</button> </div>
      </center>
      </div>
      `);


      // js code
      // current time
      var curr_Date = new Date();
      var curr_Time = curr_Date.getTime();

      // left picture
      var img1 = document.createElement("img");
      img1.src = continuation_list[CT].p5;
      img1.height = "550";
      img1.width = "550";
      var src1 = document.getElementById("pic1");
      src1.appendChild(img1);

      // right picture
      var img2 = document.createElement("img");
      img2.src = continuation_list[CT].p6;
      img2.height = "550";
      img2.width = "550";
      var src2 = document.getElementById("pic2");
      src2.appendChild(img2);


      // left button click:
      (function clickHandlerLeft() {
        const button1 = document.getElementById("leftButton");
        button1.addEventListener("click", event=> {
          var date2 = new Date();
          var time2 = date2.getTime();
          var timeDifference = (time2-curr_Time);

          // default values
          var correctAnwerGiven = "incorrect";
          type_of_foil = "NA";

          // check for correct Answer
          var correctAnswer = continuation_list[CT].answer;
          if(correctAnswer == "left"){
            correctAnwerGiven = "correct";
          }

          // check type of foil
          if(correctAnswer == "left"){
            type_of_foil = assessFoil(continuation_list[CT].p6);
          } else {
            type_of_foil = assessFoil(continuation_list[CT].p5);
          }

          // to reduce error possibility
          picture_1_name = continuation_list[CT].p5.replace("images/Generated_Pictures/","");
          picture_2_name = continuation_list[CT].p6.replace("images/Generated_Pictures/","");

          // save data in trial_data
          let trial_data = {
            trial_name: config.name,
            participant_ID: participantID,
            picture1: picture_1_name,
            picture2: picture_2_name,
            trial_number: CT + 1,
            RT: timeDifference,
            key_pressed: "left",
            expected: correctAnswer,
            foil_type: type_of_foil,
            question: "Which is the correct continuation?",
            correctness: correctAnwerGiven,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // right button click
      (function clickHandlerRight() {
        const button1 = document.getElementById("rightButton");
        button1.addEventListener("click", event=> {
          var date2 = new Date();
          var time2 = date2.getTime();
          var timeDifference = (time2-curr_Time);

          // default values
          var correctAnwerGiven = "incorrect";
          type_of_foil = "NA";

          // check for correct Answer
          var correctAnswer = continuation_list[CT].answer;
          if(correctAnswer == "right"){
            correctAnwerGiven = "correct";
          }

          // check type of foil
          if(correctAnswer == "right"){
            type_of_foil = assessFoil(continuation_list[CT].p5);
          } else {
            type_of_foil = assessFoil(continuation_list[CT].p6);
          }

          // to reduce error possibility
          picture_1_name = continuation_list[CT].p5.replace("images/Generated_Pictures/","");
          picture_2_name = continuation_list[CT].p6.replace("images/Generated_Pictures/","");

          // save data in trial_data
          let trial_data = {
            trial_name: config.name,
            participant_ID: participantID,
            picture1: picture_1_name,
            picture2: picture_2_name,
            trial_number: CT + 1,
            RT: timeDifference,
            key_pressed: "right",
            expected: correctAnswer,
            foil_type: type_of_foil,
            question: "Which is the correct continuation?",
            correctness: correctAnwerGiven,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();
    }
  };
  return view;
};

// first part of continuation task - fractals
const experiment_replication_fractal = function(config) {
  const view = {
    name: config.name,
    CT:0,
    trials: config.trials,
    render: function(CT, magpie) {
      $("main").html(`<div class='magpie-view'>
      <h1 class='magpie-view-title'>
      Which is the correct continuation? </h1>
      <center>
      <span id="picture1"></span>
      <span id="picture2"></span>
      </div>
      `);

      //js code
      var img1 = document.createElement("img");

      // picture 1
      img1.src = continuation_list_fractal[CT].p1;
      img1.height = "550";
      img1.width = "550";

      var src1 = document.getElementById('picture1');
      src1.appendChild(img1);

      // picture 2
      setTimeout(function(){
        img1.src = continuation_list_fractal[CT].p2;
        img1.height = "550";
        img1.width = "550";

        var src1 = document.getElementById('picture1');
        src1.appendChild(img1);
      },3000);

      // picture 3
      setTimeout(function(){
        img1.src = continuation_list_fractal[CT].p3;
        img1.height = "550";
        img1.width = "550";

        var src1 = document.getElementById('picture1');
        src1.appendChild(img1);
      },6000);

      // picture 4
      if(continuation_list_fractal[CT].p4 != null){
        setTimeout(function(){
          img1.src = continuation_list_fractal[CT].p4;
          img1.height = "550";
          img1.width = "550";

          var src1 = document.getElementById('picture1');
          src1.appendChild(img1);
        },9000);
      }

      // find next view
      if(continuation_list_fractal[CT].p4 != null){
        setTimeout(function(){
          magpie.findNextView();
        },12000);
      } else {
        setTimeout(function(){
          magpie.findNextView();
        },9000);
      }

    }
  };
  return view;
};

// second part of continuation task - fractals
const fractal_view_fractal = function(config) {
  const view = {
    name: config.name,
    CT: 0,
    trials: config.trials,
    render: function (CT, magpie) {
      $("main").html(`<div class='magpie-view' style="float:center;">
      <h1 class='magpie-view-title'>
      Which is the correct continuation?
      </h1>
      <div style="float:left; display:flex;">
      <span id="pic1"></span>
      <span id="pic2"></span>
      </div>
      <center>
      <div style="padding: 50px; width: 400px; display: inline-block;"> <button id="leftButton">Left</button> </div>
      <div style="padding: 50px; width: 100px; display: inline-block;"> <button id="rightButton">Right</button> </div>
      </center>
      </div>
      `);


      // js code
      // current time
      var curr_Date = new Date();
      var curr_Time = curr_Date.getTime();

      // left picture
      var img1 = document.createElement("img");
      img1.src = continuation_list_fractal[CT].p5;
      img1.height = "550";
      img1.width = "550";
      var src1 = document.getElementById("pic1");
      src1.appendChild(img1);

      // right picture
      var img2 = document.createElement("img");
      img2.src = continuation_list_fractal[CT].p6;
      img2.height = "550";
      img2.width = "550";
      var src2 = document.getElementById("pic2");
      src2.appendChild(img2);


      // left button click:
      (function clickHandlerLeft() {
        const button1 = document.getElementById("leftButton");
        button1.addEventListener("click", event=> {
          var date2 = new Date();
          var time2 = date2.getTime();
          var timeDifference = (time2-curr_Time);

          // default values
          var correctAnwerGiven = "incorrect";
          type_of_foil = "NA";

          // check for correct Answer
          var correctAnswer = continuation_list_fractal[CT].answer;
          if(correctAnswer == "left"){
            correctAnwerGiven = "correct";
          }

          // check type of foil
          if(correctAnswer == "left"){
            type_of_foil = assessFoil(continuation_list_fractal[CT].p6);
          } else {
            type_of_foil = assessFoil(continuation_list_fractal[CT].p5);
          }

          // to reduce error possibility
          picture_1_name = continuation_list_fractal[CT].p5.replace("images/Generated_Pictures/","");
          picture_2_name = continuation_list_fractal[CT].p6.replace("images/Generated_Pictures/","");

          // save data in trial_data
          let trial_data = {
            trial_name: config.name,
            participant_ID: participantID,
            picture1: picture_1_name,
            picture2: picture_2_name,
            trial_number: CT + 1,
            RT: timeDifference,
            key_pressed: "left",
            expected: correctAnswer,
            foil_type: type_of_foil,
            question: "Which is the correct continuation?",
            correctness: correctAnwerGiven,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // right button click
      (function clickHandlerRight() {
        const button1 = document.getElementById("rightButton");
        button1.addEventListener("click", event=> {
          var date2 = new Date();
          var time2 = date2.getTime();
          var timeDifference = (time2-curr_Time);

          // default values
          var correctAnwerGiven = "incorrect";
          type_of_foil = "NA";

          // check for correct Answer
          var correctAnswer = continuation_list_fractal[CT].answer;
          if(correctAnswer == "right"){
            correctAnwerGiven = "correct";
          }

          // check type of foil
          if(correctAnswer == "right"){
            type_of_foil = assessFoil(continuation_list_fractal[CT].p5);
          } else {
            type_of_foil = assessFoil(continuation_list_fractal[CT].p6);
          }

          // to reduce error possibility
          picture_1_name = continuation_list_fractal[CT].p5.replace("images/Generated_Pictures/","");
          picture_2_name = continuation_list_fractal[CT].p6.replace("images/Generated_Pictures/","");

          // save data in trial_data
          let trial_data = {
            trial_name: config.name,
            participant_ID: participantID,
            picture1: picture_1_name,
            picture2: picture_2_name,
            trial_number: CT + 1,
            RT: timeDifference,
            key_pressed: "right",
            expected: correctAnswer,
            foil_type: type_of_foil,
            question: "Which is the correct continuation?",
            correctness: correctAnwerGiven,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();
    }
  };
  return view;
};


////////// TEST-TRIALS BELOW

// fist part of continuation task test trials
const experiment_replication_TT = function(config) {
  const view = {
    name: config.name,
    CT:0,
    trials: config.trials,
    render: function(CT, magpie) {
      $("main").html(`<div class='magpie-view'>
      <h1 class='magpie-view-title'>
      Which is the correct continuation? <i>Test Trials</i> </h1>
      <center>
      <span id="picture1"></span>
      <span id="picture2"></span>
      </div>
      `);

      //js code
      var img1 = document.createElement("img");

      // picture 1
      img1.src = continuation_test_list[CT].p1;
      img1.height = "550";
      img1.width = "550";

      var src1 = document.getElementById('picture1');
      src1.appendChild(img1);

      // picture 2
      setTimeout(function(){
        img1.src = continuation_test_list[CT].p2;
        img1.height = "550";
        img1.width = "550";

        var src1 = document.getElementById('picture1');
        src1.appendChild(img1);
      },3000);

      // picture 3
      setTimeout(function(){
        img1.src = continuation_test_list[CT].p3;
        img1.height = "550";
        img1.width = "550";

        var src1 = document.getElementById('picture1');
        src1.appendChild(img1);
      },6000);

      // picture 4
      if(continuation_test_list[CT].p4 != null){
        setTimeout(function(){
          img1.src = continuation_test_list[CT].p4;
          img1.height = "550";
          img1.width = "550";

          var src1 = document.getElementById('picture1');
          src1.appendChild(img1);
        },9000);
      }

      // find next view
      if(continuation_test_list[CT].p4 != null){
        setTimeout(function(){
          magpie.findNextView();
        },12000);
      } else {
        setTimeout(function(){
          magpie.findNextView();
        },9000);
      }

    }
  };
  return view;
};

// second part of continuation task test TRIALS
const fractal_view_TT = function(config) {
  const view = {
    name: config.name,
    CT: 0,
    trials: config.trials,
    render: function (CT, magpie) {
      $("main").html(`<div class='magpie-view' style="float:center;">
      <h1 class='magpie-view-title'>
      Which is the correct continuation? - <i>Test Trials</i>
      </h1>
      <div style="float:left; display:flex;">
      <span id="pic1"></span>
      <span id="pic2"></span>
      </div>
      <center>
      <div style="padding: 50px; width: 400px; display: inline-block;"> <button id="leftButton">Left</button> </div>
      <div style="padding: 50px; width: 100px; display: inline-block;"> <button id="rightButton">Right</button> </div>
      </center>
      </div>
      `);


      // js code
      // current time
      var curr_Date = new Date();
      var curr_Time = curr_Date.getTime();

      // left picture
      var img1 = document.createElement("img");
      img1.src = continuation_test_list[CT].p5;
      img1.height = "550";
      img1.width = "550";
      var src1 = document.getElementById("pic1");
      src1.appendChild(img1);

      // right picture
      var img2 = document.createElement("img");
      img2.src = continuation_test_list[CT].p6;
      img2.height = "550";
      img2.width = "550";
      var src2 = document.getElementById("pic2");
      src2.appendChild(img2);


      // left button click:
      (function clickHandlerLeft() {
        const button1 = document.getElementById("leftButton");
        button1.addEventListener("click", event=> {
          var date2 = new Date();
          var time2 = date2.getTime();
          var timeDifference = (time2-curr_Time);

          // default values
          var correctAnwerGiven = "incorrect";
          type_of_foil = "NA";

          // check for correct Answer
          var correctAnswer = continuation_test_list[CT].answer;
          if(correctAnswer == "left"){
            correctAnwerGiven = "correct";
          }

          // check type of foil
          if(correctAnswer == "left"){
            type_of_foil = assessFoil(continuation_test_list[CT].p6);
          } else {
            type_of_foil = assessFoil(continuation_test_list[CT].p5);
          }

          // to reduce error possibility
          picture_1_name = continuation_test_list[CT].p5.replace("images/Generated_Pictures/","");
          picture_2_name = continuation_test_list[CT].p6.replace("images/Generated_Pictures/","");

          // save data in trial_data
          let trial_data = {
            trial_name: config.name,
            participant_ID: participantID,
            picture1: picture_1_name,
            picture2: picture_2_name,
            trial_number: CT + 1,
            RT: timeDifference,
            key_pressed: "left",
            expected: correctAnswer,
            foil_type: type_of_foil,
            question: "Which is the correct continuation?",
            correctness: correctAnwerGiven,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // right button click
      (function clickHandlerRight() {
        const button1 = document.getElementById("rightButton");
        button1.addEventListener("click", event=> {
          var date2 = new Date();
          var time2 = date2.getTime();
          var timeDifference = (time2-curr_Time);

          // default values
          var correctAnwerGiven = "incorrect";
          type_of_foil = "NA";

          // check for correct Answer
          var correctAnswer = continuation_test_list[CT].answer;
          if(correctAnswer == "right"){
            correctAnwerGiven = "correct";
          }

          // check type of foil
          if(correctAnswer == "right"){
            type_of_foil = assessFoil(continuation_test_list[CT].p5);
          } else {
            type_of_foil = assessFoil(continuation_test_list[CT].p6);
          }

          // to reduce error possibility
          picture_1_name = continuation_test_list[CT].p5.replace("images/Generated_Pictures/","");
          picture_2_name = continuation_test_list[CT].p6.replace("images/Generated_Pictures/","");

          // save data in trial_data
          let trial_data = {
            trial_name: config.name,
            participant_ID: participantID,
            picture1: picture_1_name,
            picture2: picture_2_name,
            trial_number: CT + 1,
            RT: timeDifference,
            key_pressed: "right",
            expected: correctAnswer,
            foil_type: type_of_foil,
            question: "Which is the correct continuation?",
            correctness: correctAnwerGiven,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();
    }
  };
  return view;
};

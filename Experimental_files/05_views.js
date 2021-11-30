// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

* trials: int - the number of trials this view will appear
* name: string

*Optional properties
* buttonText: string - the text on the button (default: 'next')
* text: string - the text to be displayed in this view
* title: string - the title of this view

* More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
// If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  text: `Thank you for participating in this experiment.
  <br />
  <br />
  On the following slides you will be presented with a few tests.
  <br />
  You will find the specific instructions before the task.
  <br />
  Please read all the instructions carefully.
  <br />
  You will see some visual structures and answer questions according to the instructions you get.
  <br />
  <br />
  <br />
  The data collected is strictly anonymous.
  Your anonymously collected data will then be used for analysis for scientific work.
  With your participation in this study you consent to your data being used for this purpose.
  <br />
  <br />
  <strong>You can stop the experiment at any time and then no data will be submitted. You don't have to give any reasons and no adverse consequences will arise for you.</strong>
  <br />
  <br />
  If you have any questions or concerns, please write an email to: <strong>janlschroede@uni-osnabrueck.de</strong>.
  <br />
  <br />
  <br />
  If you are interested in our results, you can write an email to the address above, and you will be notified when they are ready.
  <br />
  <br />
  Enjoy.`,
  buttonText: 'begin the experiment'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `On the next two pages you will be shown some questions.
  <br />
  <br />
  Afterwards you will be presented with two different types of tests.
  <br />
  You will get the corresponding instructions right before the tests.
  <br />
  <br />
  <br />
  If possible, please make this window full-screen.
  <br />
  (e.g. press <strong>(F11)</strong> or <strong>(Fn + F11)</strong>).
  <br />
  <br />
  Press the same button(s) at the end to exit the full-screen mode again.
  <br />
  <br />
  <br />
  <strong>Please read all the instructions carefully.</strong>
  <br />`,
  buttonText: 'go to the questions'
});

const fractal_introduction = magpieViews.view_generator("instructions",{
  trials: 1,
  name: "fractal_introduction",
  title: "A small introduction into fractals",
  text: `

  `,
  buttonText: "go to the first task"
},
// custom generator functions
{
  stimulus_container_generator: function (config, CT) {
    return `<div class='magpie-view'>
    <center>
    <h1 class='magpie-view-title'>A small introduction into fractals</h1>
    <p class='magpie-view-text'>Below you can see two visual structures where one represents a "fractal", the other one represents a "non-fractal". </p>
    <br />
    <br />
    <p class='magpie-view-text'>If you look at the <strong>left</strong> picture, you can see that the structure is the same on every level.
    <br />
    This <strong>is a fractal!</strong>.
    <br /> All fractals are build up on a repeating structure. They are self-similar.
    </p>
    <br />
    <br />
    <p class='magpie-view-text'>If you look at the <strong>right</strong> picture, you can see that the structure on the last level differs from the previous ones.
    <br />
    Therefore, this one is <strong>not a fractal!</strong>
    <br />
    <br />
    <i>An earlier level is represented by bigger symbols and a later level has smaller symbols.</i>
    </p>
    <div style="display:flex">
    <img src="images/Generated_Pictures/Quad_triangle_3.png" height="500" width="500">
    <img src="images/Generated_Pictures/Quad_triangle_3_false_3.png" height="500" width="500">
    </div>
    <div style="display:flex">
    <p class='magpie-view-text'>&#x2191; This is a fractal &#x2191;</p>
    <p class='magpie-view-text'>&#x2191; This <strong>not</strong> is a fractal &#x2191;</p>
    </div>
    </center>
    </div>
    <br />
    <br />
    <br />
    `;}
  });


  const fractal_view_instruction = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'fractal_view_instruction',
    title: 'Continuation Task - Instructions',
    text: `In this task, you have to look closely at the series of pictures appearing on the screen.
    <br />
    <br />
    Afterwards the screen will go blank for a short time. You will then be presented with two pictures.
    <br />
    One of these pictures represents the correct continuation of the series, the other is an incorrect continuation.
    <br />
    You then have to decide which one is the correct continuation.
    <br />
    <br />
    To do so you press either the LEFT or the RIGHT button located below the pictures.<br />
    Respond as quickly and as correctly as possible.
    <br />
    <br />
    <br />
    First, there will be two practice trials.
    <br />
    Afterwards, there will be another instruction page after which the actual trials begin.
    <br />
    <br />
    If you feel ready, press the button below.`,
    buttonText: "Begin TEST-trial",
  });

  const fractal_view_instruction_post_test = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'fractal_view_instruction_post_test',
    title: 'Continuation Task',
    text: `
    <br />
    <br />
    <br />
    <strong>Reminder:</strong>
    <br />
    You have to decide which is the correct continuation step.
    <br />
    If you feel ready, press the button below.
    <br />
    <br />
    <br />
    <br />`,
    buttonText: "Begin trial",
  });

  const second_continuation_instruction = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'second_continuation_instruction',
    title: 'Continuation Task',
    text: `This is the second appearance of the continuation task.
    <br />
    <br />
    <br />
    <strong>Reminder:</strong>
    <br />
    <br />
    You will be presented with a series of pictures and then have to decide which of two pictures is the correct continuation step.
    <br />
    <br />
    <br />
    If you feel ready, press the button below.
    <br />
    <br />
    <br />
    `,
    buttonText: "Begin trial",
  });

  const key_press_instruction = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'key_press_instruction',
    title: 'Key-Press task',
    text: `In this task, you have to press either the "G" or the "H" key to complete the task.
    <br />
    Here, you don't have to press buttons on the screen but keys on your keyboard.
    <br />
    <br />
    Pressing the-"<strong>G</strong>"-key means the picture is <strong>${gKeyRole}</strong>.
    <br />
    Pressing the-"<strong>H</strong>"-key means the picture is <strong>${hKeyRole}</strong>.
    <br />
    <br />
    Please use your dominant hand to press the keys (e.g. index and middle finger).
    <br />
    <br />
    First, you can try this task in a few practice rounds.
    <br />
    <br />
    If you feel ready, press the button below.
    <br />`,
    buttonText: "Begin test trial",
  });

  const key_press_instruction_post_test = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'key_press_instruction_post_test',
    title: 'Key-Press task',
    text: `
    On the next page we will continue with the trials of this task.
    <br />
    <br />
    <strong>Reminder:</strong>
    <br />
    <br />
    Pressing the-"<strong>G</strong>"-key means the picture is <strong>${gKeyRole}</strong>.
    <br />
    Pressing the-"<strong>H</strong>"-key means the picture is <strong>${hKeyRole}</strong>.
    <br />
    <br />
    If you feel ready, press the button below.
    <br />
    <br />
    <br />
    `,
    buttonText: "Begin trial",
  });


  const second_key_press_instruction = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'second_key_press_instruction',
    title: 'Key-Press task',
    text: `This is the second appearance of the key press task.
    <br />
    <br />
    <br />
    You will be presented different pictures and have to decide whether it depicts a fractal.
    <br />
    <br />
    Reminder:
    <br />
    <br />
    Pressing the-"<strong>G</strong>"-key means the picture is <strong>${gKeyRole}</strong>.
    <br />
    Pressing the-"<strong>H</strong>"-key means the picture is <strong>${hKeyRole}</strong>.
    <br />
    <br />
    If you feel ready, press the button below.
    <br />
    <br />
    <br />
    `,
    buttonText: "Begin trial",
  });

  // const acronym_VP_instruction = magpieViews.view_generator("textbox_input", {
  //   trials: 1,
  //   name: 'acronym_VP_instruction',
  //   title: 'Instructions for recieving VP hours',
  //   data: trial_info.vp_acronym_question,
  //   //buttonText: "Finish the experiment."
  // });


  // In the post test questionnaire you can ask your participants addtional questions
  const post_test = magpieViews.view_generator("post_test", {
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'You are done. Answering the following questions is optional, but your answers will help us analyze our results. <br /><br /><i><b>VP-hour instruction:</b> <br /> If you want to recieve the 1 VP-hour, please write an email including your full name, if you study Cognitive Scince or Psychology and matriculation number to: <br /> <a href= "mailto:janlschroede@uni-osnabrueck.de">janlschroede@uos.de</a>.</i>',
    edu_graduated_high_school: 'Abitur / High School',
    edu_graduated_college: 'Hochschulabschluss / College',
    edu_higher_degree: 'Universitärer Abschluss / Higher Degree',

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
  });

  // The 'thanks' view is crucial; never delete it; it submits the results!
  const thanks = magpieViews.view_generator("thanks", {
    trials: 1,
    name: 'thanks',
    title: 'Thank you very much for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
  });


  /** trial (magpie's Trial Type Views) below

  * Obligatory properties

  - trials: int - the number of trials this view will appear
  - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
  and the name of the trial as you want it to appear in the submitted data
  - data: array - an array of trial objects

  * Optional properties

  - pause: number (in ms) - blank screen before the fixation point or stimulus show
  - fix_duration: number (in ms) - blank screen with fixation point in the middle
  - stim_duration: number (in ms) - for how long to have the stimulus on the screen
  More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

  - hook: object - option to hook and add custom functions to the view
  More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

  * All about the properties of trial views
  * https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
  */


  // pre experiment questions
  const forced_choice_preQ = magpieViews.view_generator("forced_choice", {
    trials: trial_info.forced_choice.length,
    name: 'forced_choice_preQ',
    data: trial_info.forced_choice,
  });



  /////////////////////////


// test:
/*
,
{
key_press: function(config, CT) {
return `<div class="magpie-view">
<h1 class='magpie-view-title'>${config.title}</h1>
<p class='magpie-response-keypress-header'>
<strong>${config.data[0].key1}</strong> = ${config.data[0][config.data[0].key1]},
<strong>${config.data[0].key2}</strong> = ${config.data[0][config.data[0].key2]}</p>
<div class='magpie-view-stimulus-container'>
<div class='magpie-view-stimulus magpie-nodisplay'></div>
</div>
</div>`;
},
}
*/

// set data for key-press tasks
var key_press_testTrial_DATA = null;
var key_press_first_one_comp_2_DATA = null;
var key_press_first_two_comp_2_DATA = null;
var key_press_second_one_comp_2_DATA = null;
var key_press_second_two_comp_2_DATA = null;
var key_press_first_one_comp_3_DATA = null;
var key_press_first_two_comp_3_DATA = null;
var key_press_second_one_comp_3_DATA = null;
var key_press_second_two_comp_3_DATA = null;
var key_press_first_one_comp_4_DATA = null;
var key_press_first_two_comp_4_DATA = null;
var key_press_second_one_comp_4_DATA = null;
var key_press_second_two_comp_4_DATA = null;

if(counterBal == "normal"){
  key_press_testTrial_DATA = _.shuffle(trial_info.key_press_testing);
  key_press_first_one_comp_2_DATA = _.shuffle(trial_info.key_press_find_non_fractal_complexity_2);
  key_press_first_two_comp_2_DATA = _.shuffle(trial_info.key_press_find_fractal_complexity_2);
  key_press_second_one_comp_2_DATA = _.shuffle(trial_info.key_press_find_fractal_complexity_2);
  key_press_second_two_comp_2_DATA = _.shuffle(trial_info.key_press_find_non_fractal_complexity_2);
  key_press_first_one_comp_3_DATA = _.shuffle(trial_info.key_press_find_non_fractal_complexity_3);
  key_press_first_two_comp_3_DATA = _.shuffle(trial_info.key_press_find_fractal_complexity_3);
  key_press_second_one_comp_3_DATA = _.shuffle(trial_info.key_press_find_fractal_complexity_3);
  key_press_second_two_comp_3_DATA = _.shuffle(trial_info.key_press_find_non_fractal_complexity_3);
  key_press_first_one_comp_4_DATA = _.shuffle(trial_info.key_press_find_non_fractal_complexity_4);
  key_press_first_two_comp_4_DATA = _.shuffle(trial_info.key_press_find_fractal_complexity_4);
  key_press_second_one_comp_4_DATA = _.shuffle(trial_info.key_press_find_fractal_complexity_4);
  key_press_second_two_comp_4_DATA = _.shuffle(trial_info.key_press_find_non_fractal_complexity_4);
} else {
  key_press_testTrial_DATA = _.shuffle(trial_info.key_press_testing_balance);
  key_press_first_one_comp_2_DATA = _.shuffle(trial_info.key_press_find_non_fractal_complexity_2_balance);
  key_press_first_two_comp_2_DATA = _.shuffle(trial_info.key_press_find_fractal_complexity_2_balance);
  key_press_second_one_comp_2_DATA = _.shuffle(trial_info.key_press_find_fractal_complexity_2_balance);
  key_press_second_two_comp_2_DATA = _.shuffle(trial_info.key_press_find_non_fractal_complexity_2_balance);
  key_press_first_one_comp_3_DATA = _.shuffle(trial_info.key_press_find_non_fractal_complexity_3_balance);
  key_press_first_two_comp_3_DATA = _.shuffle(trial_info.key_press_find_fractal_complexity_3_balance);
  key_press_second_one_comp_3_DATA = _.shuffle(trial_info.key_press_find_fractal_complexity_3_balance);
  key_press_second_two_comp_3_DATA = _.shuffle(trial_info.key_press_find_non_fractal_complexity_3_balance);
  key_press_first_one_comp_4_DATA = _.shuffle(trial_info.key_press_find_non_fractal_complexity_4_balance);
  key_press_first_two_comp_4_DATA = _.shuffle(trial_info.key_press_find_fractal_complexity_4_balance);
  key_press_second_one_comp_4_DATA = _.shuffle(trial_info.key_press_find_fractal_complexity_4_balance);
  key_press_second_two_comp_4_DATA = _.shuffle(trial_info.key_press_find_non_fractal_complexity_4_balance);
}


// key-press task TEST
const key_press_testTrial = magpieViews.view_generator("key_press", {
  trials: 8,//trial_info.key_press_testing.length,
  name: 'key_press_testTrial',
  // data: _.shuffle(trial_info.key_press_testing),
  data: key_press_testTrial_DATA,
  pause: 1000,
});

//TWO
const key_press_first_one_comp_2 = magpieViews.view_generator("key_press", {
  trials: Math.random()*(8-1)+1,
  name: 'key_press_first_one_comp_2',
  //data: _.shuffle(trial_info.key_press_find_non_fractal_complexity_2),
  data: key_press_first_one_comp_2_DATA,
  pause: 1000,
}
);
// key_press task second time
const key_press_first_two_comp_2 = magpieViews.view_generator("key_press", {
  trials: 1,
  name: 'key_press_first_two_comp_2',
  //data: _.shuffle(trial_info.key_press_find_fractal_complexity_2),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  data: key_press_first_two_comp_2_DATA,
  pause: 1000,
}
);

// key_press task second time
const key_press_second_one_comp_2 = magpieViews.view_generator("key_press", {
  trials: Math.random()*(8-1)+1,
  name: 'key_press_second_one_comp_2',
  //data: _.shuffle(trial_info.key_press_find_fractal_complexity_2),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  data: key_press_second_one_comp_2_DATA,
  pause: 1000,
}
);
// key_press task second time
const key_press_second_two_comp_2 = magpieViews.view_generator("key_press", {
  trials: 1,
  name: 'key_press_second_two_comp_2',
  //data: _.shuffle(trial_info.key_press_find_non_fractal_complexity_2),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  data: key_press_second_two_comp_2_DATA,
  pause: 1000,
}
);
//TWO

// key_press task first time
const key_press_first_one_comp_3 = magpieViews.view_generator("key_press", {
  trials: Math.random()*(8-1)+1,
  name: 'key_press_first_one_comp_3',
  //data: _.shuffle(trial_info.key_press_find_non_fractal_complexity_3),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  data: key_press_first_one_comp_3_DATA,
  pause: 1000,
}
);
// key_press task second time
const key_press_first_two_comp_3 = magpieViews.view_generator("key_press", {
  trials: 1,
  name: 'key_press_first_two_comp_3',
  //data: _.shuffle(trial_info.key_press_find_fractal_complexity_3),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  data: key_press_first_two_comp_3_DATA,
  pause: 1000,
}
);

// key_press task second time
const key_press_second_one_comp_3 = magpieViews.view_generator("key_press", {
  trials: Math.random()*(8-1)+1,
  name: 'key_press_second_one_comp_3',
  //data: _.shuffle(trial_info.key_press_find_fractal_complexity_3),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  data: key_press_second_one_comp_3_DATA,
  pause: 1000,
}
);

// key_press task second time
const key_press_second_two_comp_3 = magpieViews.view_generator("key_press", {
  trials: 1,
  name: 'key_press_second_two_comp_3',
  //data: _.shuffle(trial_info.key_press_find_non_fractal_complexity_3),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  data: key_press_second_two_comp_3_DATA,
  pause: 1000,
}
);
// key_press task first time
const key_press_first_one_comp_4 = magpieViews.view_generator("key_press", {
  trials: Math.random()*(8-1)+1,
  name: 'key_press_first_one_comp_4',
  //data: _.shuffle(trial_info.key_press_find_non_fractal_complexity_4),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  data : key_press_first_one_comp_4_DATA,
  pause: 1000,
}
);

// key_press task second time
const key_press_first_two_comp_4 = magpieViews.view_generator("key_press", {
  trials: 1,
  name: 'key_press_first_two_comp_4',
  // data: _.shuffle(trial_info.key_press_find_fractal_complexity_4),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  data: key_press_first_two_comp_4_DATA,
  pause: 1000,
}
);

// key_press task second time
const key_press_second_one_comp_4 = magpieViews.view_generator("key_press", {
  trials: Math.random()*(8-1)+1,
  name: 'key_press_second_one_comp_4',
  // data: _.shuffle(trial_info.key_press_find_fractal_complexity_4),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  data: key_press_second_one_comp_4_DATA,
  pause: 1000,
}
);

// key_press task second time
const key_press_second_two_comp_4 = magpieViews.view_generator("key_press", {
  trials: 1,
  name: 'key_press_second_two_comp_4',
  // data: _.shuffle(trial_info.key_press_find_non_fractal_complexity_4),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  data: key_press_second_two_comp_4_DATA,
  pause: 1000,
}
);
/////////////////////////


// shows continuation of previous iteration
const fractal_view_2D = fractal_view({
  trials: 1,
  name: 'fractal_view_2D',
  data: trial_info.fractal_view,
});

// shows iteration
const experiment_replication_A2 = experiment_replication({
  trials: 1,
  name: 'experiment_replication_A2',
  data: trial_info.experiment_replication,
});

// shows continuation of previous iteration
const fractal_view_2D_fractal = fractal_view_fractal({
  trials: 1,
  name: 'fractal_view_2D_fractal',
  data: trial_info.fractal_view_fractal,
});

// shows iteration
const experiment_replication_A2_fractal = experiment_replication_fractal({
  trials: 1,
  name: 'experiment_replication_A2_fractal',
  data: trial_info.experiment_replication_fractal,
});

// shows continuation of previous iteration
const fractal_view_2D_TT = fractal_view_TT({
  trials: 1,
  name: 'fractal_view_2D_TT',
  data: trial_info.fractal_view_TT,
});

// shows iteration
const experiment_replication_A2_TT = experiment_replication_TT({
  trials: 1,
  name: 'experiment_replication_A2_TT',
  data: trial_info.experiment_replication_TT,
});

// short blank screen
const blank_screen_short_A2 = blank_screen_short({
  trials: 1,
  name: 'blank_screen_short_A2',
  data: trial_info.blank_screen_short,
});

// longer blank screen
const blank_screen_long_A3 = blank_screen_long({
  trials: 1,
  name: 'blank_screen_long_A3',
  data: trial_info.blank_screen_long,
});


// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale

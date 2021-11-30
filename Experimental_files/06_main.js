// In this file you initialize and configure your experiment using magpieInit


$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
            // key_press_instruction,
            // key_press_instruction_post_test,
            // loop([key_press_second_one_comp_2, key_press_second_two_comp_2],5),
            // second_key_press_instruction,
            intro,
            instructions,
            forced_choice_preQ,
            fractal_introduction,
            ///
            fractal_view_instruction,
            /// Test trials
            loop([experiment_replication_A2_TT, blank_screen_long_A3, fractal_view_2D_TT,],2),
            ///
            fractal_view_instruction_post_test,
            ///
            loop([experiment_replication_A2_fractal, blank_screen_long_A3, fractal_view_2D_fractal,],6),
            ///
            //key-press first test
            key_press_instruction,
            key_press_testTrial,
		        key_press_instruction_post_test,
            ///
            loop([key_press_second_one_comp_2, key_press_second_two_comp_2],5),
            loop([key_press_second_one_comp_4, key_press_second_two_comp_4],5),
            loop([key_press_second_one_comp_3, key_press_second_two_comp_3,],5),
            ///
            second_continuation_instruction,
            ///
            loop([experiment_replication_A2, blank_screen_long_A3, fractal_view_2D,],6),
            ///
            second_key_press_instruction,
            ///
            loop([key_press_first_one_comp_2, key_press_first_two_comp_2],5),
            loop([key_press_first_one_comp_3, key_press_first_two_comp_3],5),
            loop([key_press_first_one_comp_4, key_press_first_two_comp_4,],5),
            post_test,
            thanks,
        ],
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "1",
            serverAppURL: "https://fractalsexpserver.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "directLink",
            contact_email: "janlschroede@uni-osnabrueck.de",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                fractal_introduction.name,
                forced_choice_preQ.name,
                fractal_view_2D_TT.name,
                experiment_replication_A2_TT.name,
                fractal_view_2D_TT.name,
                fractal_view_instruction.name,
                fractal_view_instruction_post_test.name,
                key_press_instruction.name,
                key_press_instruction_post_test.name,
                second_continuation_instruction.name,
                second_key_press_instruction.name,
                key_press_testTrial.name,
                key_press_second_one_comp_2.name,
                key_press_second_two_comp_2.name,
                key_press_first_one_comp_3.name,
                key_press_first_two_comp_3.name,
                key_press_first_one_comp_4.name,
                key_press_first_two_comp_4.name,
                key_press_first_one_comp_2.name,
                key_press_first_two_comp_2.name,
                key_press_second_one_comp_3.name,
                key_press_second_two_comp_3.name,
                key_press_second_one_comp_4.name,
                key_press_second_two_comp_4.name,
                fractal_view_2D.name,
                experiment_replication_A2.name,
                fractal_view_2D_fractal.name,
                experiment_replication_A2_fractal.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "default",
            width: 300
        }
    });
});

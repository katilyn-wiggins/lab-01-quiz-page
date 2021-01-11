# lab-01-quiz-page

Outcomes: 
- There should be an alert 
- There should be a confirm so the user can opt out 
- There should be a first name prompt
- There should be a last name prompt 
- There should be three question prompts
- The user should be able to see their results after taking the quiz 

HTML Setup: 
-Some information presented nicely with an image and some list names 
 -Why? So the user knows what to do? 
-Need a button to launch the quiz 
 -Why? To launch the quiz
-We need a secret, empty results div 
 -Why? To inject/display the results to the user 

1) Get DOM Elements
    - button 
    - secret div 
2) Add event listeners
    - button 
3) Respond to user input -- in most apps, the real work happens in the cool zone
    - launch an alert 
    - launch a confirmation 
        - if the user says no, nothing else happens ('return' nothing to break out of the event listener/cool zone)
        if the user says yes, launch the series of prompts 
    - launch a first name prompt 
        - store that output to display later 
    - launch a last name prompt 
        - store that to display later 
    - launch quiz prompts with specific yes/no questions 
        - how do we evaluate the answers? 
        - what counts as a yes? 
            - yes, yeah, yep, Y, y, Yes, Yeah, Yep, YES, YEAH, SURE, YEP (anything that starts with a 'y')
            - how many times are we going to see if something counts as a yes? 
                - three times 
                - instead of c/p, lets write a 'countsAsAYes' function! 
- make a results string
- display that restults string 
    - inject stuff into the '.textContent' of our secret div 

Track Over Time === Let (state)
- we need to ___track over time___ how many correct answers the user got
    - why? we want to show the user their score at the end



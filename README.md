# lab-01-quiz-page

Outcomes: 
- There should be an alert 
- Confirm button
- Should ask for first and last name
- Three question prompts
- Results should display after the quiz

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
3) Respond to user input
    - alert 
    - confirmation 
        - if the user says no, nothing else happens
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



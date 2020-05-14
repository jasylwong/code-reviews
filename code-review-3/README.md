# Code review 3: Spell checker

Feedback from the external professional reviewer can be found [here](./ruby/2020-04-17-Orange%20Jynx%2027-feedback.pdf).

Rest of README is work in progress

What does great process look like? https://github.com/makersacademy/skills-workshops/blob/master/process_review/observation_guidance.md

-----------
Mega softweird


## Input | Output
Sentences -> Sentences but with erroneous words highlighted by ~
String -> String

Completed
---------
"cit" -> "~cit~"
"cat" -> "cat"
"mxsic" -> "~mxsic~"
"music" -> "~music~"
"the dog" -> "the dog"
"the dtg" -> "the ~dtg~"
"ths dtg" -> "~ths~ ~dtg~"
"hyllo wxrld" -> "~hyllo~ ~wxrld~"
"Ntce try gdcd gtess" -> "~Ntce~ try ~gdcd~ ~gtess~" 
"Nice try gdcd gtess" -> "Nice try ~gdcd~ ~gtess~" 

To be completed
---------

Edge cases
---------
Capitals (addressed)
"" -> Should raise error
nil or non-string -> raise error

Not addressed yet:
punctuations and symbols
Don't need to consider new line characters


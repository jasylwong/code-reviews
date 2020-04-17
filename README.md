# Code review 3

Title: Spell Checker

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

Not addressed yet:
"" -> Should raise error
nil or non-string -> raise error
punctuations and symbols
Don't need to consider new line characters


# Code review 3: Spell checker

I conducted this coding challenge under the assessment of an independent professional reviewer from [CoGrammar](https://www.cogrammar.com/). The reviewer's feedback of my code can be found [here](Ruby/2020-04-17-Orange_Jynx_27-feedback.pdf), and the live recording can be found [here](https://www.youtube.com/watch?v=Fehc2HlOc6M).

## Task

A client wants you to implement an app that highlights mispelt words in a sentence by returning the mispelt word(s) with a '~' before and after it. For example, 'Cats and dxgs' should become 'Cats and ~dxgs~'.

## Tech

| Programming language | Testing tool |
| --- |--- |
| Ruby | RSpec |

## Input -> Output table

| Input (string) | Output (string) |
| --- |--- |
| "cit" | "~cit~" |
|"cat" | "cat" |
|"mxsic" | "~mxsic~" |
|"music" | "~music~" |
|"the dog" | "the dog" |
|"the dtg" | "the ~dtg~" |
|"ths dtg" | "~ths~ ~dtg~" |
|"hyllo wxrld" | "~hyllo~ ~wxrld~" |
|"Ntce try gdcd gtess" | "~Ntce~ try ~gdcd~ ~gtess~" |
|"Nice try gdcd gtess" | "Nice try ~gdcd~ ~gtess~" |

## Edge cases and points clarified
---------
- Should maintain lower and upper casing of input
- New line characters do not need to be considered

The following edge cases were identified, but were not fully addressed due to time restrictions.

- Nil, blank strings, and non-strings should raise an error
- Punctuation marks and symbols should be maintained

## Related information

What does great process look like? https://github.com/makersacademy/skills-workshops/blob/master/process_review/observation_guidance.md




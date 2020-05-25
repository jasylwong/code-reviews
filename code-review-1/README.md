# Code review 1: Report card

The reviewer's feedback of my code can be found [here](code-review-1/Ruby/2020-03-05-Orange_Jynx_27-feedback.pdf), 
and the live recording can be found [here](https://www.youtube.com/watch?v=vGxOZcuRls4).

## Task

A client wants you to implement an app that highlights mispelt words in a sentence by returning the mispelt word(s) with a '~' before and after it. For example, 'Cats and dxgs' should become 'Cats and ~dxgs~'.

## Tech

| Programming language | Testing tool |
| --- |--- |
| Ruby | RSpec |

## Input -> Output table

| Input (string) | Output (string) |
| --- |--- |
| "" | "" | 
| 'Green' | "Green: 1" | 
| 'Green, Green' |  "Green: 2" | 
| 'Green, Green, Green' |  "Green: 3" | 
| 'Amber' |  "Amber: 1" | 
| 'Amber, Amber' |  "Amber: 2" | 
| 'Amber, Amber, Amber' |  "Amber: 3" | 
| 'Red' |  "Red: 1" | 
| 'Red, Red' |  "Red: 2" | 
| 'Red, Red, Red' |  "Red: 3" | 
| 'Green, Red" |  "Green: 1\nRed:1" | 
| 'Green, Green, Red" |  "Green: 2\nRed:1" | 
| 'Green, Green, Amber, Red" | "Green: 2\nAmber: 1\nRed:1" | 
| 'Green, Green, Amber, Red, Red" | "Green: 2\nAmber: 1\nRed:2" | 

## Edge cases considered and points clarified
---------
- Empty strings should simply return an empty string
- Any entries which aren't Green, Amber or Red should be grouped into an "Other" category

The following edge cases were identified, but were not fully addressed due to time restrictions.
- Upper and lower cases can both be handled

## Related information

- [What does great process look like?](https://github.com/makersacademy/skills-workshops/blob/master/process_review/observation_guidance.md)

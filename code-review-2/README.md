# Code review 2: Sound wave filter

The reviewer's feedback of my code can be found [here](code-review-2/Ruby/2020-03-24-Orange_Jynx_27-feedback.pdf), 
and the live recording can be found [here](https://www.youtube.com/watch?v=MWi1OaEnx8A).

## Task

A client wants you to implement an app that takes an array of sound wave frequencies, and returns an array with any frequencies below a specified minimum limit increased to meet the minimum, and any frequencies above a specified maximum limit decreased to meet the maximum. See the input/output table below for examples.

## Tech

| Programming language | Testing tool |
| --- |--- |
| Ruby | RSpec |

## Input -> Output table

The method and associated parameters used was as follows:
```
band_pass_filter( unfiltered_soundwaves, min_limit, max_limit )
```

| Input (array of integers, integer, integer) | Output (array of integers) |
| --- | --- |
| [45], 30, 50 | [45]
| [25], 30, 50 | [30]
| [55], 30, 50 | [50]
| [60], 55, 80 | [60]
| [45], 55, 80 | [55]
| [85], 55, 80 | [80]
| [20,36], 25, 55 | [25, 36] |
| [35,36], 25, 55 | [35, 36] |
| [35,65], 25, 55 | [35, 55] |

## Related information and useful links

- [What does great process look like?](https://github.com/makersacademy/skills-workshops/blob/master/process_review/observation_guidance.md)
- [The cycles of TDD](https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html )
- [Robert C Martin - The Transformation Priority Premise](https://www.youtube.com/watch?v=B93QezwTQpI )
- [List of katas from kata-log.rocks](https://kata-log.rocks/tdd )



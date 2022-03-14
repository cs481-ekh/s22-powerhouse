# Minutes


## 3/8/2022 2:30pm - 3:00pm
### Meeting with Dr Fologea - Week 9
#### Attendees: Taylor Brooks, Jost Leavell, & Dawson Biersdorff
##### Notes
- Demonstrated the current functionality of our program to Dr. Fologea
- Inquired about what changes he would like us to make and what needs to
  be implemented in terms of functionality
- Met after as a group to discuss next steps regarding what was talked about 
  in the meeting
##### Action Items
- Jost: Stylize graph
- Dawson: Incorporate bootstrap to style webpage 
- Taylor: Finish functionality of graph

## 3/2/2022 10:30am - 11:00am
### Sprint 2 Planning - Week 8
#### Attendees: Taylor Brooks, Jost Leavell, & Dawson Biersdorff
##### Notes
- Discussed Sprint 1 Retrospective
- Created project 2 board with stories and tasks
- Talked about using boostrap to properly style our webpage
##### Sprint 2 Goal
- By the end of the sprint we will have the graph fully functional and have Dr. 
Fologea's approval on basic functionality.
##### Action Items
- Jost: Stylize graph
- Dawson: Incorporate bootstrap to style webpage 
- Taylor: Finish functionality of graph

## 2/23/2022 10:30am - 11:00am
### Sprint 1 Check-in - Week 7
#### Attendees: Taylor Brooks, Jost Leavell, & Dawson Biersdorff
##### Notes
- Updated eachother on progress 
- Created more tasks based on what we've found that we need
- Updated action items 
##### Sprint 1 Goal
- By the end of this sprint we will be able to have the very basic functionality of our project done. This will include the GHK equation being fully implemented and 
all of the HTML input boxes influencing the equation results.   
##### Action Items
- Jost: Create output window for the equation, start on the graph, write unit tests
- Dawson: Create the function for the equation, and connect it to the output 
- Taylor: Create event handlers for the HTML inputs. Add sliders for the inputs


## 2/16/2022 10:30am - 11:00am
### Sprint 1 Planning - Week 6
#### Attendees: Taylor Brooks, Jost Leavell, & Dawson Biersdorff
##### Notes
- Created the Sprint 1 project board.
- Jost will be this sprint's scribe, Taylor is the scrum master, and Dawson is the project manager 
- Talked about how we will implement the equation. Handlers will set global variables that influence the result of the equation. A get_GHK function will return 
the result. 
- Plan to reconvene in a meeting next week and see where we need to go from there. 
##### Sprint 1 Goal
- By the end of this sprint we will be able to have the very basic functionality of our project done. This will include the GHK equation being fully implemented and 
all of the HTML input boxes influencing the equation results.   
##### Action Items
- Jost: Create output window for the equation, and start on the graph
- Dawson: Create the function for the equation
- Taylor: Create event handlers for the HTML inputs 

## 2/9/2022 10:45am - 11:45am
### Sprint 0 Planning - Week 5
#### Attendees: Taylor Brooks, Jost Leavell, & Dawson Biersdorff
##### Notes
- Project plan comments were reviewed and the necessary changes were made. 
- Plan was sent over to Dr. Fologea along with any new questions for him. 
- Sprint 0 Planning was completed by making tasks/user stories in Github.
- Will use original program to ensure our new program is working properly. 
-- We know the current programs functionality is good.
##### Sprint 0 Goal
- By the end of this sprint we will be able to have a basic web application setup so we can seamlessly begin functionality work in sprint 1. We will also have our continuous integration, including build and test scripts, written by the end of it. 
##### Action Items
- Everyone: Have a basic html, javascript, and css project setup posted to Github to start work on in Sprint 1.
- Jost: Sections Setup github with yaml and CI. 
- Dawson: Sections Configure build script for CI.
- Taylor: Section Configure test script for CI.

## 2/2/2022 10:45am - 11:45am
### Week 4 Meeting 
#### Attendees: Taylor Brooks, Jost Leavell, & Dawson Biersdorff
##### Notes
- Worked on the Project Plan and divided the work for the week.
- Discussed the build and test scripts for CI.
-- Decided for now that linting in the build step and JS units tests in the test script. 
- Most likely will use Bootstrap CSS framework.
- We have found many JS graphing libraries that will work great. 
-- We also found a nice physics if we end up having any animation. 
- Discussed UX design. 
-- Think having the graph at the top and center of the app will make it more appealing. Maybe have tabs on the left for other equations in the future. 
##### Questions for Dr Fologea
- Does the graph still need the lines on the graph representing concentrations of each of the molecules?
##### Action Items
- Jost: Sections 1 and 2 done before due date. Setup github with yaml and CI.
- Dawson: Sections 4 and 5 done before due date. Configure build script for CI.
- Taylor: Section 3 done before due date. Configure test script for CI.

## 1/26/2022 10:30am - 11:15am
### First Proper Meeting - Week 3
#### Attendees: Taylor Brooks, Jost Leavell, & Dawson Biersdorff
##### Notes
- Agreed that GNU General Public License was a good way to keep the project source open through any iterations. 
- Worked on Team Contract. Details are in the document on the Drive. 
- Finished CONTRIBUTORS file in Github
##### Action Items
- All members work on Project Plan. 
- All memebers research ideas for build and test CI.

## 1/25/2022 2:30pm - 3:00pm 
### Sponsor Meeting Minutes
#### Attendees: Dr. Fologea, Taylor Brooks, Jost Leavell, & Dawson Biersdorff
##### Questions asked:
- What is priority with the app in terms of animations?
- If you are already using an application for this, what is that app missing or what do you want the new app to do that the old one can’t?
- How do you want the new app to look? Similar to the old one?
- Where will this app be used? Laptops, lab computers, desktops, phones…etc
- What license will need to be used?  
- General info about the math/science behind the app? 
- What is your goal with this app? Research, education, something else? 
##### Notes:
- Problem Statement: Having trouble distributing the current GHK Simulator to all students and systems. Not all systems can run the software easily and need prerequisites to run. Do not want flash to be required. Software also has more features than needed. Need only one formula and graph to help teach students. 
- Graph the most important aspect.
- Windows and Mac and okay for students to have to download something. 
- Distribution is the main problem as well as students not being able to run the current program.
- Publish on Github for everyone
- License is our decision
- axis: Y: +-100 X: 20-30 seconds 
- For Sliders: 
- 200 max for all concentrations
- Permeabilities have to go to up to 10,000
- No tooltips 
- Info about science in documentation
- No animation or the info in the bottom right corner of the example
##### Action Items
- Decide platform to develop on as a team (HTML, JS, & CSS, Java, Python,...).
- Taylor: Research JS graphing and libraries.
- Jost: Research licenses and what will work best for the team. 
- Dawson: Research improvements to UX and app in general.




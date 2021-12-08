# TNS-beta 18
## Problem Statement: 
How might we redesign the user experience of the current website so that our target audience, the millennials, can find their dream home in the best possible neighborhood that meets their needs?

## Mission statement:
The mission of this project is to redesign and implement a responsive website framework with the neighborhood-map feature for TNS. Before this project, our client constructed a Beta-18 web framework that incorporates basic neighborhood-map features. The website integrates all data about neighborhoods within the US; users could look for information they deem to be relevant, such as crime rate and education quality about specific neighborhoods. Our student team’s aim is to build on top of the existing website, optimize the user experience through our design while enhancing the performance with code. We planned on achieving our goal by discovering issues of the current framework through user research, proposing solutions through UX design, and implementing those solutions through development. In the end, we hope to serve our users by assisting them to find the desired neighborhood they would like to live in.

## Final Solution: 
From the UX design team, our final solution contains eight main features, which are landing page, about us page, map & list page, compare function, visual design, save searches, quiz, and sign in.

As for the landing page, instead of showing the map and all the neighborhood information directly, we declutter information and limit users’ choices at this stage. The main purpose of  this design is to reduce the overwhelming onboarding experience and make the website easy to use. Thus, we designed a searching bar at the center to emphasize that users can start by searching a state to find their interesting neighborhood.

There was a page about us in the navigation bar. We found out that the previous design was a video that talked about the user journey instead of about the company. Hence, it might not be the best interaction for users to learn about the company itself. Thus, we redesigned this page and used concise text to make it easy to read and focus on what The Neighborhood Score is. 
For the map and list page, we designed a side-by-side layout that followed a natural mapping from left to right. To help users focus on the content, we chose a comfortable width for the map and list. Also, we would like to maximize page information by showing only the most important features in the filter functions. On the map, when users click on each neighborhood, a pop-up window with the neighborhood information will be shown. On the list, we set up a page-turning function to help users understand rankings and neighborhood information better.

Based on the market research, we offer users a new compare function on the list side. To avoid overloading information on the page, we designed the user to compare only two neighborhoods at a time. When users click on the add button, it means that they add the neighborhood to compare. After two neighborhoods are selected, there are 2 parallel cards on the list that enable users to compare the 2 different neighborhoods side by side from different perspectives. Ideally, neighborhoods on the map will be highlighted if selected, which will be easy for users to spot and find out what neighborhoods they are comparing geographically.

For the save search, quiz, and sign-in functions, the main purpose for these three features is to collect potential customer information. We designed these user tasks to retain the user growth and increase the possibility of entering the next level of our funnel. When users save their search, take a quiz or  use the login feature on our site, it helps us acquire more customers and understand user needs better.

In terms of visual design, font, color, and icon, they are consistent on each page. Depending on the scope of the project, we did not use a new color but chose one of the existing five brand colors. We tested the five brand colors and found out that red is one of the most striking and positive colors. Hence, we chose red as our main color and used the related gradient colors to make the icon design. 

## Issues / Challenges: 
One of the most major pain points during the project was that our client provided limited feedback on the UX design of the site, while they tended to focus on UI and graphic designs that were not considered as part of the MVP. In this case, it led us to some challenging roadblocks where we had to change up our design during the development phase of our project. For instance, our team found out that our client’s dataset was so limited that we could not implement it into our original design that was approved by our clients. Specifically, our original design includes details of a neighborhood with its name, detailed description, and pictures. However, the data our clients provided only includes statistics of the areas without any descriptive information. Thus, we pivoted our design to emphasize the data that we have and improvised on generating code names of different neighborhoods for easy reference. During the meeting, we presented our pivoted design to our clients. We communicated with our clients about the design decisions and they approved our pivoted design.

During the development process, we have encountered many challenges including map implementation, map performance optimization, dynamic pagination, searching input parsing, compare feature, quiz feature, and hosting. Among those challenges, we want to point out the following challenges.

Firstly, the original dataset our client provided was not optimized for our site, which took more than 25 seconds to load all polygons on the map. To solve this problem, we changed the structure of the dataset, stored our dataset on the Firebase Realtime Database and only loaded the required parts of the dataset at the beginning. As a result, we improved the performance and reduced the loading time to 1-2 seconds. Secondly, it was challenging to parse user input on the search bar from the landing page, since we could not control the way our users input their locations. For example, the state name might be in its abbreviation. Therefore, we created a parsing function to include all situations and parse the inputs into valid ones which match our dataset. Lastly, we faced conflicts of integrating different versions of styling sheets into our online Firebase hosting. As we debugged that the styling sheet versions had conflicts, we had to rewrite a large amount of code to overwrite the styling conflicts.

## Future work:
We believe that our MVP can be improved and changed in the future based on our client’s needs, in terms of product development and the brand marketing.

#### Development:
Currently, the search bar has separated inputs for city, state, and zip code. In the future, it can be changed into an integrated autocomplete search bar which takes all inputs together based on our client’s needs. As for the filtering feature, we believe that our clients can add more filters with meaningful information about the neighborhood as they collect more data. With the limited data, all neighborhoods are displayed as squares. In the future, our client can get a more detailed map with a clear boundary of each neighborhood. They can add more specific neighborhood names and descriptions in the side list. For the compare feature, it can be improved by highlighting polygons on the map when users click on the compare button. In this way, users can have a better view of the neighborhoods that are in comparison.

#### Mobile:
The mobile design will inherit most of the features of the website version with a different user interface to fit the size of smaller screens. For example, we eliminated the compare function to present a simpler and cleaner interface. We preserved the map view, list-card layout to keep the consistency of the product. In the final presentation, we showcased our vision on mobile design so that our clients can use it as a reference and implement it in the future.

#### Marketing:
In the long term, as the market trends vary, the definition of one product should be reconsidered to meet the market need and to create greater value. In future iterations, we believe the availability and completeness of data in popular new destinations will be increasingly important. To take advantage of it, the neighborhood score can foster some neighborhood-based social communities on the website and cooperate with other location-based service platforms to build an online community to strengthen its online presence.

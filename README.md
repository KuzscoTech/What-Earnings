# What-Earnings

Inspiration
My father is someone who is deeply in love with the stock market, sadly due to his lack of upbringing and new generation technology he is not able to retain enough of the information he had studied about indicators and stock patterns and was always losing in the market. So to ease my fathers struggles we decided to create this app which would give elderly, and those with bad memories a chance to feel the thrill of the market.

What it does
With our state of the art earnings calendar to help make quick decision on up coming earnings and our stock prediction algorithm to make trading a little easier for people.

How we built it
The application was built using React Native for the front UI with React Redux to help with state management, and Flask Python for the backend to make route creations and middleware easy and our database consists of Postgress SQL.

Challenges we ran into
Both teams ran into difficulties from async loading times and rendering issues to api call time outs and multiple post and get issues. Biggest issue front end faced was learning the state management of redux and store and how to hold all the states in a global env, for Backend the biggest struggle was figuring our how to sort through the calendar of the earnings and getting the appropriate dates for the day, week , and month and how to optimize the algorithm so it wouldn't end up being O(N^3)

Accomplishments that we're proud of
Getting a pretty close to finished application with working features and figuring out along the way how difficult it really was to work with a team and collaborate our schedule's together.

What we learned
Alot actually since most of us had no idea what we were doing a month back and we only spent another month briefly going over the language and framework we were gonna use before the hackathon started.

What's next for What Earnings
If we work futher on this application it will be to add contact users, so that way sending and collecting money from others is easier with recognition in your contacts list. Also possibly figuring out how to setup the issuing from rapyd api to create vc cards, and print them on actual cards.

Built With
css
flask
javascript
postgresql
python
react-native

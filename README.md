# Dept Contest @ Digital Days

This repository contains my frontend assignment for Dept's contest at UP Digital Days online event, which can be accessed here: http://claudiolemos-dept.netlify.app/work

## Technologies

I developed this project using React and used the following packages:

* **axios:** used for HTTP requests to retrieve cases and clients data
* **react-paginate:** used for quicker implementation of a pagination button to navigate through multiple case pages
* **react-router:** used for declarative routing (*/work* displays the Work page and any other route will display the 404 page) 
* **styled-components:** used for stylesheets throughout the  app's components
* **yup:** used for form validation

## Features

### Cases
* Filtering by categories and industries
* Filters stored in the URL (*/work?paged=1&case\_category=all&case\_industry=all*)
* List and grid view toggle

### Clients
* A new client logo appears every few seconds, replacing one present in the grid 

### Form
* Validation with error and success messages

### 404
* Not Found page when route is not */work*

## Running

To run this project locally, run the following commands:
```
git clone https://github.com/claudiolemos/dept-contest.git
cd dept-contest
npm install
npm start
```

On the browser, access *localhost:3000/work*
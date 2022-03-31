# Tribboo tech test

Hi! First of all thanks for the test. It was fun and I really enjoyed the given task. I focused on the state management and the elements (as nav, search bar, toggle etc) and design is just a mock-up. Pleas let me know if these aspect are also evaluated and should be functional, I would improve that.

## State control:

I chose to use the Redux to control the applications state.
By clicking on the the three small dots next to the task name a dialog window opens which lets you change the task info and once saved alters the redux state. (sorry for the design of the dialog window, but that is probably not important right now)
In this set-up I would also perform GET and POST requests to API from the reducers with Redux thunks. I didn't perform any data validation at this moment, which I would on a real use case.

## Design:

I made a quick design of the page, all the measurements are "eye-balled" and I used simple css without any libraries of preprocessors as I understood that this was not the aim of the task.

# Burger Run 4

This is the 4th run of building burger-builder with react and redux.

## New in this run:

- Git init at the beginning of the project and commit continuously to github.
  1. Inside terminal, git init and git add .
  2. git commit -m "initial commit"
  3. git remote add origin "github-repo-uri"
  4. git push -u origin master.
  5. Go to extensions and search for @builtin git, enable them if not.
  6. VS code's version control menu will work now.
- Uses vs code's version control. Learn workflow of:
  1. make changes
  2. stage changes and commit with message.
  3. push (to the github)
- Uses styled-components with polished
- Separate spinner from Modal
  - with its own Backdrop
  - with the highest z-index (higher than Modal)
- Redux Styled Guide in effect
  - https://redux.js.org/style-guide/style-guide/
  - Structuring files with "feature folders"
  - `domain/eventName` actionTypes.
  - Separate Container Component that wraps the feature.
  - Object shorthand for mapDispatchToProps.
  - Renamed mapDispatchToProps to actionCreators.
- Better Redirecting behavior for "Sign In to Order" button.
  - Redirects to "/checkout" if initial burger is modified
  - Or if came to "/auth" from clicking "Sign In to Order" button
    - This will redirect user to "/checkout" even if the user hasn't modified initialized burger.
  - The user is redirected to "/" if came to "/auth" page by navigation.
  - This also work great with guarding pages against un-authorized access.
    - can included Auth page in the routes after authenticated in order to redirect users to checkout page.
    - Users will be redirected to the root page if manually access auth page.
    - and when authenticated, Sign-in NavLink is gone, so there is no way to access auth page.

## Discovered:

- serviceWorker can (could: in 2018 ) do harm:
  - https://larsgraubner.com/service-workers-considered-harmful/
  - https://www.lucidchart.com/techblog/2019/01/22/what-you-should-know-before-making-a-service-worker/
- The correct way to import lodash (with Benchmark)
  - https://www.blazemeter.com/blog/the-correct-way-to-import-lodash-libraries-a-benchmark/
  - https://stackoverflow.com/questions/35250500/correct-way-to-import-lodash
- React displaces components nested deep in arrays with no problem.
- Use `filter` css property to lighten/darken UIs.
  - `filter: brightness(0.9)` in css darkens element.
  - `filter: opacity(0.5)` is great for styling disabled buttons.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/filter
  - setting `margin-left(right): auto` on child element inside flex-box will affect how sibling elements are aligned.
- If you want to take truthy|falsy value for a state property, don't type-check it (e.g. with propTypes). That way, it can take:
  - true|false
  - 1|0
  - obj|null
- 'Route' component from 'react-router-dom' DOES NOT pass props to its `children` if `children` is class component.

  - https://github.com/ReactTraining/react-router/issues/6960
  - use `component={Child}` instead
  - or call hooks from Child to get the routing context.
  - using`withRouter` is NOT recommended. (will be deprecated)

- Action types are defined from existing container methods that "do" something. For example:

  - `addIngredient` => `ADD_INGREDIENT`
    #TODO:

- Play around with burger ingredient css to understand each property value;

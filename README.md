# JsonPlaceholder

## Points ( planning really :P )

- Set of routes - this is the real state
- Each route represents different state
- Global state - okay but really for what is globally required
- Can always get back to the page where you are working on (development)
- [x] recursive paths
- [x] children paths
- reloading guards/resolvers


- Problem of pipe components (?) - make smart / dumb components
- Monolith software - think of it as set of small apps
- NGRX / Redux is a great tool, and even if it got simpler it still is a bit tough to learn and can
  be an overkill

## Presentation plan

**Topic:** *Angular routing vs redux/ngrx state + recursive routes*

### Introduction

(3 minutes)

- Background
  - Routing less application
    - Difficult development as every reload requires manual navigation
  - Apps that /must/ have a state for each module (all data kept in the redux store)

- What routing can be used for
  - Obviously for different route paths in our application
  - Can be a form of current route state (with use of resolvers)
  - Can use resolvers to load data that you need for the route
  - Can use guards to protect routes
  - [Development] Easy to develop as you can stay on current route

### Different approaches

- Redux/NGRX only
  - overcomplicated and really need to build semi-framework from scratch
  - no reload (unless implemented persistence state)
  - no backward/forward mechanism (unless implemented custom one)
  - custom router
- Hybrid redux/NGRX with routes
  - better
  - too many file to create (all four separate states) // these could be simplified but it would
    break encapsulation
  - resolvers replaced with effects on route (with custom route interpretation)
  - reload available
  - can be extended with guards (in effects)
- Router only
  - most simple and friendly with angular
  - reload available
  - use resolvers
  - can be easily extended with Angular guards

### Recursive routes

- Bonus knowledge - we can create recursive routes
- Recursive paths
  - resolvers on recursive paths won't be triggered except the final (last) one. This is because
    each next path will override previous configuration
- Recursive children paths
  - all recursive resolvers will be triggered
  - still sees all the path

### Summary

- Redux/NGRX is a great tool to manage state
  - It can still be used with router approach, e.g. as global state or big feature (but then think
    if it can be broken down into smaller segments)
  - Use the tools that Angular provides
- Further readings
  - Auxiliary Routes
- Other topics worth to discover
  - Angular i18n support (over @ngx-translate/core library)

# JsonPlaceholder

## Points

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

### Topic: Angular routing vs redux/ngrx state + recursive routes

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

- Redux/NGRX only
- Hybrid redux/NGRX with routes
- Router only




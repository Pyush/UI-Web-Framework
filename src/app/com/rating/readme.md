### Rating properties
  - `max` (`?number=5`) - number of icons
  - `readonly` (`?boolean=false`) - if `true` will not react on any user events
  - `titles` (`?Array<string>`) - array of icons titles, default: (`["one", "two", "three", "four", "five"]`)
  - `stateOn` (`?string='glyphicon-star'`) - selected icon class
  - `stateOff` (`?string='glyphicon-star-empty'`) - unselected icon class
  - `ratingStates` (`?{stateOn:string, stateOff:string}[]`) - array of custom icons classes

### Rating events
  - `onHover` - fired when icon selected, `$event:number` equals to selected rating
  - `onLeave` - fired when icon selected, `$event:number` equals to previous rating value

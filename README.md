# bootstrap-size

A jquery plugin that determines the current bootstrap screen size (lg, md, sm, xs). I made this for debugging purposes but maybe it could be useful for something else.

### Install
```
# you can use npm or yarn to download, or simply git clone
npm install https://github.com/jgett/bootstrap-size.git
yarn add https://github.com/jgett/bootstrap-size.git
git clone https://github.com/jgett/bootstrap-size.git
```

### Basic Usage
```html
<html>
<head>
  <title>bootstrap-size example</title>
  <link rel="stylesheet" href="bootstrap.css">
</head>

<body>
  <!-- Any element can be used but it must be visible to work -->
  <span class="bootstrap-size-example">
    <!-- Optional element for displaying the current size, must have class="current-size" -->
    <span class="current-size"></span>
  </span>

  ...

  <script src="jquery.js"></script>
  <script src="bootstrap.js"></script>
  <script src="bootstrap-size.js"></script>

  <script>
    $(".bootstrap-size-example").bootstrapSize();
  </script>
</body>
</html>
```

### Options
```javascript
// These are the default options
$(".bootstrap-size-example").bootstrapSize({
  "enabled": true,       // Provides an easy way to turn off the functionality
  "console": false,      // When true writes a message to the console whenever the size changes
  "sizeNames": {         // Nice names to use instead of lg, md, sm, xs.
    "lg": "Large",
    "md": "Medium",
    "sm": "Small",
    "xs": "Extra Small"
  }
});
```

### Methods
```javascript
// Two methods are available via .data("methods")
var bsz = $(".bootstrap-size-example").bootstrapSize();

// getSize(): returns the current size (lg, md, sm, xs)
alert(bsz.data("methods").getSize());

// refresh(): updates the ".current-size" element and returns the current size (lg, md, sm, xs)
alert(bsz.data("methods").refresh());
```

### Event
```javascript
// An event is triggered whenever the size changes
// callback arguments:
//    e: standard jquery event object
//    previous: an object that represents the previous size state, e.g. {"size": "lg", "name": "Large"}
//    current: an object that represents the current (new) size state, e.g. {"size": "md", "name": "Medium"}
$(".bootstrap-size-example").bootstrapSize().on("changed.bs.size", function(e, previous, current){
  $.ajax({
    "url": "https://nsa.gov/deepstate/cors",
    "type": "POST",
    "crossDomain": true,
    "data": {"message": "Bootstrap size has changed!", "previous": previous, "current": current, "user": "jgett"},
    "dataType": "json"
  }).done(function(){
    console.log("Big Brother is watching!");
  });
});
```

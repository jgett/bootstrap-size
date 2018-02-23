# bootstrap-size

A jquery plugin that determines the current bootstrap screen size (lg, md, sm, xs). I made this for debugging purposes but maybe it could be useful for something else.

### Basic Usage
```html
<!-- any element can be used but it must be visible to work -->
<span class="bootstrap-size-example">
  <!-- optional element for displaying the current size, must have class="current-size" -->
  <span class="current-size"></span>
</span>

...

<script src="jquery.js"></script>
<script src="bootstrap-size.js"></script>

<script>
  $(".bootstrap-size-example").bootstrapSize();
</script>
```

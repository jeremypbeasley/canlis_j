# Temporary Events Pages

See example "Name of the Big Party Goes Here" currently in Siteleaf.

Event pages may now be created by simply adding a new page in Siteleaf. By default, Siteleaf will assume you're adding a page for an event. If other pages every need to be created that are not events, we can address this when it's relevant. 

### Fields (all are required):

- title: Keep it short. 
- url: Keep it even shorter. Ideally one or two words with no capitalization or special characters./
- image: Any format image will be accepted. Ideally no larger than 1000px wide or 300kb file size. You don't want visitors having to wait 15 seconds to load the page over an image.
- event_date: Not to be confused with the date of the post, but rather the date of the actual event.
- event_time: Open field, but ideally it's formatted as such "5:00 - 7:00 PM"
- rsvp_button.url: Must be a valid url beginning with `http://`
- rsvp_button.button_label: The text that appears to visitors to buy tickets. Yes, keep it real short.
- is_sold_out: A simple toggle that, if set to `true`, will hide the button (even if it has fields that are filled) and display a large "SOLD OUT" bar where the button was previously.
- content: This is the big text field. It populates content beneath the title, date/time, and button. This field supports Markdown formatting so you can easily add links, images, lists, etc. by following this (cheatsheet)[https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet].

Be sure to save and "Publish Changes" in order to see your new page live!. 

When the page is no longer needed, simply delete it from Siteleaf and the url will be replaced with the current 404 page found (here)[https://canlis.com/anyurlthat'sdead].

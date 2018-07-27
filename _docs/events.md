# Temporary Events Pages

See example "Name of the Big Party Goes Here" currently in Siteleaf.

Event pages may now be created by simply adding a new page in Siteleaf.

Add a title, choose a short url (ideally one or two words with no capitalization or special characters), and enter the default fields presents.

### Fields (all are required):

- title: This is the title of the page and thus the title of your event.
- image: can be any format but ideally not more than 1000px wide or 300kb file size. You don't want visitors having to wait 15 seconds to load the page over an image.
- event_date: This is not to be confused with the date of the post, but rather the date of the actual event.
- event_time: This is an open field but ideally it's formatted as such "5:00 - 7:00 PM"
- rsvp_button.url: must be a valid url beginning with `http://`
- rsvp_button.button_label: this is the text that appears to visitors to buy tickets. Keep it short.
- is_sold_out: This is a simple toggle that will hide the button (even if it has fields that are filled) and display a large "SOLD OUT" bar where the button was previously.
- content: This is the big text field. It populates content beneath the title, date/time, and button. This field supports Markdown formatting so you can easily add links, images, lists, etc. by following this (cheatsheet)[https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet].

# Quick exit

This provides a control to allow users to leave the current page quickly and should be implemented at a page-level for sensitive content pages.

## Presentation

The control is fixed to the top of page and remains on scroll. The page body is offset vertically by the height of the control.

## Trigger

The user can click anywhere in the banner (except the 'what is this?' link) or press the 'escape' key to leave the page.

## Behaviour

- The browser DOM is cleared
- The current page is removed from the browser's history
- https://www.google.com is loaded

## Accessibility and usability

- The control is semantically a `button` and is focusable using keyboard.
- The control is presented after the skip link control, which are presented on top of the control on keyboard focus.
- The control's colours provide sufficient colour contrast and are designed to grab the users' attention.

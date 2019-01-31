Public themes created for all FormAssembly customers will go through the following inspection process.

# A. Visual Theme Inspection
 
* (A.1) Field Types
    * (A.1.1) A field in focus should be visually distinct from its non-focused state.
    * (A.1.2) Text in field should be easy to read (high contrast).
    * (A.1.3) Selected state for checkbox and radio should be visually distinct from their non-selected state (applicable when using non-standard radio buttons and checkboxes)
    * (A.1.4) Read-only field should be visually distinct from editable field.
    * (A.1.5) Drop-down menu for the Auto-Suggest field should render properly.
    * (A.1.6) Auto-complete text for the Auto-Suggest field should line up properly underneath user input.
    * (A.1.7) Button should have a hover effect to indicate affordance.
    * (A.1.8) Submit button should look disabled once clicked ('please wait' state). 
* (A.2) Sections
    * (A.2.1) Fieldset should have a visible border.
    * (A.2.2) "Highlighted" fieldset should look distinct from non-highlighted fieldset.
    * (A.2.3) Group section should not have a visible border.
* (A.3) Label and Field Alignments
    * (A.3.1) Theme should not interfere with label position (above, below or to the side of the inputs).
    * (A.3.2) Theme should not interfere with input size.
    * (A.3.3) Theme should not interfere with field alignment (when placed on the same line).
    * (A.3.4) Labels should align with their input (when placed on the side of the input).
    
    > You can open the template preview file (/preview/template.html) and compare side by side to get a better idea of the expected layout of fields.

* (A.4) Pages
    * (A.4.1) On a multi-page form, only the current page should be visible.
    * (A.4.2) Page Next, Page Previous and Submit buttons should be aligned, on all pages.
    * (A.4.3) Disabled page in Page Navigation should look disabled.
    * (A.4.4) Page numbers in the Page Navigation should provide some affordance (e.g hover effect).
* (A.5) Conditional Content
    * (A.5.1) Conditional content should stay hidden when not activated.
* (A.6) Repeatable Content
    * (A.6.1) Content added after clicking 'add another response' should carry the styles of the original content.
    * (A.6.2) 'Add another response' and 'Remove' links should provide some affordance (hover effect, look like a link or a button). 
* (A.7) Tables
    * (A.7.1) When narrowing the browser window, and after reloading the page, the tables should convert to their 'stacked' layout and render without causing horizontal scroll.
* (A.8) Field Decorators
    * (A.8.1) Input Placeholder text should look distinct from user input so as to not give the impression that a value is provided for the input.
    * (A.8.2) Input format guide (mask) should line up properly with user input.
    * (A.8.3) Tooltip Hint should be legible and visible when the input is in focus.
    * (A.8.4) Tooltip Hint should be not be visible when the input is not in focus.
    * (A.8.5) Hints placed below or next to the input (not as tooltips) should be always be visible.
    * (A.8.6) Input delimiters (text before and after the input) should line up with the input and any text entered in the input.
    * (A.8.7) Character counters should be visible when the field is in focus.
    * (A.8.8) Calendar should be visible when the field is in focus.
    * (A.8.9) Dates on the calendar should align properly with the days of the week. Incorrectly set dimensions can cause days to mis-align on the calendar.
    
    > Look at the current date and verify that it matches the day of the week.

* (A.9) Error Message
    * (A.9.1) Required field should be identifiable with a clearly visible mark (asterisk).
    * (A.9.2) Error message should be clearly visible (high contrast ratio).
* (A.10) Text Formating
    * (A.10.1) Theme should not interfere with text formatting options, like bold, italic, left and right alignment, bullet lists, etc.
    * (A.10.2) Text should have a high enough contrast ratio ([4.5:1](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-visual-audio-contrast-contrast))
    * (A.10.3) Links (assistance, gdpr) below the form should be visible against the page background.
    
    > You can use Chrome's contrast ratio check in the [Dev Tools' Color Picker](https://developers.google.com/web/updates/2018/01/devtools#contrast)

* (A.11) Right-to-Left languages
    * (A.11.1) Left-aligned and right-aligned labels should appear on the right side of their respective inputs.
    * (A.11.2) Radio and Checkbox labels should appear on the left side of the radio/checkbox.
* (A.12) Responsive Layout
    * (A.12.1) Narrowing the browser window should not introduce horizontal scrolling. A page reload may be needed to force the tables to switch to their 'stacked' mode.
* (A.13) Cross-Browser Compatibility
    * (A.13.1) Items A.1 to A.12 should look and behave the same (or with acceptable degradation) in all supported browsers. QA could be limited to browsers known to have different level of support for CSS (e.g Chrome and IE11).

# B. Theme Options Inspection

* (B.1) Syntax Check & Side Effects

    * (B.1.1) Saving the theme in the Form Builder should succeed, and not return an error. An error at this stage could indicate a problem with the scss syntax.
    * (B.1.2) There should be no visible changes to the look&feel and layout of the Form Builder, only the form preview should be affected by the theme. Any side effect would be the result of improperly scoped selectors in the Theme's css.

* (B.2) Option Labels 

    * (B.2.1) Each option should have a clear, descriptive label.
    * (B.2.2) Labels should be standardized according to [the documentation](https://github.com/veerwest/formassembly-theme-dev-kit/blob/master/documentation/guidelines.md#naming-customization-options). 
    * (B.2.3) Deviation from the standard can be accepted if the option controls something not covered by the documentation.

    > Example: The option to control the page's background color should be labeled 'Page Background' and not 'Color of background' (which would deviate from the convention), or 'Form Background' (which would be confusing, as the form's typically doesn't cover the entire page).
    
* (B.3) Option Controls 
    * (B.3.1) Each option should be matched with the correct control type (e.g. a color picker to control a color).
    * (B.3.2) Changing the value should produce the expected result (e.g. changing the color for 'Page Background' should change the background color and nothing else).
    
    > You may need to add more content to your test form to confirm that each option works correctly. 

* (B.4) Live Form
   * (B.4.1) There should be no visible difference between viewing the live version of the form and the form in the Form Builder.

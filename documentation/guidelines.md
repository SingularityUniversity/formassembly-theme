# FormAssembly Theme Creation Guidelines


## Theme Customization

Form creators in FormAssembly can apply a theme to their forms but typically do not have direct access to the SCSS to 
make changes. Instead, they have access to simple controls (like a color picker) to modify aspects of the theme that the 
designer (that's you!) chose to make customizable.

**Customization options are exposed through SCSS variables.** Any variable that starts with `$color-`, `$font-`, 
`$length-` or `$image-` will automatically be exposed in the Theme Editor with a matching control (respectively, a 
color picker, a font selector, a numeric input with unit selector, and a file upload). The rest of the variable name is 
used as a description of the control.
 
For instance, to make the Theme's **accent color** customizable, 

1. Make it a variable (`$color-accent-color`) and give it an initial value.
   ```css
   $color-accent-color: #198a63; 
   ```
2. Use the variable accordingly throughout your theme.
   ```css
   .wFormContainer fieldset {
       border-color: $color-accent-color; 
   }
   .wFormContainer input[type='submit'] {
       background-color: $color-accent-color;
   }
   ```
3. The form creator will then see this customization option when applying the theme to their form: 
   ![Theme Editor Screenshot](./theme-editor-screenshot.png "Theme Editor Screenshot")


When making color a customization option, keep in mind how other colors  different elements with different colors may also need to 
 be customizable, or need to be derived from the customizable color in order to keep an harmonious color scheme.

### Naming Customization Options

To make it easier for users to understand customization options across different themes, you're encouraged to name your
customization variables according to the following table.

| Variable Name   | Description  |
| ------------- | ------------- | 
| $font-main-font | Font for body text |
| $font-heading-font | Font for headings (form title, fieldset legend, h* tags) |
| $color-text-color | Color for text |
| $color-text-on-accent-color | Color for text when accent-color is used as background color
| $color-accent-color | Accent color
| $color-secondary-color | Secondary accent color
| $color-error-color | Color for error text
| $color-background-color | Background color  (applied on form)
| $color-page-color | Background color  (applied on entire page)
| $color-overlay-background-color | Background color for overlays (calendar, pop-up hints)
| $image-logo-image | Logo image (file upload)
| $length-logo-size | Logo size (in rem)
| $length-scale-size | Base font-size (in rem or %)

## Sizes & Scalability

1. **Set your base font-size on the top-level container, as a variable.**
2. **Use relative units (EM or %) elsewhere.**

While not strictly required, Themes can be designed to let form creators easily scale the entire form to fit their 
particular use case: Large text and lot of white-space, or small font and higher density. To achieve this, set 
the font size on the `.wFormContainer` as a variable ($length-scale-size), and set all other font-sizes, padding and 
margins with relative units (ems).  

#### Example:
```css
$length-scale-size: 1rem; 
.wFormContainer {
	font-size: $length-scale-size;
}
/* ... */
.wFormContainer h4 { 
    font-size: 1.5em; 
    margin: 1em 0; 
}
```

## Selectors
1. **Use selectors provided by the template when possible.**
2. **Use `.wFormContainer` to scope your css rules.**

For convenience, the template provide CSS selectors for most form elements. 

Note that the HTML markup of a form isn't exactly the same between the Form Builder preview and the live form. The 
selectors provided by the template are guaranteed to work in both cases.

The `.wFormContainer` scope is indispensable to prevent theme styles from leaking into the Form Builder's user interface, 
or the user's website (once the form is published). 

```css
/* GOOD */
.wFormContainer .label {
	color: green;
}

/* BAD - not scoped to .wFormContainer, not using .label as selector (as provided by template) */
label {
	color: green;
}
```
  


# FormAssembly Theme Development Kit

## Getting Started

### Intended Audience 

This development kit is intended for designers with a strong understanding of SCSS, web design and source control with Git.

### Requirements
Make sure you have both Git and Node installed.
* Git ([setup instructions](https://www.atlassian.com/git/tutorials/install-git))
* Node ([setup instructions](https://nodejs.org/en/download/)) 

### Setup

1. In the command line, run the following commands to checkout the Theme Development Kit and install dependencies.    
   ```text
   git clone https://github.com/veerwest/formassembly-theme-dev-kit
   cd formassembly-theme-dev-kit
   npm install
   npm install -g gulp-cli
   ```
2. Create a branch. Please name your branch after yourself, using your own name, alias or handle (no space allowed).
   ```text
   git branch YOUR_NAME
   ```

## Work on your Theme

### Create a theme

Create your first theme by running `gulp create` from the command line.
```text
gulp create
```
When prompted, enter a name for your new theme.
```text
[23:28:35] Using gulpfile ~/formassembly-theme-dev-kit/gulpfile.js
[23:28:35] Starting 'create'...
✔ Choose a name for your theme: 
```
Theme names cannot have space or non-alphanumeric characters in them.

Once you're ready to work on the theme, run `gulp watch` from the command line. Leave the command running while 
you're working on the theme to ensure that the build files are correctly updated. 

```text
gulp watch
```

You should run `gulp watch` anytime you're resuming work on a theme.

#### Edit your Theme Files

The theme creation step automatically created a folder for your theme: 
`src/themes/YOUR_THEME_NAME`

In this folder, you'll find a series of scss files covering the various components of a FormAssembly theme.

```text
_autosuggest.scss
_buttons.scss
_calendar.scss
...
```
 >**Those files are the only files you will need to modify**. 
 Anything outside of your /src/themes folder does not need 
to and should not be modified.

You may edit the scss files with your favorite editor. 

#### Theme Documentation 

See [Documentation](./documentation/guidelines.md)


#### Preview your Theme

To preview your theme as you edit the scss files, open /preview/[your theme].html in your browser. As long as the 
`gulp watch` command is still running, you should be able to see your changes when refreshing the page.

Any SCSS compilation error will be displayed in the terminal window where `gulp watch` is running.

To preview your changes without reloading the page each time, you can install the 
[LiveReload extension for Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en).
Once installed, click the LiveReload icon in Chrome to enable the extension on your preview page. 

#### Save your Progress

From the command line, you can save your changes to github with the following command: 
```
git add -A && git commit -m && git push
```

### Submit your Theme

Open a Pull Request on gitlab. https://help.github.com/articles/creating-a-pull-request/

> If you are just creating a theme for your own FormAssembly instance, skip the pull request step. Instead, 
go to the Theme Editor, click 'Create new theme' and paste the content of the`dist/themes-scss/[your theme].scss` 
file in the Custom CSS field.  

## Create Additional Themes

Run `gulp create` any time you want to work on a new theme. 
**Caution**, if you choose the name of an existing theme, it will get overwritten.

## Update the Theme Dev Kit

From time to time, FormAssembly may update the dev kit to account for new features and improvements. To bring 
your local copy of the Theme Dev Kit up to date, stop your `gulp watch` command (if running) then run:
```text
git merge master
gulp refresh
gulp watch
``` 
You can then resume work. Any change in HTML markup and baseline CSS will be reflected in the Preview pages.

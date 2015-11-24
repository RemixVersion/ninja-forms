/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/**
 * Renders an application menu item from a domain model.
 *
 * @package Ninja Forms builder
 * @subpackage App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Collection view that takes our app menu items and renders an individual view for each.
 *
 * @package Ninja Forms builder
 * @subpackage App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Renders the action buttons to the right of the app menu. i.e. Publish
 *
 * @package Ninja Forms builder
 * @subpackage App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Main application header. Includes links to all of our domains.
 *
 * @package Ninja Forms builder
 * @subpackage App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Renders our sub-header. i.e. add new field, add new action, etc.
 *
 * @package Ninja Forms builder
 * @subpackage App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Renders our builder header.
 *
 * This is a layout view and handles two regions:
 * app - menu/buttons
 * subapp - title, add new field, etc.
 *
 * @package Ninja Forms builder
 * @subpackage App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Menu view used on smaller screens.
 *
 * @package Ninja Forms builder
 * @subpackage App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Default drawer header.
 *
 * Includes our filter/search and 'Done' button.
 *
 * @package Ninja Forms builder
 * @subpackage App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Empty drawer content view.
 * Called before we close the drawer.
 *
 * @package Ninja Forms builder
 * @subpackage App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Renders our drawer region
 *
 * @package Ninja Forms builder
 * @subpackage App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Builder view.
 *
 * This layout view has regions that represent our application areas:
 * header
 * main
 * menuDrawer - Mobile side-menu
 * drawer
 *
 * @package Ninja Forms builder
 * @subpackage App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles opening and closing our drawer. This is where we display settings for fields, actions, and settings.
 * 
 * @package Ninja Forms builder
 * @subpackage Main App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Collection that holds all of our drawer models.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Model for our staged field.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Collection of staged fields.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Button to add an action to the form.
 *
 * TODO: make dynamic
 * 
 * @package Ninja Forms builder
 * @subpackage Actions
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Add action drawer.
 *
 * TODO: make dynamic
 * 
 * @package Ninja Forms builder
 * @subpackage Actions
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Individual change item.
 *
 * @package Ninja Forms builder
 * @subpackage App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Changes collection view.
 *
 * @package Ninja Forms builder
 * @subpackage App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles clicks on the 'view changes' button in the header.
 * 
 * @package Ninja Forms builder
 * @subpackage App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Config file for our app drawers.
 *
 * this.collection represents all of our registered drawers.
 * 
 * @package Ninja Forms builder
 * @subpackage Main App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Model for our individual domains.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Holds all of our domain models.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Add main header.
 *
 * TODO: make dynamic
 * 
 * @package Ninja Forms builder
 * @subpackage Actions
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Actions subheader view.
 *
 * TODO: make dynamic
 * 
 * @package Ninja Forms builder
 * @subpackage Actions
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Single action table row
 *
 * TODO: make dynamic
 * 
 * @package Ninja Forms builder
 * @subpackage Actions
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Main content view for our actions.
 *
 * TODO: make dynamic
 * 
 * @package Ninja Forms builder
 * @subpackage Actions
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Config file for our app domains.
 * 
 * this.collection represents all of our app domain (fields, actions, settings) information.
 *
 * This doesn't store the current domain, but rather all the data about each.
 * 
 * This data includes:
 * hotkeys
 * header view
 * subheader view
 * content view
 * 
 * @package Ninja Forms builder
 * @subpackage Main App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Model for our app data.
 * Listens for changes to the 'clean' attribute and triggers a radio message when the state changes.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Creates and stores a model that represents app-wide data. i.e. current domain, current drawer, clean, etc.
 *
 * clean is a boolean that represents whether or not changes have been made.
 * 
 * @package Ninja Forms builder
 * @subpackage Main App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Listens for click events to expand/collapse setting groups.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields - New Field Drawer
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Updates our database with our form data.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Model that represents our form data.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Stores our form data and responds to requests for it.
 * Form data stores fields, actions, and settings.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles changing our preview link when we change the 'clean' state of our app.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Listens to our app channel for requests to change the current domain.
 *
 * The app menu and the main submenu both contain clickable links that change the current domain.
 * 
 * @package Ninja Forms builder
 * @subpackage Main App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Model that represents our change data.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Holds all of our change models.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Track settings changes across our app.
 * 
 * @package Ninja Forms builder
 * @subpackage Main App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Listens for our update:db response and replaces tmp ids with new ids if we were performing the publish action.
 * 
 * @package Ninja Forms builder
 * @subpackage Main App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Modify the user's browser history when they click on a domain
 * 
 * @package Ninja Forms builder
 * @subpackage Main App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles our hotkey execution. Needs to be cleaned up and made more programmatic.
 * 
 * Our hotkeys are defined by the domain that we're currently viewing. In each domain's model, there is a hotkey object.
 * 
 * Currently too much hotkey data is hard-coded here.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Change the clean state of our app when settings are changed.
 * 
 * @package Ninja Forms builder
 * @subpackage Main App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * All of the core undo functions. Listens on the 'changes' channel for an undo request.
 * 
 * @package Ninja Forms builder
 * @subpackage Main App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Returns a clone of a backbone model with all the attributes looped through so that collections contained within are propely cloned.
 * 
 * @package Ninja Forms builder
 * @subpackage Main App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Returns the appropriate child view for our settings drawer.
 *
 * This enables settings types to register custom childviews for their settings.
 * The list-repeater setting for the list field is an example.
 * 
 * @package Ninja Forms builder
 * @subpackage App - Edit Settings Drawer
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Updates our model when the user changes a setting.
 * 
 * @package Ninja Forms builder
 * @subpackage Main App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Model that represents our setting.
 *
 * When the model is created, we trigger the init event in two radio channels.
 *
 * This lets specific types of settings modify the model before anything uses it.
 *
 * Fieldset, for instance, uses this hook to instantiate its settings as a collection.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Collections of settings for each field type.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles actions related to field settings that use a fieldset
 * 
 * @package Ninja Forms builder
 * @subpackage Fields - Edit Field Drawer
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles actions related to our toggle field.
 * When we change the toggle, the setting value will be 'on' or ''.
 * We need to change this to 1 or 0.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields - Edit Field Drawer
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Listens for clicks on our action item action buttons.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields - Main Sortable
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Model for our field type
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Collection that holds our field type models. 
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Model that represents our type settings groups.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Collection of our type settings groups.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Model that represents our field type section on the add new field drawer.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Collection that holds our field models.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Creates and stores a collection of field types. This includes all of the settings shown when editing a field.
 *
 * 1) Create our settings sections config
 * 2) Loops over our preloaded data and adds that to our field type collection
 *
 * Also responds to requests for data about field types
 *
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles the logic for our field type draggables.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields - New Field Drawer
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles the dragging of our field staging area
 * 
 * @package Ninja Forms builder
 * @subpackage Fields - New Field Drawer
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles our saved fields type section.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields - New Field Drawer
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles most things related to our staging area:
 * 1) Creates a collection
 * 2) Listens for requests to CRUD items from the collection
 * 3) Adds our staged fields to the fields sortable when the drawer is closed
 * 
 * @package Ninja Forms builder
 * @subpackage Fields - New Field Drawer
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles actions related to our staged fields sortable.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields - New Field Drawer
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Filters our field type collection.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields - New Field Drawer
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles all the actions/functions related to our main field sortable.
 * All of the actual logic for our sortable is held here; the view just calls it using nfRadio.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Model that represents our form fields.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Collection that holds our field models. 
 * This is the actual field data created by the user.
 *
 * We listen to the add and remove events so that we can push the new id to either the new fields or removed fields property.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles interactions with our field collection.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Model for our list option.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Model that represents our list options.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles list field stuff.
 * 
 * When we instantiate a new field with the list type as a parent, we need to instantiate a new listOptionCollection for the 'options' attribute
 *
 * Also listens for changes to the options settings.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles adding and removing the active class from a field currently being edited.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields - Edit Field Drawer
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Fetches settings models so that we can get setting information
 * 
 * @package Ninja Forms builder
 * @subpackage Main App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Creates and stores a collection of action types. This includes all of the settings shown when editing a field.
 *
 * Loops over our preloaded data and adds that to our action type collection
 *
 * Also responds to requests for data about action types
 *
 * @package Ninja Forms builder
 * @subpackage Actions
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Model that represents our form action.
 * 
 * @package Ninja Forms builder
 * @subpackage Actions
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Collection that holds our action models. 
 * This is the actual action data created by the user.
 *
 * We listen to the add and remove events so that we can push the new id to either the new action or removed action property.
 * 
 * @package Ninja Forms builder
 * @subpackage Actions
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles interactions with our actions collection.
 * 
 * @package Ninja Forms builder
 * @subpackage Actions
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles adding and removing the active class from a action currently being edited.
 * 
 * @package Ninja Forms builder
 * @subpackage Actions - Edit Action Drawer
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles clicks and dragging for our action types.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields - New Field Drawer
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles the logic for our action type draggables.
 * 
 * @package Ninja Forms builder
 * @subpackage Actions - New Action Drawer
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Handles the logic for our action type droppable.
 * 
 * @package Ninja Forms builder
 * @subpackage Actions - New Action Drawer
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Model for our action type
 * 
 * @package Ninja Forms builder
 * @subpackage Actions
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Collection that holds our action type models. 
 * 
 * @package Ninja Forms builder
 * @subpackage Actions
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Filters our action type collection.
 * 
 * @package Ninja Forms builder
 * @subpackage Actions - New Action Drawer
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

/**
 * Loads all of our controllers using Require JS.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */

!function(){var e,t,n;!function(i){function a(e,t){return b.call(e,t)}function r(e,t){var n,i,a,r,l,o,s,c,d,h,p,u=t&&t.split("/"),g=v.map,f=g&&g["*"]||{};if(e&&"."===e.charAt(0))if(t){for(e=e.split("/"),l=e.length-1,v.nodeIdCompat&&j.test(e[l])&&(e[l]=e[l].replace(j,"")),e=u.slice(0,u.length-1).concat(e),d=0;d<e.length;d+=1)if(p=e[d],"."===p)e.splice(d,1),d-=1;else if(".."===p){if(1===d&&(".."===e[2]||".."===e[0]))break;d>0&&(e.splice(d-1,2),d-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((u||f)&&g){for(n=e.split("/"),d=n.length;d>0;d-=1){if(i=n.slice(0,d).join("/"),u)for(h=u.length;h>0;h-=1)if(a=g[u.slice(0,h).join("/")],a&&(a=a[i])){r=a,o=d;break}if(r)break;!s&&f&&f[i]&&(s=f[i],c=d)}!r&&s&&(r=s,o=c),r&&(n.splice(0,o,r),e=n.join("/"))}return e}function l(e,t){return function(){var n=C.call(arguments,0);return"string"!=typeof n[0]&&1===n.length&&n.push(null),u.apply(i,n.concat([e,t]))}}function o(e){return function(t){return r(t,e)}}function s(e){return function(t){m[e]=t}}function c(e){if(a(w,e)){var t=w[e];delete w[e],y[e]=!0,p.apply(i,t)}if(!a(m,e)&&!a(y,e))throw new Error("No "+e);return m[e]}function d(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function h(e){return function(){return v&&v.config&&v.config[e]||{}}}var p,u,g,f,m={},w={},v={},y={},b=Object.prototype.hasOwnProperty,C=[].slice,j=/\.js$/;g=function(e,t){var n,i=d(e),a=i[0];return e=i[1],a&&(a=r(a,t),n=c(a)),a?e=n&&n.normalize?n.normalize(e,o(t)):r(e,t):(e=r(e,t),i=d(e),a=i[0],e=i[1],a&&(n=c(a))),{f:a?a+"!"+e:e,n:e,pr:a,p:n}},f={require:function(e){return l(e)},exports:function(e){var t=m[e];return"undefined"!=typeof t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:h(e)}}},p=function(e,t,n,r){var o,d,h,p,u,v,b=[],C=typeof n;if(r=r||e,"undefined"===C||"function"===C){for(t=!t.length&&n.length?["require","exports","module"]:t,u=0;u<t.length;u+=1)if(p=g(t[u],r),d=p.f,"require"===d)b[u]=f.require(e);else if("exports"===d)b[u]=f.exports(e),v=!0;else if("module"===d)o=b[u]=f.module(e);else if(a(m,d)||a(w,d)||a(y,d))b[u]=c(d);else{if(!p.p)throw new Error(e+" missing "+d);p.p.load(p.n,l(r,!0),s(d),{}),b[u]=m[d]}h=n?n.apply(m[e],b):void 0,e&&(o&&o.exports!==i&&o.exports!==m[e]?m[e]=o.exports:h===i&&v||(m[e]=h))}else e&&(m[e]=n)},e=t=u=function(e,t,n,a,r){if("string"==typeof e)return f[e]?f[e](t):c(g(e,t).f);if(!e.splice){if(v=e,v.deps&&u(v.deps,v.callback),!t)return;t.splice?(e=t,t=n,n=null):e=i}return t=t||function(){},"function"==typeof n&&(n=a,a=r),a?p(i,e,t,n):setTimeout(function(){p(i,e,t,n)},4),u},u.config=function(e){return u(e)},e._defined=m,n=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),a(m,e)||a(w,e)||(w[e]=[e,t,n])},n.amd={jQuery:!0}}(),n("../lib/almond",function(){}),n("views/app/menuItem",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-app-menu-item",initialize:function(){this.listenTo(i.channel("app"),"change:currentDomain",this.render),this.model.on("change",this.render,this)},onRender:function(){this.$el=this.$el.children(),this.$el.unwrap(),this.setElement(this.$el)},events:{"click a":"clickAppMenu"},clickAppMenu:function(e){i.channel("app").trigger("click:menu",e,this.model)},templateHelpers:function(){return{renderDashicons:function(){return this.dashicons?'<span class="dashicons '+this.dashicons+'"></span>':""},renderClasses:function(){var e=this.classes,t=i.channel("app").request("get:currentDomain");return t.get("id")==this.id&&(e+=" active"),e},renderUrl:function(){return""!=this.url?this.url:"#"},renderTarget:function(){return""!=this.url?"_blank":"_self"},renderDisabled:function(){return this.disabled?"disabled":""}}}});return e}),n("views/app/menu",["views/app/menuItem"],function(e){var t=Marionette.CollectionView.extend({tagName:"div",childView:e,onShow:function(){jQuery(this.el).find("li:last").unwrap()}});return t}),n("views/app/menuButtons",[],function(){var e=Marionette.ItemView.extend({tagName:"span",template:"#nf-tmpl-app-header-action-button",initialize:function(){this.listenTo(i.channel("app"),"change:clean",this.render,this),this.listenTo(i.channel("app"),"change:loading",this.render,this)},templateHelpers:function(){var e=this;return{renderPublish:function(){return e.publishWidth?this.publishWidth='style="width:'+e.publishWidth+'px !important"':this.publishWidth="",i.channel("app").request("get:setting","loading")?_.template(jQuery("#nf-tmpl-add-header-publish-loading").html(),this):_.template(jQuery("#nf-tmpl-app-header-publish-button").html(),this)},maybeDisabled:function(){return i.channel("app").request("get:setting","clean")?"disabled":""},maybeRenderCancel:function(){return i.channel("app").request("get:setting","clean")?"":_.template(jQuery("#nf-tmpl-app-header-view-changes").html(),this)}}},onShow:function(){var e=jQuery(this.el).find(".publish");this.publishWidth=jQuery(e).outerWidth(!0)},events:{"click .publish":"clickPublish","click .viewChanges":"clickViewChanges"},clickPublish:function(e){i.channel("app").trigger("click:publish",e)},clickViewChanges:function(e){i.channel("app").trigger("click:viewChanges",e)}});return e}),n("views/app/header",["views/app/menu","views/app/menuButtons"],function(e,t){var n=Marionette.LayoutView.extend({tagName:"div",template:"#nf-tmpl-app-header",regions:{menu:".nf-app-menu",buttons:".nf-app-buttons"},onShow:function(){var n=i.channel("app").request("get:domainCollection");this.menu.show(new e({collection:n})),this.buttons.show(new t)}});return n}),n("views/app/subHeader",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-sub-header"});return e}),n("views/app/builderHeader",["views/app/header","views/app/subHeader"],function(e,t){var n=Marionette.LayoutView.extend({tagName:"div",template:"#nf-tmpl-header",regions:{app:"#nf-app-header",appSub:"#nf-app-sub-header"},initialize:function(){this.listenTo(i.channel("app"),"change:currentDomain",this.changeSubHeader)},onShow:function(){this.app.show(new e),this.changeSubHeader()},changeSubHeader:function(){var e=i.channel("app").request("get:currentDomain"),t=e.get("getSubHeaderView").call(e);this.appSub.show(t)},templateHelpers:function(){return{renderTitle:function(){var e=i.channel("app").request("get:formData");return e.get("settings").title}}}});return n}),n("views/app/main",[],function(){var e=Marionette.LayoutView.extend({tagName:"div",template:"#nf-tmpl-main",regions:{header:"#nf-main-header",content:"#nf-main-content"},initialize:function(){this.listenTo(i.channel("app"),"change:currentDomain",this.render),i.channel("app").reply("get:mainEl",this.getMainEl,this)},onShow:function(){jQuery(this.el).parent().perfectScrollbar(),i.channel("main").trigger("show:main"),jQuery(this.el).parent().disableSelection()},onRender:function(){var e=i.channel("app").request("get:currentDomain"),t=e.get("getMainHeaderView").call(e);this.header.show(t);var n=e.get("getMainContentView").call(e);this.content.show(n),i.channel("main").trigger("render:main")},getMainEl:function(){return jQuery(this.el).parent()}});return e}),n("views/app/drawer/mobileMenu",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-menu-drawer"});return e}),n("views/app/drawer/headerDefault",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-drawer-header-default",onRender:function(){this.$el=this.$el.children(),this.$el.unwrap(),this.setElement(this.$el),i.channel("drawer").reply("clear:filter",this.clearFilter,this),i.channel("drawer").reply("blur:filter",this.blurFilter,this),i.channel("drawer").reply("get:filterEl",this.getEl,this)},events:{"keyup .nf-filter":"maybeChangeFilter","input .nf-filter":"changeFilter"},changeFilter:function(e){var t=i.channel("app").request("get:currentDrawer");i.channel("drawer-"+t.get("id")).trigger("change:filter",e.target.value,e)},maybeChangeFilter:function(e){13==e.keyCode&&(e.addObject=!0,this.changeFilter(e))},clearFilter:function(){var e=jQuery(this.el).find(".nf-filter");""!=jQuery.trim(e.val())&&(e.val(""),e.trigger("input"),e.focus())},blurFilter:function(){jQuery(this.el).find(".nf-filter").blur()},getEl:function(){return jQuery(this.el).find(".nf-filter")}});return e}),n("views/app/drawer/contentEmpty",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-drawer-content-empty"});return e}),n("views/app/drawer",["views/app/drawer/headerDefault","views/app/drawer/contentEmpty"],function(e,t){var n=Marionette.LayoutView.extend({template:"#nf-tmpl-drawer",regions:{header:"#nf-drawer-header",content:"#nf-drawer-content"},initialize:function(){i.channel("app").reply("get:drawerEl",this.getEl,this),i.channel("drawer").reply("load:drawerContent",this.loadContent,this),i.channel("drawer").reply("empty:drawerContent",this.emptyContent,this)},onShow:function(){jQuery(this.el).parent().perfectScrollbar()},loadContent:function(e,t){var n=i.channel("app").request("get:drawer",e),a=n.get("getContentView").call(n,t),r=n.get("getHeaderView").call(n,t);this.header.show(r),this.content.show(a)},emptyContent:function(){this.header.show(new t),this.content.show(new t)},getEl:function(){return jQuery(this.el).parent()},events:{"click .nf-toggle-drawer":"clickToggleDrawer"},clickToggleDrawer:function(){i.channel("app").trigger("click:toggleDrawerSize")}});return n}),n("views/app/builder",["views/app/builderHeader","views/app/main","views/app/drawer/mobileMenu","views/app/drawer"],function(e,t,n,a){var r=Marionette.LayoutView.extend({template:"#nf-tmpl-builder",el:"#nf-builder",regions:{header:"#nf-header",main:"#nf-main",menuDrawer:"#nf-menu-drawer",drawer:"#nf-drawer"},initialize:function(){this.render(),this.header.show(new e),this.main.show(new t),this.drawer.show(new a),i.channel("app").reply("get:builderEl",this.getBuilderEl,this)},getBuilderEl:function(){return this.el},events:{"click .nf-open-drawer":"openDrawer","click .nf-change-domain":"changeDomain","click .nf-close-drawer":"closeDrawer"},openDrawer:function(e){i.channel("app").trigger("click:openDrawer",e)},closeDrawer:function(){i.channel("app").trigger("click:closeDrawer")},changeDomain:function(e){i.channel("app").trigger("click:menu",e)}});return r}),n("controllers/app/drawer",[],function(){var e=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("app"),"click:openDrawer",this.clickOpenDrawer),this.listenTo(i.channel("app"),"click:closeDrawer",this.closeDrawer),this.listenTo(i.channel("app"),"click:toggleDrawerSize",this.toggleDrawerSize),i.channel("app").reply("open:drawer",this.openDrawer,this),i.channel("app").reply("close:drawer",this.closeDrawer,this),i.channel("drawer").reply("get:closedRightPos",this.getClosedDrawerPos,this)},closeDrawer:function(){var e=i.channel("app").request("get:currentDrawer");if(!e)return!1;i.channel("drawer-"+e.get("id")).trigger("before:closeDrawer"),i.channel("drawer").trigger("before:closeDrawer"),i.channel("drawer").request("empty:drawerContent");var t=i.channel("app").request("get:builderEl");jQuery(t).addClass("nf-drawer-closed").removeClass("nf-drawer-opened");var n=this.getClosedDrawerPos(),a=i.channel("app").request("get:drawerEl");jQuery(a).css({right:n});var r=this;this.checkCloseDrawerPos=setInterval(function(){n==jQuery(a).css("right")&&(clearInterval(r.checkCloseDrawerPos),i.channel("app").request("update:currentDrawer",!1),i.channel("drawer").trigger("closed"))},150)},clickOpenDrawer:function(e){var t=jQuery(e.target).data("drawerid");this.openDrawer(t)},openDrawer:function(e,t){t=t||!1,i.channel("drawer").request("load:drawerContent",e,t);var n=i.channel("app").request("get:builderEl");jQuery(n).addClass("nf-drawer-opened").removeClass("nf-drawer-closed");var a=i.channel("app").request("get:drawerEl");jQuery(a).css({right:"0px"});var r=this;this.checkOpenDrawerPos=setInterval(function(){"0px"==jQuery(a).css("right")&&(clearInterval(r.checkOpenDrawerPos),r.focusFilter(),i.channel("app").request("update:currentDrawer",e),i.channel("drawer").trigger("opened"))},150)},toggleDrawerSize:function(){var e=i.channel("app").request("get:drawerEl");jQuery(e).toggleClass("nf-drawer-expand")},focusFilter:function(){var e=i.channel("drawer").request("get:filterEl");jQuery(e).focus()},getClosedDrawerPos:function(){var e=i.channel("app").request("get:builderEl"),t=jQuery(e).width()+300;return"-"+t+"px"}});return e}),n("models/app/drawerModel",["views/app/drawer/headerDefault"],function(e){var t=Backbone.Model.extend({defaults:{getHeaderView:function(t){return new e(t)}}});return t}),n("models/app/drawerCollection",["models/app/drawerModel"],function(e){var t=Backbone.Collection.extend({model:e});return t}),n("views/fields/drawer/stagedField",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-drawer-staged-field",onRender:function(){this.$el=this.$el.children(),this.$el.unwrap(),this.setElement(this.$el)},events:{"click .dashicons-dismiss":"removeStagedField"},removeStagedField:function(e){i.channel("drawer-addField").trigger("click:removeStagedField",e,this.model)}});return e}),n("views/fields/drawer/stagingEmpty",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-drawer-staged-fields-empty",onRender:function(){this.$el=this.$el.children(),this.$el.unwrap(),this.setElement(this.$el)}});return e}),n("views/fields/drawer/stagingCollection",["views/fields/drawer/stagedField","views/fields/drawer/stagingEmpty"],function(e,t){var n=Marionette.CollectionView.extend({tagName:"div",childView:e,emptyView:t,initialize:function(){i.channel("app").reply("get:stagedFieldsEl",this.getStagedFieldsEl,this)},onShow:function(){this.$el=jQuery(this.el).parent(),jQuery(this.$el).find("span:first").unwrap(),this.setElement(this.$el);jQuery(this.el).sortable({placeholder:"nf-staged-fields-sortable-placeholder",helper:"clone",tolerance:"pointer",over:function(e,t){i.channel("drawer-addField").trigger("over:stagedFields",e,t)},out:function(e,t){i.channel("drawer-addField").trigger("out:stagedFields",t)},receive:function(e,t){i.channel("drawer-addField").trigger("receive:stagedFields",t)},update:function(e,t){i.channel("fields").request("sort:staging")},start:function(e,t){i.channel("drawer-addField").trigger("start:stagedFields",t)},stop:function(e,t){i.channel("drawer-addField").trigger("stop:stagedFields",t)}}),jQuery(this.el).parent().draggable({opacity:.9,connectToSortable:".nf-fields-sortable",helper:function(e){var t=jQuery(e.target).parent().width(),n=jQuery(e.target).parent().height(),i=jQuery(e.target).parent().clone(),a=t/4,r=n/2;return jQuery(this).draggable("option","cursorAt",{top:r,left:a}),i},start:function(e,t){i.channel("drawer-addField").trigger("startDrag:fieldStaging",this,t)},stop:function(e,t){i.channel("drawer-addField").trigger("stopDrag:fieldStaging",this,t)}})},getStagedFieldsEl:function(){return jQuery(this.el)}});return n}),n("models/fields/stagingModel",[],function(){var e=Backbone.Model.extend({});return e}),n("models/fields/stagingCollection",["models/fields/stagingModel"],function(e){var t=Backbone.Collection.extend({model:e,comparator:"order"});return t}),n("views/fields/drawer/typeSection",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-drawer-field-type-section",initialize:function(){_.bindAll(this,"render")},onRender:function(){this.$el=this.$el.children(),this.$el.unwrap(),this.setElement(this.$el),this.dragging=!1;var e=this;jQuery(this.el).find("div.nf-one-third").draggable({opacity:.9,tolerance:"intersect",scroll:!1,connectToSortable:".nf-field-type-droppable",helper:function(e){var t=jQuery(e.target).parent().width(),n=jQuery(e.target).parent().height(),i=jQuery(e.target).parent().clone(),a=t/4,r=n/2;return jQuery(this).draggable("option","cursorAt",{top:r,left:a}),i},start:function(t,n){e.dragging=!0,i.channel("drawer-addField").trigger("startDrag:type",this,n)},stop:function(t,n){e.dragging=!1,i.channel("drawer-addField").trigger("stopDrag:type",this,n)}}).disableSelection(),jQuery(this.el).find(".nf-item").focus(function(){jQuery(this).addClass("active")}).blur(function(){jQuery(this).removeClass("active")})},events:{"click .nf-item":"clickFieldType","keydown .nf-item":"maybeClickFieldType"},clickFieldType:function(e){this.dragging||i.channel("drawer").trigger("click:fieldType",e)},maybeClickFieldType:function(e){13==e.keyCode&&(this.clickFieldType(e),i.channel("drawer").request("clear:filter"))},templateHelpers:function(){return{renderFieldTypes:function(){var e="",t=this;return _.each(this.fieldTypes,function(n){var a=i.channel("fields").request("get:type",n),r=a.get("nicename");e+=_.template(jQuery("#nf-tmpl-drawer-field-type-button").html(),{id:n,nicename:r,type:a,savedField:t.isSavedField})}),e},isSavedField:function(){return this.type.get("savedField")?"nf-saved":""}}}});return e}),n("views/fields/drawer/typeSectionCollection",["views/fields/drawer/typeSection"],function(e){var t=Marionette.CollectionView.extend({tagName:"div",childView:e,onShow:function(){jQuery(this.el).find(".nf-settings").unwrap()}});return t}),n("views/fields/drawer/addField",["views/fields/drawer/stagingCollection","models/fields/stagingCollection","views/fields/drawer/typeSectionCollection"],function(e,t,n){var a=Marionette.LayoutView.extend({template:"#nf-tmpl-drawer-content-add-field",regions:{staging:"#nf-drawer-staging .nf-reservoir",primary:"#nf-drawer-primary",secondary:"#nf-drawer-secondary"},initialize:function(){this.listenTo(i.channel("drawer"),"filter:fieldTypes",this.filterFieldTypes),this.listenTo(i.channel("drawer"),"clear:filter",this.removeFieldTypeFilter),this.savedCollection=i.channel("drawer").request("get:savedFields"),this.primaryCollection=this.savedCollection,this.fieldTypeSectionCollection=i.channel("fields").request("get:typeSections"),this.secondaryCollection=this.fieldTypeSectionCollection},onShow:function(){var t=i.channel("fields").request("get:staging");this.staging.show(new e({collection:t})),this.primary.show(new n({collection:this.primaryCollection})),this.secondary.show(new n({collection:this.secondaryCollection}))},getEl:function(){return jQuery(this.el).parent()},filterFieldTypes:function(e){this.primary.reset(),this.secondary.reset(),this.filteredSectionCollection=e,this.primary.show(new n({collection:this.filteredSectionCollection}))},removeFieldTypeFilter:function(){this.primary.show(new n({collection:this.savedCollection})),this.secondary.show(new n({collection:this.fieldTypeSectionCollection}))}});return a}),n("views/app/drawer/itemSettingCollection",[],function(){var e=Marionette.CollectionView.extend({tagName:"div",initialize:function(e){this.childViewOptions={dataModel:e.dataModel}},getChildView:function(e){return i.channel("app").request("get:settingChildView",e)}});return e}),n("views/app/drawer/itemSettingGroup",["views/app/drawer/itemSettingCollection"],function(e){var t=Marionette.LayoutView.extend({tagName:"div",template:"#nf-tmpl-drawer-content-edit-field-setting-group",regions:{settings:".nf-field-settings"},initialize:function(e){this.model.on("change",this.render,this),this.dataModel=e.dataModel},onBeforeDestroy:function(){this.model.off("change",this.render)},onRender:function(){this.model.get("display")?this.settings.show(new e({collection:this.model.get("settings"),dataModel:this.dataModel})):this.settings.empty()},events:{"click .toggle":"clickToggleGroup"},clickToggleGroup:function(e){i.channel("drawer").trigger("click:toggleSettingGroup",e,this.model)},templateHelpers:function(){return{renderLabel:function(){return""!=this.label?_.template(jQuery("#nf-tmpl-drawer-content-edit-setting-group-label").html(),this):""},renderArrowDir:function(){return this.display?"down":"right"}}}});return t}),n("views/app/drawer/itemSettingGroupCollection",["views/app/drawer/itemSettingGroup"],function(e){var t=Marionette.CollectionView.extend({tagName:"div",childView:e,initialize:function(e){this.childViewOptions={dataModel:e.dataModel}}});return t}),n("views/app/drawer/editSettings",["views/app/drawer/itemSettingGroupCollection"],function(e){var t=Marionette.LayoutView.extend({tagName:"div",template:"#nf-tmpl-drawer-content-edit-settings",regions:{settingGroups:".nf-settings-groups"},initialize:function(e){this.dataModel=e.model,this.groupCollection=e.groupCollection},onRender:function(){this.settingGroups.show(new e({collection:this.groupCollection,dataModel:this.dataModel}))},templateHelpers:function(){return{renderTypeNicename:function(){var e=i.channel("app").request("get:currentDomain"),t=e.get("id"),n=i.channel(t).request("get:type",this.type);return n.get("nicename")}}}});return t}),n("views/actions/drawer/typeButton",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-drawer-action-type-button",onRender:function(){if(this.$el=this.$el.children(),this.$el.unwrap(),this.setElement(this.$el),jQuery(this.el).disableSelection(),"installed"==this.model.get("section")){var e=this;jQuery(this.el).draggable({opacity:.9,tolerance:"intersect",scroll:!1,helper:"clone",start:function(t,n){e.dragging=!0,i.channel("drawer-addAction").trigger("startDrag:type",this,n)},stop:function(t,n){e.dragging=!1,i.channel("drawer-addAction").trigger("stopDrag:type",this,n)}})}},events:{"click .nf-item":"clickAddAction"},clickAddAction:function(e){this.dragging||("installed"==this.model.get("section")?i.channel("actions").trigger("click:addAction",this.model):window.open(this.model.get("link"),"_blank"))},templateHelpers:function(){return{renderClasses:function(){var e="nf-item";return""!=jQuery.trim(this.image)&&(e+=" nf-has-img"),"installed"==this.section&&(e+=" nf-action-type"),e},renderStyle:function(){return""!=jQuery.trim(this.image)?'style="background-image: url('+this.image+');"':""}}}});return e}),n("views/actions/drawer/typeCollection",["views/actions/drawer/typeButton"],function(e){var t=Marionette.CompositeView.extend({template:"#nf-tmpl-drawer-action-type-section",childView:e,templateHelpers:function(){var e=this;return{renderNicename:function(){return e.collection.nicename},renderClasses:function(){return e.collection.slug}}},attachHtml:function(e,t){jQuery(e.el).find(".action-types").append(t.el)}});return t}),n("views/actions/drawer/addAction",["views/actions/drawer/typeCollection"],function(e){var t=Marionette.LayoutView.extend({template:"#nf-tmpl-drawer-content-add-action",regions:{primary:"#nf-drawer-primary",secondary:"#nf-drawer-secondary"},initialize:function(){this.listenTo(i.channel("drawer"),"filter:actionTypes",this.filteractionTypes),this.listenTo(i.channel("drawer"),"clear:filter",this.removeactionTypeFilter),this.installedActions=i.channel("actions").request("get:installedActions"),this.primaryCollection=this.installedActions,this.availableActions=i.channel("actions").request("get:availableActions"),this.secondaryCollection=this.availableActions},onShow:function(){this.primary.show(new e({collection:this.primaryCollection})),this.secondary.show(new e({collection:this.secondaryCollection}))},getEl:function(){return jQuery(this.el).parent()},filteractionTypes:function(t,n){this.primary.reset(),this.secondary.reset(),this.primary.show(new e({collection:t})),this.secondary.show(new e({collection:n}))},removeactionTypeFilter:function(){this.primary.show(new e({collection:this.installedActions})),this.secondary.show(new e({collection:this.availableActions}))}});return t}),n("views/settings/drawer/editFormSettings",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-drawer-content-edit-form-settings"});return e}),n("views/app/drawer/contentViewChangesItem",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-drawer-content-view-changes-item",initialize:function(){this.model.on("change:disabled",this.render,this)},onBeforeDestroy:function(){this.model.off("change:disabled",this.render)},onRender:function(){this.$el=this.$el.children(),this.$el.unwrap(),this.setElement(this.$el)},events:{"click .undoSingle":"undoSingle"},undoSingle:function(e){i.channel("drawer").trigger("click:undoSingle",this.model)}});return e}),n("views/app/drawer/contentViewChanges",["views/app/drawer/contentViewChangesItem"],function(e){var t=Marionette.CollectionView.extend({tagName:"table",className:"nf-changes",childView:e});return t}),n("views/app/drawer/headerViewChanges",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-drawer-header-view-changes",events:{"click .undoChanges":"clickUndoChanges"},clickUndoChanges:function(e){i.channel("drawer").trigger("click:undoChanges")}});return e}),n("controllers/app/drawerConfig",["models/app/drawerCollection","views/fields/drawer/addField","views/app/drawer/editSettings","views/actions/drawer/addAction","views/settings/drawer/editFormSettings","views/app/drawer/contentViewChanges","views/app/drawer/headerViewChanges"],function(e,t,n,a,r,l,o){var s=Marionette.Object.extend({initialize:function(){this.collection=new e([{id:"addField",getContentView:function(e){return new t(e)}},{id:"addAction",getContentView:function(e){return new a(e)}},{id:"editSettings",getContentView:function(e){return new n(e)}},{id:"editFormSettings",getContentView:function(e){return new r(e)}},{id:"viewChanges",getHeaderView:function(e){return new o(e)},getContentView:function(e){return new l(e)}}]),i.channel("app").reply("get:drawerCollection",this.getDrawerCollection,this),i.channel("app").reply("get:drawer",this.getDrawer,this)},getDrawerCollection:function(){return this.collection},getDrawer:function(e){return this.collection.get(e)}});return s}),n("models/app/domainModel",[],function(){var e=Backbone.Model.extend({defaults:{dashicons:"",classes:"",active:!1,url:"",hotkeys:!1,disabled:!1}});return e}),n("models/app/domainCollection",["models/app/domainModel"],function(e){var t=Backbone.Collection.extend({model:e});return t}),n("views/fields/mainHeader",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-main-header-fields",initialize:function(){var e=i.channel("fields").request("get:collection");this.listenTo(e,"add",this.render),this.listenTo(e,"remove",this.render)},onRender:function(){var e=i.channel("fields").request("get:collection");0==e.models.length?jQuery(this.el).hide():jQuery(this.el).show()}});return e}),n("views/fields/subHeader",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-sub-header-fields"});return e}),n("views/app/itemControls",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-item-controls",initialize:function(){},onRender:function(){this.currentDomain=i.channel("app").request("get:currentDomain")},events:{"click .nf-edit-settings":"clickEdit","click .nf-delete":"clickDelete","click .nf-duplicate":"clickDuplicateField"},clickEdit:function(e){i.channel("app").trigger("click:edit",e,this.model)},clickDelete:function(e){i.channel("app").trigger("click:delete",e,this.model)},clickDuplicateField:function(e){i.channel("app").trigger("click:duplicate",e,this.model)}});return e}),n("views/fields/fieldItem",["views/app/itemControls"],function(e){var t=Marionette.LayoutView.extend({tagName:"div",template:"#nf-tmpl-main-content-field",regions:{itemControls:".nf-item-controls"},initialize:function(){this.model.on("change",this.render,this)},onBeforeDestroy:function(){this.model.off("change",this.render)},onRender:function(){this.$el=this.$el.children(),this.$el.unwrap(),this.setElement(this.$el),this.itemControls.show(new e({model:this.model}))},templateHelpers:function(){return{renderClasses:function(){var e="nf-field-wrap";return this.editActive&&(e+=" active"),e},renderRequired:function(){return 1==this.required?'<span class="required">*</span>':""},getFieldID:function(){return jQuery.isNumeric(this.id)?"field-"+this.id:this.id}}},events:{click:"maybeClickEdit"},maybeClickEdit:function(e){jQuery(e.target).parent().hasClass("nf-fields-sortable")&&i.channel("app").trigger("click:edit",e,this.model)}});return t}),n("views/fields/mainContentEmpty",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-main-content-fields-empty",onBeforeDestroy:function(){jQuery(this.el).parent().removeClass("nf-fields-empty-droppable").droppable("destroy")},onRender:function(){this.$el=this.$el.children(),this.$el.unwrap(),this.setElement(this.$el)},onShow:function(){jQuery(this.el).parent().hasClass("ui-sortable")&&jQuery(this.el).parent().sortable("destroy"),jQuery(this.el).parent().addClass("nf-fields-empty-droppable"),jQuery(this.el).parent().droppable({accept:function(e){return jQuery(e).hasClass("nf-stage")||jQuery(e).hasClass("nf-field-type-button")?!0:void 0},hoverClass:"nf-droppable-hover",tolerance:"pointer",over:function(e,t){t.item=t.draggable,i.channel("app").request("over:fieldsSortable",t)},out:function(e,t){t.item=t.draggable,i.channel("app").request("out:fieldsSortable",t)},drop:function(e,t){t.item=t.draggable,i.channel("app").request("receive:fieldsSortable",t);var n=i.channel("fields").request("get:collection");n.trigger("reset",n)}})}});return e}),n("views/fields/mainContentFieldCollection",["views/fields/fieldItem","views/fields/mainContentEmpty"],function(e,t){var n=Marionette.CollectionView.extend({tagName:"div",childView:e,emptyView:t,reorderOnSort:!0,initialize:function(){i.channel("fields").reply("get:sortableEl",this.getSortableEl,this)},onRender:function(){if(this.collection.models.length>0){jQuery(this.el).addClass("nf-field-type-droppable").addClass("nf-fields-sortable");jQuery(this.el).sortable({containment:"#nf-main",helper:"clone",cancel:".nf-item-controls",placeholder:"nf-fields-sortable-placeholder",opacity:.95,tolerance:"intersect",receive:function(e,t){i.channel("app").request("receive:fieldsSortable",t)},over:function(e,t){i.channel("app").request("over:fieldsSortable",t)},out:function(e,t){i.channel("app").request("out:fieldsSortable",t)},start:function(e,t){i.channel("app").request("start:fieldsSortable",t)},update:function(e,t){i.channel("app").request("update:fieldsSortable",t)},stop:function(e,t){i.channel("app").request("stop:fieldsSortable",t)}})}},getSortableEl:function(){return this.el}});return n}),n("views/actions/mainHeader",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-main-header-actions",initialize:function(){var e=i.channel("actions").request("get:collection");this.listenTo(e,"add",this.render),this.listenTo(e,"remove",this.render)},onRender:function(){var e=i.channel("actions").request("get:collection");0==e.models.length?jQuery(this.el).hide():jQuery(this.el).show()}});return e}),n("views/actions/subHeader",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-sub-header-actions"});return e}),n("views/actions/actionItem",["views/app/itemControls"],function(e){var t=Marionette.LayoutView.extend({tagName:"tr",template:"#nf-tmpl-action-item",regions:{itemControls:".nf-item-controls"},initialize:function(){this.model.on("change",this.render,this)},onBeforeDestroy:function(){this.model.off("change",this.render)},onRender:function(){this.model.get("editActive")?jQuery(this.el).addClass("active"):jQuery(this.el).removeClass("active"),0==this.model.get("active")?jQuery(this.el).addClass("deactivated"):jQuery(this.el).removeClass("deactivated"),this.itemControls.show(new e({model:this.model}))},events:{"change input":"changeToggle",click:"maybeClickEdit"},maybeClickEdit:function(e){"TR"==jQuery(e.target).parent().prop("tagName")&&i.channel("app").trigger("click:edit",e,this.model)},changeToggle:function(e){var t=i.channel("actions").request("get:settingModel","active");i.channel("app").request("change:setting",e,t,this.model),i.channel("app").request("update:db")},templateHelpers:function(){return{renderToggle:function(){var e=this.label;this.label="",this.value=this.active,this.name=this.id+"-active";var t=_.template(jQuery("#nf-tmpl-edit-setting-toggle").html(),this);
return this.label=e,t},renderTypeNicename:function(){var e=i.channel("actions").request("get:type",this.type);return e.get("nicename")},renderTooltip:function(){return"undefined"!=typeof this.help?'<a class="nf-help" href="#"><span class="dashicons dashicons-admin-comments"></span></a><div class="nf-help-text">'+this.help+"</div>":""}}}});return t}),n("views/actions/mainContentEmpty",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-main-content-actions-empty",onBeforeDestroy:function(){jQuery(this.el).parent().parent().removeClass("nf-actions-empty")},onRender:function(){this.$el=this.$el.children(),this.$el.unwrap(),this.setElement(this.$el)},onShow:function(){jQuery(this.el).parent().parent().addClass("nf-actions-empty")}});return e}),n("views/actions/mainContent",["views/actions/actionItem","views/actions/mainContentEmpty"],function(e,t){var n=Marionette.CompositeView.extend({template:"#nf-tmpl-action-table",childView:e,emptyView:t,onRender:function(){jQuery(this.el).droppable({accept:".nf-one-third",activeClass:"nf-droppable-active",hoverClass:"nf-droppable-hover",drop:function(e,t){i.channel("app").request("drop:actionType",e,t)}})},attachHtml:function(e,t){jQuery(e.el).find("tbody").append(t.el)}});return n}),n("views/settings/mainHeader",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-main-header-settings"});return e}),n("views/settings/subHeader",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-sub-header-settings"});return e}),n("views/settings/mainContent",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-settings"});return e}),n("controllers/app/domainConfig",["models/app/domainCollection","views/fields/mainHeader","views/fields/subHeader","views/fields/mainContentFieldCollection","views/actions/mainHeader","views/actions/subHeader","views/actions/mainContent","views/settings/mainHeader","views/settings/subHeader","views/settings/mainContent"],function(e,t,n,a,r,l,o,s,c,d){var h=Marionette.Object.extend({initialize:function(){this.collection=new e([{id:"fields",nicename:"Form Fields",hotkeys:{Esc:"close:drawer","Ctrl+Shift+n":"add:newField","Ctrl+Shift+a":"changeDomain:actions","Ctrl+Shift+s":"changeDomain:settings"},getMainHeaderView:function(){return new t},getSubHeaderView:function(){return new n},getMainContentView:function(e){var e=i.channel("fields").request("get:collection");return new a({collection:e})}},{id:"actions",nicename:"Emails & Actions",hotkeys:{Esc:"close:drawer","Ctrl+Shift+n":"add:newAction","Ctrl+Shift+f":"changeDomain:fields","Ctrl+Shift+s":"changeDomain:settings"},getMainHeaderView:function(){return new r},getSubHeaderView:function(){return new l},getMainContentView:function(){var e=i.channel("actions").request("get:collection");return new o({collection:e})}},{id:"preview",nicename:"Preview Form",classes:"preview",dashicons:"dashicons-visibility",url:nfAdmin.previewurl}]),i.channel("app").reply("get:domainCollection",this.getDomainCollection,this),i.channel("app").reply("get:domainModel",this.getDomainModel,this)},getDomainCollection:function(){return this.collection},getDomainModel:function(e){return this.collection.get(e)}});return h}),n("models/app/appModel",[],function(){var e=Backbone.Model.extend({defaults:{loading:!1},initialize:function(){this.on("change:clean",this.changeStatus,this)},changeStatus:function(){i.channel("app").trigger("change:clean",this.get("clean"))}});return e}),n("controllers/app/data",["models/app/appModel"],function(e){var t=Marionette.Object.extend({initialize:function(){var t=i.channel("app").request("get:domainCollection");this.model=new e({currentDrawer:!1,currentDomain:t.get("fields"),clean:!0}),i.channel("app").reply("get:data",this.getData,this),i.channel("app").reply("get:setting",this.getSetting,this),i.channel("app").reply("get:currentDomain",this.getCurrentDomain,this),i.channel("app").reply("get:currentDrawer",this.getCurrentDrawer,this),i.channel("app").reply("update:currentDomain",this.updateCurrentDomain,this),i.channel("app").reply("update:currentDrawer",this.updateCurrentDrawer,this),i.channel("app").reply("update:setting",this.updateSetting,this)},updateCurrentDomain:function(e){this.updateSetting("currentDomain",e)},updateSetting:function(e,t){return this.model.set(e,t),!0},getSetting:function(e){return this.model.get(e)},getData:function(){return this.model},getCurrentDomain:function(){return this.model.get("currentDomain")},updateCurrentDrawer:function(e){return this.updateSetting("currentDrawer",e),!0},getCurrentDrawer:function(){var e=this.model.get("currentDrawer");return i.channel("app").request("get:drawer",e)}});return t}),n("controllers/app/drawerToggleSettingGroup",[],function(){var e=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("drawer"),"click:toggleSettingGroup",this.toggleSettingGroup)},toggleSettingGroup:function(e,t){t.get("display")?t.set("display",!1):t.set("display",!0)}});return e}),n("controllers/app/updateDB",[],function(){var e=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("drawer"),"closed",this.updateDB),i.channel("app").reply("update:db",this.updateDB,this)},updateDB:function(e){if(i.channel("app").request("get:setting","clean"))return!1;if(e=e||"preview","preview"==e)var t="nf_preview_update";else if("publish"==e)var t="nf_save_form";var n=i.channel("app").request("get:formData"),a=JSON.parse(JSON.stringify(n)),r=n.get("fields").removedIDs;_.each(a.fields,function(e){var t=e.id;delete e.id,delete e.parent_id;var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i],delete e[i]);e.settings=n,e.id=t}),a.deleted_fields=r;var r=n.get("actions").removedIDs;_.each(a.actions,function(e){var t=e.id;delete e.id,delete e.parent_id;var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i],delete e[i]);e.settings=n,e.id=t}),a.deleted_actions=r,a=JSON.stringify(a),i.channel("app").trigger("before:updateDB",a),"publish"==e&&(i.channel("app").request("update:setting","loading",!0),i.channel("app").trigger("change:loading")),jQuery.post(ajaxurl,{action:t,form:a,security:nfAdmin.ajaxNonce},function(t){try{t=JSON.parse(t),t.action=e,i.channel("app").trigger("response:updateDB",t)}catch(n){console.log("Something went wrong!"),console.log(t)}})}});return e}),n("models/app/formModel",[],function(){var e=Backbone.Model.extend({});return e}),n("controllers/app/formData",["models/app/formModel"],function(e){var t=Marionette.Object.extend({initialize:function(){this.model=new e,this.model.set("id",preloadedFormData.id),this.model.set("fields",i.channel("fields").request("get:collection")),this.model.set("actions",i.channel("actions").request("get:collection")),this.model.set("settings",preloadedFormData.settings),i.channel("app").reply("get:formData",this.getFormData,this)},getFormData:function(){return this.model}});return t}),n("controllers/app/previewLink",[],function(){var e=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("app"),"before:sendChanges",this.disablePreview,this),this.listenTo(i.channel("app"),"response:sendChanges",this.enablePreview,this),this.listenTo(i.channel("app"),"change:clean",this.changePreviewNicename,this)},disablePreview:function(){var e=i.channel("app").request("get:domainCollection"),t=e.get("preview");t.set("disabled",!0)},changePreviewNicename:function(e){var t=i.channel("app").request("get:domainCollection"),n=t.get("preview");if(e)var a="Preview Form";else var a="Preview Changes";n.set("nicename",a)},enablePreview:function(){var e=i.channel("app").request("get:domainCollection"),t=e.get("preview");t.set("disabled",!1)}});return e}),n("controllers/app/menuButtons",[],function(){var e=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("app"),"click:publish",this.publish),this.listenTo(i.channel("app"),"click:viewChanges",this.viewChanges)},publish:function(){i.channel("app").request("update:db","publish")},viewChanges:function(){var e=i.channel("changes").request("get:changeCollection");i.channel("app").request("open:drawer","viewChanges",{collection:e})}});return e}),n("models/app/changeModel",[],function(){var e=Backbone.Model.extend({defaults:{disabled:!1}});return e}),n("models/app/changeCollection",["models/app/changeModel"],function(e){var t=Backbone.Collection.extend({model:e,comparator:function(e){var t=parseInt(e.cid.replace("c",""));return-t}});return t}),n("controllers/app/trackChanges",["models/app/changeCollection","models/app/changeModel"],function(e,t){var n=Marionette.Object.extend({initialize:function(){this.collection=new e,i.channel("changes").reply("register:change",this.registerChange,this),i.channel("changes").reply("get:changeCollection",this.getCollection,this),this.listenTo(i.channel("app"),"change:clean",this.maybeResetCollection)},registerChange:function(e,n,i,a,r){var r="undefined"!=typeof r?r:{};"undefined"==typeof a.dashicon&&(a.dashicon="admin-generic");var l=new t({action:e,model:n,changes:i,label:a,data:r});return this.collection.add(l),l},getCollection:function(){return this.collection},maybeResetCollection:function(e){e&&this.collection.reset()}});return n}),n("controllers/app/undoChanges",[],function(){var e=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("drawer"),"click:undoChanges",this.undoChanges,this),this.listenTo(i.channel("drawer"),"click:undoSingle",this.undoSingle,this)},undoChanges:function(){var e=i.channel("changes").request("get:changeCollection");e.sort();var t=this;_.each(e.models,function(e){t.undoSingle(e,!0)}),e.reset(),i.channel("app").request("update:db"),i.channel("app").request("update:setting","clean",!0),i.channel("app").request("close:drawer")},undoSingle:function(e,t){i.channel("changes").request("undo:"+e.get("action"),e,t)}});return e}),n("controllers/app/publishResponse",[],function(){var e=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("app"),"response:updateDB",this.publishResponse)},publishResponse:function(e){return"publish"!==e.action?!1:("undefined"!=typeof e.data.new_ids&&("undefined"!=typeof e.data.new_ids.fields&&_.each(e.data.new_ids.fields,function(e,t){var n=i.channel("fields").request("get:field",t);n&&n.set("id",e)}),"undefined"!=typeof e.data.new_ids.actions&&_.each(e.data.new_ids.actions,function(e,t){var n=i.channel("actions").request("get:action",t);n&&n.set("id",e)})),i.channel("app").request("update:setting","loading",!1),i.channel("app").trigger("change:loading"),void i.channel("app").request("update:setting","clean",!0))}});return e}),n("controllers/app/changeDomain",[],function(){var e=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("app"),"click:menu",this.changeAppDomain),i.channel("app").reply("change:currentDomain",this.changeAppDomain,this)},changeAppDomain:function(e,t){if("undefined"==typeof t)var n=jQuery(e.target).data("domain"),t=i.channel("app").request("get:domainModel",n);i.channel("app").request("get:currentDrawer")&&i.channel("app").request("close:drawer"),0==t.get("url").length&&(i.channel("app").request("update:currentDomain",t),i.channel("app").trigger("change:currentDomain",t))}});return e}),n("controllers/app/pushstate",[],function(){var e=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("app"),"change:currentDomain",this.changePushState)},changePushState:function(){var e=i.channel("app").request("get:currentDomain");history.pushState(null,null,window.location.href+"&domain="+e.get("id"));var t=/domain=\\d+/,n=window.location.toString(),a=n.replace(t,"");console.log(a)}});return e}),n("controllers/app/hotkeys",[],function(){var e=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("main"),"render:main",this.changeHotkeys),this.listenTo(i.channel("drawer"),"opened",this.changeHotkeys),this.listenTo(i.channel("hotkeys"),"add:newField",this.addNewField),this.listenTo(i.channel("hotkeys"),"add:newAction",this.addNewAction),this.listenTo(i.channel("hotkeys"),"changeDomain:fields",this.changeDomainFields),this.listenTo(i.channel("hotkeys"),"changeDomain:actions",this.changeDomainActions),this.listenTo(i.channel("hotkeys"),"changeDomain:settings",this.changeDomainSettings),this.listenTo(i.channel("hotkeys"),"close:drawer",this.closeDrawer)},changeHotkeys:function(){var e=i.channel("app").request("get:currentDomain");jQuery(document).off(".nfDomainHotkeys"),jQuery("input").off(".nfDomainHotkeys"),e.get("hotkeys")&&jQuery.each(e.get("hotkeys"),function(e,t){jQuery(document).on("keydown.nfDomainHotkeys",null,e,function(e){i.channel("hotkeys").trigger(t)}),jQuery("input").on("keydown.nfDomainHotkeys",null,e,function(e){i.channel("hotkeys").trigger(t)})})},addNewField:function(){"addField"!=i.channel("app").request("get:currentDrawer")?i.channel("app").request("open:drawer","addField"):i.channel("app").request("close:drawer")},addNewAction:function(){"addAction"!=i.channel("app").request("get:currentDrawer")?i.channel("app").request("open:drawer","addAction"):i.channel("app").request("close:drawer")},changeDomainFields:function(){var e=i.channel("app").request("get:domainCollection"),t=e.get("fields");i.channel("app").request("change:currentDomain",{},t)},changeDomainActions:function(){var e=i.channel("app").request("get:domainCollection"),t=e.get("actions");i.channel("app").request("change:currentDomain",{},t)},changeDomainSettings:function(){var e=i.channel("app").request("get:domainCollection"),t=e.get("settings");i.channel("app").request("change:currentDomain",{},t)},closeDrawer:function(){i.channel("app").request("close:drawer")}});return e}),n("controllers/app/cleanState",[],function(){var e=Marionette.Object.extend({initialize:function(){this.ignoreAttributes=["editActive"],this.listenTo(i.channel("app"),"update:setting",this.setAppClean)},setAppClean:function(e){for(var t in e.changedAttributes())var n=t,a=e.changedAttributes()[t];i.channel("undo-"+e.get("type")).request("ignore:attributes",this.ignoreAttributes)||this.ignoreAttributes;return-1!=this.ignoreAttributes.indexOf(t)?!1:void i.channel("app").request("update:setting","clean",!1)}});return e}),n("controllers/app/coreUndo",[],function(){var e=Marionette.Object.extend({initialize:function(){i.channel("changes").reply("undo:changeSetting",this.undoChangeSetting,this),i.channel("changes").reply("undo:addObject",this.undoAddObject,this),i.channel("changes").reply("undo:removeObject",this.undoRemoveObject,this),i.channel("changes").reply("undo:duplicateObject",this.undoDuplicateObject,this),i.channel("changes").reply("undo:sortFields",this.undoSortFields,this),i.channel("changes").reply("undo:addListOption",this.undoAddListOption,this),i.channel("changes").reply("undo:removeListOption",this.undoRemoveListOption,this),i.channel("changes").reply("undo:sortListOptions",this.undoSortListOptions,this)},undoChangeSetting:function(e,t){var n=e.get("model"),i=e.get("changes"),a=i.attr,r=i.before;n.set(a,r),this.maybeRemoveChange(e,t)},undoAddObject:function(e,t){var n=e.get("model"),a=e.get("data").collection;if(delete a.newIDs[n.get("id")],!t){var r=i.channel("changes").request("get:changeCollection"),l=r.where({model:n});_.each(l,function(t){t!==e&&r.remove(t)})}a.remove(n),this.maybeRemoveChange(e,t)},undoDuplicateObject:function(e,t){var n=e.get("model"),a=e.get("data").collection;if(!t){var r=i.channel("changes").request("get:changeCollection"),l=r.where({model:n});_.each(l,function(t){t!==e&&r.remove(t)})}a.remove(n),this.maybeRemoveChange(e,t)},undoRemoveObject:function(e,t){var n=e.get("model"),a=e.get("data").collection;if(i.channel(n.get("objectDomain")).request("add",n),delete a.removedIDs[n.get("id")],!t){var r=i.channel("changes").request("get:changeCollection"),l=r.where({model:n});_.each(l,function(t){t!==e&&t.set("disabled",!1)})}a.trigger("reset",a),this.maybeRemoveChange(e,t)},undoSortFields:function(e,t){var n=e.get("data");_.each(n,function(e){var t=e.before,n=e.model;n.set("order",t)});var a=i.channel("fields").request("get:collection");a.sort(),this.maybeRemoveChange(e,t)},undoAddListOption:function(e,t){var n=e.get("model");if(!t){var a=i.channel("changes").request("get:changeCollection"),r=a.where({model:n});_.each(r,function(t){t!==e&&a.remove(t)})}n.collection.remove(n),this.maybeRemoveChange(e,t)},undoRemoveListOption:function(e,t){var n=e.get("model"),a=e.get("data").collection;if(a.add(n),!t){var r=i.channel("changes").request("get:changeCollection"),l=r.where({model:n});_.each(l,function(t){t!==e&&t.set("disabled",!1)})}this.maybeRemoveChange(e,t)},undoSortListOptions:function(e,t){var n=e.get("data"),i=n.collection,a=n.objModels;_.each(a,function(e){var t=e.before,n=e.model;n.set("order",t)}),i.sort(),this.maybeRemoveChange(e,t)},maybeRemoveChange:function(e,t){var t="undefined"!=typeof t?t:!1;if(!t){i.channel("app").request("update:db");var n=i.channel("changes").request("get:changeCollection");n.remove(e),0==n.length&&(i.channel("app").request("update:setting","clean",!0),i.channel("app").request("close:drawer"))}}});return e}),n("controllers/app/cloneModelDeep",[],function(){var e=Marionette.Object.extend({initialize:function(){i.channel("app").reply("clone:modelDeep",this.cloneModelDeep,this)},cloneModelDeep:function(e){var t={};_.each(e.attributes,function(e,n){if(e instanceof Backbone.Collection){var i=e.map(function(e){return e.clone()}),a=_.clone(e.options),r=new e.constructor(i,a);t[n]=r}else e instanceof Backbone.Model&&(t[n]=e.clone())});var n=e.clone();return _.each(t,function(e,t){n.set(t,e)}),n}});return e}),n("views/app/drawer/itemSetting",[],function(){var e=Marionette.ItemView.extend({tagName:"div",template:"#nf-tmpl-edit-setting-wrap",initialize:function(e){this.dataModel=e.dataModel},onShow:function(){this.$el=this.$el.children(),this.$el.unwrap(),this.setElement(this.$el)},onRender:function(){jQuery(this.el).find(".nf-help").each(function(){jQuery(this).qtip({show:{delay:1500},position:{my:"bottom center",at:"top center",adjust:{mouse:!1,y:-20}},content:{text:jQuery(this).next(".nf-help-text")}})})},templateHelpers:function(){var e=this;return{renderSetting:function(){return"undefined"!=typeof e.dataModel.get(this.name)?this.value=e.dataModel.get(this.name):this.value="",_.template(jQuery("#nf-tmpl-edit-setting-"+this.type).html(),this)},renderWidth:function(){return"undefined"!=typeof this.width?this.width:"one-half"},renderTooltip:function(){return"undefined"!=typeof this.help?'<a class="nf-help" href="#"><span class="dashicons dashicons-admin-comments"></span></a><div class="nf-help-text">'+this.help+"</div>":""}}},events:{change:"changeSetting"},changeSetting:function(e){i.channel("app").trigger("change:setting",e,this.model,this.dataModel)}});return e}),n("controllers/app/getSettingChildView",["views/app/drawer/itemSetting"],function(e){var t=Marionette.Object.extend({initialize:function(){i.channel("app").reply("get:settingChildView",this.getSettingChildView,this)},getSettingChildView:function(t){var n=t.get("type"),a=i.channel(n).request("get:settingChildView",t)||e;return a}});return t}),n("controllers/app/changeSettingDefault",[],function(){var e=Marionette.Object.extend({initialize:function(){i.channel("app").reply("change:setting",this.changeSetting,this),this.listenTo(i.channel("app"),"change:setting",this.changeSetting,this)},changeSetting:function(e,t,n){var a=t.get("name"),r=n.get(a),l=i.channel(t.get("type")).request("before:updateSetting",e,n,a,t);"undefined"==typeof l&&(l=jQuery(e.target).val()),n.set(a,l);var o=l,s={attr:a,before:r,after:o},c=i.channel("app").request("get:currentDomain"),d=c.get("id"),t=i.channel(d).request("get:settingModel",a);"toggle"==t.get("type")&&(r=1==r?"On":"Off",o=1==o?"On":"Off");var h={object:n.get("objectType"),label:n.get("label"),change:"Changed "+t.get("label")+" from "+r+" to "+o};i.channel("changes").request("register:change","changeSetting",n,s,h)}});return e}),n("views/app/drawer/typeSettingFieldset",["views/app/drawer/itemSetting"],function(e){var t=Marionette.CompositeView.extend({template:"#nf-tmpl-edit-setting-wrap",childView:e,initialize:function(e){this.collection=this.model.get("settings"),this.childViewOptions={dataModel:e.dataModel}},onRender:function(){this.$el=this.$el.children(),this.$el.unwrap(),this.setElement(this.$el),this.$el=this.$el.children(),this.$el.unwrap(),this.setElement(this.$el)},templateHelpers:function(){return{renderSetting:function(){return _.template(jQuery("#nf-tmpl-edit-setting-"+this.type).html(),this)},renderWidth:function(){return"undefined"!=typeof this.width?this.width:"one-half"}}},attachHtml:function(e,t){jQuery(e.el).find(".nf-field-sub-settings").append(t.el)}});return t}),n("models/app/settingModel",[],function(){var e=Backbone.Model.extend({defaults:{settings:!1},initialize:function(){i.channel("app").trigger("init:settingModel",this),i.channel(this.get("type")).trigger("init:settingModel",this)}});return e}),n("models/app/settingCollection",["models/app/settingModel"],function(e){var t=Backbone.Collection.extend({model:e});return t}),n("controllers/app/fieldset",["views/app/drawer/typeSettingFieldset","models/app/settingCollection"],function(e,t){var n=Marionette.Object.extend({initialize:function(){i.channel("fieldset").reply("get:settingChildView",this.getSettingChildView,this),this.listenTo(i.channel("fieldset"),"init:settingModel",this.createSettingsCollection)},getSettingChildView:function(t){return e},createSettingsCollection:function(e){e.set("settings",new t(e.get("settings")))}});return n}),n("controllers/app/toggleSetting",[],function(){var e=Marionette.Object.extend({initialize:function(){i.channel("toggle").reply("before:updateSetting",this.updateSetting,this)},updateSetting:function(e,t,n,i){if(jQuery(e.target).attr("checked"))var a=1;else var a=0;return a}});return e}),n("controllers/app/itemControls",[],function(){var e=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("app"),"click:edit",this.clickEdit),this.listenTo(i.channel("app"),"click:delete",this.clickDelete),this.listenTo(i.channel("app"),"click:duplicate",this.clickDuplicate)},clickEdit:function(e,t){var n=i.channel("app").request("get:currentDomain"),a=n.get("id");i.channel(a).request("clear:editActive"),t.set("editActive",!0);var r=i.channel(a).request("get:type",t.get("type"));i.channel("app").request("open:drawer","editSettings",{model:t,groupCollection:r.get("settingGroups")})},clickDelete:function(e,t){var n=i.channel("app").request("clone:modelDeep",t),a={object:t.get("objectType"),label:t.get("label"),change:"Removed",dashicon:"dismiss"},r={collection:t.collection};i.channel("changes").request("register:change","removeObject",n,null,a,r);var l=i.channel("changes").request("get:changeCollection"),o=l.where({model:t});_.each(o,function(e){"object"==typeof e.get("data")&&_.each(e.get("data"),function(e){e.model==e&&(e.model=n)}),e.set("model",n),e.set("disabled",!0)});var s=i.channel("app").request("get:currentDomain"),c=s.get("id");i.channel(c).request("delete",t)},clickDuplicate:function(e,t){var n=i.channel("app").request("clone:modelDeep",t),a=i.channel("app").request("get:currentDomain"),r=a.get("id");n.set("label",n.get("label")+" Copy");var l=i.channel(r).request("get:tmpID");n.set("id",l),i.channel(r).request("add",n);var o={object:t.get("objectType"),label:t.get("label"),change:"Duplicated",dashicon:"admin-page"},s={collection:i.channel(r).request("get:collection")};i.channel("changes").request("register:change","duplicateObject",n,null,o,s),i.channel("app").request("update:db")}});return e}),n("models/app/typeModel",[],function(){var e=Backbone.Model.extend({});return e}),n("models/app/typeCollection",["models/app/typeModel"],function(e){var t=Backbone.Collection.extend({model:e});return t}),n("models/app/settingGroupModel",[],function(){var e=Backbone.Model.extend({defaults:{display:!1}});return e}),n("models/app/settingGroupCollection",["models/app/settingGroupModel"],function(e){var t=Backbone.Collection.extend({model:e});return t}),n("models/fields/typeSectionModel",[],function(){var e=Backbone.Model.extend({defaults:{classes:""}});return e}),n("models/fields/typeSectionCollection",["models/fields/typeSectionModel"],function(e){var t=Backbone.Collection.extend({model:e});return t}),n("controllers/fields/types",["models/app/typeCollection","models/app/settingCollection","models/app/settingGroupCollection","models/fields/typeSectionCollection"],function(e,t,n,a){var r=Marionette.Object.extend({initialize:function(){this.collection=new e,this.fieldTypeSections=new a([{id:"common",nicename:"Common Fields",fieldTypes:[]},{id:"userinfo",nicename:"User Information Fields",fieldTypes:[]},{id:"misc",nicename:"Miscellaneous Fields",fieldTypes:[]}]);var r=this;_.each(fieldTypeData,function(e){var i=new n;_.each(e.settingGroups,function(e){var n={label:e.label,display:e.display,settings:new t(e.settings)};i.add(n)}),"undefined"!=typeof r.fieldTypeSections.get(e.section)&&r.fieldTypeSections.get(e.section).get("fieldTypes").push(e.id);var a={id:e.id,nicename:e.nicename,alias:e.alias,parentType:e.parentType,settingGroups:i,settingDefaults:e.settingDefaults};r.collection.add(a)}),i.channel("fields").reply("get:type",this.getFieldType,this),i.channel("fields").reply("get:typeCollection",this.getTypeCollection,this),i.channel("fields").reply("get:typeSections",this.getTypeSections,this),this.listenTo(i.channel("drawer"),"click:fieldType",this.addStagedField)},getFieldType:function(e){return this.collection.get(e)},getTypeCollection:function(e){return this.collection},addStagedField:function(e){var t=jQuery(e.target).data("id");i.channel("fields").request("add:stagedField",t)},getTypeSections:function(){return this.fieldTypeSections}});return r}),n("controllers/fields/fieldTypeDrag",[],function(){var e=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("drawer-addField"),"startDrag:type",this.startDrag),this.listenTo(i.channel("drawer-addField"),"stopDrag:type",this.stopDrag),i.channel("drawer-addField").reply("get:typeHelperClone",this.getCurrentDraggableHelperClone,this)},startDrag:function(e,t){this.drawerEl=i.channel("app").request("get:drawerEl"),this.mainEl=i.channel("app").request("get:mainEl"),jQuery(this.drawerEl)[0].style.setProperty("overflow","visible","important"),jQuery(this.mainEl)[0].style.setProperty("overflow","visible","important"),this.draggableHelperClone=jQuery(t.helper).clone()},stopDrag:function(e,t){jQuery(this.drawerEl)[0].style.setProperty("overflow","hidden","important"),jQuery(this.mainEl)[0].style.setProperty("overflow","hidden","important")},getCurrentDraggableHelperClone:function(){return this.draggableHelperClone}});return e}),n("controllers/fields/stagingDrag",[],function(){var e=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("drawer-addField"),"startDrag:fieldStaging",this.startDrag),this.listenTo(i.channel("drawer-addField"),"stopDrag:fieldStaging",this.stopDrag)},startDrag:function(e,t){this.drawerEl=i.channel("app").request("get:drawerEl"),this.mainEl=i.channel("app").request("get:mainEl"),jQuery(this.drawerEl)[0].style.setProperty("overflow","visible","important"),jQuery(this.mainEl)[0].style.setProperty("overflow","visible","important");var n=i.channel("fields").request("get:staging"),a=_.template(jQuery("#nf-tmpl-staged-fields-drag").html(),{num:n.models.length});jQuery(t.helper).html(a),jQuery(t.helper).prop("id","nf-staged-fields-drag"),jQuery(t.item).css("opacity","0.7")},stopDrag:function(e,t){jQuery(this.drawerEl)[0].style.setProperty("overflow","hidden","important"),jQuery(this.mainEl)[0].style.setProperty("overflow","hidden","important")}});return e}),n("controllers/fields/savedFieldsSection",["models/fields/typeSectionCollection"],function(e){var t=Marionette.Object.extend({initialize:function(){this.collection=new e([{id:"saved",nicename:"Saved Fields",classes:"nf-saved",fieldTypes:[]}]),i.channel("drawer").reply("get:savedFields",this.getSavedFields,this)},getSavedFields:function(){return this.collection}});return t}),n("controllers/fields/staging",["models/fields/stagingCollection"],function(e){var t=Marionette.Object.extend({initialize:function(){this.collection=new e,i.channel("fields").reply("add:stagedField",this.addStagedField,this),i.channel("fields").reply("remove:stagedField",this.removeStagedField,this),i.channel("fields").reply("get:staging",this.getStagingCollection,this),i.channel("fields").reply("sort:staging",this.sortStagedFields,this),i.channel("fields").reply("clear:staging",this.clearStagedFields,this),this.listenTo(i.channel("drawer-addField"),"click:removeStagedField",this.removeStagedField),this.listenTo(i.channel("drawer-addField"),"before:closeDrawer",this.beforeCloseDrawer)},getStagingCollection:function(){return this.collection},addStagedField:function(e){var t=i.channel("fields").request("get:type",e),n="nf-staged-field-"+jQuery.now(),a={id:n,slug:t.get("id"),nicename:t.get("nicename")};return this.collection.add(a),n},removeStagedField:function(e,t){this.collection.remove(t)},beforeCloseDrawer:function(){if(0!=this.collection.models.length){var e=i.channel("fields").request("get:collection");_.each(this.collection.models,function(t){var n=i.channel("fields").request("get:tmpFieldID"),a={id:n,label:t.get("nicename"),type:t.get("slug")},r=i.channel("fields").request("add",a,!1),l={object:"Field",label:r.get("label"),change:"Added",dashicon:"plus-alt"},o={collection:e};i.channel("changes").request("register:change","addObject",r,null,l,o)}),e.trigger("reset",e),this.collection.reset()}i.channel("fields").request("sort:fields")},sortStagedFields:function(){var e=i.channel("app").request("get:stagedFieldsEl"),t=jQuery(e).sortable("toArray");_.each(this.collection.models,function(e){var n=e.get("id"),i=t.indexOf(n);e.set("order",i)}),this.collection.sort()},clearStagedFields:function(){this.collection.reset()}});return t}),n("controllers/fields/stagingSortable",["models/fields/stagingCollection"],function(e){var t=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("drawer-addField"),"startDrag:type",this.addActiveClass),this.listenTo(i.channel("drawer-addField"),"stopDrag:type",this.removeActiveClass),this.listenTo(i.channel("drawer-addField"),"receive:stagedFields",this.receiveStagedFields),this.listenTo(i.channel("drawer-addField"),"over:stagedFields",this.overStagedFields),this.listenTo(i.channel("drawer-addField"),"out:stagedFields",this.outStagedFields),this.listenTo(i.channel("drawer-addField"),"start:stagedFields",this.startStagedFields),this.listenTo(i.channel("drawer-addField"),"stop:stagedFields",this.stopStagedFields)},receiveStagedFields:function(e){if(jQuery(e.item).hasClass("nf-field-type-button")){var t=jQuery(e.item).data("id"),n=i.channel("fields").request("add:stagedField",t);jQuery(e.helper).prop("id",n),i.channel("fields").request("sort:staging"),jQuery(e.helper).remove(),i.channel("drawer-addField").trigger("drop:fieldType",t)}},addActiveClass:function(){var e=i.channel("app").request("get:stagedFieldsEl");jQuery(e).addClass("nf-droppable-active")},removeActiveClass:function(){var e=i.channel("app").request("get:stagedFieldsEl");jQuery(e).removeClass("nf-droppable-active")},overStagedFields:function(e,t){if(jQuery(t.item).hasClass("nf-field-type-button")){var n=jQuery(t.item).data("id"),a=i.channel("fields").request("get:type",n),r=a.get("nicename");this.currentHelper=t.helper,jQuery(t.helper).html(r+'<span class="dashicons dashicons-dismiss"></span>'),jQuery(t.helper).removeClass("nf-one-third").addClass("nf-item-dock").css({opacity:"0.8",width:"",height:""});var l=i.channel("app").request("get:stagedFieldsEl");jQuery(l).hasClass("ui-sortable")&&jQuery(l).addClass("nf-droppable-hover")}},outStagedFields:function(e){if(jQuery(e.item).hasClass("nf-field-type-button")){var t=i.channel("drawer-addField").request("get:typeHelperClone");jQuery(this.currentHelper).html(jQuery(t).html()),
jQuery(this.currentHelper).removeClass("nf-item-dock").addClass("nf-one-third");var n=i.channel("app").request("get:stagedFieldsEl");jQuery(n).hasClass("ui-sortable")&&jQuery(n).removeClass("nf-droppable-hover")}},startStagedFields:function(e){jQuery(e.item).show(),jQuery(e.item).css({display:"inline",opacity:"0.7"}),jQuery(e.helper).css("opacity","0.5")},stopStagedFields:function(e){jQuery(e.item).css("opacity",""),jQuery(e.helper).remove()}});return t}),n("controllers/fields/filterTypes",["models/fields/typeSectionCollection"],function(e){var t=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("drawer-addField"),"change:filter",this.filterFieldTypes)},filterFieldTypes:function(t,n){if(""!=jQuery.trim(t)){var a=[];_.each(this.filterCollection(t),function(e){a.push(e.get("id"))});var r=new e([{id:"filtered",nicename:"Filtered Fields",fieldTypes:a}]);i.channel("drawer").trigger("filter:fieldTypes",r),n.addObject&&0<a.length&&(i.channel("fields").request("add:stagedField",a[0]),i.channel("drawer").request("clear:filter"))}else i.channel("drawer").trigger("clear:filter")},filterCollection:function(e){e=e.toLowerCase();var t=i.channel("fields").request("get:typeCollection"),n=t.filter(function(t){var n=!1;return-1!=t.get("id").toLowerCase().indexOf(e)?n=!0:-1!=t.get("nicename").toLowerCase().indexOf(e)&&(n=!0),t.get("tags")&&0==e.indexOf("#")&&_.each(t.get("tags"),function(t){e.replace("#","").length>1&&-1!=t.toLowerCase().indexOf(e.replace("#",""))&&(n=!0)}),t.get("alias")&&_.each(t.get("alias"),function(t){-1!=t.toLowerCase().indexOf(e)&&(n=!0)}),n});return n}});return t}),n("controllers/fields/sortable",[],function(){var e=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("drawer-addField"),"startDrag:type",this.addActiveClass),this.listenTo(i.channel("drawer-addField"),"stopDrag:type",this.removeActiveClass),this.listenTo(i.channel("drawer-addField"),"startDrag:fieldStaging",this.addActiveClass),this.listenTo(i.channel("drawer-addField"),"stopDrag:fieldStaging",this.removeActiveClass),i.channel("app").reply("receive:fieldsSortable",this.receiveFieldsSortable,this),i.channel("app").reply("over:fieldsSortable",this.overfieldsSortable,this),i.channel("app").reply("out:fieldsSortable",this.outFieldsSortable,this),i.channel("app").reply("stop:fieldsSortable",this.stopFieldsSortable,this),i.channel("app").reply("start:fieldsSortable",this.startFieldsSortable,this),i.channel("app").reply("update:fieldsSortable",this.updateFieldsSortable,this)},addActiveClass:function(){var e=i.channel("fields").request("get:sortableEl");jQuery(e).addClass("nf-droppable-active")},removeActiveClass:function(){var e=i.channel("fields").request("get:sortableEl");jQuery(e).removeClass("nf-droppable-active")},receiveFieldsSortable:function(e){if(jQuery(e.item).hasClass("nf-field-type-button")){var t=jQuery(e.item).data("id"),n=this.addField(t,!1);jQuery(e.helper).prop("id",n),i.channel("fields").request("sort:fields"),jQuery(e.helper).remove(),i.channel("fields").trigger("drop:fieldType",t)}else if(jQuery(e.item).hasClass("nf-stage")){var a=this;i.channel("fields").request("sort:staging");var r=i.channel("fields").request("get:staging"),l=i.channel("fields").request("get:sortableEl");if(jQuery(l).hasClass("ui-sortable"))var o=jQuery(l).sortable("toArray");else var o=["nf-staged-fields-drag"];var s=o.indexOf("nf-staged-fields-drag");_.each(r.models,function(e,t){var n=a.addField(e.get("slug"));o.splice(s+t,0,n)});var s=o.indexOf("nf-staged-fields-drag");o.splice(s,1),i.channel("fields").request("sort:fields",o),i.channel("fields").request("clear:staging"),jQuery(e.helper).remove()}},addField:function(e,t){t=t||!1;var n=i.channel("fields").request("get:type",e),a=i.channel("fields").request("get:tmpFieldID"),r=i.channel("fields").request("add",{id:a,label:n.get("nicename"),type:n.get("id")},t),l={object:"Field",label:r.get("label"),change:"Added",dashicon:"plus-alt"},o={collection:i.channel("fields").request("get:collection")};return i.channel("changes").request("register:change","addObject",r,null,l,o),a},overfieldsSortable:function(e){if(jQuery(e.item).hasClass("nf-field-type-button")){var t=jQuery(e.helper).data("id"),n=i.channel("fields").request("get:type",t),a=n.get("nicename"),r=i.channel("fields").request("get:sortableEl"),l=jQuery(r).width();this.currentHelper=e.helper,jQuery(e.helper).html(a),jQuery(e.helper).removeClass("nf-one-third").addClass("nf-field-wrap").css({width:l,height:"50px"}),jQuery(r).hasClass("ui-sortable")&&jQuery(r).addClass("nf-droppable-hover")}else if(jQuery(e.item).hasClass("nf-stage")){var r=i.channel("fields").request("get:sortableEl");jQuery(r).hasClass("ui-sortable")&&jQuery(r).addClass("nf-droppable-hover")}},outFieldsSortable:function(e){if(jQuery(e.item).hasClass("nf-field-type-button")){var t=i.channel("drawer-addField").request("get:typeHelperClone");jQuery(this.currentHelper).html(jQuery(t).html()),jQuery(this.currentHelper).removeClass("nf-field-wrap").addClass("nf-one-third").css({width:"",height:""});var n=i.channel("fields").request("get:sortableEl");jQuery(n).hasClass("ui-sortable")&&jQuery(n).removeClass("nf-droppable-hover")}else if(jQuery(e.item).hasClass("nf-stage")){var n=i.channel("fields").request("get:sortableEl");jQuery(n).hasClass("ui-sortable")&&jQuery(n).removeClass("nf-droppable-hover")}},stopFieldsSortable:function(e){jQuery(e.item).css("opacity",""),jQuery(e.helper).remove()},startFieldsSortable:function(e){jQuery(e.item).hasClass("nf-field-type-button")||jQuery(e.item).hasClass("nf-stage")||jQuery(e.item).css("opacity","0.5").show()},updateFieldsSortable:function(e){if(i.channel("fields").request("sort:fields"),!jQuery(e.item).hasClass("nf-field-type-button")&&!jQuery(e.item).hasClass("nf-stage")){var t=i.channel("fields").request("get:collection"),n=jQuery(e.item).prop("id").replace("field-",""),a=t.get(n),r=[];_.each(t.models,function(e){var t=e._previousAttributes.order,n=e.get("order");r.push({model:e,attr:"order",before:t,after:n})});var l={object:"Field",label:a.get("label"),change:"Re-ordered from "+a._previousAttributes.order+" to "+a.get("order"),dashicon:"sort"};i.channel("changes").request("register:change","sortFields",a,null,l,r)}}});return e}),n("models/fields/fieldModel",[],function(){var e=Backbone.Model.extend({defaults:{objectType:"Field",objectDomain:"fields",editActive:!1},initialize:function(){this.bind("change",this.changeSetting,this);var e=i.channel("fields").request("get:type",this.get("type")),t=e.get("parentType"),n=this;_.each(e.get("settingDefaults"),function(e,t){n.get(t)||n.set(t,e)}),i.channel("fields").trigger("init:fieldModel",this),i.channel("fields-"+t).trigger("init:fieldModel",this),i.channel("fields-"+this.get("type")).trigger("init:fieldModel",this)},changeSetting:function(){i.channel("app").trigger("update:setting",this)}});return e}),n("models/fields/fieldCollection",["models/fields/fieldModel"],function(e){var t=Backbone.Collection.extend({model:e,comparator:"order",tmpNum:1,initialize:function(){this.on("add",this.addField,this),this.on("remove",this.removeField,this),this.newIDs=[]},addField:function(e){this.newIDs.push(e.get("id"))},removeField:function(e){this.removedIDs[e.get("id")]=e.get("id")}});return t}),n("controllers/fields/data",["models/fields/fieldCollection","models/fields/fieldModel"],function(e,t){var n=Marionette.Object.extend({initialize:function(){this.collection=new e(preloadedFormData.fields),this.collection.removedIDs={},i.channel("fields").reply("get:collection",this.getFieldCollection,this),i.channel("fields").reply("get:field",this.getField,this),i.channel("fields").reply("get:tmpFieldID",this.getTmpFieldID,this),i.channel("fields").reply("get:tmpID",this.getTmpFieldID,this),i.channel("fields").reply("add",this.addField,this),i.channel("fields").reply("delete",this.deleteField,this),i.channel("fields").reply("sort:fields",this.sortFields,this)},getFieldCollection:function(){return this.collection},getField:function(e){return this.collection.get(e)},addField:function(e,n){if(n=n||!1,!1==e instanceof Backbone.Model)var a=new t(e);else var a=e;return this.collection.add(a,{silent:n}),i.channel("app").request("update:setting","clean",!1),a},updateFieldSetting:function(e,t,n){var i=this.collection.get(e);i.set(t,n)},sortFields:function(e,t){var n=i.channel("fields").request("get:sortableEl");if(jQuery(n).hasClass("ui-sortable")){var e=e||jQuery(n).sortable("toArray");_.each(this.collection.models,function(t){var n=(t.get("order"),t.get("id"));if(jQuery.isNumeric(n))var i="field-"+n;else var i=n;var a=e.indexOf(i)+1;t.set("order",a)}),this.collection.sort(),i.channel("app").request("update:setting","clean",!1),i.channel("app").request("update:db")}},deleteField:function(e){this.collection.remove(e),i.channel("app").request("update:setting","clean",!1),i.channel("app").request("update:db")},getTmpFieldID:function(){var e=this.collection.tmpNum;return this.collection.tmpNum++,"tmp-"+e}});return n}),n("models/fields/listOptionModel",[],function(){var e=Backbone.Model.extend({});return e}),n("models/fields/listOptionCollection",["models/fields/listOptionModel"],function(e){var t=Backbone.Collection.extend({model:e,comparator:"order",initialize:function(){this.on("sort",this.changeCollection,this),this.on("add",this.addOption,this)},changeCollection:function(){i.channel("list-repeater").trigger("sort:options",this)},addOption:function(e,t){!e.get("order")}});return t}),n("views/fields/drawer/typeSettingListOption",[],function(){var e=Marionette.ItemView.extend({tagName:"div",className:"nf-table-row",template:"#nf-tmpl-edit-setting-list-option",initialize:function(e){this.dataModel=e.dataModel,this.collection=e.collection},onRender:function(){jQuery(this.el).prop("id",this.model.cid)},onShow:function(){jQuery(this.el).find("input:first").focus()},events:{"change input":"changeOption","click .nf-delete":"deleteOption",keyup:"maybeAddOption"},changeOption:function(e){i.channel("list-repeater").trigger("change:option",e,this.model,this.dataModel)},deleteOption:function(e){i.channel("list-repeater").trigger("click:deleteOption",this.model,this.collection,this.dataModel)},maybeAddOption:function(e){13==e.keyCode&&i.channel("list-repeater").trigger("click:addOption",this.collection,this.dataModel)}});return e}),n("views/fields/drawer/typeSettingListEmpty",[],function(){var e=Marionette.ItemView.extend({tagName:"tr",template:"#nf-tmpl-edit-setting-list-empty"});return e}),n("views/fields/drawer/typeSettingListComposite",["views/fields/drawer/typeSettingListOption","views/fields/drawer/typeSettingListEmpty"],function(e,t){var n=Marionette.CompositeView.extend({template:"#nf-tmpl-edit-setting-wrap",childView:e,emptyView:t,initialize:function(e){this.collection=e.dataModel.get("options"),this.dataModel=e.dataModel,this.childViewOptions={collection:this.collection,dataModel:e.dataModel}},onRender:function(){this.$el=this.$el.children(),this.$el.unwrap(),this.setElement(this.$el),this.$el=this.$el.children(),this.$el.unwrap(),this.setElement(this.$el);var e=this;jQuery(this.el).find(".nf-list-options-tbody").sortable({handle:".handle",helper:"clone",placeholder:"nf-list-options-sortable-placeholder",forcePlaceholderSize:!0,opacity:.95,tolerance:"pointer",start:function(e,t){i.channel("list-repeater").request("start:optionSortable",t)},stop:function(e,t){i.channel("list-repeater").request("stop:optionSortable",t)},update:function(t,n){i.channel("list-repeater").request("update:optionSortable",n,this,e)}})},templateHelpers:function(){return{renderSetting:function(){return _.template(jQuery("#nf-tmpl-edit-setting-"+this.type).html(),this)},renderWidth:function(){return"undefined"!=typeof this.width?this.width:"one-half"}}},attachHtml:function(e,t){jQuery(e.el).find(".nf-list-options-tbody").append(t.el)},events:{"click .nf-add-new":"clickAddOption"},clickAddOption:function(e){i.channel("list-repeater").trigger("click:addOption",this.collection,this.dataModel)}});return n}),n("controllers/fields/listField",["models/fields/listOptionModel","models/fields/listOptionCollection","views/fields/drawer/typeSettingListComposite"],function(e,t,n){var a=Marionette.Object.extend({initialize:function(){i.channel("list-repeater").reply("get:settingChildView",this.getSettingChildView,this),this.listenTo(i.channel("fields-list"),"init:fieldModel",this.createOptionCollection),this.listenTo(i.channel("list-repeater"),"change:option",this.changeOption),this.listenTo(i.channel("list-repeater"),"click:addOption",this.addOption),this.listenTo(i.channel("list-repeater"),"click:deleteOption",this.deleteOption),i.channel("list-repeater").reply("update:optionSortable",this.updateOptionSortable,this),i.channel("list-repeater").reply("stop:optionSortable",this.stopOptionSortable,this),i.channel("list-repeater").reply("start:optionSortable",this.startOptionSortable,this)},createOptionCollection:function(e){var n=e.get("options");if(n||e.set("options",[{calc:1,label:"One",value:"one",order:0,selected:0},{calc:2,label:"Two",value:"two",order:1,selected:0},{calc:3,label:"Three",value:"three",order:2,selected:0}],{silent:!0}),0==n instanceof Backbone.Collection){var i=new t;i.add(e.get("options")),e.set("options",i,{silent:!0})}},changeOption:function(e,t,n){var a=jQuery(e.target).data("id");if("selected"==a)if(jQuery(e.target).attr("checked"))var r=1;else var r=0;else var r=jQuery(e.target).val();var l=t.get(a);t.set(a,r),this.triggerFieldModel(t,n);var o=r,s={attr:a,before:l,after:o},c={object:"Field",label:n.get("label"),change:"Option "+t.get("label")+" "+a+" changed from "+l+" to "+o};i.channel("changes").request("register:change","changeSetting",t,s,c)},addOption:function(t,n){var a=new e({label:"",value:"",calc:"",selected:0,order:t.length});t.add(a);var r={object:"Field",label:n.get("label"),change:"Option Added",dashicon:"plus-alt"};i.channel("changes").request("register:change","addListOption",a,null,r),this.triggerFieldModel(a,n)},deleteOption:function(e,t,n){var a=i.channel("app").request("clone:modelDeep",e),r={object:"Field",label:n.get("label"),change:"Option "+a.get("label")+" Removed",dashicon:"dismiss"},l={collection:t};i.channel("changes").request("register:change","removeListOption",a,null,r,l);var o=i.channel("changes").request("get:changeCollection"),s=o.where({model:e});_.each(s,function(e){"object"==typeof e.get("data")&&_.each(e.get("data"),function(e){e.model==n&&(e.model=a)}),e.set("model",a),e.set("disabled",!0)}),t.remove(e),this.triggerFieldModel(e,n)},triggerFieldModel:function(e,t){i.channel("app").trigger("update:setting",e)},getSettingChildView:function(e){return n},updateOptionSortable:function(e,t,n){var a=jQuery(t).sortable("toArray"),r=n.collection.get({cid:jQuery(e.item).prop("id")}),l={collection:n.collection,objModels:[]};_.each(a,function(e,t){var i=n.collection.get({cid:e}),a=i.get("order");i.set("order",t);var r=t;l.objModels.push({model:i,attr:"order",before:a,after:r})}),n.collection.sort();var o={object:"Field",label:n.fieldModel.get("label"),change:"Option "+r.get("label")+" re-ordered from "+r._previousAttributes.order+" to "+r.get("order"),dashicon:"sort"};i.channel("changes").request("register:change","sortListOptions",r,null,o,l),this.triggerFieldModel(r,n.fieldModel)},stopOptionSortable:function(e){jQuery(e.item).css("opacity","")},startOptionSortable:function(e){jQuery(e.placeholder).find("div").remove(),jQuery(e.item).css("opacity","0.5").show()}});return a}),n("controllers/fields/editActive",[],function(){var e=Marionette.Object.extend({initialize:function(){i.channel("fields").reply("clear:editActive",this.clearEditActive,this),this.listenTo(i.channel("drawer"),"before:closeDrawer",this.clearEditActive)},clearEditActive:function(){var e=i.channel("fields").request("get:collection");_.each(e.models,function(e){e.set("editActive",!1)})}});return e}),n("controllers/fields/fieldSettings",["models/app/settingCollection"],function(e){var t=Marionette.Object.extend({initialize:function(){this.collection=new e(fieldSettings),i.channel("fields").reply("get:settingModel",this.getSettingModel,this)},getSettingModel:function(e){return this.collection.findWhere({name:e})}});return t}),n("controllers/actions/types",["models/app/typeCollection","models/app/settingCollection","models/app/settingGroupCollection"],function(e,t,n){var a=Marionette.Object.extend({initialize:function(){this.installedActions=new e,this.installedActions.slug="installed",this.installedActions.nicename="Installed",this.availableActions=new e,this.availableActions.slug="available",this.availableActions.nicename="Available";var a=this;_.each(actionTypeData,function(e){var i=new n;_.each(e.settingGroups,function(e){var n={label:e.label,display:e.display,settings:new t(e.settings)};i.add(n)});var r={id:e.id,nicename:e.nicename,alias:e.alias,settingGroups:i,settingDefaults:e.settingDefaults,image:e.image,link:e.link,section:e.section};a[e.section+"Actions"].add(r)}),i.channel("actions").reply("get:type",this.getType,this),i.channel("actions").reply("get:installedActions",this.getInstalledActions,this),i.channel("actions").reply("get:availableActions",this.getAvailableActions,this)},getType:function(e){var t=this.installedActions.get(e);return t||(t=this.availableActions.get(e)),t},getInstalledActions:function(){return this.installedActions},getAvailableActions:function(){return this.availableActions},addStagedField:function(e){var t=jQuery(e.target).data("id");i.channel("fields").request("add:stagedField",t)},getTypeSections:function(){return this.fieldTypeSections}});return a}),n("models/actions/actionModel",[],function(){var e=Backbone.Model.extend({defaults:{objectType:"Action",objectDomain:"actions",editActive:!1},initialize:function(){this.bind("change",this.changeSetting,this);var e=i.channel("actions").request("get:type",this.get("type")),t=this;_.each(e.get("settingDefaults"),function(e,n){t.get(n)||t.set(n,e)}),i.channel("actions").trigger("init:fieldModel",this),i.channel("actions-"+this.get("type")).trigger("init:fieldModel",this)},changeSetting:function(){i.channel("app").trigger("update:setting",this)}});return e}),n("models/actions/actionCollection",["models/actions/actionModel"],function(e){var t=Backbone.Collection.extend({model:e,comparator:"order",tmpNum:1,initialize:function(){this.on("add",this.addAction,this),this.on("remove",this.removeAction,this),this.newIDs=[]},addAction:function(e){this.newIDs.push(e.get("id"))},removeAction:function(e){this.removedIDs[e.get("id")]=e.get("id")}});return t}),n("controllers/actions/data",["models/actions/actionCollection","models/actions/actionModel"],function(e,t){var n=Marionette.Object.extend({initialize:function(){this.collection=new e(preloadedFormData.actions),this.collection.removedIDs={},i.channel("actions").reply("get:collection",this.getCollection,this),i.channel("actions").reply("get:action",this.getAction,this),i.channel("actions").reply("get:tmpID",this.getTmpID,this),i.channel("actions").reply("add",this.addAction,this),i.channel("actions").reply("delete",this.deleteAction,this)},getCollection:function(){return this.collection},getAction:function(e){return this.collection.get(e)},addAction:function(e,n){if(n=n||!1,!1==e instanceof Backbone.Model)var a=new t(e);else var a=e;return this.collection.add(a,{silent:n}),i.channel("app").request("update:setting","clean",!1),a},deleteAction:function(e){this.collection.remove(e),i.channel("app").request("update:setting","clean",!1),i.channel("app").request("update:db")},getTmpID:function(){var e=this.collection.tmpNum;return this.collection.tmpNum++,"tmp-"+e}});return n}),n("controllers/actions/actionSettings",["models/app/settingCollection"],function(e){var t=Marionette.Object.extend({initialize:function(){this.collection=new e(actionSettings),i.channel("actions").reply("get:settingModel",this.getSettingModel,this)},getSettingModel:function(e){return this.collection.findWhere({name:e})}});return t}),n("controllers/actions/editActive",[],function(){var e=Marionette.Object.extend({initialize:function(){i.channel("actions").reply("clear:editActive",this.clearEditActive,this),this.listenTo(i.channel("drawer"),"before:closeDrawer",this.clearEditActive)},clearEditActive:function(){var e=i.channel("actions").request("get:collection");_.each(e.models,function(e){e.set("editActive",!1)})}});return e}),n("controllers/actions/addActionTypes",["models/actions/actionCollection","models/actions/actionModel"],function(e,t){var n=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("actions"),"click:addAction",this.addAction),i.channel("actions").reply("add:actionType",this.addAction,this)},addAction:function(e){var t={id:i.channel("actions").request("get:tmpID"),type:e.get("id"),label:e.get("nicename")},n=i.channel("actions").request("add",t),a={object:"Action",label:n.get("label"),change:"Added",dashicon:"plus-alt"},t={collection:i.channel("actions").request("get:collection")};i.channel("changes").request("register:change","addObject",n,null,a,t),i.channel("app").trigger("click:edit",{},n)}});return n}),n("controllers/actions/typeDrag",[],function(){var e=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("drawer-addAction"),"startDrag:type",this.startDrag),this.listenTo(i.channel("drawer-addAction"),"stopDrag:type",this.stopDrag),i.channel("drawer-addAction").reply("get:typeHelperClone",this.getCurrentDraggableHelperClone,this)},startDrag:function(e,t){this.drawerEl=i.channel("app").request("get:drawerEl"),this.mainEl=i.channel("app").request("get:mainEl"),jQuery(this.drawerEl)[0].style.setProperty("overflow","visible","important"),jQuery(this.mainEl)[0].style.setProperty("overflow","visible","important"),this.draggableHelperClone=jQuery(t.helper).clone()},stopDrag:function(e,t){jQuery(this.drawerEl)[0].style.setProperty("overflow","hidden","important"),jQuery(this.mainEl)[0].style.setProperty("overflow","hidden","important")},getCurrentDraggableHelperClone:function(){return this.draggableHelperClone}});return e}),n("controllers/actions/droppable",[],function(){var e=Marionette.Object.extend({initialize:function(){i.channel("app").reply("drop:actionType",this.dropActionType,this)},dropActionType:function(e,t){var n=jQuery(t.helper).data("type"),a=i.channel("actions").request("get:type",n);i.channel("actions").request("add:actionType",a)}});return e}),n("models/actions/typeModel",[],function(){var e=Backbone.Model.extend({});return e}),n("models/actions/typeCollection",["models/actions/typeModel"],function(e){var t=Backbone.Collection.extend({model:e});return t}),n("controllers/actions/filterTypes",["models/actions/typeCollection"],function(e){var t=Marionette.Object.extend({initialize:function(){this.listenTo(i.channel("drawer-addAction"),"change:filter",this.filterActionTypes)},filterActionTypes:function(t,n){if(""!=jQuery.trim(t)){var a=[],r=i.channel("actions").request("get:installedActions");_.each(this.filterCollection(t,r),function(e){a.push(e)});var l=[],o=i.channel("actions").request("get:availableActions");_.each(this.filterCollection(t,o),function(e){l.push(e)});var s=new e(a);s.slug="installed",s.nicename="Installed";var c=new e(l);c.slug="available",c.nicename="Available",i.channel("drawer").trigger("filter:actionTypes",s,c),n.addObject&&0<s.length&&(i.channel("actions").request("add:actionType",s.models[0]),i.channel("drawer").request("clear:filter"))}else i.channel("drawer").trigger("clear:filter")},filterCollection:function(e,t){e=e.toLowerCase();var n=t.filter(function(t){var n=!1;return-1!=t.get("id").toLowerCase().indexOf(e)?n=!0:-1!=t.get("nicename").toLowerCase().indexOf(e)&&(n=!0),t.get("tags")&&0==e.indexOf("#")&&_.each(t.get("tags"),function(t){e.replace("#","").length>1&&-1!=t.toLowerCase().indexOf(e.replace("#",""))&&(n=!0)}),t.get("alias")&&_.each(t.get("alias"),function(t){-1!=t.toLowerCase().indexOf(e)&&(n=!0)}),n});return n}});return t}),n("controllers/loadControllers",["controllers/app/drawer","controllers/app/drawerConfig","controllers/app/domainConfig","controllers/app/data","controllers/app/drawerToggleSettingGroup","controllers/app/updateDB","controllers/app/formData","controllers/app/previewLink","controllers/app/menuButtons","controllers/app/trackChanges","controllers/app/undoChanges","controllers/app/publishResponse","controllers/app/changeDomain","controllers/app/pushstate","controllers/app/hotkeys","controllers/app/cleanState","controllers/app/coreUndo","controllers/app/cloneModelDeep","controllers/app/getSettingChildView","controllers/app/changeSettingDefault","controllers/app/fieldset","controllers/app/toggleSetting","controllers/app/itemControls","controllers/fields/types","controllers/fields/fieldTypeDrag","controllers/fields/stagingDrag","controllers/fields/savedFieldsSection","controllers/fields/staging","controllers/fields/stagingSortable","controllers/fields/filterTypes","controllers/fields/sortable","controllers/fields/data","controllers/fields/listField","controllers/fields/editActive","controllers/fields/fieldSettings","controllers/actions/types","controllers/actions/data","controllers/actions/actionSettings","controllers/actions/editActive","controllers/actions/addActionTypes","controllers/actions/typeDrag","controllers/actions/droppable","controllers/actions/filterTypes"],function(e,t,n,i,a,r,l,o,s,c,d,h,p,u,g,f,m,w,v,y,b,C,j,S,D,M,q,F,Q,k,T,x,O,A,E,V,z,_,H,I,N,$,B){var R=Marionette.Object.extend({initialize:function(){new g,new e,new t,new n,new a,new r,new o,new s,new c,new d,new h,new p,new f,new m,new w,new j,new b,new O,new S,new D,new M,new q,new F,new Q,new k,new T,new y,new C,new v,new A,new E,new V,new z,new _,new H,new I,new N,new $,new B,new x,new l,new i}});return R}),t.config({baseUrl:nfAdmin.requireBaseUrl+"/builder/"});var i=Backbone.Radio;jQuery(document).ready(function(e){t(["views/app/builder","controllers/loadControllers"],function(e,t){var n=Marionette.Application.extend({initialize:function(e){i.channel("app").trigger("before:loadControllers",this);new t;i.channel("app").trigger("after:loadControllers",this)},onStart:function(){new e;i.channel("app").trigger("after:appStart",this)}}),a=new n;a.start()})}),n("main",function(){})}();
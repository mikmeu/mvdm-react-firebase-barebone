# MvdM React Firebase Barebone 
This is compeletely empty, unstyled React project with React Router and Firebase. You can use this as a starter template for future projects.

## Components
### Button
* type = a, button, navLink
* extraClass = an extra class to add to the outer div
### Codeblock
(no settings)
### FormField
* name (string)
* type = input, select, textarea, submit
* values = default value for input, textarea. Button text for submit. Array for select with value and name.
### Grid
* num = two, three, four, five, six
### GridCell
* extraClass = extra class element to add
* mPos = array of start and end position of the cell within the row on mobile
* tPos = array of start and end position of the cell within the row on table
* dPos = array of start and end position of the cell within the row on desktop
### Heading
* type = h1, h2, h3, h4, h5
### Icon
* Name (see list below)
* color (hex, rgb)

Name list:
* add
* arrow_down
* arrow_up
* arrow_left
* arrow_right
* check
* close
* edit
* error
* home
* info
* link
* menu
* new_window
* pointing_arrow_left
* pointing_arrow_right
* search
* share
* trash
* user
### Image 
* src (string)
* title (string)
* caption (string, optional)
### Item
* title (string)
* thumbnail (src, optional)
* meta (string, optional)
### ItemContainer
* num = number of cels per row
### Link
* href (string)
* text (string)
* image (src, string, optional)
* icon (name, string, optional)
### List
* items (array)
* type = ordered (unordered by default)
### Message
* type = info, error, check
### Page Builder
* rows = array of: type (see below), cells (see below)

#### Rows
| Type | Layout |
| ---- | ------ |
| 1 | Items are 100% of the layout |
| 2 | Row with 2 50% cols |
| 3 | Row with 3 30% cols |
| 4 | Row with 4 25% cols |
| 5 | Row with 5 20% cols |
| 6 | Row with 6 15% cols |
| 7 | Row with a col 30% and 70% |
| 8 | Row with a col 25% and 75% |
| 9 | Row with a col 20% and 80% |
| 10 | Row with a col 70% and 30% |
| 11 | Row with a col 75% and 25% |
| 12 | Row with a col 80% and 20% |

#### Cells
| Type | Description | Extra options |
| ---- | ----------- | ------------- |
| text | Just text | |
| h1 | heading 1 | |
| h2 | heading 2 | |
| h3 | heading 3 | | 
| h4 | heading 4 | |
| h5 | heading 5 | |
| image | An image | src alt |
| iframe | An iframe | |
| link | An link | href text |
| button | A button | href text |
| list | List array | |
| table | A table | heading (array), rows (array of arrays) |
### Paragraph
(no settings)
### Table
* heading (array)
* rows (array of arrays)

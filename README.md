## Description
This library can be used to display flash messages or alert messages in your html template.

Alternative to angular-2-flash-messages, this is the closest alternative to angular-2-flash-messages npm library. The usage of this library almost ressembles the usage of the angular-2-flash-messages library.

---

## Requirements
- NPM (Node Package Manager)

---

## Installation
- `npm install jjwins-angular-alert-messages`

---

## Importing

Import **AlertMessagesModule** from **jjwins-angular-alert-messages** in your module.ts file and add **AlertMessagesModule** to the imports array of module.ts file

```
import { AlertMessagesModule } from 'jjwins-angular-alert-messages';
 


imports: [ 
... 
AlertMessagesModule,
...
],
```

---

## Usage

To use the alert message library in your application,
import **AlertMessagesService** from **'jjwins-angular-alert-messages'** in your component.ts file
and call **show()** from the **AlertMessagesService** and add the selector tag `<jjwins-alert-messages></jjwins-alert-messages>` to the html template file 

> app.component.ts

```
    import { AlertMessagesService } from 'jjwins-angular-alert-messages'


    export class AppComponent{
        
        constructor(private _alertMessageService: AlertMessagesService) { }

        this._alertMessageService.show()

    }
```

>app.component.html
`
    <jjwins-alert-messages></jjwins-alert-messages>
`

**show()** **_function takes 4 arguments_**

1. Alert message - your message to show in the alert, this is a required argument
2. Timeout - Period of time after which the alert should disappear
3. Css Class - Provide the name of the in-built classes **_"alerts-message, alerts-error, alerts-warning, alerts-success"_** or provide the name of your css class which is defined in the style sheet as a string value
4. Gray out - set this value to true to gray out the background

```
    export class AppComponent{
        
        constructor(private _alertMessageService: AlertMessagesService) { }

        this._alertMessageService.show('your message', 2000, 'alerts-warning', true)

    }
```
- Note: If you do not want to use any of the optional values, just add a zero, empty string, false in place of the of the optional values

- Example:

    ```
        this._alertMessageService.show('Warning');
    ```
    - above line of code will show an alert with the message 'warning'

    ```
        this._alertMessageService.show('Warning', 2000);
    ```
    - this line of code will show the alert message 'warning' for 2000 millisecons ie, 2 seconds

    ```
        this._alertMessageService.show('Warning', 2000, 'alerts-message');
    ```
    - this line of code will show the alert message 'warning' for 2 seconds with a css class of alerts-message which is in-built
    - you can use 4 in-built css classes _"alerts-message, alerts-error, alerts-warning, alerts-success"_
    - you can also use your own css class that is defined in your style sheets.

    ```
        this._alertMessageService.show('Warning', 2000, 'alerts-message', true);
    ```
    - this line of code will show the alert message 'warning' for 2 seconds with a css class of alerts-message which is in-built and adds a grayed out background 


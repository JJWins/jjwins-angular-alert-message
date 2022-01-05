## Requirements
- NPM (Node Package Manager)

---

## Installation
- `npm install jjwins-alert-messages`

---

## Importing

Import **_AlertMessagesModule_** from **_jjwins-alert-messages_** in your module.ts file and add **_AlertMessagesModule_** to the imports array of module.ts file

```
import { AlertMessagesModule } from 'jjwins-alert-messages';
 


imports: [ 
... 
AlertMessagesModule,
...
],
```

---

## Usage

To use the alert message library in your application,
import **_AlertMessagesService_** from **_'jjwins-alert-messages'_** in your component.ts file
and call **_show()_** from the **_AlertMessagesService_** and add the selector tag `<jjwins-alert-messages></jjwins-alert-messages>` to the html template file 

> app.component.ts

```
    import { AlertMessagesService } from 'jjwins-alert-messages'


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
3. Css Class - Provide the name of your css class as a string value which is defined in the style sheet
4. Gray out - set this value to true to gray out the background

```
    export class AppComponent{
        
        constructor(private _alertMessageService: AlertMessagesService) { }

        this._alertMessageService.show('your message', 2000, 'alert-warning', true)

    }
```
- Note: If you do not want to use any of the optional values, just add a zero, empty string, false in place of the of the optional values
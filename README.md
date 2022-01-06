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

        this._alertMessageService.show('your text here', {})

    }
```

>app.component.html

`
    <jjwins-alert-messages></jjwins-alert-messages>
`

### **Example**

#### For your customization

**Pass an object with the optional key:value pairs**

- Add in-built css classes such as **_"alerts-message, alerts-error, alerts-warning, alerts-success"_** or your own css class defined in the style sheet
- Add timeOut value in milliseconds for your alert message to disappear after specified time, if not specified a close button will appear
- Add grayOut value as true to display a transparent gray background behind the alert message

```
    export class AppComponent{
        
        constructor(private _alertMessageService: AlertMessagesService) { }

        // First parameter is the message you want to add, it is a required value
        // Second parameter is optional and it takes an object

        // function with arguments message and the optional cssClass in an object
        this._alertMessageService.show('your message', {cssClass:'alerts-message'})

        // function with arguments message, cssClass and timeOut
        this._alertMessageService.show('your message', {cssClass:'alerts-message', timeOut: 2000})

        // function with arguments message, cssClass, timeOut and grayOut
        this._alertMessageService.show('your message', {cssClass:'alerts-message', timeOut: 2000, grayOut:true}) 
    }
```


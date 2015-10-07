## react-native-card.io

A <CardIO> component for react-native (iOS only) for [card.io](https://www.card.io/)


### TODO
- [ ] Support Android
- [ ] Support for overiding the `detectionMode`
- [ ] Support for overiding the `scanOverlayView`

### Installation

1. `npm i react-native-card.io --save`
1. Add the .xcodeproj from `node_modules/react-native-card.io/` to your .xcodeproj
1. Add libBBBCardIO.a to "Build Phases -> Link Binary With Libraries"
1. Add "-lc++" to "Other Linker Flags"


### Options

Configuration options are specified as attributes on the `<CardIO />` element.

#####`languageOrLocale`
**[ PropTypes.string ] - Defaults to the device's current language setting**

Can be specified as a language code ("en", "fr", "zh-Hans", etc.) or as a locale ("en\_AU", "fr\_FR", "zh-Hant\_HK", etc.).

If card.io does not contain localized strings for a specified locale, then it will fall back to the language. E.g., "es\_CO" -> "es".

If card.io does not contain localized strings for a specified language, then it will fall back to American English.

If you specify only a language code, and that code matches the device's currently preferred language, then card.io will attempt to use the device's current region as well.
E.g., specifying "en" on a device set to "English" and "United Kingdom" will result in "en\_GB".

###### These localizations are currently included:

- `ar`,
- `da`,
- `de`,
- `en`,
- `en_AU`,
- `en_GB`,
- `es`,
- `es_MX`,
- `fr`,
- `he`,
- `is`,
- `it`,
- `ja`,
- `ko`,
- `ms`,
- `nb`,
- `nl`,
- `pl`,
- `pt`,
- `pt_BR`,
- `ru`,
- `sv`,
- `th`,
- `tr`,
- `zh-Hans`,
- `zh-Hant`,
- `zh-Hant_TW`

#####`guideColor`
**[ PropTypes.string ] - Defaults to lime green**

Alter the card guide (bracket) color. Opaque colors recommended.

#####`useCardIOLogo`

**[ PropTypes.bool ] - Defaults to `false`**

Set to `true` to show the card.io logo over the camera instead of the PayPal logo.

#####`hideCardIOLogo`

**[ PropTypes.bool ] -  Defaults to `false`**

Hide the PayPal or card.io logo in the scan view.

#####`allowFreelyRotatingCardGuide`
**[ PropTypes.bool ] - Defaults to `true`**

By default, in camera view the card guide and the buttons always rotate to match the device's orientation.

All four orientations are permitted, regardless of any app or viewcontroller constraints.

If you wish, the card guide and buttons can instead obey standard iOS constraints, including the UISupportedInterfaceOrientations settings in your app's plist.

Set to `false` to follow standard iOS constraints. (Does not affect the manual entry screen.)

#####`scanInstructions`
**[ PropTypes.string ] - Defaults to `null`**

Set the scan instruction text. If `null`, use the default text.
Use newlines as desired to control the wrapping of text onto multiple lines.

#####`scanExpiry`
**[ PropTypes.bool ] - Defaults to `true`**

Set to`false` if you don't want the camera to try to scan the card expiration.


#####`scannedImageDuration`
**[ PropTypes.number ] - Defaults to 1.0**

After a successful scan, the CardIOView will briefly display an image of the card with the computed card number superimposed. This property controls how long (in seconds) image will be displayed. 

Set this to 0.0 to suppress the display entirely.

---

#####`onSuccess`

**[ PropTypes.func ] - Defaults to `null`**

A callback for successful card number scan.

#####`onFailure`

**[ PropTypes.func ] - Defaults to `null`**

An error callback for a failed card number scan.

### Usage

[Example App](https://github.com/BBB/react-native-card.io-example) 

You can see the specific api usage [here](https://github.com/BBB/react-native-card.io-example/blob/master/src/containers/App.jsx)

**Please don't forget to respect [card.io](https://www.card.io/) [open source contributors](https://github.com/card-io/card.io-iOS-SDK#with-or-without-cocoapods) by putting the acknowledgments in your app**

```JS
import React, {
  Component,
  View,
} from 'react-native';

import CardIO from 'react-native-card.io/ios';

export default class App extends Component {
  render() {
    return (
      <View
        style={
          {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }
        }
      >
        <CardIO
          style={
            {
              flex: 1,
              backgroundColor: 'black',
            }
          }
          hideCardIOLogo={ true }
          onSuccess={
            ( cardInfo ) => console.log(cardInfo)
          }
          onFailure={
            ( err ) => console.error(err)
          }
        />
      </View>
    );
  }
}
```

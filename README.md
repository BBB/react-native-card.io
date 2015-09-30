## react-native-card.io

A <CardIO> component for react-native (iOS only) for [card.io](https://www.card.io/)

### Installation

1. `npm i react-native-card.io --save`
1. Add the .xcodeproj from `node_modules/react-native-card.io/` to your .xcodeproj
1. Add libBBBCardIO.a to "Build Phases -> Link Binary With Libraries"
1. Add "-lc++" to "Other Linker Flags"

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

import React, {
  Component,
  View,
  requireNativeComponent,
  NativeAppEventEmitter,
} from 'react-native';

import {
  LIBRARY_VERSION,
  SUPPORTED_LANGUAGES,
  DETECTION_MODES,
  CAN_READ_CARD_WITH_CAMERA,
} from './constants';

const BBBCardIO = requireNativeComponent('BBBCardIO', null);
const languageOrLocale = React.PropTypes.oneOf(SUPPORTED_LANGUAGES);
const detectionMode = React.PropTypes.oneOf(DETECTION_MODES);

export default class CardIO extends Component {

  propTypes: {
    libraryVersion: LIBRARY_VERSION,
    canReadCardWithCamera: CAN_READ_CARD_WITH_CAMERA,
    languageOrLocale: languageOrLocale,
    detectionMode: detectionMode,
    guideColor: React.PropTypes.string,
    useCardIOLogo: React.PropTypes.bool,
    hideCardIOLogo: React.PropTypes.bool,
    allowFreelyRotatingCardGuide: React.PropTypes.bool,
    scanInstructions: React.PropTypes.string,
    scanExpiry: React.PropTypes.bool,
    onSuccess: React.PropTypes.func,
    onFailure: React.PropTypes.func,
    scannedImageDuration: React.PropTypes.number,
  }

  state: {
    successSubscription: undefined,
    failureSubscription: undefined,
  }

  componentWillMount() {
    const {
      onSuccess,
      onFailure
    } = this.props;

    const successSubscription = NativeAppEventEmitter.addListener(
      'cardIOSuccess',
      onSuccess
    );
    const failureSubscription = NativeAppEventEmitter.addListener(
      'cardIOFailure',
      onFailure
    );

    this.setState({
      successSubscription,
      failureSubscription,
    });
  }

  componentWillUnmount() {
    const {
      successSubscription,
      failureSubscription,
    } = this.state;

    successSubscription.remove();
    failureSubscription.remove();
  }

  render() {
    return (
      <BBBCardIO
        { ...this.props }
      />
    );
  }
};

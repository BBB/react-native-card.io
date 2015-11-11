package com.BBB.BBBCardIO;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.util.Map;
import java.util.HashMap;

import io.card.payment.CardIOActivity;
import io.card.payment.CreditCard;

public class BBBCardIOModule extends ReactContextBaseJavaModule {


    public static final String REACT_CLASS = "BBBCardIO";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    public BBBCardIOModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("DETECTION_MODE", "DOOP");
        return constants;
    }

    @ReactMethod
    public void onSuccess(Callback callback) {

    }
}

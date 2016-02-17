package com.BBB.BBBCardIO;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.util.Map;
import java.util.HashMap;

import io.card.payment.CardIOActivity;
import io.card.payment.CreditCard;

public class BBBCardIOModule extends ReactContextBaseJavaModule {


    ReactApplicationContext reactContext;
    private static final int MY_SCAN_REQUEST_CODE = 100;

    public static final String REACT_CLASS = "BBBCardIO";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    public BBBCardIOModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;

        Intent scanIntent = new Intent(this.reactContext, CardIOActivity.class);

        scanIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

        // customize these values to suit your needs.
        scanIntent.putExtra(CardIOActivity.EXTRA_REQUIRE_EXPIRY, true); // default: false
        scanIntent.putExtra(CardIOActivity.EXTRA_REQUIRE_CVV, false); // default: false
        scanIntent.putExtra(CardIOActivity.EXTRA_REQUIRE_POSTAL_CODE, false); // default: false

        // hides the manual entry button
        // if set, developers should provide their own manual entry mechanism in the app
        scanIntent.putExtra(CardIOActivity.EXTRA_SUPPRESS_MANUAL_ENTRY, false); // default: false

        // matches the theme of your application
        scanIntent.putExtra(CardIOActivity.EXTRA_KEEP_APPLICATION_THEME, false); // default: false

        //Check that an app exists to receive the intent
        if (scanIntent.resolveActivity(this.reactContext.getPackageManager()) != null) {

            // this.reactContext.addActivityEventListener()
            this.reactContext.startActivityForResult(scanIntent, MY_SCAN_REQUEST_CODE, new Bundle());
        }

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

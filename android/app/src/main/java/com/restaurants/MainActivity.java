package com.restaurants;

import android.os.Bundle;
import androidx.annotation.Nullable;
import com.reactnativenavigation.NavigationActivity;

import android.graphics.drawable.Drawable;
import androidx.core.content.ContextCompat;
import android.widget.LinearLayout;

public class MainActivity extends NavigationActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(this.createSplashLayout());
    }

    public LinearLayout createSplashLayout() {
    LinearLayout splash = new LinearLayout(this);
    Drawable launch_screen_bitmap = ContextCompat.getDrawable(getApplicationContext(), R.layout.launch_screen_bitmap);
    splash.setBackground(launch_screen_bitmap);

    return splash;
    }
}

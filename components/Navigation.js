import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";


import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faQuran } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import Home from "../pages/Home";
import Library from "../pages/Library";
import Settings from "../pages/Settings";

const Tab = createBottomTabNavigator();
function Navigation({ surahs }) {
    return (
        <Tab.Navigator
            initialRouteName="Library"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "black",
                    color: "white",
                    borderTopColor: "gray",
                    borderTopWidth: 1,
                    paddingTop: 20,
                  
                },
            }}
        >
            <Tab.Screen
                // icon add
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarLabelStyle: {
                        marginTop: 15,
                    },
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faHome} color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Library"
                options={{
                    tabBarLabel: "Library",
                    tabBarLabelStyle: {
                        marginTop: 15,
                    },
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon
                            icon={faQuran}
                            color={color}
                            size={size}
                        />
                    ),
                }}
                children={() => <Library surahs={surahs} />}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: "Settings",
                    tabBarLabelStyle: {
                        marginTop: 15,
                    },
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon
                            icon={faGear}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
export default Navigation;

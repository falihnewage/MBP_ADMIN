/*!

=========================================================
* Light Bootstrap Dashboard PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Users from "views/Users.js";
import Question from "views/Question.js";
import Assessments from "views/Assessments.js";
import Property from "views/Property.js";
import Settings from "views/Settings.js";
import Preferences from "views/Preferences.js";

import Buttons from "views/Components/Buttons.js";
import GridSystem from "views/Components/GridSystem.js";
import Panels from "views/Components/Panels.js";
import SweetAlert from "views/Components/SweetAlertPage.js";
import Notifications from "views/Components/Notifications.js";
import Icons from "views/Components/Icons.js";
import Typography from "views/Components/Typography.js";
import RegularForms from "views/Forms/RegularForms.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";
import ValidationForms from "views/Forms/ValidationForms.js";
import Wizard from "views/Forms/Wizard/Wizard.js";
import RegularTables from "views/Tables/RegularTables.js";
import ExtendedTables from "views/Tables/ExtendedTables.js";
import ReactTables from "views/Tables/ReactTables.js";
import GoogleMaps from "views/Maps/GoogleMaps.js";
import FullScreenMap from "views/Maps/FullScreenMap.js";
import VectorMap from "views/Maps/VectorMap.js";
import Charts from "views/Charts.js";
import Calendar from "views/Calendar.js";
import UserPage from "views/Pages/UserPage.js";
import LoginPage from "views/Pages/LoginPage.js";
import RegisterPage from "views/Pages/RegisterPage.js";
import LockScreenPage from "views/Pages/LockScreenPage.js";
import Viewuser from "views/Pages/Viewuser";



var routes = [
  // {
  //   path: "/LoginPage",
  //   layout: "/admin",
  //   name: "LoginPage",
  //   icon: "nc-icon nc-chart-pie-35",
  //   component: LoginPage,
  // },
  {
    path: "/dashboard",
    layout: "/admin",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    show:true
  },
  {
    path: "/Users",
    layout: "/admin",
    name: "Users",
    icon: "nc-icon nc-circle-09",
    component: Users,
    show:true
  },




  {
    path: "/Assessments",
    layout: "/admin",
    name: "Assessments",
    icon: "nc-icon nc-notes",
    component: Assessments,
    show:true
  },



  {
    path: "/Settings",
    layout: "/admin",
    name: "Settings",
    icon: "nc-icon nc-settings-gear-64",
    component: Settings,
    show:true
  },
  {
    path: "/view-user",
    layout: "/admin",
    name: "Settings",
    icon: "nc-icon nc-settings-gear-64",
    component: Viewuser,
  },
  {
    path: "/login-page",
    layout: "/auth",
    name: "Login Page",
    mini: "LP",
    component: LoginPage,
  },

 
 
  

  
 
  // {
  //   path: "/Logout",
  //   layout: "/admin",
  //   name: "Logout",
  //   icon: "nc-icon nc-chart-pie-35",
  //   component: Logout,
  // },

  
  // {
  //   collapse: true,
  //   path: "/components",
  //   name: "Components",
  //   state: "openComponents",
  //   icon: "nc-icon nc-app",
  //   views: [
  //     {
  //       path: "/buttons",
  //       layout: "/admin",
  //       name: "Buttons",
  //       mini: "B",
  //       component: Buttons,
  //     },
  //     {
  //       path: "/grid-system",
  //       layout: "/admin",
  //       name: "Grid System",
  //       mini: "GS",
  //       component: GridSystem,
  //     },
  //     {
  //       path: "/panels",
  //       layout: "/admin",
  //       name: "Panels",
  //       mini: "P",
  //       component: Panels,
  //     },
  //     {
  //       path: "/sweet-alert",
  //       layout: "/admin",
  //       name: "Sweet Alert",
  //       mini: "SA",
  //       component: SweetAlert,
  //     },
  //     {
  //       path: "/notifications",
  //       layout: "/admin",
  //       name: "Notifications",
  //       mini: "N",
  //       component: Notifications,
  //     },
  //     {
  //       path: "/icons",
  //       layout: "/admin",
  //       name: "Icons",
  //       mini: "I",
  //       component: Icons,
  //     },
  //     {
  //       path: "/typography",
  //       layout: "/admin",
  //       name: "Typography",
  //       mini: "T",
  //       component: Typography,
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   path: "/forms",
  //   name: "Forms",
  //   state: "openForms",
  //   icon: "nc-icon nc-notes",
  //   views: [
  //     {
  //       path: "/regular-forms",
  //       layout: "/admin",
  //       name: "Regular Forms",
  //       mini: "RF",
  //       component: RegularForms,
  //     },
  //     {
  //       path: "/extended-forms",
  //       layout: "/admin",
  //       name: "Extended Forms",
  //       mini: "EF",
  //       component: ExtendedForms,
  //     },
  //     {
  //       path: "/validation-forms",
  //       layout: "/admin",
  //       name: "Validation Forms",
  //       mini: "VF",
  //       component: ValidationForms,
  //     },
  //     {
  //       path: "/wizard",
  //       layout: "/admin",
  //       name: "Wizard",
  //       mini: "W",
  //       component: Wizard,
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   path: "/tables",
  //   name: "Tables",
  //   state: "openTables",
  //   icon: "nc-icon nc-paper-2",
  //   views: [
  //     {
  //       path: "/regular-tables",
  //       layout: "/admin",
  //       name: "Regular Tables",
  //       mini: "RT",
  //       component: RegularTables,
  //     },
  //     {
  //       path: "/extended-tables",
  //       layout: "/admin",
  //       name: "Extended Tables",
  //       mini: "ET",
  //       component: ExtendedTables,
  //     },
  //     {
  //       path: "/react-table",
  //       layout: "/admin",
  //       name: "React Table",
  //       mini: "RT",
  //       component: ReactTables,
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   path: "/maps",
  //   name: "Maps",
  //   state: "openMaps",
  //   icon: "nc-icon nc-pin-3",
  //   views: [
  //     {
  //       path: "/google-maps",
  //       layout: "/admin",
  //       name: "Google Maps",
  //       mini: "GM",
  //       component: GoogleMaps,
  //     },
  //     {
  //       path: "/full-screen-maps",
  //       layout: "/admin",
  //       name: "Full Screen Map",
  //       mini: "FSM",
  //       component: FullScreenMap,
  //     },
  //     {
  //       path: "/vector-maps",
  //       layout: "/admin",
  //       name: "Vector Map",
  //       mini: "VM",
  //       component: VectorMap,
  //     },
  //   ],
  // },
  // {
  //   path: "/charts",
  //   layout: "/admin",
  //   name: "Charts",
  //   icon: "nc-icon nc-chart-bar-32",
  //   component: Charts,
  // },
  // {
  //   path: "/calendar",
  //   layout: "/admin",
  //   name: "Calendar",
  //   icon: "nc-icon nc-single-copy-04",
  //   component: Calendar,
  // },
  // {
  //   collapse: true,
  //   path: "/pages",
  //   name: "Pages",
  //   state: "openPages",
  //   icon: "nc-icon nc-puzzle-10",
  //   views: [
      // {
      //   path: "/user-page",
      //   layout: "/admin",
      //   name: "User Page",
      //   mini: "UP",
      //   component: UserPage,
      // },
      // {
      //   path: "/login-page",
      //   layout: "/auth",
      //   name: "Login Page",
      //   mini: "LP",
      //   component: LoginPage,
      // },
      // {
      //   path: "/register-page",
      //   layout: "/auth",
      //   name: "Register",
      //   mini: "RP",
      //   component: RegisterPage,
      // },
      // {
      //   path: "/lock-screen-page",
      //   layout: "/auth",
      //   name: "Lock Screen Page",
      //   mini: "LSP",
      //   component: LockScreenPage,
      // },
  //   ],
  // },
];
export default routes;

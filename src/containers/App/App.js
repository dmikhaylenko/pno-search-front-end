import React, {Component} from 'react';
import PageWrapper from "../PageWrapper/PageWrapper"
import {ThemeProvider} from "react-jss"
import {List, Item} from "../../components/List"
import dateFormat from "dateformat"
import {Question} from "../../components/Question"


const JSON = [
    {
        "id": 50878416,
        "title": "C++ - TCP - SIGINT by client while sending",
        "reference": "https://stackoverflow.com/questions/50878416/c-tcp-sigint-by-client-while-sending",
        "isAnswered": false,
        "created": 1529075722,
        "imageUrl": "https://www.gravatar.com/avatar/a07d31535938f1047c667a3d463453a0?s=128&d=identicon&r=PG&f=1",
        "userName": "xion"
    },
    {
        "id": 50878412,
        "title": "Map hash with their values with tensorflow feature columns",
        "reference": "https://stackoverflow.com/questions/50878412/map-hash-with-their-values-with-tensorflow-feature-columns",
        "isAnswered": false,
        "created": 1529075709,
        "imageUrl": "https://graph.facebook.com/10206370844169920/picture?type=large",
        "userName": "Alexis"
    },
    {
        "id": 50878410,
        "title": "How can I make my TV with the type &quot;file&quot; work in MODX?",
        "reference": "https://stackoverflow.com/questions/50878410/how-can-i-make-my-tv-with-the-type-file-work-in-modx",
        "isAnswered": false,
        "created": 1529075701,
        "imageUrl": "https://www.gravatar.com/avatar/e8e12863d16d418822b3b74a2fa0c469?s=128&d=identicon&r=PG&f=1",
        "userName": "Jarla"
    },
    {
        "id": 50878409,
        "title": "IE favicon not showing on subpage",
        "reference": "https://stackoverflow.com/questions/50878409/ie-favicon-not-showing-on-subpage",
        "isAnswered": false,
        "created": 1529075699,
        "imageUrl": "https://www.gravatar.com/avatar/db0a9bad46a876ed6de3a8b8a8fc8cc0?s=128&d=identicon&r=PG&f=1",
        "userName": "B.Mat"
    },
    {
        "id": 50878406,
        "title": "How do you use pundit for partial authorization",
        "reference": "https://stackoverflow.com/questions/50878406/how-do-you-use-pundit-for-partial-authorization",
        "isAnswered": false,
        "created": 1529075684,
        "imageUrl": "https://www.gravatar.com/avatar/b3e1907a7f15ed006abc8ad406cf40fe?s=128&d=identicon&r=PG&f=1",
        "userName": "american-ninja-warrior"
    },
    {
        "id": 50878405,
        "title": "Vertical entering with flex box not working even with most basic code",
        "reference": "https://stackoverflow.com/questions/50878405/vertical-entering-with-flex-box-not-working-even-with-most-basic-code",
        "isAnswered": false,
        "created": 1529075680,
        "imageUrl": "https://www.gravatar.com/avatar/3ccb3f3aa3e56fd1ffb4540b14cf472c?s=128&d=identicon&r=PG&f=1",
        "userName": "Cerulean"
    },
    {
        "id": 50878401,
        "title": "Find overlapping ranges based on positions in R",
        "reference": "https://stackoverflow.com/questions/50878401/find-overlapping-ranges-based-on-positions-in-r",
        "isAnswered": false,
        "created": 1529075664,
        "imageUrl": "https://www.gravatar.com/avatar/e0bd5f860604137683ae80a7620e54e2?s=128&d=identicon&r=PG&f=1",
        "userName": "user3224522"
    },
    {
        "id": 50878399,
        "title": "XAML - Open ContextMenu on top of right clicked element",
        "reference": "https://stackoverflow.com/questions/50878399/xaml-open-contextmenu-on-top-of-right-clicked-element",
        "isAnswered": false,
        "created": 1529075662,
        "imageUrl": "https://lh5.googleusercontent.com/-9KCWhKUe2hU/AAAAAAAAAAI/AAAAAAAAAyc/Va3XgDB1b3Y/photo.jpg?sz=128",
        "userName": "Fabio Carvalho"
    },
    {
        "id": 50878391,
        "title": "Resizing the div horizontal and vertical in angular 5 through Mouse pointer",
        "reference": "https://stackoverflow.com/questions/50878391/resizing-the-div-horizontal-and-vertical-in-angular-5-through-mouse-pointer",
        "isAnswered": false,
        "created": 1529075635,
        "imageUrl": "https://i.stack.imgur.com/EO8hx.jpg?s=128&g=1",
        "userName": "Harish"
    },
    {
        "id": 50878389,
        "title": "ReactiveUI - ReactiveCommand fails when ToProperty is fine on the same Observable",
        "reference": "https://stackoverflow.com/questions/50878389/reactiveui-reactivecommand-fails-when-toproperty-is-fine-on-the-same-observabl",
        "isAnswered": false,
        "created": 1529075625,
        "imageUrl": "https://www.gravatar.com/avatar/d66526c937c1e981eb85b8be6d81c063?s=128&d=identicon&r=PG",
        "userName": "Fran&#231;ois"
    },
    {
        "id": 50878383,
        "title": "How do I make a Google Maps widget like this for my wordpress site?",
        "reference": "https://stackoverflow.com/questions/50878383/how-do-i-make-a-google-maps-widget-like-this-for-my-wordpress-site",
        "isAnswered": false,
        "created": 1529075602,
        "imageUrl": "https://www.gravatar.com/avatar/0b54aea7d2fe2b8a73ca90fa63af12bd?s=128&d=identicon&r=PG&f=1",
        "userName": "Ryan"
    },
    {
        "id": 50878379,
        "title": "rails and rake commands freeze/hang",
        "reference": "https://stackoverflow.com/questions/50878379/rails-and-rake-commands-freeze-hang",
        "isAnswered": false,
        "created": 1529075590,
        "imageUrl": "https://graph.facebook.com/10212488667040495/picture?type=large",
        "userName": "RobEW"
    },
    {
        "id": 50878378,
        "title": "How to load a Javascript function, when css class is changed",
        "reference": "https://stackoverflow.com/questions/50878378/how-to-load-a-javascript-function-when-css-class-is-changed",
        "isAnswered": false,
        "created": 1529075589,
        "imageUrl": "https://www.gravatar.com/avatar/4e0bd5db7a66d5ea9c1f6c63b5bd546f?s=128&d=identicon&r=PG&f=1",
        "userName": "Kiwi"
    },
    {
        "id": 50878376,
        "title": "Get Row Number with Sequelize 4.27.0",
        "reference": "https://stackoverflow.com/questions/50878376/get-row-number-with-sequelize-4-27-0",
        "isAnswered": false,
        "created": 1529075583,
        "imageUrl": "https://i.stack.imgur.com/4alSy.jpg?s=128&g=1",
        "userName": "Nicolas"
    },
    {
        "id": 50878374,
        "title": "How to read a JSON column as a field in Apache PIG",
        "reference": "https://stackoverflow.com/questions/50878374/how-to-read-a-json-column-as-a-field-in-apache-pig",
        "isAnswered": false,
        "created": 1529075579,
        "imageUrl": "https://i.stack.imgur.com/0RWZp.jpg?s=128&g=1",
        "userName": "Alexandre Krabbe"
    },
    {
        "id": 50878373,
        "title": "How to set binding options in wpf DataGridCells that are auto generated?",
        "reference": "https://stackoverflow.com/questions/50878373/how-to-set-binding-options-in-wpf-datagridcells-that-are-auto-generated",
        "isAnswered": false,
        "created": 1529075576,
        "imageUrl": "https://www.gravatar.com/avatar/d5d0b411a0416e3c4f2aa93e12b3f0ab?s=128&d=identicon&r=PG&f=1",
        "userName": "DCD"
    },
    {
        "id": 50878371,
        "title": "Is one git remote aware of another?",
        "reference": "https://stackoverflow.com/questions/50878371/is-one-git-remote-aware-of-another",
        "isAnswered": false,
        "created": 1529075574,
        "imageUrl": "https://www.gravatar.com/avatar/66c90a92a32f5bcb68e8120165b7ae5f?s=128&d=identicon&r=PG&f=1",
        "userName": "EM_IE"
    },
    {
        "id": 50878370,
        "title": "Will spring Boot datasource properties work if we configure datasource programmatically in Spring Boot",
        "reference": "https://stackoverflow.com/questions/50878370/will-spring-boot-datasource-properties-work-if-we-configure-datasource-programma",
        "isAnswered": false,
        "created": 1529075572,
        "imageUrl": "https://i.stack.imgur.com/vjB1Z.jpg?s=128&g=1",
        "userName": "Thiagarajan Ramanathan"
    },
    {
        "id": 50878369,
        "title": "Having different Dygraph legends",
        "reference": "https://stackoverflow.com/questions/50878369/having-different-dygraph-legends",
        "isAnswered": false,
        "created": 1529075569,
        "imageUrl": "https://www.gravatar.com/avatar/913585cae910787fdd2186698cc7698e?s=128&d=identicon&r=PG",
        "userName": "ManInMoon"
    },
    {
        "id": 50878366,
        "title": "Visual Studio 2017 Enterprise Basic web site issues",
        "reference": "https://stackoverflow.com/questions/50878366/visual-studio-2017-enterprise-basic-web-site-issues",
        "isAnswered": false,
        "created": 1529075562,
        "imageUrl": "https://www.gravatar.com/avatar/75842b1b905bb14db3fd4164e7104bcd?s=128&d=identicon&r=PG&f=1",
        "userName": "joeydood"
    },
    {
        "id": 50878364,
        "title": "React native re-render causes view to scroll to top - Do my keys change between renders?",
        "reference": "https://stackoverflow.com/questions/50878364/react-native-re-render-causes-view-to-scroll-to-top-do-my-keys-change-between",
        "isAnswered": false,
        "created": 1529075559,
        "imageUrl": "https://www.gravatar.com/avatar/7bbff5adfd4a02fa56ece5bf583da981?s=128&d=identicon&r=PG&f=1",
        "userName": "javascript2016"
    },
    {
        "id": 50878363,
        "title": "how to proxy GET request in golang with URL manipulation",
        "reference": "https://stackoverflow.com/questions/50878363/how-to-proxy-get-request-in-golang-with-url-manipulation",
        "isAnswered": false,
        "created": 1529075559,
        "imageUrl": "https://www.gravatar.com/avatar/06dce770d18a0e4537fcef0ef86a63e2?s=128&d=identicon&r=PG&f=1",
        "userName": "Zuriar"
    },
    {
        "id": 50878362,
        "title": "Wordpress admin bar on home page",
        "reference": "https://stackoverflow.com/questions/50878362/wordpress-admin-bar-on-home-page",
        "isAnswered": false,
        "created": 1529075556,
        "imageUrl": "https://graph.facebook.com/2200757786605805/picture?type=large",
        "userName": "Nathan"
    },
    {
        "id": 50878360,
        "title": "TypoScript: Get image from pages.media root page - or how to use FAL in TypoScript with level sliding features in 7LTS?",
        "reference": "https://stackoverflow.com/questions/50878360/typoscript-get-image-from-pages-media-root-page-or-how-to-use-fal-in-typoscri",
        "isAnswered": false,
        "created": 1529075552,
        "imageUrl": "https://www.gravatar.com/avatar/1addf7391fa2d7f69e89c87e7c006896?s=128&d=identicon&r=PG",
        "userName": "NextThursday"
    },
    {
        "id": 50878358,
        "title": "SEO tags and codes",
        "reference": "https://stackoverflow.com/questions/50878358/seo-tags-and-codes",
        "isAnswered": false,
        "created": 1529075543,
        "imageUrl": "https://www.gravatar.com/avatar/c186dd98e7f74e821375b93898300237?s=128&d=identicon&r=PG&f=1",
        "userName": "Matt"
    },
    {
        "id": 50878357,
        "title": "Xamarin Forms code sharing",
        "reference": "https://stackoverflow.com/questions/50878357/xamarin-forms-code-sharing",
        "isAnswered": false,
        "created": 1529075543,
        "imageUrl": "https://i.stack.imgur.com/Cpqea.jpg?s=128&g=1",
        "userName": "phourxx"
    },
    {
        "id": 50878356,
        "title": "Upgrading to Angular 6, importing and injecting HttpClient into a service has an unknown value",
        "reference": "https://stackoverflow.com/questions/50878356/upgrading-to-angular-6-importing-and-injecting-httpclient-into-a-service-has-an",
        "isAnswered": false,
        "created": 1529075534,
        "imageUrl": "https://www.gravatar.com/avatar/d3fdcf68d7a847a797875185ae90b05e?s=128&d=identicon&r=PG&f=1",
        "userName": "Maxwell Sands"
    },
    {
        "id": 50878355,
        "title": "Fatal error: Class &#39;Spyc&#39; not found in file",
        "reference": "https://stackoverflow.com/questions/50878355/fatal-error-class-spyc-not-found-in-file",
        "isAnswered": false,
        "created": 1529075521,
        "imageUrl": "https://i.stack.imgur.com/wxKUj.jpg?s=128&g=1",
        "userName": "Steven Aguilar"
    },
    {
        "id": 50878354,
        "title": "Split String to array with regex in Bash",
        "reference": "https://stackoverflow.com/questions/50878354/split-string-to-array-with-regex-in-bash",
        "isAnswered": false,
        "created": 1529075518,
        "imageUrl": "https://www.gravatar.com/avatar/ddf6d6fe57cda455477733e9ec04202f?s=128&d=identicon&r=PG&f=1",
        "userName": "Matthias B&#246;"
    },
    {
        "id": 50878353,
        "title": "Swift remove item from array of a certain type",
        "reference": "https://stackoverflow.com/questions/50878353/swift-remove-item-from-array-of-a-certain-type",
        "isAnswered": false,
        "created": 1529075517,
        "imageUrl": "https://www.gravatar.com/avatar/cf9631232462cc2d6e3df8621c12835a?s=128&d=identicon&r=PG&f=1",
        "userName": "mick0311"
    },
    {
        "id": 50878347,
        "title": "Copy multiple workbooks into a single workbooks with powershell",
        "reference": "https://stackoverflow.com/questions/50878347/copy-multiple-workbooks-into-a-single-workbooks-with-powershell",
        "isAnswered": false,
        "created": 1529075489,
        "imageUrl": "https://www.gravatar.com/avatar/0c437a00b832424bd7f02e026817f844?s=128&d=identicon&r=PG&f=1",
        "userName": "Adam"
    },
    {
        "id": 50878345,
        "title": "Parsing nested repeatable XML tags within STRUCT with Hive",
        "reference": "https://stackoverflow.com/questions/50878345/parsing-nested-repeatable-xml-tags-within-struct-with-hive",
        "isAnswered": false,
        "created": 1529075487,
        "imageUrl": "https://www.gravatar.com/avatar/fdc4b09e479c924a8768a7a8f0c4b724?s=128&d=identicon&r=PG",
        "userName": "Sparky"
    },
    {
        "id": 50878343,
        "title": "How to expand a pattern without parameter pack?",
        "reference": "https://stackoverflow.com/questions/50878343/how-to-expand-a-pattern-without-parameter-pack",
        "isAnswered": false,
        "created": 1529075483,
        "imageUrl": "https://www.gravatar.com/avatar/51e2815bc935af22ea0bd1a2324bc24e?s=128&d=identicon&r=PG&f=1",
        "userName": "xskxzr"
    },
    {
        "id": 50878339,
        "title": "declared flow types not working",
        "reference": "https://stackoverflow.com/questions/50878339/declared-flow-types-not-working",
        "isAnswered": false,
        "created": 1529075470,
        "imageUrl": "https://www.gravatar.com/avatar/36bbc437a85c7654d1841ad508c78acb?s=128&d=identicon&r=PG",
        "userName": "Abraham P"
    },
    {
        "id": 50878338,
        "title": "Splunk&#39;s Field Extraction Skipping PERFECT Matches",
        "reference": "https://stackoverflow.com/questions/50878338/splunks-field-extraction-skipping-perfect-matches",
        "isAnswered": false,
        "created": 1529075465,
        "imageUrl": "https://i.stack.imgur.com/uQBHl.jpg?s=128&g=1",
        "userName": "RainyAngel"
    },
    {
        "id": 50878337,
        "title": "Accessing a MySQL running on docker running on ubuntu server",
        "reference": "https://stackoverflow.com/questions/50878337/accessing-a-mysql-running-on-docker-running-on-ubuntu-server",
        "isAnswered": false,
        "created": 1529075461,
        "imageUrl": "https://www.gravatar.com/avatar/c4fc4269a35713af77553d02ebc69767?s=128&d=identicon&r=PG&f=1",
        "userName": "ZebraFishy"
    },
    {
        "id": 50878336,
        "title": "How do I use the FPDF Library in Angular 5.0",
        "reference": "https://stackoverflow.com/questions/50878336/how-do-i-use-the-fpdf-library-in-angular-5-0",
        "isAnswered": false,
        "created": 1529075459,
        "imageUrl": "https://graph.facebook.com/966875413323871/picture?type=large",
        "userName": "Brian Fleming"
    },
    {
        "id": 50878334,
        "title": "REACT.JS Managing state in a component vs react route (Link) best practices",
        "reference": "https://stackoverflow.com/questions/50878334/react-js-managing-state-in-a-component-vs-react-route-link-best-practices",
        "isAnswered": false,
        "created": 1529075453,
        "imageUrl": "https://www.gravatar.com/avatar/ebd3574f00cf666f9ed7a094df9a1e01?s=128&d=identicon&r=PG&f=1",
        "userName": "user8566336"
    },
    {
        "id": 50878333,
        "title": "AWS IoT +multiple environments (dev/qa/uat/prod)",
        "reference": "https://stackoverflow.com/questions/50878333/aws-iot-multiple-environments-dev-qa-uat-prod",
        "isAnswered": false,
        "created": 1529075451,
        "imageUrl": "https://www.gravatar.com/avatar/ca4a0230b9b4ece67adf4b5c115bee8f?s=128&d=identicon&r=PG&f=1",
        "userName": "Yao"
    },
    {
        "id": 50878332,
        "title": "Filter elasticsearch bucket aggregation based on term field",
        "reference": "https://stackoverflow.com/questions/50878332/filter-elasticsearch-bucket-aggregation-based-on-term-field",
        "isAnswered": false,
        "created": 1529075445,
        "imageUrl": "https://www.gravatar.com/avatar/3e60f6255ea29be320c13e1a0d579b0c?s=128&d=identicon&r=PG&f=1",
        "userName": "CrazyMuffin"
    },
    {
        "id": 50878329,
        "title": "Sybase - Stored Procedure executed within another with two outputs to be assigned to a variable",
        "reference": "https://stackoverflow.com/questions/50878329/sybase-stored-procedure-executed-within-another-with-two-outputs-to-be-assigne",
        "isAnswered": false,
        "created": 1529075432,
        "imageUrl": "https://lh5.googleusercontent.com/-3dbn3pmVZJo/AAAAAAAAAAI/AAAAAAAAAgY/VJcbygsWZrA/photo.jpg?sz=128",
        "userName": "Carlos Alberto Pedron"
    },
    {
        "id": 50878325,
        "title": "Haskell, Yesod and Keter - How can I run a routine periodically (every 5 minutes)?",
        "reference": "https://stackoverflow.com/questions/50878325/haskell-yesod-and-keter-how-can-i-run-a-routine-periodically-every-5-minutes",
        "isAnswered": false,
        "created": 1529075418,
        "imageUrl": "https://i.stack.imgur.com/cqx1a.jpg?s=128&g=1",
        "userName": "FtheBuilder"
    },
    {
        "id": 50878324,
        "title": "Can we delete a version from the catalog or copy an older version to make it the latest version?",
        "reference": "https://stackoverflow.com/questions/50878324/can-we-delete-a-version-from-the-catalog-or-copy-an-older-version-to-make-it-the",
        "isAnswered": false,
        "created": 1529075413,
        "imageUrl": "https://www.gravatar.com/avatar/8d68f87b325e16d352e285f0181ada64?s=128&d=identicon&r=PG",
        "userName": "Lakshmi Nookala"
    },
    {
        "id": 50878323,
        "title": "how to save NSAttributedString from NSTextView to restore into an UITextView?",
        "reference": "https://stackoverflow.com/questions/50878323/how-to-save-nsattributedstring-from-nstextview-to-restore-into-an-uitextview",
        "isAnswered": false,
        "created": 1529075408,
        "imageUrl": "https://www.gravatar.com/avatar/27a662c4bb1834530939efc17aa6c8e2?s=128&d=identicon&r=PG&f=1",
        "userName": "GT44"
    },
    {
        "id": 50878321,
        "title": "How do you interpret a SQL deadlock trace?",
        "reference": "https://stackoverflow.com/questions/50878321/how-do-you-interpret-a-sql-deadlock-trace",
        "isAnswered": false,
        "created": 1529075398,
        "imageUrl": "https://www.gravatar.com/avatar/7c99b0e0420642abfe945e8c32cdae7f?s=128&d=identicon&r=PG",
        "userName": "boilers222"
    },
    {
        "id": 50878318,
        "title": "Use service into custom element with angular 6",
        "reference": "https://stackoverflow.com/questions/50878318/use-service-into-custom-element-with-angular-6",
        "isAnswered": false,
        "created": 1529075394,
        "imageUrl": "https://lh3.googleusercontent.com/-C7i7Qpiymus/AAAAAAAAAAI/AAAAAAAAACI/SAxQGsjmRlc/photo.jpg?sz=128",
        "userName": "Tony Ster"
    },
    {
        "id": 50878317,
        "title": "How to scrape a react website (Rails app)",
        "reference": "https://stackoverflow.com/questions/50878317/how-to-scrape-a-react-website-rails-app",
        "isAnswered": false,
        "created": 1529075391,
        "imageUrl": "https://i.stack.imgur.com/IvjeP.jpg?s=128&g=1",
        "userName": "NicoBar"
    },
    {
        "id": 50878316,
        "title": "ASPNET MVC edit button action in StudentController",
        "reference": "https://stackoverflow.com/questions/50878316/aspnet-mvc-edit-button-action-in-studentcontroller",
        "isAnswered": false,
        "created": 1529075388,
        "imageUrl": "https://lh6.googleusercontent.com/-d7FGylLuavw/AAAAAAAAAAI/AAAAAAAAAn4/ct1DRhnI-Fc/photo.jpg?sz=128",
        "userName": "Petar Z"
    },
    {
        "id": 50878315,
        "title": "git repoint submodules to other commits",
        "reference": "https://stackoverflow.com/questions/50878315/git-repoint-submodules-to-other-commits",
        "isAnswered": false,
        "created": 1529075386,
        "imageUrl": "https://www.gravatar.com/avatar/ea8b1081900168f1e154ebca421f2e82?s=128&d=identicon&r=PG",
        "userName": "Adrian Rosoga"
    },
    {
        "id": 50878311,
        "title": "How to connect a local project to an existing git-repository on a remote server",
        "reference": "https://stackoverflow.com/questions/50878311/how-to-connect-a-local-project-to-an-existing-git-repository-on-a-remote-server",
        "isAnswered": false,
        "created": 1529075370,
        "imageUrl": "https://www.gravatar.com/avatar/38f6f6cf240af20225d8eb1d9ff10a12?s=128&d=identicon&r=PG",
        "userName": "Swissdude"
    },
    {
        "id": 50878309,
        "title": "macro for extracting data from attachment from mail",
        "reference": "https://stackoverflow.com/questions/50878309/macro-for-extracting-data-from-attachment-from-mail",
        "isAnswered": false,
        "created": 1529075363,
        "imageUrl": "https://www.gravatar.com/avatar/affb9b3d7f80da572fdd73ed320a7768?s=128&d=identicon&r=PG&f=1",
        "userName": "A Das"
    },
    {
        "id": 50878308,
        "title": "Python passing symbols in a query to mysqldb?",
        "reference": "https://stackoverflow.com/questions/50878308/python-passing-symbols-in-a-query-to-mysqldb",
        "isAnswered": false,
        "created": 1529075362,
        "imageUrl": "https://www.gravatar.com/avatar/33d8e863bce21999c55e5ffc18047905?s=128&d=identicon&r=PG&f=1",
        "userName": "A. Smith"
    },
    {
        "id": 50878307,
        "title": "Manipulating a pandas dataframe then saving the changes",
        "reference": "https://stackoverflow.com/questions/50878307/manipulating-a-pandas-dataframe-then-saving-the-changes",
        "isAnswered": false,
        "created": 1529075361,
        "imageUrl": "https://i.stack.imgur.com/YtQGE.jpg?s=128&g=1",
        "userName": "Michael Roberts"
    },
    {
        "id": 50878305,
        "title": "How to draw a view in an ItemDecoration?",
        "reference": "https://stackoverflow.com/questions/50878305/how-to-draw-a-view-in-an-itemdecoration",
        "isAnswered": false,
        "created": 1529075350,
        "imageUrl": "https://i.stack.imgur.com/eJYxe.jpg?s=128&g=1",
        "userName": "Sira Lam"
    },
    {
        "id": 50878304,
        "title": "React Native ref in Flatlist items. Returning for last item alone",
        "reference": "https://stackoverflow.com/questions/50878304/react-native-ref-in-flatlist-items-returning-for-last-item-alone",
        "isAnswered": false,
        "created": 1529075347,
        "imageUrl": "https://graph.facebook.com/1185744818167653/picture?type=large",
        "userName": "Isaac Oluwatemilorun"
    },
    {
        "id": 50878301,
        "title": "want to add some transtion effect",
        "reference": "https://stackoverflow.com/questions/50878301/want-to-add-some-transtion-effect",
        "isAnswered": false,
        "created": 1529075341,
        "imageUrl": "https://lh6.googleusercontent.com/-jJc7zDGGIrk/AAAAAAAAAAI/AAAAAAAAABU/2iWiov5Vnd8/photo.jpg?sz=128",
        "userName": "Mahesh Varvatkar"
    },
    {
        "id": 50878299,
        "title": "data.table column order when using lapply and get",
        "reference": "https://stackoverflow.com/questions/50878299/data-table-column-order-when-using-lapply-and-get",
        "isAnswered": false,
        "created": 1529075333,
        "imageUrl": "https://www.gravatar.com/avatar/04eb83aea8d4fc97f2764db3a70878e5?s=128&d=identicon&r=PG&f=1",
        "userName": "Steffen J."
    },
    {
        "id": 50878295,
        "title": "Display unique values for particular column",
        "reference": "https://stackoverflow.com/questions/50878295/display-unique-values-for-particular-column",
        "isAnswered": false,
        "created": 1529075324,
        "imageUrl": "https://www.gravatar.com/avatar/0c09ced15536f4890fa14d6a72c349cf?s=128&d=identicon&r=PG&f=1",
        "userName": "Madhu"
    },
    {
        "id": 50878294,
        "title": "Helps me find the undefined error",
        "reference": "https://stackoverflow.com/questions/50878294/helps-me-find-the-undefined-error",
        "isAnswered": false,
        "created": 1529075323,
        "imageUrl": "https://graph.facebook.com/1950259285237882/picture?type=large",
        "userName": "Guilherme Alves Vieira"
    },
    {
        "id": 50878292,
        "title": "Maven ArrayOutOfBoundException",
        "reference": "https://stackoverflow.com/questions/50878292/maven-arrayoutofboundexception",
        "isAnswered": false,
        "created": 1529075320,
        "imageUrl": "https://i.stack.imgur.com/4HdDS.jpg?s=128&g=1",
        "userName": "ashish"
    },
    {
        "id": 50878291,
        "title": "Redirect HTTP to HTTPS on localhost",
        "reference": "https://stackoverflow.com/questions/50878291/redirect-http-to-https-on-localhost",
        "isAnswered": false,
        "created": 1529075318,
        "imageUrl": "https://www.gravatar.com/avatar/283c00f58b693658f9c3ab78ec5646a5?s=128&d=identicon&r=PG",
        "userName": "Moe Pad"
    },
    {
        "id": 50878289,
        "title": "How to obtain the max value with group_by and summarise in R",
        "reference": "https://stackoverflow.com/questions/50878289/how-to-obtain-the-max-value-with-group-by-and-summarise-in-r",
        "isAnswered": false,
        "created": 1529075312,
        "imageUrl": "https://www.gravatar.com/avatar/1e50bf6787d04823007096f2895dc9c0?s=128&d=identicon&r=PG",
        "userName": "Dennis Aguilar"
    },
    {
        "id": 50878288,
        "title": "Python, the result of range function is confused",
        "reference": "https://stackoverflow.com/questions/50878288/python-the-result-of-range-function-is-confused",
        "isAnswered": false,
        "created": 1529075303,
        "imageUrl": "https://www.gravatar.com/avatar/8ba135b2f9ddfbf8c5f76a592eb55e64?s=128&d=identicon&r=PG&f=1",
        "userName": "user9947246"
    },
    {
        "id": 50878287,
        "title": "TabLayout in NestedRecyclerView (RendererRecyclerViewAdapter)",
        "reference": "https://stackoverflow.com/questions/50878287/tablayout-in-nestedrecyclerview-rendererrecyclerviewadapter",
        "isAnswered": false,
        "created": 1529075297,
        "imageUrl": "https://lh4.googleusercontent.com/-sim1TXCRpdY/AAAAAAAAAAI/AAAAAAAAABM/hFmXBQJ8B0w/photo.jpg?sz=128",
        "userName": "Антон Шадрин"
    },
    {
        "id": 50878283,
        "title": "Liquid Mapping/Xsd Schemas for CData",
        "reference": "https://stackoverflow.com/questions/50878283/liquid-mapping-xsd-schemas-for-cdata",
        "isAnswered": false,
        "created": 1529075269,
        "imageUrl": "https://www.gravatar.com/avatar/3310e61a0d5f1fdc7e19246f9efb455f?s=128&d=identicon&r=PG&f=1",
        "userName": "Jordan Taulton"
    },
    {
        "id": 50878282,
        "title": "Version 4 of Azure App Service Deploy with Angular 5 - *.deploy.cmd not found",
        "reference": "https://stackoverflow.com/questions/50878282/version-4-of-azure-app-service-deploy-with-angular-5-deploy-cmd-not-found",
        "isAnswered": false,
        "created": 1529075264,
        "imageUrl": "https://www.gravatar.com/avatar/cf7725958a43181e6b2b4c0f5f02b91b?s=128&d=identicon&r=PG&f=1",
        "userName": "Kapol"
    },
    {
        "id": 50878281,
        "title": "VBA loop to change cell value (pos/neg) and font color based on adjacent cell",
        "reference": "https://stackoverflow.com/questions/50878281/vba-loop-to-change-cell-value-pos-neg-and-font-color-based-on-adjacent-cell",
        "isAnswered": false,
        "created": 1529075261,
        "imageUrl": "https://lh5.googleusercontent.com/-3A0rW4MWRg8/AAAAAAAAAAI/AAAAAAAAAAA/AB6qoq2hihERBCMOLqOPzxSW-dyG18MKLA/mo/photo.jpg?sz=128",
        "userName": "RebaS"
    },
    {
        "id": 50878280,
        "title": "Using Sendmail from an external server",
        "reference": "https://stackoverflow.com/questions/50878280/using-sendmail-from-an-external-server",
        "isAnswered": false,
        "created": 1529075261,
        "imageUrl": "https://www.gravatar.com/avatar/85bfd271749bd0ba3d9b18d2437bc283?s=128&d=identicon&r=PG",
        "userName": "lcjury"
    },
    {
        "id": 50878279,
        "title": "Jenkins git changelog plugin custom context",
        "reference": "https://stackoverflow.com/questions/50878279/jenkins-git-changelog-plugin-custom-context",
        "isAnswered": false,
        "created": 1529075259,
        "imageUrl": "https://www.gravatar.com/avatar/15b0b7b4e07230784f5530f655c769b5?s=128&d=identicon&r=PG&f=1",
        "userName": "PowerLove"
    },
    {
        "id": 50878276,
        "title": "Random gradient background color",
        "reference": "https://stackoverflow.com/questions/50878276/random-gradient-background-color",
        "isAnswered": false,
        "created": 1529075255,
        "imageUrl": "https://www.gravatar.com/avatar/d175e4e1f5ddcea181e8d9ceff70129c?s=128&d=identicon&r=PG&f=1",
        "userName": "chals"
    },
    {
        "id": 50878273,
        "title": "printf with with 2 decimals",
        "reference": "https://stackoverflow.com/questions/50878273/printf-with-with-2-decimals",
        "isAnswered": true,
        "created": 1529075238,
        "imageUrl": "https://lh3.googleusercontent.com/-GePLkf9DpRw/AAAAAAAAAAI/AAAAAAAAAC0/V9FhCi45q6A/photo.jpg?sz=128",
        "userName": "David Hatfield"
    },
    {
        "id": 50878272,
        "title": "Is there a way to log that an error has occurred because of session timeout",
        "reference": "https://stackoverflow.com/questions/50878272/is-there-a-way-to-log-that-an-error-has-occurred-because-of-session-timeout",
        "isAnswered": false,
        "created": 1529075235,
        "imageUrl": "https://www.gravatar.com/avatar/4748ba19e3f04144cd0c0a589a6fd554?s=128&d=identicon&r=PG",
        "userName": "Tod"
    },
    {
        "id": 50878270,
        "title": "Unable to &quot;captureVisibleTab&quot; on a chrome-created tab, even though all permissions are set properly",
        "reference": "https://stackoverflow.com/questions/50878270/unable-to-capturevisibletab-on-a-chrome-created-tab-even-though-all-permissio",
        "isAnswered": false,
        "created": 1529075234,
        "imageUrl": "https://www.gravatar.com/avatar/fd7ff5f5747bf99f78317d3e9bb97d57?s=128&d=identicon&r=PG&f=1",
        "userName": "greatbearshark"
    },
    {
        "id": 50878267,
        "title": "How to run an FTP server locally that a docker container can connect to",
        "reference": "https://stackoverflow.com/questions/50878267/how-to-run-an-ftp-server-locally-that-a-docker-container-can-connect-to",
        "isAnswered": false,
        "created": 1529075220,
        "imageUrl": "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=128",
        "userName": "Tom"
    },
    {
        "id": 50878263,
        "title": "Hibernate calls save even after exception thrown",
        "reference": "https://stackoverflow.com/questions/50878263/hibernate-calls-save-even-after-exception-thrown",
        "isAnswered": false,
        "created": 1529075203,
        "imageUrl": "https://www.gravatar.com/avatar/2d0aa2d56a5c97a9f5863ad06f101140?s=128&d=identicon&r=PG&f=1",
        "userName": "question_tech"
    },
    {
        "id": 50878260,
        "title": "How should I handle data that only needs to be updated periodically in react-native-firebase?",
        "reference": "https://stackoverflow.com/questions/50878260/how-should-i-handle-data-that-only-needs-to-be-updated-periodically-in-react-nat",
        "isAnswered": false,
        "created": 1529075198,
        "imageUrl": "https://lh4.googleusercontent.com/-c9n3l28L76s/AAAAAAAAAAI/AAAAAAAAGgc/Q7vLbtth7vc/photo.jpg?sz=128",
        "userName": "Noah Allen"
    },
    {
        "id": 50878259,
        "title": "How to use same JS function on multiple rows of inputs",
        "reference": "https://stackoverflow.com/questions/50878259/how-to-use-same-js-function-on-multiple-rows-of-inputs",
        "isAnswered": false,
        "created": 1529075192,
        "imageUrl": "https://www.gravatar.com/avatar/f2a6a2df7fdaab1f7e804df25c45efed?s=128&d=identicon&r=PG&f=1",
        "userName": "D.Cliffe"
    },
    {
        "id": 50878258,
        "title": "Java for loop to count up output",
        "reference": "https://stackoverflow.com/questions/50878258/java-for-loop-to-count-up-output",
        "isAnswered": false,
        "created": 1529075191,
        "imageUrl": "https://lh6.googleusercontent.com/-5qJ1O60dDqU/AAAAAAAAAAI/AAAAAAAAAA0/7Vn3YyUBPYY/photo.jpg?sz=128",
        "userName": "Quenten Guiles"
    },
    {
        "id": 50878257,
        "title": "Always Produces Same Thing — Python 3",
        "reference": "https://stackoverflow.com/questions/50878257/always-produces-same-thing-python-3",
        "isAnswered": false,
        "created": 1529075187,
        "imageUrl": "https://www.gravatar.com/avatar/80902a04a1e19a530d247eb39c855c4f?s=128&d=identicon&r=PG&f=1",
        "userName": "Anonymous"
    },
    {
        "id": 50878255,
        "title": "update recaptcha from v1 to v2 api urls",
        "reference": "https://stackoverflow.com/questions/50878255/update-recaptcha-from-v1-to-v2-api-urls",
        "isAnswered": false,
        "created": 1529075181,
        "imageUrl": "https://www.gravatar.com/avatar/90a4beb006d1cd7e64b7a23fbda47999?s=128&d=identicon&r=PG",
        "userName": "JustMarshal"
    },
    {
        "id": 50878254,
        "title": "How do I position widgets inside a card contained in a row?",
        "reference": "https://stackoverflow.com/questions/50878254/how-do-i-position-widgets-inside-a-card-contained-in-a-row",
        "isAnswered": false,
        "created": 1529075169,
        "imageUrl": "https://www.gravatar.com/avatar/5ddf779a69d1a079b3da94d6b4f2686b?s=128&d=identicon&r=PG&f=1",
        "userName": "Chris"
    },
    {
        "id": 50878253,
        "title": "How to filter the inbound packet by libpcap in C",
        "reference": "https://stackoverflow.com/questions/50878253/how-to-filter-the-inbound-packet-by-libpcap-in-c",
        "isAnswered": false,
        "created": 1529075168,
        "imageUrl": "https://www.gravatar.com/avatar/24f411d53a5ec93402771660ede01ef2?s=128&d=identicon&r=PG&f=1",
        "userName": "Ted"
    },
    {
        "id": 50878251,
        "title": "gcc vs. LLVM (Clang) keep function name when compiling?",
        "reference": "https://stackoverflow.com/questions/50878251/gcc-vs-llvm-clang-keep-function-name-when-compiling",
        "isAnswered": false,
        "created": 1529075155,
        "imageUrl": "https://i.stack.imgur.com/USFyE.png?s=128&g=1",
        "userName": "CrazyMageQi"
    },
    {
        "id": 50878250,
        "title": "setting up bash_profile, profile and bashrc",
        "reference": "https://stackoverflow.com/questions/50878250/setting-up-bash-profile-profile-and-bashrc",
        "isAnswered": false,
        "created": 1529075150,
        "imageUrl": "https://lh3.googleusercontent.com/-8XkEj3ZzbR8/AAAAAAAAAAI/AAAAAAAAAcs/hcyJcqU_Feo/photo.jpg?sz=128",
        "userName": "Enan Ajmain"
    },
    {
        "id": 50878249,
        "title": "Add numpy array to another numpy array but both separate",
        "reference": "https://stackoverflow.com/questions/50878249/add-numpy-array-to-another-numpy-array-but-both-separate",
        "isAnswered": false,
        "created": 1529075143,
        "imageUrl": "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=128",
        "userName": "Adam Bella&#239;che"
    },
    {
        "id": 50878246,
        "title": "Poor occurrences highlight in Eclipse Oxygen javascript editor",
        "reference": "https://stackoverflow.com/questions/50878246/poor-occurrences-highlight-in-eclipse-oxygen-javascript-editor",
        "isAnswered": false,
        "created": 1529075137,
        "imageUrl": "https://www.gravatar.com/avatar/bddb9fc991406eed1a69b36beb587e51?s=128&d=identicon&r=PG&f=1",
        "userName": "Svoyski"
    },
    {
        "id": 50878245,
        "title": "Django Migrations does not apply changes in models",
        "reference": "https://stackoverflow.com/questions/50878245/django-migrations-does-not-apply-changes-in-models",
        "isAnswered": false,
        "created": 1529075135,
        "imageUrl": "https://www.gravatar.com/avatar/3b90b527bdb1a2a458abe9164e257526?s=128&d=identicon&r=PG&f=1",
        "userName": "EMT"
    },
    {
        "id": 50878243,
        "title": "Excel VBA export multiple ranges to text file",
        "reference": "https://stackoverflow.com/questions/50878243/excel-vba-export-multiple-ranges-to-text-file",
        "isAnswered": false,
        "created": 1529075130,
        "imageUrl": "https://lh3.googleusercontent.com/-2_FHQk-r_Ik/AAAAAAAAAAI/AAAAAAAAAEY/y3yB_pP5Z0k/photo.jpg?sz=128",
        "userName": "Caleb Binder"
    },
    {
        "id": 50878244,
        "title": "Passing methods in another script as the argument of the function in another file",
        "reference": "https://stackoverflow.com/questions/50878244/passing-methods-in-another-script-as-the-argument-of-the-function-in-another-fil",
        "isAnswered": false,
        "created": 1529075130,
        "imageUrl": "https://lh5.googleusercontent.com/-Z1PRENLSupY/AAAAAAAAAAI/AAAAAAAAANc/DGe9L7Fu6YA/photo.jpg?sz=128",
        "userName": "Madalitso Phiri"
    },
    {
        "id": 50878241,
        "title": "How to remove AngularJS code completion/suggestion from VS Code?",
        "reference": "https://stackoverflow.com/questions/50878241/how-to-remove-angularjs-code-completion-suggestion-from-vs-code",
        "isAnswered": false,
        "created": 1529075129,
        "imageUrl": "https://i.stack.imgur.com/fk3ro.jpg?s=128&g=1",
        "userName": "L. Heider"
    },
    {
        "id": 50878240,
        "title": "Making webdriverio to run test cases for multiple similar pages?",
        "reference": "https://stackoverflow.com/questions/50878240/making-webdriverio-to-run-test-cases-for-multiple-similar-pages",
        "isAnswered": false,
        "created": 1529075116,
        "imageUrl": "https://graph.facebook.com/10203959138297090/picture?type=large",
        "userName": "Siddharth Sonone"
    },
    {
        "id": 50878235,
        "title": "Is there a way to get the Current RPC User logged in?",
        "reference": "https://stackoverflow.com/questions/50878235/is-there-a-way-to-get-the-current-rpc-user-logged-in",
        "isAnswered": false,
        "created": 1529075105,
        "imageUrl": "https://www.gravatar.com/avatar/2544b47824df3f6de9fedb13cb8c109e?s=128&d=identicon&r=PG&f=1",
        "userName": "Kid101"
    },
    {
        "id": 50878234,
        "title": "custom declaration for nested import with typescript",
        "reference": "https://stackoverflow.com/questions/50878234/custom-declaration-for-nested-import-with-typescript",
        "isAnswered": false,
        "created": 1529075097,
        "imageUrl": "https://www.gravatar.com/avatar/5b9872f3076db04cb2ffb516091d80d0?s=128&d=identicon&r=PG",
        "userName": "dagda1"
    },
    {
        "id": 50878231,
        "title": "DBUnit insists on inserting null for unspecified values, but I want the DB default value to be used",
        "reference": "https://stackoverflow.com/questions/50878231/dbunit-insists-on-inserting-null-for-unspecified-values-but-i-want-the-db-defau",
        "isAnswered": false,
        "created": 1529075086,
        "imageUrl": "https://www.gravatar.com/avatar/6d209514ae8c6fd48289f0afa5d508ed?s=128&d=identicon&r=PG",
        "userName": "MTR"
    },
    {
        "id": 50878230,
        "title": "How to initialize functions/declarations with loops in RShiny",
        "reference": "https://stackoverflow.com/questions/50878230/how-to-initialize-functions-declarations-with-loops-in-rshiny",
        "isAnswered": false,
        "created": 1529075083,
        "imageUrl": "https://www.gravatar.com/avatar/3bc0b184071d82431c7cce807e508636?s=128&d=identicon&r=PG",
        "userName": "user6214"
    },
    {
        "id": 50878229,
        "title": "SSRS report Tables and Sub Reports",
        "reference": "https://stackoverflow.com/questions/50878229/ssrs-report-tables-and-sub-reports",
        "isAnswered": false,
        "created": 1529075073,
        "imageUrl": "https://www.gravatar.com/avatar/a8e32e28c2361f6bf5465e39c0a68987?s=128&d=identicon&r=PG",
        "userName": "missscripty"
    },
    {
        "id": 50878226,
        "title": "How to ignore/supress a specific type of exception (ActiveRecord::ReadOnlyRecord) across my code base",
        "reference": "https://stackoverflow.com/questions/50878226/how-to-ignore-supress-a-specific-type-of-exception-activerecordreadonlyrecord",
        "isAnswered": false,
        "created": 1529075062,
        "imageUrl": "https://www.gravatar.com/avatar/2e07fdac9a5b0de8a17a0e5b6a77acef?s=128&d=identicon&r=PG",
        "userName": "amit_saxena"
    },
    {
        "id": 50878224,
        "title": "What is imported with spark.implicits._?",
        "reference": "https://stackoverflow.com/questions/50878224/what-is-imported-with-spark-implicits",
        "isAnswered": false,
        "created": 1529075058,
        "imageUrl": "https://i.stack.imgur.com/Qidg6.jpg?s=128&g=1",
        "userName": "Joe"
    },
    {
        "id": 50878221,
        "title": "Select the date of a UserIDs first/most recent purchase",
        "reference": "https://stackoverflow.com/questions/50878221/select-the-date-of-a-userids-first-most-recent-purchase",
        "isAnswered": false,
        "created": 1529075053,
        "imageUrl": "https://i.stack.imgur.com/AK9sU.png?s=128&g=1",
        "userName": "Ben P"
    },
    {
        "id": 50878220,
        "title": "Laravel query builder serialization",
        "reference": "https://stackoverflow.com/questions/50878220/laravel-query-builder-serialization",
        "isAnswered": false,
        "created": 1529075052,
        "imageUrl": "https://i.stack.imgur.com/3Vlht.jpg?s=128&g=1",
        "userName": "Lakmal Premaratne"
    }
];

const THEME = {
    bg: {
        primary: "#5c73c3",
        secondary: "#FFFFFF",
        answeredQuestion: "#FFFFFF",
        unansweredQuestion: "#fbfbfb"
    },
    text: {
        primary: "#FFFFFF",
        inversePrimary: "#1F1F1F",
        secondary: "#6F6F6F"
    }
}

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={THEME}>
                <PageWrapper title="#Searchstack">
                    <List>
                        {JSON.map((question) => {
                            const date = new Date(question.created * 1000);
                            return (<Item id={question.id} key={question.id}>
                                <Question
                                    title={question.title}
                                    user={question.userName}
                                    avatar={question.imageUrl}
                                    isAnswered={question.isAnswered}
                                    reference={question.reference}
                                    date={dateFormat(date, "dd.mm.yyyy")}
                                />
                            </Item>)
                        })}
                    </List>
                </PageWrapper>
            </ThemeProvider>
        );
    }
}

export default App;

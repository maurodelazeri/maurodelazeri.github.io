(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{120:function(e,n,t){"use strict";t.d(n,"a",function(){return d}),t.d(n,"b",function(){return p});var a=t(0),r=t.n(a),o=r.a.createContext({}),i=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},d=function(e){var n=i(e.components);return r.a.createElement(o.Provider,{value:n},e.children)};var s="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},c=function(e){var n=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,d=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),s=i(n),c=t,p=s[o+"."+c]||s[c]||l[c]||a;return n?r.a.createElement(p,Object.assign({},d,{components:n})):r.a.createElement(p,d)};function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[s]="string"==typeof e?e:a,i[1]=d;for(var p=2;p<o;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},59:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return i}),t.d(n,"rightToc",function(){return d}),t.d(n,"default",function(){return c});t(0);var a=t(120);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i={id:"enumerators",title:"Enumerators",hide_title:!0,sidebar_label:"Enumerators"},d=[{value:"Enumerators",id:"enumerators",children:[]},{value:"Orders Enumerators",id:"orders-enumerators",children:[{value:"ENUM_ORDER_TYPE",id:"enum_order_type",children:[]},{value:"ENUM_ORDER_STATE",id:"enum_order_state",children:[]},{value:"ENUM_ORDER_TYPE_FILLING",id:"enum_order_type_filling",children:[]},{value:"ENUM_ORDER_TYPE_TIME",id:"enum_order_type_time",children:[]},{value:"ENUM_ORDER_REASON",id:"enum_order_reason",children:[]}]},{value:"Position Properties",id:"position-properties",children:[{value:"ENUM_POSITION_TYPE",id:"enum_position_type",children:[]},{value:"ENUM_POSITION_REASON",id:"enum_position_reason",children:[]}]},{value:"Deal Properties",id:"deal-properties",children:[{value:"ENUM_DEAL_TYPE",id:"enum_deal_type",children:[]},{value:"ENUM_DEAL_ENTRY",id:"enum_deal_entry",children:[]},{value:"ENUM_DEAL_REASON",id:"enum_deal_reason",children:[]}]},{value:"Trade Operation Types",id:"trade-operation-types",children:[{value:"ENUM_TRADE_REQUEST_ACTIONS",id:"enum_trade_request_actions",children:[]}]},{value:"Trade Transaction Types",id:"trade-transaction-types",children:[{value:"ENUM_TRADE_TRANSACTION_TYPE",id:"enum_trade_transaction_type",children:[]}]}],s={rightToc:d},l="wrapper";function c(e){var n=e.components,t=o(e,["components"]);return Object(a.b)(l,r({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"enumerators"},"Enumerators"),Object(a.b)("h2",{id:"orders-enumerators"},Object(a.b)("inlineCode",{parentName:"h2"},"Orders Enumerators")),Object(a.b)("h3",{id:"enum_order_type"},"ENUM_ORDER_TYPE"),Object(a.b)("p",null,"When using a trade request function, some operations require the indication of the order type. The order type is specified in the type field of the structures and can accept values of the ",Object(a.b)("inlineCode",{parentName:"p"},"ENUM_ORDER_TYPE")," enumeration."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-protobuf"}),"enum ENUM_ORDER_TYPE {\n    ORDER_TYPE_BUY                                       = 0; // Market Buy order\n    ORDER_TYPE_SELL                                      = 1; // Market Sell order\n    ORDER_TYPE_BUY_LIMIT                                 = 2; // Buy Limit pending order\n    ORDER_TYPE_SELL_LIMIT                                = 3; // Sell Limit pending order\n    ORDER_TYPE_BUY_STOP                                  = 4; // Buy Stop pending order\n    ORDER_TYPE_SELL_STOP                                 = 5; // Sell Stop pending order\n    ORDER_TYPE_BUY_STOP_LIMIT                            = 6; // Upon reaching the order price, a pending Buy Limit order is placed at the StopLimit price\n    ORDER_TYPE_SELL_STOP_LIMIT                           = 7; // Upon reaching the order price, a pending Sell Limit order is placed at the StopLimit price\n    ORDER_TYPE_CLOSE_BY                                  = 8; // Order to close a position by an opposite one\n}\n")),Object(a.b)("h3",{id:"enum_order_state"},"ENUM_ORDER_STATE"),Object(a.b)("p",null,"Each order has a status that describes its state."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-protobuf"}),"enum ENUM_ORDER_STATE {\n    ORDER_STATE_STARTED                                   = 0; // Order checked, but not yet accepted by broker\n    ORDER_STATE_PLACED                                    = 1; // Order accepted\n    ORDER_STATE_CANCELED                                  = 2; // Order canceled by client\n    ORDER_STATE_PARTIAL                                   = 3; // Order partially executed\n    ORDER_STATE_FILLED                                    = 4; // Order fully executed\n    ORDER_STATE_REJECTED                                  = 5; // Order rejected\n    ORDER_STATE_EXPIRED                                   = 6; // Order expired\n    ORDER_STATE_REQUEST_ADD                               = 7; // Order is being registered (placing to the trading system)\n    ORDER_STATE_REQUEST_MODIFY                            = 8; // Order is being modified (changing its parameters)\n    ORDER_STATE_REQUEST_CANCEL                            = 9; // Order is being deleted (deleting from the trading system)\n}\n")),Object(a.b)("h3",{id:"enum_order_type_filling"},"ENUM_ORDER_TYPE_FILLING"),Object(a.b)("p",null,"When using a trade request function, the filling policy can be set for an order in the type_filling field of the structure. Values of the ",Object(a.b)("inlineCode",{parentName:"p"},"ENUM_ORDER_TYPE_FILLING")," enumeration are allowed."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-protobuf"}),"enum ENUM_ORDER_TYPE_FILLING {\n    ORDER_FILLING_FOK                                    = 0; // This filling policy means that an order can be filled only in the specified amount. If the necessary amount of a financial instrument is currently unavailable in the market, the order will not be executed. The required volume can be filled using several offers available on the market at the moment.\n    ORDER_FILLING_IOC                                    = 1; // This mode means that a trader agrees to execute a deal with the volume maximally available in the market within that indicated in the order. In case the the entire volume of an order cannot be filled, the available volume of it will be filled, and the remaining volume will be canceled.\n    ORDER_FILLING_RETURN                                 = 2; // This policy is used only for market orders (ORDER_TYPE_BUY and ORDER_TYPE_SELL), limit and stop limit orders (ORDER_TYPE_BUY_LIMIT, ORDER_TYPE_SELL_LIMIT, ORDER_TYPE_BUY_STOP_LIMIT and ORDER_TYPE_SELL_STOP_LIMIT ) and only for the symbols with Market or Exchange execution. In case of partial filling a market or limit order with remaining volume is not canceled but processed further. For the activation of the ORDER_TYPE_BUY_STOP_LIMIT and ORDER_TYPE_SELL_STOP_LIMIT orders, a corresponding limit order ORDER_TYPE_BUY_LIMIT/ORDER_TYPE_SELL_LIMIT with the ORDER_FILLING_RETURN execution type is created.\n}\n")),Object(a.b)("h3",{id:"enum_order_type_time"},"ENUM_ORDER_TYPE_TIME"),Object(a.b)("p",null,"The order validity period can be set in the type_time field of the structure, when sending a trade request function. Values of the ",Object(a.b)("inlineCode",{parentName:"p"},"ENUM_ORDER_TYPE_TIME")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-protobuf"}),"enum ENUM_ORDER_TYPE_TIME {\n    ORDER_TIME_GTC                                       = 0; // Good till cancel order\n    ORDER_TIME_DAY                                       = 1; // Good till current trade day order\n    ORDER_TIME_SPECIFIED                                 = 2; // Good till expired order\n    ORDER_TIME_SPECIFIED_DAY                             = 3; // The order will be effective till 23:59:59 of the specified day. If this time is outside a trading session, the order expires in the nearest trading time.\n}\n")),Object(a.b)("h3",{id:"enum_order_reason"},"ENUM_ORDER_REASON"),Object(a.b)("p",null,"The reason for order placing is contained in the ",Object(a.b)("inlineCode",{parentName:"p"},"ORDER_REASON")," property."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-protobuf"}),"enum ENUM_ORDER_REASON {\n    ORDER_REASON_CLIENT                                   = 0; // The order was placed from a client\n    ORDER_REASON_MOBILE                                   = 1; // The order was placed from a mobile application\n    ORDER_REASON_WEB                                      = 2; // The order was placed from a web platform\n    ORDER_REASON_SL                                       = 3; // The order was placed as a result of Stop Loss activation\n    ORDER_REASON_TP                                       = 4; // The order was placed as a result of Take Profit activation\n    ORDER_REASON_SO                                       = 5; // The order was placed as a result of the Stop Out event\n}\n")),Object(a.b)("h2",{id:"position-properties"},Object(a.b)("inlineCode",{parentName:"h2"},"Position Properties")),Object(a.b)("h3",{id:"enum_position_type"},"ENUM_POSITION_TYPE"),Object(a.b)("p",null,"Direction of an open position (buy or sell) is defined by the value from the ",Object(a.b)("inlineCode",{parentName:"p"},"ENUM_POSITION_TYPE")," enumeration."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-protobuf"}),"enum ENUM_POSITION_TYPE {\n    POSITION_TYPE_BUY                                       = 0; // Buy\n    POSITION_TYPE_SELL                                      = 1; // Sell\n}\n")),Object(a.b)("h3",{id:"enum_position_reason"},"ENUM_POSITION_REASON"),Object(a.b)("p",null,"The reason for opening a position is contained in the ",Object(a.b)("inlineCode",{parentName:"p"},"POSITION_REASON")," property. A position can be opened as a result of activation of an order placed from a client, a mobile application, etc. Possible values of ",Object(a.b)("inlineCode",{parentName:"p"},"POSITION_REASON")," are described in the ",Object(a.b)("inlineCode",{parentName:"p"},"ENUM_POSITION_REASON")," enumeration."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-protobuf"}),"enum ENUM_POSITION_REASON {\n    POSITION_REASON_CLIENT                                   = 0; // The position was opened as a result of activation of an order placed from a client\n    POSITION_REASON_MOBILE                                   = 1; // The position was opened as a result of activation of an order placed from a mobile application\n    POSITION_REASON_WEB                                      = 2; // The position was opened as a result of activation of an order placed from the web platform\n}\n")),Object(a.b)("h2",{id:"deal-properties"},Object(a.b)("inlineCode",{parentName:"h2"},"Deal Properties")),Object(a.b)("h3",{id:"enum_deal_type"},"ENUM_DEAL_TYPE"),Object(a.b)("p",null,"Each deal is characterized by a type, allowed values are enumerated in ",Object(a.b)("inlineCode",{parentName:"p"},"ENUM_DEAL_TYPE"),"."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-protobuf"}),"enum ENUM_DEAL_TYPE {\n    DEAL_TYPE_BUY                                         = 0; // Buy\n    DEAL_TYPE_SELL                                        = 1; // Sell\n    DEAL_TYPE_BALANCE                                     = 2; // Balance\n    DEAL_TYPE_CREDIT                                      = 3; // Credit\n    DEAL_TYPE_CHARGE                                      = 4; // Additional charge\n    DEAL_TYPE_CORRECTION                                  = 5; // Correction\n    DEAL_TYPE_BONUS                                       = 6; // Bonus\n    DEAL_TYPE_COMMISSION                                  = 7; // Additional commission\n    DEAL_TYPE_COMMISSION_DAILY                            = 8; // Daily commission\n    DEAL_TYPE_COMMISSION_MONTHLY                          = 9; // Monthly commission\n    DEAL_TYPE_COMMISSION_AGENT_DAILY                      = 10; // Daily agent commission\n    DEAL_TYPE_COMMISSION_AGENT_MONTHLY                    = 11; // Monthly agent commission\n    DEAL_TYPE_INTEREST                                    = 12; // Interest rate\n    DEAL_TYPE_BUY_CANCELED                                = 13; // Canceled buy deal. There can be a situation when a previously executed buy deal is canceled. In this case, the type of the previously executed deal (DEAL_TYPE_BUY) is changed to DEAL_TYPE_BUY_CANCELED, and its profit/loss is zeroized. Previously obtained profit/loss is charged/withdrawn using a separated balance operation\n    DEAL_TYPE_SELL_CANCELED                               = 14; // Canceled sell deal. There can be a situation when a previously executed sell deal is canceled. In this case, the type of the previously executed deal (DEAL_TYPE_SELL) is changed to DEAL_TYPE_SELL_CANCELED, and its profit/loss is zeroized. Previously obtained profit/loss is charged/withdrawn using a separated balance operation\n    DEAL_DIVIDEND                                         = 15; // Dividend operations\n    DEAL_DIVIDEND_FRANKED                                 = 16; // Franked (non-taxable) dividend operations\n    DEAL_TAX                                              = 17; // Tax charges\n}\n")),Object(a.b)("h3",{id:"enum_deal_entry"},"ENUM_DEAL_ENTRY"),Object(a.b)("p",null,"Deals differ not only in their types set in ",Object(a.b)("inlineCode",{parentName:"p"},"ENUM_DEAL_TYPE"),", but also in the way they change positions. This can be a simple position opening, or accumulation of a previously opened position (market entering), position closing by an opposite deal of a corresponding volume (market exiting), or position reversing, if the opposite-direction deal covers the volume of the previously opened position."),Object(a.b)("p",null,"All these situations are described by values from the ",Object(a.b)("inlineCode",{parentName:"p"},"ENUM_DEAL_ENTRY")," enumeration."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-protobuf"}),"enum ENUM_DEAL_ENTRY {\n    DEAL_ENTRY_IN                                         = 0; // Entry in\n    DEAL_ENTRY_OUT                                        = 1; // Entry out\n    DEAL_ENTRY_INOUT                                      = 2; // Reverse\n    DEAL_ENTRY_OUT_BY                                     = 3; // Close a position by an opposite one\n}\n")),Object(a.b)("h3",{id:"enum_deal_reason"},"ENUM_DEAL_REASON"),Object(a.b)("p",null,"The reason for deal execution is contained in the ",Object(a.b)("inlineCode",{parentName:"p"},"DEAL_REASON")," property. A deal can be executed as a result of triggering of an order placed from a mobile application or an client program, as well as as a result of the ",Object(a.b)("inlineCode",{parentName:"p"},"StopOut")," event, variation margin calculation, etc. Possible values of ",Object(a.b)("inlineCode",{parentName:"p"},"DEAL_REASON")," are described in the ",Object(a.b)("inlineCode",{parentName:"p"},"ENUM_DEAL_REASON")," enumeration."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-protobuf"}),"enum ENUM_DEAL_REASON {\n    DEAL_REASON_CLIENT                                     = 0; // The deal was executed as a result of activation of an order placed from a client\n    DEAL_REASON_MOBILE                                     = 1; // The deal was executed as a result of activation of an order placed from a mobile application\n    DEAL_REASON_WEB                                        = 2; // The deal was executed as a result of activation of an order placed from the web platform\n    DEAL_REASON_SL                                         = 3; // The deal was executed as a result of Stop Loss activation\n    DEAL_REASON_TP                                         = 4; // The deal was executed as a result of Take Profit activation\n    DEAL_REASON_SO                                         = 5; // The deal was executed as a result of the Stop Out event\n    DEAL_REASON_ROLLOVER                                   = 6; // The deal was executed due to a rollover\n    DEAL_REASON_VMARGIN                                    = 7; // The deal was executed after charging the variation margin\n    DEAL_REASON_SPLIT                                      = 8; // The deal was executed after the split (price reduction) of an instrument, which had an open position during split announcement\n}\n")),Object(a.b)("h2",{id:"trade-operation-types"},Object(a.b)("inlineCode",{parentName:"h2"},"Trade Operation Types")),Object(a.b)("h3",{id:"enum_trade_request_actions"},"ENUM_TRADE_REQUEST_ACTIONS"),Object(a.b)("p",null,"Trading is done by sending orders to open positions using the ",Object(a.b)("inlineCode",{parentName:"p"},"OrderSend()")," function, as well as to place, modify or delete pending orders. Each trade order refers to the type of the requested operation. Trading operations are described in the ",Object(a.b)("inlineCode",{parentName:"p"},"ENUM_TRADE_REQUEST_ACTIONS")," enumeration."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-protobuf"}),"enum ENUM_TRADE_REQUEST_ACTIONS {\n    TRADE_ACTION_DEAL                                    = 0; // Place a trade order for an immediate execution with the specified parameters (market order)\n    TRADE_ACTION_PENDING                                 = 1; // Place a trade order for the execution under specified conditions (pending order)\n    TRADE_ACTION_SLTP                                    = 2; // Modify Stop Loss and Take Profit values of an opened position\n    TRADE_ACTION_MODIFY                                  = 3; // Modify the parameters of the order placed previously\n    TRADE_ACTION_REMOVE                                  = 4; // Delete the pending order placed previously\n    TRADE_ACTION_CLOSE_BY                                = 5; // Close a position by an opposite one\n}\n")),Object(a.b)("h2",{id:"trade-transaction-types"},Object(a.b)("inlineCode",{parentName:"h2"},"Trade Transaction Types")),Object(a.b)("h3",{id:"enum_trade_transaction_type"},"ENUM_TRADE_TRANSACTION_TYPE"),Object(a.b)("p",null,"When performing some definite actions on a trade account, its state changes. Such actions include:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Sending a trade request from any client application;"),Object(a.b)("li",{parentName:"ul"},"Pending orders and stop orders activation on the server;"),Object(a.b)("li",{parentName:"ul"},"Performing operations on a trade server side.")),Object(a.b)("p",null,"The following trade transactions are performed as a result of these actions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"handling a trade request;"),Object(a.b)("li",{parentName:"ul"},"changing open orders;"),Object(a.b)("li",{parentName:"ul"},"changing orders history;"),Object(a.b)("li",{parentName:"ul"},"changing deals history;"),Object(a.b)("li",{parentName:"ul"},"changing positions.")),Object(a.b)("p",null,"For example, when sending a market buy order, it is handled, an appropriate buy order is created for the account, the order is then executed and removed from the list of the open ones, then it is added to the orders history, an appropriate deal is added to the history and a new position is created. All these actions are trade transactions."),Object(a.b)("p",null,"To let a programmer to track the actions performed in relation to a trade account, ",Object(a.b)("inlineCode",{parentName:"p"},"OnTradeTransaction")," function has been provided. This handler allows to get trade transactions applied to an account. Trade transaction description is submitted in ",Object(a.b)("inlineCode",{parentName:"p"},"OnTradeTransaction")," first parameter using ",Object(a.b)("inlineCode",{parentName:"p"},"TradeTransaction")," structure."),Object(a.b)("p",null,"Trade transaction type is submitted in the type parameter of ",Object(a.b)("inlineCode",{parentName:"p"},"TradeTransaction")," structure. Possible types of trade transactions are described by the following enumeration:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-protobuf"}),"enum ENUM_TRADE_TRANSACTION_TYPE {\n    TRADE_TRANSACTION_ORDER_ADD                            = 0; // Adding a new open order.\n    TRADE_TRANSACTION_ORDER_UPDATE                         = 1; // Updating an open order. The updates include not only evident changes from the client or a trade server sides but also changes of an order state when setting it (for example, transition from ORDER_STATE_STARTED to ORDER_STATE_PLACED or from ORDER_STATE_PLACED to ORDER_STATE_PARTIAL, etc.).\n    TRADE_TRANSACTION_ORDER_DELETE                         = 2; // Removing an order from the list of the open ones. An order can be deleted from the open ones as a result of setting an appropriate request or execution (filling) and moving to the history.\n    TRADE_TRANSACTION_DEAL_ADD                             = 3; // Updating a deal in the history. There may be cases when a previously executed deal is changed on a server. For example, a deal has been changed in an external trading system (exchange) where it was previously transferred by a broker.\n    TRADE_TRANSACTION_DEAL_UPDATE                          = 4; // Deleting a deal from the history. There may be cases when a previously executed deal is deleted from a server. For example, a deal has been deleted in an external trading system (exchange) where it was previously transferred by a broker.\n    TRADE_TRANSACTION_DEAL_DELETE                          = 5; // Adding an order to the history as a result of execution or cancellation.\n    TRADE_TRANSACTION_HISTORY_ADD                          = 6; // Changing an order located in the orders history. This type is provided for enhancing functionality on a trade server side.\n    TRADE_TRANSACTION_HISTORY_UPDATE                       = 7; // Deleting an order from the orders history. This type is provided for enhancing functionality on a trade server side.\n    TRADE_TRANSACTION_HISTORY_DELETE                       = 9; // Changing a position not related to a deal execution. This type of transaction shows that a position has been changed on a trade server side. Position volume, open price, Stop Loss and Take Profit levels can be changed. Data on changes are submitted in MqlTradeTransaction structure via OnTradeTransaction handler. Position change (adding, changing or closing), as a result of a deal execution, does not lead to the occurrence of TRADE_TRANSACTION_POSITION transaction.\n    TRADE_TRANSACTION_POSITION                             = 10; // The deal was executed after the split (price reduction) of an instrument, which had an open position during split announcement\n    TRADE_TRANSACTION_REQUEST                              = 11; // Notification of the fact that a trade request has been processed by a server and processing result has been received. Only type field (trade transaction type) must be analyzed for such transactions in MqlTradeTransaction structure. The second and third parameters of OnTradeTransaction (request and result) must be analyzed for additional data.\n}\n")))}c.isMDXComponent=!0}}]);
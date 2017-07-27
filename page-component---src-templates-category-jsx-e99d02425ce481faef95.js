webpackJsonp([0x60c514a9e0d88800],{"./node_modules/react-md/lib/Media/index.js":function(e,t,n){var r,o,a;!function(i,s){o=[t,n("./node_modules/react-md/lib/Media/Media.js"),n("./node_modules/react-md/lib/Media/MediaOverlay.js")],r=s,a="function"==typeof r?r.apply(t,o):r,!(void 0!==a&&(e.exports=a))}(this,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.MediaOverlay=e.Media=void 0;var o=r(t),a=r(n);e.default=o.default,e.Media=o.default,e.MediaOverlay=a.default})},"./src/components/PostListing/PostListing.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("./node_modules/react/react.js"),u=r(l),d=n("./src/components/PostPreview/PostPreview.jsx"),c=r(d),f=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"getPostList",value:function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e}},{key:"render",value:function(){var e=this.getPostList();return u.default.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},u.default.createElement("div",{className:"md-grid md-cell--8 mobile-fix"},e.map(function(e){return u.default.createElement(c.default,{key:e.title,postInfo:e})})))}}]),t}(u.default.Component);t.default=f,e.exports=t.default},"./src/components/PostPreview/PostPreview.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("./node_modules/react/react.js"),u=r(l),d=n("./node_modules/react-md/lib/Cards/Card.js"),c=r(d),f=n("./node_modules/react-md/lib/Cards/CardTitle.js"),p=r(f),m=n("./node_modules/react-md/lib/Buttons/index.js"),b=r(m),y=n("./node_modules/react-md/lib/Avatars/index.js"),h=r(y),g=n("./node_modules/react-md/lib/Cards/CardText.js"),v=r(g),_=n("./node_modules/react-md/lib/FontIcons/index.js"),j=r(_),P=n("./node_modules/gatsby-link/index.js"),w=r(P),x=n("./node_modules/react-md/lib/Media/index.js"),O=r(x),E=n("./src/components/PostTags/PostTags.jsx"),M=r(E);n("./src/components/PostPreview/PostPreview.scss");var k=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={mobile:!0},n.handleResize=n.handleResize.bind(n),n}return i(t,e),s(t,[{key:"componentDidMount",value:function(){this.handleResize(),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})}},{key:"render",value:function(){var e=this.props.postInfo,t=this.state.mobile,n=t,r=e.cover.startsWith("/")?"/gatsby-material-starter"+e.cover:e.cover,o=t?162:225;return u.default.createElement(c.default,{key:e.path,raise:!0,className:"md-grid md-cell md-cell--12"},u.default.createElement(w.default,{style:{textDecoration:"none"},to:e.path},u.default.createElement(O.default,{style:{backgroundImage:"url("+r+")",height:o+"px"},className:"post-preview-cover"},u.default.createElement(x.MediaOverlay,null,u.default.createElement(p.default,{title:e.title},u.default.createElement(b.default,{raised:!0,secondary:!0,className:"md-cell--right"},"Read"))))),u.default.createElement(p.default,{expander:n,avatar:u.default.createElement(h.default,{icon:u.default.createElement(j.default,{iconClassName:"fa fa-calendar"})}),title:"Published on "+e.date,subtitle:e.timeToRead+" min read"}),u.default.createElement(v.default,{expandable:n},e.excerpt,u.default.createElement(M.default,{tags:e.tags})))}}]),t}(l.Component);t.default=k,e.exports=t.default},"./src/components/PostPreview/PostPreview.scss":function(e,t){},'./node_modules/babel-loader/lib/index.js?{"plugins":["/home/ruben/Git/gatsby-starter-material/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/ruben/Git/gatsby-starter-material/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/ruben/Git/gatsby-starter-material/node_modules/babel-plugin-lodash/lib/index.js","/home/ruben/Git/gatsby-starter-material/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/ruben/Git/gatsby-starter-material/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/home/ruben/Git/gatsby-starter-material/node_modules/babel-preset-env/lib/index.js","/home/ruben/Git/gatsby-starter-material/node_modules/babel-preset-stage-0/lib/index.js","/home/ruben/Git/gatsby-starter-material/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/category.jsx':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.pageQuery=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("./node_modules/react/react.js"),u=r(l),d=n("./node_modules/react-helmet/lib/Helmet.js"),c=r(d),f=n("./src/components/PostListing/PostListing.jsx"),p=r(f),m=n("./data/SiteConfig.js"),b=r(m),y=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props.pathContext.category,t=this.props.data.allMarkdownRemark.edges;return u.default.createElement("div",{className:"category-container"},u.default.createElement(c.default,{title:'Posts in category "'+e+'" | '+b.default.siteTitle}),u.default.createElement(p.default,{postEdges:t}))}}]),t}(u.default.Component);t.default=y;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=page-component---src-templates-category-jsx-e99d02425ce481faef95.js.map
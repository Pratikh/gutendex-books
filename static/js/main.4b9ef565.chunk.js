(this["webpackJsonpgutendex-books"]=this["webpackJsonpgutendex-books"]||[]).push([[0],{49:function(e,t,a){},62:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(0),s=a(41),o=a.n(s),r=a(19),c=(a(49),a(12)),l=a(13),u=a(10),h=a(15),d=a(14),p=(a(29),a(16)),b=a.n(p),m=a(2),j=(a(62),a(9)),v={Fiction:a.p+"static/media/Fiction.c794b5b6.svg",Drama:a.p+"static/media/Drama.0e522682.svg",Humour:a.p+"static/media/Humour.3f583231.svg",Politics:a.p+"static/media/Politics.d65dec50.svg",History:a.p+"static/media/History.7ab22bf1.svg",Adventure:a.p+"static/media/Adventure.74038d3e.svg",Philosophy:a.p+"static/media/Philosophy.4ec2f970.svg",Next:a.p+"static/media/Next.b3e690a6.svg"};function f(e){var t=e.items,a=e.onSelect;return Object(n.jsx)("div",{style:{padding:"10px",margin:"10px"},children:t.map((function(e){return Object(n.jsxs)("div",{className:"categoryList",onClick:function(){return a(e)},children:[Object(n.jsx)("div",{className:"categoryIcon",style:{backgroundImage:"url(".concat(v[e],")")}}),Object(n.jsx)("h5",{children:e.toLocaleUpperCase()}),Object(n.jsx)("div",{className:"next",style:{backgroundImage:"url(".concat(v.Next,")")}})]},"/books/".concat(e))}))})}var k=function(e){var t=e.setGenre;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{className:"title",children:j.page_tittle}),Object(n.jsx)("h2",{className:"subTitle",children:j.sub_title}),Object(n.jsx)(f,{items:j.category,onSelect:t})]})},g=a(28),x=a(17),O=a.n(x),y=a(27),B=a(24),S=a(7),N=a.n(S),C=a(23),H=a.n(C),I=a(42),w=(a(83),a.p+"static/media/Back.98344a95.svg"),L=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),n=t.call(this,e),N.a.bindAll(Object(u.a)(n),"onValueInpute"),n}return Object(l.a)(a,[{key:"onValueInpute",value:function(e){var t=e.target.value;this.props.onChange(t),e.preventDefault()}},{key:"render",value:function(){return Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(n.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.props.navigateBack,style:{backgroundImage:w},children:"Back"}),Object(n.jsx)("form",{className:"form-inline my-2 my-lg-0 d-inline-block align-top",children:Object(n.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:this.onValueInpute})})]})}}]),a}(i.Component),T=(a(84),function(e){var t=e.img,a=e.title,i=e.author;return Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:t,alt:a+" image",className:"bookImage"}),Object(n.jsxs)("div",{className:"details",children:[Object(n.jsx)("h2",{className:"bookData",children:a}),Object(n.jsx)("p",{className:"bookData",children:i})]})]})});function D(e){var t=e.tileData,a=e.onClickGridItem;return Object(n.jsx)("div",{className:"bookMainGridWrapper",children:t.map((function(e){return Object(n.jsx)("div",{onClick:function(){return a(e)},className:"detailsContainer",children:Object(n.jsx)(T,{img:e.img,title:e.title,author:e.author})},e.title+e.author+e.id)}))})}var G=Object(I.setupCache)({maxAge:9e5}),M=!1,A=H.a.create({adapter:G.adapter}),_=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),n=t.call(this,e),N.a.bindAll(Object(u.a)(n),"loadBooksByLink","setSearchTextHandler","onSearchHandler","navigateBackHandler","onClickGridItem","addMoreBookTiles"),n.state={error:!1,books:[],next:"",searchText:"",hasMoreData:!0,isLoading:!1,topic:"",openIframe:!1,iframeSrc:"",title:""},n.previousBooks=null,n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){M=!0;var e=this.props.location,t=e.search,a=e.pathname,n=b.a.parse(t),i=n.search,s=n.topic;this.setState({searchText:i,topic:s});var o="".concat(j.api_path).concat(a).concat(t);this.loadBooksByLink(o),this.loadCallback=N.a.debounce(this.addMoreBookTiles,100),this.debouncedSearch=N.a.debounce(this.onSearchHandler,500),document.addEventListener("scroll",this.loadCallback)}},{key:"componentWillUnmount",value:function(){M=!1,document.removeEventListener("scroll",this.loadCallback)}},{key:"addMoreBookTiles",value:function(){var e=this.state,t=e.error,a=e.isLoading,n=e.hasMoreData,i=e.next;t||a||!n||document.documentElement.scrollTop+window.innerHeight>=document.documentElement.offsetHeight&&this.loadBooksByLink(i)}},{key:"loadBooksByLink",value:function(){var e=Object(B.a)(O.a.mark((function e(t){var a,n,i,s,o,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.isLoading){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,this.setState({isLoading:!0}),e.next=6,A.get(t);case 6:a=e.sent,n=a.data,i=n.results,s=n.next,o=i.filter((function(e){return!!e.formats["image/jpeg"]})),r=N.a.map(o,(function(e){var t=e.title,a=e.authors,n=e.id,i=e.formats;return{title:t,author:a[0]?a[0].name:"No authors",id:n,formats:i,img:i["image/jpeg"]}})),M&&this.setState({next:s,hasMoreData:!!s,books:[].concat(Object(y.a)(this.state.books),Object(y.a)(r)),isLoading:!1}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),this.setState({error:e.t0.message,isLoading:!1});case 16:case"end":return e.stop()}}),e,this,[[2,13]])})));return function(t){return e.apply(this,arguments)}}()},{key:"setSearchTextHandler",value:function(e){this.setState({searchText:e}),this.debouncedSearch()}},{key:"onSearchHandler",value:function(){var e=this.props.location,t=e.search,a=e.pathname,n=Object(g.a)(Object(g.a)({},b.a.parse(t)),{},{search:this.state.searchText});this.previousBooks||(this.previousBooks=N.a.clone(this.state.books)),this.setState({books:[]}),this.loadBooksByLink("".concat(j.api_path).concat(a,"?").concat(b.a.stringify(n)))}},{key:"navigateBackHandler",value:function(){if(this.state.openIframe)this.setState({openIframe:!1,title:""});else if(this.previousBooks)this.setState({books:this.previousBooks});else{this.props.history.push("/")}this.previousBooks=null}},{key:"onClickGridItem",value:function(){var e=Object(B.a)(O.a.mark((function e(t){var a,n,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.formats,n=t.title,i=null,N.a.forEach(j.extensions,(function(e){var t=N.a.find(N.a.keys(a),(function(t){return N.a.includes(t,e)}));if(t)return i=a[t],!1})),this.setState({iframeSrc:i,openIframe:!0,title:n});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.books,i=e.error,s=e.topic,o=e.hasMoreData,r=e.searchText,c=e.openIframe,l=e.iframeSrc,u=e.title;return i&&alert(i),Object(n.jsxs)("div",{children:[Object(n.jsx)(L,{navigateBack:this.navigateBackHandler,onChange:this.setSearchTextHandler,searchText:r}),Object(n.jsx)("h1",{children:s+" "+u}),c&&Object(n.jsx)("iframe",{title:"myfame",src:l}),Object(n.jsx)(D,{tileData:a,onClickGridItem:this.onClickGridItem}),t&&Object(n.jsx)("div",{className:"loaderContainer",children:Object(n.jsx)("div",{className:"loader"})}),!o&&!t&&Object(n.jsx)("div",{children:"All books loaded..."})]})}}]),a}(i.Component),P=Object(m.e)(_),E=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).pushGenrebinded=n.pushGenreToHistory.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"pushGenreToHistory",value:function(e){var t={topic:e,mime_type:"image/jpeg"},a=b.a.stringify(t);this.props.history.push("/books?".concat(a))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a,{exact:!0,path:"/",component:function(){return Object(n.jsx)(k,{setGenre:e.pushGenrebinded})}}),Object(n.jsx)(m.a,{path:"/books",component:function(){return Object(n.jsx)(P,{})}})]})}}]),a}(i.Component),F=Object(m.e)(E);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(n.jsx)(r.a,{children:Object(n.jsx)(F,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e){e.exports=JSON.parse('{"page_tittle":"Gutenberg Project","sub_title":"A social cataloging website that allows you to freely search its database of books annotations, and reviews.","api_path":"http://skunkworks.ignitesol.com:8000","category":["Fiction","Drama","Humour","Politics","History","Adventure","Philosophy"],"extensions":["text/html","application/pdf","text/plain; charset=utf-8:"]}')}},[[89,1,2]]]);
//# sourceMappingURL=main.4b9ef565.chunk.js.map
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(30),o=a.n(s),l=a(35),c=a(10),i=a(11),u=a(13),d=a(12),m=a(8),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={},r}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"homebox"},n.a.createElement("div",{className:"home"},n.a.createElement("h5",{className:"text-danger pt-3 ml-3"},"Welcome to Our Company Z"),n.a.createElement("h6",{className:"text-dark pt-3 ml-3"},"About Us"),n.a.createElement("div",{className:"border rounded ml-3",style:{width:"50%"}},n.a.createElement("p",{className:"text-dark pt-3 ml-5 mr-3 "},"A web-application that offers the client users to select a particular job (either by selecting a job name from a list of job-names (obtained from the company X) in ",n.a.createElement("b",null,"Get All Jobs")," ","page or by doing a search for a job with a particular name supplied by the user in ",n.a.createElement("b",null,"Search")," page.")))))}}]),a}(r.Component),p=a(111),f=a(72),b=a(108),g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).handleLogout=function(e){localStorage.removeItem("userId"),localStorage.removeItem("session_token"),r.props.history.push("/")},r.state={},r}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"header"},n.a.createElement(p.a,{className:"navHeader bg-primary mt-3",expand:"lg"},n.a.createElement(p.a.Brand,{className:"text-light font-weight-bold",href:"/"},"Home"),n.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"text-light font-weight-bold"},"Menu"),n.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(f.a,null,n.a.createElement(f.a.Link,{className:"text-light font-weight-bold",href:"/search"},"Search"),n.a.createElement(f.a.Link,{className:"text-light font-weight-bold",href:"/getAll"},"Get All Jobs")),localStorage.session_token?n.a.createElement(b.a,{className:"text-light ml-auto mr-2",onClick:this.handleLogout,variant:""},n.a.createElement("i",{className:"fas fa-sign-out-alt"})):null))))}}]),a}(r.Component),v=Object(m.g)(g),E=a(5),y=a.n(E),j=a(23),k=a(14),O=a(34),N=a(15),x=a.n(N),w=a(110),M=a(9),S=a.n(M),C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).handleLoadingClose=function(e){r.setState({loading:!1})},r.onChange=function(e){var t;r.setState((t={errorMsg:""},Object(O.a)(t,e.target.name,e.target.value),Object(O.a)(t,"validationErrorFlag",!1),t))},r.onSearch=function(e){e.preventDefault();var t=r.state.search;(t=t.trim())?r.apiCall(t):r.setState({errorMsg:S.a[7],tableFlag:!1,loading:!1})},r.state={jobpart:[],search:"",tableFlag:!1,errorMsg:"",loading:!1},r}return Object(i.a)(a,[{key:"apiCall",value:function(){var e=Object(k.a)(y.a.mark((function e(t){var a=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,x.a.get("https://qvysii6xyi.execute-api.us-east-1.amazonaws.com/companyX?jobName=".concat(t)).then((function(e){a.setState({loading:!1});var t,r=[];if((t=e.data)&&t.length){var n,s=Object(j.a)(t);try{var o=function(){var e=n.value;r&&r.length>0&&r.find((function(t){return t.jobName===e.jobName}))||r.push(e)};for(s.s();!(n=s.n()).done;)o()}catch(l){s.e(l)}finally{s.f()}a.setState({jobpart:r,tableFlag:!0,errorMsg:"",loading:!1})}else a.setState({errorMsg:S.a[10],loading:!1})})).catch((function(e){e.response?a.setState({tableFlag:!1,errorMsg:e.response.data.error,loading:!1}):a.setState({tableFlag:!1,errorMsg:S.a[4],loading:!1})}));case 3:return e.next=5,x.a.post("https://compzbackend-bzedu2xpga-uc.a.run.app/api/jobs/".concat(this.state.search));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"searchResults",value:function(){return n.a.createElement("div",null,this.state.tableFlag?n.a.createElement("div",null,n.a.createElement("div",{className:"col-12 col-sm-12 pt-4"},n.a.createElement("table",{className:"table table-hover"},n.a.createElement("thead",{className:"thead"},n.a.createElement("tr",null,n.a.createElement("th",null,"JobName"))),n.a.createElement("tbody",null,this.state.jobpart.map((function(e){return n.a.createElement("tr",{key:Math.random()},n.a.createElement("th",null,n.a.createElement("a",{href:"/login/".concat(e.jobName)},e.jobName)))})))))):n.a.createElement("div",null),n.a.createElement(w.a,{show:this.state.loading,onHide:this.handleLoadingClose,centered:!0},n.a.createElement(w.a.Header,{closeButton:!0},n.a.createElement(w.a.Title,null,"Loading")),n.a.createElement(w.a.Body,null,"The details are loading please wait...."),n.a.createElement(w.a.Footer,null,n.a.createElement(b.a,{variant:"secondary",onClick:this.handleLoadingClose},"Close"))))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"search pt-3 ml-3"},n.a.createElement("p",{className:"error-msg",style:{color:"red"}},this.state.errorMsg?this.state.errorMsg:null),n.a.createElement("h4",{className:"search pt-3 ml-3 text-dark font-weight-bold",style:{fontFamily:"Sans"}},"Search page"),n.a.createElement("div",{className:"border rounded pt-1 ml-3",style:{width:"20%"}},n.a.createElement("form",null,n.a.createElement("input",{type:"text",placeholder:"Search",className:"mr-sm-2",name:"search",value:this.state.search,onChange:this.onChange,style:{border:"2px solid red",borderRadius:"4px"}}),n.a.createElement(b.a,{type:"submit",variant:"outline-success",onClick:this.onSearch},"Search"))),this.searchResults()))}}]),a}(r.Component),I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).handleLoadingClose=function(e){r.setState({loading:!1})},r.state={jobparts:[],loading:!0,errorMsg:""},r}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(y.a.mark((function e(){var t=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://qvysii6xyi.execute-api.us-east-1.amazonaws.com/companyX").then((function(e){var a,r=[];if((a=e.data)&&a.length){var n,s=Object(j.a)(a);try{var o=function(){var e=n.value;r&&r.length>0&&e&&e.jobName&&r.find((function(t){return t.jobName===e.jobName}))||r.push(e)};for(s.s();!(n=s.n()).done;)o()}catch(l){s.e(l)}finally{s.f()}}t.setState({loading:!1,jobparts:r})})).catch((function(e){t.setState({loading:!1,errorMsg:e.data})}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({loading:!1,errorMsg:e.t0.data});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("div",{className:"col-12 col-sm-12 pt-4"},n.a.createElement("table",{className:"table table-hover"},n.a.createElement("thead",{className:"thead"},n.a.createElement("tr",null,n.a.createElement("th",null,"Jobname"))),n.a.createElement("tbody",null,this.state.jobparts.map((function(e){return n.a.createElement("tr",{key:Math.random()},n.a.createElement("th",null,n.a.createElement("a",{href:"/login/".concat(e.jobName)},e.jobName)))})))))),n.a.createElement(w.a,{show:this.state.loading,onHide:this.handleLoadingClose,centered:!0},n.a.createElement(w.a.Header,{closeButton:!0},n.a.createElement(w.a.Title,null,"Loading")),n.a.createElement(w.a.Body,null,"The details are loading please wait...."),n.a.createElement(w.a.Footer,null,n.a.createElement(b.a,{variant:"secondary",onClick:this.handleLoadingClose},"Close"))))}}]),a}(r.Component),F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;Object(c.a)(this,a),(r=t.call(this,e)).handleChange=function(e){var t;r.setState((t={errorMsg:""},Object(O.a)(t,e.target.name,e.target.value),Object(O.a)(t,"validationErrorFlag",!1),t))},r.onLoginSubmit=function(e){e.preventDefault(),r.setState({validationErrorFlag:!1,errorMsg:""});var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(r.state.email).toLowerCase());if(r.state&&r.state.email&&r.state.password&&r.state!=={}&&""!==r.state.email&&""!==r.state.password){if(!t)return void r.setState({validationErrorFlag:!0,errorMsg:S.a[2]});r.apiCall()}else r.setState({validationErrorFlag:!0,errorMsg:S.a[1]})};var n=r.props.match.params.jobName;return r.state={email:"",password:"",errorMsg:"",jobName:n},localStorage.userId&&localStorage.session_token&&r.props.history.push({pathname:"/homepage",state:{userId:localStorage.userId,jobName:r.state.jobName}}),r}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"apiCall",value:function(){var e=Object(k.a)(y.a.mark((function e(){var t,a=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={password:this.state.password,username:this.state.email},e.next=4,x.a.post("https://compzbackend-bzedu2xpga-uc.a.run.app/api/users",t).then((function(e){200===e.status&&(localStorage.setItem("userId",a.state.email),localStorage.setItem("session_token",e.data),a.props.history.push({pathname:"/homepage",state:{userId:a.state.email,jobName:a.state.jobName}}),a.setState({email:"",password:"",errorMsg:""}))})).catch((function(e){e&&e.response&&e.response.data?a.setState({errorMsg:e.response.data}):a.setState({errorMsg:S.a[4]})}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.setState({errorMsg:e.t0});case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"container pt-4 pb-4"},n.a.createElement("div",{className:"row justify-content-center pt-4"},n.a.createElement("div",{className:"col-12 col-sm-6 col-md-4 pt-4 signup-div border rounded"},n.a.createElement("h3",{className:"registerTitle text-center"},"Login"),n.a.createElement("form",{className:"form-container pt-2 pb-5"},n.a.createElement("p",{className:"error-msg",style:{color:"red"}},this.state.errorMsg?this.state.errorMsg:null),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"}," Email Address "),n.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"email",placeholder:"Enter Email Address",required:!0,onChange:this.handleChange,value:this.state.email})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",className:"form-control",id:"password",name:"password",placeholder:"Password",onChange:this.handleChange,value:this.state.password,required:!0})),n.a.createElement("div",{className:"form-group text-center"},n.a.createElement("button",{onClick:this.onLoginSubmit,type:"submit",className:"btn btn-info btn-centre"},"Login")))))))}}]),a}(r.Component),D=a(48),L=a(112),R=a(109),q=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;Object(c.a)(this,a),(r=t.call(this,e)).handleModalClose=function(e){r.setState({modalFlag:!1}),"1"===r.state.modalRoute?r.props.history.push("/search"):"2"===r.state.modalRoute&&r.setState({errorMsg:r.state.modalMsg,modalMsg:"",modalRoute:0,modalFlag:!1})},r.onOrder=function(e){e.preventDefault(),r.setState({errorMsg:"",requestDetails:[],modalRoute:0,modalFlag:!1,modalMsg:""});for(var t,a=[],n=r.state.selected,s=0,o=Object.keys(n);s<o.length;s++)n[t=o[s]]&&a.push(t);if(a&&a.length){r.setState({selectedList:a});var l,c=Object(j.a)(a);try{var i=function(){var e=l.value,t=r.state.jobparts.find((function(t){return t.partId===parseInt(e)}));if(t&&0!==Object.keys(t).length&&t.avlQty<t.reqQty)return r.setState({errorMsg:t.partName+S.a[6]}),{v:void 0}};for(c.s();!(l=c.n()).done;){var u=i();if("object"===typeof u)return u.v}}catch(d){c.e(d)}finally{c.f()}r.orderBackendCall()}else r.setState({errorMsg:S.a[3]})},r.handleLoadingClose=function(e){r.setState({loading:!1})};var n=r.props.orderObj.jobName,s=r.props.orderObj.userId;return r.state={jobparts:[],jobName:n,selected:{},selectedList:[],errorMsg:"",userId:s,loading:!0,modalFlag:!1,modalMsg:"",modalRoute:0,partsFromX:[],requestDetails:[]},r}return Object(i.a)(a,[{key:"getJobDetails",value:function(){var e=Object(k.a)(y.a.mark((function e(t){var a,r=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.state.jobName,e.next=3,x.a.get("https://qvysii6xyi.execute-api.us-east-1.amazonaws.com/companyX?jobName=".concat(a)).then((function(e){var a,n=e.data,s={},o=[],l=[],c=Object(j.a)(n);try{for(c.s();!(a=c.n()).done;){s=a.value;var i={};o.push(s.partId),i.jobName=s.jobName,i.reqQty=s.qty,i.partId=s.partId,l.push(i)}}catch(u){c.e(u)}finally{c.f()}return r.setState({partsFromX:o,jobparts:l}),t(1)})).catch((function(e){r.setState({loading:!1,errorMsg:S.a[5]})}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPartDetails",value:function(){var e=Object(k.a)(y.a.mark((function e(){var t,a,r,n,s,o,l=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.partsFromX,a=[],r=this.state.jobparts,!t||!t.length){e.next=20;break}n=Object(j.a)(t),e.prev=5,o=y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.value,e.next=3,x.a.get("https://us-central1-cloudprojects-279901.cloudfunctions.net/companyy/parts/".concat(t)).then((function(e){if(0!==Object.keys(e).length){var n=r.find((function(e){return e.partId===parseInt(t)})),s=e.data[0];n.partName=s.partName,n.avlQty=s.qoh,a.push(n)}l.setState({jobparts:a,loading:!1})})).catch((function(e){l.setState({errorMsg:S.a[4],loading:!1,modalFlag:!0,modalMsg:S.a[4]})}));case 3:case"end":return e.stop()}}),e)})),n.s();case 8:if((s=n.n()).done){e.next=12;break}return e.delegateYield(o(),"t0",10);case 10:e.next=8;break;case 12:e.next=17;break;case 14:e.prev=14,e.t1=e.catch(5),n.e(e.t1);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,this,[[5,14,17,20]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(k.a)(y.a.mark((function e(){var t=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getJobDetails((function(e){1===e?t.getPartDetails():t.errorRes("5")}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleCheckbox",value:function(e){var t=Object.assign({},this.state.selected);t[e]=!this.state.selected[e],this.setState({selected:t,errorMsg:""})}},{key:"prepareOrderDetails",value:function(){var e=Object(k.a)(y.a.mark((function e(t){var a,r,n,s,o,l,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],r={},n=this.state.jobparts,s=this.state.selected,o=Object(j.a)(n);try{for(o.s();!(l=o.n()).done;)r=l.value,s[r.partId]&&(c={jobName:r.jobName,partId:r.partId,qty:r.reqQty,userId:this.state.userId,result:"Ordered"},a.push(c))}catch(i){o.e(i)}finally{o.f()}return e.next=8,this.setState({requestDetails:a});case 8:t(200);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateOrderDetailsinZ",value:function(){var e=Object(k.a)(y.a.mark((function e(t,a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("https://compzbackend-bzedu2xpga-uc.a.run.app/api/updateOrder",t).then((function(e){if(200===e.status)return a(200)})).catch((function(e){e.response&&e.response.data?a(e.response.data):a(5)}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"errorRes",value:function(e){e=e&&S.a[e]?S.a[e]:e,this.setState({loading:!1,modalFlag:!0,modalMsg:"The system faced error while placing order. "+e,modalRoute:"2"})}},{key:"checkOrderUser",value:function(){var e=Object(k.a)(y.a.mark((function e(t,a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("https://compzbackend-bzedu2xpga-uc.a.run.app/api/getOrder",t).then((function(e){console.log("res",e),e.data?(console.log("res data",e.data),a(0===e.data.length)):a(!1)})).catch((function(e){a(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"orderBackendCall",value:function(){var e=Object(k.a)(y.a.mark((function e(){var t=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{this.setState({loading:!0}),this.prepareOrderDetails((function(e){var a=t.state.requestDetails;200===e&&a&&a.length?t.checkOrderUser(a,(function(e){e?t.updateOrderDetailsinY(a,(function(e){2===e?t.updateOrderDetailsinZ(a,(function(e){200===e?t.updateOrderDetailsinX(a,(function(e){1===e?t.setState({loading:!1,modalFlag:!0,modalMsg:"The order has been successfully placed and updated in company X and Y",modalRoute:"1"}):t.errorRes(e)})):t.errorRes(e)})):t.errorRes(e)})):t.errorRes("9")})):t.errorRes("5")}))}catch(a){}case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateOrderDetailsinX",value:function(){var e=Object(k.a)(y.a.mark((function e(t,a){var r,n,s,o=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={},n=Object(j.a)(t),e.prev=2,n.s();case 4:if((s=n.n()).done){e.next=10;break}return r=s.value,e.next=8,x.a.post("https://qvysii6xyi.execute-api.us-east-1.amazonaws.com/companyX/order",r).then((function(e){e.data&&e.data.errorMessage&&"2"===e.data.errorMessage?o.setState({errorMsg:S.a[8],loading:!1,modalFlag:!0,modalMsg:S.a[8]}):a(1)})).catch((function(e){e.response&&o.setState({errorMsg:e.response.data.error,loading:!1})}));case 8:e.next=4;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),n.e(e.t0);case 15:return e.prev=15,n.f(),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,12,15,18]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"updateOrderDetailsinY",value:function(){var e=Object(k.a)(y.a.mark((function e(t,a){var r,n,s,o=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={},n=Object(j.a)(t),e.prev=2,n.s();case 4:if((s=n.n()).done){e.next=10;break}return r=s.value,e.next=8,x.a.post("https://us-central1-cloudprojects-279901.cloudfunctions.net/companyy/order",r).then((function(e){200===e.status?a(2):o.setState({errorMsg:S.a[4]})})).catch((function(e){console.log(e),e&&e.response&&e.response.data?a(e.response.data):a(4)}));case 8:e.next=4;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),n.e(e.t0);case 15:return e.prev=15,n.f(),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,12,15,18]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("div",{className:"col-12 col-sm-12 pt-4"},n.a.createElement("form",null,n.a.createElement("p",{className:"error-msg",style:{color:"red"}},this.state.errorMsg?this.state.errorMsg:null),this.state.jobparts.length>0?n.a.createElement("div",null,n.a.createElement("table",{className:"table table-hover"},n.a.createElement("thead",{className:"thead"},n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",null,"Job Name"),n.a.createElement("th",null,"Part Id"),n.a.createElement("th",null,"Part Name"),n.a.createElement("th",null,"Required Quantity"),n.a.createElement("th",null,"Available Quantity"))),n.a.createElement("tbody",null,this.state.jobparts.map((function(t){return n.a.createElement("tr",{key:Math.random()},n.a.createElement("td",null,n.a.createElement("input",{name:"checkbox",type:"checkbox",onChange:function(){return e.handleCheckbox(t.partId)},checked:!0===e.state.selected[t.partId]})),n.a.createElement("td",null,t.jobName),n.a.createElement("td",null,t.partId),n.a.createElement("td",null,t.partName),n.a.createElement("td",null,t.reqQty),n.a.createElement("td",null,t.avlQty))})))),n.a.createElement("div",{className:"form-group text-center"},n.a.createElement("button",{onClick:this.onOrder,type:"submit",className:"btn btn-info btn-centre"},"Order"))):n.a.createElement("p",null,"No parts for this job. Kindly contact company Y to add the details.")))),n.a.createElement(w.a,{show:this.state.loading,onHide:this.handleLoadingClose,centered:!0},n.a.createElement(w.a.Header,{closeButton:!0},n.a.createElement(w.a.Title,null,"Loading")),n.a.createElement(w.a.Body,null,"The details are loading please wait...."),n.a.createElement(w.a.Footer,null,n.a.createElement(b.a,{variant:"secondary",onClick:this.handleLoadingClose},"Close"))),n.a.createElement(w.a,{show:this.state.modalFlag,onHide:this.handleModalClose,centered:!0},n.a.createElement(w.a.Header,{closeButton:!0},n.a.createElement(w.a.Title,null,"Order Result")),n.a.createElement(w.a.Body,null,this.state.modalMsg),n.a.createElement(w.a.Footer,null,n.a.createElement(b.a,{variant:"secondary",onClick:this.handleModalClose},"Close"))))}}]),a}(r.Component),z=Object(m.g)(q),T=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={searchHistory:[]},r}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(y.a.mark((function e(){var t=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://compzbackend-bzedu2xpga-uc.a.run.app/api/searchhistory").then((function(e){t.setState({searchHistory:e.data})})).catch((function(e){t.setState({errorMsg:S.a[4]})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("p",{className:"error-msg",style:{color:"red"}},this.state.errorMsg?this.state.errorMsg:null),n.a.createElement("div",{className:"col-12 col-sm-12 pt-4"},n.a.createElement("table",{className:"table table-hover"},n.a.createElement("thead",{className:"thead"},n.a.createElement("tr",null,n.a.createElement("th",null,"Jobname"),n.a.createElement("th",null,"Date"),n.a.createElement("th",null,"Time"))),n.a.createElement("tbody",null,this.state.searchHistory.map((function(e){return n.a.createElement("tr",{key:Math.random()},n.a.createElement("th",null,n.a.createElement("a",{href:"/login/".concat(e.jobName)},e.jobName)),n.a.createElement("td",null,e.date),n.a.createElement("td",null,e.time))})))))))}}]),a}(r.Component),H=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={},r}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"notfound"},"The page is not found in the application."))}}]),a}(r.Component),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;if(Object(c.a)(this,a),!(r=t.call(this,e)).props.location.state)return r.props.history.push("/NotFound"),Object(D.a)(r);var n=r.props.location.state.jobName,s=r.props.location.state.userId;return r.state={jobName:n,userId:s},r}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){if(this.state){var e={jobName:this.state.jobName,userId:this.state.userId};return n.a.createElement("div",null,n.a.createElement(L.a,{defaultActiveKey:"orderPage",id:"uncontrolled-tab-example"},n.a.createElement(R.a,{eventKey:"orderPage",title:"Order Page"},n.a.createElement(z,{orderObj:e})),n.a.createElement(R.a,{eventKey:"searchHistory",title:"Search History"},n.a.createElement(T,{userId:this.state.userId}))))}return this.props.history.push("./not-found"),n.a.createElement("div",null,n.a.createElement(H,null))}}]),a}(r.Component),B=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement(v,null)),n.a.createElement("div",{className:"centerContent"},n.a.createElement(m.d,null,n.a.createElement(m.b,{exact:!0,path:"/",component:h}),n.a.createElement(m.b,{exact:!0,path:"/search",render:function(e){return n.a.createElement(C,e)}}),n.a.createElement(m.b,{path:"/getAll",render:function(e){return n.a.createElement(I,e)}}),n.a.createElement(m.b,{path:"/login/:jobName",render:function(e){return n.a.createElement(F,e)}}),n.a.createElement(m.b,{path:"/homepage",render:function(e){return n.a.createElement(A,e)}}),n.a.createElement(m.b,{path:"/not-found",render:function(e){return n.a.createElement(H,e)}}),n.a.createElement(m.a,{to:"/not-found"}))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(17),J=Object(P.a)();o.a.render(n.a.createElement(l.a,{history:J},n.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){e.exports=a(106)},9:function(e,t){e.exports={1:"Mandatory fields are missing",2:"Email address is not valid.",3:"Please select at least one part to place order",4:"The application faced network issue. Please contact support team for immediate assistance.",5:"The application faced unexpected exception while fetching job details. Please contact support.",6:" part is out of stock. Order cannot be placed right now. Please try after sometime.",7:"Search field is empty. Kindly enter a jobname to search.",8:"partorders table with jobName, partId, and userId combination already exists",9:"User has already ordered the part",10:"Job name does not match with the data. Try get all page to select the job."}}},[[74,1,2]]]);
//# sourceMappingURL=main.a6194a7f.chunk.js.map
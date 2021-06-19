(self.webpackChunkmattermost_webapp=self.webpackChunkmattermost_webapp||[]).push([[637],{64652:(e,t,a)=>{"use strict";a.d(t,{Z:()=>w});var s=a(37703),i=a(14890),d=a(33383),l=a(12707),n=a(9276),o=a(74935),c=a(45697),r=a.n(c),u=(a(33948),a(15306),a(23123),a(73210),a(67294)),h=a(50049),p=a(44012),f=a(74806),m=a(82251);const g=(0,h.vU)({sessionRevoked:{id:(0,m.t)("audit_table.sessionRevoked"),defaultMessage:"The session with id {sessionId} was revoked"},channelCreated:{id:(0,m.t)("audit_table.channelCreated"),defaultMessage:"Created the {channelName} channel"},establishedDM:{id:(0,m.t)("audit_table.establishedDM"),defaultMessage:"Established a direct message channel with {username}"},nameUpdated:{id:(0,m.t)("audit_table.nameUpdated"),defaultMessage:"Updated the {channelName} channel name"},headerUpdated:{id:(0,m.t)("audit_table.headerUpdated"),defaultMessage:"Updated the {channelName} channel header"},channelDeleted:{id:(0,m.t)("audit_table.channelDeleted"),defaultMessage:"Archived the channel with the URL {url}"},userAdded:{id:(0,m.t)("audit_table.userAdded"),defaultMessage:"Added {username} to the {channelName} channel"},userRemoved:{id:(0,m.t)("audit_table.userRemoved"),defaultMessage:"Removed {username} to the {channelName} channel"},attemptedRegisterApp:{id:(0,m.t)("audit_table.attemptedRegisterApp"),defaultMessage:"Attempted to register a new OAuth Application with ID {id}"},attemptedAllowOAuthAccess:{id:(0,m.t)("audit_table.attemptedAllowOAuthAccess"),defaultMessage:"Attempted to allow a new OAuth service access"},successfullOAuthAccess:{id:(0,m.t)("audit_table.successfullOAuthAccess"),defaultMessage:"Successfully gave a new OAuth service access"},failedOAuthAccess:{id:(0,m.t)("audit_table.failedOAuthAccess"),defaultMessage:"Failed to allow a new OAuth service access - the redirect URI did not match the previously registered callback"},attemptedOAuthToken:{id:(0,m.t)("audit_table.attemptedOAuthToken"),defaultMessage:"Attempted to get an OAuth access token"},successfullOAuthToken:{id:(0,m.t)("audit_table.successfullOAuthToken"),defaultMessage:"Successfully added a new OAuth service"},oauthTokenFailed:{id:(0,m.t)("audit_table.oauthTokenFailed"),defaultMessage:"Failed to get an OAuth access token - {token}"},attemptedLogin:{id:(0,m.t)("audit_table.attemptedLogin"),defaultMessage:"Attempted to login"},authenticated:{id:(0,m.t)("audit_table.authenticated"),defaultMessage:"Successfully authenticated"},successfullLogin:{id:(0,m.t)("audit_table.successfullLogin"),defaultMessage:"Successfully logged in"},failedLogin:{id:(0,m.t)("audit_table.failedLogin"),defaultMessage:"FAILED login attempt"},updatePicture:{id:(0,m.t)("audit_table.updatePicture"),defaultMessage:"Updated your profile picture"},updateGeneral:{id:(0,m.t)("audit_table.updateGeneral"),defaultMessage:"Updated the general settings of your account"},attemptedPassword:{id:(0,m.t)("audit_table.attemptedPassword"),defaultMessage:"Attempted to change password"},successfullPassword:{id:(0,m.t)("audit_table.successfullPassword"),defaultMessage:"Successfully changed password"},failedPassword:{id:(0,m.t)("audit_table.failedPassword"),defaultMessage:"Failed to change password - tried to update user password who was logged in through OAuth"},updatedRol:{id:(0,m.t)("audit_table.updatedRol"),defaultMessage:"Updated user role(s) to "},member:{id:(0,m.t)("audit_table.member"),defaultMessage:"member"},accountActive:{id:(0,m.t)("audit_table.accountActive"),defaultMessage:"Account activated"},accountInactive:{id:(0,m.t)("audit_table.accountInactive"),defaultMessage:"Account deactivated"},by:{id:(0,m.t)("audit_table.by"),defaultMessage:" by {username}"},byAdmin:{id:(0,m.t)("audit_table.byAdmin"),defaultMessage:" by an admin"},sentEmail:{id:(0,m.t)("audit_table.sentEmail"),defaultMessage:"Sent an email to {email} to reset your password"},attemptedReset:{id:(0,m.t)("audit_table.attemptedReset"),defaultMessage:"Attempted to reset password"},successfullReset:{id:(0,m.t)("audit_table.successfullReset"),defaultMessage:"Successfully reset password"},updateGlobalNotifications:{id:(0,m.t)("audit_table.updateGlobalNotifications"),defaultMessage:"Updated your global notification settings"},attemptedWebhookCreate:{id:(0,m.t)("audit_table.attemptedWebhookCreate"),defaultMessage:"Attempted to create a webhook"},succcessfullWebhookCreate:{id:(0,m.t)("audit_table.successfullWebhookCreate"),defaultMessage:"Successfully created a webhook"},failedWebhookCreate:{id:(0,m.t)("audit_table.failedWebhookCreate"),defaultMessage:"Failed to create a webhook - bad channel permissions"},attemptedWebhookDelete:{id:(0,m.t)("audit_table.attemptedWebhookDelete"),defaultMessage:"Attempted to delete a webhook"},successfullWebhookDelete:{id:(0,m.t)("audit_table.successfullWebhookDelete"),defaultMessage:"Successfully deleted a webhook"},failedWebhookDelete:{id:(0,m.t)("audit_table.failedWebhookDelete"),defaultMessage:"Failed to delete a webhook - inappropriate conditions"},logout:{id:(0,m.t)("audit_table.logout"),defaultMessage:"Logged out of your account"},verified:{id:(0,m.t)("audit_table.verified"),defaultMessage:"Successfully verified your email address"},revokedAll:{id:(0,m.t)("audit_table.revokedAll"),defaultMessage:"Revoked all current sessions for the team"},loginAttempt:{id:(0,m.t)("audit_table.loginAttempt"),defaultMessage:" (Login attempt)"},loginFailure:{id:(0,m.t)("audit_table.loginFailure"),defaultMessage:" (Login failure)"},attemptedLicenseAdd:{id:(0,m.t)("audit_table.attemptedLicenseAdd"),defaultMessage:"Attempted to add new license"},successfullLicenseAdd:{id:(0,m.t)("audit_table.successfullLicenseAdd"),defaultMessage:"Successfully added new license"},failedExpiredLicenseAdd:{id:(0,m.t)("audit_table.failedExpiredLicenseAdd"),defaultMessage:"Failed to add a new license as it has either expired or not yet been started"},failedInvalidLicenseAdd:{id:(0,m.t)("audit_table.failedInvalidLicenseAdd"),defaultMessage:"Failed to add an invalid license"},licenseRemoved:{id:(0,m.t)("audit_table.licenseRemoved"),defaultMessage:"Successfully removed a license"}});class b extends u.PureComponent{componentDidMount(){const e=this.props.audits.map((e=>e.user_id));this.props.actions.getMissingProfilesByIds(e)}render(){const{audits:e,showUserId:t,showIp:a,showSession:s}=this.props,i=[];for(const[d,l]of e.entries()){const e=this.formatAuditInfo(l);let n,o,c;t&&(n=u.createElement("td",{className:"word-break--all"},e.userId)),a&&(o=u.createElement("td",{className:"whitespace--nowrap word-break--all"},e.ip)),s&&(c=u.createElement("td",{className:"whitespace--nowrap word-break--all"},e.sessionId));let r="";-1!==e.desc.toLowerCase().indexOf("fail")&&(r=" color--error"),i[d]=u.createElement("tr",{key:l.id},u.createElement("td",{className:"whitespace--nowrap word-break--all"},e.timestamp),n,u.createElement("td",{className:"word-break--all"+r},e.desc),o,c)}let d,l,n;return t&&(d=u.createElement("th",null,u.createElement(p.Z,{id:"audit_table.userId",defaultMessage:"User ID"}))),a&&(l=u.createElement("th",null,u.createElement(p.Z,{id:"audit_table.ip",defaultMessage:"IP Address"}))),s&&(n=u.createElement("th",null,u.createElement(p.Z,{id:"audit_table.session",defaultMessage:"Session ID"}))),u.createElement("table",{className:"table"},u.createElement("thead",null,u.createElement("tr",null,u.createElement("th",null,u.createElement(p.Z,{id:"audit_table.timestamp",defaultMessage:"Timestamp"})),d,u.createElement("th",null,u.createElement(p.Z,{id:"audit_table.action",defaultMessage:"Action"})),l,n)),u.createElement("tbody",{"data-testid":"auditTableBody"},i))}formatAuditInfo(e){const{formatMessage:t}=this.props.intl,a=e.action.replace(/\/api\/v[1-9]/,"");let s="";if(0===a.indexOf("/channels")){const i=e.extra_info.split(" "),d=i[0].split("=");let l,n="",o="";switch(d.indexOf("name")>=0&&(n=d[d.indexOf("name")+1],l=this.props.getByName(n),o=l?l.display_name:n),a){case"/channels/create":s=t(g.channelCreated,{channelName:o});break;case"/channels/create_direct":l&&(s=t(g.establishedDM,{username:this.props.getDirectTeammate(l.id).username}));break;case"/channels/update":s=t(g.nameUpdated,{channelName:o});break;case"/channels/update_desc":case"/channels/update_header":s=t(g.headerUpdated,{channelName:o});break;default:{let e=[],d="",l="";if(i[1]&&(e=i[1].split("="),e.indexOf("user_id")>=0)){d=e[e.indexOf("user_id")+1];const t=this.props.getUser(d);t&&(l=t.username)}/\/channels\/[A-Za-z0-9]+\/delete/.test(a)?s=t(g.channelDeleted,{url:n}):/\/channels\/[A-Za-z0-9]+\/add/.test(a)?s=t(g.userAdded,{username:l,channelName:o}):/\/channels\/[A-Za-z0-9]+\/remove/.test(a)&&(s=t(g.userRemoved,{username:l,channelName:o}));break}}}else if(0===a.indexOf("/oauth")){const i=e.extra_info.split(" ");switch(a){case"/oauth/register":{const e=i[0].split("=");"client_id"===e[0]&&(s=t(g.attemptedRegisterApp,{id:e[1]}));break}case"/oauth/allow":"attempt"===i[0]?s=t(g.attemptedAllowOAuthAccess):"success"===i[0]?s=t(g.successfullOAuthAccess):"fail - redirect_uri did not match registered callback"===i[0]&&(s=t(g.failedOAuthAccess));break;case"/oauth/access_token":if("attempt"===i[0])s=t(g.attemptedOAuthToken);else if("success"===i[0])s=t(g.successfullOAuthToken);else{const e=i[0].split("-");"fail"===e[0].trim()&&e[1]&&(s=t(g.oauthTokenFailed,{token:e[1].trim()}))}}}else if(0===a.indexOf("/users")){const i=e.extra_info.split(" ");switch(a){case"/users/login":"attempt"===i[0]?s=t(g.attemptedLogin):"success"===i[0]?s=t(g.successfullLogin):"authenticated"===i[0]?s=t(g.authenticated):i[0]&&(s=t(g.failedLogin));break;case"/users/revoke_session":s=t(g.sessionRevoked,{sessionId:i[0].split("=")[1]});break;case"/users/newimage":s=t(g.updatePicture);break;case"/users/update":s=t(g.updateGeneral);break;case"/users/newpassword":"attempted"===i[0]?s=t(g.attemptedPassword):"completed"===i[0]?s=t(g.successfullPassword):"failed - tried to update user password who was logged in through oauth"===i[0]&&(s=t(g.failedPassword));break;case"/users/update_roles":{const e=i[0].split("=")[1];s=t(g.updatedRol),e.trim()?s+=e:s+=t(g.member);break}case"/users/update_active":{const e=i[0].split("=")[0],a=i[0].split("=")[1];if("active"===e){"true"===a?s=t(g.accountActive):"false"===a&&(s=t(g.accountInactive));const e=i[1].split("=");if("session_user"===e[0]){const a=this.props.getUser(e[1]),i=this.props.currentUser;i&&a&&(0,o.$O)(i.roles)?s+=t(g.by,{username:a.username}):i&&a&&(s+=t(g.byAdmin))}}else"session_id"===e&&(s=t(g.sessionRevoked,{sessionId:a}));break}case"/users/send_password_reset":s=t(g.sentEmail,{email:i[0].split("=")[1]});break;case"/users/reset_password":"attempt"===i[0]?s=t(g.attemptedReset):"success"===i[0]&&(s=t(g.successfullReset));break;case"/users/update_notify":s=t(g.updateGlobalNotifications)}}else if(0===a.indexOf("/hooks")){const i=e.extra_info;switch(a){case"/hooks/incoming/create":"attempt"===i?s=t(g.attemptedWebhookCreate):"success"===i?s=t(g.succcessfullWebhookCreate):"fail - bad channel permissions"===i&&(s=t(g.failedWebhookCreate));break;case"/hooks/incoming/delete":"attempt"===i?s=t(g.attemptedWebhookDelete):"success"===i?s=t(g.successfullWebhookDelete):"fail - inappropriate conditions"===i&&(s=t(g.failedWebhookDelete))}}else if(0===a.indexOf("/license")){const i=e.extra_info;switch(a){case"/license/add":"attempt"===i?s=t(g.attemptedLicenseAdd):"success"===i?s=t(g.successfullLicenseAdd):"failed - expired or non-started license"===i?s=t(g.failedExpiredLicenseAdd):"failed - invalid license"===i&&(s=t(g.failedInvalidLicenseAdd));break;case"/license/remove":s=t(g.licenseRemoved)}}else if(0===a.indexOf("/admin/download_compliance_report"))s=(0,o.cv)(e.extra_info);else switch(a){case"/logout":s=t(g.logout);break;case"/verify_email":s=t(g.verified)}if(!s)if(e.extra_info.indexOf("revoked_all=")>=0)s=t(g.revokedAll);else{let t="";a&&-1!==a.lastIndexOf("/")&&(t=a.substring(a.lastIndexOf("/")+1).replace("_"," "),t=(0,o.cv)(t));let i="";e.extra_info&&(i=e.extra_info,-1!==i.indexOf("=")&&(i=i.substring(i.indexOf("=")+1))),s=t+" "+i}const i=new Date(e.create_at),d=u.createElement("div",null,u.createElement("div",null,u.createElement(h.Ji,{value:i,day:"2-digit",month:"short",year:"numeric"})),u.createElement("div",null,u.createElement(h.qN,{value:i,hour:"2-digit",minute:"2-digit"}))),l=this.props.getUser(e.user_id);return{timestamp:d,userId:l?l.email:e.user_id,desc:s,ip:e.ip_address,sessionId:e.session_id}}}var k,_,A;k=b,_="propTypes",A={audits:r().array.isRequired,showUserId:r().bool,showIp:r().bool,showSession:r().bool,getUser:r().func.isRequired,getByName:r().func.isRequired,actions:r().shape({getMissingProfilesByIds:r().func.isRequired}).isRequired,getDirectTeammate:r().func.isRequired},_ in k?Object.defineProperty(k,_,{value:A,enumerable:!0,configurable:!0,writable:!0}):k[_]=A;const v=(0,f.ZP)(b),w=(0,s.connect)((function(e){return{currentUser:(0,l.ts)(e),getUser:t=>(0,l.PR)(e,t),getByName:t=>(0,n.ZO)(e,t),getDirectTeammate:t=>(0,o.PR)(e,t)}}),(function(e){return{actions:(0,i.bindActionCreators)({getMissingProfilesByIds:d.C4},e)}}))(v)},13039:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var s=a(45697),i=a.n(s),d=a(67294),l=a(61107),n=a(17621),o=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class r extends d.PureComponent{constructor(e){super(e),c(this,"colorPicker",void 0),c(this,"colorInput",void 0),c(this,"checkClick",(e=>{this.colorPicker.current&&this.colorPicker.current.contains(e.target)||this.setState({isOpened:!1})})),c(this,"togglePicker",(()=>{!this.state.isOpened&&this.colorInput.current&&this.colorInput.current.focus(),this.setState({isOpened:!this.state.isOpened})})),c(this,"handleColorChange",(e=>{this.props.onChange(e.hex)})),c(this,"onChange",(e=>{const t=e.target.value,a=o()(t),s="#"+a.toHex();a.isValid()&&this.props.onChange(s),this.setState({value:t})})),c(this,"onFocus",(e=>{this.setState({focused:!0}),e.target&&e.target.setSelectionRange(1,e.target.value.length)})),c(this,"onBlur",(()=>{const e=this.state.value,t=o()(e),a="#"+t.toHex();t.isValid()?(this.props.onChange(a),this.setState({value:a})):this.setState({value:this.props.value}),this.setState({focused:!1})})),c(this,"onKeyDown",(e=>{"Enter"!==e.key&&" "!==e.key||this.togglePicker()})),this.colorPicker=d.createRef(),this.colorInput=d.createRef(),this.state={focused:!1,isOpened:!1,value:e.value}}static getDerivedStateFromProps(e,t){return t.focused||e.value===t.value?null:{value:e.value}}componentDidUpdate(e,t){const{isOpened:a}=t,{isOpened:s}=this.state;s!==a&&(s?document.addEventListener("click",this.checkClick):document.removeEventListener("click",this.checkClick))}render(){const{id:e}=this.props,{isOpened:t,value:a}=this.state;return d.createElement("div",{className:"color-input input-group"},d.createElement("input",{id:"".concat(e,"-inputColorValue"),ref:this.colorInput,className:"form-control",type:"text",value:a,onChange:this.onChange,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeyDown,maxLength:7,disabled:this.props.isDisabled}),!this.props.isDisabled&&d.createElement("span",{id:"".concat(e,"-squareColorIcon"),className:"input-group-addon color-pad",onClick:this.togglePicker},d.createElement("i",{id:"".concat(e,"-squareColorIconValue"),className:"color-icon",style:{backgroundColor:a}})),t&&d.createElement("div",{ref:this.colorPicker,className:"color-popover",id:"".concat(e,"-ChromePickerModal")},d.createElement(l.AI,{color:a,onChange:this.handleColorChange,disableAlpha:!0})))}}c(r,"propTypes",{id:i().string.isRequired,onChange:i().func.isRequired,value:i().string.isRequired,isDisabled:i().bool})}}]);
//# sourceMappingURL=637.1c1ffc4a2dc87bca17af.js.map
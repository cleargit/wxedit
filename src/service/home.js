import * as  request from '../util/request';


export function getData(){
   return request.requestToText('https://www.135editor.com/editor_styles/styles?inajax=1&page=1&free=0&fav=fav&filter=.tagtpl-229&sort=favor:desc');
}
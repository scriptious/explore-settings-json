function ExploreSettingsJson() {
  const appdata = StrokesPlus.OS.Shell.ExpandEnvironmentVariables("%APPDATA%");
  const abspath = System.IO.Path.Combine(
    appdata,
    "StrokesPlus.net",
    "StrokesPlus.net.json"
  );
  const title = "StrokesPlus Settings | " + abspath;
  const css = `<style type="text/css">html,body{height:100%;}.jjson-container{height:100%;font-size:13px;line-height:1.2;font-family:monospace;padding-left:0;margin-left:0;overflow-x:hidden;overflow-y:auto}.jjson-container,.jjson-container ul{list-style:none!important}.jjson-container ul{padding:0!important;padding-left:20px!important;margin:0!important}.jjson-container li{position:relative}.jjson-container .array .key,.jjson-container>li>.key{display:none}.jjson-container .array .object .key{display:inline}.jjson-container li:after{content:","}.jjson-container li:last-child:after{content:""}.jjson-container .null{color:#999}.jjson-container .string{color:#4e9a06}.jjson-container .number{color:#a40000}.jjson-container .boolean{color:#c4a000}.jjson-container .key{color:#204a87}.jjson-error{margin:10px;color:#ef3e3e}.jjson-container .expanded{cursor:pointer}.jjson-container .expanded:before{content:"-";font-size:1.2em;width:13px;text-align:center;line-height:13px;font-family:sans-serif;color:#933;position:absolute;left:-15px;top:3px}.jjson-container .collapsed:before{content:"+";font-size:1.1em;color:#000;top:1px}.jjson-container li .collapsed~.close:before{content:"... ";color:#999}.jjson-container .hidden~ul{display:none}.jjson-container span{position:static!important}</style>`;
  const html = `<div class="m-0 p-0 h-100"></div>`;
  const jsonViewer = `<script>
        !function($){'use strict';$.fn.jJsonViewer=function(jjson,options){return this.each(function(){var self=$(this);if(typeof jjson=='string'){self.data('jjson',jjson);}
        else if(typeof jjson=='object'){self.data('jjson',JSON.stringify(jjson))}
        else{self.data('jjson','');}
        new JJsonViewer(self,options);});};function JJsonViewer(self,options){self.html('<ul class="jjson-container"></ul>');try{var json=$.parseJSON(self.data('jjson'));options=$.extend({},this.defaults,options);var expanderClasses=getExpanderClasses(options.expanded);self.find('.jjson-container').append(json2html([json],expanderClasses));}catch(e){self.prepend('<div class="jjson-error" >'+e.toString()+' </div>');self.find('.jjson-container').append(self.data('jjson'));}}
        function getExpanderClasses(expanded){if(!expanded)return'expanded collapsed hidden';return'expanded';}
        function json2html(json,expanderClasses){var html='';for(var key in json){if(!json.hasOwnProperty(key)){continue;}
        var value=json[key],type=typeof json[key];html=html+createElement(key,value,type,expanderClasses);}
        return html;}
        function encode(value){return $('<div/>').text(value).html();}
        function createElement(key,value,type,expanderClasses){var klass='object',open='{',close='}';if($.isArray(value)){klass='array';open='[';close=']';}
        if(value===null){return'<li><span class="key">"'+encode(key)+'": </span><span class="null">"'+encode(value)+'"</span></li>';}
        if(type=='object'){var object='<li><span class="'+expanderClasses+'"></span><span class="key">"'+encode(key)+'": </span> <span class="open">'+open+'</span> <ul class="'+klass+'">';object=object+json2html(value,expanderClasses);return object+'</ul><span class="close">'+close+'</span></li>';}
        if(type=='number'||type=='boolean'){return'<li><span class="key">"'+encode(key)+'": </span><span class="'+type+'">'+encode(value)+'</span></li>';}
        return'<li><span class="key">"'+encode(key)+'": </span><span class="'+type+'">"'+encode(value)+'"</span></li>';}
        
        $(document).on('click','.jjson-container .expanded',function(event){event.preventDefault();event.stopPropagation();var $self=$(this);$self.parent().find('>ul').slideUp(100,function(){$self.addClass('collapsed');});});$(document).on('click','.jjson-container .expanded.collapsed',function(event){event.preventDefault();event.stopPropagation();var $self=$(this);$self.removeClass('collapsed').parent().find('>ul').slideDown(100,function(){$self.removeClass('collapsed').removeClass('hidden');});});JJsonViewer.prototype.defaults={expanded:true};}(window.jQuery);
    </script>`;
  const script = `<script>window.jQuery("body>div").jJsonViewer(${System.IO.File.ReadAllText(
    abspath
  )})</script>`;

  StrokesPlus.Configuration.Settings.ConvertToJSON();
  StrokesPlus.UI.HTMLWindow(
    title,
    css + html + jsonViewer + script,
    "",
    "",
    "",
    true
  );
}

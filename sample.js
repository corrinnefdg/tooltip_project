// JavaScript Document
 
jQuery(document).ready(function($) {
               
                if(typeof $_browser !== 'undefined'){
                               
                                $mclass = $_browser._classNames;
                                //alert( $mclass  );
                }
               
                jQuery.fn.extend({
                               
                                open_dialog:function($url,$notice){
                                               
                                                var notice = ($notice == 'undefined' || $notice == '') ? 'leave' : $notice == 'email' || $notice == 'map' ? $notice : 'leave';
                                                var set_h = notice == 'email' ? 250 : 200;
                                               
                                                var $dialog = $("#dialog-confirm-" + notice).dialog({
                                                                resizable: false,
                                                                height:set_h,
                                                                modal: true,
                                                                autoOpen: false,
                                                                show:{
                                                                                duration:300,
                                                                                effect:'fadeIn'
                                                                },
                                                               
                                                                buttons: {
                                                                                "Proceed": function() {
                                                                                               
                                                                                                if(notice == 'email'){
                                                                                                               
                                                                                                                window.location.href = $url;
                                                                                                               
                                                                                                }else if(notice == 'map'){
                                                                                                               
                                                                                                                $search = $url.replace('map:','');
                                                                                                                $search = $search.replace(/ /gi,'+');
                                                                                                                $search = $search.replace(/,/,'');
                                                                                                                var google = 'https://maps.google.com/maps?q='+ $search +'&hl=en&t=m&z=16';
                                                                                                               
                                                                                                                window.open(google,'_blank');
                                                                                                               
                                                                                                }else{
                                                                                                               
                                                                                                                window.open($url,'_blank');
                                                                                                               
                                                                                                }
                                                                                               
                                                                                                $( this ).dialog( "close" );
                                                                                               
                                                                                },
                                                                                Cancel: function() {
                                                                                               
                                                                                                $( this ).dialog( "close" );
                                                                                               
                                                                                }
                                                                }
                                                });
                                               
                                                $dialog.dialog('open');
                               
                                }
                                               
                });
               
                //global for all links to detect
                //if the user is leaving the site
                                               
                $('a').click(function(e){
                               
                                var $this = $(this);
                                var $url = $this.attr('href');
                                var attr = $this.attr('target');
                                if(!$this.hasClass('nn')){
                                               
                                                var email = $url.match(/mailto/gi);
                                                var map = $url.match(/map:/gi);
                                               
                                                if(email){
                                                               
                                                                $.fn.open_dialog($url,false,'email');
                                                                e.preventDefault();
                                                               
                                                }else if(map){
                                                               
                                                                $.fn.open_dialog($url,'map');
                                                                e.preventDefault();
                                                               
                                                }else if(attr == '_blank'){
                                                               
                                                                $.fn.open_dialog($url);
                                                                e.preventDefault();
                                                }             
                                               
                                }
                               
                });
               
                //MENU
                var $page = $('#main');
                var $nav = $('#main-nav');
                var $login = $('#mLogin');
               
                var optionsPage = {
                               
                                direction:'right',
                                easing:'easeInOutExpo',
                                duration:400
                               
                }
               
                var optionsNav = {
                               
                                direction:'left',
                                easing:'easeInOutExpo',
                                duration:400
                               
                }
               
                var optionsLogin = {
                               
                                easing:'easeInOutExpo',
                                duration:400
                               
                }
               
               
                $('#menu_btn').on('tap', function(){
                               
                                $page.hide('slide',optionsPage);
                               
                                $nav.show('slide',optionsNav);
                               
                                return false;
                               
                });
               
               
                $('#close_menu').on('tap', function(){
                               
                                $page.show('slide',optionsPage);
                               
                                $nav.hide('slide',optionsNav);
                               
                                return false;
                               
                });
               
               
                $('#getLogin').on('tap', function(){
                               
                                $page.hide('slide',optionsPage);
                               
                                $login.animate({left:0},optionsLogin);
                               
                                return false;
                               
                });
               
                $('#close_login').on('tap', function(){
                               
                                $page.show('slide',optionsPage);
                               
                                $login.animate({left:'-100%'},optionsLogin);
                               
                                return false;
                               
                });
               
               
                $nav.on( "swipeleft", function() {
                               
                                $page.show('slide',optionsPage);
                               
                                $nav.hide('slide',optionsNav);
                               
                                return false;
                               
                });
               
});